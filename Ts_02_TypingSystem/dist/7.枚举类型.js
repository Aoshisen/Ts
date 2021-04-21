//枚举类型相当于给一些不那么语意化的词起一个方便好记的名字 相当与声明了一系列的常量
var HTTP_CODE;
(function (HTTP_CODE) {
    HTTP_CODE[HTTP_CODE["OK"] = 200] = "OK";
    HTTP_CODE[HTTP_CODE["NOT_FOUND"] = 404] = "NOT_FOUND";
    HTTP_CODE[HTTP_CODE["METHOD_NOT_ALLOWED"] = 405] = "METHOD_NOT_ALLOWED";
})(HTTP_CODE || (HTTP_CODE = {}));
//METHOD_NOT_ALLOWED 的值默认是上一个加上一,如果没有值，那么会默认是1
var URLS;
(function (URLS) {
    URLS["USER_REGISETER"] = "/user/register";
    URLS["USER_LOGIN"] = "/user/login";
    //如果前一个枚举值类型为字串，则后续枚举必须手动赋值
    URLS[URLS["INDEX"] = 1] = "INDEX";
})(URLS || (URLS = {}));
