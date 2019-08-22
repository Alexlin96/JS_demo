//闭包实现变量私有化
function Person(params) {
    let name = 'alex';
    this.getName = () =>{
        return name
    }
    this.setName = (newName) =>{
        name = newName
    }
}

const alex =  new Person();
console.log('alex',alex.getName());
alex.setName('jay');
console.log(alex.getName());
console.log(name);

// Person()函数体内的name变量只有getName和setName两个函数能够访问到，外部无法访问，相当于将变量私有化。

