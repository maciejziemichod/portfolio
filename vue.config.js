// const path = require('path')
// const PrerenderSPAPlugin = require('prerender-spa-plugin')

module.exports = {
  chainWebpack: (config) => {
    config.module
      .rule("pdf")
      .test(/\.(pdf)(\?.*)?$/)
      .use("file-loader")
      .loader("file-loader")
      .options({
        name: "assets/pdf/[name].[hash:8].[ext]",
      });
  },
  // publicPath: "/portfolio/",
  // configureWebpack: () => {
  //   if (process.env.NODE_ENV !== 'production') return;
  //   return {
  //     plugins: [
  //       new PrerenderSPAPlugin(
  //         // Absolute path to compiled SPA
  //         path.resolve(__dirname, 'dist'),
  //         // List of routes to prerender
  //         [ '/'],
  //         {
  //           // options
  //         }
  //       ),
  //     ]
  //   }
  // }
};
