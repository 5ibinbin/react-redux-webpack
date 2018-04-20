# React + Redux + webpack4.0 + Router

## 项目前景

需要搭建一个管理后台，有过`React Native`基础，故想来折腾一下这一套`大保健`，没想到需要注意的事情还是挺多的，尤其是`webpack`这一块由于更新到`4.0`之后，坑特别多。特来记录一下。

## 项目运行
#### 由于涉及大量的 ES6/7 等新属性，建议`node`使用`6.7.0`以上

```
git clone https://github.com/5ibinbin/react-redux-webpack.git

npm install (安装依赖包)

npm start (运行本地开发环境)

npm run build (打包)

```

## 项目目录

```tree
├── .babelrc
├── .eslintignore
├── .eslintrc.json
├── .gitignore
├── LICENSE
├── _config.yml
├── _gitattributes
├── app
│   ├── actions
│   │   ├── common.js
│   │   ├── house.js
│   │   └── tabList.js
│   ├── api
│   │   ├── common.js
│   │   ├── house.js
│   │   └── index.js
│   ├── base
│   │   ├── header.js
│   │   ├── index.js
│   │   ├── nav.js
│   │   └── tabList.js
│   ├── client.js
│   ├── config.js
│   ├── history.js
│   ├── iconfont
│   │   ├── iconfont.eot
│   │   ├── iconfont.svg
│   │   ├── iconfont.ttf
│   │   └── iconfont.woff
│   ├── images
│   │   ├── default.png
│   │   ├── emoji
│   │   ├── leftBg.jpg
│   │   └── navcontrol.png
│   ├── index.html
│   ├── middleware
│   │   ├── index.js
│   │   ├── logger.js
│   │   └── router.js
│   ├── pages
│   │   ├── chat
│   │   │   └── index.js
│   │   ├── login.js
│   │   ├── menu
│   │   │   ├── echarts.js
│   │   │   ├── editor.js
│   │   │   ├── index.js
│   │   │   └── table.js
│   │   ├── register.js
│   │   └── welcome.js
│   ├── reducers
│   │   ├── common.js
│   │   ├── house.js
│   │   ├── index.js
│   │   └── tabList.js
│   ├── routes.js
│   ├── store
│   │   └── configureStore.js
│   ├── style
│   │   ├── RichEditor.less
│   │   ├── base.less
│   │   ├── im.less
│   │   └── theme.less
│   └── utils
│       ├── ajax.js
│       └── index.js
├── mock
│   ├── datas
│   │   └── tableList.js
│   ├── http.js
│   ├── interfaceFilter.js
│   └── interfaceMap.js
├── package-lock.json
├── package.json
├── readme.md
├── scripts
│   ├── chatServer.js
│   ├── webpack.base.config.js
│   ├── webpack.dev.config.js
│   └── webpack.prod.config.js
└── yarn.lock

```


## 项目搭建流程

- `React` 项目依赖管理
- `redux` 集成
- `router` 集成
- `webpack` 集成
	
	  
  