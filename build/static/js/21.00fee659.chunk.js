webpackJsonp([21],{476:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"default",function(){return y}),n.d(t,"LumensRates",function(){return d});var u=n(0),a=n.n(u),c=n(1),s=n.n(c),p=n(277),l=n.n(p),f=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),h=l()().fetch,y=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),f(t,[{key:"componentDidMount",value:function(){var e=this;this.updatePrice(),this.intervalId=setInterval(function(){return e.updatePrice.bind(e)},3e5)}},{key:"componentWillUnmount",value:function(){clearInterval(this.intervalId)}},{key:"updatePrice",value:function(){var e=this;h("https://api.coinmarketcap.com/v1/ticker/stellar/").then(function(e){return e.json()}).then(function(t){var n=t[0],r={change:n.percent_change_24h,usd:n.price_usd};e.setState(r)}).catch(function(e){console.error("Failed to fetch price: ["+e+"]"),console.error("stack: ["+e.stack+"]")})}},{key:"render",value:function(){return this.state?a.a.createElement(d,this.state):null}}]),t}(a.a.PureComponent),d=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),f(t,[{key:"isPositive",value:function(e){var t=Number.parseFloat(e);return!1===Number.isNaN(t)&&Number(t)>=0}},{key:"renderChange",value:function(e){var t=this.isPositive(e),n=(t?"+":"")+this.props.change+"%",r={color:t?"#00c292":"#fb9678"};return a.a.createElement("span",{style:r},n)}},{key:"render",value:function(){return a.a.createElement("span",null,"ROS/USD: ",this.props.usd," ",this.renderChange(this.props.change))}}]),t}(a.a.PureComponent);d.propTypes={change:s.a.string.isRequired,usd:s.a.string.isRequired}}});
//# sourceMappingURL=21.00fee659.chunk.js.map