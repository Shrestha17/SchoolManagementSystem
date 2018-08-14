/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Renderer = __webpack_require__(1);

var _Renderer2 = _interopRequireDefault(_Renderer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var express = __webpack_require__(18);
var app = express();

app.use(express.static('public', {
    index: false
}));

app.get('*', function (req, res) {
    var rendererInstance = (0, _Renderer2.default)(req);

    if (rendererInstance.routestatus == 404) {
        res.status(404).end("Not found, 404 status returned");
    } else {
        res.send((0, _Renderer2.default)(req).htmlcode);
    }
});

app.listen(3040, function () {
    console.log('Listening on port 3040!');
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(3);

var _reactRouterDom = __webpack_require__(4);

var _FullPage = __webpack_require__(5);

var _FullPage2 = _interopRequireDefault(_FullPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (req) {
    var context = {};
    var content = (0, _server.renderToString)(_react2.default.createElement(
        _reactRouterDom.StaticRouter,
        { location: req.path, context: context },
        _react2.default.createElement(_FullPage2.default, null)
    ));

    return {
        htmlcode: '<html>\n          <head>\n            <title>SVCC React Application</title>\n            <link rel="stylesheet" href="">            \n          </head>          \n          <body>\n            <div id="app">' + content + '</div>\n            <script src="clientbundle.js"></script>\n          </body>           \n        </html>\n      ',
        routestatus: context.status
    };
};

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _Routes = __webpack_require__(6);

var _Routes2 = _interopRequireDefault(_Routes);

var _Footer = __webpack_require__(17);

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FullPage = function (_React$Component) {
    _inherits(FullPage, _React$Component);

    function FullPage() {
        _classCallCheck(this, FullPage);

        return _possibleConstructorReturn(this, (FullPage.__proto__ || Object.getPrototypeOf(FullPage)).apply(this, arguments));
    }

    _createClass(FullPage, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'h2',
                    null,
                    'Page top'
                ),
                _react2.default.createElement(_Routes2.default, null),
                _react2.default.createElement(_Footer2.default, null)
            );
        }
    }]);

    return FullPage;
}(_react2.default.Component);

exports.default = FullPage;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(7);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRouterDom = __webpack_require__(4);

var _reactRouter = __webpack_require__(8);

var _Home = __webpack_require__(9);

var _Home2 = _interopRequireDefault(_Home);

var _Speakers = __webpack_require__(10);

var _Speakers2 = _interopRequireDefault(_Speakers);

var _RoutesNotFound = __webpack_require__(16);

var _RoutesNotFound2 = _interopRequireDefault(_RoutesNotFound);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Routes = function (_Component) {
    _inherits(Routes, _Component);

    function Routes(props) {
        _classCallCheck(this, Routes);

        var _this = _possibleConstructorReturn(this, (Routes.__proto__ || Object.getPrototypeOf(Routes)).call(this, props));

        _this.handler = _this.handler.bind(_this);
        return _this;
    }

    _createClass(Routes, [{
        key: 'handler',
        value: function handler() {
            this.props.action();
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                _reactRouterDom.Switch,
                null,
                _react2.default.createElement(_reactRouterDom.Route, {
                    exact: true, path: '/',
                    render: function render() {
                        return _react2.default.createElement(
                            'h1',
                            null,
                            'Default routed page'
                        );
                    } }),
                _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/home', component: _Home2.default }),
                _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/speakers', component: _Speakers2.default }),
                _react2.default.createElement(_reactRouterDom.Route, {
                    exact: true, path: '/route1',
                    render: function render() {
                        return _react2.default.createElement(
                            'h1',
                            null,
                            ' This is Route1'
                        );
                    } }),
                _react2.default.createElement(_reactRouterDom.Route, { render: function render(props) {
                        return _react2.default.createElement(_RoutesNotFound2.default, { action: _this2.handler });
                    } })
            );
        }
    }]);

    return Routes;
}(_react.Component);

Routes.propTypes = {};
Routes.defaultProps = {};

exports.default = Routes;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_Component) {
    _inherits(Home, _Component);

    function Home() {
        _classCallCheck(this, Home);

        var _this = _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this));

        _this.state = { value: "this is value notation displayed from home page." };
        return _this;
    }

    _createClass(Home, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "div",
                null,
                this.state.value
            );
        }
    }]);

    return Home;
}(_react.Component);

