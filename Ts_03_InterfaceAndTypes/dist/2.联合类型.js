//我们需要定义一个函数用来修改元素的样式
function css(ele, attr, value) {
    //""""
}
var box = document.querySelector("div");
box && (css(box, "width", "100px"),
    css(box, "opacity", 1)
//最后不应该有逗号
// css(box,"opacity",[1.2])
//最后一个会提示错误
);
