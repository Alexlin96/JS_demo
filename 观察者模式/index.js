// 观察者
class Observer {
  constructor(obj){
    this.queuedRegisters = new Set(); // 注册的方法
    this.proxy = new Proxy(obj, Observer._handler(this));
  }

  static _handler(instance){ // 拦截处理
    return {
      get(target, key, receiver){ // 递归为对象配置拦截
        const type = typeof target[key];

        if(type === 'object' && type !== null) {
          return new Proxy(target[key], Observer._handler(instance));
        }

        return Reflect.get(target, key);
      },
      set(target, key, newVal, receiver){
        const result = Reflect.set(target, key, newVal);

        instance.notify();

        return result;
      }
    };
  }

  register(fn){
    this.queuedRegisters.add(fn);
  }

  notify(){
    this.queuedRegisters.forEach(fn => {
      fn();
    });
  }

  unregister(fn) {
    this.queuedRegisters.delete(fn);
  }

  unregisterAll() {
    this.queuedRegisters.clear();
  }
};


// test
let data = {
  name: 'Trevor',
  detail: {
    age: 26,
    height: 170,
  }
};
let dataObserver = new Observer(data);
let sayName = function() {
  console.log(data.name);
}

dataObserver.register(sayName);
dataObserver.proxy.detail.age = 17;
// dataObserver.proxy.name = 'Trevor';
// console.log(dataObserver.proxy.detail.age, data.detail.age)