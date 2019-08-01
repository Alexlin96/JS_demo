//hash判断
function checkString(str) {
    let num = 0;
    let datas = str.split('');
    let hash = {};
    for (let i = 0; i < datas.length; i++) {
        if (!hash[datas[i]]) {
            hash[datas[i]] = true;
        } else {
            num++;
        }
    }
    return num > 0 ? false : true;
}

//set去重判断
function setString(str) {
    let flag = true;
    let datas = Array.from(new Set(str.split('')));
    if (datas.length != str.split('').length) {
        flag = false;
    }
    return flag;
}



console.log(setString('abca'))


const cars = { BMW: 3, Tesla: 2, Toyota: 1 }// es5const map1 = new Map()Object.keys(cars).map(key => {  map1.set(key, cars[key])})console.log(map1) // Map { 'BMW': 3, 'Tesla': 2, 'Toyota': 1 }// es2016const map2 = new Map(Object.entries(cars))console.log(map2) // Map { 'BMW': 3, 'Tesla': 2, 'Toyota': 1 }