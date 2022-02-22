const path = require("path");
module.exports = {
  devServer: {
    // ES Lint Error 발생 시 console 창에만 보여짐
    overlay: false,
  },
  css: {
    // Global SCSS Variables
    loaderOptions: {
      scss: {
        // 부트스트랩의 변수를 전역으로 사용하기 위해 선언
        additionalData: `
          @import "@/assets/common/scss/bootstrap/bootstrap.scss";
        `,
      },
    },
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@root": path.join(__dirname, "src"),
        "@router": path.join(__dirname, "src/router"),
        "@js": path.join(__dirname, "src/js"),
        "@views": path.join(__dirname, "src/views"),
        "@views.common": path.join(__dirname, "src/views/front/common"),
        "@views.mobile": path.join(__dirname, "src/views/front/mobile"),
        "@views.pc": path.join(__dirname, "src/views/front/pc"),
        "@views.admin": path.join(__dirname, "src/views/admin"),
        "@router.mobile": path.join(__dirname, "src/router/front/mobile"),
        "@router.pc": path.join(__dirname, "src/router/front/pc"),
        "@router.admin": path.join(__dirname, "src/router/admin"),
        "@assets.mobile": path.join(__dirname, "src/assets/mobile"),
        "@assets.pc": path.join(__dirname, "src/assets/pc"),
        "@assets.admin": path.join(__dirname, "src/assets"),
      },
    },
  },
};