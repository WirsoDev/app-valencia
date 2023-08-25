(function(){const X=document.createElement("link").relList;if(X&&X.supports&&X.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))f(d);new MutationObserver(d=>{for(const r of d)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&f(l)}).observe(document,{childList:!0,subtree:!0});function w(d){const r={};return d.integrity&&(r.integrity=d.integrity),d.referrerPolicy&&(r.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?r.credentials="include":d.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function f(d){if(d.ep)return;d.ep=!0;const r=w(d);fetch(d.href,r)}})();var D=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function M(Y){throw new Error('Could not dynamically require "'+Y+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var k={exports:{}};(function(Y,X){(function(w){Y.exports=w()})(function(){return function w(f,d,r){function l(n,m){if(!d[n]){if(!f[n]){var b=typeof M=="function"&&M;if(!m&&b)return b(n,!0);if(s)return s(n,!0);var a=new Error("Cannot find module '"+n+"'");throw a.code="MODULE_NOT_FOUND",a}var h=d[n]={exports:{}};f[n][0].call(h.exports,function(i){var t=f[n][1][i];return l(t||i)},h,h.exports,w,f,d,r)}return d[n].exports}for(var s=typeof M=="function"&&M,c=0;c<r.length;c++)l(r[c]);return l}({1:[function(w,f,d){var r=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable;function c(m){if(m==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(m)}function n(){try{if(!Object.assign)return!1;var m=new String("abc");if(m[5]="de",Object.getOwnPropertyNames(m)[0]==="5")return!1;for(var b={},a=0;a<10;a++)b["_"+String.fromCharCode(a)]=a;var h=Object.getOwnPropertyNames(b).map(function(t){return b[t]});if(h.join("")!=="0123456789")return!1;var i={};return"abcdefghijklmnopqrst".split("").forEach(function(t){i[t]=t}),Object.keys(Object.assign({},i)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}f.exports=n()?Object.assign:function(m,b){for(var a,h=c(m),i,t=1;t<arguments.length;t++){a=Object(arguments[t]);for(var e in a)l.call(a,e)&&(h[e]=a[e]);if(r){i=r(a);for(var o=0;o<i.length;o++)s.call(a,i[o])&&(h[i[o]]=a[i[o]])}}return h}},{}],2:[function(w,f,d){(function(r){(function(){var l,s,c,n,m,b;typeof performance<"u"&&performance!==null&&performance.now?f.exports=function(){return performance.now()}:typeof r<"u"&&r!==null&&r.hrtime?(f.exports=function(){return(l()-m)/1e6},s=r.hrtime,l=function(){var a;return a=s(),a[0]*1e9+a[1]},n=l(),b=r.uptime()*1e9,m=n-b):Date.now?(f.exports=function(){return Date.now()-c},c=Date.now()):(f.exports=function(){return new Date().getTime()-c},c=new Date().getTime())}).call(this)}).call(this,w("_process"))},{_process:3}],3:[function(w,f,d){var r=f.exports={},l,s;function c(){throw new Error("setTimeout has not been defined")}function n(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?l=setTimeout:l=c}catch{l=c}try{typeof clearTimeout=="function"?s=clearTimeout:s=n}catch{s=n}})();function m(u){if(l===setTimeout)return setTimeout(u,0);if((l===c||!l)&&setTimeout)return l=setTimeout,setTimeout(u,0);try{return l(u,0)}catch{try{return l.call(null,u,0)}catch{return l.call(this,u,0)}}}function b(u){if(s===clearTimeout)return clearTimeout(u);if((s===n||!s)&&clearTimeout)return s=clearTimeout,clearTimeout(u);try{return s(u)}catch{try{return s.call(null,u)}catch{return s.call(this,u)}}}var a=[],h=!1,i,t=-1;function e(){!h||!i||(h=!1,i.length?a=i.concat(a):t=-1,a.length&&o())}function o(){if(!h){var u=m(e);h=!0;for(var y=a.length;y;){for(i=a,a=[];++t<y;)i&&i[t].run();t=-1,y=a.length}i=null,h=!1,b(u)}}r.nextTick=function(u){var y=new Array(arguments.length-1);if(arguments.length>1)for(var g=1;g<arguments.length;g++)y[g-1]=arguments[g];a.push(new p(u,y)),a.length===1&&!h&&m(o)};function p(u,y){this.fun=u,this.array=y}p.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={};function v(){}r.on=v,r.addListener=v,r.once=v,r.off=v,r.removeListener=v,r.removeAllListeners=v,r.emit=v,r.prependListener=v,r.prependOnceListener=v,r.listeners=function(u){return[]},r.binding=function(u){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(u){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}},{}],4:[function(w,f,d){(function(r){for(var l=w("performance-now"),s=typeof window>"u"?r:window,c=["moz","webkit"],n="AnimationFrame",m=s["request"+n],b=s["cancel"+n]||s["cancelRequest"+n],a=0;!m&&a<c.length;a++)m=s[c[a]+"Request"+n],b=s[c[a]+"Cancel"+n]||s[c[a]+"CancelRequest"+n];if(!m||!b){var h=0,i=0,t=[],e=1e3/60;m=function(o){if(t.length===0){var p=l(),v=Math.max(0,e-(p-h));h=v+p,setTimeout(function(){var u=t.slice(0);t.length=0;for(var y=0;y<u.length;y++)if(!u[y].cancelled)try{u[y].callback(h)}catch(g){setTimeout(function(){throw g},0)}},Math.round(v))}return t.push({handle:++i,callback:o,cancelled:!1}),i},b=function(o){for(var p=0;p<t.length;p++)t[p].handle===o&&(t[p].cancelled=!0)}}f.exports=function(o){return m.call(s,o)},f.exports.cancel=function(){b.apply(s,arguments)},f.exports.polyfill=function(){s.requestAnimationFrame=m,s.cancelAnimationFrame=b}}).call(this,typeof D<"u"?D:typeof self<"u"?self:typeof window<"u"?window:{})},{"performance-now":2}],5:[function(w,f,d){var r=function(){function h(i,t){for(var e=0;e<t.length;e++){var o=t[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(i,o.key,o)}}return function(i,t,e){return t&&h(i.prototype,t),e&&h(i,e),i}}();function l(h,i){if(!(h instanceof i))throw new TypeError("Cannot call a class as a function")}var s=w("raf"),c=w("object-assign"),n={propertyCache:{},vendors:[null,["-webkit-","webkit"],["-moz-","Moz"],["-o-","O"],["-ms-","ms"]],clamp:function(i,t,e){return t<e?i<t?t:i>e?e:i:i<e?e:i>t?t:i},data:function(i,t){return n.deserialize(i.getAttribute("data-"+t))},deserialize:function(i){return i==="true"?!0:i==="false"?!1:i==="null"?null:!isNaN(parseFloat(i))&&isFinite(i)?parseFloat(i):i},camelCase:function(i){return i.replace(/-+(.)?/g,function(t,e){return e?e.toUpperCase():""})},accelerate:function(i){n.css(i,"transform","translate3d(0,0,0) rotate(0.0001deg)"),n.css(i,"transform-style","preserve-3d"),n.css(i,"backface-visibility","hidden")},transformSupport:function(i){for(var t=document.createElement("div"),e=!1,o=null,p=!1,v=null,u=null,y=0,g=n.vendors.length;y<g;y++)if(n.vendors[y]!==null?(v=n.vendors[y][0]+"transform",u=n.vendors[y][1]+"Transform"):(v="transform",u="transform"),t.style[u]!==void 0){e=!0;break}switch(i){case"2D":p=e;break;case"3D":if(e){var T=document.body||document.createElement("body"),C=document.documentElement,O=C.style.overflow,S=!1;document.body||(S=!0,C.style.overflow="hidden",C.appendChild(T),T.style.overflow="hidden",T.style.background=""),T.appendChild(t),t.style[u]="translate3d(1px,1px,1px)",o=window.getComputedStyle(t).getPropertyValue(v),p=o!==void 0&&o.length>0&&o!=="none",C.style.overflow=O,T.removeChild(t),S&&(T.removeAttribute("style"),T.parentNode.removeChild(T))}break}return p},css:function(i,t,e){var o=n.propertyCache[t];if(!o){for(var p=0,v=n.vendors.length;p<v;p++)if(n.vendors[p]!==null?o=n.camelCase(n.vendors[p][1]+"-"+t):o=t,i.style[o]!==void 0){n.propertyCache[t]=o;break}}i.style[o]=e}},m=30,b={relativeInput:!1,clipRelativeInput:!1,inputElement:null,hoverOnly:!1,calibrationThreshold:100,calibrationDelay:500,supportDelay:500,calibrateX:!1,calibrateY:!0,invertX:!0,invertY:!0,limitX:!1,limitY:!1,scalarX:10,scalarY:10,frictionX:.1,frictionY:.1,originX:.5,originY:.5,pointerEvents:!1,precision:1,onReady:null,selector:null},a=function(){function h(i,t){l(this,h),this.element=i;var e={calibrateX:n.data(this.element,"calibrate-x"),calibrateY:n.data(this.element,"calibrate-y"),invertX:n.data(this.element,"invert-x"),invertY:n.data(this.element,"invert-y"),limitX:n.data(this.element,"limit-x"),limitY:n.data(this.element,"limit-y"),scalarX:n.data(this.element,"scalar-x"),scalarY:n.data(this.element,"scalar-y"),frictionX:n.data(this.element,"friction-x"),frictionY:n.data(this.element,"friction-y"),originX:n.data(this.element,"origin-x"),originY:n.data(this.element,"origin-y"),pointerEvents:n.data(this.element,"pointer-events"),precision:n.data(this.element,"precision"),relativeInput:n.data(this.element,"relative-input"),clipRelativeInput:n.data(this.element,"clip-relative-input"),hoverOnly:n.data(this.element,"hover-only"),inputElement:document.querySelector(n.data(this.element,"input-element")),selector:n.data(this.element,"selector")};for(var o in e)e[o]===null&&delete e[o];c(this,b,e,t),this.inputElement||(this.inputElement=this.element),this.calibrationTimer=null,this.calibrationFlag=!0,this.enabled=!1,this.depthsX=[],this.depthsY=[],this.raf=null,this.bounds=null,this.elementPositionX=0,this.elementPositionY=0,this.elementWidth=0,this.elementHeight=0,this.elementCenterX=0,this.elementCenterY=0,this.elementRangeX=0,this.elementRangeY=0,this.calibrationX=0,this.calibrationY=0,this.inputX=0,this.inputY=0,this.motionX=0,this.motionY=0,this.velocityX=0,this.velocityY=0,this.onMouseMove=this.onMouseMove.bind(this),this.onDeviceOrientation=this.onDeviceOrientation.bind(this),this.onDeviceMotion=this.onDeviceMotion.bind(this),this.onOrientationTimer=this.onOrientationTimer.bind(this),this.onMotionTimer=this.onMotionTimer.bind(this),this.onCalibrationTimer=this.onCalibrationTimer.bind(this),this.onAnimationFrame=this.onAnimationFrame.bind(this),this.onWindowResize=this.onWindowResize.bind(this),this.windowWidth=null,this.windowHeight=null,this.windowCenterX=null,this.windowCenterY=null,this.windowRadiusX=null,this.windowRadiusY=null,this.portrait=!1,this.desktop=!navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i),this.motionSupport=!!window.DeviceMotionEvent&&!this.desktop,this.orientationSupport=!!window.DeviceOrientationEvent&&!this.desktop,this.orientationStatus=0,this.motionStatus=0,this.initialise()}return r(h,[{key:"initialise",value:function(){this.transform2DSupport===void 0&&(this.transform2DSupport=n.transformSupport("2D"),this.transform3DSupport=n.transformSupport("3D")),this.transform3DSupport&&n.accelerate(this.element);var t=window.getComputedStyle(this.element);t.getPropertyValue("position")==="static"&&(this.element.style.position="relative"),this.pointerEvents||(this.element.style.pointerEvents="none"),this.updateLayers(),this.updateDimensions(),this.enable(),this.queueCalibration(this.calibrationDelay)}},{key:"doReadyCallback",value:function(){this.onReady&&this.onReady()}},{key:"updateLayers",value:function(){this.selector?this.layers=this.element.querySelectorAll(this.selector):this.layers=this.element.children,this.layers.length||console.warn("ParallaxJS: Your scene does not have any layers."),this.depthsX=[],this.depthsY=[];for(var t=0;t<this.layers.length;t++){var e=this.layers[t];this.transform3DSupport&&n.accelerate(e),e.style.position=t?"absolute":"relative",e.style.display="block",e.style.left=0,e.style.top=0;var o=n.data(e,"depth")||0;this.depthsX.push(n.data(e,"depth-x")||o),this.depthsY.push(n.data(e,"depth-y")||o)}}},{key:"updateDimensions",value:function(){this.windowWidth=window.innerWidth,this.windowHeight=window.innerHeight,this.windowCenterX=this.windowWidth*this.originX,this.windowCenterY=this.windowHeight*this.originY,this.windowRadiusX=Math.max(this.windowCenterX,this.windowWidth-this.windowCenterX),this.windowRadiusY=Math.max(this.windowCenterY,this.windowHeight-this.windowCenterY)}},{key:"updateBounds",value:function(){this.bounds=this.inputElement.getBoundingClientRect(),this.elementPositionX=this.bounds.left,this.elementPositionY=this.bounds.top,this.elementWidth=this.bounds.width,this.elementHeight=this.bounds.height,this.elementCenterX=this.elementWidth*this.originX,this.elementCenterY=this.elementHeight*this.originY,this.elementRangeX=Math.max(this.elementCenterX,this.elementWidth-this.elementCenterX),this.elementRangeY=Math.max(this.elementCenterY,this.elementHeight-this.elementCenterY)}},{key:"queueCalibration",value:function(t){clearTimeout(this.calibrationTimer),this.calibrationTimer=setTimeout(this.onCalibrationTimer,t)}},{key:"enable",value:function(){this.enabled||(this.enabled=!0,this.orientationSupport?(this.portrait=!1,window.addEventListener("deviceorientation",this.onDeviceOrientation),this.detectionTimer=setTimeout(this.onOrientationTimer,this.supportDelay)):this.motionSupport?(this.portrait=!1,window.addEventListener("devicemotion",this.onDeviceMotion),this.detectionTimer=setTimeout(this.onMotionTimer,this.supportDelay)):(this.calibrationX=0,this.calibrationY=0,this.portrait=!1,window.addEventListener("mousemove",this.onMouseMove),this.doReadyCallback()),window.addEventListener("resize",this.onWindowResize),this.raf=s(this.onAnimationFrame))}},{key:"disable",value:function(){this.enabled&&(this.enabled=!1,this.orientationSupport?window.removeEventListener("deviceorientation",this.onDeviceOrientation):this.motionSupport?window.removeEventListener("devicemotion",this.onDeviceMotion):window.removeEventListener("mousemove",this.onMouseMove),window.removeEventListener("resize",this.onWindowResize),s.cancel(this.raf))}},{key:"calibrate",value:function(t,e){this.calibrateX=t===void 0?this.calibrateX:t,this.calibrateY=e===void 0?this.calibrateY:e}},{key:"invert",value:function(t,e){this.invertX=t===void 0?this.invertX:t,this.invertY=e===void 0?this.invertY:e}},{key:"friction",value:function(t,e){this.frictionX=t===void 0?this.frictionX:t,this.frictionY=e===void 0?this.frictionY:e}},{key:"scalar",value:function(t,e){this.scalarX=t===void 0?this.scalarX:t,this.scalarY=e===void 0?this.scalarY:e}},{key:"limit",value:function(t,e){this.limitX=t===void 0?this.limitX:t,this.limitY=e===void 0?this.limitY:e}},{key:"origin",value:function(t,e){this.originX=t===void 0?this.originX:t,this.originY=e===void 0?this.originY:e}},{key:"setInputElement",value:function(t){this.inputElement=t,this.updateDimensions()}},{key:"setPosition",value:function(t,e,o){e=e.toFixed(this.precision)+"px",o=o.toFixed(this.precision)+"px",this.transform3DSupport?n.css(t,"transform","translate3d("+e+","+o+",0)"):this.transform2DSupport?n.css(t,"transform","translate("+e+","+o+")"):(t.style.left=e,t.style.top=o)}},{key:"onOrientationTimer",value:function(){this.orientationSupport&&this.orientationStatus===0?(this.disable(),this.orientationSupport=!1,this.enable()):this.doReadyCallback()}},{key:"onMotionTimer",value:function(){this.motionSupport&&this.motionStatus===0?(this.disable(),this.motionSupport=!1,this.enable()):this.doReadyCallback()}},{key:"onCalibrationTimer",value:function(){this.calibrationFlag=!0}},{key:"onWindowResize",value:function(){this.updateDimensions()}},{key:"onAnimationFrame",value:function(){this.updateBounds();var t=this.inputX-this.calibrationX,e=this.inputY-this.calibrationY;(Math.abs(t)>this.calibrationThreshold||Math.abs(e)>this.calibrationThreshold)&&this.queueCalibration(0),this.portrait?(this.motionX=this.calibrateX?e:this.inputY,this.motionY=this.calibrateY?t:this.inputX):(this.motionX=this.calibrateX?t:this.inputX,this.motionY=this.calibrateY?e:this.inputY),this.motionX*=this.elementWidth*(this.scalarX/100),this.motionY*=this.elementHeight*(this.scalarY/100),isNaN(parseFloat(this.limitX))||(this.motionX=n.clamp(this.motionX,-this.limitX,this.limitX)),isNaN(parseFloat(this.limitY))||(this.motionY=n.clamp(this.motionY,-this.limitY,this.limitY)),this.velocityX+=(this.motionX-this.velocityX)*this.frictionX,this.velocityY+=(this.motionY-this.velocityY)*this.frictionY;for(var o=0;o<this.layers.length;o++){var p=this.layers[o],v=this.depthsX[o],u=this.depthsY[o],y=this.velocityX*(v*(this.invertX?-1:1)),g=this.velocityY*(u*(this.invertY?-1:1));this.setPosition(p,y,g)}this.raf=s(this.onAnimationFrame)}},{key:"rotate",value:function(t,e){var o=(t||0)/m,p=(e||0)/m,v=this.windowHeight>this.windowWidth;this.portrait!==v&&(this.portrait=v,this.calibrationFlag=!0),this.calibrationFlag&&(this.calibrationFlag=!1,this.calibrationX=o,this.calibrationY=p),this.inputX=o,this.inputY=p}},{key:"onDeviceOrientation",value:function(t){var e=t.beta,o=t.gamma;e!==null&&o!==null&&(this.orientationStatus=1,this.rotate(e,o))}},{key:"onDeviceMotion",value:function(t){var e=t.rotationRate.beta,o=t.rotationRate.gamma;e!==null&&o!==null&&(this.motionStatus=1,this.rotate(e,o))}},{key:"onMouseMove",value:function(t){var e=t.clientX,o=t.clientY;if(this.hoverOnly&&(e<this.elementPositionX||e>this.elementPositionX+this.elementWidth||o<this.elementPositionY||o>this.elementPositionY+this.elementHeight)){this.inputX=0,this.inputY=0;return}this.relativeInput?(this.clipRelativeInput&&(e=Math.max(e,this.elementPositionX),e=Math.min(e,this.elementPositionX+this.elementWidth),o=Math.max(o,this.elementPositionY),o=Math.min(o,this.elementPositionY+this.elementHeight)),this.elementRangeX&&this.elementRangeY&&(this.inputX=(e-this.elementPositionX-this.elementCenterX)/this.elementRangeX,this.inputY=(o-this.elementPositionY-this.elementCenterY)/this.elementRangeY)):this.windowRadiusX&&this.windowRadiusY&&(this.inputX=(e-this.windowCenterX)/this.windowRadiusX,this.inputY=(o-this.windowCenterY)/this.windowRadiusY)}},{key:"destroy",value:function(){this.disable(),clearTimeout(this.calibrationTimer),clearTimeout(this.detectionTimer),this.element.removeAttribute("style");for(var t=0;t<this.layers.length;t++)this.layers[t].removeAttribute("style");delete this.element,delete this.layers}},{key:"version",value:function(){return"3.1.0"}}]),h}();f.exports=a},{"object-assign":1,raf:4}]},{},[5])(5)})})(k);function x(Y,X){const w=["#50543D","#D2B07E","#622C25","#E1CDB8"],f=["100px","80px","70px","60px","50px","30px","20px"].reverse();let d=Math.floor(X/f.length),r=0,l=0;for(let c=0;c<X;c++){const n=document.createElement("div");n.classList.add("ball"),n.id=`ball${c}`,n.style.backgroundColor=w[Math.floor(Math.random()*w.length)];let m=f[r];n.style.width=m,n.style.height=m,Y.appendChild(n);const b=Math.floor(Math.random()*(Y.clientWidth-30)),a=Math.floor(Math.random()*(Y.clientHeight-30));n.style.left=`${b}px`,n.style.top=`${a}px`,l==d?(l=0,r++):l++}const s=document.querySelectorAll(".ball");for(let c=0;c<s.length;c++){const n=s[c].offsetWidth;n==20&&(s[c].style.filter="blur(10px)"),n==30&&(s[c].style.filter="blur(5px)"),n==50&&(s[c].style.filter="blur(2px)")}}function R(){let Y=document.querySelectorAll(".ball");const X=document.querySelector("#test");window.addEventListener("deviceorientation",w);function w(f){f.absolute;var d=Math.round(f.alpha),r=Math.round(f.beta),l=Math.round(f.gamma);Y.forEach(s=>{console.log("----------"),console.log(s.offsetLeft,s.offsetTop),s.style.transform=`translateY(${l})`,s.style.transform=`translateX(${r})`}),X.innerHTML=`x${r} : y${l}`,console.log(r,l,d)}}const E=document.querySelector(".app-balls");function P(){x(E,80),R()}P();