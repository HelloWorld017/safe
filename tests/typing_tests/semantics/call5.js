/*******************************************************************************
    Copyright (c) 2012, S-Core.
    All rights reserved.

    Use is subject to license terms.

    This distribution may include materials developed by third parties.
 ******************************************************************************/

var x = 1
function g() {
	return x;
};
function f(k) {
	var x = 2;
	return k();
};

var __result1 = f(g);
var __expect1 = 1;