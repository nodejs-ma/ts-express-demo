import express, { Application } from 'express'
import path from 'path'
import ejs from 'ejs'
import router from './routes/index'

const app:Application = express()

// 模板引擎
app.engine('html', ejs.renderFile);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

// 静态目录
app.use(express.static(path.join(__dirname, 'public')));

// 路由分模块
app.use(router);

// 404页面
app.get('*', function(req, res) {
	res.send('404 not found');
});

app.listen(3000,()=>{
    console.log('server port 3000 is runing')
})