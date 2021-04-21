## Ts_01 环境的搭建与编译执行

### **环境搭建**

- TypeScript 编写的程序并不能直接通过浏览器运行，我们需要先通过 TypeScript 编译器把 TypeScript 代码编译成 JavaScript 代码

- TypeScript 的编译器是基于 Node.js 的，所以我们需要先安装 Node.js

```bash
yarn global add npm 
```

```bash
node -v #查看当前的node版本
```

### 安装TypeScript的编译器

```bash
npm install -g typescript #通过npm安装
yarn global add typescript # 通过yarn安装
```

```bash
tsc -v # 安装完成后通过命令来查看当前tsc的版本
```

### 编写代码

**代码编辑器-Vscode**

vsCode 和 TypeScript 都是微软的产品， vsCode 本身就是基于 TypeScript 进行开发的， vsCode 对 TypeScript 有着天然友好的支持 https://code.visualstudio.com/

TypeScript 文件
 默认情况下， TypeScript 的文件的后缀为 .ts

TypeScript 代码

```typescript
let str:string="Aoshisen"
```

### 编译执行
使用我们安装的 TypeScript 编译器 tsc 对 .ts 文件进行编译

```bash
tsc helloWorld.ts
```

默认情况下会在当前目录下生成同名的js文件

### 一些游泳的编译选项
**--outdir 指定编译文件输出目录** 

```bash
tsc --outdir ./dist helloWorld.ts
```

**--target 制定编译的代码的版本目标，默认为ES3**

```bash
tsc --outdir ./dist --target ES6 helloWorld.ts
```

**--watch 在监听模式下运行，当文件发生改变的时候自动编译**

```bash
tsc --outDir ./dist --target ES6 --watch helloWorld.ts
```
但是每次都写着么一大堆的配置，会很麻烦且效率低下所以提供了一个编译配置文件 tsconfig.json在用户运行tsc命令的时候默认会去找到当前目录下面的tsconfig.json 文件然后根据配置文件里面的配置编译

### 编译配置文件
我们可以把编译的一些选项保存在一个指定的 json 文件中，默认情况下 tsc 命令运行的时候会自动 去加载运行命令所在的目录下的 tsconfig.json 文件，配置文件格式如下

```json
{
    "compilerOptions": {
        "outDir": "./dist",
        "target": "ES2015",
    "watch": true,
},
// ** : 所有目录(包括子目录)
// * : 所有文件，也可以指定类型 *.ts "include": ["./src/**/*"]
}
```

有了单独的配置文件，我们就可以直接运行

```bash
tsc
```

### 指定加载的配置文件
使用 --project 或 -p 指定配置文件目录，会默认加载该目录下的 tsconfig.json 文件
```bash
tsc -p ./configs
```

或者 也可以指定某个具体的配置文件

``` bash
tsc -p ./configs/ts.json
```


