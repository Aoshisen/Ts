//当前目录下的b.ts
import b from './b';

//当没有c.ts的时候自动查找c文件夹下面的index.ts
import c from './c';
//如果没有index.ts文件或者入口文件不是叫index ,那么配置package.json文件指定入口
import d from './d';


//如果通过非相对路径引入
//首先查询本目录下的node_modules 没有查询上一级目录下面的e.js文件
import e from 'e';

//如果没有那么查询文件f文件夹下面的index.js文件
import f from 'f';


//如果没有那么查询package.json文件下面指定的入口文件
import g from 'g';

g.v