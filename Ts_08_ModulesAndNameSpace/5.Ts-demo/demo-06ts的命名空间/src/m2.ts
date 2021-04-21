namespace k1 {
    let a = 10;
    export var obj = {
        a
    }
}

namespace k1 {
    let b = 10;
    export var obj2 = {
        b
    }
}

namespace k2 {
    let a = 20;
    console.log(k1.obj);
}