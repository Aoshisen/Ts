// let css = function (el: HTMLElement, styl: string, num?: number | string) {
//   if (arguments.length === 2) {
//     return getComputedStyle(el)[styl];
//   } else if (arguments.length === 3) {
//     console.log(typeof num === typeof 1);
//     el.style[styl] = num;
//   }
// };
interface PlainObject {
  [key: string]: string | number;
}
function css(ele: HTMLElement, attr: PlainObject);
function css(ele: HTMLElement, attr: string, value: string | number);
function css(ele: HTMLElement, attr: string, value?: number);
function css(ele: HTMLElement, attr: any, value?: any) {
  if (typeof attr === "string" && value) {
    ele.style[attr] = value;
  }
  if (typeof attr === "object") {
    for (let key in attr) {
      ele.style[attr] = attr[key];
    }
  }
}
let div = document.querySelector("div");
if (div) {
  css(div, "width", "100px");
  css(div, {
    width: "100px",
  });
  css(div, "width"); //这里没在函数重载里面定义相关的逻辑，就会检查出问题
}
