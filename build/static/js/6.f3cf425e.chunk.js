webpackJsonp([6,11,19,20,22],{1059:function(e,t,n){"use strict";function o(e){var t=(0,i.default)(e),n=(0,l.default)(t),o=t&&t.documentElement,a={top:0,left:0,height:0,width:0};if(t)return(0,r.default)(o,e)?(void 0!==e.getBoundingClientRect&&(a=e.getBoundingClientRect()),a={top:a.top+(n.pageYOffset||o.scrollTop)-(o.clientTop||0),left:a.left+(n.pageXOffset||o.scrollLeft)-(o.clientLeft||0),width:(null==a.width?e.offsetWidth:a.width)||0,height:(null==a.height?e.offsetHeight:a.height)||0}):a}var a=n(19);t.__esModule=!0,t.default=o;var r=a(n(117)),l=a(n(440)),i=a(n(116));e.exports=t.default},1060:function(e,t,n){"use strict";function o(e,t){var n=(0,r.default)(e);if(void 0===t)return n?"pageYOffset"in n?n.pageYOffset:n.document.documentElement.scrollTop:e.scrollTop;n?n.scrollTo("pageXOffset"in n?n.pageXOffset:n.document.documentElement.scrollLeft,t):e.scrollTop=t}var a=n(19);t.__esModule=!0,t.default=o;var r=a(n(440));e.exports=t.default},1149:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function a(e,t){return Array.isArray(t)?t.indexOf(e)>=0:e===t}t.__esModule=!0;var r=n(9),l=o(r),i=n(4),u=o(i),s=n(5),f=o(s),d=n(6),c=o(d),p=n(7),h=o(p),m=n(117),y=o(m),v=n(0),g=o(v),O=n(1),b=o(O),w=n(28),E=o(w),_=n(88),T=(o(_),n(1150)),P=o(T),x=n(23),C=o(x),M=b.default.oneOf(["click","hover","focus"]),j=(0,h.default)({},P.default.propTypes,{trigger:b.default.oneOfType([M,b.default.arrayOf(M)]),delay:b.default.number,delayShow:b.default.number,delayHide:b.default.number,defaultOverlayShown:b.default.bool,overlay:b.default.node.isRequired,onBlur:b.default.func,onClick:b.default.func,onFocus:b.default.func,onMouseOut:b.default.func,onMouseOver:b.default.func,target:b.default.oneOf([null]),onHide:b.default.oneOf([null]),show:b.default.oneOf([null])}),S={defaultOverlayShown:!1,trigger:["hover","focus"]},N=function(e){function t(n,o){(0,u.default)(this,t);var a=(0,f.default)(this,e.call(this,n,o));return a.handleToggle=a.handleToggle.bind(a),a.handleDelayedShow=a.handleDelayedShow.bind(a),a.handleDelayedHide=a.handleDelayedHide.bind(a),a.handleHide=a.handleHide.bind(a),a.handleMouseOver=function(e){return a.handleMouseOverOut(a.handleDelayedShow,e)},a.handleMouseOut=function(e){return a.handleMouseOverOut(a.handleDelayedHide,e)},a._mountNode=null,a.state={show:n.defaultOverlayShown},a}return(0,c.default)(t,e),t.prototype.componentDidMount=function(){this._mountNode=document.createElement("div"),this.renderOverlay()},t.prototype.componentDidUpdate=function(){this.renderOverlay()},t.prototype.componentWillUnmount=function(){E.default.unmountComponentAtNode(this._mountNode),this._mountNode=null,clearTimeout(this._hoverShowDelay),clearTimeout(this._hoverHideDelay)},t.prototype.handleDelayedHide=function(){var e=this;if(null!=this._hoverShowDelay)return clearTimeout(this._hoverShowDelay),void(this._hoverShowDelay=null);if(this.state.show&&null==this._hoverHideDelay){var t=null!=this.props.delayHide?this.props.delayHide:this.props.delay;if(!t)return void this.hide();this._hoverHideDelay=setTimeout(function(){e._hoverHideDelay=null,e.hide()},t)}},t.prototype.handleDelayedShow=function(){var e=this;if(null!=this._hoverHideDelay)return clearTimeout(this._hoverHideDelay),void(this._hoverHideDelay=null);if(!this.state.show&&null==this._hoverShowDelay){var t=null!=this.props.delayShow?this.props.delayShow:this.props.delay;if(!t)return void this.show();this._hoverShowDelay=setTimeout(function(){e._hoverShowDelay=null,e.show()},t)}},t.prototype.handleHide=function(){this.hide()},t.prototype.handleMouseOverOut=function(e,t){var n=t.currentTarget,o=t.relatedTarget||t.nativeEvent.toElement;o&&o===n||(0,y.default)(n,o)||e(t)},t.prototype.handleToggle=function(){this.state.show?this.hide():this.show()},t.prototype.hide=function(){this.setState({show:!1})},t.prototype.makeOverlay=function(e,t){return g.default.createElement(P.default,(0,h.default)({},t,{show:this.state.show,onHide:this.handleHide,target:this}),e)},t.prototype.show=function(){this.setState({show:!0})},t.prototype.renderOverlay=function(){E.default.unstable_renderSubtreeIntoContainer(this,this._overlay,this._mountNode)},t.prototype.render=function(){var e=this.props,t=e.trigger,n=e.overlay,o=e.children,r=e.onBlur,i=e.onClick,u=e.onFocus,s=e.onMouseOut,f=e.onMouseOver,d=(0,l.default)(e,["trigger","overlay","children","onBlur","onClick","onFocus","onMouseOut","onMouseOver"]);delete d.delay,delete d.delayShow,delete d.delayHide,delete d.defaultOverlayShown;var c=g.default.Children.only(o),p=c.props,h={};return this.state.show&&(h["aria-describedby"]=n.props.id),h.onClick=(0,C.default)(p.onClick,i),a("click",t)&&(h.onClick=(0,C.default)(h.onClick,this.handleToggle)),a("hover",t)&&(h.onMouseOver=(0,C.default)(p.onMouseOver,f,this.handleMouseOver),h.onMouseOut=(0,C.default)(p.onMouseOut,s,this.handleMouseOut)),a("focus",t)&&(h.onFocus=(0,C.default)(p.onFocus,u,this.handleDelayedShow),h.onBlur=(0,C.default)(p.onBlur,r,this.handleDelayedHide)),this._overlay=this.makeOverlay(n,d),(0,v.cloneElement)(c,h)},t}(g.default.Component);N.propTypes=j,N.defaultProps=S,t.default=N,e.exports=t.default},1150:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=n(9),r=o(a),l=n(4),i=o(l),u=n(5),s=o(u),f=n(6),d=o(f),c=n(7),p=o(c),h=n(10),m=o(h),y=n(0),v=o(y),g=n(1),O=o(g),b=n(1151),w=o(b),E=n(20),_=o(E),T=n(452),P=o(T),x=(0,p.default)({},w.default.propTypes,{show:O.default.bool,rootClose:O.default.bool,onHide:O.default.func,animation:O.default.oneOfType([O.default.bool,_.default]),onEnter:O.default.func,onEntering:O.default.func,onEntered:O.default.func,onExit:O.default.func,onExiting:O.default.func,onExited:O.default.func,placement:O.default.oneOf(["top","right","bottom","left"])}),C={animation:P.default,rootClose:!1,show:!1,placement:"right"},M=function(e){function t(){return(0,i.default)(this,t),(0,s.default)(this,e.apply(this,arguments))}return(0,d.default)(t,e),t.prototype.render=function(){var e=this.props,t=e.animation,n=e.children,o=(0,r.default)(e,["animation","children"]),a=!0===t?P.default:t||null,l=void 0;return l=a?n:(0,y.cloneElement)(n,{className:(0,m.default)(n.props.className,"in")}),v.default.createElement(w.default,(0,p.default)({},o,{transition:a}),l)},t}(v.default.Component);M.propTypes=x,M.defaultProps=C,t.default=M,e.exports=t.default},1151:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function a(e,t){var n={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},s=n(1),f=o(s),d=n(20),c=o(d),p=n(0),h=o(p),m=n(454),y=o(m),v=n(1152),g=o(v),O=n(453),b=o(O),w=function(e){function t(n,o){r(this,t);var a=l(this,e.call(this,n,o));return a.handleHidden=function(){if(a.setState({exited:!0}),a.props.onExited){var e;(e=a.props).onExited.apply(e,arguments)}},a.state={exited:!n.show},a.onHiddenListener=a.handleHidden.bind(a),a}return i(t,e),t.prototype.componentWillReceiveProps=function(e){e.show?this.setState({exited:!1}):e.transition||this.setState({exited:!0})},t.prototype.render=function(){var e=this.props,t=e.container,n=e.containerPadding,o=e.target,r=e.placement,l=e.shouldUpdatePosition,i=e.rootClose,u=e.children,s=e.transition,f=a(e,["container","containerPadding","target","placement","shouldUpdatePosition","rootClose","children","transition"]);if(!(f.show||s&&!this.state.exited))return null;var d=u;if(d=h.default.createElement(g.default,{container:t,containerPadding:n,target:o,placement:r,shouldUpdatePosition:l},d),s){var c=f.onExit,p=f.onExiting,m=f.onEnter,v=f.onEntering,O=f.onEntered;d=h.default.createElement(s,{in:f.show,transitionAppear:!0,onExit:c,onExiting:p,onExited:this.onHiddenListener,onEnter:m,onEntering:v,onEntered:O},d)}return i&&(d=h.default.createElement(b.default,{onRootClose:f.onHide},d)),h.default.createElement(y.default,{container:t},d)},t}(h.default.Component);w.propTypes=u({},y.default.propTypes,g.default.propTypes,{show:f.default.bool,rootClose:f.default.bool,onHide:function(e){var t=f.default.func;e.rootClose&&(t=t.isRequired);for(var n=arguments.length,o=Array(n>1?n-1:0),a=1;a<n;a++)o[a-1]=arguments[a];return t.apply(void 0,[e].concat(o))},transition:c.default,onEnter:f.default.func,onEntering:f.default.func,onEntered:f.default.func,onExit:f.default.func,onExiting:f.default.func,onExited:f.default.func}),t.default=w,e.exports=t.default},1152:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function a(e,t){var n={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},s=n(10),f=o(s),d=n(1),c=o(d),p=n(170),h=o(p),m=n(0),y=o(m),v=n(28),g=o(v),O=n(1153),b=o(O),w=n(171),E=o(w),_=n(118),T=o(_),P=function(e){function t(n,o){r(this,t);var a=l(this,e.call(this,n,o));return a.getTarget=function(){var e=a.props.target,t="function"===typeof e?e():e;return t&&g.default.findDOMNode(t)||null},a.maybeUpdatePosition=function(e){var t=a.getTarget();(a.props.shouldUpdatePosition||t!==a._lastTarget||e)&&a.updatePosition(t)},a.state={positionLeft:0,positionTop:0,arrowOffsetLeft:null,arrowOffsetTop:null},a._needsFlush=!1,a._lastTarget=null,a}return i(t,e),t.prototype.componentDidMount=function(){this.updatePosition(this.getTarget())},t.prototype.componentWillReceiveProps=function(){this._needsFlush=!0},t.prototype.componentDidUpdate=function(e){this._needsFlush&&(this._needsFlush=!1,this.maybeUpdatePosition(this.props.placement!==e.placement))},t.prototype.render=function(){var e=this.props,t=e.children,n=e.className,o=a(e,["children","className"]),r=this.state,l=r.positionLeft,i=r.positionTop,s=a(r,["positionLeft","positionTop"]);delete o.target,delete o.container,delete o.containerPadding,delete o.shouldUpdatePosition;var d=y.default.Children.only(t);return(0,m.cloneElement)(d,u({},o,s,{positionLeft:l,positionTop:i,className:(0,f.default)(n,d.props.className),style:u({},d.props.style,{left:l,top:i})}))},t.prototype.updatePosition=function(e){if(this._lastTarget=e,!e)return void this.setState({positionLeft:0,positionTop:0,arrowOffsetLeft:null,arrowOffsetTop:null});var t=g.default.findDOMNode(this),n=(0,E.default)(this.props.container,(0,T.default)(this).body);this.setState((0,b.default)(this.props.placement,t,e,n,this.props.containerPadding))},t}(y.default.Component);P.propTypes={target:c.default.oneOfType([h.default,c.default.func]),container:c.default.oneOfType([h.default,c.default.func]),containerPadding:c.default.number,placement:c.default.oneOf(["top","right","bottom","left"]),shouldUpdatePosition:c.default.bool},P.displayName="Position",P.defaultProps={containerPadding:0,placement:"right",shouldUpdatePosition:!1},t.default=P,e.exports=t.default},1153:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function a(e){var t=void 0,n=void 0,o=void 0;if("BODY"===e.tagName)t=window.innerWidth,n=window.innerHeight,o=(0,p.default)((0,m.default)(e).documentElement)||(0,p.default)(e);else{var a=(0,s.default)(e);t=a.width,n=a.height,o=(0,p.default)(e)}return{width:t,height:n,scroll:o}}function r(e,t,n,o){var r=a(n),l=r.scroll,i=r.height,u=e-o-l,s=e+o-l+t;return u<0?-u:s>i?i-s:0}function l(e,t,n,o){var r=a(n),l=r.width,i=e-o,u=e+o+t;return i<0?-i:u>l?l-u:0}function i(e,t,n,o,a){var i="BODY"===o.tagName?(0,s.default)(n):(0,d.default)(n,o),u=(0,s.default)(t),f=u.height,c=u.width,p=void 0,h=void 0,m=void 0,y=void 0;if("left"===e||"right"===e){h=i.top+(i.height-f)/2,p="left"===e?i.left-c:i.left+i.width;var v=r(h,f,o,a);h+=v,y=50*(1-2*v/f)+"%",m=void 0}else{if("top"!==e&&"bottom"!==e)throw new Error('calcOverlayPosition(): No such placement of "'+e+'" found.');p=i.left+(i.width-c)/2,h="top"===e?i.top-f:i.top+i.height;var g=l(p,c,o,a);p+=g,m=50*(1-2*g/c)+"%",y=void 0}return{positionLeft:p,positionTop:h,arrowOffsetLeft:m,arrowOffsetTop:y}}t.__esModule=!0,t.default=i;var u=n(1059),s=o(u),f=n(1154),d=o(f),c=n(1060),p=o(c),h=n(118),m=o(h);e.exports=t.default},1154:function(e,t,n){"use strict";function o(e){return e.nodeName&&e.nodeName.toLowerCase()}function a(e,t){var n,a={top:0,left:0};return"fixed"===(0,d.default)(e,"position")?n=e.getBoundingClientRect():(t=t||(0,u.default)(e),n=(0,i.default)(e),"html"!==o(t)&&(a=(0,i.default)(t)),a.top+=parseInt((0,d.default)(t,"borderTopWidth"),10)-(0,s.default)(t)||0,a.left+=parseInt((0,d.default)(t,"borderLeftWidth"),10)-(0,f.default)(t)||0),(0,l.default)({},n,{top:n.top-a.top-(parseInt((0,d.default)(e,"marginTop"),10)||0),left:n.left-a.left-(parseInt((0,d.default)(e,"marginLeft"),10)||0)})}var r=n(19);t.__esModule=!0,t.default=a;var l=r(n(1155)),i=r(n(1059)),u=r(n(1156)),s=r(n(1060)),f=r(n(1157)),d=r(n(264));e.exports=t.default},1155:function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},n.apply(this,arguments)}e.exports=n},1156:function(e,t,n){"use strict";function o(e){return e.nodeName&&e.nodeName.toLowerCase()}function a(e){for(var t=(0,l.default)(e),n=e&&e.offsetParent;n&&"html"!==o(e)&&"static"===(0,i.default)(n,"position");)n=n.offsetParent;return n||t.documentElement}var r=n(19);t.__esModule=!0,t.default=a;var l=r(n(116)),i=r(n(264));e.exports=t.default},1157:function(e,t,n){"use strict";function o(e,t){var n=(0,r.default)(e);if(void 0===t)return n?"pageXOffset"in n?n.pageXOffset:n.document.documentElement.scrollLeft:e.scrollLeft;n?n.scrollTo(t,"pageYOffset"in n?n.pageYOffset:n.document.documentElement.scrollTop):e.scrollLeft=t}var a=n(19);t.__esModule=!0,t.default=o;var r=a(n(440));e.exports=t.default},1158:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=n(7),r=o(a),l=n(9),i=o(l),u=n(4),s=o(u),f=n(5),d=o(f),c=n(6),p=o(c),h=n(10),m=o(h),y=n(0),v=o(y),g=n(1),O=o(g),b=n(451),w=o(b),E=n(11),_={id:(0,w.default)(O.default.oneOfType([O.default.string,O.default.number])),placement:O.default.oneOf(["top","right","bottom","left"]),positionTop:O.default.oneOfType([O.default.number,O.default.string]),positionLeft:O.default.oneOfType([O.default.number,O.default.string]),arrowOffsetTop:O.default.oneOfType([O.default.number,O.default.string]),arrowOffsetLeft:O.default.oneOfType([O.default.number,O.default.string])},T={placement:"right"},P=function(e){function t(){return(0,s.default)(this,t),(0,d.default)(this,e.apply(this,arguments))}return(0,p.default)(t,e),t.prototype.render=function(){var e,t=this.props,n=t.placement,o=t.positionTop,a=t.positionLeft,l=t.arrowOffsetTop,u=t.arrowOffsetLeft,s=t.className,f=t.style,d=t.children,c=(0,i.default)(t,["placement","positionTop","positionLeft","arrowOffsetTop","arrowOffsetLeft","className","style","children"]),p=(0,E.splitBsProps)(c),h=p[0],y=p[1],g=(0,r.default)({},(0,E.getClassSet)(h),(e={},e[n]=!0,e)),O=(0,r.default)({top:o,left:a},f),b={top:l,left:u};return v.default.createElement("div",(0,r.default)({},y,{role:"tooltip",className:(0,m.default)(s,g),style:O}),v.default.createElement("div",{className:(0,E.prefix)(h,"arrow"),style:b}),v.default.createElement("div",{className:(0,E.prefix)(h,"inner")},d))},t}(v.default.Component);P.propTypes=_,P.defaultProps=T,t.default=(0,E.bsClass)("tooltip",P),e.exports=t.default},441:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"titleWithJSONButton",function(){return s}),n.d(t,"TitleWithJSONButton",function(){return u});var o=n(1),a=n.n(o),r=n(0),l=n.n(r),i=n(169),u=function(e){var t=e.title,n=e.url;return l.a.createElement("div",null,l.a.createElement("span",null,t),l.a.createElement("span",{className:"pull-right"},l.a.createElement(i.default,{url:n})))};u.propTypes={title:a.a.oneOfType([a.a.string,a.a.object]).isRequired,url:a.a.string.isRequired};var s=function(e,t){return l.a.createElement(u,{title:e,url:t})}},445:function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function r(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=n(0),i=n.n(l),u=n(1),s=n.n(u),f=n(172),d=n.n(f),c=n(1149),p=n.n(c),h=n(1158),m=n.n(h),y=n(455),v=n.n(y),g=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),O=i.a.createElement(d.a,{glyph:"copy",style:{fontSize:"small",marginLeft:5}}),b=i.a.createElement(m.a,{id:"tooltip-copy"},"Copy to Clipboard"),w=i.a.createElement(m.a,{id:"tooltip-copied",className:"in"},"Copied!"),E=function(e){function t(e,n){o(this,t);var r=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n));return r.state={copied:!1},r.handleCopy=r.handleCopy.bind(r),r}return r(t,e),g(t,[{key:"handleCopy",value:function(){var e=this;this.setState({copied:!0}),setTimeout(function(){return e.setState({copied:!1})},1e4)}},{key:"render",value:function(){return i.a.createElement(p.a,{delayShow:300,onMouseOut:this.handleMouseOut,overlay:this.state.copied?w:b},i.a.createElement(v.a,{text:this.props.text,onCopy:this.handleCopy},O))}}]),t}(i.a.Component);E.defaultProps={text:""},E.propTypes={text:s.a.string},t.default=E},446:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),a=n.n(o),r=n(1),l=n.n(r),i={height:75,width:75},u={height:40,width:150},s=["papayabot","papayaswap","ripplefox"],f=function(e){var t=e.name,n=e.type,o=void 0===n?"anchor":n,r=t.toLowerCase(),l="/img/"+r+".png",f="anchor"===o||-1!==s.indexOf(r)?i:u;return a.a.createElement("span",null,a.a.createElement("img",{src:l,alt:t,title:t,height:f.height,width:f.width}))};f.propTypes={name:l.a.string.isRequired,type:l.a.string},t.default=f},473:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),a=n.n(o),r=n(1),l=n.n(r),i=n(182),u=function(e){var t=e.domain,n="https://"+t+"/.well-known/stellar.toml";return a.a.createElement("span",{className:"stellarToml"},a.a.createElement(i.default,{label:"server.toml",url:n}))};u.propTypes={domain:l.a.string.isRequired},t.default=u},485:function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function r(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=n(0),i=n.n(l),u=n(57),s=n.n(u),f=n(444),d=n.n(f),c=n(85),p=n.n(c),h=n(168),m=n.n(h),y=n(12),v=n(50),g=n(1),O=n.n(g),b=n(29),w=n(445),E=n(446),_=n(181),T=n(473),P=n(441),x=n(40),C=n(185),M=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),j=C.a.anchors,S=function(e,t){return"https://stellarterm.com/#exchange/ROS-native/"+e+"-"+t},N=function(e){var t=e.assets;return i.a.createElement("span",null,Object.keys(t).map(function(e){return i.a.createElement("div",{key:e},e)}))},D=function(e){var t=e.assets;return i.a.createElement("span",null,Object.keys(t).map(function(e){var n=Object(x.a)(t[e]);return i.a.createElement("div",{key:e},i.a.createElement(b.default,{account:n,hideKnown:!0}),i.a.createElement(w.default,{text:n}))}))},L=function(e){var t=e.assets,n=e.domain;return i.a.createElement("span",null,Object.keys(t).map(function(e){return i.a.createElement("div",{key:e},i.a.createElement("a",{href:S(e,n),target:"_blank"},"Trade"))}))},k=function(e){var t=e.assets,n=e.domain,o=e.displayName,a=e.website;return i.a.createElement("tr",{className:"directoryRow"},i.a.createElement("td",null,i.a.createElement(v.Link,{to:"/anchor/"+n},i.a.createElement(E.default,{name:n,type:"anchor"}))),i.a.createElement("td",{className:"anchorLinkCol"},i.a.createElement("div",null,i.a.createElement(v.Link,{to:"/anchor/"+n},o)),i.a.createElement("div",null,i.a.createElement("a",{href:a,target:"_blank"},a,i.a.createElement(_.default,null))),i.a.createElement("div",null,i.a.createElement(T.default,{domain:n}))),i.a.createElement("td",null,i.a.createElement(N,{assets:t})),i.a.createElement("td",null,i.a.createElement(D,{assets:t})),i.a.createElement("td",null,i.a.createElement(L,{assets:t,domain:n})))};k.propTypes={assets:O.a.object.isRequired,domain:O.a.string.isRequired,website:O.a.string.isRequired};var H=function(e){function t(){return o(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return r(t,e),M(t,[{key:"render",value:function(){if(!j)return null;Object(x.g)("Anchors");var e=this.props.intl.formatMessage,t=Object(P.titleWithJSONButton)(e({id:"anchors"}),"https://raw.githubusercontent.com/irisli/stellarterm/master/directory/directory.json");return i.a.createElement(s.a,null,i.a.createElement(p.a,null,i.a.createElement(d.a,{header:t},i.a.createElement(m.a,null,i.a.createElement("thead",null,i.a.createElement("tr",null,i.a.createElement("th",null),i.a.createElement("th",null),i.a.createElement("th",null,i.a.createElement(y.b,{id:"asset"})),i.a.createElement("th",null,i.a.createElement(y.b,{id:"issuer"})),i.a.createElement("th",null,"StellarTerm"))),i.a.createElement("tbody",null,Object.keys(j).map(function(e){var t=j[e];return i.a.createElement(k,{key:e,assets:t.assets,domain:e,displayName:t.displayName,website:t.website})}))))))}}]),t}(i.a.Component);t.default=Object(y.h)(H)}});
//# sourceMappingURL=6.f3cf425e.chunk.js.map