# React + Redux + webpack4.0 + Router

## 项目前景

需要搭建一个管理后台，有过`React Native`基础，故想来折腾一下这一套`大保健`，没想到需要注意的事情还是挺多的，尤其是`webpack`这一块由于更新到`4.0`之后，坑特别多。特来记录一下。

## 项目运行
#### 由于涉及大量的 ES6/7 等新属性，建议`node`使用`7.9.0`以上

```
git clone https://github.com/5ibinbin/react-redux-webpack.git

npm install (安装依赖包)

npm start (运行本地开发环境)

npm run build (打包)

```

## 项目目录

```tree
├── .babelrc
├── .gitignore
├── app
│   ├── actions
│   │   ├── ActionTypes.js
│   │   └── LoginAction.js
│   ├── api
│   │   ├── api.js
│   │   └── axios.js
│   ├── assets
│   │   ├── iconfont
│   │   ├── images
│   │   └── libs
│   ├── components
│   ├── pages
│   │   ├── container
│   │   │   ├── test.js
│   │   │   └── index.less
│   │   ├── home
│   │   │   ├── home.js
│   │   │   └── home.less
│   │   ├── login
│   │   │   ├── login.js
│   │   │   └── login.less
│   ├── reducers
│   │   ├── Index.js
│   │   └── Login.js
│   ├── store
│   │   └── configureStore.js
│   ├── style
│   ├── index.js
│   └── utils
│       └── constant.js
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
├── package-lock.json
├── package.json
├── readme.md
├── webpack.config.js
├── webpack.dev.config.js
├── webpack.prod.config.js
├── config
│   ├── webpack.config.js
│   ├── webpack.dev.config.js
│   └── webpack.prod.config.js
└── yarn.lock
```


## 项目搭建流程

- [React项目集成](https://github.com/5ibinbin/react-redux-webpack/wiki/React%E9%A1%B9%E7%9B%AE%E9%9B%86%E6%88%90)
- [redux实例教程](https://github.com/5ibinbin/react-redux-webpack/wiki/Redux%E5%AE%9E%E4%BE%8B%E6%95%99%E7%A8%8B)
- [webpack总结](https://github.com/5ibinbin/react-redux-webpack/wiki/webpack%E6%80%BB%E7%BB%93)
- [router的使用](https://github.com/5ibinbin/react-redux-webpack/wiki/Antd-Router)
	
	  
  