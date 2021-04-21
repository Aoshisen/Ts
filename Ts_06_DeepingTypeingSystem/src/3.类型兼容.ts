//首先定义两个类

class Ifly {
    fly(){

    }
}
class Person implements Ifly{
    name:"string";
    age:number;
    fly(){

    }
}


class Cat {
    name:"string";
    age:number;
    catchMouse(){

    };
    fly(){
        
    }
}


let p1=new Person()
let c1=new Cat();
/* 
function fn(arg:Person){
    arg.name
}
fn(c1);

这一段代码是不会有错误的因为ts检测的是类型
*/

/* function fn(arg:Cat){
   arg.name;
}
fn(p1);

但是如果包含有未实现的方法的话就会报错  
*/

//所以我们可以定义一个共有的方法或者结构只要实现了此结构的都能被函数调用
function fn2( arg: Ifly      ) {
    arg.fly();
}

fn2(p1);
fn2(c1);













