// Object.defineProperty(obj,key,descriptor)  // obj 定义属性的对象 key 要定义或修改的属性的名称 descriptor定义或修改的属性描述符

function observable(obj) {
  // Vue 框架是通过遍历数组 和递归遍历对象，从而达到利用 Object.defineProperty() 也能对对象和数组（部分方法的操作）进行监听。
  if (!obj || typeof obj !== "object") return;

  Object.keys(obj).forEach((key) => {
    defineReactive(obj, key, obj[key]);
  });

  return obj;
}

function defineReactive(obj, key, val) {
  // obj 定义属性的对象 key 要定义或修改属性的名称  val 将要被修改的值
  Object.defineProperty(obj, key, {
    get() {
      console.log(`${key}属性被读取了...`);
      return val;
    },
    set(newVal) {
      console.log(`${key}属性被修改了...`);
      val = newVal;
    },
  });
}

let person = observable({
  name: "alex",
  age: 23,
});

person.name = "jay";
