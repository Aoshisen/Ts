//如果我们来声明一个用来排序的函数
function sort(item:Array<any>,order:"desc"|"asc"="desc"){
    //实现主要的一些逻辑
}
sort([1,2,3])
sort([1,2,3],"asc")
//下面的就会报错
// sort([1,2,3],"ass")
