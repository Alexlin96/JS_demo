// 概念 斐波那契数列（Fibonacci sequence），又称黄金分割数列、因数学家列昂纳多·斐波那契（Leonardoda Fibonacci）以兔子繁殖为例子而引入，故又称为“兔子数列”，指的是这样一个数列：1、1、2、3、5、8、13、21、34、……在数学上，斐波纳契数列以如下被以递归的方法定义：F(0)=1，F(1)=1, F(n)=F(n-1)+F(n-2)（n>2，n∈N*）, 这个数列从第3项开始，每一项都等于前两项之和
function fibonacci(n) {
  if(n <= 1) return 1
  return fibonacci(n - 1) + fibonacci(n - 2)
}

// 优化版
function fibonacci_1(n , ac1 = 1 , ac2 = 1) {
  if(n <= 1) return ac2
  return fibonacci_1(n - 1, ac2, ac1 + ac2)
}