# Mirror
**此储存库因个人需要而存在，存放于 `GitHub` 中。**  
**此储存库遵循 <a href="./LICENSE" target="_bland">MIT</a> 协议 !!!**  
**内部文件遵循文件作者使用的协议，不受 MIT 协议影响。**

---
## 使用方式
<a href="test.html" target="_blank">查看示例</a>
### 直接引入
```html
<script src="https://mirror.aigio1064.top/jquery/jquery.js"></script>
```
---
### 间接引入
> 此方法有一定可能不管用

```html
<script a-srclist src="https://mirror.aigio1064.top/autoinduct.js"></script>
```
> 使用此方法需要使用 `a-srclist` 属性指定要引入的脚本
+  格式  
```html
<script a-srclist="src"></script>
src改成需要的资源，写法：
jqueryvuereactreact-dom
jqueryvuereact-dom
jquery;vue;react-dom;
jquery;vue;react-dom
jquery,vue,react-dom
格式随意只要保证单词拼写无误即可,按你自己的喜好来
忽略大小写
忽略先后顺序
忽略分隔符
单词可拼接：jquery-ui将同时引入jquery和jquery-ui
强制单词拼写检查
```

---
## 可使用的资源  
> 只保留最新发行资源，不保留历史版本，有需要请到正常 CDN 站点查看  

| 资源标签 | 版本 | 脚本自动引入资源名 | 备注 |
| :----: | :----: | :----: | :----: |
| jquery | 3.6.1 | jquery.min.js | GitHub提示风险: package.json |
| jquery-ui | 1.13.2 | jquery-ui.min.js |  |
| vue | 2.7.13 | vue.min.js | Vue3无法在浏览器使用，仅保存最新Vue2 |
| react | 16.8.0 | react.production.min.js |  |
| react-dom | 16.8.0 | react-dom.production.min.js |  |
| babel-standalone | 6.26.0 | babel.min.js |  |
