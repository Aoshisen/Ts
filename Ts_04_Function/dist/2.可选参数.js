function css(el, attr, val) {
    //...
}
//可选参数就在参数后面加一个？
var div = document.querySelector('div');
div && css(div, 'width', '100px');
div && css(div, 'width');
