cross-env: 
    由于不同的平台配置环境变量的方式不一样，引入该插件为不同平台统一配置环境变量。
    在package.json->script:
    "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "cross-env NODE_ENV=production webpack --config webpack.config.js",
    "dev": "cross-env NODE_ENV=development webpack-dev-server --config webpack.config.js"
  }
    