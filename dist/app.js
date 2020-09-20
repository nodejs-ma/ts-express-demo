"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var path_1 = __importDefault(require("path"));
var ejs_1 = __importDefault(require("ejs"));
var index_1 = __importDefault(require("./routes/index"));
var app = express_1.default();
// 模板引擎
app.engine('html', ejs_1.default.renderFile);
app.set('views', path_1.default.join(__dirname, 'views'));
app.set('view engine', 'html');
// 静态目录
app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
// 路由分模块
app.use(index_1.default);
// 404页面
app.get('*', function (req, res) {
    res.send('404 not found');
});
app.listen(3000, function () {
    console.log('server port 3000 is runing');
});
//# sourceMappingURL=app.js.map