/*******************************************************************************
    Copyright (c) 2012-2014, KAIST, S-Core.
    All rights reserved.

    Use is subject to license terms.

    This distribution may include materials developed by third parties.
 ******************************************************************************/

package kr.ac.kaist.jsaf.concolic

import kr.ac.kaist.jsaf.exceptions.ConcolicError
import kr.ac.kaist.jsaf.interpreter.Interpreter
import kr.ac.kaist.jsaf.scala_src.useful.Options._
import scala.collection.mutable.Stack
import scala.collection.mutable.Queue

class ConstraintExtractor {
  abstract class SymbolicTree 
  case class Node(visited: Boolean, content: Option[ConstraintForm], left: Option[SymbolicTree], right: Option[SymbolicTree], dep: Int) extends SymbolicTree {
    var isVisit = visited
    val constraint = content
    var parents: Option[List[Node]] = None
    var leftChild = left
    var rightChild = right
    
    var branchEnd: Node = null

    var depth = dep

    def setParents(p: List[Node]) = parents = Some(p)
    def getParent = {
      val temp = parents.unwrap
      temp(0)
    }
    def changeParent(from: Node, to: Node) = {
      var temp = parents.unwrap
      for (i <- 0 until temp.length) { 
        if (from.constraint == temp(i).constraint) 
          temp = temp.updated(i, to)
      }
      parents = Some(temp)
    }

    def setBranchEnd(end: Node) = branchEnd = end

    override def toString = "Node with a constraint: "+constraint+", and with visited flag: "+isVisit
  }

  // Initially expanded node would be root.
  var root: SymbolicTree = Node(true, None, None, None, 0)  
  var expanded: Node = null 

  var leaves: Stack[Node] = null
  var unvisited: Queue[Node] = null

  // To distinquish the newly generated information from the exisiting information.
  var previous: List[Node] = null
  var branches: Stack[Node] = null

  var constraints: List[ConstraintForm] = null
  
  var necessaries: List[SymbolicValue] = null

  var debug = false 

  def initialize() = {
    unvisited = new Queue
    root = Node(true, None, None, None, 0)  
  }

  def modify(report: List[SymbolicInfo]) = {
    if (debug) {
      System.out.println("====================== Report ========================")
      System.out.println(report.map(_.toString))
      System.out.println("======================================================")
    }
    var affected = List[SymbolicInfo]()
    constraints = List[ConstraintForm]()

    leaves = Stack(root.asInstanceOf[Node])
    branches = Stack()
    setPrevious(root.asInstanceOf[Node])
    var newlyEnd = 0
    for (info <- report) {
      // Existing information just update the original tree.
      if (matchPrevious(info) && newlyEnd == 0)  
        update(info)
      // New information should be built as a subtree of the original tree.
      else {
        // Newly added branch information should be ended before updating exisiting information.
        if (info.getType == 2) newlyEnd += 1
        if (info.getType == 3) newlyEnd -= 1
        affected = affected :+ info
        insert(info)
      }
    }

    //Remove a node from unvisited queue because it is visited by chance.
    unvisited = unvisited.filterNot(_.isVisit).toQueue

    if (debug) {
      System.out.println("================== Affected Report ===================")
      System.out.println(affected.map(_.toString))
      System.out.println("======================================================")
      System.out.println("============== Symbolic Exeuction Tree ===============")
      printTree(root)
      System.out.println("======================================================")
    }

    extract

  }

  def extract() = {
    if (unvisited.isEmpty) System.out.println("DONE")
    else {
      expanded = unvisited.dequeue
      collect(expanded)

      // Extract only symbolic values that is necessary to explore a chosen branch.
      var targetValues = constraints.filter(_.isBranchConstraint).foldLeft[List[SymbolicValue]](List())((list, constraint) => {
        val temp = list:::constraint.getSymbolicValues 
        temp.distinct
      })
      necessaries = List()
      val assignConstraints = constraints.filterNot(_.isBranchConstraint)
      while (targetValues.nonEmpty) {
        var sv = targetValues.head
        necessaries = necessaries:+sv 

        targetValues = targetValues.tail
        assignConstraints.find(_.getLhs == sv) match {
          case Some(x) => 
            if (x.getRhs.isSome) { 
              val temp = x.getRhs.unwrap.getSymbolicValues:::targetValues
              targetValues = temp.distinct  
            }
          case None =>
        }
      }
      /*constraints = constraints.foldLeft[List[ConstraintForm]](List())((list, cons) => {
        if (necessaries.find(_ == cons.getLhs).isSome)
          list:+cons
        else
          list
      })*/
      necessaries = necessaries.filter(_.isInput)
    }

    if (debug) {
      System.out.println("=================== Expanded Node ====================")
      System.out.println(expanded)
      System.out.println("======================================================")
      System.out.println("==================== Constraints =====================")
      System.out.println(constraints)
      System.out.println("======================================================")
    }
  }

  def collect(node: Node): Unit = {
    if (node.constraint.isSome)
      constraints = node.constraint.unwrap::constraints 
    if (node.parents.isNone)
      return
    else {
      val parents = node.parents.unwrap
      var target = if (parents.length > 1 && !parents(1).isVisit) parents(1) else parents(0)
      collect(target)
    }
  }

