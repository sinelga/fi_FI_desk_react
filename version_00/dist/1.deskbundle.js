webpackJsonp([1],{

/***/ 462:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactBootstrap = __webpack_require__(219);

	var _reactRouter = __webpack_require__(160);

	var _reactDom = __webpack_require__(159);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _Chat = __webpack_require__(463);

	var _Chat2 = _interopRequireDefault(_Chat);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	//import $ from 'jquery'
	//import { Link } from 'react-router'

	var Details = function (_React$Component) {
		_inherits(Details, _React$Component);

		function Details(props) {
			_classCallCheck(this, Details);

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Details).call(this, props));

			_this.state = {
				data: [],
				timerHandler: ''

			};
			_this.handleToggleDetailsChat = _this.handleToggleDetailsChat.bind(_this);
			return _this;
		}

		_createClass(Details, [{
			key: 'loadajax',
			value: function loadajax(id) {
				//		$.ajax({
				//		      url: 'http://www.paljaat.fi:8000/api/'+id,
				//		      dataType: 'json',
				//		      cache: false,
				//		      success: function(data) {
				//		        this.setState({data: data});
				//		      }.bind(this),
				//		      error: function(xhr, status, err) {
				//		        console.error(this.props.url, status, err.toString());
				//		      }.bind(this)
				//		    });
				console.log(location.hostname);
				var hostname = location.hostname;

				if (hostname == '127.0.0.1') {
					hostname = 'www.test.com';
				}
				var request = new XMLHttpRequest();
				request.open('GET', 'http://' + hostname + ':8000/api/' + id, true);

				request.onload = function () {
					if (request.status >= 200 && request.status < 400) {
						// Success!			 
						var data = JSON.parse(request.responseText);
						this.setState({ data: data });
					} else {
						// We reached our target server, but it returned an error

					}
				}.bind(this);

				request.onerror = function () {
					// There was a connection error of some sort
				};

				request.send();
			}
		}, {
			key: 'handleToggleDetailsChat',
			value: function handleToggleDetailsChat() {

				var dnode = _reactDom2.default.findDOMNode(this.refs.chat).style.display;

				if (dnode === 'none') {

					this.setState({ timerHandler: 'on' });
					_reactDom2.default.findDOMNode(this.refs.chat).style.display = '';
					_reactDom2.default.findDOMNode(this.refs.details).style.display = 'none';
				} else {
					this.setState({ timerHandler: 'off' });
					_reactDom2.default.findDOMNode(this.refs.chat).style.display = 'none';
					_reactDom2.default.findDOMNode(this.refs.details).style.display = '';
				}
			}
		}, {
			key: 'handleReturn',
			value: function handleReturn() {
				_reactRouter.browserHistory.push('/');
			}
		}, {
			key: 'componentWillMount',
			value: function componentWillMount() {
				//		console.log("Willmount Details",this.props.params.id)

				this.loadajax(this.props.params.id);
			}
		}, {
			key: 'componentDidMount',
			value: function componentDidMount() {
				//		console.log("mount Details")
				_reactDom2.default.findDOMNode(this.refs.chat).style.display = 'none';
			}
		}, {
			key: 'componentWillReceiveProps',
			value: function componentWillReceiveProps() {
				//		console.log("componentWillReceiveProps Details")

			}
		}, {
			key: 'componentWillUpdate',
			value: function componentWillUpdate(prevProps) {
				//		console.log("componentWillUpdate")	
			}
		}, {
			key: 'componentDidUpdate',
			value: function componentDidUpdate(prevProps) {

				//		console.log("componentDidUpdate")

			}
		}, {
			key: 'render',
			value: function render() {

				//	  var id =this.props.params.id
				var data = this.state.data;
				var imglink = "http://www.paljaat.fi:8000/img/" + data.ImgId + "/" + data.Img_file_name + "/200/250";

				return _react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(
						'button',
						{ onClick: this.handleReturn, type: 'button', className: 'close', 'data-dismiss': 'alert', 'aria-label': 'Close' },
						_react2.default.createElement(
							'span',
							{ 'aria-hidden': 'true', className: 'bigclose' },
							'×'
						)
					),
					_react2.default.createElement(
						'div',
						{ ref: 'details' },
						_react2.default.createElement(
							'a',
							{ className: 'mbigphone', href: 'tel:' + data.Phone },
							_react2.default.createElement('span', { className: 'glyphicon glyphicon-earphone', 'aria-hidden': 'true' }),
							' ',
							data.Phone
						),
						_react2.default.createElement(
							_reactBootstrap.Grid,
							null,
							_react2.default.createElement(_reactBootstrap.Image, { src: imglink, thumbnail: true }),
							_react2.default.createElement(
								'p',
								null,
								data.Name,
								' ',
								this.state.data.Age,
								'v ',
								data.City
							),
							_react2.default.createElement(
								_reactBootstrap.Button,
								{ onClick: this.handleToggleDetailsChat, bsStyle: 'primary', bsSize: 'large', active: true },
								'Chatti'
							)
						)
					),
					_react2.default.createElement(
						'div',
						{ ref: 'chat' },
						_react2.default.createElement(_Chat2.default, { data: data, timerHandler: this.state.timerHandler })
					)
				);
			}
		}]);

		return Details;
	}(_react2.default.Component);

	module.exports = Details;

