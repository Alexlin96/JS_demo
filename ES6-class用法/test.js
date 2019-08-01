class Parent{
    constructor(){
        this.name = 'alex';
    }
    callName(){
        this.callAge();
        
    }
    callAge(){
        console.log('namesss',this.name);
    }
}
class Children extends Parent{
    constructor(){
        super();
        this.name = 'jay';
    }
    callName(){  // 重新覆盖继承父类的方法
        console.log('children-name',this.name);
    }
}
new Children().callName()
