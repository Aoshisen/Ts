// 就是一个自执行的函数用来判断处于什么环境就用什么规则进行处理
//传入当前环境的挂在什么地方
(function (root, factory) {
  if (typeof module === "object" && typeof module.exports === "object") {
    //如果有module 和module.exports 方法那么证明实在CommonJs规范下 Node
    module.exports = factory;
  } else if (typeof define === "object" && define.amd) {
    // AMD 规范 reqquireJs
    define(factory);
  } else {
    //普通
    root.ass = factory;
  }
})(this, function () {
  let a = 1;
  let b = 2;

  return {
    x: a,
    y: b,
  };
});

/* //我们来分解一下这个代码
let ass = function (factory) {
  if (typeof module === "object" && typeof module.exports === "object") {
    //如果有module并且实现了导出方法的那么证明当前模块是CommonJs模块
    //那么我们导出的函数就是当前函数
    module.exports = factory;
  } else if (typeof define === "object" && define.amd) {
    //这里是实现了AMD的规范的前端模块化常见的库有requireJs
    //这里需要所有的逻辑都包含在define这个函数里面
    define(factory);
  } else {
    //普通环境就挂载到全局的一个属性上
    window.ass = factory;
  }
};
//我们定义的函数满足下面这样的风格
function Ass() {
  //定义数据
  let a = 1;
  let b = 2;
  //需要导出的数据
  return {
    x: a,
    y: b,
  };
}
 */
