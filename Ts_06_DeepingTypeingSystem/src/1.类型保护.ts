// 我们定义一个函数，他的参数有可能是数字也有可能是字符串
function fn (a:number|string){
    // a.substring 这样调用是有问题的因为这里无法确定a到底是什么类型
    // 所以现在有两种解决办法


             // 1. 类型断言
    (<string> a).substring(1);
    
    
    // 2.类型保护
    // 用if else 来判断当前值的类型从而执行对应的逻辑
    if(typeof a ==="string"){
        a.substring(1);
    }
    else{
        a.toFixed(1)
    }
}



// 自定义保护类型 

//这种用法比较高级

// 需要用到 data is Element[]|NodeList 这样的语句块

//首先定义一个函数 判断当前值的类型

function canEach(data:any):data is Element[]|NodeList{
    return data.forEach !==undefined;
}

//这里是主要的逻辑
function fn2(elements:Element[]|NodeList|Element){
    //如果是Element[] 或者是NodeList
    if(canEach(elements)){
        elements.forEach((element:Element)=>{
            element.className="ass"
        })
    }
    else{
        elements.className="Element"
    }
}
    
