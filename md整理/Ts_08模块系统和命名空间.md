# 模块系统和命名空间

[toc]

## 模块系统
### 模块化

模块化是指自上而下把一个复杂问题（功能）划分成若干模块的过程，在编程中就是指通过某种规则对程序（代码）进行分割、组织、打包，每个模块完成一个特定的子功能，再把所有的模块按照某种规则进行组装，合并成一个整体，最终完成整个系统的所有功能

从基于 `Node.js` 的服务端 `commonjs` 模块化，到前端基于浏览器的 `AMD`、`CMD` 模块化，再到 `ECMAScript2015` 开始原生内置的模块化， `JavaScript` 的模块化方案和系统日趋成熟。

`TypeScript` 也是支持模块化的，而且它的出现要比 `ECMAScript`模块系统标准化要早，所以在 `TypeScript` 中即有对 `ECMAScript` 模块系统的支持，也包含有一些自己的特点



### 模块化历程

- CommonJS
- AMD
- UMD
- ESM

无论是那种模块化规范，重点关注：保证模块独立性的同时又能很好的与其它模块进行交互

-  如何定义一个模块与模块内部私有作用域
- 通过何种方式导出模块内部数据
- 通过何种方式导入其它外部模块数据



### 基于服务端、桌面端的模块化

#### CommonJS

在早期，对于运行在浏览器端的 `JavaScript` 代码，模块化的需求并不那么的强烈，反而是偏向 服务端、桌面端 的应用对模块化有迫切的需求（相对来说，服务端、桌面端程序的代码和需求要复杂一些）。`CommonJS` 规范就是一套偏向服务端的模块化规范，它为非浏览器端的模块化实现制定了一些的方案和标准，`NodeJS` 就采用了这个规范。

**独立模块作用域**

一个文件就是模块，拥有独立的作用域

**导出模块内部数据**

通过 `module.exports` 或 `exports` 对象导出模块内部数据

```javascript
// a.js
let a = 1;
let b = 2;

module.exports = {
  x: a,
  y: b
}
// or
exports.x = a;
exports.y = b;
```

**导入外部模块数据**

通过 `require` 函数导入外部模块数据

```javascript
// b.js
let a = require('./a');
a.x;
a.y;
```



### 基于浏览器的模块化

#### AMD

因为 CommonJS 规范一些特性（基于文件系统，同步加载），它并不适用于浏览器端，所以另外定义了适用于浏览器端的规范 

 `AMD(Asynchronous Module Definition)`

https://github.com/amdjs/amdjs-api/wiki/AMD

浏览器并没有具体实现该规范的代码，我们可以通过一些第三方库来解决

##### requireJS

https://requirejs.org/

```javascript
// 1.html
<script data-main="js/a" src="https://cdn.bootcss.com/require.js/2.3.6/require.min.js"></script>
```

**独立模块作用域**

通过一个 `define` 方法来定义一个模块，在该方法内部模拟模块独立作用域

```javascript
// b.js
define(function() {
  // 模块内部代码
})
```

**导出模块内部数据**

通过 `return` 导出模块内部数据

```javascript
// b.js
define(function() {
  let a = 1;
	let b = 2;
  return {
    x: a,
  	y: b
  }
})
```

**导入外部模块数据**

通过前置依赖列表导入外部模块数据

```javascript
// a.js
// 定义一个模块，并导入 ./b 模块
define(['./b'], function(b) {
	console.log(b);
})
```

#### `requireJS` 的 `CommonJS` 风格

`require.js` 也支持 `CommonJS` 风格的语法

**导出模块内部数据**

```javascript
// b.js
define(function(require, exports, module) {
  let a = 1;
	let b = 2;
  module.exports = {
    x: a,
    y: b
  }
})
```

**导入外部模块数据**

```javascript
// a.js
define(function(require, exports, module) {
  let b = require('./b')
  console.log(b);
})
```

#### UMD

