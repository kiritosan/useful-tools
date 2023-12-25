export default {
    printWidth: 80,//每行代码长度的最大值
    tabWidth: 2,//tab键宽度
    useTabs: false,// 是否使用tab罐代苦空格缩进
    semi: true, //是否在语句末尾加分号
    singleQuote: false,//是否使用单引号代替双/号
    quoteProps: "as-needed", // 对象字面厘中属性名是否加 / 号，可选值为always, as - needed
    jsxSingleQuote: false, //在J5X中是否使用单/号f代替双 / 号
    trailingComma: "es5",//数组、对象等结尾元素是否添加逗号，可选值为none,es5,aLL
    bracketSpacing: true, // 在对象字面運声明所使用的的花括号后()和前G) 输出空格
    jsxBracketSameLine: false, //在多行JSX元素的最后一行的末尾放置>而不是单独放在下一行
    arrowParens: "always",//是否在箭头四数参数周围添加括号，可选值为always,avoid
    rangeStart: 0, //省路代码范围的起始行编号
    rangeEnd: Infinity, //省略代码范围的结束行编号
    requirePragma: false, //是否严格按照文件顶暗部的一些特殊注释格式化f代码（有一定的类似于ESLint规则的效果）
    insertPragma: false, //在文件顶赔部插入一个@format的特殊注释，用于提醒开发人员本文件已经格式化过了
    proseWrap: "preserve'",//格式化markdown文件时是否保留文本换行
}