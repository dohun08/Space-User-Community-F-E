const { createProxyMiddleware } = require('http-proxy-middleware');
// http://10.150.149.20:8080 세준
// http://10.150.151.149:8080 동욱
module.exports = function (app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'http://10.150.149.20:8080',
            changeOrigin: true,
            pathRewrite: { ///api를 지우고 요청을 보냄
                '^/api': '',
            },
        })
    );
};
