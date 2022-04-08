# front-end-learning-ts: typescript 学习
## 简介
### 参考 
- [TypeScript 入门教程](http://ts.xcatliu.com/)
- [深入理解 TypeScript](https://jkchao.github.io/typescript-book-chinese/#why)
- [vscode+typescript开发环境搭建](https://www.helloworld.net/p/1473995726)
- [一份不可多得的 TS 学习指南（1.8W字）](https://juejin.cn/post/6872111128135073806#heading-108)
- [vben-admin-thin-next](https://github.com/vbenjs/vben-admin-thin-next/blob/main/README.zh-CN.md)

### typescript 常用命令
```
// 安装(更新)最新版
npm install -g typescript

// //这是一个typescript的交互式控制台，可以用来调试ts脚本，不然只能调试编译后的js
npm install -g ts-node   

// 版本
tsc --version

// 项目初始化
npm --init

// 创建tsconfig.json
tsc --init

// 安装@types来管理类型定义
npm install @types/node --dev-save

```


## typescript 中使用 ESLint
参考：http://ts.xcatliu.com/engineering/lint.html

### 安装 ESLint
ESLint 可以安装在当前项目中或全局环境下，因为代码检查是项目的重要组成部分，所以我们一般会将它安装在当前项目中。可以运行下面的脚本来安装：

```
npm install --save-dev eslint
```

由于 ESLint 默认使用 Espree 进行语法解析，无法识别 TypeScript 的一些语法，故我们需要安装 @typescript-eslint/parser，替代掉默认的解析器，别忘了同时安装 typescript：
```
npm install --save-dev typescript @typescript-eslint/parser
```
接下来需要安装对应的插件 @typescript-eslint/eslint-plugin 它作为 eslint 默认规则的补充，提供了一些额外的适用于 ts 语法的规则。
```
npm install --save-dev @typescript-eslint/eslint-plugin
```
### 创建配置文件
ESLint 需要一个配置文件来决定对哪些规则进行检查，配置文件的名称一般是 .eslintrc.js 或 .eslintrc.json。

当运行 ESLint 的时候检查一个文件的时候，它会首先尝试读取该文件的目录下的配置文件，然后再一级一级往上查找，将所找到的配置合并起来，作为当前被检查文件的配置。

我们在项目的根目录下创建一个 .eslintrc.js，内容如下：

module.exports = {
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    rules: {
        // 禁止使用 var
        'no-var': "error",
        // 优先使用 interface 而不是 type
        '@typescript-eslint/consistent-type-definitions': [
            "error",
            "interface"
        ]
    }
}
以上配置中，我们指定了两个规则，其中 no-var 是 ESLint 原生的规则，@typescript-eslint/consistent-type-definitions 是 @typescript-eslint/eslint-plugin 新增的规则。

规则的取值一般是一个数组（上例中的 @typescript-eslint/consistent-type-definitions），其中第一项是 off、warn 或 error 中的一个，表示关闭、警告和报错。后面的项都是该规则的其他配置。

如果没有其他配置的话，则可以将规则的取值简写为数组中的第一项（上例中的 no-var）。

关闭、警告和报错的含义如下：

关闭：禁用此规则
警告：代码检查时输出错误信息，但是不会影响到 exit code
报错：发现错误时，不仅会输出错误信息，而且 exit code 将被设为 1（一般 exit code 不为 0 则表示执行出现错误）