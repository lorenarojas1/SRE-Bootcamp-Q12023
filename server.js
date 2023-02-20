"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = _interopRequireDefault(require("express"));
var _cookieParser = _interopRequireDefault(require("cookie-parser"));
var _routes = require("./routes");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const app = (0, _express.default)();
const bodyParser = require('body-parser');
app.use((0, _cookieParser.default)());
app.set('view engine', 'ejs');
app.use(_express.default.static('public'));
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());
(0, _routes.init)(app);
var _default = app;
exports.default = _default;