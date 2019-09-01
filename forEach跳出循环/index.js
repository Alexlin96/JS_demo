// 使用try catch来跳出循环
let arrayList = [1,2,3,4,5,6];

try {
    arrayList.forEach((item)=>{
        console.log('item',item);
        if(item === 3){
            throw new Error(item)
        }
    })
} catch (error) {
    return console.log(`捕获到${error}跳出循环`)
}

