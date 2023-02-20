"use strict";

var _config = require("./config");
var _server = _interopRequireDefault(require("./server"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
_server.default.listen(_config.config.APP_PORT, () => {
  console.log('listening at', _config.config.APP_PORT);
});