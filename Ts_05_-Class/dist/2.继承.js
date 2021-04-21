// class User{
//     constructor(
//         public id:number,
//         public username:string,
//     ){
//     }
//     postArticle(title: string, content: string) {
//         console.log(`${this.username} 发表了一篇文章：${title}`)
//     }
// }
// class VIP extends User{
//     constructor(
//         id:number,
//         username:string,
//         public score:number
//     ){
//         super(id,username);
//         //必须在super调用之后才能访问this
//         console.log("子类的构造函数")
//     }
// /*     //重写：重新实现父类的方法，参数的个数和参数的类型相同
//     postArticle(title:string,content:string){
//     this.score++;
//     console.log(`${this.username}发表了一篇名叫${title}的文章，积分${this.score}`)
//     } */
//     //重载 参数个数和参数类型相同
//     postArticle(title:string,content:string):void;
//     postArticle(title:string,content:string,file:string):void;
//     postArticle(title:string,content:string,file?:string):void{
//         //首先要继承父级的方法
//         super.postArticle(title,content)
//         if(file){
//             this.postAttachment(file)
//         }
//     }
//     //组件实现上传附件的功能
//     postAttachment(file:string):void{
//         console.log(`${this.username}上传了一个附件${file}`)
//     }
// }
// let vip1=new VIP(1,"ASS",0)
// vip1.postArticle('标题',"内容","1.png")
// vip1.postAttachment('1.png')
