// class User {
//     //如果不用public private protect 关键字的话
//     //需要在这里申明变量的类型
//     id:number;
//     username:string;
//     constructor(id:number,username:string){
//     this.id=id;
//     this.username=username;
//     //创建类的函数，当类通过new实例化的时候，就会执行constructor里面的逻辑
//     console.log("这是构造函数，对类成员属性进行初始化赋值")
//     //当然这个函数不会有返回值
    
// }
// //在constructor外面也可以定义方法和属性
// postArticle(title:string,content:string){
//     console.log(`${this.username}发表了一篇文章 ：${title}内容如下${content}` )
// }
// }

// let user1=new User(1,"Ass")
// //在class constructor 的外面的函数，需要通过实例调用
// user1.postArticle("这是文章标题","这是文章内容")


