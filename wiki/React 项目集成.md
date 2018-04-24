# React 项目集成

###### 说明：最近学习了一下`React`，新建了一个项目，使用`React`+`redux`+`webpack`+`router`+`antd`技术栈，使用`Create React App`来创建项目，这中间也是遇到了一些坑，特此记录一下，免得大家走弯路。

##### 项目创建

###### 声明：官网地址请移步[这里](https://reactjs.org/docs/add-react-to-a-new-app.html)，使用`Create React App`这种方式创建`React`单页面应用，需要`node`版本大于`6`，方式如下：

```
npm install -g create-react-app
create-react-app my-app

cd my-app
npm start
```

###### 如果我们的npm版本大于`5.2.0`，也可以使用`npx`快捷安装(npx不用单独安装)，方式如下：

```
npx create-react-app my-app

cd my-app
npm start
```

###### 使用以上方式创建项目就可以直接通过`npm start`运行，项目结构如下

```
│
├── README.md
├── node_modules
├── package.json
├── .gitignore
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
└── src
    ├── App.css
    ├── App.js
    ├── App.test.js
    ├── index.css
    ├── index.js
    ├── logo.svg
    └── registerServiceWorker.js

```

## redux 集成

###### redux的集成需要安装以下文件

	npm install --save redux
	或
	yarn add redux  

`redux`是我们需要的基础库，可以把他理解成一个本地数据库
	
	npm install --save react-redux
	或
	yarn add react-redux
	
`react-redux` 是帮助我们完成数据发送订阅

	npm install --save redux-thunk
	或
	yarn add redux-thunk
	
`redux-thunk`可以帮助我们实现异步`action`

	npm install --save redux-logger
	或
	yarn add redux-logger
	
`redux-logger`是`redux`的日志中间件

> 以上就是我们使用`redux`需要依赖的库

##### 我们在实际使用的时候还是需要依赖其他的库资源

	npm install --save react-router-dom
	或
	yarn add react-router-dom
	
使用`react-router`来控制路由

	npm install --save axios
	或
	yarn add axios
	
使用`axios`来进行网络请求

## webpack 集成

