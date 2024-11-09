const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/user',
        createProxyMiddleware({
            target: 'http://10.150.151.149:8080',
            changeOrigin: true
        })
    );
};
