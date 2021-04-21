import "reflect-metadata";

// function L(type: string) {
//     return function(target: Function) {
//          // target.prototype.type = type;
//         //         `Reflect.defineMetadata(metadataKey, metadataValue, target, propertyKey)`
//         //  - metadataKey：meta 数据的 key,添加的属性的名称
//         // - metadataValue：meta 数据的 值，添加的属性的值
//         // - target：meta 数据附加的目标，添加属性的目标
//         // - propertyKey：对应的 property key，参数属性所在的index
//         Reflect.defineMetadata('type', type, target);
//     }
// }

function log(type?: string) {
  return function (target: any, name: string, descriptor: PropertyDescriptor) {
    // log 方法装饰器 是比 L 类装饰器先执行的

    let value = descriptor.value;
    descriptor.value = function (x: number, y: number) {
      // log 方法装饰器 是比 L 类装饰器先执行的
      // 所以在执行的时候去获取元数据
      let result = value(x, y);
      let _type = type;
      if (!_type) {
        if (typeof target === "function") {
          // 如果是构造函数
          _type = Reflect.getMetadata("type", target);
        } else {
          //如果是实例对象

          _type = Reflect.getMetadata("type", target.constructor);
        }
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

// @L('storage')
//也可以去掉之前那个在原型链上定义数据的方法直接在类上定义
@Reflect.metadata("type", "storage")
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
