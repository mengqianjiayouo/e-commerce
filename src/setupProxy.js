const proxy = require("http-proxy-middleware");

module.exports = function(app) {
  app.use(
    proxy("/server1/**", {
      // target: "http://47.94.223.5:8004/", //源地址
      target: "https://important.cnshanzhi.com", //源地址
      changeOrigin: true, //改变源
      pathRewrite: {
        "^/server1": "https://important.cnshanzhi.com" //路径重写
      }
    })
  );
  app.use(
    proxy("/server2/**", {
      // target: "http://118.25.155.176/",
      target: "https://news.cnshanzhi.com",
      changeOrigin: true,
      pathRewrite: {
        "^/server2": "https://news.cnshanzhi.com" //路径重写
      }
    })
  );
};
