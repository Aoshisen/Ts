function log(target: Function, name: string, descriptor: PropertyDescriptor) {
  // target:就是被修饰目标的类
  // name：就是被修饰目标目标的方法名称
  // descriptor：就是包含被修饰元素的一个对象
  console.log(target, name, descriptor);
  let fn = descriptor.value;
  descriptor.value = function (a: number, b: number) {
    //在函数里面再调用原始的方法，保留原来的属性
    let result = fn(a, b);
    //然后再在这里实现我们需要给这个属性添加的东西
    console.log("日志:", {
      name,
      a,
      b,
      result,
    });
    return result;
  };
}

class M {
  @log
  static add(a: number, b: number) {
    return a + b;
  }
  //在函数里面使用就是这样的简单
  @log
  static sub(a: number, b: number) {
    return a - b;
  }
}
//让我们来验证一下
let v1 = M.add(1, 2);
console.log(v1);
let v2 = M.sub(2, 1);
console.log(v2);

export default {};
//完美没什么错误
