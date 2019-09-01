class Foo{
    static classMethod(){
        console.log('我不会被继承')
    }
    baseMethod(){
        console.log('我可以被继承')
    }
}
Foo.classMethod()  // 我不会被继承

// Foo.baseMethod()  // 我可以被继承