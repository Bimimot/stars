!function(t){var e={};function a(i){if(e[i])return e[i].exports;var n=e[i]={i:i,l:!1,exports:{}};return t[i].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=e,a.d=function(t,e,i){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(a.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)a.d(i,n,function(e){return t[e]}.bind(null,n));return i},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="",a(a.s=1)}([function(t,e,a){},function(t,e,a){"use strict";a.r(e);a(0);function i(t,e){for(var a=0;a<e.length;a++){var i=e[a];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var n=function(){function t(e,a,i){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.container=e,this.cloudSize=a,this.clouds=i,this.hCont=e.clientHeight,this.wCont=e.clientWidth,this.curStar=0,this.minDuration=15,this.maxSize=10,this.maxDelay=7,this.maxOpacity="80%",this.minDrawDelay=1e3,this.minDeleteDelay=1e3}var e,a,n;return e=t,(a=[{key:"_calcStart",value:function(){this.curStar===this.cloudSize&&(this.curStar=0),this.curStar=this.curStar+1,1===this.curStar&&(this.startX=.3*this.wCont+Math.round(Math.random()*this.wCont*.4),this.startY=.4*this.hCont+Math.round(Math.random()*this.hCont*.2))}},{key:"_calcFinish",value:function(){var t=Math.round(360*Math.random());return{addX:Math.round(Math.cos(t)*this.wCont),addY:Math.round(Math.sin(t)*this.hCont)}}},{key:"_calcDuration",value:function(){this.duration=this.minDuration+4*Math.round(Math.random()*this.minDuration)}},{key:"_calcSize",value:function(){this.size=1+Math.round(Math.random()*(this.maxSize-1))}},{key:"_calcDelay",value:function(){this.delay=Math.round(10*Math.random())+"s"}},{key:"_calcColor",value:function(){this.color="#f4f4f4",Math.random()>.9&&(this.color="#118c4e")}},{key:"_eraseStar",value:function(t){var e=this,a=1e3*this.duration+this.minDrawDelay;setTimeout((function(){t.remove(),e._makeStar()}),a)}},{key:"_makeStar",value:function(){if(1===this.GalaxyFlag){var t=document.createElement("div");t.classList.add("newStar"),this._calcStart(),t.style.left=this.startX+"px",t.style.top=this.startY+"px",this._calcSize(),t.style.height=this.size+"px",t.style.width=this.size+"px",this._calcColor(),t.style.background=this.color,this._calcDelay(),this._calcDuration(),t.style.transition="transform "+this.duration+"s linear,opacity 3s "+this.delay,this.container.append(t),this._moveStar(t),this._eraseStar(t)}}},{key:"_moveStar",value:function(t){var e=this,a=this._calcFinish();setTimeout((function(){t.style.transform="translateX("+a.addX+"px) translateY("+a.addY+"px",t.style.opacity=e.maxOpacity}),this.minDrawDelay)}},{key:"makeStarsClouds",value:function(){this.GalaxyFlag=1;for(var t=0;t<this.clouds;t++)for(var e=0;e<this.cloudSize;e++)this._makeStar()}},{key:"switchGalaxy",value:function(){this.container.classList.toggle("no-opacity"),this.GalaxyFlag=!this.GalaxyFlag,this.GalaxyFlag?this.makeStarsClouds():this.eraseAllStars()}},{key:"eraseAllStars",value:function(){var t=this;setTimeout((function(){for(;t.container.firstChild;)t.container.removeChild(t.container.firstChild)}),1e3)}}])&&i(e.prototype,a),n&&i(e,n),Object.defineProperty(e,"prototype",{writable:!1}),t}(),r=new n(document.querySelector(".galaxy"),40,2);r.makeStarsClouds();var o=document.querySelector(".switch");o.addEventListener("click",(function(t){o.classList.toggle("switch-on"),r.switchGalaxy()}))}]);