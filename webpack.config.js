var path = require('path');
var nodeExternals = require('webpack-node-externals');
var webpack = require('webpack');
var _ = require('lodash');
var UglifyJsPlugin = require('uglifyjs-webpack-plugin');

// loaders配置
var getLoaders = function(env) {
  return [
    // ES6 -> ES5
    // {
    //   test: /\.es6\.js$/,
    //   exclude: /node_modules/,
    //   // include: path.resolve(__dirname, "./lib"),
    //   use: {
    //     loader: 'babel-loader',
    //     query: {
    //       presets: [
    //         ['env']
    //       ]
    //     }
    //   }
    // },

    // {
    //   test: /\.(proto)$/,
    //   use: [
    //     {
    //       loader: 'file-loader',
    //       options: {
    //         outputPath: '/'
    //       }
    //     }
    //   ]
    // }
    /**
     * 对于一些动态导入的代码，即： `require(m)` 等，webpack 会提示 `Can`t find the module '.'` 错误
     * 这是因为真实的 require() 代码，webpack后，会被 _webpack_require_ 代替，而如果 _no_webpack_require_ 则会
     * 保留 require() 关键字
     * 
     * 所以，这里是一种 hack 处理方式，先将需要保留的 require 替换为 __non_webpack_require__，编译后自然就得到了 require 了
     * 
     * 参考：https://github.com/webpack/webpack/issues/4175
     */
    {
      // regex for the files that are problematic
      test: /\.js$/,
      loader: 'string-replace-loader',
      options: {
        // match a require function call where the argument isn't a string
        // also capture the first character of the args so we can ignore it later
        search: 'require[(]([^\'"])',
        // replace the 'require(' with a '__non_webpack_require__(', meaning it will require the files at runtime
        // $1 grabs the first capture group from the regex, the one character we matched and don't want to lose
        replace: '__non_webpack_require__($1',
        flags: 'g'
      }
    }
  ];
};

// 插件配置
var getPlugins = function(env) {
  var plugins;

  var defaultPlugins = [];

  if (env === 'production') {
      // 线上模式的配置，去除依赖中重复的插件/压缩js/排除报错的插件
      plugins = _.union(defaultPlugins, [
        new webpack.ProvidePlugin({
          // 'global._require_native_': "_require_native_" 已经不需要了
        }),
        new webpack.optimize.DedupePlugin(),
        new UglifyJsPlugin()

          // Todo: webpack自带的UglifyJsPlugin不起作用？
          // new webpack.optimize.UglifyJsPlugin()
      ]);
  } else {
      plugins = _.union(defaultPlugins, [
        // new webpack.ProvidePlugin({'global._require_native_': "_require_native_"})
      ]);
  }

  return plugins;
};

module.exports = function (fullpath) {
  var env = process.env.NODE_ENV

  return {
    target: 'node',

    entry: {
      app: './app.js'
    },
    output: {
      path: fullpath,
      filename: '[name].js'
    },
    context: path.resolve(__dirname, './'),
    resolve: {
      mainFields: ['main'], // 该字段才是 cjs
    },

    externals: [
      {
        _require_native_: 'require'
      },
      nodeExternals()
    ],

    plugins: getPlugins(env),

    module: {
      rules: getLoaders(env)
    },

    node: {
      __dirname: false,
      __filename: false
    }
  }
}
