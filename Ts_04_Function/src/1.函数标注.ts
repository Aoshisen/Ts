//两种申明方式

// function fn1(a:string):string{
//     a+1;
//     return ""
// }

let fn2: (a:string)=>string=function(a){
    a+1;
    return ""
}



//同样也可以通过类型别名以及interface定义函数的结构
type Tfunc=(a:string)=>string
interface  IFunc {
    (a:string):string
}
let fn3:Tfunc=function(a){
    return a
}

let fn4:IFunc=function(a){
    return a;
}
