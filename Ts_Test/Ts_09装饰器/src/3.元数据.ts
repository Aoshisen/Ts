//我希望在类装饰器里面定义一个type而在这个类里面的所有的装饰器可以拿到这个定义的数据的值
//解决思路，我们定义一个类装饰器，在原型链上添加一个属性这样在类的里面就可以拿到定义的数据了
//但是值得注意的是装饰器执行的阶段时是各个属性和方法的执行顺序高于类装饰器的执行顺序的，那么编写代码的时候可要注意了
function L(type: string) {
  return function (target: Function) {
    //定义在原型链上，target就是被装饰的类
    target.prototype.type = type;
  };
}
function log(type?: string) {
  return function (target: any, name: string, descriptor: PropertyDescriptor) {
    let value = descriptor.value;
    descriptor.value = function (x: number, y: number) {
      let result = value(x, y);

      //如果传入了type那么就用传入的type
      let _type = type;
      //如果没有传入type那么就在类的构造函数上面的type，或者是实例对象上的type
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
