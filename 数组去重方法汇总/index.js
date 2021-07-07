/*
 * @Autor: alexlin
 * @Date: 2020-03-18 14:27:01
 * @Version: xxx.v1.0
 * @LastEditTime: 2020-05-22 16:27:22
 * @Description: 
 */ 
//1、遍历法：
// 最简单数组去重法
function setArrayOrder(array) {
  let n = []; //一个新的临时数组
  //遍历当前数组
  for (let i = 0; i < array.length; i++) {
    //如果当前数组的第i已经保存进了临时数组，那么跳过，
    //否则把当前项push到临时数组里面
    if (n.indexOf(array[i]) === -1) n.push(array[i]);
  }
  return n;
}

//测试：
let arr1 = [11, 23, 4, 5, 6, 7, 88, 88, 11];
console.log(setArrayOrder(arr1));

/*--------------------------------------------------------------------*/

//2、hash键值对法
// 速度最快， 占空间最多（空间换时间）就是占用的内存大一些
function distinct(arr) {
  let len = arr.length,
    hash = {},
    myArr = [];
  //对象属性开关门
  for (let i = 0; i < len; i++) {
    if (!hash[arr[i]]) {
      hash[arr[i]] = true;
      myArr.push(arr[i]);
    }
  }
  return myArr;
}
//测试：
let arr2 = [1, 2, 3, 2];
console.log(distinct(arr2));

/*--------------------------------------------------------------------*/

//3、数组下标判断法
function arrIndexOrder(array) {
  let n = [array[0]]; //结果数组
  //从第二项开始遍历
  for (let i = 1; i < array.length; i++) {
    //如果当前数组的第i项在当前数组中第一次出现的位置不是i，
    //那么表示第i项是重复的，忽略掉。否则存入结果数组
    if (array.indexOf(array[i]) === i) n.push(array[i]);
  }
  return n;
}
//测试：
let arr3 = [1, 2, 3, 2, 8, 8, 5];
console.log(arrIndexOrder(arr3));

/*--------------------------------------------------------------------*/

//4、排序后相邻去除法
// 将相同的值相邻，然后遍历去除重复值
function sortArrOrder(array) {
  array.sort();
  let re = [array[0]];
  for (let i = 1; i < array.length; i++) {
    if (array[i] !== re[re.length - 1]) {
      //相邻判断是否是一样的
      re.push(array[i]);
    }
  }
  return re;
}

//测试：
let arr4 = [1, 2, 3, 2, 8, 8, 5, "a", "b", 3, "a"];
console.log(sortArrOrder(arr4));

/*--------------------------------------------------------------------*/

// 5、include去重(同理indexof也可以)
function uniq(array) {
  let res = [];
  for (let i = 0; i < array.length; i++) {
    if (!res.includes(array[i])) {
      // 如果res中没有array[i],则添加到数组中
      res.push(array[i]);
    }
  }
  return res;
}
// 测试：
let arr5 = [1, 2, 3, 2, 8, 8, 5, "a", "b", 3, "a"];
console.log(uniq(arr5));


// es6 Set去重
function setFn(arr) {
  const res = Array.from(new Set(arr))
  return res
}
// 测试：
let arr6 = [1, 2, 3, 2, 8, 8, 5, "a", "b", 3, "a"];
console.log(setFn(arr6));

// 排序后去重 相邻字符比较
function sortFn(arr) {
  arr.sort()
  let now = ''
  let res = []
  for (let i = 0; i < arr.length; i++) {
    if (i === 0 || now !== arr[i]) {
      now = arr[i]
      res.push(arr[i])
    }
  }
  return res
}
let arr7 = [1, 2, 3, 2, 8, 8, 5, "a", "b", 3, "a"];
console.log(sortFn(arr7));

