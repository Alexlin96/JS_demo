
function isChinese(str) {
    const re = /^[\u4e00-\u9fa5]+$/;   //使用的Unicode 编码 4e00 和 9fa5 分别表示第一个汉字和最后一个汉字的编码
    return re.test(str);
  }
  isChinese('林志强');
