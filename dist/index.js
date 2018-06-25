'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DeviceOrientation = function (_Component) {
  _inherits(DeviceOrientation, _Component);

  function DeviceOrientation() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, DeviceOrientation);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = DeviceOrientation.__proto__ || Object.getPrototypeOf(DeviceOrientation)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      absolute: true,
      alpha: 0,
      beta: 0,
      gamma: 0
    }, _this.handleOrientation = function (event) {
      var absolute = event.absolute,
          alpha = event.alpha,
          beta = event.beta,
          gamma = event.gamma;


      _this.setState({ absolute: absolute, alpha: alpha, beta: beta, gamma: gamma });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(DeviceOrientation, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      window.addEventListener('deviceorientation', this.handleOrientation, true);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('deviceorientation', this.handleOrientation, true);
    }
  }, {
    key: 'render',
    value: function render() {
      return this.props.children(this.state);
    }
  }]);

  return DeviceOrientation;
}(_react.Component);

DeviceOrientation.propTypes = {
  children: _propTypes2.default.func
};
DeviceOrientation.defaultProps = {
  children: function children() {
    return null;
  }
};
exports.default = DeviceOrientation;