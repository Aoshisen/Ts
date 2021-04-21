// `装饰器` 是一个函数，它可以通过 `@装饰器函数` 这种特殊的语法附
// 加在 `类`、`方法` 、`访问符`、`属性`、`参数` 上，对它们进行包装，然后
// 返回一个包装后的目标对象（`类`、`方法` 、`访问符`、`属性`、`参数` ），装饰器
// 工作在类的构建阶段，而不是使用阶段
function d1(target:Function){
    console.log(typeof target,target);
    //类装饰器
}
function d2(target:any,name:string){
    console.log(typeof target,name)
//装饰类的属性，有两个参数，第一个参数是类，第二个参数就是类上面的属性名称，
}
function d3(target:any,name:string,descriptor:PropertyDescriptor){
    console.log(typeof target,name,descriptor);
     //这是类的方法的装饰器,第一个参数还是类的构造对象类的原型对象，第二个参数是类的方法名称，第三方哦参数是方法描述的对象
    }
function d4(target: any, name: string, descriptor: PropertyDescriptor) {
    console.log(typeof target, name, descriptor);
}
function d5(target: any, name: string,index:number){
//定义类方法参数的装饰器
console.log(typeof target,name,index)
}

@d1
class MyClass {

    @d2
    static property1: number;

    @d2
    a: number;

    @d3
    get b() { 
        return 1; 
    }

    @d3
    static get c() {
        return 2;
    }

    @d4
    public method1(@d5 x: number, @d5 y: number) {}

    @d4
    public static method(){}
}