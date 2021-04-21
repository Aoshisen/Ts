//枚举类型相当于给一些不那么语意化的词起一个方便好记的名字 相当与声明了一系列的常量
enum HTTP_CODE{
    OK=200,
    NOT_FOUND=404,
    METHOD_NOT_ALLOWED
}
//METHOD_NOT_ALLOWED 的值默认是上一个加上一,如果没有值，那么会默认是1

enum URLS{
    USER_REGISETER='/user/register',
    USER_LOGIN="/user/login",
    //如果前一个枚举值类型为字串，则后续枚举必须手动赋值
    INDEX=1
}
