// 普通函数中的this不固定，但是箭头函数的this是固定的
/* let fn=(a:string):void=>{
//
}
 */
interface T {
    a:number,
    fn:(a:string)=>void
}
let Obj2:T ={
    a:1,
    fn(this:Window,x:string){
        return ()=>{
            console.log(this,x)
        }
    }
}
let callBackfn=Obj2.fn("1")
console.log(callBackfn)