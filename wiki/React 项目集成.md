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


## webpack 集成