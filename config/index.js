const config = {
  projectName: 'taro-webpack5-mobx',
  date: '2023-4-27',
  designWidth: 750,
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2
  },
  sourceRoot: 'src',
  outputRoot: 'dist',
  plugins: [],
  defineConstants: {
  },
  copy: {
    patterns: [
    ],
    options: {
    }
  },
  framework: 'react',
  compiler: {
    type: 'webpack5',
    prebundle: {
      enable: false,
    }
  },
  cache: {
    enable: false // Webpack 持久化缓存配置，建议开启。默认配置请参考：https://docs.taro.zone/docs/config-detail#cache
  },
  mini: {
    postcss: {
      pxtransform: {
        enable: true,
        config: {

        }
      },
      url: {
        enable: true,
        config: {
          limit: 1024 // 设定转换尺寸上限
        }
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    },
    webpackChain(chain, webpack) {
      console.log('44', webpack.ProvidePlugin);
      // chain.merge({
      //   plugins: [
      //     new webpack.DefinePlugin({
      //       'process.env.ZZJ': '"zzj"',
      //     }),
      //     new webpack.ProvidePlugin({
      //       window: ['window'],
      //       // ...
      //     })
      //   ]
      // })
      chain.plugin('provider3').use(webpack.ProvidePlugin, [{

        // Symbol: ['es6-symbol'],
        /* document: [
          '@tarojs/runtime',
          'document'
        ],
        navigator: [
          '@tarojs/runtime',
          'navigator'
        ],
        requestAnimationFrame: [
          '@tarojs/runtime',
          'requestAnimationFrame'
        ],
        cancelAnimationFrame: [
          '@tarojs/runtime',
          'cancelAnimationFrame'
        ],
        Element: [
          '@tarojs/runtime',
          'TaroElement'
        ],
        SVGElement: [
          '@tarojs/runtime',
          'SVGElement'
        ],
        MutationObserver: [
          '@tarojs/runtime',
          'MutationObserver'
        ],
        history: [
          '@tarojs/runtime',
          'history'
        ],
        location: [
          '@tarojs/runtime',
          'location'
        ],
        URLSearchParams: [
          '@tarojs/runtime',
          'URLSearchParams'
        ],
        URL: [
          '@tarojs/runtime',
          'URL'
        ] */
      }])
    },
  },
  h5: {
    publicPath: '/',
    staticDirectory: 'static',
    postcss: {
      autoprefixer: {
        enable: true,
        config: {
        }
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    }
  }
}

module.exports = function (merge) {
  if (process.env.NODE_ENV === 'development') {
    return merge({}, config, require('./dev'))
  }
  return merge({}, config, require('./prod'))
}
