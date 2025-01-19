const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function (app) {
    app.use(
        '/api',
        createProxyMiddleware({
            //서버 url
            target: 'http://34.64.179.101:80',
            changeOrigin: true,
            pathRewrite: { // /api를 지우고 요청을 보냄
                '^/api': '',
            },
        })
    );
};