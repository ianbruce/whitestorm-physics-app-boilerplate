!function(e){function t(t){for(var o,a,s=t[0],c=t[1],l=t[2],u=0,d=[];u<s.length;u++)a=s[u],r[a]&&d.push(r[a][0]),r[a]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);for(p&&p(t);d.length;)d.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],o=!0,s=1;s<n.length;s++){var c=n[s];0!==r[c]&&(o=!1)}o&&(i.splice(t--,1),e=a(a.s=n[0]))}return e}var o={},r={1:0},i=[];function a(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=o,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},a.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var s=window.webpackJsonp=window.webpackJsonp||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var p=c;i.push([7,0]),n()}([,,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.mobileCheck=function(){var e=!1;return t=navigator.userAgent||navigator.vendor||window.opera,(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(t)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0,4)))&&(e=!0),e;var t},t.hexToRgb=function(e){var t=parseInt(e,16),n=t>>8&255,o=255&t;return"rgba(".concat(t>>16&255,", ").concat(n,", ").concat(o,", 1.0)")}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Scene=void 0;var o=s(n(1)),r=s(n(0)),i=s(n(2)),a=n(3);function s(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var o=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};o.get||o.set?Object.defineProperty(t,n,o):t[n]=e[n]}return t.default=e,t}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var p=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.isMobile=(0,a.mobileCheck)();var t={camera:{position:new r.Vector3(0,10,50),far:this.isMobile?200:1e3},rendering:{bgColor:1450281,pixelRatio:!this.isMobile&&window.devicePixelRatio,renderer:{antialias:!this.isMobile,shadowMap:{type:this.isMobile?r.BasicShadowMap:r.PCFSoftShadowMap}}},physics:{gravity:new r.Vector3(0,-100,0),ammo:"https://rawgit.com/WhitestormJS/physics-module-ammonext/master/vendor/ammo.js"}};this.setup(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){c(e,t,n[t])})}return e}({useControls:!0},t))}var t,n,s;return t=e,(n=[{key:"setup",value:function(e){var t=e.camera,n=e.rendering,r=e.physics,a=e.useControls;this.app=new o.App([new o.ElementModule,new o.SceneModule,new o.DefineModule("camera",new o.PerspectiveCamera(Object.assign(t,{fov:75}))),new o.RenderingModule(n,{shadow:!0}),new i.WorldModule(r),a?new o.OrbitControlsModule:null,new o.ResizeModule])}},{key:"start",value:function(){this.app.start()}},{key:"addAmbient",value:function(e){new o.AmbientLight({intensity:e}).addTo(this.app)}},{key:"addBasicLights",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:.5,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[0,10,10],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:100,r=arguments.length>3?arguments[3]:void 0;return this.addAmbient(e),new o.PointLight({intensity:e,distance:n,shadow:Object.assign({fov:90},r),position:t}).addTo(this.app)}},{key:"addPlane",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:100;return new o.Plane({geometry:{width:e,height:e},modules:[new i.PlaneModule({mass:0})],material:new r.MeshPhongMaterial({color:4489099}),rotation:{x:-Math.PI/2}}).addTo(this.app)}},{key:"addBoxPlane",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:100,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4489099;return new o.Box({geometry:{width:e,height:1,depth:e},modules:[new i.BoxModule({mass:0})],material:new r.MeshPhongMaterial({color:t})}).addTo(this.app)}}])&&l(t.prototype,n),s&&l(t,s),e}();t.Scene=p},,,function(e,t,n){"use strict";var o=a(n(1)),r=a(n(0)),i=a(n(2));function a(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var o=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};o.get||o.set?Object.defineProperty(t,n,o):t[n]=e[n]}return t.default=e,t}var s=new(n(4).Scene),c=15921906;setInterval(function(){for(var e=function(e){var t=function(){var e=new o.Box({geometry:[2,2,2],modules:[new i.BoxModule({mass:10})],material:new r.MeshLambertMaterial({color:c}),position:[10,10,20]});return e.addTo(s.app),e}();setTimeout(function(){return s.app.remove(t)},5e3)},t=0;t<20;t++)e()},1e3),s.addPlane(),s.addBasicLights(),s.start()}]);