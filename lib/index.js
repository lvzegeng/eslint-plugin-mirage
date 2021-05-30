/**
 * @fileoverview mirage 项目定制的Eslint规则
 * @author lzg
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var requireIndex = require("requireindex");

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------


// import all rules in lib/rules
module.exports.rules = requireIndex(__dirname + "/rules");

module.exports.configs = {
  // 导出自定义规则
  recommended: {
    plugins: ['mirage'],
    rules: {
      'mirage/alias': ['error'],
    },
  },
};

