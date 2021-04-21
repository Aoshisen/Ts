//2.然后我们需要在tsconfig里面添加这个属性启用装饰器的特性   "experimentalDecorators": true
//然后 定义装饰器函数，注意装饰器本身是一个函数
//我们定义一个log函数
function log(target: Function, name: string, descriptor: PropertyDescriptor) {
  /* 
    target :方法装饰目标的类
    name：方法装饰的目标的方法名称
    descriptor：就是包含被修饰元素的一个对象 注意这里的类型是PropertyDescriptor
    */
  console.log(target, name, descriptor);
  //知道了这些参数到底是什么之后我们就可以进行相关的操作了
  let fn = descriptor.value;
  //这里定义的descriptor.value就是被装饰的函数
  //   我们可以在这里拦截当前的函数来进行一些改写
  descriptor.value = function (a: number, b: number) {
    let result = fn(a, b);
    console.log("THIS IS ${name}");
  };
}

//1. 我们先来定义一个类因为装饰器只能装饰类的方法属性和参数以及类本身
class Ass {
  @log
  static Add(a: number, b: number) {
    return a + b;
  }
  static Sub(a: number, b: number) {
    return a - b;
  }
}
let v1 = Ass.Add;
v1(1, 2);
export {};
