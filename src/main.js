import Vue from "vue";
import App from "./App.vue";
// eslint-disable-next-line no-unused-vars
import pcRouter from "./router/pc";
// eslint-disable-next-line no-unused-vars
import mobileRouter from "./router/mobile";
import store from "./store";
import BootstrapVue from "bootstrap-vue";
import "@views.common/components/globalComponents"; // Global Component (PC 모바일 공용)
import "@views.pc/components/pcComponents"; // PC 용 Global Components Manage
import "@views.mobile/components/mobileComponents"; // Mobile 용 Global Components Manage

Vue.use(BootstrapVue);

Vue.config.productionTip = false;

require("./assets/common/scss/app.scss"); // 공통 컴포넌트용 scss

let router;
/* PC */
// router = pcRouter;
// require("./assets/pc/scss/app.scss");

/* Mobile */
router = mobileRouter;
require("./assets/mobile/scss/app.scss");

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
