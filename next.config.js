const childProcess = require('child_process');

const commitID = childProcess.execSync('git rev-parse HEAD').toString();

module.exports = {
	swcMinify: true,
	webpack: (config) => {
		config.module.rules.push(
			{
				test: /\.svg$/,
				use: [
					{ loader: '@svgr/webpack' }
				]
			}
		);

		return config;
	},
	env: {
		NEXT_PUBLIC_COMMIT_ID: commitID
	},
	images: {
		domains: ['api.mineatar.io', 'localhost']
	},
	experimental: {
		appDir: true
	}
};