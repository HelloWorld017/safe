/*******************************************************************************
    Copyright (c) 2012, S-Core.
    All rights reserved.

    Use is subject to license terms.

    This distribution may include materials developed by third parties.
 ***************************************************************************** */

var x;
do {
	x = 123;
	break;
	x = 456;
} while(true)

var __result1 = x;
var __expect1 = 123;
