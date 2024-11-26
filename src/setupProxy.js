const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function (app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'http://34.64.179.101:8080',
            changeOrigin: true,
            pathRewrite: { ///api를 지우고 요청을 보냄
                '^/api': '',
            },
        })
    );
};
// http://34.64.179.101:8080