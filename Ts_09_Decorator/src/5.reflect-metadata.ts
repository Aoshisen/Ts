import "reflect-metadata";

@Reflect.metadata("n", 1)
class A {
  @Reflect.metadata("n", 2)
  public static method1() {}

  @Reflect.metadata("n", 4)
  public method2() {}
}

let obj = new A();

// Reflect.defineMetadata( 'n', 1, A );
// Reflect.defineMetadata( 'n', 2, A, 'method1' );
// Reflect.defineMetadata( 'n', 3, obj );
// Reflect.defineMetadata( 'n', 4, obj, 'method2' );

console.log(Reflect.getMetadata("n", A));
console.log(Reflect.getMetadata("n", A, "method1"));
console.log(Reflect.getMetadata("n", obj));
console.log(Reflect.getMetadata("n", obj, "method2"));
