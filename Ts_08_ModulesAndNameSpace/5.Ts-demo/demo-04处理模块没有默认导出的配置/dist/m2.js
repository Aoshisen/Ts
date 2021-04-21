var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define(["require", "exports", "./m1.js"], function (require, exports, m1_js_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    m1_js_1 = __importDefault(m1_js_1);
    //这样由于没有默认导出会存在问题
    //可以聪明一点
    // import * as m1 from './m1.js';
    /* 也可以在设置里设置**allowSyntheticDefaultImports** 可以解决在编译的时候遇到的问题
    但是在实际使用的时候还是会遇到问题因为上面一个参数只是解决了编译的时候的检测问题
    而生成的代码还是没有默认导出这个东西的，所以就可以编译选项里面设置**esModuleInterop**
     */
    console.log(m1_js_1.default);
});
