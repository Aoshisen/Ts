//我们可以通过内置对象类型对变量进行标注
let arr:Array<number>=[1,2,3]
let obj:Object={};
let date:Date=new Date();

//常规的对象类型标注
// let user:{username:string,age:number}={
//     username:"Ass",
//     age:12
// }


//interface 类型的对象类型标注
interface Person {
    username:string,
    age:number
}
//定义一个存储规则的这么一个常量Person
//在需要的时候调用他就行了

let user1 :Person={
    username:"Ass",
    age:23
}


//但是这个interface 不能实现某些具体的功能，他就只能被当成一个常量使用

//如果想要实现某些功能的话那么就要用到class

class PersonPro{
    constructor(public username:string,public age:number){

    }
}
//这样在代码中就可以这样使用了

let p2:PersonPro=new PersonPro("Ass",23);

