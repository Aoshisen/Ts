interface IResponseData<T> {
    code: number;
    message?: string;
    data: T;
}





// 用户接口
interface IResponseUserData {
    id: number;
    username: string;
    email: string;
}
// 文章接口
interface IResponseArticleData {
    id: number;
    title: string;
    author: IResponseUserData;
}







//我们定义一个数据请求的函数

async function getData<U>(url:string){
    //利用fetch请求数据
    //并且根据类型参数定义返回的类型的具体类型
    let response=await fetch(url);
    //需要额外的DOM 库
    
    let data:Promise<IResponseData<U>>=await response.json();
    return data;
}


(async function() {

    let userData = await getData<IResponseUserData>('/user');
    userData.data.id;

    let articleData = await getData<IResponseArticleData>('/article');
    articleData.data.author;

})()