严格来说，`UMD` 并不属于一套模块规范，它主要用来处理 `CommonJS`、`AMD`、`CMD` 的差异兼容，是模块代码能在前面不同的模块环境下都能正常运行。随着 `Node.js` 的流行，前端和后端都可以基于 `JavaScript` 来进行开发，这个时候或多或少的会出现前后端使用相同代码的可能，特别是一些不依赖宿主环境（浏览器、服务器）的偏低层的代码。我们能实现一套代码多端适用（同构），其中在不同的模块化标准下使用也是需要解决的问题，`UMD` 就是一种解决方式

```javascript
(function (root, factory) {
  	if (typeof module === "object" && typeof module.exports === "object") {
        // Node, CommonJS-like
        module.exports = factory();
    }
    else if (typeof define === "function" && define.amd) {
      	// AMD 模块环境下
        define(factory);
    } else {
      	// 不使用任何模块系统，直接挂载到全局
      	root.kkb = factory();
    }
}(this, function () {
    let a = 1;
		let b = 2;

    // 模块导出数据
    return {
        x: a,
        y: b
    }
}));
```



### 模块化的大同世界

#### ESM

从 `ECMAScript2015/ECMAScript6` 开始，`JavaScript` 原生引入了模块概念，而且现在主流浏览器也都有了很好的支持，同时在 `Node.js` 也有了支持，所以未来基于 `JavaScript` 的程序无论是在前端浏览器还是在后端 `Node.js` 中，都会逐渐的被统一

#### 独立模块作用域

一个文件就是模块，拥有独立的作用域，且导出的模块都自动处于 `严格模式` 下，即：`'use strict'`

`script` 标签需要声明 `type="module"` 

#### 导出模块内部数据

使用 `export` 语句导出模块内部数据

```javascript
// 导出单个特性
export let name1, name2, …, nameN;
export let name1 = …, name2 = …, …, nameN;
export function FunctionName(){...}
export class ClassName {...}

// 导出列表
export { name1, name2, …, nameN };

// 重命名导出
export { variable1 as name1, variable2 as name2, …, nameN };

// 默认导出
export default expression;
export default function (…) { … }
export default function name1(…) { … }
export { name1 as default, … };

// 模块重定向导出
export * from …;
export { name1, name2, …, nameN } from …;
export { import1 as name1, import2 as name2, …, nameN } from …;
export { default } from …;
```

#### 导入外部模块数据

导入分为两种模式

- 静态导入
- 动态导入

**静态导入**

使用 `import` 语句导入模块，这种方式称为：`静态导入`

静态导入方式不支持延迟加载，`import` 必须在模块的最开始

```javascript
import defaultExport from "module-name";
import * as name from "module-name";
import { export } from "module-name";
import { export as alias } from "module-name";
import { export1 , export2 } from "module-name";
import { foo , bar } from "module-name/path/to/specific/un-exported/file";
import { export1 , export2 as alias2 , [...] } from "module-name";
import defaultExport, { export [ , [...] ] } from "module-name";
import defaultExport, * as name from "module-name";
import "module-name";
```

```javascript
document.onclick = function () {

    // import 必须放置在当前模块最开始加载所以这样导入一个模块是不行的需要动态加载模块
    // import m from './m.js'

    // console.log(m);

}
```

**动态导入**

此外，还有一个类似函数的动态 `import()`，它不需要依赖 `type="module"` 的 script 标签。

关键字 `import` 可以像调用函数一样来动态的导入模块。以这种方式调用，将返回一个 `promise`

```javascript
import('./m.js')
  .then(m => {
    //...
});
// 也支持 await
let m = await import('./m.js');
```

> 通过 `import()` 方法导入返回的数据会被包装在一个对象中，即使是 `default` 也是如此



### TypeScript 中的模块化

`TypeScript` 也支持模块化，而且它的出现比 `ESM` 还要早，`TypeScript` 的模块化实现也有一些地方与上述其它一些模块化系统有所差异，但是随着 `TypeScript` 的更新，同时 `ESM` 标准本身也越来越成熟，所以当下和未来 `TypeScript` 的模块化也会与 `ESM` 越来越接近



## Ts中的模块系统
虽然早期的时候，`TypeScript` 有一套自己的模块系统实现，但是随着更新，以及 `JavaScript` 模块化的日趋成熟，`TypeScript` 对 `ESM` 模块系统的支持也是越来越完善

