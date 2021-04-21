

/* //先来看一个例子 定义一个函数返回指定对象的指定值
function getVal(obj,k){
    return obj[k]
}


let obj1={
    x:1,
    y:2,
}

let obj2={
    username:"ASS",
    age:23
}
getVal(obj1,x);
getVal(obj2,username);
//上面这样是会报错的,因为类型系统不知道obj什么类型以及obj下面有没有key这样的属性
 */





 //我们可以给类型成定义一个变量,在调用函数的时候传入
function getVal<T>(obj:T,k:keyof T){
    return obj[k]
}

let obj1={
    x:1,
    y:2,
}

let obj2={
    username:"ASS",
    age:23
}
getVal<typeof obj1>(obj1,"x");
//这里不用加上面的typeof也是可以的因为ts会自动进行类型推导
getVal<typeof obj2>(obj2,"username");

