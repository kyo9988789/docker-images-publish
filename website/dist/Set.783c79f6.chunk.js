webpackJsonp([20],{330:function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=n(0),i=n.n(s),c=n(122),l=n(844),_=n.n(l),p=n(21),u=n.n(p),d=function(e){function t(n){o(this,t);var a=r(this,e.call(this,n));return a.handleUpdate=function(){return a.__handleUpdate__REACT_HOT_LOADER__.apply(a,arguments)},a.state={version:""},u.a.call("buildMenus",["test"]),u.a.register("handleMenuClick",function(e){"test"===e&&alert("hello world")}),a}return a(t,e),t.prototype.__handleUpdate__REACT_HOT_LOADER__=function(){return this.__handleUpdate__REACT_HOT_LOADER__.apply(this,arguments)},t.prototype.componentWillMount=function(){var e=u.a.call("appVersion");this.setState({version:e})},t.prototype.__handleUpdate__REACT_HOT_LOADER__=function(){u.a.call("update")},t.prototype.render=function(){return i.a.createElement(c.a,{title:"检查更新",showBackBtn:!0,className:_.a.page,backIcon:i.a.createElement("img",{src:n(738),style:{width:"2rem",height:"2rem"}})},i.a.createElement("img",{src:n(863)}),i.a.createElement("p",{className:_.a.version},"版本号：",this.state.version),i.a.createElement("button",{onClick:this.handleUpdate,className:_.a.upDate},"检查更新"),i.a.createElement("div",{className:_.a.bottom},i.a.createElement("p",null,"宁波市轨道交通车辆检修信息化系统")))},t}(i.a.Component),g=d;t.default=g;!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(d,"Set","F:/XueFu/Workspace/EAM_GLLQ_GL/dev/2.0.0/react-mobile-demo/src/js/pages/Set/index.js"),__REACT_HOT_LOADER__.register(g,"default","F:/XueFu/Workspace/EAM_GLLQ_GL/dev/2.0.0/react-mobile-demo/src/js/pages/Set/index.js"))}()},738:function(e,t,n){e.exports=n.p+"images/src/images/left_btn.png"},822:function(e,t,n){t=e.exports=n(9)(),t.push([e.i,".src-js-pages-Set-style-page___2jpsn .am-navbar-dark{background:#557dbb}.src-js-pages-Set-style-page___2jpsn .page-scrollview-content{height:100%;padding-top:3.5rem;background:#fff;position:relative}.src-js-pages-Set-style-page___2jpsn .page-scrollview-content>img{width:25%;display:block;margin:0 auto}.src-js-pages-Set-style-version____t0rI{height:4rem;line-height:4rem;text-align:center;font-size:1.2rem;color:#6c6c6c}.src-js-pages-Set-style-upDate___7zrU-{display:block;margin:2rem auto;height:3.5rem;width:8rem;background:#557dbb;color:#fff;font-size:1.2rem;border:none;outline:none;border-radius:.5rem}.src-js-pages-Set-style-bottom___1MB-G{position:absolute;bottom:0;width:100%;padding-bottom:.8rem}.src-js-pages-Set-style-bottom___1MB-G>p{line-height:2rem;text-align:center;font-size:1rem;color:#6c6c6c}",""]),t.locals={page:"src-js-pages-Set-style-page___2jpsn",version:"src-js-pages-Set-style-version____t0rI",upDate:"src-js-pages-Set-style-upDate___7zrU-",bottom:"src-js-pages-Set-style-bottom___1MB-G"}},844:function(e,t,n){var o=n(822);"string"==typeof o&&(o=[[e.i,o,""]]);n(10)(o,{});o.locals&&(e.exports=o.locals)},863:function(e,t,n){e.exports=n.p+"images/src/images/Set-logo.png"}});