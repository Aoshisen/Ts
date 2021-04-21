//相对导入查找规则，从当前目录开始
import b from './b.ts';


/* 
// 相对补全，这个适用于指定入口的文件，文件夹
import b from './b'; */




/* 
// 非相对导入
import b from 'b';
1.首先查询当前目录下面的补全文件 ./b.ts
2.然后查询当前目录下的名字为b的文件夹
3.如果没有就再向上一级查找为b.ts的文件
4.上一级的文件夹
...
直到根目录 */


// import c from '../c';

import c from '../c';