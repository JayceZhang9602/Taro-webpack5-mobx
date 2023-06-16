{
  target: [
    'web',
    'es5'
  ],
  watchOptions: {
    aggregateTimeout: 200
  },
  mode: 'production',
  devtool: false,
  output: {
    chunkLoadingGlobal: 'webpackJsonp',
    path: '/Users/jaycezhang/Documents/taro-webpack5-mobx/dist',
    publicPath: '/',
    filename: '[name].js',
    chunkFilename: '[name].js',
    globalObject: 'wx',
    enabledLibraryTypes: [],
    devtoolModuleFilenameTemplate: function () { /* omitted long function */ }
  },
  resolve: {
    symlinks: true,
    fallback: {
      fs: false,
      path: false
    },
    alias: {
      'regenerator-runtime': '/Users/jaycezhang/Documents/taro-webpack5-mobx/node_modules/.pnpm/regenerator-runtime@0.11.1/node_modules/regenerator-runtime/runtime-module.js',
      '@tarojs/runtime': '/Users/jaycezhang/Documents/taro-webpack5-mobx/node_modules/.pnpm/@tarojs+runtime@3.6.5/node_modules/@tarojs/runtime/dist/runtime.esm.js',
      '@tarojs/shared': '/Users/jaycezhang/Documents/taro-webpack5-mobx/node_modules/.pnpm/@tarojs+shared@3.6.5/node_modules/@tarojs/shared/dist/shared.esm.js',
      '@tarojs/components$': '@tarojs/plugin-platform-weapp/dist/components-react',
      'react-dom$': '@tarojs/react'
    },
    extensions: [
      '.js',
      '.jsx',
      '.ts',
      '.tsx',
      '.mjs',
      '.vue'
    ],
    mainFields: [
      'browser',
      'module',
      'jsnext:main',
      'main'
    ],
    plugins: [
      /* config.resolve.plugin('MultiPlatformPlugin') */
      new MultiPlatformPlugin(
        'described-resolve',
        'resolve',
        {
          chain: {
            parent: undefined,
            store: new Map([
              [
                'target',
                [
                  'web',
                  'es5'
                ]
              ],
              [
                'watchOptions',
                {
                  aggregateTimeout: 200
                }
              ],
              [
                'mode',
                'production'
              ],
              [
                'devtool',
                false
              ]
            ]),
            devServer: {
              store: new Map([]),
              allowedHosts: {
                store: new Set([])
              },
              shorthands: [
                'after',
                'before',
                'bonjour',
                'clientLogLevel',
                'color',
                'compress',
                'contentBase',
                'disableHostCheck',
                'filename',
                'headers',
                'historyApiFallback',
                'host',
                'hot',
                'hotOnly',
                'http2',
                'https',
                'index',
                'info',
                'inline',
                'lazy',
                'mimeTypes',
                'noInfo',
                'open',
                'openPage',
                'overlay',
                'pfx',
                'pfxPassphrase',
                'port',
                'proxy',
                'progress',
                'public',
                'publicPath',
                'quiet',
                'setup',
                'socket',
                'sockHost',
                'sockPath',
                'sockPort',
                'staticOptions',
                'stats',
                'stdin',
                'useLocalIp',
                'watchContentBase',
                'watchOptions',
                'writeToDisk'
              ],
              after: (value) => this.set(method, value),
              before: (value) => this.set(method, value),
              bonjour: (value) => this.set(method, value),
              clientLogLevel: (value) => this.set(method, value),
              color: (value) => this.set(method, value),
              compress: (value) => this.set(method, value),
              contentBase: (value) => this.set(method, value),
              disableHostCheck: (value) => this.set(method, value),
              filename: (value) => this.set(method, value),
              headers: (value) => this.set(method, value),
              historyApiFallback: (value) => this.set(method, value),
              host: (value) => this.set(method, value),
              hot: (value) => this.set(method, value),
              hotOnly: (value) => this.set(method, value),
              http2: (value) => this.set(method, value),
              https: (value) => this.set(method, value),
              index: (value) => this.set(method, value),
              info: (value) => this.set(method, value),
              inline: (value) => this.set(method, value),
              lazy: (value) => this.set(method, value),
              mimeTypes: (value) => this.set(method, value),
              noInfo: (value) => this.set(method, value),
              open: (value) => this.set(method, value),
              openPage: (value) => this.set(method, value),
              overlay: (value) => this.set(method, value),
              pfx: (value) => this.set(method, value),
              pfxPassphrase: (value) => this.set(method, value),
              port: (value) => this.set(method, value),
              proxy: (value) => this.set(method, value),
              progress: (value) => this.set(method, value),
              'public': (value) => this.set(method, value),
              publicPath: (value) => this.set(method, value),
              quiet: (value) => this.set(method, value),
              setup: (value) => this.set(method, value),
              socket: (value) => this.set(method, value),
              sockHost: (value) => this.set(method, value),
              sockPath: (value) => this.set(method, value),
              sockPort: (value) => this.set(method, value),
              staticOptions: (value) => this.set(method, value),
              stats: (value) => this.set(method, value),
              stdin: (value) => this.set(method, value),
              useLocalIp: (value) => this.set(method, value),
              watchContentBase: (value) => this.set(method, value),
              watchOptions: (value) => this.set(method, value),
              writeToDisk: (value) => this.set(method, value)
            },
            entryPoints: {
              store: new Map([
                [
                  'app',
                  {
                    store: new Set([
                      '/Users/jaycezhang/Documents/taro-webpack5-mobx/src/app.tsx'
                    ])
                  }
                ]
              ])
            },
            module: {
              store: new Map([]),
              rules: {
                store: new Map([
                  [
                    'sass',
                    {
                      store: new Map([
                        [
                          'test',
                          /\.sass$/
                        ]
                      ]),
                      name: 'sass',
                      names: [
                        'sass'
                      ],
                      ruleType: 'rule',
                      ruleTypes: [
                        'rule'
                      ],
                      uses: {
                        store: new Map([])
                      },
                      include: {
                        store: new Set([])
                      },
                      exclude: {
                        store: new Set([])
                      },
                      rules: {
                        store: new Map([])
                      },
                      oneOfs: {
                        store: new Map([
                          [
                            '0',
                            {
                              store: new Map([]),
                              name: '0',
                              names: [
                                'sass',
                                '0'
                              ],
                              ruleType: 'oneOf',
                              ruleTypes: [
                                'rule',
                                'oneOf'
                              ],
                              uses: {
                                store: new Map([
                                  [
                                    '0',
                                    {
                                      store: new Map([
                                        [
                                          'loader',
                                          '/Users/jaycezhang/Documents/taro-webpack5-mobx/node_modules/.pnpm/mini-css-extract-plugin@2.4.6_webpack@5.78.0/node_modules/mini-css-extract-plugin/dist/loader.js'
                                        ]
                                      ]),
                                      name: '0',
                                      shorthands: [
                                        'loader',
                                        'options'
                                      ],
                                      loader: (value) => this.set(method, value),
                                      options: (value) => this.set(method, value)
                                    }
                                  ],
                                  [
                                    '1',
                                    {
                                      store: new Map([
                                        [
                                          'loader',
                                          '/Users/jaycezhang/Documents/taro-webpack5-mobx/node_modules/.pnpm/css-loader@6.7.3_webpack@5.78.0/node_modules/css-loader/dist/cjs.js'
                                        ],
                                        [
                                          'options',
                                          {
                                            importLoaders: 1,
                                            modules: false
                                          }
                                        ]
                                      ]),
                                      name: '1',
                                      shorthands: [
                                        'loader',
                                        'options'
                                      ],
                                      loader: (value) => this.set(method, value),
                                      options: (value) => this.set(method, value)
                                    }
                                  ],
                                  [
                                    '2',
                                    {
                                      store: new Map([
                                        [
                                          'loader',
                                          '/Users/jaycezhang/Documents/taro-webpack5-mobx/node_modules/.pnpm/postcss-loader@7.2.4_@types+node@18.15.11_postcss@8.4.18_ts-node@10.9.1_typescript@4.1.2_webpack@5.78.0/node_modules/postcss-loader/dist/cjs.js'
                                        ],
                                        [
                                          'options',
                                          {
                                            postcssOptions: {
                                              plugins: [
                                                function () { /* omitted long function */ },
                                                function () { /* omitted long function */ },
                                                {
                                                  postcssPlugin: 'postcss-pxtransform',
                                                  prepare: function () { /* omitted long function */ }
                                                },
                                                {
                                                  postcssPlugin: 'postcss-url',
                                                  Once: function () { /* omitted long function */ }
                                                }
                                              ]
                                            }
                                          }
                                        ]
                                      ]),
                                      name: '2',
                                      shorthands: [
                                        'loader',
                                        'options'
                                      ],
                                      loader: (value) => this.set(method, value),
                                      options: (value) => this.set(method, value)
                                    }
                                  ],
                                  [
                                    '3',
                                    {
                                      store: new Map([
                                        [
                                          'loader',
                                          '/Users/jaycezhang/Documents/taro-webpack5-mobx/node_modules/.pnpm/resolve-url-loader@5.0.0/node_modules/resolve-url-loader/index.js'
                                        ],
                                        [
                                          'options',
                                          {}
                                        ]
                                      ]),
                                      name: '3',
                                      shorthands: [
                                        'loader',
                                        'options'
                                      ],
                                      loader: (value) => this.set(method, value),
                                      options: (value) => this.set(method, value)
                                    }
                                  ],
                                  [
                                    '4',
                                    {
                                      store: new Map([
                                        [
                                          'loader',
                                          '/Users/jaycezhang/Documents/taro-webpack5-mobx/node_modules/.pnpm/sass-loader@12.4.0_sass@1.50.0_webpack@5.78.0/node_modules/sass-loader/dist/cjs.js'
                                        ],
                                        [
                                          'options',
                                          {
                                            sourceMap: true,
                                            implementation: {
                                              load: function () { /* omitted long function */ },
                                              compile: function () {
                                                return _call(f, Array.prototype.slice.apply(arguments));
                                              },
                                              compileString: function () {
                                                return _call(f, Array.prototype.slice.apply(arguments));
                                              },
                                              compileAsync: function () {
                                                return _call(f, Array.prototype.slice.apply(arguments));
                                              },
                                              compileStringAsync: function () {
                                                return _call(f, Array.prototype.slice.apply(arguments));
                                              },
                                              Value: function Value0() {
                                              },
                                              SassBoolean: function () {
                                                return _call(f, this, Array.prototype.slice.apply(arguments));
                                              },
                                              SassArgumentList: function () {
                                                return _call(f, this, Array.prototype.slice.apply(arguments));
                                              },
                                              SassColor: function () {
                                                return _call(f, this, Array.prototype.slice.apply(arguments));
                                              },
                                              SassFunction: function () {
                                                return _call(f, this, Array.prototype.slice.apply(arguments));
                                              },
                                              SassList: function () {
                                                return _call(f, this, Array.prototype.slice.apply(arguments));
                                              },
                                              SassMap: function () {
                                                return _call(f, this, Array.prototype.slice.apply(arguments));
                                              },
                                              SassNumber: function () {
                                                return _call(f, this, Array.prototype.slice.apply(arguments));
                                              },
                                              SassString: function () {
                                                return _call(f, this, Array.prototype.slice.apply(arguments));
                                              },
                                              sassNull: {},
                                              sassTrue: {
                                                value: true
                                              },
                                              sassFalse: {
                                                value: false
                                              },
                                              Exception: function () { /* omitted long function */ },
                                              Logger: {
                                                silent: {
                                                  warn: function () {
                                                    return _call(f, Array.prototype.slice.apply(arguments));
                                                  },
                                                  debug: function () {
                                                    return _call(f, Array.prototype.slice.apply(arguments));
                                                  }
                                                }
                                              },
                                              info: 'dart-sass\t1.50.0\t(Sass Compiler)\t[Dart]\ndart2js\t2.16.2\t(Dart Compiler)\t[Dart]',
                                              render: function () {
                                                return _call(f, Array.prototype.slice.apply(arguments));
                                              },
                                              renderSync: function () {
                                                return _call(f, Array.prototype.slice.apply(arguments));
                                              },
                                              types: {
                                                Boolean: function () {
                                                  return _call(f, this, Array.prototype.slice.apply(arguments));
                                                },
                                                Color: function () {
                                                  return _call(f, this, Array.prototype.slice.apply(arguments));
                                                },
                                                List: function () {
                                                  return _call(f, this, Array.prototype.slice.apply(arguments));
                                                },
                                                Map: function () {
                                                  return _call(f, this, Array.prototype.slice.apply(arguments));
                                                },
                                                Null: function () {
                                                  return _call(f, this, Array.prototype.slice.apply(arguments));
                                                },
                                                Number: function () {
                                                  return _call(f, this, Array.prototype.slice.apply(arguments));
                                                },
                                                String: function () {
                                                  return _call(f, this, Array.prototype.slice.apply(arguments));
                                                },
                                                Error: function Error() { [native code] }
                                              },
                                              NULL: {},
                                              TRUE: {
                                                value: true
                                              },
                                              FALSE: {
                                                value: false
                                              },
                                              cli_pkg_main_0_: function () {
                                                return _call(f, Array.prototype.slice.apply(arguments));
                                              }
                                            },
                                            sassOptions: {
                                              outputStyle: 'expanded',
                                              fiber: false,
                                              importer: function () { /* omitted long function */ },
                                              indentedSyntax: true
                                            }
                                          }
                                        ]
                                      ]),
                                      name: '4',
                                      shorthands: [
                                        'loader',
                                        'options'
                                      ],
                                      loader: (value) => this.set(method, value),
                                      options: (value) => this.set(method, value)
                                    }
                                  ]
                                ])
                              },
                              include: {
                                store: new Set([])
                              },
                              exclude: {
                                store: new Set([])
                              },
                              rules: {
                                store: new Map([])
                              },
                              oneOfs: {
                                store: new Map([])
                              },
                              resolve: {
                                store: new Map([]),
                                alias: {
                                  store: new Map([])
                                },
                                aliasFields: {
                                  store: new Set([])
                                },
                                descriptionFiles: {
                                  store: new Set([])
                                },
                                extensions: {
                                  store: new Set([])
                                },
                                mainFields: {
                                  store: new Set([])
                                },
                                mainFiles: {
                                  store: new Set([])
                                },
                                modules: {
                                  store: new Set([])
                                },
                                plugins: {
                                  store: new Map([])
                                },
                                shorthands: [
                                  'cachePredicate',
                                  'cacheWithContext',
                                  'concord',
                                  'enforceExtension',
                                  'enforceModuleExtension',
                                  'symlinks',
                                  'unsafeCache'
                                ],
                                cachePredicate: (value) => this.set(method, value),
                                cacheWithContext: (value) => this.set(method, value),
                                concord: (value) => this.set(method, value),
                                enforceExtension: (value) => this.set(method, value),
                                enforceModuleExtension: (value) => this.set(method, value),
                                symlinks: (value) => this.set(method, value),
                                unsafeCache: (value) => this.set(method, value)
                              },
                              shorthands: [
                                'enforce',
                                'issuer',
                                'parser',
                                'resource',
                                'resourceQuery',
                                'sideEffects',
                                'test',
                                'type'
                              ],
                              enforce: (value) => this.set(method, value),
                              issuer: (value) => this.set(method, value),
                              parser: (value) => this.set(method, value),
                              resource: (value) => this.set(method, value),
                              resourceQuery: (value) => this.set(method, value),
                              sideEffects: (value) => this.set(method, value),
                              test: (value) => this.set(method, value),
                              type: (value) => this.set(method, value)
                            }
                          ]
                        ])
                      },
                      resolve: {
                        store: new Map([]),
                        alias: {
                          store: new Map([])
                        },
                        aliasFields: {
                          store: new Set([])
                        },
                        descriptionFiles: {
                          store: new Set([])
                        },
                        extensions: {
                          store: new Set([])
                        },
                        mainFields: {
                          store: new Set([])
                        },
                        mainFiles: {
                          store: new Set([])
                        },
                        modules: {
                          store: new Set([])
                        },
                        plugins: {
                          store: new Map([])
                        },
                        shorthands: [
                          'cachePredicate',
                          'cacheWithContext',
                          'concord',
                          'enforceExtension',
                          'enforceModuleExtension',
                          'symlinks',
                          'unsafeCache'
                        ],
                        cachePredicate: (value) => this.set(method, value),
                        cacheWithContext: (value) => this.set(method, value),
                        concord: (value) => this.set(method, value),
                        enforceExtension: (value) => this.set(method, value),
                        enforceModuleExtension: (value) => this.set(method, value),
                        symlinks: (value) => this.set(method, value),
                        unsafeCache: (value) => this.set(method, value)
                      },
                      shorthands: [
                        'enforce',
                        'issuer',
                        'parser',
                        'resource',
                        'resourceQuery',
                        'sideEffects',
                        'test',
                        'type'
                      ],
                      enforce: (value) => this.set(method, value),
                      issuer: (value) => this.set(method, value),
                      parser: (value) => this.set(method, value),
                      resource: (value) => this.set(method, value),
                      resourceQuery: (value) => this.set(method, value),
                      sideEffects: (value) => this.set(method, value),
                      test: (value) => this.set(method, value),
                      type: (value) => this.set(method, value)
                    }
                  ],
                  [
                    'scss',
                    {
                      store: new Map([
                        [
                          'test',
                          /\.scss$/
                        ]
                      ]),
                      name: 'scss',
                      names: [
                        'scss'
                      ],
                      ruleType: 'rule',
                      ruleTypes: [
                        'rule'
                      ],
                      uses: {
                        store: new Map([])
                      },
                      include: {
                        store: new Set([])
                      },
                      exclude: {
                        store: new Set([])
                      },
                      rules: {
                        store: new Map([])
                      },
                      oneOfs: {
                        store: new Map([
                          [
                            '0',
                            {
                              store: new Map([]),
                              name: '0',
                              names: [
                                'scss',
                                '0'
                              ],
                              ruleType: 'oneOf',
                              ruleTypes: [
                                'rule',
                                'oneOf'
                              ],
                              uses: {
                                store: new Map([
                                  [
                                    '0',
                                    {
                                      store: new Map([
                                        [
                                          'loader',
                                          '/Users/jaycezhang/Documents/taro-webpack5-mobx/node_modules/.pnpm/mini-css-extract-plugin@2.4.6_webpack@5.78.0/node_modules/mini-css-extract-plugin/dist/loader.js'
                                        ]
                                      ]),
                                      name: '0',
                                      shorthands: [
                                        'loader',
                                        'options'
                                      ],
                                      loader: (value) => this.set(method, value),
                                      options: (value) => this.set(method, value)
                                    }
                                  ],
                                  [
                                    '1',
                                    {
                                      store: new Map([
                                        [
                                          'loader',
                                          '/Users/jaycezhang/Documents/taro-webpack5-mobx/node_modules/.pnpm/css-loader@6.7.3_webpack@5.78.0/node_modules/css-loader/dist/cjs.js'
                                        ],
                                        [
                                          'options',
                                          {
                                            importLoaders: 1,
                                            modules: false
                                          }
                                        ]
                                      ]),
                                      name: '1',
                                      shorthands: [
                                        'loader',
                                        'options'
                                      ],
                                      loader: (value) => this.set(method, value),
                                      options: (value) => this.set(method, value)
                                    }
                                  ],
                                  [
                                    '2',
                                    {
                                      store: new Map([
                                        [
                                          'loader',
                                          '/Users/jaycezhang/Documents/taro-webpack5-mobx/node_modules/.pnpm/postcss-loader@7.2.4_@types+node@18.15.11_postcss@8.4.18_ts-node@10.9.1_typescript@4.1.2_webpack@5.78.0/node_modules/postcss-loader/dist/cjs.js'
                                        ],
                                        [
                                          'options',
                                          {
                                            postcssOptions: {
                                              plugins: [
                                                function () { /* omitted long function */ },
                                                function () { /* omitted long function */ },
                                                {
                                                  postcssPlugin: 'postcss-pxtransform',
                                                  prepare: function () { /* omitted long function */ }
                                                },
                                                {
                                                  postcssPlugin: 'postcss-url',
                                                  Once: function () { /* omitted long function */ }
                                                }
                                              ]
                                            }
                                          }
                                        ]
                                      ]),
                                      name: '2',
                                      shorthands: [
                                        'loader',
                                        'options'
                                      ],
                                      loader: (value) => this.set(method, value),
                                      options: (value) => this.set(method, value)
                                    }
                                  ],
                                  [
                                    '3',
                                    {
                                      store: new Map([
                                        [
                                          'loader',
                                          '/Users/jaycezhang/Documents/taro-webpack5-mobx/node_modules/.pnpm/resolve-url-loader@5.0.0/node_modules/resolve-url-loader/index.js'
                                        ],
                                        [
                                          'options',
                                          {}
                                        ]
                                      ]),
                                      name: '3',
                                      shorthands: [
                                        'loader',
                                        'options'
                                      ],
                                      loader: (value) => this.set(method, value),
                                      options: (value) => this.set(method, value)
                                    }
                                  ],
                                  [
                                    '4',
                                    {
                                      store: new Map([
                                        [
                                          'loader',
                                          '/Users/jaycezhang/Documents/taro-webpack5-mobx/node_modules/.pnpm/sass-loader@12.4.0_sass@1.50.0_webpack@5.78.0/node_modules/sass-loader/dist/cjs.js'
                                        ],
                                        [
                                          'options',
                                          {
                                            sourceMap: true,
                                            implementation: {
                                              load: function () { /* omitted long function */ },
                                              compile: function () {
                                                return _call(f, Array.prototype.slice.apply(arguments));
                                              },
                                              compileString: function () {
                                                return _call(f, Array.prototype.slice.apply(arguments));
                                              },
                                              compileAsync: function () {
                                                return _call(f, Array.prototype.slice.apply(arguments));
                                              },
                                              compileStringAsync: function () {
                                                return _call(f, Array.prototype.slice.apply(arguments));
                                              },
                                              Value: function Value0() {
                                              },
                                              SassBoolean: function () {
                                                return _call(f, this, Array.prototype.slice.apply(arguments));
                                              },
                                              SassArgumentList: function () {
                                                return _call(f, this, Array.prototype.slice.apply(arguments));
                                              },
                                              SassColor: function () {
                                                return _call(f, this, Array.prototype.slice.apply(arguments));
                                              },
                                              SassFunction: function () {
                                                return _call(f, this, Array.prototype.slice.apply(arguments));
                                              },
                                              SassList: function () {
                                                return _call(f, this, Array.prototype.slice.apply(arguments));
                                              },
                                              SassMap: function () {
                                                return _call(f, this, Array.prototype.slice.apply(arguments));
                                              },
                                              SassNumber: function () {
                                                return _call(f, this, Array.prototype.slice.apply(arguments));
                                              },
                                              SassString: function () {
                                                return _call(f, this, Array.prototype.slice.apply(arguments));
                                              },
                                              sassNull: {},
                                              sassTrue: {
                                                value: true
                                              },
                                              sassFalse: {
                                                value: false
                                              },
                                              Exception: function () { /* omitted long function */ },
                                              Logger: {
                                                silent: {
                                                  warn: function () {
                                                    return _call(f, Array.prototype.slice.apply(arguments));
                                                  },
                                                  debug: function () {
                                                    return _call(f, Array.prototype.slice.apply(arguments));
                                                  }
                                                }
                                              },
                                              info: 'dart-sass\t1.50.0\t(Sass Compiler)\t[Dart]\ndart2js\t2.16.2\t(Dart Compiler)\t[Dart]',
                                              render: function () {
                                                return _call(f, Array.prototype.slice.apply(arguments));
                                              },
                                              renderSync: function () {
                                                return _call(f, Array.prototype.slice.apply(arguments));
                                              },
                                              types: {
                                                Boolean: function () {
                                                  return _call(f, this, Array.prototype.slice.apply(arguments));
                                                },
                                                Color: function () {
                                                  return _call(f, this, Array.prototype.slice.apply(arguments));
                                                },
                                                List: function () {
                                                  return _call(f, this, Array.prototype.slice.apply(arguments));
                                                },
                                                Map: function () {
                                                  return _call(f, this, Array.prototype.slice.apply(arguments));
                                                },
                                                Null: function () {
                                                  return _call(f, this, Array.prototype.slice.apply(arguments));
                                                },
                                                Number: function () {
                                                  return _call(f, this, Array.prototype.slice.apply(arguments));
                                                },
                                                String: function () {
                                                  return _call(f, this, Array.prototype.slice.apply(arguments));
                                                },
                                                Error: function Error() { [native code] }
                                              },
                                              NULL: {},
                                              TRUE: {
                                                value: true
                                              },
                                              FALSE: {
                                                value: false
                                              },
                                              cli_pkg_main_0_: function () {
                                                return _call(f, Array.prototype.slice.apply(arguments));
                                              }
                                            },
                                            sassOptions: {
                                              outputStyle: 'expanded',
                                              fiber: false,
                                              importer: function () { /* omitted long function */ }
                                            }
                                          }
                                        ]
                                      ]),
                                      name: '4',
                                      shorthands: [
                                        'loader',
                                        'options'
                                      ],
                                      loader: (value) => this.set(method, value),
                                      options: (value) => this.set(method, value)
                                    }
                                  ]
                                ])
                              },
                              include: {
                                store: new Set([])
                              },
                              exclude: {
                                store: new Set([])
                              },
                              rules: {
                                store: new Map([])
                              },
                              oneOfs: {
                                store: new Map([])
                              },
                              resolve: {
                                store: new Map([]),
                                alias: {
                                  store: new Map([])
                                },
                                aliasFields: {
                                  store: new Set([])
                                },
                                descriptionFiles: {
                                  store: new Set([])
                                },
                                extensions: {
                                  store: new Set([])
                                },
                                mainFields: {
                                  store: new Set([])
                                },
                                mainFiles: {
                                  store: new Set([])
                                },
                                modules: {
                                  store: new Set([])
                                },
                                plugins: {
                                  store: new Map([])
                                },
                                shorthands: [
                                  'cachePredicate',
                                  'cacheWithContext',
                                  'concord',
                                  'enforceExtension',
                                  'enforceModuleExtension',
                                  'symlinks',
                                  'unsafeCache'
                                ],
                                cachePredicate: (value) => this.set(method, value),
                                cacheWithContext: (value) => this.set(method, value),
                                concord: (value) => this.set(method, value),
                                enforceExtension: (value) => this.set(method, value),
                                enforceModuleExtension: (value) => this.set(method, value),
                                symlinks: (value) => this.set(method, value),
                                unsafeCache: (value) => this.set(method, value)
                              },
                              shorthands: [
                                'enforce',
                                'issuer',
                                'parser',
                                'resource',
                                'resourceQuery',
                                'sideEffects',
                                'test',
                                'type'
                              ],
                              enforce: (value) => this.set(method, value),
                              issuer: (value) => this.set(method, value),
                              parser: (value) => this.set(method, value),
                              resource: (value) => this.set(method, value),
                              resourceQuery: (value) => this.set(method, value),
                              sideEffects: (value) => this.set(method, value),
                              test: (value) => this.set(method, value),
                              type: (value) => this.set(method, value)
                            }
                          ]
                        ])
                      },
                      resolve: {
                        store: new Map([]),
                        alias: {
                          store: new Map([])
                        },
                        aliasFields: {
                          store: new Set([])
                        },
                        descriptionFiles: {
                          store: new Set([])
                        },
                        extensions: {
                          store: new Set([])
                        },
                        mainFields: {
                          store: new Set([])
                        },
                        mainFiles: {
                          store: new Set([])
                        },
                        modules: {
                          store: new Set([])
                        },
                        plugins: {
                          store: new Map([])
                        },
                        shorthands: [
                          'cachePredicate',
                          'cacheWithContext',
                          'concord',
                          'enforceExtension',
                          'enforceModuleExtension',
                          'symlinks',
                          'unsafeCache'
                        ],
                        cachePredicate: (value) => this.set(method, value),
                        cacheWithContext: (value) => this.set(method, value),
                        concord: (value) => this.set(method, value),
                        enforceExtension: (value) => this.set(method, value),
                        enforceModuleExtension: (value) => this.set(method, value),
                        symlinks: (value) => this.set(method, value),
                        unsafeCache: (value) => this.set(method, value)
                      },
                      shorthands: [
                        'enforce',
                        'issuer',
                        'parser',
                        'resource',
                        'resourceQuery',
                        'sideEffects',
                        'test',
                        'type'
                      ],
                      enforce: (value) => this.set(method, value),
                      issuer: (value) => this.set(method, value),
                      parser: (value) => this.set(method, value),
                      resource: (value) => this.set(method, value),
                      resourceQuery: (value) => this.set(method, value),
                      sideEffects: (value) => this.set(method, value),
                      test: (value) => this.set(method, value),
                      type: (value) => this.set(method, value)
                    }
                  ],
                  [
                    'less',
                    {
                      store: new Map([
                        [
                          'test',
                          /\.less$/
                        ]
                      ]),
                      name: 'less',
                      names: [
                        'less'
                      ],
                      ruleType: 'rule',
                      ruleTypes: [
                        'rule'
                      ],
                      uses: {
                        store: new Map([])
                      },
                      include: {
                        store: new Set([])
                      },
                      exclude: {
                        store: new Set([])
                      },
                      rules: {
                        store: new Map([])
                      },
                      oneOfs: {
                        store: new Map([
                          [
                            '0',
                            {
                              store: new Map([]),
                              name: '0',
                              names: [
                                'less',
                                '0'
                              ],
                              ruleType: 'oneOf',
                              ruleTypes: [
                                'rule',
                                'oneOf'
                              ],
                              uses: {
                                store: new Map([
                                  [
                                    '0',
                                    {
                                      store: new Map([
                                        [
                                          'loader',
                                          '/Users/jaycezhang/Documents/taro-webpack5-mobx/node_modules/.pnpm/mini-css-extract-plugin@2.4.6_webpack@5.78.0/node_modules/mini-css-extract-plugin/dist/loader.js'
                                        ]
                                      ]),
                                      name: '0',
                                      shorthands: [
                                        'loader',
                                        'options'
                                      ],
                                      loader: (value) => this.set(method, value),
                                      options: (value) => this.set(method, value)
                                    }
                                  ],
                                  [
                                    '1',
                                    {
                                      store: new Map([
                                        [
                                          'loader',
                                          '/Users/jaycezhang/Documents/taro-webpack5-mobx/node_modules/.pnpm/css-loader@6.7.3_webpack@5.78.0/node_modules/css-loader/dist/cjs.js'
                                        ],
                                        [
                                          'options',
                                          {
                                            importLoaders: 1,
                                            modules: false
                                          }
                                        ]
                                      ]),
                                      name: '1',
                                      shorthands: [
                                        'loader',
                                        'options'
                                      ],
                                      loader: (value) => this.set(method, value),
                                      options: (value) => this.set(method, value)
                                    }
                                  ],
                                  [
                                    '2',
                                    {
                                      store: new Map([
                                        [
                                          'loader',
                                          '/Users/jaycezhang/Documents/taro-webpack5-mobx/node_modules/.pnpm/postcss-loader@7.2.4_@types+node@18.15.11_postcss@8.4.18_ts-node@10.9.1_typescript@4.1.2_webpack@5.78.0/node_modules/postcss-loader/dist/cjs.js'
                                        ],
                                        [
                                          'options',
                                          {
                                            postcssOptions: {
                                              plugins: [
                                                function () { /* omitted long function */ },
                                                function () { /* omitted long function */ },
                                                {
                                                  postcssPlugin: 'postcss-pxtransform',
                                                  prepare: function () { /* omitted long function */ }
                                                },
                                                {
                                                  postcssPlugin: 'postcss-url',
                                                  Once: function () { /* omitted long function */ }
                                                }
                                              ]
                                            }
                                          }
                                        ]
                                      ]),
                                      name: '2',
                                      shorthands: [
                                        'loader',
                                        'options'
                                      ],
                                      loader: (value) => this.set(method, value),
                                      options: (value) => this.set(method, value)
                                    }
                                  ],
                                  [
                                    '3',
                                    {
                                      store: new Map([
                                        [
                                          'loader',
                                          '/Users/jaycezhang/Documents/taro-webpack5-mobx/node_modules/.pnpm/less-loader@10.2.0_less@4.1.3_webpack@5.78.0/node_modules/less-loader/dist/cjs.js'
                                        ],
                                        [
                                          'options',
                                          {}
                                        ]
                                      ]),
                                      name: '3',
                                      shorthands: [
                                        'loader',
                                        'options'
                                      ],
                                      loader: (value) => this.set(method, value),
                                      options: (value) => this.set(method, value)
                                    }
                                  ]
                                ])
                              },
                              include: {
                                store: new Set([])
                              },
                              exclude: {
                                store: new Set([])
                              },
                              rules: {
                                store: new Map([])
                              },
                              oneOfs: {
                                store: new Map([])
                              },
                              resolve: {
                                store: new Map([]),
                                alias: {
                                  store: new Map([])
                                },
                                aliasFields: {
                                  store: new Set([])
                                },
                                descriptionFiles: {
                                  store: new Set([])
                                },
                                extensions: {
                                  store: new Set([])
                                },
                                mainFields: {
                                  store: new Set([])
                                },
                                mainFiles: {
                                  store: new Set([])
                                },
                                modules: {
                                  store: new Set([])
                                },
                                plugins: {
                                  store: new Map([])
                                },
                                shorthands: [
                                  'cachePredicate',
                                  'cacheWithContext',
                                  'concord',
                                  'enforceExtension',
                                  'enforceModuleExtension',
                                  'symlinks',
                                  'unsafeCache'
                                ],
                                cachePredicate: (value) => this.set(method, value),
                                cacheWithContext: (value) => this.set(method, value),
                                concord: (value) => this.set(method, value),
                                enforceExtension: (value) => this.set(method, value),
                                enforceModuleExtension: (value) => this.set(method, value),
                                symlinks: (value) => this.set(method, value),
                                unsafeCache: (value) => this.set(method, value)
                              },
                              shorthands: [
                                'enforce',
                                'issuer',
                                'parser',
                                'resource',
                                'resourceQuery',
                                'sideEffects',
                                'test',
                                'type'
                              ],
                              enforce: (value) => this.set(method, value),
                              issuer: (value) => this.set(method, value),
                              parser: (value) => this.set(method, value),
                              resource: (value) => this.set(method, value),
                              resourceQuery: (value) => this.set(method, value),
                              sideEffects: (value) => this.set(method, value),
                              test: (value) => this.set(method, value),
                              type: (value) => this.set(method, value)
                            }
                          ]
                        ])
                      },
                      resolve: {
                        store: new Map([]),
                        alias: {
                          store: new Map([])
                        },
                        aliasFields: {
                          store: new Set([])
                        },
                        descriptionFiles: {
                          store: new Set([])
                        },
                        extensions: {
                          store: new Set([])
                        },
                        mainFields: {
                          store: new Set([])
                        },
                        mainFiles: {
                          store: new Set([])
                        },
                        modules: {
                          store: new Set([])
                        },
                        plugins: {
                          store: new Map([])
                        },
                        shorthands: [
                          'cachePredicate',
                          'cacheWithContext',
                          'concord',
                          'enforceExtension',
                          'enforceModuleExtension',
                          'symlinks',
                          'unsafeCache'
                        ],
                        cachePredicate: (value) => this.set(method, value),
                        cacheWithContext: (value) => this.set(method, value),
                        concord: (value) => this.set(method, value),
                        enforceExtension: (value) => this.set(method, value),
                        enforceModuleExtension: (value) => this.set(method, value),
                        symlinks: (value) => this.set(method, value),
                        unsafeCache: (value) => this.set(method, value)
                      },
                      shorthands: [
                        'enforce',
                        'issuer',
                        'parser',
                        'resource',
                        'resourceQuery',
                        'sideEffects',
                        'test',
                        'type'
                      ],
                      enforce: (value) => this.set(method, value),
                      issuer: (value) => this.set(method, value),
                      parser: (value) => this.set(method, value),
                      resource: (value) => this.set(method, value),
                      resourceQuery: (value) => this.set(method, value),
                      sideEffects: (value) => this.set(method, value),
                      test: (value) => this.set(method, value),
                      type: (value) => this.set(method, value)
                    }
                  ],
                  [
                    'stylus',
                    {
                      store: new Map([
                        [
                          'test',
                          /\.styl(us)?$/
                        ]
                      ]),
                      name: 'stylus',
                      names: [
                        'stylus'
                      ],
                      ruleType: 'rule',
                      ruleTypes: [
                        'rule'
                      ],
                      uses: {
                        store: new Map([])
                      },
                      include: {
                        store: new Set([])
                      },
                      exclude: {
                        store: new Set([])
                      },
                      rules: {
                        store: new Map([])
                      },
                      oneOfs: {
                        store: new Map([
                          [
                            '0',
                            {
                              store: new Map([]),
                              name: '0',
                              names: [
                                'stylus',
                                '0'
                              ],
                              ruleType: 'oneOf',
                              ruleTypes: [
                                'rule',
                                'oneOf'
                              ],
                              uses: {
                                store: new Map([
                                  [
                                    '0',
                                    {
                                      store: new Map([
                                        [
                                          'loader',
                                          '/Users/jaycezhang/Documents/taro-webpack5-mobx/node_modules/.pnpm/mini-css-extract-plugin@2.4.6_webpack@5.78.0/node_modules/mini-css-extract-plugin/dist/loader.js'
                                        ]
                                      ]),
                                      name: '0',
                                      shorthands: [
                                        'loader',
                                        'options'
                                      ],
                                      loader: (value) => this.set(method, value),
                                      options: (value) => this.set(method, value)
                                    }
                                  ],
                                  [
                                    '1',
                                    {
                                      store: new Map([
                                        [
                                          'loader',
                                          '/Users/jaycezhang/Documents/taro-webpack5-mobx/node_modules/.pnpm/css-loader@6.7.3_webpack@5.78.0/node_modules/css-loader/dist/cjs.js'
                                        ],
                                        [
                                          'options',
                                          {
                                            importLoaders: 1,
                                            modules: false
                                          }
                                        ]
                                      ]),
                                      name: '1',
                                      shorthands: [
                                        'loader',
                                        'options'
                                      ],
                                      loader: (value) => this.set(method, value),
                                      options: (value) => this.set(method, value)
                                    }
                                  ],
                                  [
                                    '2',
                                    {
                                      store: new Map([
                                        [
                                          'loader',
                                          '/Users/jaycezhang/Documents/taro-webpack5-mobx/node_modules/.pnpm/postcss-loader@7.2.4_@types+node@18.15.11_postcss@8.4.18_ts-node@10.9.1_typescript@4.1.2_webpack@5.78.0/node_modules/postcss-loader/dist/cjs.js'
                                        ],
                                        [
                                          'options',
                                          {
                                            postcssOptions: {
                                              plugins: [
                                                function () { /* omitted long function */ },
                                                function () { /* omitted long function */ },
                                                {
                                                  postcssPlugin: 'postcss-pxtransform',
                                                  prepare: function () { /* omitted long function */ }
                                                },
                                                {
                                                  postcssPlugin: 'postcss-url',
                                                  Once: function () { /* omitted long function */ }
                                                }
                                              ]
                                            }
                                          }
                                        ]
                                      ]),
                                      name: '2',
                                      shorthands: [
                                        'loader',
                                        'options'
                                      ],
                                      loader: (value) => this.set(method, value),
                                      options: (value) => this.set(method, value)
                                    }
                                  ],
                                  [
                                    '3',
                                    {
                                      store: new Map([
                                        [
                                          'loader',
                                          '/Users/jaycezhang/Documents/taro-webpack5-mobx/node_modules/.pnpm/stylus-loader@6.2.0_stylus@0.55.0_webpack@5.78.0/node_modules/stylus-loader/dist/cjs.js'
                                        ],
                                        [
                                          'options',
                                          {}
                                        ]
                                      ]),
                                      name: '3',
                                      shorthands: [
                                        'loader',
                                        'options'
                                      ],
                                      loader: (value) => this.set(method, value),
                                      options: (value) => this.set(method, value)
                                    }
                                  ]
                                ])
                              },
                              include: {
                                store: new Set([])
                              },
                              exclude: {
                                store: new Set([])
                              },
                              rules: {
                                store: new Map([])
                              },
                              oneOfs: {
                                store: new Map([])
                              },
                              resolve: {
                                store: new Map([]),
                                alias: {
                                  store: new Map([])
                                },
                                aliasFields: {
                                  store: new Set([])
                                },
                                descriptionFiles: {
                                  store: new Set([])
                                },
                                extensions: {
                                  store: new Set([])
                                },
                                mainFields: {
                                  store: new Set([])
                                },
                                mainFiles: {
                                  store: new Set([])
                                },
                                modules: {
                                  store: new Set([])
                                },
                                plugins: {
                                  store: new Map([])
                                },
                                shorthands: [
                                  'cachePredicate',
                                  'cacheWithContext',
                                  'concord',
                                  'enforceExtension',
                                  'enforceModuleExtension',
                                  'symlinks',
                                  'unsafeCache'
                                ],
                                cachePredicate: (value) => this.set(method, value),
                                cacheWithContext: (value) => this.set(method, value),
                                concord: (value) => this.set(method, value),
                                enforceExtension: (value) => this.set(method, value),
                                enforceModuleExtension: (value) => this.set(method, value),
                                symlinks: (value) => this.set(method, value),
                                unsafeCache: (value) => this.set(method, value)
                              },
                              shorthands: [
                                'enforce',
                                'issuer',
                                'parser',
                                'resource',
                                'resourceQuery',
                                'sideEffects',
                                'test',
                                'type'
                              ],
                              enforce: (value) => this.set(method, value),
                              issuer: (value) => this.set(method, value),
                              parser: (value) => this.set(method, value),
                              resource: (value) => this.set(method, value),
                              resourceQuery: (value) => this.set(method, value),
                              sideEffects: (value) => this.set(method, value),
                              test: (value) => this.set(method, value),
                              type: (value) => this.set(method, value)
                            }
                          ]
                        ])
                      },
                      resolve: {
                        store: new Map([]),
                        alias: {
                          store: new Map([])
                        },
                        aliasFields: {
                          store: new Set([])
                        },
                        descriptionFiles: {
                          store: new Set([])
                        },
                        extensions: {
                          store: new Set([])
                        },
                        mainFields: {
                          store: new Set([])
                        },
                        mainFiles: {
                          store: new Set([])
                        },
                        modules: {
                          store: new Set([])
                        },
                        plugins: {
                          store: new Map([])
                        },
                        shorthands: [
                          'cachePredicate',
                          'cacheWithContext',
                          'concord',
                          'enforceExtension',
                          'enforceModuleExtension',
                          'symlinks',
                          'unsafeCache'
                        ],
                        cachePredicate: (value) => this.set(method, value),
                        cacheWithContext: (value) => this.set(method, value),
                        concord: (value) => this.set(method, value),
                        enforceExtension: (value) => this.set(method, value),
                        enforceModuleExtension: (value) => this.set(method, value),
                        symlinks: (value) => this.set(method, value),
                        unsafeCache: (value) => this.set(method, value)
                      },
                      shorthands: [
                        'enforce',
                        'issuer',
                        'parser',
                        'resource',
                        'resourceQuery',
                        'sideEffects',
                        'test',
                        'type'
                      ],
                      enforce: (value) => this.set(method, value),
                      issuer: (value) => this.set(method, value),
                      parser: (value) => this.set(method, value),
                      resource: (value) => this.set(method, value),
                      resourceQuery: (value) => this.set(method, value),
                      sideEffects: (value) => this.set(method, value),
                      test: (value) => this.set(method, value),
                      type: (value) => this.set(method, value)
                    }
                  ],
                  [
                    'normalCss',
                    {
                      store: new Map([
                        [
                          'test',
                          /\.(css|wxss|acss|ttss)(\?.*)?$/
                        ]
                      ]),
                      name: 'normalCss',
                      names: [
                        'normalCss'
                      ],
                      ruleType: 'rule',
                      ruleTypes: [
                        'rule'
                      ],
                      uses: {
                        store: new Map([])
                      },
                      include: {
                        store: new Set([])
                      },
                      exclude: {
                        store: new Set([])
                      },
                      rules: {
                        store: new Map([])
                      },
                      oneOfs: {
                        store: new Map([
                          [
                            '0',
                            {
                              store: new Map([]),
                              name: '0',
                              names: [
                                'normalCss',
                                '0'
                              ],
                              ruleType: 'oneOf',
                              ruleTypes: [
                                'rule',
                                'oneOf'
                              ],
                              uses: {
                                store: new Map([
                                  [
                                    '0',
                                    {
                                      store: new Map([
                                        [
                                          'loader',
                                          '/Users/jaycezhang/Documents/taro-webpack5-mobx/node_modules/.pnpm/mini-css-extract-plugin@2.4.6_webpack@5.78.0/node_modules/mini-css-extract-plugin/dist/loader.js'
                                        ]
                                      ]),
                                      name: '0',
                                      shorthands: [
                                        'loader',
                                        'options'
                                      ],
                                      loader: (value) => this.set(method, value),
                                      options: (value) => this.set(method, value)
                                    }
                                  ],
                                  [
                                    '1',
                                    {
                                      store: new Map([
                                        [
                                          'loader',
                                          '/Users/jaycezhang/Documents/taro-webpack5-mobx/node_modules/.pnpm/css-loader@6.7.3_webpack@5.78.0/node_modules/css-loader/dist/cjs.js'
                                        ],
                                        [
                                          'options',
                                          {
                                            importLoaders: 1,
                                            modules: false
                                          }
                                        ]
                                      ]),
                                      name: '1',
                                      shorthands: [
                                        'loader',
                                        'options'
                                      ],
                                      loader: (value) => this.set(method, value),
                                      options: (value) => this.set(method, value)
                                    }
                                  ],
                                  [
                                    '2',
                                    {
                                      store: new Map([
                                        [
                                          'loader',
                                          '/Users/jaycezhang/Documents/taro-webpack5-mobx/node_modules/.pnpm/postcss-loader@7.2.4_@types+node@18.15.11_postcss@8.4.18_ts-node@10.9.1_typescript@4.1.2_webpack@5.78.0/node_modules/postcss-loader/dist/cjs.js'
                                        ],
                                        [
                                          'options',
                                          {
                                            postcssOptions: {
                                              plugins: [
                                                function () { /* omitted long function */ },
                                                function () { /* omitted long function */ },
                                                {
                                                  postcssPlugin: 'postcss-pxtransform',
                                                  prepare: function () { /* omitted long function */ }
                                                },
                                                {
                                                  postcssPlugin: 'postcss-url',
                                                  Once: function () { /* omitted long function */ }
                                                }
                                              ]
                                            }
                                          }
                                        ]
                                      ]),
                                      name: '2',
                                      shorthands: [
                                        'loader',
                                        'options'
                                      ],
                                      loader: (value) => this.set(method, value),
                                      options: (value) => this.set(method, value)
                                    }
                                  ]
                                ])
                              },
                              include: {
                                store: new Set([])
                              },
                              exclude: {
                                store: new Set([])
                              },
                              rules: {
                                store: new Map([])
                              },
                              oneOfs: {
                                store: new Map([])
                              },
                              resolve: {
                                store: new Map([]),
                                alias: {
                                  store: new Map([])
                                },
                                aliasFields: {
                                  store: new Set([])
                                },
                                descriptionFiles: {
                                  store: new Set([])
                                },
                                extensions: {
                                  store: new Set([])
                                },
                                mainFields: {
                                  store: new Set([])
                                },
                                mainFiles: {
                                  store: new Set([])
                                },
                                modules: {
                                  store: new Set([])
                                },
                                plugins: {
                                  store: new Map([])
                                },
                                shorthands: [
                                  'cachePredicate',
                                  'cacheWithContext',
                                  'concord',
                                  'enforceExtension',
                                  'enforceModuleExtension',
                                  'symlinks',
                                  'unsafeCache'
                                ],
                                cachePredicate: (value) => this.set(method, value),
                                cacheWithContext: (value) => this.set(method, value),
                                concord: (value) => this.set(method, value),
                                enforceExtension: (value) => this.set(method, value),
                                enforceModuleExtension: (value) => this.set(method, value),
                                symlinks: (value) => this.set(method, value),
                                unsafeCache: (value) => this.set(method, value)
                              },
                              shorthands: [
                                'enforce',
                                'issuer',
                                'parser',
                                'resource',
                                'resourceQuery',
                                'sideEffects',
                                'test',
                                'type'
                              ],
                              enforce: (value) => this.set(method, value),
                              issuer: (value) => this.set(method, value),
                              parser: (value) => this.set(method, value),
                              resource: (value) => this.set(method, value),
                              resourceQuery: (value) => this.set(method, value),
                              sideEffects: (value) => this.set(method, value),
                              test: (value) => this.set(method, value),
                              type: (value) => this.set(method, value)
                            }
                          ]
                        ])
                      },
                      resolve: {
                        store: new Map([]),
                        alias: {
                          store: new Map([])
                        },
                        aliasFields: {
                          store: new Set([])
                        },
                        descriptionFiles: {
                          store: new Set([])
                        },
                        extensions: {
                          store: new Set([])
                        },
                        mainFields: {
                          store: new Set([])
                        },
                        mainFiles: {
                          store: new Set([])
                        },
                        modules: {
                          store: new Set([])
                        },
                        plugins: {
                          store: new Map([])
                        },
                        shorthands: [
                          'cachePredicate',
                          'cacheWithContext',
                          'concord',
                          'enforceExtension',
                          'enforceModuleExtension',
                          'symlinks',
                          'unsafeCache'
                        ],
                        cachePredicate: (value) => this.set(method, value),
                        cacheWithContext: (value) => this.set(method, value),
                        concord: (value) => this.set(method, value),
                        enforceExtension: (value) => this.set(method, value),
                        enforceModuleExtension: (value) => this.set(method, value),
                        symlinks: (value) => this.set(method, value),
                        unsafeCache: (value) => this.set(method, value)
                      },
                      shorthands: [
                        'enforce',
                        'issuer',
                        'parser',
                        'resource',
                        'resourceQuery',
                        'sideEffects',
                        'test',
                        'type'
                      ],
                      enforce: (value) => this.set(method, value),
                      issuer: (value) => this.set(method, value),
                      parser: (value) => this.set(method, value),
                      resource: (value) => this.set(method, value),
                      resourceQuery: (value) => this.set(method, value),
                      sideEffects: (value) => this.set(method, value),
                      test: (value) => this.set(method, value),
                      type: (value) => this.set(method, value)
                    }
                  ],
                  [
                    'script',
                    {
                      store: new Map([
                        [
                          'test',
                          /\.[tj]sx?$/i
                        ]
                      ]),
                      name: 'script',
                      names: [
                        'script'
                      ],
                      ruleType: 'rule',
                      ruleTypes: [
                        'rule'
                      ],
                      uses: {
                        store: new Map([
                          [
                            'babelLoader',
                            {
                              store: new Map([
                                [
                                  'loader',
                                  '/Users/jaycezhang/Documents/taro-webpack5-mobx/node_modules/.pnpm/babel-loader@8.2.1_@babel+core@7.8.0_webpack@5.78.0/node_modules/babel-loader/lib/index.js'
                                ],
                                [
                                  'options',
                                  {
                                    compact: false
                                  }
                                ]
                              ]),
                              name: 'babelLoader',
                              shorthands: [
                                'loader',
                                'options'
                              ],
                              loader: (value) => this.set(method, value),
                              options: (value) => this.set(method, value)
                            }
                          ]
                        ])
                      },
                      include: {
                        store: new Set([])
                      },
                      exclude: {
                        store: new Set([
                          function () { /* omitted long function */ }
                        ])
                      },
                      rules: {
                        store: new Map([])
                      },
                      oneOfs: {
                        store: new Map([])
                      },
                      resolve: {
                        store: new Map([]),
                        alias: {
                          store: new Map([])
                        },
                        aliasFields: {
                          store: new Set([])
                        },
                        descriptionFiles: {
                          store: new Set([])
                        },
                        extensions: {
                          store: new Set([])
                        },
                        mainFields: {
                          store: new Set([])
                        },
                        mainFiles: {
                          store: new Set([])
                        },
                        modules: {
                          store: new Set([])
                        },
                        plugins: {
                          store: new Map([])
                        },
                        shorthands: [
                          'cachePredicate',
                          'cacheWithContext',
                          'concord',
                          'enforceExtension',
                          'enforceModuleExtension',
                          'symlinks',
                          'unsafeCache'
                        ],
                        cachePredicate: (value) => this.set(method, value),
                        cacheWithContext: (value) => this.set(method, value),
                        concord: (value) => this.set(method, value),
                        enforceExtension: (value) => this.set(method, value),
                        enforceModuleExtension: (value) => this.set(method, value),
                        symlinks: (value) => this.set(method, value),
                        unsafeCache: (value) => this.set(method, value)
                      },
                      shorthands: [
                        'enforce',
                        'issuer',
                        'parser',
                        'resource',
                        'resourceQuery',
                        'sideEffects',
                        'test',
                        'type'
                      ],
                      enforce: (value) => this.set(method, value),
                      issuer: (value) => this.set(method, value),
                      parser: (value) => this.set(method, value),
                      resource: (value) => this.set(method, value),
                      resourceQuery: (value) => this.set(method, value),
                      sideEffects: (value) => this.set(method, value),
                      test: (value) => this.set(method, value),
                      type: (value) => this.set(method, value)
                    }
                  ],
                  [
                    'template',
                    {
                      store: new Map([
                        [
                          'test',
                          /\.(wxml|axml|ttml|qml|swan|jxml)(\?.*)?$/
                        ],
                        [
                          'type',
                          'asset/resource'
                        ],
                        [
                          'generator',
                          {
                            filename: function () { /* omitted long function */ }
                          }
                        ]
                      ]),
                      name: 'template',
                      names: [
                        'template'
                      ],
                      ruleType: 'rule',
                      ruleTypes: [
                        'rule'
                      ],
                      uses: {
                        store: new Map([
                          [
                            '0',
                            {
                              store: new Map([
                                [
                                  'loader',
                                  '/Users/jaycezhang/Documents/taro-webpack5-mobx/node_modules/.pnpm/@tarojs+webpack5-runner@3.6.5_@babel+core@7.8.0_@swc+core@1.3.42_@types+node@18.15.11_@types+_355iqh62ge3djnn5v3qtauskn4/node_modules/@tarojs/webpack5-runner/dist/loaders/miniTemplateLoader.js'
                                ],
                                [
                                  'options',
                                  {
                                    buildAdapter: 'weapp'
                                  }
                                ]
                              ]),
                              name: '0',
                              shorthands: [
                                'loader',
                                'options'
                              ],
                              loader: (value) => this.set(method, value),
                              options: (value) => this.set(method, value)
                            }
                          ]
                        ])
                      },
                      include: {
                        store: new Set([])
                      },
                      exclude: {
                        store: new Set([])
                      },
                      rules: {
                        store: new Map([])
                      },
                      oneOfs: {
                        store: new Map([])
                      },
                      resolve: {
                        store: new Map([]),
                        alias: {
                          store: new Map([])
                        },
                        aliasFields: {
                          store: new Set([])
                        },
                        descriptionFiles: {
                          store: new Set([])
                        },
                        extensions: {
                          store: new Set([])
                        },
                        mainFields: {
                          store: new Set([])
                        },
                        mainFiles: {
                          store: new Set([])
                        },
                        modules: {
                          store: new Set([])
                        },
                        plugins: {
                          store: new Map([])
                        },
                        shorthands: [
                          'cachePredicate',
                          'cacheWithContext',
                          'concord',
                          'enforceExtension',
                          'enforceModuleExtension',
                          'symlinks',
                          'unsafeCache'
                        ],
                        cachePredicate: (value) => this.set(method, value),
                        cacheWithContext: (value) => this.set(method, value),
                        concord: (value) => this.set(method, value),
                        enforceExtension: (value) => this.set(method, value),
                        enforceModuleExtension: (value) => this.set(method, value),
                        symlinks: (value) => this.set(method, value),
                        unsafeCache: (value) => this.set(method, value)
                      },
                      shorthands: [
                        'enforce',
                        'issuer',
                        'parser',
                        'resource',
                        'resourceQuery',
                        'sideEffects',
                        'test',
                        'type'
                      ],
                      enforce: (value) => this.set(method, value),
                      issuer: (value) => this.set(method, value),
                      parser: (value) => this.set(method, value),
                      resource: (value) => this.set(method, value),
                      resourceQuery: (value) => this.set(method, value),
                      sideEffects: (value) => this.set(method, value),
                      test: (value) => this.set(method, value),
                      type: (value) => this.set(method, value)
                    }
                  ],
                  [
                    'xscript',
                    {
                      store: new Map([
                        [
                          'test',
                          /\.wxs$/
                        ],
                        [
                          'type',
                          'asset/resource'
                        ],
                        [
                          'generator',
                          {
                            filename: function () { /* omitted long function */ }
                          }
                        ]
                      ]),
                      name: 'xscript',
                      names: [
                        'xscript'
                      ],
                      ruleType: 'rule',
                      ruleTypes: [
                        'rule'
                      ],
                      uses: {
                        store: new Map([
                          [
                            '0',
                            {
                              store: new Map([
                                [
                                  'loader',
                                  '/Users/jaycezhang/Documents/taro-webpack5-mobx/node_modules/.pnpm/@tarojs+webpack5-runner@3.6.5_@babel+core@7.8.0_@swc+core@1.3.42_@types+node@18.15.11_@types+_355iqh62ge3djnn5v3qtauskn4/node_modules/@tarojs/webpack5-runner/dist/loaders/miniXScriptLoader.js'
                                ],
                                [
                                  'options',
                                  {}
                                ]
                              ]),
                              name: '0',
                              shorthands: [
                                'loader',
                                'options'
                              ],
                              loader: (value) => this.set(method, value),
                              options: (value) => this.set(method, value)
                            }
                          ]
                        ])
                      },
                      include: {
                        store: new Set([])
                      },
                      exclude: {
                        store: new Set([])
                      },
                      rules: {
                        store: new Map([])
                      },
                      oneOfs: {
                        store: new Map([])
                      },
                      resolve: {
                        store: new Map([]),
                        alias: {
                          store: new Map([])
                        },
                        aliasFields: {
                          store: new Set([])
                        },
                        descriptionFiles: {
                          store: new Set([])
                        },
                        extensions: {
                          store: new Set([])
                        },
                        mainFields: {
                          store: new Set([])
                        },
                        mainFiles: {
                          store: new Set([])
                        },
                        modules: {
                          store: new Set([])
                        },
                        plugins: {
                          store: new Map([])
                        },
                        shorthands: [
                          'cachePredicate',
                          'cacheWithContext',
                          'concord',
                          'enforceExtension',
                          'enforceModuleExtension',
                          'symlinks',
                          'unsafeCache'
                        ],
                        cachePredicate: (value) => this.set(method, value),
                        cacheWithContext: (value) => this.set(method, value),
                        concord: (value) => this.set(method, value),
                        enforceExtension: (value) => this.set(method, value),
                        enforceModuleExtension: (value) => this.set(method, value),
                        symlinks: (value) => this.set(method, value),
                        unsafeCache: (value) => this.set(method, value)
                      },
                      shorthands: [
                        'enforce',
                        'issuer',
                        'parser',
                        'resource',
                        'resourceQuery',
                        'sideEffects',
                        'test',
                        'type'
                      ],
                      enforce: (value) => this.set(method, value),
                      issuer: (value) => this.set(method, value),
                      parser: (value) => this.set(method, value),
                      resource: (value) => this.set(method, value),
                      resourceQuery: (value) => this.set(method, value),
                      sideEffects: (value) => this.set(method, value),
                      test: (value) => this.set(method, value),
                      type: (value) => this.set(method, value)
                    }
                  ],
                  [
                    'media',
                    {
                      store: new Map([
                        [
                          'test',
                          /\.(mp4|webm|ogg|mp3|m4a|wav|flac|aac)(\?.*)?$/
                        ],
                        [
                          'type',
                          'asset'
                        ],
                        [
                          'parser',
                          {
                            dataUrlCondition: {
                              maxSize: 1024
                            }
                          }
                        ],
                        [
                          'generator',
                          {
                            outputPath: undefined,
                            publicPath: undefined,
                            filename: function () { /* omitted long function */ }
                          }
                        ]
                      ]),
                      name: 'media',
                      names: [
                        'media'
                      ],
                      ruleType: 'rule',
                      ruleTypes: [
                        'rule'
                      ],
                      uses: {
                        store: new Map([])
                      },
                      include: {
                        store: new Set([])
                      },
                      exclude: {
                        store: new Set([])
                      },
                      rules: {
                        store: new Map([])
                      },
                      oneOfs: {
                        store: new Map([])
                      },
                      resolve: {
                        store: new Map([]),
                        alias: {
                          store: new Map([])
                        },
                        aliasFields: {
                          store: new Set([])
                        },
                        descriptionFiles: {
                          store: new Set([])
                        },
                        extensions: {
                          store: new Set([])
                        },
                        mainFields: {
                          store: new Set([])
                        },
                        mainFiles: {
                          store: new Set([])
                        },
                        modules: {
                          store: new Set([])
                        },
                        plugins: {
                          store: new Map([])
                        },
                        shorthands: [
                          'cachePredicate',
                          'cacheWithContext',
                          'concord',
                          'enforceExtension',
                          'enforceModuleExtension',
                          'symlinks',
                          'unsafeCache'
                        ],
                        cachePredicate: (value) => this.set(method, value),
                        cacheWithContext: (value) => this.set(method, value),
                        concord: (value) => this.set(method, value),
                        enforceExtension: (value) => this.set(method, value),
                        enforceModuleExtension: (value) => this.set(method, value),
                        symlinks: (value) => this.set(method, value),
                        unsafeCache: (value) => this.set(method, value)
                      },
                      shorthands: [
                        'enforce',
                        'issuer',
                        'parser',
                        'resource',
                        'resourceQuery',
                        'sideEffects',
                        'test',
                        'type'
                      ],
                      enforce: (value) => this.set(method, value),
                      issuer: (value) => this.set(method, value),
                      parser: (value) => this.set(method, value),
                      resource: (value) => this.set(method, value),
                      resourceQuery: (value) => this.set(method, value),
                      sideEffects: (value) => this.set(method, value),
                      test: (value) => this.set(method, value),
                      type: (value) => this.set(method, value)
                    }
                  ],
                  [
                    'font',
                    {
                      store: new Map([
                        [
                          'test',
                          /\.(woff2?|eot|ttf|otf)(\?.*)?$/
                        ],
                        [
                          'type',
                          'asset'
                        ],
                        [
                          'parser',
                          {
                            dataUrlCondition: {
                              maxSize: 1024
                            }
                          }
                        ],
                        [
                          'generator',
                          {
                            outputPath: undefined,
                            publicPath: undefined,
                            filename: function () { /* omitted long function */ }
                          }
                        ]
                      ]),
                      name: 'font',
                      names: [
                        'font'
                      ],
                      ruleType: 'rule',
                      ruleTypes: [
                        'rule'
                      ],
                      uses: {
                        store: new Map([])
                      },
                      include: {
                        store: new Set([])
                      },
                      exclude: {
                        store: new Set([])
                      },
                      rules: {
                        store: new Map([])
                      },
                      oneOfs: {
                        store: new Map([])
                      },
                      resolve: {
                        store: new Map([]),
                        alias: {
                          store: new Map([])
                        },
                        aliasFields: {
                          store: new Set([])
                        },
                        descriptionFiles: {
                          store: new Set([])
                        },
                        extensions: {
                          store: new Set([])
                        },
                        mainFields: {
                          store: new Set([])
                        },
                        mainFiles: {
                          store: new Set([])
                        },
                        modules: {
                          store: new Set([])
                        },
                        plugins: {
                          store: new Map([])
                        },
                        shorthands: [
                          'cachePredicate',
                          'cacheWithContext',
                          'concord',
                          'enforceExtension',
                          'enforceModuleExtension',
                          'symlinks',
                          'unsafeCache'
                        ],
                        cachePredicate: (value) => this.set(method, value),
                        cacheWithContext: (value) => this.set(method, value),
                        concord: (value) => this.set(method, value),
                        enforceExtension: (value) => this.set(method, value),
                        enforceModuleExtension: (value) => this.set(method, value),
                        symlinks: (value) => this.set(method, value),
                        unsafeCache: (value) => this.set(method, value)
                      },
                      shorthands: [
                        'enforce',
                        'issuer',
                        'parser',
                        'resource',
                        'resourceQuery',
                        'sideEffects',
                        'test',
                        'type'
                      ],
                      enforce: (value) => this.set(method, value),
                      issuer: (value) => this.set(method, value),
                      parser: (value) => this.set(method, value),
                      resource: (value) => this.set(method, value),
                      resourceQuery: (value) => this.set(method, value),
                      sideEffects: (value) => this.set(method, value),
                      test: (value) => this.set(method, value),
                      type: (value) => this.set(method, value)
                    }
                  ],
                  [
                    'image',
                    {
                      store: new Map([
                        [
                          'test',
                          /\.(png|jpe?g|gif|bpm|svg|webp)(\?.*)?$/
                        ],
                        [
                          'type',
                          'asset'
                        ],
                        [
                          'parser',
                          {
                            dataUrlCondition: {
                              maxSize: 1024
                            }
                          }
                        ],
                        [
                          'generator',
                          {
                            outputPath: undefined,
                            publicPath: undefined,
                            filename: function () { /* omitted long function */ }
                          }
                        ]
                      ]),
                      name: 'image',
                      names: [
                        'image'
                      ],
                      ruleType: 'rule',
                      ruleTypes: [
                        'rule'
                      ],
                      uses: {
                        store: new Map([])
                      },
                      include: {
                        store: new Set([])
                      },
                      exclude: {
                        store: new Set([])
                      },
                      rules: {
                        store: new Map([])
                      },
                      oneOfs: {
                        store: new Map([])
                      },
                      resolve: {
                        store: new Map([]),
                        alias: {
                          store: new Map([])
                        },
                        aliasFields: {
                          store: new Set([])
                        },
                        descriptionFiles: {
                          store: new Set([])
                        },
                        extensions: {
                          store: new Set([])
                        },
                        mainFields: {
                          store: new Set([])
                        },
                        mainFiles: {
                          store: new Set([])
                        },
                        modules: {
                          store: new Set([])
                        },
                        plugins: {
                          store: new Map([])
                        },
                        shorthands: [
                          'cachePredicate',
                          'cacheWithContext',
                          'concord',
                          'enforceExtension',
                          'enforceModuleExtension',
                          'symlinks',
                          'unsafeCache'
                        ],
                        cachePredicate: (value) => this.set(method, value),
                        cacheWithContext: (value) => this.set(method, value),
                        concord: (value) => this.set(method, value),
                        enforceExtension: (value) => this.set(method, value),
                        enforceModuleExtension: (value) => this.set(method, value),
                        symlinks: (value) => this.set(method, value),
                        unsafeCache: (value) => this.set(method, value)
                      },
                      shorthands: [
                        'enforce',
                        'issuer',
                        'parser',
                        'resource',
                        'resourceQuery',
                        'sideEffects',
                        'test',
                        'type'
                      ],
                      enforce: (value) => this.set(method, value),
                      issuer: (value) => this.set(method, value),
                      parser: (value) => this.set(method, value),
                      resource: (value) => this.set(method, value),
                      resourceQuery: (value) => this.set(method, value),
                      sideEffects: (value) => this.set(method, value),
                      test: (value) => this.set(method, value),
                      type: (value) => this.set(method, value)
                    }
                  ]
                ])
              },
              defaultRules: {
                store: new Map([])
              },
              shorthands: [
                'noParse',
                'strictExportPresence'
              ],
              noParse: (value) => this.set(method, value),
              strictExportPresence: (value) => this.set(method, value)
            },
            node: {
              store: new Map([])
            },
            optimization: {
              store: new Map([
                [
                  'sideEffects',
                  true
                ],
                [
                  'minimize',
                  true
                ],
                [
                  'usedExports',
                  true
                ],
                [
                  'runtimeChunk',
                  {
                    name: 'runtime'
                  }
                ],
                [
                  'splitChunks',
                  {
                    chunks: 'all',
                    maxInitialRequests: Infinity,
                    minSize: 0,
                    cacheGroups: {
                      'default': false,
                      defaultVendors: false,
                      common: {
                        name: 'common',
                        minChunks: 2,
                        priority: 1
                      },
                      vendors: {
                        name: 'vendors',
                        minChunks: 2,
                        test: module => /[\\/]node_modules[\\/]/.test(module.resource),
                        priority: 10
                      },
                      taro: {
                        name: 'taro',
                        test: module => /@tarojs[\\/][a-z]+/.test(module.context),
                        priority: 100
                      }
                    }
                  }
                ]
              ]),
              minimizers: {
                store: new Map([
                  [
                    'terserPlugin',
                    {
                      store: new Map([
                        [
                          'init',
                          function () { /* omitted long function */ }
                        ],
                        [
                          'plugin',
                          function () { /* omitted long function */ }
                        ],
                        [
                          'args',
                          [
                            {
                              parallel: true,
                              terserOptions: {
                                parse: {
                                  ecma: 8
                                },
                                compress: {
                                  ecma: 5,
                                  warnings: false,
                                  arrows: false,
                                  collapse_vars: false,
                                  comparisons: false,
                                  computed_props: false,
                                  hoist_funs: false,
                                  hoist_props: false,
                                  hoist_vars: false,
                                  inline: false,
                                  loops: false,
                                  negate_iife: false,
                                  properties: false,
                                  reduce_funcs: false,
                                  reduce_vars: false,
                                  switches: false,
                                  toplevel: false,
                                  typeofs: false,
                                  booleans: true,
                                  if_return: true,
                                  sequences: true,
                                  unused: true,
                                  conditionals: true,
                                  dead_code: true,
                                  evaluate: true
                                },
                                output: {
                                  ecma: 5,
                                  comments: false,
                                  ascii_only: true
                                }
                              }
                            }
                          ]
                        ]
                      ]),
                      name: 'terserPlugin',
                      type: 'optimization.minimizer',
                      shorthands: [
                        'init'
                      ],
                      init: (value) => this.set(method, value)
                    }
                  ],
                  [
                    'cssoWebpackPlugin',
                    {
                      store: new Map([
                        [
                          'init',
                          function () { /* omitted long function */ }
                        ],
                        [
                          'plugin',
                          function () { /* omitted long function */ }
                        ],
                        [
                          'args',
                          [
                            {
                              test: /\.(css|scss|sass|less|styl|stylus|wxss|acss|ttss|jxss|qss)(\?.*)?$/,
                              parallel: true,
                              minify: function () { /* omitted long function */ },
                              minimizerOptions: {
                                preset: [
                                  'default',
                                  {
                                    mergeRules: false,
                                    mergeIdents: false,
                                    reduceIdents: false,
                                    discardUnused: false,
                                    minifySelectors: false
                                  }
                                ]
                              }
                            }
                          ]
                        ]
                      ]),
                      name: 'cssoWebpackPlugin',
                      type: 'optimization.minimizer',
                      shorthands: [
                        'init'
                      ],
                      init: (value) => this.set(method, value)
                    }
                  ]
                ])
              },
              shorthands: [
                'concatenateModules',
                'flagIncludedChunks',
                'mergeDuplicateChunks',
                'minimize',
                'namedChunks',
                'namedModules',
                'nodeEnv',
                'noEmitOnErrors',
                'occurrenceOrder',
                'portableRecords',
                'providedExports',
                'removeAvailableModules',
                'removeEmptyChunks',
                'runtimeChunk',
                'sideEffects',
                'splitChunks',
                'usedExports'
              ],
              concatenateModules: (value) => this.set(method, value),
              flagIncludedChunks: (value) => this.set(method, value),
              mergeDuplicateChunks: (value) => this.set(method, value),
              minimize: (value) => this.set(method, value),
              namedChunks: (value) => this.set(method, value),
              namedModules: (value) => this.set(method, value),
              nodeEnv: (value) => this.set(method, value),
              noEmitOnErrors: (value) => this.set(method, value),
              occurrenceOrder: (value) => this.set(method, value),
              portableRecords: (value) => this.set(method, value),
              providedExports: (value) => this.set(method, value),
              removeAvailableModules: (value) => this.set(method, value),
              removeEmptyChunks: (value) => this.set(method, value),
              runtimeChunk: (value) => this.set(method, value),
              sideEffects: (value) => this.set(method, value),
              splitChunks: (value) => this.set(method, value),
              usedExports: (value) => this.set(method, value)
            },
            output: {
              store: new Map([
                [
                  'chunkLoadingGlobal',
                  'webpackJsonp'
                ],
                [
                  'path',
                  '/Users/jaycezhang/Documents/taro-webpack5-mobx/dist'
                ],
                [
                  'publicPath',
                  '/'
                ],
                [
                  'filename',
                  '[name].js'
                ],
                [
                  'chunkFilename',
                  '[name].js'
                ],
                [
                  'globalObject',
                  'wx'
                ],
                [
                  'enabledLibraryTypes',
                  []
                ],
                [
                  'devtoolModuleFilenameTemplate',
                  function () { /* omitted long function */ }
                ]
              ]),
              shorthands: [
                'auxiliaryComment',
                'chunkCallbackName',
                'chunkFilename',
                'chunkLoadTimeout',
                'crossOriginLoading',
                'devtoolFallbackModuleFilenameTemplate',
                'devtoolLineToLine',
                'devtoolModuleFilenameTemplate',
                'devtoolNamespace',
                'filename',
                'futureEmitAssets',
                'globalObject',
                'hashDigest',
                'hashDigestLength',
                'hashFunction',
                'hashSalt',
                'hotUpdateChunkFilename',
                'hotUpdateFunction',
                'hotUpdateMainFilename',
                'jsonpFunction',
                'library',
                'libraryExport',
                'libraryTarget',
                'path',
                'pathinfo',
                'publicPath',
                'sourceMapFilename',
                'sourcePrefix',
                'strictModuleExceptionHandling',
                'umdNamedDefine',
                'webassemblyModuleFilename'
              ],
              auxiliaryComment: (value) => this.set(method, value),
              chunkCallbackName: (value) => this.set(method, value),
              chunkFilename: (value) => this.set(method, value),
              chunkLoadTimeout: (value) => this.set(method, value),
              crossOriginLoading: (value) => this.set(method, value),
              devtoolFallbackModuleFilenameTemplate: (value) => this.set(method, value),
              devtoolLineToLine: (value) => this.set(method, value),
              devtoolModuleFilenameTemplate: (value) => this.set(method, value),
              devtoolNamespace: (value) => this.set(method, value),
              filename: (value) => this.set(method, value),
              futureEmitAssets: (value) => this.set(method, value),
              globalObject: (value) => this.set(method, value),
              hashDigest: (value) => this.set(method, value),
              hashDigestLength: (value) => this.set(method, value),
              hashFunction: (value) => this.set(method, value),
              hashSalt: (value) => this.set(method, value),
              hotUpdateChunkFilename: (value) => this.set(method, value),
              hotUpdateFunction: (value) => this.set(method, value),
              hotUpdateMainFilename: (value) => this.set(method, value),
              jsonpFunction: (value) => this.set(method, value),
              library: (value) => this.set(method, value),
              libraryExport: (value) => this.set(method, value),
              libraryTarget: (value) => this.set(method, value),
              path: (value) => this.set(method, value),
              pathinfo: (value) => this.set(method, value),
              publicPath: (value) => this.set(method, value),
              sourceMapFilename: (value) => this.set(method, value),
              sourcePrefix: (value) => this.set(method, value),
              strictModuleExceptionHandling: (value) => this.set(method, value),
              umdNamedDefine: (value) => this.set(method, value),
              webassemblyModuleFilename: (value) => this.set(method, value)
            },
            performance: {
              store: new Map([
                [
                  'maxEntrypointSize',
                  2000000
                ]
              ]),
              shorthands: [
                'assetFilter',
                'hints',
                'maxAssetSize',
                'maxEntrypointSize'
              ],
              assetFilter: (value) => this.set(method, value),
              hints: (value) => this.set(method, value),
              maxAssetSize: (value) => this.set(method, value),
              maxEntrypointSize: (value) => this.set(method, value)
            },
            plugins: {
              store: new Map([
                [
                  'webpackbar',
                  {
                    store: new Map([
                      [
                        'init',
                        function () { /* omitted long function */ }
                      ],
                      [
                        'plugin',
                        function () { /* omitted long function */ }
                      ],
                      [
                        'args',
                        [
                          {
                            reporters: [
                              'basic',
                              'fancy',
                              {
                                done: function () { /* omitted long function */ }
                              }
                            ],
                            basic: false,
                            fancy: true
                          }
                        ]
                      ]
                    ]),
                    name: 'webpackbar',
                    type: 'plugin',
                    shorthands: [
                      'init'
                    ],
                    init: (value) => this.set(method, value)
                  }
                ],
                [
                  'providerPlugin',
                  {
                    store: new Map([
                      [
                        'init',
                        function () { /* omitted long function */ }
                      ],
                      [
                        'plugin',
                        function () { /* omitted long function */ }
                      ],
                      [
                        'args',
                        [
                          {
                            window: [
                              '@tarojs/runtime',
                              'window'
                            ],
                            document: [
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
                            ]
                          }
                        ]
                      ]
                    ]),
                    name: 'providerPlugin',
                    type: 'plugin',
                    shorthands: [
                      'init'
                    ],
                    init: (value) => this.set(method, value)
                  }
                ],
                [
                  'definePlugin',
                  {
                    store: new Map([
                      [
                        'init',
                        function () { /* omitted long function */ }
                      ],
                      [
                        'plugin',
                        function () { /* omitted long function */ }
                      ],
                      [
                        'args',
                        [
                          {
                            'process.env.NODE_ENV': '"production"',
                            'process.env.FRAMEWORK': '"react"',
                            'process.env.TARO_ENV': '"weapp"',
                            'process.env.TARO_PLATFORM': '"mini"',
                            ENABLE_INNER_HTML: true,
                            ENABLE_ADJACENT_HTML: false,
                            ENABLE_SIZE_APIS: false,
                            ENABLE_TEMPLATE_CONTENT: false,
                            ENABLE_CLONE_NODE: false,
                            ENABLE_CONTAINS: false,
                            ENABLE_MUTATION_OBSERVER: false,
                            __TARO_FRAMEWORK__: '"react"'
                          }
                        ]
                      ]
                    ]),
                    name: 'definePlugin',
                    type: 'plugin',
                    shorthands: [
                      'init'
                    ],
                    init: (value) => this.set(method, value)
                  }
                ],
                [
                  'miniCssExtractPlugin',
                  {
                    store: new Map([
                      [
                        'init',
                        function () { /* omitted long function */ }
                      ],
                      [
                        'plugin',
                        function () { /* omitted long function */ }
                      ],
                      [
                        'args',
                        [
                          {
                            filename: '[name].wxss',
                            chunkFilename: '[name].wxss'
                          }
                        ]
                      ]
                    ]),
                    name: 'miniCssExtractPlugin',
                    type: 'plugin',
                    shorthands: [
                      'init'
                    ],
                    init: (value) => this.set(method, value)
                  }
                ],
                [
                  'miniSplitChunksPlugin',
                  {
                    store: new Map([
                      [
                        'init',
                        function () { /* omitted long function */ }
                      ],
                      [
                        'plugin',
                        function () { /* omitted long function */ }
                      ],
                      [
                        'args',
                        [
                          {
                            exclude: undefined,
                            fileType: {
                              templ: '.wxml',
                              style: '.wxss',
                              config: '.json',
                              script: '.js',
                              xs: '.wxs'
                            }
                          }
                        ]
                      ]
                    ]),
                    name: 'miniSplitChunksPlugin',
                    type: 'plugin',
                    shorthands: [
                      'init'
                    ],
                    init: (value) => this.set(method, value)
                  }
                ],
                [
                  'miniPlugin',
                  {
                    store: new Map([
                      [
                        'init',
                        function () { /* omitted long function */ }
                      ],
                      [
                        'plugin',
                        function () { /* omitted long function */ }
                      ],
                      [
                        'args',
                        [
                          {
                            sourceDir: '/Users/jaycezhang/Documents/taro-webpack5-mobx/src',
                            outputDir: '/Users/jaycezhang/Documents/taro-webpack5-mobx/dist',
                            runtimePath: '@tarojs/plugin-platform-weapp/dist/runtime',
                            nodeModulesPath: '/Users/jaycezhang/Documents/taro-webpack5-mobx/node_modules',
                            framework: 'react',
                            frameworkExts: [
                              '.js',
                              '.jsx',
                              '.ts',
                              '.tsx'
                            ],
                            fileType: {
                              templ: '.wxml',
                              style: '.wxss',
                              config: '.json',
                              script: '.js',
                              xs: '.wxs'
                            },
                            template: {
                              exportExpr: 'module.exports =',
                              thirdPartyPatcher: {},
                              supportXS: true,
                              Adapter: {
                                'if': 'wx:if',
                                'else': 'wx:else',
                                elseif: 'wx:elif',
                                'for': 'wx:for',
                                forItem: 'wx:for-item',
                                forIndex: 'wx:for-index',
                                key: 'wx:key',
                                xs: 'wxs',
                                type: 'weapp'
                              },
                              internalComponents: {
                                View: {
                                  'hover-class': '\'none\'',
                                  'hover-stop-propagation': '!1',
                                  'hover-start-time': '50',
                                  'hover-stay-time': '400',
                                  bindTouchStart: '',
                                  bindTouchMove: '',
                                  bindTouchEnd: '',
                                  bindTouchCancel: '',
                                  bindLongTap: '',
                                  animation: '',
                                  bindAnimationStart: '',
                                  bindAnimationIteration: '',
                                  bindAnimationEnd: '',
                                  bindTransitionEnd: ''
                                },
                                Icon: {
                                  type: '',
                                  size: '23',
                                  color: ''
                                },
                                Progress: {
                                  percent: '',
                                  'stroke-width': '6',
                                  color: '\'#09BB07\'',
                                  activeColor: '\'#09BB07\'',
                                  backgroundColor: '\'#EBEBEB\'',
                                  active: '!1',
                                  'active-mode': '\'backwards\'',
                                  'show-info': '!1',
                                  'border-radius': '0',
                                  'font-size': '16',
                                  duration: '30',
                                  bindActiveEnd: ''
                                },
                                RichText: {
                                  nodes: '[]',
                                  space: '',
                                  'user-select': 'false'
                                },
                                Text: {
                                  selectable: '!1',
                                  space: '',
                                  decode: '!1',
                                  'user-select': 'false'
                                },
                                Button: {
                                  size: '\'default\'',
                                  type: '',
                                  plain: '!1',
                                  disabled: '',
                                  loading: '!1',
                                  'form-type': '',
                                  'open-type': '',
                                  'hover-class': '\'button-hover\'',
                                  'hover-stop-propagation': '!1',
                                  'hover-start-time': '20',
                                  'hover-stay-time': '70',
                                  name: '',
                                  bindTouchStart: '',
                                  bindTouchMove: '',
                                  bindTouchEnd: '',
                                  bindTouchCancel: '',
                                  bindLongTap: '',
                                  lang: 'en',
                                  'session-from': '',
                                  'send-message-title': '',
                                  'send-message-path': '',
                                  'send-message-img': '',
                                  'app-parameter': '',
                                  'show-message-card': 'false',
                                  'business-id': '',
                                  bindGetUserInfo: '',
                                  bindContact: '',
                                  bindGetPhoneNumber: '',
                                  bindChooseAvatar: '',
                                  bindError: '',
                                  bindOpenSetting: '',
                                  bindLaunchApp: ''
                                },
                                Checkbox: {
                                  value: '',
                                  disabled: '',
                                  checked: '!1',
                                  color: '\'#09BB07\'',
                                  name: ''
                                },
                                CheckboxGroup: {
                                  bindChange: '',
                                  name: ''
                                },
                                Form: {
                                  'report-submit': '!1',
                                  bindSubmit: '',
                                  bindReset: '',
                                  name: '',
                                  'report-submit-timeout': '0'
                                },
                                Input: {
                                  value: '',
                                  type: '\'\'',
                                  password: '!1',
                                  placeholder: '',
                                  'placeholder-style': '',
                                  'placeholder-class': '\'input-placeholder\'',
                                  disabled: '',
                                  maxlength: '140',
                                  'cursor-spacing': '0',
                                  focus: '!1',
                                  'confirm-type': '\'done\'',
                                  'confirm-hold': '!1',
                                  cursor: 'i.value.length',
                                  'selection-start': '-1',
                                  'selection-end': '-1',
                                  bindInput: '',
                                  bindFocus: '',
                                  bindBlur: '',
                                  bindConfirm: '',
                                  name: '',
                                  'always-embed': 'false',
                                  'adjust-position': 'true',
                                  'hold-keyboard': 'false',
                                  'safe-password-cert-path': '',
                                  'safe-password-length': '',
                                  'safe-password-time-stamp': '',
                                  'safe-password-nonce': '',
                                  'safe-password-salt': '',
                                  'safe-password-custom-hash': '',
                                  'auto-fill': '',
                                  bindKeyboardHeightChange: '',
                                  bindNicknameReview: ''
                                },
                                Label: {
                                  'for': '',
                                  name: ''
                                },
                                Picker: {
                                  mode: '\'selector\'',
                                  disabled: '',
                                  range: '',
                                  'range-key': '',
                                  value: '',
                                  start: '',
                                  end: '',
                                  fields: '\'day\'',
                                  'custom-item': '',
                                  name: '',
                                  bindCancel: '',
                                  bindChange: '',
                                  bindColumnChange: '',
                                  'header-text': '',
                                  level: 'region'
                                },
                                PickerView: {
                                  value: '',
                                  'indicator-style': '',
                                  'indicator-class': '',
                                  'mask-style': '',
                                  'mask-class': '',
                                  bindChange: '',
                                  name: '',
                                  'immediate-change': 'false',
                                  bindPickStart: '',
                                  bindPickEnd: ''
                                },
                                PickerViewColumn: {
                                  name: ''
                                },
                                Radio: {
                                  value: '',
                                  checked: '!1',
                                  disabled: '',
                                  color: '\'#09BB07\'',
                                  name: ''
                                },
                                RadioGroup: {
                                  bindChange: '',
                                  name: ''
                                },
                                Slider: {
                                  min: '0',
                                  max: '100',
                                  step: '1',
                                  disabled: '',
                                  value: '0',
                                  activeColor: '\'#1aad19\'',
                                  backgroundColor: '\'#e9e9e9\'',
                                  'block-size': '28',
                                  'block-color': '\'#ffffff\'',
                                  'show-value': '!1',
                                  bindChange: '',
                                  bindChanging: '',
                                  name: '',
                                  color: '\'#e9e9e9\'',
                                  'selected-color': '\'#1aad19\''
                                },
                                Switch: {
                                  checked: '!1',
                                  disabled: '',
                                  type: '\'switch\'',
                                  color: '\'#04BE02\'',
                                  bindChange: '',
                                  name: ''
                                },
                                CoverImage: {
                                  src: '',
                                  bindLoad: 'eh',
                                  bindError: 'eh'
                                },
                                Textarea: {
                                  value: '',
                                  placeholder: '',
                                  'placeholder-style': '',
                                  'placeholder-class': '\'textarea-placeholder\'',
                                  disabled: '',
                                  maxlength: '140',
                                  'auto-focus': '!1',
                                  focus: '!1',
                                  'auto-height': '!1',
                                  fixed: '!1',
                                  'cursor-spacing': '0',
                                  cursor: '-1',
                                  'selection-start': '-1',
                                  'selection-end': '-1',
                                  bindFocus: '',
                                  bindBlur: '',
                                  bindLineChange: '',
                                  bindInput: '',
                                  bindConfirm: '',
                                  name: '',
                                  'show-confirm-bar': 'true',
                                  'adjust-position': 'true',
                                  'hold-keyboard': 'false',
                                  'disable-default-padding': 'false',
                                  'confirm-type': '\'return\'',
                                  'confirm-hold': 'false',
                                  bindKeyboardHeightChange: ''
                                },
                                CoverView: {
                                  'scroll-top': '!1',
                                  bindTouchStart: '',
                                  bindTouchMove: '',
                                  bindTouchEnd: '',
                                  bindTouchCancel: '',
                                  bindLongTap: '',
                                  'marker-id': '',
                                  slot: ''
                                },
                                MovableArea: {
                                  'scale-area': '!1'
                                },
                                MovableView: {
                                  direction: 'none',
                                  inertia: '!1',
                                  'out-of-bounds': '!1',
                                  x: '',
                                  y: '',
                                  damping: '20',
                                  friction: '2',
                                  disabled: '',
                                  scale: '!1',
                                  'scale-min': '0.5',
                                  'scale-max': '10',
                                  'scale-value': '1',
                                  bindChange: '',
                                  bindScale: '',
                                  bindHTouchMove: '',
                                  bindVTouchMove: '',
                                  width: '\'10px\'',
                                  height: '\'10px\'',
                                  bindTouchStart: '',
                                  bindTouchMove: '',
                                  bindTouchEnd: '',
                                  bindTouchCancel: '',
                                  bindLongTap: '',
                                  animation: '',
                                  bindAnimationStart: '',
                                  bindAnimationIteration: '',
                                  bindAnimationEnd: '',
                                  bindTransitionEnd: ''
                                },
                                ScrollView: {
                                  'scroll-x': '!1',
                                  'scroll-y': '!1',
                                  'upper-threshold': '50',
                                  'lower-threshold': '50',
                                  'scroll-top': '',
                                  'scroll-left': '',
                                  'scroll-into-view': '',
                                  'scroll-with-animation': '!1',
                                  'enable-back-to-top': '!1',
                                  bindScrollToUpper: '',
                                  bindScrollToLower: '',
                                  bindScroll: '',
                                  bindTouchStart: '',
                                  bindTouchMove: '',
                                  bindTouchEnd: '',
                                  bindTouchCancel: '',
                                  bindLongTap: '',
                                  animation: '',
                                  bindAnimationStart: '',
                                  bindAnimationIteration: '',
                                  bindAnimationEnd: '',
                                  bindTransitionEnd: '',
                                  type: '\'list\'',
                                  'event-passive': 'false',
                                  'enable-flex': 'false',
                                  'scroll-anchoring': 'false',
                                  'refresher-enabled': 'false',
                                  'refresher-threshold': '45',
                                  'refresher-default-style': '\'black\'',
                                  'refresher-background': '\'#FFF\'',
                                  'refresher-triggered': 'false',
                                  enhanced: 'false',
                                  bounces: 'true',
                                  'show-scrollbar': 'true',
                                  'paging-enabled': 'false',
                                  'fast-deceleration': 'false',
                                  reverse: 'false',
                                  'cache-extent': '0',
                                  'scroll-into-view-within-extent': 'false',
                                  'scroll-into-view-alignment': '\'start\'',
                                  bindDragStart: '',
                                  bindDragging: '',
                                  bindDragEnd: '',
                                  bindRefresherPulling: '',
                                  bindRefresherRefresh: '',
                                  bindRefresherRestore: '',
                                  bindRefresherAbort: '',
                                  bindScrollStart: '',
                                  bindScrollEnd: '',
                                  bindRefresherWillRefresh: ''
                                },
                                Swiper: {
                                  'indicator-dots': '!1',
                                  'indicator-color': '\'rgba(0, 0, 0, .3)\'',
                                  'indicator-active-color': '\'#000000\'',
                                  autoplay: '!1',
                                  current: '0',
                                  interval: '5000',
                                  duration: '500',
                                  circular: '!1',
                                  vertical: '!1',
                                  'previous-margin': '\'0px\'',
                                  'next-margin': '\'0px\'',
                                  'display-multiple-items': '1',
                                  bindChange: '',
                                  bindTransition: '',
                                  bindAnimationFinish: '',
                                  bindTouchStart: '',
                                  bindTouchMove: '',
                                  bindTouchEnd: '',
                                  bindTouchCancel: '',
                                  bindLongTap: '',
                                  'snap-to-edge': 'false',
                                  'easing-function': '\'default\''
                                },
                                SwiperItem: {
                                  'item-id': '',
                                  'skip-hidden-item-layout': 'false'
                                },
                                Navigator: {
                                  url: '',
                                  'open-type': '\'navigate\'',
                                  delta: '1',
                                  'hover-class': '\'navigator-hover\'',
                                  'hover-stop-propagation': '!1',
                                  'hover-start-time': '50',
                                  'hover-stay-time': '600',
                                  bindSuccess: '',
                                  bindFail: '',
                                  bindComplete: '',
                                  target: '\'self\'',
                                  'app-id': '',
                                  path: '',
                                  'extra-data': '',
                                  version: '\'version\''
                                },
                                Audio: {
                                  id: '',
                                  src: '',
                                  loop: '!1',
                                  controls: '!1',
                                  poster: '',
                                  name: '',
                                  author: '',
                                  bindError: '',
                                  bindPlay: '',
                                  bindPause: '',
                                  bindTimeUpdate: '',
                                  bindEnded: ''
                                },
                                Camera: {
                                  'device-position': '\'back\'',
                                  flash: '\'auto\'',
                                  bindStop: '',
                                  bindError: '',
                                  mode: '\'normal\'',
                                  resolution: '\'medium\'',
                                  'frame-size': '\'medium\'',
                                  bindInitDone: '',
                                  bindScanCode: ''
                                },
                                Image: {
                                  src: '',
                                  mode: '\'scaleToFill\'',
                                  'lazy-load': '!1',
                                  bindError: '',
                                  bindLoad: '',
                                  bindTouchStart: '',
                                  bindTouchMove: '',
                                  bindTouchEnd: '',
                                  bindTouchCancel: '',
                                  bindLongTap: '',
                                  webp: 'false',
                                  'show-menu-by-longpress': 'false'
                                },
                                LivePlayer: {
                                  src: '',
                                  autoplay: '!1',
                                  muted: '!1',
                                  orientation: '\'vertical\'',
                                  'object-fit': '\'contain\'',
                                  'background-mute': '!1',
                                  'min-cache': '1',
                                  'max-cache': '3',
                                  bindStateChange: '',
                                  bindFullScreenChange: '',
                                  bindNetStatus: '',
                                  animation: '',
                                  bindAnimationStart: '',
                                  bindAnimationIteration: '',
                                  bindAnimationEnd: '',
                                  bindTransitionEnd: '',
                                  mode: '\'live\'',
                                  'sound-mode': '\'speaker\'',
                                  'auto-pause-if-navigate': 'true',
                                  'auto-pause-if-open-native': 'true',
                                  'picture-in-picture-mode': '[]',
                                  bindstatechange: '',
                                  bindfullscreenchange: '',
                                  bindnetstatus: '',
                                  bindAudioVolumeNotify: '',
                                  bindEnterPictureInPicture: '',
                                  bindLeavePictureInPicture: ''
                                },
                                Video: {
                                  src: '',
                                  duration: '',
                                  controls: '!0',
                                  'danmu-list': '',
                                  'danmu-btn': '',
                                  'enable-danmu': '',
                                  autoplay: '!1',
                                  loop: '!1',
                                  muted: '!1',
                                  'initial-time': '0',
                                  'page-gesture': '!1',
                                  direction: '',
                                  'show-progress': '!0',
                                  'show-fullscreen-btn': '!0',
                                  'show-play-btn': '!0',
                                  'show-center-play-btn': '!0',
                                  'enable-progress-gesture': '!0',
                                  'object-fit': '\'contain\'',
                                  poster: '',
                                  'show-mute-btn': '!1',
                                  bindPlay: '',
                                  bindPause: '',
                                  bindEnded: '',
                                  bindTimeUpdate: '',
                                  bindFullScreenChange: '',
                                  bindWaiting: '',
                                  bindError: '',
                                  animation: '',
                                  bindAnimationStart: '',
                                  bindAnimationIteration: '',
                                  bindAnimationEnd: '',
                                  bindTransitionEnd: '',
                                  title: '',
                                  'play-btn-position': '\'bottom\'',
                                  'enable-play-gesture': 'false',
                                  'auto-pause-if-navigate': 'true',
                                  'auto-pause-if-open-native': 'true',
                                  'vslide-gesture': 'false',
                                  'vslide-gesture-in-fullscreen': 'true',
                                  'ad-unit-id': '',
                                  'poster-for-crawler': '',
                                  'show-casting-button': 'false',
                                  'picture-in-picture-mode': '[]',
                                  'enable-auto-rotation': 'false',
                                  'show-screen-lock-button': 'false',
                                  'show-snapshot-button': 'false',
                                  'show-background-playback-button': 'false',
                                  'background-poster': '',
                                  bindProgress: '',
                                  bindLoadedMetadata: '',
                                  bindControlsToggle: '',
                                  bindEnterPictureInPicture: '',
                                  bindLeavePictureInPicture: '',
                                  bindSeekComplete: '',
                                  bindAdLoad: '',
                                  bindAdError: '',
                                  bindAdClose: '',
                                  bindAdPlay: ''
                                },
                                Canvas: {
                                  'canvas-id': '',
                                  'disable-scroll': '!1',
                                  bindError: '',
                                  bindTouchStart: '',
                                  bindTouchMove: '',
                                  bindTouchEnd: '',
                                  bindTouchCancel: '',
                                  bindLongTap: '',
                                  type: ''
                                },
                                Ad: {
                                  'unit-id': '',
                                  'ad-intervals': '',
                                  bindLoad: '',
                                  bindError: '',
                                  bindClose: '',
                                  'ad-type': '\'banner\'',
                                  'ad-theme': '\'white\''
                                },
                                WebView: {
                                  src: '',
                                  bindMessage: '',
                                  bindLoad: '',
                                  bindError: ''
                                },
                                Block: {},
                                Map: {
                                  longitude: '',
                                  latitude: '',
                                  scale: '16',
                                  markers: '[]',
                                  covers: '',
                                  polyline: '[]',
                                  circles: '[]',
                                  controls: '[]',
                                  'include-points': '[]',
                                  'show-location': '',
                                  'layer-style': '1',
                                  bindMarkerTap: '',
                                  bindControlTap: '',
                                  bindCalloutTap: '',
                                  bindUpdated: '',
                                  bindTouchStart: '',
                                  bindTouchMove: '',
                                  bindTouchEnd: '',
                                  bindTouchCancel: '',
                                  bindLongTap: '',
                                  polygons: '[]',
                                  subkey: '',
                                  rotate: '0',
                                  skew: '0',
                                  'max-scale': '20',
                                  'min-scale': '3',
                                  'enable-3D': 'false',
                                  'show-compass': 'false',
                                  'show-scale': 'false',
                                  'enable-overlooking': 'false',
                                  'enable-zoom': 'true',
                                  'enable-scroll': 'true',
                                  'enable-rotate': 'false',
                                  'enable-satellite': 'false',
                                  'enable-traffic': 'false',
                                  'enable-poi': 'true',
                                  'enable-building': 'true',
                                  setting: '[]',
                                  bindLabelTap: '',
                                  bindRegionChange: '',
                                  bindPoiTap: '',
                                  bindAnchorPointTap: ''
                                },
                                Slot: {
                                  name: ''
                                },
                                SlotView: {
                                  name: ''
                                },
                                NativeSlot: {
                                  name: ''
                                },
                                StickySection: {
                                  'push-pinned-header': 'true'
                                },
                                GridView: {
                                  type: '\'aligned\'',
                                  'cross-axis-count': '2',
                                  'max-cross-axis-extent': '0',
                                  'main-axis-gap': '0',
                                  'cross-axis-gap': '0'
                                },
                                ListView: {},
                                StickyHeader: {},
                                Editor: {
                                  'read-only': 'false',
                                  placeholder: '',
                                  'show-img-size': 'false',
                                  'show-img-toolbar': 'false',
                                  'show-img-resize': 'false',
                                  focus: 'false',
                                  bindReady: '',
                                  bindFocus: '',
                                  bindBlur: '',
                                  bindInput: '',
                                  bindStatusChange: '',
                                  name: ''
                                },
                                MatchMedia: {
                                  'min-width': '',
                                  'max-width': '',
                                  width: '',
                                  'min-height': '',
                                  'max-height': '',
                                  height: '',
                                  orientation: ''
                                },
                                FunctionalPageNavigator: {
                                  version: '\'release\'',
                                  name: '',
                                  args: '',
                                  bindSuccess: '',
                                  bindFail: '',
                                  bindCancel: ''
                                },
                                LivePusher: {
                                  url: '',
                                  mode: '\'RTC\'',
                                  autopush: 'false',
                                  muted: 'false',
                                  'enable-camera': 'true',
                                  'auto-focus': 'true',
                                  orientation: '\'vertical\'',
                                  beauty: '0',
                                  whiteness: '0',
                                  aspect: '\'9:16\'',
                                  'min-bitrate': '200',
                                  'max-bitrate': '1000',
                                  'audio-quality': '\'high\'',
                                  'waiting-image': '',
                                  'waiting-image-hash': '',
                                  zoom: 'false',
                                  'device-position': '\'front\'',
                                  'background-mute': 'false',
                                  mirror: 'false',
                                  'remote-mirror': 'false',
                                  'local-mirror': 'false',
                                  'audio-reverb-type': '0',
                                  'enable-mic': 'true',
                                  'enable-agc': 'false',
                                  'enable-ans': 'false',
                                  'audio-volume-type': '\'voicecall\'',
                                  'video-width': '360',
                                  'video-height': '640',
                                  'beauty-style': '\'smooth\'',
                                  filter: '\'standard\'',
                                  animation: '',
                                  bindStateChange: '',
                                  bindNetStatus: '',
                                  bindBgmStart: '',
                                  bindBgmProgress: '',
                                  bindBgmComplete: '',
                                  bindAudioVolumeNotify: ''
                                },
                                OfficialAccount: {
                                  bindLoad: '',
                                  bindError: ''
                                },
                                OpenData: {
                                  type: '',
                                  'open-gid': '',
                                  lang: '\'en\'',
                                  'default-text': '',
                                  'default-avatar': '',
                                  bindError: ''
                                },
                                NavigationBar: {
                                  title: '',
                                  loading: 'false',
                                  'front-color': '',
                                  'background-color': '',
                                  'color-animation-duration': '0',
                                  'color-animation-timing-func': '\'linear\''
                                },
                                PageMeta: {
                                  'background-text-style': '',
                                  'background-color': '',
                                  'background-color-top': '',
                                  'background-color-bottom': '',
                                  'scroll-top': '\'\'',
                                  'scroll-duration': '300',
                                  'page-style': '\'\'',
                                  'root-font-size': '\'\'',
                                  bindResize: '',
                                  bindScroll: '',
                                  bindScrollDone: ''
                                },
                                VoipRoom: {
                                  openid: '',
                                  mode: '\'camera\'',
                                  'device-position': '\'front\'',
                                  bindError: ''
                                },
                                AdCustom: {
                                  'unit-id': '',
                                  'ad-intervals': '',
                                  bindLoad: '',
                                  bindError: ''
                                },
                                PageContainer: {
                                  show: 'false',
                                  duration: '300',
                                  'z-index': '100',
                                  overlay: 'true',
                                  position: '\'bottom\'',
                                  round: 'false',
                                  'close-on-slide-down': 'false',
                                  'overlay-style': '',
                                  'custom-style': '',
                                  bindBeforeEnter: '',
                                  bindEnter: '',
                                  bindAfterEnter: '',
                                  bindBeforeLeave: '',
                                  bindLeave: '',
                                  bindAfterLeave: '',
                                  bindClickOverlay: ''
                                },
                                ShareElement: {
                                  mapkey: '',
                                  transform: 'false',
                                  duration: '300',
                                  'easing-function': '\'ease-out\''
                                },
                                KeyboardAccessory: {},
                                RootPortal: {},
                                ChannelLive: {
                                  feedId: '',
                                  finderUserName: ''
                                },
                                ChannelVideo: {
                                  feedId: '',
                                  finderUserName: '',
                                  autoplay: 'false',
                                  loop: 'false',
                                  muted: 'false',
                                  objectFit: '\'contain\'',
                                  bindError: ''
                                }
                              },
                              focusComponents: new Set([
                                'input',
                                'textarea',
                                'editor'
                              ]),
                              voidElements: new Set([
                                'progress',
                                'icon',
                                'rich-text',
                                'input',
                                'textarea',
                                'slider',
                                'switch',
                                'audio',
                                'ad',
                                'official-account',
                                'open-data',
                                'navigation-bar',
                                'voip-room'
                              ]),
                              nestElements: new Map([
                                [
                                  'view',
                                  -1
                                ],
                                [
                                  'catch-view',
                                  -1
                                ],
                                [
                                  'cover-view',
                                  -1
                                ],
                                [
                                  'static-view',
                                  -1
                                ],
                                [
                                  'pure-view',
                                  -1
                                ],
                                [
                                  'block',
                                  -1
                                ],
                                [
                                  'text',
                                  -1
                                ],
                                [
                                  'static-text',
                                  6
                                ],
                                [
                                  'slot',
                                  8
                                ],
                                [
                                  'slot-view',
                                  8
                                ],
                                [
                                  'label',
                                  6
                                ],
                                [
                                  'form',
                                  4
                                ],
                                [
                                  'scroll-view',
                                  4
                                ],
                                [
                                  'swiper',
                                  4
                                ],
                                [
                                  'swiper-item',
                                  4
                                ]
                              ]),
                              buildPageTemplate: function () { /* omitted long function */ },
                              buildBaseComponentTemplate: function () { /* omitted long function */ },
                              buildCustomComponentTemplate: function () { /* omitted long function */ },
                              buildXScript: function () { /* omitted long function */ },
                              isSupportRecursive: false,
                              _baseLevel: 16,
                              buildTemplate: function () { /* omitted long function */ },
                              modifyTemplateResult: function () { /* omitted long function */ },
                              pluginOptions: {}
                            },
                            commonChunks: [
                              'runtime',
                              'vendors',
                              'taro',
                              'common'
                            ],
                            designWidth: 750,
                            deviceRatio: {
                              '640': 1.17,
                              '750': 1,
                              '828': 0.905
                            },
                            baseLevel: 16,
                            minifyXML: {},
                            alias: {},
                            constantsReplaceList: {
                              'process.env.NODE_ENV': '"production"',
                              'process.env.FRAMEWORK': '"react"',
                              'process.env.TARO_ENV': '"weapp"',
                              'process.env.TARO_PLATFORM': '"mini"',
                              ENABLE_INNER_HTML: true,
                              ENABLE_ADJACENT_HTML: false,
                              ENABLE_SIZE_APIS: false,
                              ENABLE_TEMPLATE_CONTENT: false,
                              ENABLE_CLONE_NODE: false,
                              ENABLE_CONTAINS: false,
                              ENABLE_MUTATION_OBSERVER: false,
                              __TARO_FRAMEWORK__: '"react"'
                            },
                            hot: false,
                            prerender: undefined,
                            blended: undefined,
                            isBuildNativeComp: false,
                            isBuildPlugin: false,
                            pluginConfig: undefined,
                            pluginMainEntry: undefined,
                            addChunkPages: undefined,
                            modifyMiniConfigs: undefined,
                            modifyBuildAssets: undefined,
                            onCompilerMake: undefined,
                            onParseCreateElement: undefined,
                            logger: undefined,
                            loaderMeta: {
                              importFrameworkStatement: '\nimport * as React from \'react\'\nimport ReactDOM from \'react-dom\'\n',
                              mockAppStatement: '\nclass App extends React.Component {\n  render () {\n    return this.props.children\n  }\n}\n',
                              frameworkArgs: 'React, ReactDOM, config',
                              creator: 'createReactApp',
                              creatorLocation: '@tarojs/plugin-framework-react/dist/runtime',
                              importFrameworkName: 'React',
                              extraImportForWeb: '',
                              execBeforeCreateWebApp: '',
                              modifyConfig(config, source) {
                                  Object.assign(config, addConfig(source));
                              }
                            }
                          }
                        ]
                      ]
                    ]),
                    name: 'miniPlugin',
                    type: 'plugin',
                    shorthands: [
                      'init'
                    ],
                    init: (value) => this.set(method, value)
                  }
                ]
              ])
            },
            resolve: {
              store: new Map([
                [
                  'symlinks',
                  true
                ],
                [
                  'fallback',
                  {
                    fs: false,
                    path: false
                  }
                ]
              ]),
              alias: {
                store: new Map([
                  [
                    'regenerator-runtime',
                    '/Users/jaycezhang/Documents/taro-webpack5-mobx/node_modules/.pnpm/regenerator-runtime@0.11.1/node_modules/regenerator-runtime/runtime-module.js'
                  ],
                  [
                    '@tarojs/runtime',
                    '/Users/jaycezhang/Documents/taro-webpack5-mobx/node_modules/.pnpm/@tarojs+runtime@3.6.5/node_modules/@tarojs/runtime/dist/runtime.esm.js'
                  ],
                  [
                    '@tarojs/shared',
                    '/Users/jaycezhang/Documents/taro-webpack5-mobx/node_modules/.pnpm/@tarojs+shared@3.6.5/node_modules/@tarojs/shared/dist/shared.esm.js'
                  ],
                  [
                    '@tarojs/components$',
                    '@tarojs/plugin-platform-weapp/dist/components-react'
                  ],
                  [
                    'react-dom$',
                    '@tarojs/react'
                  ]
                ])
              },
              aliasFields: {
                store: new Set([])
              },
              descriptionFiles: {
                store: new Set([])
              },
              extensions: {
                store: new Set([
                  '.js',
                  '.jsx',
                  '.ts',
                  '.tsx',
                  '.mjs',
                  '.vue'
                ])
              },
              mainFields: {
                store: new Set([
                  'browser',
                  'module',
                  'jsnext:main',
                  'main'
                ])
              },
              mainFiles: {
                store: new Set([])
              },
              modules: {
                store: new Set([])
              },
              plugins: {
                store: new Map([
                  [
                    'MultiPlatformPlugin',
                    {
                      store: new Map([
                        [
                          'init',
                          function () { /* omitted long function */ }
                        ],
                        [
                          'plugin',
                          function () { /* omitted long function */ }
                        ],
                        [
                          'args',
                          [
                            'described-resolve',
                            'resolve',
                          undefined
                          ]
                        ]
                      ]),
                      name: 'MultiPlatformPlugin',
                      type: 'resolve.plugin',
                      shorthands: [
                        'init'
                      ],
                      init: (value) => this.set(method, value)
                    }
                  ]
                ])
              },
              shorthands: [
                'cachePredicate',
                'cacheWithContext',
                'concord',
                'enforceExtension',
                'enforceModuleExtension',
                'symlinks',
                'unsafeCache'
              ],
              cachePredicate: (value) => this.set(method, value),
              cacheWithContext: (value) => this.set(method, value),
              concord: (value) => this.set(method, value),
              enforceExtension: (value) => this.set(method, value),
              enforceModuleExtension: (value) => this.set(method, value),
              symlinks: (value) => this.set(method, value),
              unsafeCache: (value) => this.set(method, value)
            },
            resolveLoader: {
              store: new Map([]),
              alias: {
                store: new Map([])
              },
              aliasFields: {
                store: new Set([])
              },
              descriptionFiles: {
                store: new Set([])
              },
              extensions: {
                store: new Set([])
              },
              mainFields: {
                store: new Set([])
              },
              mainFiles: {
                store: new Set([])
              },
              modules: {
                store: new Set([
                  'node_modules'
                ])
              },
              plugins: {
                store: new Map([])
              },
              shorthands: [
                'cachePredicate',
                'cacheWithContext',
                'concord',
                'enforceExtension',
                'enforceModuleExtension',
                'symlinks',
                'unsafeCache'
              ],
              cachePredicate: (value) => this.set(method, value),
              cacheWithContext: (value) => this.set(method, value),
              concord: (value) => this.set(method, value),
              enforceExtension: (value) => this.set(method, value),
              enforceModuleExtension: (value) => this.set(method, value),
              symlinks: (value) => this.set(method, value),
              unsafeCache: (value) => this.set(method, value),
              moduleExtensions: {
                store: new Set([])
              },
              packageMains: {
                store: new Set([])
              }
            },
            shorthands: [
              'amd',
              'bail',
              'cache',
              'context',
              'devtool',
              'externals',
              'loader',
              'mode',
              'name',
              'parallelism',
              'profile',
              'recordsInputPath',
              'recordsPath',
              'recordsOutputPath',
              'stats',
              'target',
              'watch',
              'watchOptions'
            ],
            amd: (value) => this.set(method, value),
            bail: (value) => this.set(method, value),
            cache: (value) => this.set(method, value),
            context: (value) => this.set(method, value),
            devtool: (value) => this.set(method, value),
            externals: (value) => this.set(method, value),
            loader: (value) => this.set(method, value),
            mode: (value) => this.set(method, value),
            name: (value) => this.set(method, value),
            parallelism: (value) => this.set(method, value),
            profile: (value) => this.set(method, value),
            recordsInputPath: (value) => this.set(method, value),
            recordsPath: (value) => this.set(method, value),
            recordsOutputPath: (value) => this.set(method, value),
            stats: (value) => this.set(method, value),
            target: (value) => this.set(method, value),
            watch: (value) => this.set(method, value),
            watchOptions: (value) => this.set(method, value)
          }
        }
      )
    ]
  },
  resolveLoader: {
    modules: [
      'node_modules'
    ]
  },
  module: {
    rules: [
      /* config.module.rule('sass') */
      {
        test: /\.sass$/,
        oneOf: [
          /* config.module.rule('sass').oneOf('0') */
          {
            use: [
              /* config.module.rule('sass').oneOf('0').use('0') */
              {
                loader: '/Users/jaycezhang/Documents/taro-webpack5-mobx/node_modules/.pnpm/mini-css-extract-plugin@2.4.6_webpack@5.78.0/node_modules/mini-css-extract-plugin/dist/loader.js'
              },
              /* config.module.rule('sass').oneOf('0').use('1') */
              {
                loader: '/Users/jaycezhang/Documents/taro-webpack5-mobx/node_modules/.pnpm/css-loader@6.7.3_webpack@5.78.0/node_modules/css-loader/dist/cjs.js',
                options: {
                  importLoaders: 1,
                  modules: false
                }
              },
              /* config.module.rule('sass').oneOf('0').use('2') */
              {
                loader: '/Users/jaycezhang/Documents/taro-webpack5-mobx/node_modules/.pnpm/postcss-loader@7.2.4_@types+node@18.15.11_postcss@8.4.18_ts-node@10.9.1_typescript@4.1.2_webpack@5.78.0/node_modules/postcss-loader/dist/cjs.js',
                options: {
                  postcssOptions: {
                    plugins: [
                      function () { /* omitted long function */ },
                      function () { /* omitted long function */ },
                      {
                        postcssPlugin: 'postcss-pxtransform',
                        prepare: function () { /* omitted long function */ }
                      },
                      {
                        postcssPlugin: 'postcss-url',
                        Once: function () { /* omitted long function */ }
                      }
                    ]
                  }
                }
              },
              /* config.module.rule('sass').oneOf('0').use('3') */
              {
                loader: '/Users/jaycezhang/Documents/taro-webpack5-mobx/node_modules/.pnpm/resolve-url-loader@5.0.0/node_modules/resolve-url-loader/index.js'
              },
              /* config.module.rule('sass').oneOf('0').use('4') */
              {
                loader: '/Users/jaycezhang/Documents/taro-webpack5-mobx/node_modules/.pnpm/sass-loader@12.4.0_sass@1.50.0_webpack@5.78.0/node_modules/sass-loader/dist/cjs.js',
                options: {
                  sourceMap: true,
                  implementation: {
                    load: function () { /* omitted long function */ },
                    compile: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    },
                    compileString: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    },
                    compileAsync: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    },
                    compileStringAsync: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    },
                    Value: function Value0() {
                    },
                    SassBoolean: function () {
                      return _call(f, this, Array.prototype.slice.apply(arguments));
                    },
                    SassArgumentList: function () {
                      return _call(f, this, Array.prototype.slice.apply(arguments));
                    },
                    SassColor: function () {
                      return _call(f, this, Array.prototype.slice.apply(arguments));
                    },
                    SassFunction: function () {
                      return _call(f, this, Array.prototype.slice.apply(arguments));
                    },
                    SassList: function () {
                      return _call(f, this, Array.prototype.slice.apply(arguments));
                    },
                    SassMap: function () {
                      return _call(f, this, Array.prototype.slice.apply(arguments));
                    },
                    SassNumber: function () {
                      return _call(f, this, Array.prototype.slice.apply(arguments));
                    },
                    SassString: function () {
                      return _call(f, this, Array.prototype.slice.apply(arguments));
                    },
                    sassNull: {},
                    sassTrue: {
                      value: true
                    },
                    sassFalse: {
                      value: false
                    },
                    Exception: function () { /* omitted long function */ },
                    Logger: {
                      silent: {
                        warn: function () {
                          return _call(f, Array.prototype.slice.apply(arguments));
                        },
                        debug: function () {
                          return _call(f, Array.prototype.slice.apply(arguments));
                        }
                      }
                    },
                    info: 'dart-sass\t1.50.0\t(Sass Compiler)\t[Dart]\ndart2js\t2.16.2\t(Dart Compiler)\t[Dart]',
                    render: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    },
                    renderSync: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    },
                    types: {
                      Boolean: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      Color: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      List: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      Map: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      Null: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      Number: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      String: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      Error: function Error() { [native code] }
                    },
                    NULL: {},
                    TRUE: {
                      value: true
                    },
                    FALSE: {
                      value: false
                    },
                    cli_pkg_main_0_: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    }
                  },
                  sassOptions: {
                    outputStyle: 'expanded',
                    fiber: false,
                    importer: function () { /* omitted long function */ },
                    indentedSyntax: true
                  }
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('scss') */
      {
        test: /\.scss$/,
        oneOf: [
          /* config.module.rule('scss').oneOf('0') */
          {
            use: [
              /* config.module.rule('scss').oneOf('0').use('0') */
              {
                loader: '/Users/jaycezhang/Documents/taro-webpack5-mobx/node_modules/.pnpm/mini-css-extract-plugin@2.4.6_webpack@5.78.0/node_modules/mini-css-extract-plugin/dist/loader.js'
              },
              /* config.module.rule('scss').oneOf('0').use('1') */
              {
                loader: '/Users/jaycezhang/Documents/taro-webpack5-mobx/node_modules/.pnpm/css-loader@6.7.3_webpack@5.78.0/node_modules/css-loader/dist/cjs.js',
                options: {
                  importLoaders: 1,
                  modules: false
                }
              },
              /* config.module.rule('scss').oneOf('0').use('2') */
              {
                loader: '/Users/jaycezhang/Documents/taro-webpack5-mobx/node_modules/.pnpm/postcss-loader@7.2.4_@types+node@18.15.11_postcss@8.4.18_ts-node@10.9.1_typescript@4.1.2_webpack@5.78.0/node_modules/postcss-loader/dist/cjs.js',
                options: {
                  postcssOptions: {
                    plugins: [
                      function () { /* omitted long function */ },
                      function () { /* omitted long function */ },
                      {
                        postcssPlugin: 'postcss-pxtransform',
                        prepare: function () { /* omitted long function */ }
                      },
                      {
                        postcssPlugin: 'postcss-url',
                        Once: function () { /* omitted long function */ }
                      }
                    ]
                  }
                }
              },
              /* config.module.rule('scss').oneOf('0').use('3') */
              {
                loader: '/Users/jaycezhang/Documents/taro-webpack5-mobx/node_modules/.pnpm/resolve-url-loader@5.0.0/node_modules/resolve-url-loader/index.js'
              },
              /* config.module.rule('scss').oneOf('0').use('4') */
              {
                loader: '/Users/jaycezhang/Documents/taro-webpack5-mobx/node_modules/.pnpm/sass-loader@12.4.0_sass@1.50.0_webpack@5.78.0/node_modules/sass-loader/dist/cjs.js',
                options: {
                  sourceMap: true,
                  implementation: {
                    load: function () { /* omitted long function */ },
                    compile: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    },
                    compileString: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    },
                    compileAsync: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    },
                    compileStringAsync: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    },
                    Value: function Value0() {
                    },
                    SassBoolean: function () {
                      return _call(f, this, Array.prototype.slice.apply(arguments));
                    },
                    SassArgumentList: function () {
                      return _call(f, this, Array.prototype.slice.apply(arguments));
                    },
                    SassColor: function () {
                      return _call(f, this, Array.prototype.slice.apply(arguments));
                    },
                    SassFunction: function () {
                      return _call(f, this, Array.prototype.slice.apply(arguments));
                    },
                    SassList: function () {
                      return _call(f, this, Array.prototype.slice.apply(arguments));
                    },
                    SassMap: function () {
                      return _call(f, this, Array.prototype.slice.apply(arguments));
                    },
                    SassNumber: function () {
                      return _call(f, this, Array.prototype.slice.apply(arguments));
                    },
                    SassString: function () {
                      return _call(f, this, Array.prototype.slice.apply(arguments));
                    },
                    sassNull: {},
                    sassTrue: {
                      value: true
                    },
                    sassFalse: {
                      value: false
                    },
                    Exception: function () { /* omitted long function */ },
                    Logger: {
                      silent: {
                        warn: function () {
                          return _call(f, Array.prototype.slice.apply(arguments));
                        },
                        debug: function () {
                          return _call(f, Array.prototype.slice.apply(arguments));
                        }
                      }
                    },
                    info: 'dart-sass\t1.50.0\t(Sass Compiler)\t[Dart]\ndart2js\t2.16.2\t(Dart Compiler)\t[Dart]',
                    render: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    },
                    renderSync: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    },
                    types: {
                      Boolean: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      Color: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      List: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      Map: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      Null: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      Number: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      String: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      Error: function Error() { [native code] }
                    },
                    NULL: {},
                    TRUE: {
                      value: true
                    },
                    FALSE: {
                      value: false
                    },
                    cli_pkg_main_0_: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    }
                  },
                  sassOptions: {
                    outputStyle: 'expanded',
                    fiber: false,
                    importer: function () { /* omitted long function */ }
                  }
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('less') */
      {
        test: /\.less$/,
        oneOf: [
          /* config.module.rule('less').oneOf('0') */
          {
            use: [
              /* config.module.rule('less').oneOf('0').use('0') */
              {
                loader: '/Users/jaycezhang/Documents/taro-webpack5-mobx/node_modules/.pnpm/mini-css-extract-plugin@2.4.6_webpack@5.78.0/node_modules/mini-css-extract-plugin/dist/loader.js'
              },
              /* config.module.rule('less').oneOf('0').use('1') */
              {
                loader: '/Users/jaycezhang/Documents/taro-webpack5-mobx/node_modules/.pnpm/css-loader@6.7.3_webpack@5.78.0/node_modules/css-loader/dist/cjs.js',
                options: {
                  importLoaders: 1,
                  modules: false
                }
              },
              /* config.module.rule('less').oneOf('0').use('2') */
              {
                loader: '/Users/jaycezhang/Documents/taro-webpack5-mobx/node_modules/.pnpm/postcss-loader@7.2.4_@types+node@18.15.11_postcss@8.4.18_ts-node@10.9.1_typescript@4.1.2_webpack@5.78.0/node_modules/postcss-loader/dist/cjs.js',
                options: {
                  postcssOptions: {
                    plugins: [
                      function () { /* omitted long function */ },
                      function () { /* omitted long function */ },
                      {
                        postcssPlugin: 'postcss-pxtransform',
                        prepare: function () { /* omitted long function */ }
                      },
                      {
                        postcssPlugin: 'postcss-url',
                        Once: function () { /* omitted long function */ }
                      }
                    ]
                  }
                }
              },
              /* config.module.rule('less').oneOf('0').use('3') */
              {
                loader: '/Users/jaycezhang/Documents/taro-webpack5-mobx/node_modules/.pnpm/less-loader@10.2.0_less@4.1.3_webpack@5.78.0/node_modules/less-loader/dist/cjs.js'
              }
            ]
          }
        ]
      },
      /* config.module.rule('stylus') */
      {
        test: /\.styl(us)?$/,
        oneOf: [
          /* config.module.rule('stylus').oneOf('0') */
          {
            use: [
              /* config.module.rule('stylus').oneOf('0').use('0') */
              {
                loader: '/Users/jaycezhang/Documents/taro-webpack5-mobx/node_modules/.pnpm/mini-css-extract-plugin@2.4.6_webpack@5.78.0/node_modules/mini-css-extract-plugin/dist/loader.js'
              },
              /* config.module.rule('stylus').oneOf('0').use('1') */
              {
                loader: '/Users/jaycezhang/Documents/taro-webpack5-mobx/node_modules/.pnpm/css-loader@6.7.3_webpack@5.78.0/node_modules/css-loader/dist/cjs.js',
                options: {
                  importLoaders: 1,
                  modules: false
                }
              },
              /* config.module.rule('stylus').oneOf('0').use('2') */
              {
                loader: '/Users/jaycezhang/Documents/taro-webpack5-mobx/node_modules/.pnpm/postcss-loader@7.2.4_@types+node@18.15.11_postcss@8.4.18_ts-node@10.9.1_typescript@4.1.2_webpack@5.78.0/node_modules/postcss-loader/dist/cjs.js',
                options: {
                  postcssOptions: {
                    plugins: [
                      function () { /* omitted long function */ },
                      function () { /* omitted long function */ },
                      {
                        postcssPlugin: 'postcss-pxtransform',
                        prepare: function () { /* omitted long function */ }
                      },
                      {
                        postcssPlugin: 'postcss-url',
                        Once: function () { /* omitted long function */ }
                      }
                    ]
                  }
                }
              },
              /* config.module.rule('stylus').oneOf('0').use('3') */
              {
                loader: '/Users/jaycezhang/Documents/taro-webpack5-mobx/node_modules/.pnpm/stylus-loader@6.2.0_stylus@0.55.0_webpack@5.78.0/node_modules/stylus-loader/dist/cjs.js'
              }
            ]
          }
        ]
      },
      /* config.module.rule('normalCss') */
      {
        test: /\.(css|wxss|acss|ttss)(\?.*)?$/,
        oneOf: [
          /* config.module.rule('normalCss').oneOf('0') */
          {
            use: [
              /* config.module.rule('normalCss').oneOf('0').use('0') */
              {
                loader: '/Users/jaycezhang/Documents/taro-webpack5-mobx/node_modules/.pnpm/mini-css-extract-plugin@2.4.6_webpack@5.78.0/node_modules/mini-css-extract-plugin/dist/loader.js'
              },
              /* config.module.rule('normalCss').oneOf('0').use('1') */
              {
                loader: '/Users/jaycezhang/Documents/taro-webpack5-mobx/node_modules/.pnpm/css-loader@6.7.3_webpack@5.78.0/node_modules/css-loader/dist/cjs.js',
                options: {
                  importLoaders: 1,
                  modules: false
                }
              },
              /* config.module.rule('normalCss').oneOf('0').use('2') */
              {
                loader: '/Users/jaycezhang/Documents/taro-webpack5-mobx/node_modules/.pnpm/postcss-loader@7.2.4_@types+node@18.15.11_postcss@8.4.18_ts-node@10.9.1_typescript@4.1.2_webpack@5.78.0/node_modules/postcss-loader/dist/cjs.js',
                options: {
                  postcssOptions: {
                    plugins: [
                      function () { /* omitted long function */ },
                      function () { /* omitted long function */ },
                      {
                        postcssPlugin: 'postcss-pxtransform',
                        prepare: function () { /* omitted long function */ }
                      },
                      {
                        postcssPlugin: 'postcss-url',
                        Once: function () { /* omitted long function */ }
                      }
                    ]
                  }
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('script') */
      {
        test: /\.[tj]sx?$/i,
        exclude: [
          function () { /* omitted long function */ }
        ],
        use: [
          /* config.module.rule('script').use('babelLoader') */
          {
            loader: '/Users/jaycezhang/Documents/taro-webpack5-mobx/node_modules/.pnpm/babel-loader@8.2.1_@babel+core@7.8.0_webpack@5.78.0/node_modules/babel-loader/lib/index.js',
            options: {
              compact: false
            }
          }
        ]
      },
      /* config.module.rule('template') */
      {
        test: /\.(wxml|axml|ttml|qml|swan|jxml)(\?.*)?$/,
        type: 'asset/resource',
        generator: {
          filename: function () { /* omitted long function */ }
        },
        use: [
          /* config.module.rule('template').use('0') */
          {
            loader: '/Users/jaycezhang/Documents/taro-webpack5-mobx/node_modules/.pnpm/@tarojs+webpack5-runner@3.6.5_@babel+core@7.8.0_@swc+core@1.3.42_@types+node@18.15.11_@types+_355iqh62ge3djnn5v3qtauskn4/node_modules/@tarojs/webpack5-runner/dist/loaders/miniTemplateLoader.js',
            options: {
              buildAdapter: 'weapp'
            }
          }
        ]
      },
      /* config.module.rule('xscript') */
      {
        test: /\.wxs$/,
        type: 'asset/resource',
        generator: {
          filename: function () { /* omitted long function */ }
        },
        use: [
          /* config.module.rule('xscript').use('0') */
          {
            loader: '/Users/jaycezhang/Documents/taro-webpack5-mobx/node_modules/.pnpm/@tarojs+webpack5-runner@3.6.5_@babel+core@7.8.0_@swc+core@1.3.42_@types+node@18.15.11_@types+_355iqh62ge3djnn5v3qtauskn4/node_modules/@tarojs/webpack5-runner/dist/loaders/miniXScriptLoader.js'
          }
        ]
      },
      /* config.module.rule('media') */
      {
        test: /\.(mp4|webm|ogg|mp3|m4a|wav|flac|aac)(\?.*)?$/,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 1024
          }
        },
        generator: {
          outputPath: undefined,
          publicPath: undefined,
          filename: function () { /* omitted long function */ }
        }
      },
      /* config.module.rule('font') */
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 1024
          }
        },
        generator: {
          outputPath: undefined,
          publicPath: undefined,
          filename: function () { /* omitted long function */ }
        }
      },
      /* config.module.rule('image') */
      {
        test: /\.(png|jpe?g|gif|bpm|svg|webp)(\?.*)?$/,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 1024
          }
        },
        generator: {
          outputPath: undefined,
          publicPath: undefined,
          filename: function () { /* omitted long function */ }
        }
      }
    ]
  },
  optimization: {
    sideEffects: true,
    minimize: true,
    usedExports: true,
    runtimeChunk: {
      name: 'runtime'
    },
    splitChunks: {
      chunks: 'all',
      maxInitialRequests: Infinity,
      minSize: 0,
      cacheGroups: {
        'default': false,
        defaultVendors: false,
        common: {
          name: 'common',
          minChunks: 2,
          priority: 1
        },
        vendors: {
          name: 'vendors',
          minChunks: 2,
          test: module => /[\\/]node_modules[\\/]/.test(module.resource),
          priority: 10
        },
        taro: {
          name: 'taro',
          test: module => /@tarojs[\\/][a-z]+/.test(module.context),
          priority: 100
        }
      }
    },
    minimizer: [
      /* config.optimization.minimizer('terserPlugin') */
      new TerserPlugin(
        {
          parallel: true,
          terserOptions: {
            parse: {
              ecma: 8
            },
            compress: {
              ecma: 5,
              warnings: false,
              arrows: false,
              collapse_vars: false,
              comparisons: false,
              computed_props: false,
              hoist_funs: false,
              hoist_props: false,
              hoist_vars: false,
              inline: false,
              loops: false,
              negate_iife: false,
              properties: false,
              reduce_funcs: false,
              reduce_vars: false,
              switches: false,
              toplevel: false,
              typeofs: false,
              booleans: true,
              if_return: true,
              sequences: true,
              unused: true,
              conditionals: true,
              dead_code: true,
              evaluate: true
            },
            output: {
              ecma: 5,
              comments: false,
              ascii_only: true
            }
          }
        }
      ),
      /* config.optimization.minimizer('cssoWebpackPlugin') */
      new CssMinimizerPlugin(
        {
          test: /\.(css|scss|sass|less|styl|stylus|wxss|acss|ttss|jxss|qss)(\?.*)?$/,
          parallel: true,
          minify: function () { /* omitted long function */ },
          minimizerOptions: {
            preset: [
              'default',
              {
                mergeRules: false,
                mergeIdents: false,
                reduceIdents: false,
                discardUnused: false,
                minifySelectors: false
              }
            ]
          }
        }
      )
    ]
  },
  plugins: [
    /* config.plugin('webpackbar') */
    new TaroWebpackBarPlugin(
      {
        reporters: [
          'basic',
          'fancy',
          {
            done: function () { /* omitted long function */ }
          }
        ],
        basic: false,
        fancy: true
      }
    ),
    /* config.plugin('providerPlugin') */
    new ProvidePlugin(
      {
        window: [
          '@tarojs/runtime',
          'window'
        ],
        document: [
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
        ]
      }
    ),
    /* config.plugin('definePlugin') */
    new DefinePlugin(
      {
        'process.env.NODE_ENV': '"production"',
        'process.env.FRAMEWORK': '"react"',
        'process.env.TARO_ENV': '"weapp"',
        'process.env.TARO_PLATFORM': '"mini"',
        ENABLE_INNER_HTML: true,
        ENABLE_ADJACENT_HTML: false,
        ENABLE_SIZE_APIS: false,
        ENABLE_TEMPLATE_CONTENT: false,
        ENABLE_CLONE_NODE: false,
        ENABLE_CONTAINS: false,
        ENABLE_MUTATION_OBSERVER: false,
        __TARO_FRAMEWORK__: '"react"'
      }
    ),
    /* config.plugin('miniCssExtractPlugin') */
    new MiniCssExtractPlugin(
      {
        filename: '[name].wxss',
        chunkFilename: '[name].wxss'
      }
    ),
    /* config.plugin('miniSplitChunksPlugin') */
    new MiniSplitChunksPlugin(
      {
        exclude: undefined,
        fileType: {
          templ: '.wxml',
          style: '.wxss',
          config: '.json',
          script: '.js',
          xs: '.wxs'
        }
      }
    ),
    /* config.plugin('miniPlugin') */
    new TaroMiniPlugin(
      {
        sourceDir: '/Users/jaycezhang/Documents/taro-webpack5-mobx/src',
        outputDir: '/Users/jaycezhang/Documents/taro-webpack5-mobx/dist',
        runtimePath: '@tarojs/plugin-platform-weapp/dist/runtime',
        nodeModulesPath: '/Users/jaycezhang/Documents/taro-webpack5-mobx/node_modules',
        framework: 'react',
        frameworkExts: [
          '.js',
          '.jsx',
          '.ts',
          '.tsx'
        ],
        fileType: {
          templ: '.wxml',
          style: '.wxss',
          config: '.json',
          script: '.js',
          xs: '.wxs'
        },
        template: {
          exportExpr: 'module.exports =',
          thirdPartyPatcher: {},
          supportXS: true,
          Adapter: {
            'if': 'wx:if',
            'else': 'wx:else',
            elseif: 'wx:elif',
            'for': 'wx:for',
            forItem: 'wx:for-item',
            forIndex: 'wx:for-index',
            key: 'wx:key',
            xs: 'wxs',
            type: 'weapp'
          },
          internalComponents: {
            View: {
              'hover-class': '\'none\'',
              'hover-stop-propagation': '!1',
              'hover-start-time': '50',
              'hover-stay-time': '400',
              bindTouchStart: '',
              bindTouchMove: '',
              bindTouchEnd: '',
              bindTouchCancel: '',
              bindLongTap: '',
              animation: '',
              bindAnimationStart: '',
              bindAnimationIteration: '',
              bindAnimationEnd: '',
              bindTransitionEnd: ''
            },
            Icon: {
              type: '',
              size: '23',
              color: ''
            },
            Progress: {
              percent: '',
              'stroke-width': '6',
              color: '\'#09BB07\'',
              activeColor: '\'#09BB07\'',
              backgroundColor: '\'#EBEBEB\'',
              active: '!1',
              'active-mode': '\'backwards\'',
              'show-info': '!1',
              'border-radius': '0',
              'font-size': '16',
              duration: '30',
              bindActiveEnd: ''
            },
            RichText: {
              nodes: '[]',
              space: '',
              'user-select': 'false'
            },
            Text: {
              selectable: '!1',
              space: '',
              decode: '!1',
              'user-select': 'false'
            },
            Button: {
              size: '\'default\'',
              type: '',
              plain: '!1',
              disabled: '',
              loading: '!1',
              'form-type': '',
              'open-type': '',
              'hover-class': '\'button-hover\'',
              'hover-stop-propagation': '!1',
              'hover-start-time': '20',
              'hover-stay-time': '70',
              name: '',
              bindTouchStart: '',
              bindTouchMove: '',
              bindTouchEnd: '',
              bindTouchCancel: '',
              bindLongTap: '',
              lang: 'en',
              'session-from': '',
              'send-message-title': '',
              'send-message-path': '',
              'send-message-img': '',
              'app-parameter': '',
              'show-message-card': 'false',
              'business-id': '',
              bindGetUserInfo: '',
              bindContact: '',
              bindGetPhoneNumber: '',
              bindChooseAvatar: '',
              bindError: '',
              bindOpenSetting: '',
              bindLaunchApp: ''
            },
            Checkbox: {
              value: '',
              disabled: '',
              checked: '!1',
              color: '\'#09BB07\'',
              name: ''
            },
            CheckboxGroup: {
              bindChange: '',
              name: ''
            },
            Form: {
              'report-submit': '!1',
              bindSubmit: '',
              bindReset: '',
              name: '',
              'report-submit-timeout': '0'
            },
            Input: {
              value: '',
              type: '\'\'',
              password: '!1',
              placeholder: '',
              'placeholder-style': '',
              'placeholder-class': '\'input-placeholder\'',
              disabled: '',
              maxlength: '140',
              'cursor-spacing': '0',
              focus: '!1',
              'confirm-type': '\'done\'',
              'confirm-hold': '!1',
              cursor: 'i.value.length',
              'selection-start': '-1',
              'selection-end': '-1',
              bindInput: '',
              bindFocus: '',
              bindBlur: '',
              bindConfirm: '',
              name: '',
              'always-embed': 'false',
              'adjust-position': 'true',
              'hold-keyboard': 'false',
              'safe-password-cert-path': '',
              'safe-password-length': '',
              'safe-password-time-stamp': '',
              'safe-password-nonce': '',
              'safe-password-salt': '',
              'safe-password-custom-hash': '',
              'auto-fill': '',
              bindKeyboardHeightChange: '',
              bindNicknameReview: ''
            },
            Label: {
              'for': '',
              name: ''
            },
            Picker: {
              mode: '\'selector\'',
              disabled: '',
              range: '',
              'range-key': '',
              value: '',
              start: '',
              end: '',
              fields: '\'day\'',
              'custom-item': '',
              name: '',
              bindCancel: '',
              bindChange: '',
              bindColumnChange: '',
              'header-text': '',
              level: 'region'
            },
            PickerView: {
              value: '',
              'indicator-style': '',
              'indicator-class': '',
              'mask-style': '',
              'mask-class': '',
              bindChange: '',
              name: '',
              'immediate-change': 'false',
              bindPickStart: '',
              bindPickEnd: ''
            },
            PickerViewColumn: {
              name: ''
            },
            Radio: {
              value: '',
              checked: '!1',
              disabled: '',
              color: '\'#09BB07\'',
              name: ''
            },
            RadioGroup: {
              bindChange: '',
              name: ''
            },
            Slider: {
              min: '0',
              max: '100',
              step: '1',
              disabled: '',
              value: '0',
              activeColor: '\'#1aad19\'',
              backgroundColor: '\'#e9e9e9\'',
              'block-size': '28',
              'block-color': '\'#ffffff\'',
              'show-value': '!1',
              bindChange: '',
              bindChanging: '',
              name: '',
              color: '\'#e9e9e9\'',
              'selected-color': '\'#1aad19\''
            },
            Switch: {
              checked: '!1',
              disabled: '',
              type: '\'switch\'',
              color: '\'#04BE02\'',
              bindChange: '',
              name: ''
            },
            CoverImage: {
              src: '',
              bindLoad: 'eh',
              bindError: 'eh'
            },
            Textarea: {
              value: '',
              placeholder: '',
              'placeholder-style': '',
              'placeholder-class': '\'textarea-placeholder\'',
              disabled: '',
              maxlength: '140',
              'auto-focus': '!1',
              focus: '!1',
              'auto-height': '!1',
              fixed: '!1',
              'cursor-spacing': '0',
              cursor: '-1',
              'selection-start': '-1',
              'selection-end': '-1',
              bindFocus: '',
              bindBlur: '',
              bindLineChange: '',
              bindInput: '',
              bindConfirm: '',
              name: '',
              'show-confirm-bar': 'true',
              'adjust-position': 'true',
              'hold-keyboard': 'false',
              'disable-default-padding': 'false',
              'confirm-type': '\'return\'',
              'confirm-hold': 'false',
              bindKeyboardHeightChange: ''
            },
            CoverView: {
              'scroll-top': '!1',
              bindTouchStart: '',
              bindTouchMove: '',
              bindTouchEnd: '',
              bindTouchCancel: '',
              bindLongTap: '',
              'marker-id': '',
              slot: ''
            },
            MovableArea: {
              'scale-area': '!1'
            },
            MovableView: {
              direction: 'none',
              inertia: '!1',
              'out-of-bounds': '!1',
              x: '',
              y: '',
              damping: '20',
              friction: '2',
              disabled: '',
              scale: '!1',
              'scale-min': '0.5',
              'scale-max': '10',
              'scale-value': '1',
              bindChange: '',
              bindScale: '',
              bindHTouchMove: '',
              bindVTouchMove: '',
              width: '\'10px\'',
              height: '\'10px\'',
              bindTouchStart: '',
              bindTouchMove: '',
              bindTouchEnd: '',
              bindTouchCancel: '',
              bindLongTap: '',
              animation: '',
              bindAnimationStart: '',
              bindAnimationIteration: '',
              bindAnimationEnd: '',
              bindTransitionEnd: ''
            },
            ScrollView: {
              'scroll-x': '!1',
              'scroll-y': '!1',
              'upper-threshold': '50',
              'lower-threshold': '50',
              'scroll-top': '',
              'scroll-left': '',
              'scroll-into-view': '',
              'scroll-with-animation': '!1',
              'enable-back-to-top': '!1',
              bindScrollToUpper: '',
              bindScrollToLower: '',
              bindScroll: '',
              bindTouchStart: '',
              bindTouchMove: '',
              bindTouchEnd: '',
              bindTouchCancel: '',
              bindLongTap: '',
              animation: '',
              bindAnimationStart: '',
              bindAnimationIteration: '',
              bindAnimationEnd: '',
              bindTransitionEnd: '',
              type: '\'list\'',
              'event-passive': 'false',
              'enable-flex': 'false',
              'scroll-anchoring': 'false',
              'refresher-enabled': 'false',
              'refresher-threshold': '45',
              'refresher-default-style': '\'black\'',
              'refresher-background': '\'#FFF\'',
              'refresher-triggered': 'false',
              enhanced: 'false',
              bounces: 'true',
              'show-scrollbar': 'true',
              'paging-enabled': 'false',
              'fast-deceleration': 'false',
              reverse: 'false',
              'cache-extent': '0',
              'scroll-into-view-within-extent': 'false',
              'scroll-into-view-alignment': '\'start\'',
              bindDragStart: '',
              bindDragging: '',
              bindDragEnd: '',
              bindRefresherPulling: '',
              bindRefresherRefresh: '',
              bindRefresherRestore: '',
              bindRefresherAbort: '',
              bindScrollStart: '',
              bindScrollEnd: '',
              bindRefresherWillRefresh: ''
            },
            Swiper: {
              'indicator-dots': '!1',
              'indicator-color': '\'rgba(0, 0, 0, .3)\'',
              'indicator-active-color': '\'#000000\'',
              autoplay: '!1',
              current: '0',
              interval: '5000',
              duration: '500',
              circular: '!1',
              vertical: '!1',
              'previous-margin': '\'0px\'',
              'next-margin': '\'0px\'',
              'display-multiple-items': '1',
              bindChange: '',
              bindTransition: '',
              bindAnimationFinish: '',
              bindTouchStart: '',
              bindTouchMove: '',
              bindTouchEnd: '',
              bindTouchCancel: '',
              bindLongTap: '',
              'snap-to-edge': 'false',
              'easing-function': '\'default\''
            },
            SwiperItem: {
              'item-id': '',
              'skip-hidden-item-layout': 'false'
            },
            Navigator: {
              url: '',
              'open-type': '\'navigate\'',
              delta: '1',
              'hover-class': '\'navigator-hover\'',
              'hover-stop-propagation': '!1',
              'hover-start-time': '50',
              'hover-stay-time': '600',
              bindSuccess: '',
              bindFail: '',
              bindComplete: '',
              target: '\'self\'',
              'app-id': '',
              path: '',
              'extra-data': '',
              version: '\'version\''
            },
            Audio: {
              id: '',
              src: '',
              loop: '!1',
              controls: '!1',
              poster: '',
              name: '',
              author: '',
              bindError: '',
              bindPlay: '',
              bindPause: '',
              bindTimeUpdate: '',
              bindEnded: ''
            },
            Camera: {
              'device-position': '\'back\'',
              flash: '\'auto\'',
              bindStop: '',
              bindError: '',
              mode: '\'normal\'',
              resolution: '\'medium\'',
              'frame-size': '\'medium\'',
              bindInitDone: '',
              bindScanCode: ''
            },
            Image: {
              src: '',
              mode: '\'scaleToFill\'',
              'lazy-load': '!1',
              bindError: '',
              bindLoad: '',
              bindTouchStart: '',
              bindTouchMove: '',
              bindTouchEnd: '',
              bindTouchCancel: '',
              bindLongTap: '',
              webp: 'false',
              'show-menu-by-longpress': 'false'
            },
            LivePlayer: {
              src: '',
              autoplay: '!1',
              muted: '!1',
              orientation: '\'vertical\'',
              'object-fit': '\'contain\'',
              'background-mute': '!1',
              'min-cache': '1',
              'max-cache': '3',
              bindStateChange: '',
              bindFullScreenChange: '',
              bindNetStatus: '',
              animation: '',
              bindAnimationStart: '',
              bindAnimationIteration: '',
              bindAnimationEnd: '',
              bindTransitionEnd: '',
              mode: '\'live\'',
              'sound-mode': '\'speaker\'',
              'auto-pause-if-navigate': 'true',
              'auto-pause-if-open-native': 'true',
              'picture-in-picture-mode': '[]',
              bindstatechange: '',
              bindfullscreenchange: '',
              bindnetstatus: '',
              bindAudioVolumeNotify: '',
              bindEnterPictureInPicture: '',
              bindLeavePictureInPicture: ''
            },
            Video: {
              src: '',
              duration: '',
              controls: '!0',
              'danmu-list': '',
              'danmu-btn': '',
              'enable-danmu': '',
              autoplay: '!1',
              loop: '!1',
              muted: '!1',
              'initial-time': '0',
              'page-gesture': '!1',
              direction: '',
              'show-progress': '!0',
              'show-fullscreen-btn': '!0',
              'show-play-btn': '!0',
              'show-center-play-btn': '!0',
              'enable-progress-gesture': '!0',
              'object-fit': '\'contain\'',
              poster: '',
              'show-mute-btn': '!1',
              bindPlay: '',
              bindPause: '',
              bindEnded: '',
              bindTimeUpdate: '',
              bindFullScreenChange: '',
              bindWaiting: '',
              bindError: '',
              animation: '',
              bindAnimationStart: '',
              bindAnimationIteration: '',
              bindAnimationEnd: '',
              bindTransitionEnd: '',
              title: '',
              'play-btn-position': '\'bottom\'',
              'enable-play-gesture': 'false',
              'auto-pause-if-navigate': 'true',
              'auto-pause-if-open-native': 'true',
              'vslide-gesture': 'false',
              'vslide-gesture-in-fullscreen': 'true',
              'ad-unit-id': '',
              'poster-for-crawler': '',
              'show-casting-button': 'false',
              'picture-in-picture-mode': '[]',
              'enable-auto-rotation': 'false',
              'show-screen-lock-button': 'false',
              'show-snapshot-button': 'false',
              'show-background-playback-button': 'false',
              'background-poster': '',
              bindProgress: '',
              bindLoadedMetadata: '',
              bindControlsToggle: '',
              bindEnterPictureInPicture: '',
              bindLeavePictureInPicture: '',
              bindSeekComplete: '',
              bindAdLoad: '',
              bindAdError: '',
              bindAdClose: '',
              bindAdPlay: ''
            },
            Canvas: {
              'canvas-id': '',
              'disable-scroll': '!1',
              bindError: '',
              bindTouchStart: '',
              bindTouchMove: '',
              bindTouchEnd: '',
              bindTouchCancel: '',
              bindLongTap: '',
              type: ''
            },
            Ad: {
              'unit-id': '',
              'ad-intervals': '',
              bindLoad: '',
              bindError: '',
              bindClose: '',
              'ad-type': '\'banner\'',
              'ad-theme': '\'white\''
            },
            WebView: {
              src: '',
              bindMessage: '',
              bindLoad: '',
              bindError: ''
            },
            Block: {},
            Map: {
              longitude: '',
              latitude: '',
              scale: '16',
              markers: '[]',
              covers: '',
              polyline: '[]',
              circles: '[]',
              controls: '[]',
              'include-points': '[]',
              'show-location': '',
              'layer-style': '1',
              bindMarkerTap: '',
              bindControlTap: '',
              bindCalloutTap: '',
              bindUpdated: '',
              bindTouchStart: '',
              bindTouchMove: '',
              bindTouchEnd: '',
              bindTouchCancel: '',
              bindLongTap: '',
              polygons: '[]',
              subkey: '',
              rotate: '0',
              skew: '0',
              'max-scale': '20',
              'min-scale': '3',
              'enable-3D': 'false',
              'show-compass': 'false',
              'show-scale': 'false',
              'enable-overlooking': 'false',
              'enable-zoom': 'true',
              'enable-scroll': 'true',
              'enable-rotate': 'false',
              'enable-satellite': 'false',
              'enable-traffic': 'false',
              'enable-poi': 'true',
              'enable-building': 'true',
              setting: '[]',
              bindLabelTap: '',
              bindRegionChange: '',
              bindPoiTap: '',
              bindAnchorPointTap: ''
            },
            Slot: {
              name: ''
            },
            SlotView: {
              name: ''
            },
            NativeSlot: {
              name: ''
            },
            StickySection: {
              'push-pinned-header': 'true'
            },
            GridView: {
              type: '\'aligned\'',
              'cross-axis-count': '2',
              'max-cross-axis-extent': '0',
              'main-axis-gap': '0',
              'cross-axis-gap': '0'
            },
            ListView: {},
            StickyHeader: {},
            Editor: {
              'read-only': 'false',
              placeholder: '',
              'show-img-size': 'false',
              'show-img-toolbar': 'false',
              'show-img-resize': 'false',
              focus: 'false',
              bindReady: '',
              bindFocus: '',
              bindBlur: '',
              bindInput: '',
              bindStatusChange: '',
              name: ''
            },
            MatchMedia: {
              'min-width': '',
              'max-width': '',
              width: '',
              'min-height': '',
              'max-height': '',
              height: '',
              orientation: ''
            },
            FunctionalPageNavigator: {
              version: '\'release\'',
              name: '',
              args: '',
              bindSuccess: '',
              bindFail: '',
              bindCancel: ''
            },
            LivePusher: {
              url: '',
              mode: '\'RTC\'',
              autopush: 'false',
              muted: 'false',
              'enable-camera': 'true',
              'auto-focus': 'true',
              orientation: '\'vertical\'',
              beauty: '0',
              whiteness: '0',
              aspect: '\'9:16\'',
              'min-bitrate': '200',
              'max-bitrate': '1000',
              'audio-quality': '\'high\'',
              'waiting-image': '',
              'waiting-image-hash': '',
              zoom: 'false',
              'device-position': '\'front\'',
              'background-mute': 'false',
              mirror: 'false',
              'remote-mirror': 'false',
              'local-mirror': 'false',
              'audio-reverb-type': '0',
              'enable-mic': 'true',
              'enable-agc': 'false',
              'enable-ans': 'false',
              'audio-volume-type': '\'voicecall\'',
              'video-width': '360',
              'video-height': '640',
              'beauty-style': '\'smooth\'',
              filter: '\'standard\'',
              animation: '',
              bindStateChange: '',
              bindNetStatus: '',
              bindBgmStart: '',
              bindBgmProgress: '',
              bindBgmComplete: '',
              bindAudioVolumeNotify: ''
            },
            OfficialAccount: {
              bindLoad: '',
              bindError: ''
            },
            OpenData: {
              type: '',
              'open-gid': '',
              lang: '\'en\'',
              'default-text': '',
              'default-avatar': '',
              bindError: ''
            },
            NavigationBar: {
              title: '',
              loading: 'false',
              'front-color': '',
              'background-color': '',
              'color-animation-duration': '0',
              'color-animation-timing-func': '\'linear\''
            },
            PageMeta: {
              'background-text-style': '',
              'background-color': '',
              'background-color-top': '',
              'background-color-bottom': '',
              'scroll-top': '\'\'',
              'scroll-duration': '300',
              'page-style': '\'\'',
              'root-font-size': '\'\'',
              bindResize: '',
              bindScroll: '',
              bindScrollDone: ''
            },
            VoipRoom: {
              openid: '',
              mode: '\'camera\'',
              'device-position': '\'front\'',
              bindError: ''
            },
            AdCustom: {
              'unit-id': '',
              'ad-intervals': '',
              bindLoad: '',
              bindError: ''
            },
            PageContainer: {
              show: 'false',
              duration: '300',
              'z-index': '100',
              overlay: 'true',
              position: '\'bottom\'',
              round: 'false',
              'close-on-slide-down': 'false',
              'overlay-style': '',
              'custom-style': '',
              bindBeforeEnter: '',
              bindEnter: '',
              bindAfterEnter: '',
              bindBeforeLeave: '',
              bindLeave: '',
              bindAfterLeave: '',
              bindClickOverlay: ''
            },
            ShareElement: {
              mapkey: '',
              transform: 'false',
              duration: '300',
              'easing-function': '\'ease-out\''
            },
            KeyboardAccessory: {},
            RootPortal: {},
            ChannelLive: {
              feedId: '',
              finderUserName: ''
            },
            ChannelVideo: {
              feedId: '',
              finderUserName: '',
              autoplay: 'false',
              loop: 'false',
              muted: 'false',
              objectFit: '\'contain\'',
              bindError: ''
            }
          },
          focusComponents: new Set([
            'input',
            'textarea',
            'editor'
          ]),
          voidElements: new Set([
            'progress',
            'icon',
            'rich-text',
            'input',
            'textarea',
            'slider',
            'switch',
            'audio',
            'ad',
            'official-account',
            'open-data',
            'navigation-bar',
            'voip-room'
          ]),
          nestElements: new Map([
            [
              'view',
              -1
            ],
            [
              'catch-view',
              -1
            ],
            [
              'cover-view',
              -1
            ],
            [
              'static-view',
              -1
            ],
            [
              'pure-view',
              -1
            ],
            [
              'block',
              -1
            ],
            [
              'text',
              -1
            ],
            [
              'static-text',
              6
            ],
            [
              'slot',
              8
            ],
            [
              'slot-view',
              8
            ],
            [
              'label',
              6
            ],
            [
              'form',
              4
            ],
            [
              'scroll-view',
              4
            ],
            [
              'swiper',
              4
            ],
            [
              'swiper-item',
              4
            ]
          ]),
          buildPageTemplate: function () { /* omitted long function */ },
          buildBaseComponentTemplate: function () { /* omitted long function */ },
          buildCustomComponentTemplate: function () { /* omitted long function */ },
          buildXScript: function () { /* omitted long function */ },
          isSupportRecursive: false,
          _baseLevel: 16,
          buildTemplate: function () { /* omitted long function */ },
          modifyTemplateResult: function () { /* omitted long function */ },
          pluginOptions: {}
        },
        commonChunks: [
          'runtime',
          'vendors',
          'taro',
          'common'
        ],
        designWidth: 750,
        deviceRatio: {
          '640': 1.17,
          '750': 1,
          '828': 0.905
        },
        baseLevel: 16,
        minifyXML: {},
        alias: {},
        constantsReplaceList: {
          'process.env.NODE_ENV': '"production"',
          'process.env.FRAMEWORK': '"react"',
          'process.env.TARO_ENV': '"weapp"',
          'process.env.TARO_PLATFORM': '"mini"',
          ENABLE_INNER_HTML: true,
          ENABLE_ADJACENT_HTML: false,
          ENABLE_SIZE_APIS: false,
          ENABLE_TEMPLATE_CONTENT: false,
          ENABLE_CLONE_NODE: false,
          ENABLE_CONTAINS: false,
          ENABLE_MUTATION_OBSERVER: false,
          __TARO_FRAMEWORK__: '"react"'
        },
        hot: false,
        prerender: undefined,
        blended: undefined,
        isBuildNativeComp: false,
        isBuildPlugin: false,
        pluginConfig: undefined,
        pluginMainEntry: undefined,
        addChunkPages: undefined,
        modifyMiniConfigs: undefined,
        modifyBuildAssets: undefined,
        onCompilerMake: undefined,
        onParseCreateElement: undefined,
        logger: undefined,
        loaderMeta: {
          importFrameworkStatement: '\nimport * as React from \'react\'\nimport ReactDOM from \'react-dom\'\n',
          mockAppStatement: '\nclass App extends React.Component {\n  render () {\n    return this.props.children\n  }\n}\n',
          frameworkArgs: 'React, ReactDOM, config',
          creator: 'createReactApp',
          creatorLocation: '@tarojs/plugin-framework-react/dist/runtime',
          importFrameworkName: 'React',
          extraImportForWeb: '',
          execBeforeCreateWebApp: '',
          modifyConfig(config, source) {
              Object.assign(config, addConfig(source));
          }
        }
      }
    )
  ],
  performance: {
    maxEntrypointSize: 2000000
  },
  entry: {
    app: [
      '/Users/jaycezhang/Documents/taro-webpack5-mobx/src/app.tsx'
    ]
  }
}