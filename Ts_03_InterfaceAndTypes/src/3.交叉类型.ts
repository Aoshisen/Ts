
interface O1{
    x:number;
    y:string
}
interface O2{
    z:number
}
//交叉类型就是把两个接口的类型加起来
let O:O1&O2=Object.assign({},{x:1,y:"Ass"},{z:2})
// O.x