type IAlowFileTypeList = 'png'|'gif'|'jpg'|'jpeg'|'webp';

class User {
    static readonly ALLOW_FILE_TYPE_LIST:Array<IAlowFileTypeList>

    constructor(
        public id: number,
        public username: string,
        private _allowFileTypes: Array<IAlowFileTypeList>
    ) {

    }
    //成员属性也申明成静态的
    static info():void {
         // 类的静态成员都是使用 类名.静态成员 来访问
        // VIP 这种类型的用户允许上传的所有类型有哪一些
        console.log(User.ALLOW_FILE_TYPE_LIST);
        // 当前这个 vip 用户允许上传类型有哪一些
        // console.log(this._allowFileTypes);
    }

}
let user1 = new User(1, 'mt', ['png', 'gif']);
User.ALLOW_FILE_TYPE_LIST;
User.info();