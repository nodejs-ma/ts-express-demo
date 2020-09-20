"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var router = express_1.default.Router();
router.get('/', function (req, res) {
    res.render('index');
});
router.get('/search', function (req, res) {
    var Search = /** @class */ (function () {
        function Search() {
            this.driverName = req.url;
        }
        Search.prototype.getData = function () {
        };
        Search.prototype.giveData = function () {
        };
        return Search;
    }());
});
exports.default = router;
//# sourceMappingURL=index.js.map