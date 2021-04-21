function L(type: string) {
  return function (target: Function) {
    //定义在原型链上，target就是被装饰的类，类的原型就是就是实例的构造函数
    target.prototype.type = type;
  };
}
function log(type?: string) {
  return function (target: any, name: string, descriptor: PropertyDescriptor) {
    //这是继承下来的方法
    let value = descriptor.value;
    descriptor.value = function (x: number, y: number) {
      let result = value(x, y);
      //这是新加的验证
      //如果没有传递了type就按照传递的type来做,如果没有传递下来的type，那么就来做一个验证
      let _type = type;

      if (!_type) {
        //如果是类那么就返回类的构造函数上面的type,如果是实例对象，那么就在实例对象身上的type
        _type =
          typeof target === "function" ? target.prototype.type : target.type;
      }

      console.log({
        type: _type,
        name,
        x,
        y,
        result,
      });

      return result;
    };
  };
}
//然后我们这样用
@L("log")
class M {
  @log()
  static add(x: number, y: number) {
    return x + y;
  }

  @log("log")
  static sub(x: number, y: number) {
    return x - y;
  }
}
let v1 = M.add(1, 2);
console.log(v1);
let v2 = M.sub(1, 2);
console.log(v2);
export default {};
