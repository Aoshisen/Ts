//导出语法

define (function(reuire,exports,module){
    let a=1;
    let b=2;


    //原生的返回形式就在define 里面的函数里面return 就行了
return {
    x:a,
    y:b
}


    //结合了CommonJs规范的输出
/*     exports.x=a;
    exports.y=b */



    /*     module.exports={
        x:a,
        y:b,
    } */
})