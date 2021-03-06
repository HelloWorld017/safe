/*******************************************************************************
    Copyright (c) 2012-2014, S-Core, KAIST.
    All rights reserved.

    Use is subject to license terms.

    This distribution may include materials developed by third parties.
 ******************************************************************************/

package kr.ac.kaist.jsaf.analysis.typing

import scala.collection.immutable.HashSet
import scala.collection.immutable.HashMap
import scala.collection.mutable.{Set => MSet}
import scala.collection.mutable.{HashSet => MHashSet}
import kr.ac.kaist.jsaf.analysis.typing.domain._
import kr.ac.kaist.jsaf.analysis.typing.models.builtin.{BuiltinError, BuiltinObject}

object Config {
  /**
   * File name.
   */
  var fileName: String = ""
  def setFileName(name: String) = fileName = name

  /**
   * Modeled Files
   */
  var modeledFiles: List[String] = List()
  def setModeledFiles(files: List[String]) = modeledFiles = files
  def getModeledFiles() = modeledFiles

  /**
   * Typing interface.
   */
  var typingInterface: TypingInterface = null
  def setTypingInterface(ti: TypingInterface) = typingInterface = ti

  /**
   * Quiet mode.
   */
  var quietMode = false
  def setQuietMode = quietMode = true

  /**
   * Verbose output.
   * If turned on, all built-in objects and predefined properties of #global will be
   * included when printing analysis results.
   */
  var verbose = 0
  def setVerbose(level: Int) = verbose = level
  val globalVerboseProp: MSet[String] = MHashSet()

  /**
   * Test mode.
   * If turned on, special values, such as value bottom and top, will be provided as
   * predefined global variables.
   */
  var testMode = false
  def setTestMode(flag: Boolean) = testMode = flag
  val testModeProp = HashMap[String, Value](
    ("__BOT", ValueBot),
    ("__TOP", Value(PValueTop)),
    ("__UInt", Value(UInt)),
    ("__Global", Value(GlobalLoc)),
    ("__BoolTop", Value(BoolTop)),
    ("__NumTop", Value(NumTop)),
    ("__StrTop", Value(StrTop)),
    ("__ObjConstLoc", Value(BuiltinObject.ConstLoc)),
    ("__ArrayConstLoc", Value(BuiltinObject.ConstLoc)),
    ("__RefErrLoc", Value(BuiltinError.RefErrLoc)),
    ("__RangeErrLoc", Value(BuiltinError.RangeErrLoc)),
    ("__TypeErrLoc", Value(BuiltinError.TypeErrLoc)),
    ("__URIErrLoc", Value(BuiltinError.URIErrLoc)),
    ("__RefErrProtoLoc", Value(BuiltinError.RefErrProtoLoc)),
    ("__RangeErrProtoLoc", Value(BuiltinError.RangeErrProtoLoc)),
    ("__TypeErrProtoLoc", Value(BuiltinError.TypeErrProtoLoc)),
    ("__URIErrProtoLoc", Value(BuiltinError.URIErrProtoLoc)),
    ("__ErrProtoLoc", Value(BuiltinError.ErrProtoLoc))
  )
  
  /** Library mode.
   * 
   */
  var libMode = false
  def setLibMode(flag: Boolean) = libMode = flag
  val libModeProp = HashMap[String, Value](("<>TopVal<>", LibModeValueTop))
  
  /**
   * Assert flag.
   * If turned on, the program apply the assert semantics while analyzing JavaScript code.
   */
  var assertMode = true
  def setAssertMode(flag: Boolean) = assertMode = flag

  /**
   * PreAnalysis flag.
   */
  var preAnalysis = false
  def setPreAnalysisMode(flag: Boolean) = preAnalysis = flag

  /**
   * LoopSenstiviv flag.
   */
  var loopSensitive = false
  def setLoopSensitiveMode(flag: Boolean) = loopSensitive = flag
  

  /**
   * Context-sensitivity mode
   */
  val Context_Insensitive = 0
  val Context_OneCallsite = 1
  val Context_OneObject = 2
  val Context_OneObjectTAJS = 3
  val Context_OneCallsiteAndObject = 4
  val Context_OneCallsiteOrObject = 5
  val Context_KCallsite = 6
  val Context_KCallsiteAndObject = 7
  val Context_CallsiteSet = 8
  val Context_Identity = 9
  val Context_KCallsiteAndIdentity = 10
  val Context_Loop = 11
  var contextSensitivityMode = Context_OneCallsite
  def setContextSensitivityMode(mode: Int) = contextSensitivityMode = mode

  /**
   * Context-sensitivity depth
   */
  var contextSensitivityDepth = 1
  def setContextSensitivityDepth(depth: Int) = contextSensitivityDepth = depth
  
  /**
   * Context-sensitivity flag for pre-analysis.
   * This flag turns on context-sensitivity for PureLocal object during pre-analysis.
   * The same context-sensitivity as main analysis is used for pre-analysis.
   * For TAJS-style context-sensitivity, this flag has no effect as its precision is
   * not comparable between pre and main analysis.
   * (Equal or strictly less precise context-sensitivity must be used for pre-analysis.)  
   */
  var preContextSensitiveMode = false
  def setPreContextSensitiveMode(flag: Boolean) = preContextSensitiveMode = flag

  /**
   * Unsound flag.
   */
  var unsoundMode = false
  def setUnsoundMode(flag: Boolean) = unsoundMode = flag

  /**
   * NoStop flag.
   */
  var noStopMode = false
  def setNoStopMode(flag: Boolean) = noStopMode = flag

  /**
   * Debug flag for internal checking and statistics.
   */
  val DEBUG = true

  var compare = false
  def setCompareMode(flag: Boolean) = compare = flag
  def setPreTyping(state: State) = preTyping = state
  var preTyping = StateBot
  var preDebug = false
  def setPreDebug(flag: Boolean) = preDebug = flag

  /**
   * DOM mode flag
   */
  var domMode = false
  def setDomMode = domMode = true

  /**
   * Tizen mode flag
   */
  var tizenMode = false
  def setTizenMode = tizenMode = true

  /**
   * jQuery mode flag
   */
  var jqMode = false
  def setJQueryMode = jqMode = true

  /**
   * temporary DOM property update mode flag
   */
  var domPropMode = false
  def setDOMPropMode = domPropMode = true
  
  /**
   * Event Disable mode flag
   */
  var disableEventMode = false
  def setDisableEventMode = disableEventMode = true
  
  var loopMode = false
  def setLoopMode = loopMode = true

  /**
   * WIDL mode flag
   */
  var widlMode = false
  def setWIDLMode = widlMode = true

  /**
   * TS mode flag
   */
  var tsMode = false
  def setTSMode = tsMode = true

  /**
   * compare mode flag for html pre-analysis test
   */
  var compareMode = false
  def setCompareMode = compareMode = true

  /**
   * Loop unrolling count
   */
  var defaultUnrollingCount = 0
  def setDefaultUnrollingCount(unrollingCount: Int) = defaultUnrollingCount = unrollingCount
  var defaultForinUnrollingCount = 0
  def setDefaultForinUnrollingCount(unrollingCount: Int) = defaultForinUnrollingCount = unrollingCount

  /**
   * Console debugger mode
   */
  var debugger = false
  def setDebugger(b: Boolean) = debugger = b
}
