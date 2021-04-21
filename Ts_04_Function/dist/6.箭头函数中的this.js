var Obj2 = {
    a: 1,
    fn: function (x) {
        var _this = this;
        return function () {
            console.log(_this, x);
        };
    }
};
var callBackfn = Obj2.fn("1");
console.log(callBackfn);
