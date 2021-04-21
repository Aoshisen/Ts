//当一个变量申明成了any类型那么就放弃了编辑器的检测和提示也放弃了类型系统的约束
//所以在编写代码的时候尽量少使用any
let a:any;
a=1;
//any默认有任何属性和方法
let b:number;
b=a;
a.ab;
function fn(){
    a.indexOf("a",1);
}
