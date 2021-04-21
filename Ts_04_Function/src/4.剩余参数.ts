interface Iobj1{
    [key:string]:string
}

interface Iobj2{
    [key:string]:number
}
function merge (target:Iobj1, ...others:Array<Iobj2>){
 Object.assign(target,...others);
}


//现在就定义了一个函数第一个参数是Iobj1类型,剩余参数是Iobj2类型

let newObj=merge({x:"sss"},{ass:2},{Ass:66666});
