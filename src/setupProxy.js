const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/api", {
      target: `https://apis.data.go.kr/B552584/ArpltnInforInqireSvc/`,
      changeOrigin: true,
      pathRewrite: {
        "^/api": "",
      },
    })
  );
};
