// 冒泡排序     时间复杂度 O(n*2)
/*
算法步骤如下：

比较相邻的元素。如果第一个比第二个大，就交换他们两个；
对每一对相邻元素作同样的工作，从开始第一对到结尾的最后一对。这步做完后，最后的元素会是最大的数；
针对所有的元素重复以上的步骤，除了最后一个；
持续每次对越来越少的元素重复上面的步骤，直到没有任何一对数字需要比较。

*/
const bubbleSort = (arr) => {
  const len = arr.length - 1;
  for (let i = 0; i < len; ++i) {
    /* 外循环为排序趟数，len个数进行len-1趟 */
    for (let j = 0; j < len - i; ++j) {
      /* 内循环为每趟比较的次数，第i趟比较len-i次 */
      if (arr[j] > arr[j + 1]) {
        /* 相邻元素比较，若逆序则交换（升序为左大于右，逆序反之） */
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
};

// 选择排序       时间复杂度 O(n*2)
/*
算法步骤如下：

在未排序序列中找到最小（大）元素，存放到排序序列的起始位置；
然后，再从剩余未排序元素中继续寻找最小（大）元素，然后放到已排序序列的末尾；
以此类推，直到所有元素均排序完毕。 

*/

const selectionSort = (arr) => {
  const len = arr.length;
  let min;
  for (let i = 0; i < len; i++) {
    min = i;
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[min]) {
        min = j; // 记录最小值的下标
      }
    }
    [arr[i], arr[min]] = [arr[min], arr[i]]; // 解构赋值 交换值的位置
  }
  return arr;
};

// 插入排序    时间复杂度 O(n*2)
/*
算法步骤如下：

从第一个元素开始，该元素可以认为已经被排序；
取出下一个元素，在已经排序的元素序列中从后向前扫描；
如果该元素（已排序）大于新元素，将该元素移到下一位置；
重复步骤3，直到找到已排序的元素小于或者等于新元素的位置；
将新元素插入到该位置后；
重复步骤2~5。

*/
const insertionSort = (arr) => {
  const len = arr.length;
  let j, temp;
  for (let i = 1; i < len; i++) {
    temp = arr[i];
    j = i - 1; // 当前排序好的最末尾的坐标
    while (j > 0 && arr[j] > temp) {
      arr[j] = arr[j - 1];
      j--;
    }
    [arr[j], arr[i]] = [arr[i], arr[j]];
  }
  return arr;
};

// 希尔排序 时间复杂度O(nlog*2n)
/*
算法步骤如下：

定义一个用来分割的步长；
按步长的长度K，对数组进行K趟排序；
不断重复上述步骤。

*/
const shellSort = (arr) => {
  let gaps = [5, 3, 1]; // 定义分割步长
  let len = arr.length;
  for (let g = 0; g < gaps.length; g++) {
    // 重复趟数
    for (let i = gaps[g]; i < len; i++) {
      for (let j = i; j >= gaps[g] && arr[j - gaps[g]] > arr[i]; j -= gaps[g]) {
        arr[j] = arr[j - gaps[g]];
      }
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  return arr;
};

// 快速排序 平均O(nlogn) 最坏O(n*2)
// 后面有空再整理