  def update(info: SymbolicInfo) = {
    val target = leaves.pop
    var left: Node = null
    var right: Node = null
    info.getType match {
      case 1 => // Statement
        left = target.leftChild.unwrap.asInstanceOf[Node]
        left.depth = target.depth+1
        leaves.push(left)

        setPrevious(left)
      case 2 => // Branch 
        left = target.leftChild.unwrap.asInstanceOf[Node]
        right = target.rightChild.unwrap.asInstanceOf[Node]
        left.depth = target.depth+1
        right.depth = target.depth+1

        var child = if (!info.branchTaken) right else left 
        var previousChild = if (!info.branchTaken) left else right 

        child.isVisit = true 

        leaves.push(child)
        setPrevious(child)
        if (previous.isEmpty) {
          //setPrevious(previousChild)
          findProperPrevious(previousChild)
        }
      case 3 => // End of branch
        var child: Node = null
        if (target.leftChild.isNone && target.rightChild.isNone) {
          child = previous(0) 

          var previousParent = child.getParent

          var depth = previousParent.depth
          if (target.depth > depth) depth = target.depth
          child.depth = depth+1

          if (previousParent.leftChild.isSome) target.rightChild = Some(child)
          else target.leftChild = Some(child)

          if (previousParent.leftChild.isSome) child.setParents(List(previousParent, target))
          else child.setParents(List(target, previousParent))
        }
        else {
          child = 
            if (target.leftChild.isSome) target.leftChild.unwrap.asInstanceOf[Node]
            else target.rightChild.unwrap.asInstanceOf[Node]
        }
        child.depth = target.depth+1
        leaves.push(child)
        setPrevious(child)
    }
  }

  def insert(info: SymbolicInfo): Unit = {
    var cand1 = leaves.pop
    var target = cand1
    if (!target.isVisit)
      throw new ConcolicError("All of adjacent leaves are not visited.")

    var left: Node = null
    var right: Node = null
    info.getType match {
      case 1 => // Statement
        val cond = new ConstraintForm
        cond.makeConstraint(info._id, info._lhs, info._op, info._rhs)
        left = Node(true, Some(cond), None, None, target.depth+1)
        target.leftChild = Some(left)
        left.setParents(List(target))

        leaves.push(left)
      case 2 => // Branch 
        val depth = target.depth+1
        // Put a true branch on the left side, and a false branch on the right side. 
        val visitNode = Node(true, negate(info.branchTaken, info), None, None, depth) 
        val notvisitNode = Node(false, negate(!info.branchTaken, info), None, None, depth)
        left = if (info.branchTaken) visitNode else notvisitNode
        right = if (info.branchTaken) notvisitNode else visitNode

        target.leftChild = Some(left)
        target.rightChild = Some(right)

        left.setParents(List(target))
        right.setParents(List(target))

        leaves.push(visitNode)
        branches.push(visitNode)

        unvisited += notvisitNode
      case 3 => // End of branch
        var depth = cand1.depth
        // cand2 could be null because SymbolicHelper records only if-statements under certain conditions, however records every end-if-statements.
        left = Node(true, None, None, None, depth+1)
        cand1.leftChild = Some(left)
        left.setParents(List(cand1))
        
        if (branches.nonEmpty) {
          var branch = branches.pop
          branch.setBranchEnd(left)
        }

        leaves.push(left)
    }
  }

  def negate(trueBranch: Boolean, info: SymbolicInfo): Option[ConstraintForm] = info._op match {
    case Some(op) =>
      val operator = 
        if (!trueBranch) op match {
          case "<" => Some(">=")
          case "<=" => Some(">")
          case ">" => Some("<=")
          case ">=" => Some("<")
          case "==" => Some("!=")
          case "!=" => Some("==")
          case "===" => Some("!==")
          case "!==" => Some("===")
        }
        else Some(op)
      val cond = new ConstraintForm
      cond.makeConstraint(None, info._lhs, operator, info._rhs) 
      cond.setBranchConstraint
      Some(cond)
    case None => info._lhs match {
      case Some(lhs) =>
        val operator = if (trueBranch) Some("!=") else Some("==")
        // TODO: It should be "true" and "Boolean" instead of "0" and "Number"
        val tmp = new SymbolicValue
        tmp.makeSymbolicValue("0", "Number")
        val cond = new ConstraintForm
        cond.makeConstraint(None, Some(lhs), operator, Some(tmp)) 
        cond.setBranchConstraint
        return Some(cond)
      case None =>
        throw new ConcolicError("The 'lhs' part in the information should be filled in.")
    }
  }

  def setPrevious(node: Node) = {
    previous = List()
    if (node.leftChild.isSome)
      previous = previous :+ node.leftChild.unwrap.asInstanceOf[Node]
    if (node.rightChild.isSome)
      previous = previous :+ node.rightChild.unwrap.asInstanceOf[Node]
  }

  def findProperPrevious(node: Node) = {
    if (node.branchEnd != null)
      previous = List(node.branchEnd) 
  }

  def matchPrevious(info: SymbolicInfo) = {
    // Transform the information to check equality. 
    val cond = info.getType match {
      case 1 => 
        val temp = new ConstraintForm
        temp.makeConstraint(info._id, info._lhs, info._op, info._rhs)
        temp.toString
      case 2 => 
        negate(info.branchTaken, info).unwrap.toString
      case 3 => 
        "" 
    }
    var result = false
    if (previous != null) {
      for (node <- previous) { 
        val temp = 
          if (node.constraint.isSome) node.constraint.unwrap.toString 
          else ""
        if (temp == cond)
          result = true
      }
    }
    result 
  }

  def printTree(tree: SymbolicTree): Unit = {
    val node = tree.asInstanceOf[Node]
    System.out.println(node)
    if (node.leftChild.isSome) {
      for (i <- 0 until node.depth)
        System.out.print("\t")
      printTree(node.leftChild.unwrap) 
    }
    if (node.rightChild.isSome) {
      for (i <- 0 until node.depth)
        System.out.print("\t")
      printTree(node.rightChild.unwrap) 
    }
  }
}
