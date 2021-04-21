var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
function merge(target) {
    var others = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        others[_i - 1] = arguments[_i];
    }
    Object.assign.apply(Object, __spreadArrays([target], others));
}
//现在就定义了一个函数第一个参数是Iobj1类型,剩余参数是Iobj2类型
var newObj = merge({ x: "sss" }, { ass: 2 }, { Ass: 66666 });