### 模块

无论是 `JavaScript` 还是 `TypeScript` 都是以一个文件作为模块最小单元

- 任何一个包含了顶级 `import` 或者 `export` 的文件都被当成一个模块
- 相反的一个文件不带有顶级的 `import` 或者 `export` ，那么它的内容就是全局可见的

### 全局模块

如果一个文件中没有顶级 `import` 或者 `export` ，那么它的内容就是全局的，整个项目可见的

```typescript
// a.ts
let a1 = 100;
let a2 = 200;
```

```typescript
// b.ts
// ok, 100
console.log(a1);
// error
let a2 = 300;
```

> 不推荐使用全局模块，因为它会容易造成代码命名冲突（全局变量污染）

### 文件模块

任何一个包含了顶级 `import` 或者 `export` 的文件都会当做一个模块，在 `TypeScript` 中也称为外部模块。



## 模块语法

`TypeScript` 与 `ESM` 语法类似

### 导出模块内部数据

使用 `export` 导出模块内部数据（变量、函数、类、类型别名、接口……）

### 导入外部模块数据

使用 `import` 导入外部模块数据



## 模块编译

`TypeScript` 编译器也能够根据相应的编译参数，把代码编译成指定的模块系统使用的代码

#### `module` 选项

在 `TypeScript` 编译选项中，`module` 选项是用来指定生成哪个模块系统的代码，可设置的值有：`"none"`、`"commonjs"`、`"amd"`、`"udm"`、`"es6"`/`"es2015/esnext"`、`"System"`

- `target=="es3" or "es5"`：默认使用 `commonjs`
- 其它情况，默认 `es6`



## 模块导出默认值的问题

如果一个模块没有默认导出

```typescript
// m1.ts
export let obj = {
  x: 1
}
```

则在引入该模块的时候，需要使用下列一些方式来导入

```typescript
// main.ts
// error: 提示 m1 模块没有默认导出
import v from './m1'

// 可以简单的使用如下方式
import {obj} from './m1'
console.log(obj.x)
// or
import * as m1 from './m1'
console.log(m1.obj.x)
```



## 加载非 `TS` 文件

有的时候，我们需要引入一些 `js` 的模块，比如导入一些第三方的使用 `js` 而非 `ts` 编写的模块，默认情况下 `tsc` 是不对非 `ts` 模块文件进行处理的

我们可以通过 `allowJs` 选项开启该特性

```javascript
// m1.js
export default 100;
// main.ts
import m1 from './m1.js'
```

### 非 `ESM` 模块中的默认值问题

 在 `ESM` 中模块可以设置默认导出值

```typescript
export default '开课吧';
```

但是在 `CommonJS` 、`AMD` 中是没有默认值设置的，它们导出的是一个对象（`exports`）

```javascript
module.exports.obj = {
    x: 100
}
```

在 `TypeScript` 中导入这种模块的时候会出现 `模块没有默认导出的错误提示`。

简单一些的做法：

```typescript
import * as m from './m1.js'
```

通过配置选项解决：

**allowSyntheticDefaultImports**

设置为：`true`，允许从没有设置默认导出的模块中默认导入。

虽然通过上面的方式可以解决编译过程中的检测问题，但是编译后的具体要运行代码还是有问题的

**esModuleInterop**

设置为：`true`，则在编译的同时生成一个 `__importDefault` 函数，用来处理具体的 `default` 默认导出

> 注意：以上设置只能当 `module` 不为 `es6+` 的情况下有效



### 以模块的方式加载 JSON 格式的文件

`TypeScript 2.9+` 版本添加了一个新的编译选项：`resolveJsonModule`，它允许我们把一个 `JSON` 文件作为模块进行加载

**resolveJsonModule**

设置为：`true` ，可以把 `json` 文件作为一个模块进行解析

**data.json**

```json
{
    "name": "zMouse",
    "age": 35,
    "gender": "男"
}
```

**ts文件**

```typescript
import * as userData from './data.json';
console.log(userData.name);
```

