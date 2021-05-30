/**
 * @fileoverview 相对路径修改为别名导入
 * @author lzg
 */
"use strict";

const path = require('path');

const configs = [
  {
    from: 'store',
    to: 'store',
  },
  {
    from: 'utils',
    to: 'utils',
  },
  {
    from: 'reselector',
    to: 'reselector',
  },
  {
    from: 'api',
    to: 'api',
  },
  {
    from: 'components',
    to: 'components',
  },
  {
    from: 'containers',
    to: 'containers',
  },
];

module.exports = {
  meta: {
    docs: {
      description: '相对路径修改为别名导入',
      category: 'Fill me in',
      recommended: true,
    },
    fixable: 'code', // or "code" or "whitespace"
    schema: [],
  },

  create(context) {
    // 被 Eslint 执行的文件的目录
    const dirPath = path.dirname(context.getFilename());

    const replaceConfigs = configs.map((item) => ({
      from: path.join(process.cwd(), item.from),
      to: item.to,
    }));

    const dealNode = (node)=>{
      if (node.source.value.startsWith('../')) {
        const importPath = path.join(dirPath, node.source.value);
        for (const config of replaceConfigs) {
          if (importPath.includes(config.from)) {
            // 引用高阶组件，跳过
            if((config.from.endsWith('components') || config.from.endsWith('containers')) &&node.source.value.startsWith('../with')){
              return
            }

            context.report({
              node,
              message: `请使用别名 ${config.to} 代替相对路径`,
              fix(fixer) {
                const target = importPath
                  .replace(config.from, config.to)
                  .replace(/\\/g, '/');

                return [
                  fixer.replaceTextRange(node.source.range, `'${target}'`),
                ];
              },
            });
          }
        }
      }
    }

    return {
      'ImportDeclaration': (node) => {
        dealNode(node)
      },
      ImportExpression: (node)=>{
        dealNode(node)
      }
    };
  },
};


