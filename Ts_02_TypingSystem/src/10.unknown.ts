//unknown是安全版本的any类型，他不具有任何的属性方法
//unknown只能赋值给unknown 或者是undefined

// let c: any = '开课吧';

// let d: number = 1;

// d.toFixed(1);

// d = c;
// d.toFixed(1);
//这个逻辑本来是有问题的但是不会报错;

//下面我们来用unknown来改造一下

// let c: unknown = '开课吧';

// let d: number = 1;

// d.toFixed(1);

// d = c;//由于unknown类型的变量只能赋值给unknown类型，那么这里就会出现错误提示

// d.toFixed(1);

let c: any;
c.a;

let d: unknown;
d.b; //由于unknown没有任何属性和方法，自然就会报错
