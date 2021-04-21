var User = /** @class */ (function () {
    function User(id, username, _allowFileTypes) {
        this.id = id;
        this.username = username;
        this._allowFileTypes = _allowFileTypes;
    }
    //成员属性也申明成静态的
    User.info = function () {
        // 类的静态成员都是使用 类名.静态成员 来访问
        // VIP 这种类型的用户允许上传的所有类型有哪一些
        console.log(User.ALLOW_FILE_TYPE_LIST);
        // 当前这个 vip 用户允许上传类型有哪一些
        // console.log(this._allowFileTypes);
    };
    return User;
}());
var user1 = new User(1, 'mt', ['png', 'gif']);
User.ALLOW_FILE_TYPE_LIST;
User.info();
