/*
 * @Author: changluo
 * @Description: 
 */
//json-server 假数据
const jsonServer = require('json-server') //引入文件
const path = require('path')
const apiServer = jsonServer.create(); //创建服务器
const apiRouter = jsonServer.router(path.resolve(__dirname,'db.json')) //引入json 文件 ，这里的地址就是你json文件的地址
const middlewares = jsonServer.defaults(); //返回JSON服务器使用的中间件。
apiServer.use(middlewares)
apiServer.use('/json', apiRouter)
apiServer.listen(5000, function () { //json服务器端口:比如你使用8080,这里的json服务器就是8081端口
    console.log('JSON Server is running 5000 port')  //json server成功运行会在git bash里面打印出'JSON Server is running'
})