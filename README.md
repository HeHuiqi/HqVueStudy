### package.json 说明

```

"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "webpack-dev-server --open  --config webpack.config.js",
    "build":"webpack --progress --hide-modules"
  },
  
  // h5 history模式
    "dev": "webpack-dev-server --history-api-fallback  --config   webpack.config.js",
  --open：会自动打开浏览器
  --config:指定webpack配置文件
```

### npm install --save 和 npm install --save-dev

--save 表示安装模块的时候把它写到package.json文件中的dependencies字段中
--save-dev 表示安装模块的时候把它写到package.json文件中的devDependencies字段中