/***/ },

/***/ 463:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(159);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _nodeUuid = __webpack_require__(464);

	var _nodeUuid2 = _interopRequireDefault(_nodeUuid);

	var _reactBootstrap = __webpack_require__(219);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	//import $ from 'jquery'

	var t;
	var data;
	var chatID;
	var request;
	//var phone

	var Chat = function (_React$Component) {
		_inherits(Chat, _React$Component);

		function Chat(props) {
			_classCallCheck(this, Chat);

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Chat).call(this, props));

			_this.state = {
				count: 0,
				ask: '',
				nextask: '',
				answer: ''

			};

			_this.toggle = _this.toggle.bind(_this);
			_this.timerOn = _this.timerOn.bind(_this);
			_this.timerOff = _this.timerOff.bind(_this);
			_this.handleSubmit = _this.handleSubmit.bind(_this);
			_this.handleNextAskChange = _this.handleNextAskChange.bind(_this);

			return _this;
		}

		_createClass(Chat, [{
			key: 'loadajax',
			value: function loadajax(url) {
				//		xhr = $.ajax({
				//		      url: 'http://www.paljaat.fi:8000/chat/'+url,
				//		      dataType: 'json',
				//		      cache: false,
				//		      success: function(data) {
				//		        this.setState({answer: data.answer});
				//		      }.bind(this),
				//		      error: function(xhr, status, err) {
				//		        console.error(this.props.url, status, err.toString());
				//		      }.bind(this)
				//		    });

				request = new XMLHttpRequest();
				request.open('GET', 'http://www.paljaat.fi:8000/chat/' + url, true);

				request.onload = function () {
					if (request.status >= 200 && request.status < 400) {
						// Success!			 
						var data = JSON.parse(request.responseText);
						//		    this.setState({data: data});
						this.setState({ answer: data.answer });
					} else {
						// We reached our target server, but it returned an error

					}
				}.bind(this);

				request.onerror = function () {
					// There was a connection error of some sort
				};

				request.send();
			}
		}, {
			key: 'timerOff',
			value: function timerOff() {
				clearInterval(t);
				t = 0;
				this.setState({ count: 0 });
			}
		}, {
			key: 'timerOn',
			value: function timerOn() {

				var self = this;
				t = setInterval(function () {
					console.log(self.state.answer);
					self.setState({ count: self.state.count + 1 });
				}, 3500);
			}
		}, {
			key: 'toggle',
			value: function toggle() {

				var elem = _reactDom2.default.findDOMNode(this.refs.label_typing);
				if (elem.style.visibility === 'hidden') {

					elem.style.visibility = '';
				} else {
					elem.style.visibility = 'hidden';
				}
			}
		}, {
			key: 'componentWillReceiveProps',
			value: function componentWillReceiveProps(nextProps) {
				console.log("Chat componentWillReceiveProps", nextProps);

				data = nextProps.data;
				this.setState({ ask: 'Hei ' + data.Name + '!' });

				if (nextProps.timerHandler === 'on') {
					_reactDom2.default.findDOMNode(this.refs.answer).style.display = 'none';
					chatID = _nodeUuid2.default.v4();
					var url = chatID + '/' + data.Phone + '/' + encodeURIComponent(this.state.ask);
					console.log(url);
					this.loadajax(encodeURIComponent(url));
					this.timerOn();
				} else {
					console.log("STOP timeR");
					this.timerOff();
				}
			}
		}, {
			key: 'componentWillUpdate',
			value: function componentWillUpdate(prevProps) {
				console.log("Chat componentWillUpdate");

				if (this.state.count > 7) {

					_reactDom2.default.findDOMNode(this.refs.label_typing).style.visibility = 'hidden';
					_reactDom2.default.findDOMNode(this.refs.answer).style.display = '';
					this.timerOff();
				} else if (this.state.count !== 0) {

					this.toggle();
				}
			}
		}, {
			key: 'componentDidUpdate',
			value: function componentDidUpdate(prevProps, prevState) {

				//			console.log("Chat componentDidUpdate",prevState)
				//			this.toggle()

			}
		}, {
			key: 'componentWillMount',
			value: function componentWillMount() {
				console.log("willmount Chat");
				this.setState({ nextask: '' });
				this.setState({ ask: '' });
				//		ReactDOM.findDOMNode(this.refs.answer).style.display =''
			}
		}, {
			key: 'componentDidMount',
			value: function componentDidMount() {
				console.log("didmount Chat");
				data = this.props.data;
				this.setState({ ask: 'Hei ' + data.Name + '!' });
				var elem = _reactDom2.default.findDOMNode(this.refs.answer);
				elem.style.display = 'none';
			}
		}, {
			key: 'componentWillUnmount',
			value: function componentWillUnmount() {

				console.log("componentWillUnmount Chat", request);
				//		request.abort()
				this.timerOff();
			}
		}, {
			key: 'handleSubmit',
			value: function handleSubmit(e) {
				if (this.state.nextask.length > 0) {
					e.preventDefault();
					console.log(this.state.nextask);
					this.state.ask = this.state.nextask.trim();
					this.state.nextask = '';
					_reactDom2.default.findDOMNode(this.refs.answer).style.display = 'none';
					this.timerOn();
					var url = chatID + '/' + data.Phone + '/' + encodeURIComponent(this.state.ask);
					console.log(url);
					this.loadajax(encodeURIComponent(url));
				}
			}
		}, {
			key: 'handleNextAskChange',
			value: function handleNextAskChange(e) {
				this.setState({ nextask: e.target.value });
			}
		}, {
			key: 'render',
			value: function render() {
				var data = this.props.data;

				var status = 'odotta';
				var answer = this.state.answer;
				var ask = this.state.ask;

				if (this.state.count > 2) {

					status = 'delivered';
				}

				if (this.state.count > 5) {

					status = 'seen';
				}

				if (this.state.count > 7) {

					status = 'typing';
				}

				return _react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(
						'p',
						null,
						_react2.default.createElement(
							'a',
							{ className: 'mbigphone', href: 'tel:' + data.Phone },
							_react2.default.createElement('span', { className: 'glyphicon glyphicon-earphone', 'aria-hidden': 'true' }),
							data.Phone
						)
					),
					'Chatti: ',
					data.Name,
					' ',
					data.Age,
					'v',
					_react2.default.createElement(
						_reactBootstrap.Badge,
						{ ref: 'label_typing', pullRight: true },
						status
					),
					_react2.default.createElement('p', null),
					_react2.default.createElement(
						_reactBootstrap.Alert,
						null,
						ask
					),
					_react2.default.createElement(
						'div',
						{ ref: 'answer' },
						_react2.default.createElement(
							_reactBootstrap.Alert,
							{ bsStyle: 'danger' },
							answer
						),
						_react2.default.createElement(
							'form',
							{ onSubmit: this.handleSubmit },
							_react2.default.createElement(_reactBootstrap.Input, { type: 'text', label: 'Name', placeholder: 'Kysyä jotain!', value: this.state.nextask, onChange: this.handleNextAskChange })
						),
						_react2.default.createElement(
							_reactBootstrap.Button,
							{ bsStyle: 'primary', onClick: this.handleSubmit },
							'Jatkaa'
						)
					)
				);
			}
		}]);

		return Chat;
	}(_react2.default.Component);

	module.exports = Chat;

/***/ }

});