/*
 * @Description:
 * @Author: Sunly
 * @Date: 2023-08-18 02:30:40
 */
import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import WujieVue from "wujie-vue3";
import router from "./router";

const { preloadApp } = WujieVue;

// preloadApp({
//   name: "sub1",
// });

// preloadApp({
//   name: "sub2",
// });

createApp(App).use(WujieVue).use(router).mount("#app");
