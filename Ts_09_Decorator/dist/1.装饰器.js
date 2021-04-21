"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
function log(target, name, descriptor) {
    // target:就是被修饰目标的类
    // name：就是被修饰目标目标的方法名称
    // descriptor：就是包含被修饰元素的一个对象
    console.log(target, name, descriptor);
    var fn = descriptor.value;
    descriptor.value = function (a, b) {
        //在函数里面再调用原始的方法，保留原来的属性
        var result = fn(a, b);
        //然后再在这里实现我们需要给这个属性添加的东西
        console.log("日志:", {
            name: name,
            a: a,
            b: b,
            result: result
        });
        return result;
    };
}
var M = /** @class */ (function () {
    function M() {
    }
    M.add = function (a, b) {
        return a + b;
    };
    //在函数里面使用就是这样的简单
    M.sub = function (a, b) {
        return a - b;
    };
    __decorate([
        log,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number, Number]),
        __metadata("design:returntype", void 0)
    ], M, "add", null);
    __decorate([
        log,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number, Number]),
        __metadata("design:returntype", void 0)
    ], M, "sub", null);
    return M;
}());
//让我们来验证一下
var v1 = M.add(1, 2);
console.log(v1);
var v2 = M.sub(2, 1);
console.log(v2);
exports.default = {};
//完美没什么错误
