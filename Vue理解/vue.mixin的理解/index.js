// 混入 (mixin) 提供了一种非常灵活的方式，来分发 Vue 组件中的可复用功能。一个混入对象可以包含任意组件选项。当组件使用混入对象时，所有混入对象的选项将被“混合”进入该组件本身的选项

/*
当组件和混入对象含有同名选项时，这些选项将以恰当的方式进行“合并”。

  data对象在内部会进行递归合并，并在发生冲突时以组件数据优先。
  同名钩子函数将合并为一个数组，因此都将被调用。混入对象的钩子将在组件自身钩子之前调用。
  值为对象的选项，例如 methods、components 和 directives，将被合并为同一个对象。两个对象键名冲突时，取组件对象的键值对。

*/

// 定义mixinjs
export default mixin = {
  data() {
    return {
      name: "mixin"
    };
  },
  created() {
    console.log("mixin...", this.name);
  },
  mounted() {},
  methods: {
    //日期转换
    formatDate(dateTime, fmt = "YYYY年MM月DD日 HH:mm:ss") {
      if (!dateTime) {
        return "";
      }
      moment.locale("zh-CN");
      dateTime = moment(dateTime).format(fmt);
      return dateTime;
    }
  }
};

// 在vue文件里使用
import "@/mixin"; // 引入mixin文件
export default {
  mixins: [mixin], //用法
  data() {
    return {
      userName: "adimin",
      time: this.formatDate(new Date()) //这个vue文件的数据源data里面的time就是引用混入进来的方法
    };
  }
};

// 全局使用
import mixin from './mixin'
Vue.mixin(mixin) // 此时全局都会有这个东西
