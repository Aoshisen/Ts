import "reflect-metadata";

function f() {
  return function (target: any, name: string, descriptor: PropertyDescriptor) {
    // console.log(descriptor.value.length)

    // console.log( Reflect.getMetadata('design:type', target, name) );

    // console.log( Reflect.getMetadata('design:paramtypes', target, name) );

    // console.log( Reflect.getMetadata('design:returntype', target, name) );

    let _t = Reflect.getMetadata("design:paramtypes", target, name)[0];
    //拿到目标对象下面的方法的返参数类型，返回值类型，以及方法本身的结构
    console.log(_t);
    let value = descriptor.value;
    if (_t === Number) {
      value(100);
    }
    if (_t === String) {
      value("开课吧");
    }
    if (_t === Date) {
      value(new Date());
    }
  };
}

class B {
  name: string;

  constructor() {}

  // @f()
  // method1(a: string, b: number): string {
  //     console.log();

  //     return 'a'
  // }

  @f()
  method2(x?: Date) {
    console.log(x);
  }
}

let b = new B();
b.method2();
