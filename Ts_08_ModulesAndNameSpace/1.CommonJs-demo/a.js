let a = 1;
let b = 2;
//导出

module.exports = {
  x: a,
  y: b,
};
//或者是这样
// exports.x = a;
// exports.y = b;
//不可以像这样,因为这样会改变对象的引用
/* exports = {
  x: a,
  y: b,
};
 */
