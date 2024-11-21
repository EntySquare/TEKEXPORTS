// 管理所有的全局组件
import { App } from "vue";
import LINE from "./LINE.vue";
import CONTANT from "./CONTANT.vue";
// 将全局组件封装到插件中
export default {
  install(Vue: App) {
    Vue.component("LINE", LINE);
    Vue.component("CONTANT", CONTANT);
  },
};
