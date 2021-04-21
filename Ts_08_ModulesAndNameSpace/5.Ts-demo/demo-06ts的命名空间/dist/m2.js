var k1;
(function (k1) {
    let a = 10;
    k1.obj = {
        a
    };
})(k1 || (k1 = {}));
(function (k1) {
    let b = 10;
    k1.obj2 = {
        b
    };
})(k1 || (k1 = {}));
var k2;
(function (k2) {
    let a = 20;
    console.log(k1.obj);
})(k2 || (k2 = {}));