exports.default = Home;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(7);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _SpeakersHeader = __webpack_require__(11);

var _SpeakersHeader2 = _interopRequireDefault(_SpeakersHeader);

var _SpeakerList = __webpack_require__(12);

var _SpeakerList2 = _interopRequireDefault(_SpeakerList);

var _reactRedux = __webpack_require__(14);

var _speakers = __webpack_require__(15);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
//import axios from 'axios';

var Speakers = function (_Component) {
    _inherits(Speakers, _Component);

    function Speakers() {
        _classCallCheck(this, Speakers);

        return _possibleConstructorReturn(this, (Speakers.__proto__ || Object.getPrototypeOf(Speakers)).apply(this, arguments));
    }

    _createClass(Speakers, [{
        key: 'componentDidMount',


        // constructor(props) {
        //     super(props);
        //     this.state = {
        //         isLoading: true,
        //         appData: []
        //     };
        // }


        value: function componentDidMount() {

            this.props.speakersFetchData();
            // axios.get('/data/speakers.json')
            //     .then((result)=> {
            //         this.setState({
            //             appData: result.data,
            //             isLoading: false
            //         });
            //     })
            //     .catch(error => {
            //         if (error.response) {
            //             console.log(error.responderEnd);
            //         }
            //     });
        }
    }, {
        key: 'render',
        value: function render() {

            if (this.props.isLoading) {
                return _react2.default.createElement(
                    'span',
                    null,
                    _react2.default.createElement(
                        'div',
                        null,
                        _react2.default.createElement(_SpeakersHeader2.default, null)
                    ),
                    _react2.default.createElement(
                        'i',
                        null,
                        'Loading...'
                    )
                );
            } else if (this.props.hasErrored) {
                return _react2.default.createElement(
                    'span',
                    null,
                    _react2.default.createElement(
                        'b',
                        null,
                        'Failed to load data: ',
                        this.props.errorMessage
                    )
                );
            } else {
                return _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(_SpeakersHeader2.default, null),
                    _react2.default.createElement(_SpeakerList2.default, { speakers: this.props.speakers })
                );
            }
        }
    }]);

    return Speakers;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {

    return {
        speakers: state.speakers.data,
        hasErrored: state.speakers.hasErrored,
        isLoading: state.speakers.isLoading,
        errorMessage: state.speakers.errorMessage
    };
};

// this is returning a promise
function loadData(store) {
    return store.dispatch((0, _speakers.speakersFetchData)());
}
//https://shinesolutions.com/2017/12/14/putting-together-the-pieces-server-side-rendering-with-react-router-v4-and-redux/
// export default connect(mapStateToProps, { speakersFetchData })(Speakers)

exports.default = {
    component: (0, _reactRedux.connect)(mapStateToProps, { speakersFetchData: _speakers.speakersFetchData })(Speakers),
    loadData: loadData
};

// import React,{Component} from 'react';
// import axios from 'axios';
// import {connect} from 'react-redux';
// import speakersFetchData from '../../../redux/actions/speakers';


// class Speakers extends Component{
//     constructor(props)
//     {
//         super(props);
//         this.state={
//             appData:[],
//             isLoading:true
//         }
//     }
//    componentDidMount(){      
// this.props.speakersFetchData();

//     //    axios.get('/data/speakers.json')
//     //    .then(result=>{
//     //      this.setState({
//     //          appData:result.data,
//     //          isLoading:false
//     //      })
//     //    })
//     // .catch(error=>{
//     //     if(error.response){
//     //         console.log(error.responderEnd);
//     //     }
//     // })    
// };


//     render()
//     {   
//         if(this.state.isLoading==true)
//         {
//         return <span><i>Loading...</i></span>
//         }
//         else{
//         return(
// <table>
//     <thead>
// <tr>   
// <th>Id</th>
// <th>FirstName</th>
// <th>LastName</th>
//     </tr>
//         </thead>
//         <tbody>
//             {this.state.appData.map(ad=>
//             <tr key={ad.id}>
//             <td>{ad.id}</td>
//             <td>{ad.fName}</td>
//             <td>{ad.lName}</td>
//             </tr>            
//             )}
//             </tbody>
//     </table>

