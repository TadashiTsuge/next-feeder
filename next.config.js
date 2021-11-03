const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");


const isProd = process.env.NODE_ENV == 'production';

const url = isProd ? 'https://sub0000545227.hmk-temp.com/feeder' : '';

module.exports = withPWA({
  reactStrictMode: true,
  assetPrefix: url,
  publicRuntimeConfig: {
    basePath: url,
  },
  pwa: {
    dest: "public", // swの出力ディレクトリ
    runtimeCaching,
  },
});
