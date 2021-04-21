
class Person{
    static type="人";
    name: string;
    age: number;
    gender: string;
    //类的构造函数也属于类
    constructor(
        name: string, age: number, gender: '男'|'女' = '男'
    ){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    public eat(): void {
        // ...
      }
}

//在声明了一个对象的时候会同时声明一个利用该类new出来的一个对象的类型
//类型的名字也叫Person
//这是new出来的对象的结构
// interface Person {
//     //     name: string,
//     //     age: number,
//     //     gender: string,
//     //     eat(): void
//     // }

//属于类的构造函数 这是Person的构造函数类型 表明了 Person 这个函数只能被new

interface PersonConstructor {
    new (name: string, age: number, gender: '男'|'女'): Person,
    type: string
}
let p1 = new Person('zMouse', 35, '男');
p1.eat();
Person.type;

let fn:PersonConstructor = function(name: string, age: number, gender: '男'|'女') {
    return new Person(name, age, gender);
}

let p2 = new fn('zMouse', 35, '男');



function fn1(arg: typeof Person) {
    // arg.eat();
    new arg('zMouse', 35, '男');
}

fn1( Person );