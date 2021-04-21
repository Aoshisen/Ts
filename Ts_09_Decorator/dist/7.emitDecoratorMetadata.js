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
require("reflect-metadata");
function f() {
    return function (target, name, descriptor) {
        // console.log(descriptor.value.length)
        // console.log( Reflect.getMetadata('design:type', target, name) );
        // console.log( Reflect.getMetadata('design:paramtypes', target, name) );
        // console.log( Reflect.getMetadata('design:returntype', target, name) );
        var _t = Reflect.getMetadata('design:paramtypes', target, name)[0];
        //拿到目标对象下面的方法的返参数类型，返回值类型，以及方法本身的结构
        console.log(_t);
        var value = descriptor.value;
        if (_t === Number) {
            value(100);
        }
        if (_t === String) {
            value('开课吧');
        }
        if (_t === Date) {
            value(new Date);
        }
    };
}
var B = /** @class */ (function () {
    function B() {
    }
    // @f()
    // method1(a: string, b: number): string {
    //     console.log();
    //     return 'a'
    // }
    B.prototype.method2 = function (x) {
        console.log(x);
    };
    __decorate([
        f(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Date]),
        __metadata("design:returntype", void 0)
    ], B.prototype, "method2", null);
    return B;
}());
var b = new B();
b.method2();
