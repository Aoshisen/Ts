// //我们事先就知道了这个元素是什么类型的数据就可以使用类型断言来缩小范围
// let img=document.querySelector("#img")
// img&&(
//     // img.src 这是图片元素特有的属性，但是这个img现在只是一个Element,并不是HTMLImageElement
//     //像下面一样标注
//     (<HTMLImageElement>img).src  //这样标注就没有任何问题了
// )
