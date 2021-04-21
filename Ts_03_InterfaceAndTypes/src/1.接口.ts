// class Person{
//     constructor(public username:string){}
// }
// class Student extends Person{

// }
// interface Point {
//     // readonly x:number;
//     // readonly y:number;  
//     //可以用?来定义可选属性
//     // 当我们标注了一个属性为只读,那么该属性除了初始化以外,是不能被再次赋值的
//     // color?:number;

//     //任意属性
//     [key: string]: Person;
//      [key: number]: Student;
//      //当同时有字符串类型的任意属性和数字索引的任意属性的时候number属性的值必须是String属性的子类型或者就是string的类型
//      //注意这里的number不是String的子类型
//     //  所以如果这样是有问题的
//     // [key: string]: string;
//     // [key: number]:number;
//         }

//     //函数类型的标注
//     function fn1(x: number, y: number): number {
//         return x + y;
//        }

//        //我们可以这样定义
//        interface Ifunc {
//          (x:number,y:number):number
//        }
//        let fn2:Ifunc=function(a:number,b:number){
//            return a+b;
//        }
//        //这样的定义或许不能说明标注的重要性
//     //    但是如果一个函数依赖传递进来的函数才能执行相应的逻辑的话就会显得很重要了
//     //如下
//     function todo(callback:Icallback){
//         let v=callback(1,2);
//         return v;
//     }
//     interface Icallback{
//         (x:number,y:number):number
//     }
//     let callback:Icallback=function(a:number,b:number){
//         return a+b;
//     }

//     //
//     interface IEventFunc {
//         (e:MouseEvent):void
//     }
//     function on(el:HTMLElement,eventname:string,callback:IEventFunc){

//     }
//     let div=document.querySelector("div");
//     div&&on(div,"click",function(e){
//         e.clientX
//     })

//     //重载
//     interface Box{
//         height:number,
//         width:number,
//         fn(a:string):string
//     }

//     interface Box{
//         height:number,
//         width:number,
//         fn(a:number):number
//     }
// //     如果合并的接口存在同名的非函数成员,则必须保证他们类型一致,否则编译报错
// // 接口中的同名函数则是采用重载(具体后期函数详解中讲解)

// let box:Box={
//     height:5,
//     width:5,
//     //这里进行了接口的重重载，所以这里可以声明为any
//     fn:function(a:any):any{
//         return a
//     }

// }
