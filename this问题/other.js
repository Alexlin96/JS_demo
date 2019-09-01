var a = 'alex';

function demo (){
    this.a = 5566;
    let obj = {
        a:'jay',
        say:()=>{
            console.log('this',this.a);
        }
    }
    obj.say()
}
demo ()
