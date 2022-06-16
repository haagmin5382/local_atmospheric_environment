const { createProxyMiddleware } = require("http-proxy-middleware");
const key = process.env.REACT_APP_ACCESS_TOKEN;

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/api", {
      target: `http://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty?serviceKey=${key}&returnType=json&numOfRows=100&`,
      changeOrigin: true,
      pathRewrite: {
        "^/api": "",
      },
    })
  );
};
