module.exports = {
	lintOnSave:false,
	devServer: {
		port: 4000,
		proxy: {
			'/api': {
				target: 'http://localhost:8080',
				changeOrigin: true,
				pathRewrite: {
					'^/api': ''
				}
			}
		}
	}
};
