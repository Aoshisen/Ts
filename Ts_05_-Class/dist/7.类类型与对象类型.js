var Person = /** @class */ (function () {
    //类的构造函数也属于类
    function Person(name, age, gender) {
        if (gender === void 0) { gender = '男'; }
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    Person.prototype.eat = function () {
        // ...
    };
    Person.type = "人";
    return Person;
}());
var p1 = new Person('zMouse', 35, '男');
p1.eat();
Person.type;
var fn = function (name, age, gender) {
    return new Person(name, age, gender);
};
var p2 = new fn('zMouse', 35, '男');
function fn1(arg) {
    // arg.eat();
    new arg('zMouse', 35, '男');
}
fn1(Person);
