/**
 * @fileoverview 使用别名代替相对路径
 * @author lzg
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/alias"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("alias", rule, {

    valid: [

        // give me some code that won't trigger a warning
    ],

    invalid: [
        {
            code: "import * as defaultTheme from '../utils/defaultTheme';",
            errors: [{
                message: "Fill me in.",
                type: "Me too"
            }]
        }
    ]
});
