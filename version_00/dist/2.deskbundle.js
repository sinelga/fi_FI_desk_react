webpackJsonp([2],{

/***/ 496:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactBootstrap = __webpack_require__(219);

	var _reactRouter = __webpack_require__(160);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	//import {Button,Thumbnail,Grid,Image,Label  } from 'react-bootstrap'
	//import { Redirect } from 'react-router'

	//import ReactDOM from 'react-dom'
	//import DocumentMeta from 'react-document-meta'
	//import Chat from './Chat'

	var Notfound = function (_React$Component) {
		_inherits(Notfound, _React$Component);

		function Notfound() {
			_classCallCheck(this, Notfound);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(Notfound).apply(this, arguments));
		}

		_createClass(Notfound, [{
			key: 'handleReturn',
			value: function handleReturn() {
				_reactRouter.browserHistory.push('/');
			}
		}, {
			key: 'render',
			value: function render() {

				return _react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(
						_reactBootstrap.Button,
						{ onClick: this.handleReturn, className: 'bigclose', bsStyle: 'danger', bsSize: 'large', active: true },
						'Palata'
					),
					'Not Found'
				);
			}
		}]);

		return Notfound;
	}(_react2.default.Component);

	module.exports = Notfound;

/***/ }

});