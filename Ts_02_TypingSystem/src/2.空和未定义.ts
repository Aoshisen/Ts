// let a: null;
// let b: undefined;
// // a=1;//被赋值了空的变量不能再赋其他值


// let c:number;
// c=undefined;
// 如果一个值已经定义了类型那么就不能把undefined分配给这个值


// let d:number; //定义了类型的值是NULL
// let e;//声明了但是没有类型也没有值那么就是未定义

// let a:number
// //由于NULL 和undefined是所有类型的子类型,所以NULL 赋值给number也是可以的
// a=null; //这里就要设置严格的空值检测了
// a.toFixed(1);

let ele = document.querySelector("div")
//这里也有一个问题就是ele要是没存在的话下面的逻辑就没办法执行
//所以需要加上一个判断
if(ele){
    ele.style.display="none";

}