// 装饰器函数
function log(callback: Function) {
  return function (
    target: Function,
    type: string,
    descriptor: PropertyDescriptor
  ) {
    let value = descriptor.value;

    descriptor.value = function (a: number, b: number) {
      let result = value(a, b);
      callback({
        type,
        a,
        b,
        result,
      });
      return result;
    };
  };
}

// 原始类
class M {
  @log(function (result: any) {
    console.log("日志：", result);
  })
  static add(a: number, b: number) {
    return a + b;
  }
  @log(function (result: any) {
    console.log("这是需要自定义的函数内容");
  })
  static sub(a: number, b: number) {
    return a - b;
  }
}

let v1 = M.add(1, 2);
// console.log(v1);
let v2 = M.sub(1, 2);
// console.log(v2);

export {};