//             // <div> 

//             //     <span>{JSON.stringify(this.state.appData)}</span>
//             // </div>
//         )
//     }
// }
// }

// //export default Speakers;


// const mapStateToProps=(state)=>{
//     debugger;   
//     return{
//         speakers:state.speakers.data,
//         hasErrored:state.speakers.hasErrored,
//         isLoading:state.speakers.isLoading,
//         errorMessage:state.speakers.errorMessage
//     };
// };

// export default connect(mapStateToProps,
//     {speakersFetchData})(Speakers)

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SpeakersHeader;

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function SpeakersHeader() {
  return _react2.default.createElement(
    'div',
    null,
    'SVCC is the Perfect place to watch engaging and entertaining talks given by industry experts and luminaries, and meet with developers for enaging and motivating conversations around specific topics......'
  );
}

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SpeakerList;

var _propTypes = __webpack_require__(7);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _SpeakerListItem = __webpack_require__(13);

var _SpeakerListItem2 = _interopRequireDefault(_SpeakerListItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function SpeakerList(_ref) {
  var speakers = _ref.speakers;

  return _react2.default.createElement(
    'div',
    null,
    speakers.map(function (item) {
      return _react2.default.createElement(_SpeakerListItem2.default, {
        key: item.id,
        fName: item.fName,
        lName: item.lName,
        id: item.id
      });
    })
  );
}

SpeakerList.propTypes = {
  speakers: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    id: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
    fName: _propTypes2.default.string,
    lName: _propTypes2.default.string
  }))
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = SpeakerListItem;

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(7);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function SpeakerListItem(_ref) {
    var id = _ref.id,
        fName = _ref.fName,
        lName = _ref.lName;


    return _react2.default.createElement(
        'div',
        null,
        fName,
        ' ',
        lName
    );
}

SpeakerListItem.propTypes = {
    id: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
    fName: _propTypes2.default.string,
    lName: _propTypes2.default.string
};

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.speakersFetchData = speakersFetchData;
var SPEAKER_LOAD = exports.SPEAKER_LOAD = 'SPEAKER_LOAD';
var SPEAKER_LOAD_SUCCESS = exports.SPEAKER_LOAD_SUCCESS = 'SPEAKER_LOAD_SUCCESS';
var SPEAKER_LOAD_FAIL = exports.SPEAKER_LOAD_FAIL = 'SPEAKER_LOAD_FAIL';

function speakersFetchData() {
    return {
        type: SPEAKER_LOAD,
        payload: {
            request: {
                url: '/data/speakers.json'
            }
        }
    };
}

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RouteNotFound = function (_Component) {
    _inherits(RouteNotFound, _Component);

    function RouteNotFound() {
        _classCallCheck(this, RouteNotFound);

        return _possibleConstructorReturn(this, (RouteNotFound.__proto__ || Object.getPrototypeOf(RouteNotFound)).apply(this, arguments));
    }

    _createClass(RouteNotFound, [{
        key: 'render',


        // componentDidMount() {    

        //     this.props.action(true);
        // }
        value: function render() {
            console.log('route not found in RouteNotFound.js.  Bubble up...');
            //this.props.action(false);
            return _react2.default.createElement(_reactRouterDom.Route, { render: function render(_ref) {
                    var staticContext = _ref.staticContext;

                    if (staticContext) {
                        staticContext.status = 404;
                    }
                    return _react2.default.createElement(
                        'div',
                        null,
                        _react2.default.createElement(
                            'h1',
                            null,
                            '404 : Not Found!'
                        )
                    );
                } });
        }
    }]);

    return RouteNotFound;
}(_react.Component);

RouteNotFound.defaultProps = {};
exports.default = RouteNotFound;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Footer = function (_Component) {
    _inherits(Footer, _Component);

    function Footer() {
        _classCallCheck(this, Footer);

        var _this = _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).call(this));

        _this.state = { footer: "this is footer part..." };
        return _this;
    }

    _createClass(Footer, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "div",
                null,
                this.state.footer
            );
        }
    }]);

    return Footer;
}(_react.Component);

exports.default = Footer;

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ })
/******/ ]);
//# sourceMappingURL=serverbundle.js.map