## 模块解析策略
### 什么是模块解析

模块解析是指编译器在查找导入模块内容时所遵循的流程。



### 相对与非相对模块导入

根据模块引用是相对的还是非相对的，模块导入会以不同的方式解析。

#### 相对导入

相对导入是以 `/`、`./` 或 `../` 开头的引用

```typescript
// 导入根目录下的 m1 模块文件
import m1 from '/m1'
// 导入当前目录下的 mods 目录下的 m2 模块文件
import m2 from './mods/m2'
// 导入上级目录下的 m3 模块文件
import m3 from '../m3'
```

#### 非相对导入

所有其它形式的导入被当作非相对的

```typescript
import m1 from 'm1'
```



### 模块解析策略

为了兼容不同的模块系统（`CommonJS`、`ESM`），`TypeScript` 支持两种不同的模块解析策略：`Node`、`Classic`，当 `--module` 选项为：`AMD`、`System`、`ES2015` 的时候，默认为 `Classic` ，其它情况为 `Node`

#### --moduleResolution 选项

除了根据 `--module` 选项自动选择默认模块系统类型，我们还可以通过 `--moduleResolution` 选项来手动指定解析策略

```json
// tsconfig.json
{
  ...,
  "moduleResolution": "node"
}
```



### Classic 模块解析策略

该策略是 `TypeScript` 以前的默认解析策略，它已经被新的 `Node` 策略所取代，现在使用该策略主要是为了向后兼容

#### 相对导入

```typescript
// /src/m1/a.ts
import b from './b.ts'
```

解析查找流程：

1. src/m1/b.ts

**默认后缀补全**

```typescript
// /src/m1/a.ts
import b from './b'
```

解析查找流程：

1. /src/m1/b.ts

2. /src/m1/b.d.ts

#### 非相对导入

```typescript
// /src/m1/a.ts
import b from 'b'
```

对于非相对模块的导入，则会从包含导入文件的目录开始依次向上级目录遍历查找，直到根目录为止

1. /src/m1/b.ts

2. /src/m1/b.d.ts
3. /src/b.ts
4. /src/b.d.ts
5. /b.ts
6. /b.d.ts



### Node 模块解析策略

该解析策略是参照了 `Node.js` 的模块解析机制

### 相对导入

```js
// node.js
// /src/m1/a.js
import b from './b'
```

在 `Classic` 中，模块只会按照单个的文件进行查找，但是在 `Node.js` 中，会首先按照单个文件进行查找，如果不存在，则会按照目录进行查找

1. /src/m1/b.js
2. /src/m1/b/package.json中'main'中指定的文件
3. /src/m1/b/index.js

#### 非相对导入

```js
// node.js
// /src/m1/a.js
import b from 'b'
```

对于非相对导入模块，解析是很特殊的，`Node.js` 会这一个特殊文件夹 `node_modules` 里查找，并且在查找过程中从当前目录的 `node_modules` 目录下逐级向上级文件夹进行查找

1. /src/m1/node_modules/b.js
2. /src/m1/node_modules/b/package.json中'main'中指定的文件
3. /src/m1/node_modules/b/index.js
4. /src/node_modules/b.js
5. /src/node_modules/b/package.json中'main'中指定的文件
6. /src/node_modules/b/index.js
7. /node_modules/b.js
8. /node_modules/b/package.json中'main'中指定的文件
9. /node_modules/b/index.js



### TypeScript 模块解析策略

`TypeScript` 现在使用了与 `Node.js` 类似的模块解析策略，但是 `TypeScript` 增加了其它几个源文件扩展名的查找（`.ts`、`.tsx`、`.d.ts`），同时 `TypeScript` 在 `package.json` 里使用字段 `types` 来表示 `main` 的意义

## 命名空间
在 `TS` 中，`export` 和 `import` 称为 外部模块，`TS` 中还支持一种内部模块 `namespace`，它的主要作用只是单纯的在文件内部（模块内容）隔离作用域

```typescript
namespace k1 {
    let a = 10;
    export var obj = {
        a
    }
}

namespace k2 {
    let a = 20;
    console.log(k1.obj);
}
```





