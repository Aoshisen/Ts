// class User{
//     constructor(
//         //readonly 可以访问 但是确定了就不可以修改
//         readonly id:number,
//         //protected 可以访问 但是不能在外部修改
//         protected username:string,
//         //private 私有的变量 外部包括子类都不能访问或者修改
//         private _password:string
//     ){
//     }
//     method1() {
//                 this.username;
//                 //不可以访问私有变量
//                 // this._password;
//             }
//      setPassord(password:string){
//          if(password.length>=6){
//              this.password=password
//          }
//      }
//     //  可以通过defineProporty 来设置password的值
//     set password(password:string){
//         if(password.length>=6){
//             this.password=password
//         }
//     }
//     get password(password:string){
//         return '******'
//     }
// }
