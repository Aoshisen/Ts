// // 类型操作就是区分类型和变量之间的区别;
// //简单的例子

// let  str1="Aoshisen"
// let t:string =typeof str1;// 这里由于是类型给变量赋值所以无法运用类型系统

// //let 声明的是变量，里面存储的数据是程序运行过程中使用的

// type myType=typeof str1;
// //这里面声明的是类型名称，只会在ts编译检测阶段使用

// // 所以不能将变量赋值给类型，也不能将类型赋值给变量

// // let b:t="Assss";
// // let c=myType


// //keyof 拿到对象的标注类型的key

// interface Person{
//     name:string;
//     age:number;
// }
// //注意这两个是类型定义
// type personKeys=keyof Person;
// let p1:Person={
//     name:"Ass",
//     age:35,
// }

// //用法
// // function fn3(k:"name"|"age"){
// //     return p1[k]
// // }

// function fn3(k:keyof typeof p1){
//         return p1[k]
//     }


// //in的用法 想对于for in 循环 对取出来的key的循环。

// // 比如说我们想重写一个现有的interface接口

// type PersonKeys=keyof Person

// //这里需要用type定义类型不要使用interface;
// type NewPerson={
//     [k in PersonKeys]:string
// }