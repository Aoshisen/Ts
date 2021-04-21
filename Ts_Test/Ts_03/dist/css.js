let css = function (el, styl, num) {
    if (arguments.length === 2) {
        return getComputedStyle(el)[styl];
    }
    else if (arguments.length === 3) {
        console.log(typeof num === typeof 1);
        el.style[styl] = num;
    }
};
