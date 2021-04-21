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
function L(type) {
    return function (target) {
        target.prototype.type = type;
    };
}
function log(type) {
    return function (target, name, descriptor) {
        //这是继承下来的方法
        var value = descriptor.value;
        descriptor.value = function (x, y) {
            var result = value(x, y);
            //这是新加的验证
            //如果没有传递了type就按照传递的type来做,如果没有传递下来的type，那么就来做一个验证
            var _type = type;
            if (!_type) {
                //如果是类那么就返回类的构造函数上面的type,如果是实例对象，那么就在实例对象身上的type
                _type = typeof target === 'function' ? target.prototype.type : target.type;
            }
            console.log({
                type: _type,
                name: name,
                x: x,
                y: y,
                result: result
            });
            return result;
        };
    };
}
//然后我们这样用
var M = /** @class */ (function () {
    function M() {
    }
    M.add = function (x, y) {
        return x + y;
    };
    M.sub = function (x, y) {
        return x - y;
    };
    __decorate([
        log(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number, Number]),
        __metadata("design:returntype", void 0)
    ], M, "add", null);
    __decorate([
        log('log'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number, Number]),
        __metadata("design:returntype", void 0)
    ], M, "sub", null);
    M = __decorate([
        L("log")
    ], M);
    return M;
}());
var v1 = M.add(1, 2);
console.log(v1);
var v2 = M.sub(1, 2);
console.log(v2);
exports.default = {};
