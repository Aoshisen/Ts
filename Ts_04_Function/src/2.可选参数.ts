function css(el: HTMLElement, attr: string, val?: any) {
    //...
}
//可选参数就在参数后面加一个？

let div = document.querySelector('div');

div && css(div, 'width', '100px');
div && css(div, 'width');