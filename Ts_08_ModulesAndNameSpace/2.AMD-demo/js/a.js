//AMD规范和实现这个规范的requireJs库

//导入模块

/* //注意这里是不需要加.js后缀的,加上反而会报错
define(["./b"],function(b){
    console.log(b)
}) */

//后置引用，可以传入参数来利用CommonJs的规范
define(function (require, exports, module) {
  let b = require("./b");
  console.log(b);
});

//AMD 基于浏览器 ，所以要放在HTML 文件中运行出效果
