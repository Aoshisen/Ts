//我们可以通过内置对象类型对变量进行标注
var arr = [1, 2, 3];
var obj = {};
var date = new Date();
//定义一个存储规则的这么一个常量Person
//在需要的时候调用他就行了
var user1 = {
    username: "Ass",
    age: 23
};
//但是这个interface 不能实现某些具体的功能，他就只能被当成一个常量使用
//如果想要实现某些功能的话那么就要用到class
var PersonPro = /** @class */ (function () {
    function PersonPro(username, age) {
        this.username = username;
        this.age = age;
    }
    return PersonPro;
}());
//这样在代码中就可以这样使用了
var p2 = new PersonPro("Ass", 23);
