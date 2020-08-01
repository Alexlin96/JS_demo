// 冒泡排序

function bubleSort(arr) {
  const len = arr.length
  for(let i = 0; i < len; i++) { // 比较的趟数
    for(let j = 0; j< len-i; j++) { // 每次比较的次数
      if (arr[j] > arr[j+1]) {
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]] // 交换位置
      }
    }
  }
  return arr
}

console.log('arr', bubleSort([4,2,5,8,1]))


// 选择排序
function selectSort(arr) {
  const len = arr.length
  let min; // 最小值下标
  for(let i = 0; i < len; i++) {
    min = i
    for(let j = i+1; j < len; j++) {
      if(arr[j] < arr[min]) {
        min = j // 最小值下标
      }
    }
    [arr[i], arr[min]] = [arr[min], arr[i]]; // 解构赋值 交换值的位置
  }
  return arr
}


