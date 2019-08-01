function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  
  const member = new Person("Lydia", "Hallie");
//   Person.prototype.getFullName = () => {   //不能像使用常规对象那样向构造函数添加属性。 如果要一次向所有对象添加功能，则必须使用原型。
//     this.firstName + this.lastName;    // 箭头函数this指向定义者 此时this应该指向widow（浏览器环境下)或者global（node环境）
//   }

  Person.prototype.getFullName = function () {
    console.log(this)           //  普通函数this指向调用者 此时指向member实例
    this.firstName + this.lastName;
  }

  member.getFullName();


  

