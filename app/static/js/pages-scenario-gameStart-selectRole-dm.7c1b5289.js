(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-scenario-gameStart-selectRole-dm"],{"01c7":function(t,e,n){"use strict";n.r(e);var a=n("77e8"),i=n.n(a);for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);e["default"]=i.a},"07da":function(t,e,n){"use strict";n.r(e);var a=n("1ca4"),i=n.n(a);for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);e["default"]=i.a},"0aed":function(t,e,n){"use strict";var a=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("96cf");var i=a(n("1da1")),r=a(n("3e67")),o=a(n("7be1")),s={components:{waitIcon:o.default},data:function(){return{}},onReady:function(){this.make()},methods:{make:function(){var t=this;return(0,i.default)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r.default.make({canvasId:"qrcode",componentInstance:t,text:"uQRCode",size:110,margin:10,backgroundColor:"#ffffff",foregroundColor:"#000000",fileType:"jpg",correctLevel:r.default.errorCorrectLevel.H,success:function(t){console.log(t)}}),r.default.make({canvasId:"qrcode",componentInstance:t,text:"uQRCode",size:110,margin:10,backgroundColor:"#ffffff",foregroundColor:"#000000",fileType:"jpg",correctLevel:r.default.errorCorrectLevel.H}).then((function(t){console.log(t)})),e.next=4,r.default.make({canvasId:"qrcode",componentInstance:t,text:"uQRCode",size:110,margin:10,backgroundColor:"#ffffff",foregroundColor:"#000000",fileType:"jpg",correctLevel:r.default.errorCorrectLevel.H});case 4:n=e.sent,console.log(n);case 6:case"end":return e.stop()}}),e)})))()}}};e.default=s},"0cf7":function(t,e,n){"use strict";var a=n("635b"),i=n.n(a);i.a},"15ba":function(t,e,n){var a=n("9953");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("ad0c2036",a,!0,{sourceMap:!1,shadowMode:!1})},"1ca4":function(t,e){},"1dbb":function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.uni-status-bar[data-v-7dba5570]{width:%?750?%;height:20px}',""]),t.exports=e},"365b":function(t,e,n){"use strict";var a;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return a}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"uni-status-bar",style:{height:t.statusBarHeight}},[t._t("default")],2)},r=[]},"3e67":function(t,e,n){"use strict";n("d3b7"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={};(function(){function t(t){this.mode=n.MODE_8BIT_BYTE,this.data=t}function e(t,e){this.typeNumber=t,this.errorCorrectLevel=e,this.modules=null,this.moduleCount=0,this.dataCache=null,this.dataList=new Array}t.prototype={getLength:function(t){return this.data.length},write:function(t){for(var e=0;e<this.data.length;e++)t.put(this.data.charCodeAt(e),8)}},e.prototype={addData:function(e){var n=new t(e);this.dataList.push(n),this.dataCache=null},isDark:function(t,e){if(t<0||this.moduleCount<=t||e<0||this.moduleCount<=e)throw new Error(t+","+e);return this.modules[t][e]},getModuleCount:function(){return this.moduleCount},make:function(){if(this.typeNumber<1){var t=1;for(t=1;t<40;t++){for(var e=c.getRSBlocks(t,this.errorCorrectLevel),n=new d,a=0,i=0;i<e.length;i++)a+=e[i].dataCount;for(i=0;i<this.dataList.length;i++){var r=this.dataList[i];n.put(r.mode,4),n.put(r.getLength(),o.getLengthInBits(r.mode,t)),r.write(n)}if(n.getLengthInBits()<=8*a)break}this.typeNumber=t}this.makeImpl(!1,this.getBestMaskPattern())},makeImpl:function(t,n){this.moduleCount=4*this.typeNumber+17,this.modules=new Array(this.moduleCount);for(var a=0;a<this.moduleCount;a++){this.modules[a]=new Array(this.moduleCount);for(var i=0;i<this.moduleCount;i++)this.modules[a][i]=null}this.setupPositionProbePattern(0,0),this.setupPositionProbePattern(this.moduleCount-7,0),this.setupPositionProbePattern(0,this.moduleCount-7),this.setupPositionAdjustPattern(),this.setupTimingPattern(),this.setupTypeInfo(t,n),this.typeNumber>=7&&this.setupTypeNumber(t),null==this.dataCache&&(this.dataCache=e.createData(this.typeNumber,this.errorCorrectLevel,this.dataList)),this.mapData(this.dataCache,n)},setupPositionProbePattern:function(t,e){for(var n=-1;n<=7;n++)if(!(t+n<=-1||this.moduleCount<=t+n))for(var a=-1;a<=7;a++)e+a<=-1||this.moduleCount<=e+a||(this.modules[t+n][e+a]=n>=0&&n<=6&&(0==a||6==a)||a>=0&&a<=6&&(0==n||6==n)||n>=2&&n<=4&&a>=2&&a<=4)},getBestMaskPattern:function(){for(var t=0,e=0,n=0;n<8;n++){this.makeImpl(!0,n);var a=o.getLostPoint(this);(0==n||t>a)&&(t=a,e=n)}return e},createMovieClip:function(t,e,n){var a=t.createEmptyMovieClip(e,n),i=1;this.make();for(var r=0;r<this.modules.length;r++)for(var o=r*i,s=0;s<this.modules[r].length;s++){var l=s*i,u=this.modules[r][s];u&&(a.beginFill(0,100),a.moveTo(l,o),a.lineTo(l+i,o),a.lineTo(l+i,o+i),a.lineTo(l,o+i),a.endFill())}return a},setupTimingPattern:function(){for(var t=8;t<this.moduleCount-8;t++)null==this.modules[t][6]&&(this.modules[t][6]=t%2==0);for(var e=8;e<this.moduleCount-8;e++)null==this.modules[6][e]&&(this.modules[6][e]=e%2==0)},setupPositionAdjustPattern:function(){for(var t=o.getPatternPosition(this.typeNumber),e=0;e<t.length;e++)for(var n=0;n<t.length;n++){var a=t[e],i=t[n];if(null==this.modules[a][i])for(var r=-2;r<=2;r++)for(var s=-2;s<=2;s++)this.modules[a+r][i+s]=-2==r||2==r||-2==s||2==s||0==r&&0==s}},setupTypeNumber:function(t){for(var e=o.getBCHTypeNumber(this.typeNumber),n=0;n<18;n++){var a=!t&&1==(e>>n&1);this.modules[Math.floor(n/3)][n%3+this.moduleCount-8-3]=a}for(n=0;n<18;n++){a=!t&&1==(e>>n&1);this.modules[n%3+this.moduleCount-8-3][Math.floor(n/3)]=a}},setupTypeInfo:function(t,e){for(var n=this.errorCorrectLevel<<3|e,a=o.getBCHTypeInfo(n),i=0;i<15;i++){var r=!t&&1==(a>>i&1);i<6?this.modules[i][8]=r:i<8?this.modules[i+1][8]=r:this.modules[this.moduleCount-15+i][8]=r}for(i=0;i<15;i++){r=!t&&1==(a>>i&1);i<8?this.modules[8][this.moduleCount-i-1]=r:i<9?this.modules[8][15-i-1+1]=r:this.modules[8][15-i-1]=r}this.modules[this.moduleCount-8][8]=!t},mapData:function(t,e){for(var n=-1,a=this.moduleCount-1,i=7,r=0,s=this.moduleCount-1;s>0;s-=2){6==s&&s--;while(1){for(var l=0;l<2;l++)if(null==this.modules[a][s-l]){var u=!1;r<t.length&&(u=1==(t[r]>>>i&1));var c=o.getMask(e,a,s-l);c&&(u=!u),this.modules[a][s-l]=u,i--,-1==i&&(r++,i=7)}if(a+=n,a<0||this.moduleCount<=a){a-=n,n=-n;break}}}}},e.PAD0=236,e.PAD1=17,e.createData=function(t,n,a){for(var i=c.getRSBlocks(t,n),r=new d,s=0;s<a.length;s++){var l=a[s];r.put(l.mode,4),r.put(l.getLength(),o.getLengthInBits(l.mode,t)),l.write(r)}var u=0;for(s=0;s<i.length;s++)u+=i[s].dataCount;if(r.getLengthInBits()>8*u)throw new Error("code length overflow. ("+r.getLengthInBits()+">"+8*u+")");r.getLengthInBits()+4<=8*u&&r.put(0,4);while(r.getLengthInBits()%8!=0)r.putBit(!1);while(1){if(r.getLengthInBits()>=8*u)break;if(r.put(e.PAD0,8),r.getLengthInBits()>=8*u)break;r.put(e.PAD1,8)}return e.createBytes(r,i)},e.createBytes=function(t,e){for(var n=0,a=0,i=0,r=new Array(e.length),s=new Array(e.length),l=0;l<e.length;l++){var c=e[l].dataCount,d=e[l].totalCount-c;a=Math.max(a,c),i=Math.max(i,d),r[l]=new Array(c);for(var f=0;f<r[l].length;f++)r[l][f]=255&t.buffer[f+n];n+=c;var v=o.getErrorCorrectPolynomial(d),h=new u(r[l],v.getLength()-1),g=h.mod(v);s[l]=new Array(v.getLength()-1);for(f=0;f<s[l].length;f++){var b=f+g.getLength()-s[l].length;s[l][f]=b>=0?g.get(b):0}}var p=0;for(f=0;f<e.length;f++)p+=e[f].totalCount;var w=new Array(p),m=0;for(f=0;f<a;f++)for(l=0;l<e.length;l++)f<r[l].length&&(w[m++]=r[l][f]);for(f=0;f<i;f++)for(l=0;l<e.length;l++)f<s[l].length&&(w[m++]=s[l][f]);return w};for(var n={MODE_NUMBER:1,MODE_ALPHA_NUM:2,MODE_8BIT_BYTE:4,MODE_KANJI:8},i={L:1,M:0,Q:3,H:2},r={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7},o={PATTERN_POSITION_TABLE:[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],G15:1335,G18:7973,G15_MASK:21522,getBCHTypeInfo:function(t){var e=t<<10;while(o.getBCHDigit(e)-o.getBCHDigit(o.G15)>=0)e^=o.G15<<o.getBCHDigit(e)-o.getBCHDigit(o.G15);return(t<<10|e)^o.G15_MASK},getBCHTypeNumber:function(t){var e=t<<12;while(o.getBCHDigit(e)-o.getBCHDigit(o.G18)>=0)e^=o.G18<<o.getBCHDigit(e)-o.getBCHDigit(o.G18);return t<<12|e},getBCHDigit:function(t){var e=0;while(0!=t)e++,t>>>=1;return e},getPatternPosition:function(t){return o.PATTERN_POSITION_TABLE[t-1]},getMask:function(t,e,n){switch(t){case r.PATTERN000:return(e+n)%2==0;case r.PATTERN001:return e%2==0;case r.PATTERN010:return n%3==0;case r.PATTERN011:return(e+n)%3==0;case r.PATTERN100:return(Math.floor(e/2)+Math.floor(n/3))%2==0;case r.PATTERN101:return e*n%2+e*n%3==0;case r.PATTERN110:return(e*n%2+e*n%3)%2==0;case r.PATTERN111:return(e*n%3+(e+n)%2)%2==0;default:throw new Error("bad maskPattern:"+t)}},getErrorCorrectPolynomial:function(t){for(var e=new u([1],0),n=0;n<t;n++)e=e.multiply(new u([1,s.gexp(n)],0));return e},getLengthInBits:function(t,e){if(e>=1&&e<10)switch(t){case n.MODE_NUMBER:return 10;case n.MODE_ALPHA_NUM:return 9;case n.MODE_8BIT_BYTE:return 8;case n.MODE_KANJI:return 8;default:throw new Error("mode:"+t)}else if(e<27)switch(t){case n.MODE_NUMBER:return 12;case n.MODE_ALPHA_NUM:return 11;case n.MODE_8BIT_BYTE:return 16;case n.MODE_KANJI:return 10;default:throw new Error("mode:"+t)}else{if(!(e<41))throw new Error("type:"+e);switch(t){case n.MODE_NUMBER:return 14;case n.MODE_ALPHA_NUM:return 13;case n.MODE_8BIT_BYTE:return 16;case n.MODE_KANJI:return 12;default:throw new Error("mode:"+t)}}},getLostPoint:function(t){for(var e=t.getModuleCount(),n=0,a=0;a<e;a++)for(var i=0;i<e;i++){for(var r=0,o=t.isDark(a,i),s=-1;s<=1;s++)if(!(a+s<0||e<=a+s))for(var l=-1;l<=1;l++)i+l<0||e<=i+l||0==s&&0==l||o==t.isDark(a+s,i+l)&&r++;r>5&&(n+=3+r-5)}for(a=0;a<e-1;a++)for(i=0;i<e-1;i++){var u=0;t.isDark(a,i)&&u++,t.isDark(a+1,i)&&u++,t.isDark(a,i+1)&&u++,t.isDark(a+1,i+1)&&u++,0!=u&&4!=u||(n+=3)}for(a=0;a<e;a++)for(i=0;i<e-6;i++)t.isDark(a,i)&&!t.isDark(a,i+1)&&t.isDark(a,i+2)&&t.isDark(a,i+3)&&t.isDark(a,i+4)&&!t.isDark(a,i+5)&&t.isDark(a,i+6)&&(n+=40);for(i=0;i<e;i++)for(a=0;a<e-6;a++)t.isDark(a,i)&&!t.isDark(a+1,i)&&t.isDark(a+2,i)&&t.isDark(a+3,i)&&t.isDark(a+4,i)&&!t.isDark(a+5,i)&&t.isDark(a+6,i)&&(n+=40);var c=0;for(i=0;i<e;i++)for(a=0;a<e;a++)t.isDark(a,i)&&c++;var d=Math.abs(100*c/e/e-50)/5;return n+=10*d,n}},s={glog:function(t){if(t<1)throw new Error("glog("+t+")");return s.LOG_TABLE[t]},gexp:function(t){while(t<0)t+=255;while(t>=256)t-=255;return s.EXP_TABLE[t]},EXP_TABLE:new Array(256),LOG_TABLE:new Array(256)},l=0;l<8;l++)s.EXP_TABLE[l]=1<<l;for(l=8;l<256;l++)s.EXP_TABLE[l]=s.EXP_TABLE[l-4]^s.EXP_TABLE[l-5]^s.EXP_TABLE[l-6]^s.EXP_TABLE[l-8];for(l=0;l<255;l++)s.LOG_TABLE[s.EXP_TABLE[l]]=l;function u(t,e){if(void 0==t.length)throw new Error(t.length+"/"+e);var n=0;while(n<t.length&&0==t[n])n++;this.num=new Array(t.length-n+e);for(var a=0;a<t.length-n;a++)this.num[a]=t[a+n]}function c(t,e){this.totalCount=t,this.dataCount=e}function d(){this.buffer=new Array,this.length=0}function f(t){for(var e,n="",a=0;a<t.length;a++)e=t.charCodeAt(a),e>=1&&e<=127?n+=t.charAt(a):e>2047?(n+=String.fromCharCode(224|e>>12&15),n+=String.fromCharCode(128|e>>6&63),n+=String.fromCharCode(128|e>>0&63)):(n+=String.fromCharCode(192|e>>6&31),n+=String.fromCharCode(128|e>>0&63));return n}u.prototype={get:function(t){return this.num[t]},getLength:function(){return this.num.length},multiply:function(t){for(var e=new Array(this.getLength()+t.getLength()-1),n=0;n<this.getLength();n++)for(var a=0;a<t.getLength();a++)e[n+a]^=s.gexp(s.glog(this.get(n))+s.glog(t.get(a)));return new u(e,0)},mod:function(t){if(this.getLength()-t.getLength()<0)return this;for(var e=s.glog(this.get(0))-s.glog(t.get(0)),n=new Array(this.getLength()),a=0;a<this.getLength();a++)n[a]=this.get(a);for(a=0;a<t.getLength();a++)n[a]^=s.gexp(s.glog(t.get(a))+e);return new u(n,0).mod(t)}},c.RS_BLOCK_TABLE=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],c.getRSBlocks=function(t,e){var n=c.getRsBlockTable(t,e);if(void 0==n)throw new Error("bad rs block @ typeNumber:"+t+"/errorCorrectLevel:"+e);for(var a=n.length/3,i=new Array,r=0;r<a;r++)for(var o=n[3*r+0],s=n[3*r+1],l=n[3*r+2],u=0;u<o;u++)i.push(new c(s,l));return i},c.getRsBlockTable=function(t,e){switch(e){case i.L:return c.RS_BLOCK_TABLE[4*(t-1)+0];case i.M:return c.RS_BLOCK_TABLE[4*(t-1)+1];case i.Q:return c.RS_BLOCK_TABLE[4*(t-1)+2];case i.H:return c.RS_BLOCK_TABLE[4*(t-1)+3];default:return}},d.prototype={get:function(t){var e=Math.floor(t/8);return 1==(this.buffer[e]>>>7-t%8&1)},put:function(t,e){for(var n=0;n<e;n++)this.putBit(1==(t>>>e-n-1&1))},getLengthInBits:function(){return this.length},putBit:function(t){var e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),t&&(this.buffer[e]|=128>>>this.length%8),this.length++}},a={errorCorrectLevel:i,defaults:{size:354,margin:0,backgroundColor:"#ffffff",foregroundColor:"#000000",fileType:"png",errorCorrectLevel:i.H,typeNumber:-1},make:function(t){var n=this;return new Promise((function(a,i){var r={canvasId:t.canvasId,componentInstance:t.componentInstance,text:t.text,size:n.defaults.size,margin:n.defaults.margin,backgroundColor:n.defaults.backgroundColor,foregroundColor:n.defaults.foregroundColor,fileType:n.defaults.fileType,errorCorrectLevel:n.defaults.errorCorrectLevel,typeNumber:n.defaults.typeNumber};if(t)for(var o in t)r[o]=t[o];function s(){var n=new e(t.typeNumber,t.errorCorrectLevel);n.addData(f(t.text)),n.make();var r=uni.createCanvasContext(t.canvasId,t.componentInstance);r.setFillStyle(t.backgroundColor),r.fillRect(0,0,t.size,t.size);var o=(t.size-2*t.margin)/n.getModuleCount(),s=o;t.getModules&&t.getModules(n.modules,t);for(var l=0;l<n.getModuleCount();l++)for(var u=0;u<n.getModuleCount();u++){var c=n.isDark(l,u)?t.foregroundColor:t.backgroundColor;r.setFillStyle(c);var d=Math.round(u*o)+t.margin,v=Math.round(l*s)+t.margin,h=Math.ceil((u+1)*o)-Math.floor(u*o),g=Math.ceil((l+1)*o)-Math.floor(l*o);r.fillRect(d,v,h,g)}setTimeout((function(){r.draw(!1,function(){setTimeout((function(){uni.canvasToTempFilePath({canvasId:t.canvasId,fileType:t.fileType,width:t.size,height:t.size,destWidth:t.size,destHeight:t.size,success:function(e){var n,i=e.tempFilePath;n=i,t.success&&t.success(n),a(n)},fail:function(e){t.fail&&t.fail(e),i(e)},complete:function(e){t.complete&&t.complete(e)}},t.componentInstance)}),t.text.length+100)}())}),150)}t=r,t.canvasId?s():console.error("uQRCode: Please set canvasId!")}))}}})();var i=a;e.default=i},4320:function(t,e,n){"use strict";n.r(e);var a=n("0aed"),i=n.n(a);for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);e["default"]=i.a},5339:function(t,e,n){"use strict";n.r(e);var a=n("d392"),i=n("01c7");for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);n("b344");var o,s=n("f0c5"),l=Object(s["a"])(i["default"],a["b"],a["c"],!1,null,"28c113d7",null,!1,a["a"],o);e["default"]=l.exports},"53e4e":function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return a}));var a={uniNavBar:n("5339").default},i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("uni-nav-bar",{attrs:{fixed:!0,color:"#ffffff","background-color":"#3D268A","status-bar":!0,"left-icon":"arrowleft",title:"DM开局游戏"},on:{clickLeft:function(e){arguments[0]=e=t.$handleEvent(e),t.back.apply(void 0,arguments)}}}),n("v-uni-view",{staticClass:"code"},[n("v-uni-canvas",{staticStyle:{width:"220rpx",height:"220rpx"},attrs:{"canvas-id":"qrcode"}})],1),n("v-uni-view",{staticClass:"tips"},[t._v("请DM将此动态码提供给玩家进行扫码邀请玩家开局游戏")]),n("v-uni-view",{staticClass:"role"},[n("v-uni-view",{staticClass:"role-wait"},[n("wait-icon"),n("v-uni-text",[t._v("等待玩家选择角色（4/6）")])],1),n("v-uni-view",{staticClass:"role-list"},t._l(6,(function(e,a){return n("v-uni-view",{key:a,staticClass:"role-item"},[n("v-uni-view",{staticClass:"role-image"},[n("v-uni-image",{staticClass:"role-avatar",attrs:{mode:"aspectFill",src:"https://7463-tcb-txghbkcqmb6uv1gc65818-282e96-1305444703.tcb.qcloud.la/group_avatar/group_avatar1620964000468.png"}}),n("v-uni-view",{staticClass:"role-player"},[[n("v-uni-image",{staticClass:"role-player-img",attrs:{src:"/static/test.jpg"}}),n("v-uni-view",{staticClass:"role-player-name"},[t._v("等待中...")])]],2)],1),n("v-uni-view",{staticClass:"role-name"},[t._v("角色"+t._s(a))])],1)})),1)],1),n("v-uni-view",{staticClass:"footer"},[t._v("进入游戏")])],1)},r=[]},"57ca":function(t,e,n){"use strict";var a=n("6a81"),i=n.n(a);i.a},"5d3f":function(t,e,n){"use strict";n.r(e);var a=n("53e4e"),i=n("4320");for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);n("f50a");var o,s=n("f0c5"),l=Object(s["a"])(i["default"],a["b"],a["c"],!1,null,"5e6689e6",null,!1,a["a"],o);e["default"]=l.exports},"635b":function(t,e,n){var a=n("1dbb");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("02b55bf0",a,!0,{sourceMap:!1,shadowMode:!1})},"6a81":function(t,e,n){var a=n("e386");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("633e07cd",a,!0,{sourceMap:!1,shadowMode:!1})},"77e8":function(t,e,n){"use strict";var a=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n("b685")),r=a(n("3b98")),o={name:"UniNavBar",components:{uniStatusBar:i.default,uniIcons:r.default},props:{title:{type:String,default:""},leftText:{type:String,default:""},rightText:{type:String,default:""},leftIcon:{type:String,default:""},rightIcon:{type:String,default:""},fixed:{type:[Boolean,String],default:!1},color:{type:String,default:"#000000"},backgroundColor:{type:String,default:"#FFFFFF"},statusBar:{type:[Boolean,String],default:!1},shadow:{type:[String,Boolean],default:!1},border:{type:[String,Boolean],default:!1}},mounted:function(){uni.report&&""!==this.title&&uni.report("title",this.title)},methods:{onClickLeft:function(){this.$emit("clickLeft")},onClickRight:function(){this.$emit("clickRight")}}};e.default=o},"7be1":function(t,e,n){"use strict";n.r(e);var a=n("d432"),i=n("07da");for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);n("57ca");var o,s=n("f0c5"),l=Object(s["a"])(i["default"],a["b"],a["c"],!1,null,"6d51509e",null,!1,a["a"],o);e["default"]=l.exports},8831:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=uni.getSystemInfoSync().statusBarHeight+"px",i={name:"UniStatusBar",data:function(){return{statusBarHeight:a}}};e.default=i},9953:function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.uni-nav-bar-text[data-v-28c113d7]{font-size:16}.uni-nav-bar-right-text[data-v-28c113d7]{font-size:14px}.uni-navbar[data-v-28c113d7]{width:%?750?%}.uni-navbar__content[data-v-28c113d7]{position:relative;width:%?750?%;background-color:#fff;overflow:hidden}.uni-navbar__content_view[data-v-28c113d7]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row}.uni-navbar__header[data-v-28c113d7]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;width:%?750?%;height:44px;line-height:44px;font-size:16px}.uni-navbar__header-btns[data-v-28c113d7]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:nowrap;flex-wrap:nowrap;width:%?120?%;padding:0 6px;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.uni-navbar__header-btns-left[data-v-28c113d7]{display:-webkit-box;display:-webkit-flex;display:flex;width:%?150?%;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start}.uni-navbar__header-btns-right[data-v-28c113d7]{display:-webkit-box;display:-webkit-flex;display:flex;width:%?150?%;padding-right:%?30?%;-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end}.uni-navbar__header-container[data-v-28c113d7]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.uni-navbar__header-container-inner[data-v-28c113d7]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;font-size:14px}.uni-navbar__placeholder-view[data-v-28c113d7]{height:44px}.uni-navbar--fixed[data-v-28c113d7]{position:fixed;z-index:998}.uni-navbar--shadow[data-v-28c113d7]{-webkit-box-shadow:0 1px 6px #ccc;box-shadow:0 1px 6px #ccc}.uni-navbar--border[data-v-28c113d7]{border-bottom-width:%?1?%;border-bottom-style:solid;border-bottom-color:#e5e5e5}',""]),t.exports=e},"99ce":function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,".footer[data-v-5e6689e6]{position:fixed;bottom:0;width:100%;height:%?98?%;font:700 %?36?% PingFang SC;text-align:center;line-height:%?98?%;color:#fff;background:#ff9b01}.role[data-v-5e6689e6]{margin:0 %?45?% %?80?%;padding:%?40?% 0;border-top:%?1?% solid #a46edc}.role-player[data-v-5e6689e6]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;position:absolute;top:0;width:%?200?%;height:%?250?%}.role-player-name[data-v-5e6689e6]{margin-top:%?10?%;font:700 %?26?% PingFang SC;color:#fff}.role-player-img[data-v-5e6689e6]{width:%?74?%;height:%?74?%;border:%?1?% solid #fff;border-radius:%?37?%}.role-name[data-v-5e6689e6]{margin-top:%?20?%;font:700 %?26?% PingFang SC;text-align:center;color:#fff}.role-item[data-v-5e6689e6]{margin-bottom:%?33?%}.role-image[data-v-5e6689e6]{position:relative;width:%?200?%;height:%?250?%;background:#000;border-radius:%?10?%}.role-avatar[data-v-5e6689e6]{width:%?200?%;height:%?250?%;opacity:.6;filter:alpha(opacity=60);border-radius:%?10?%}.role-list[data-v-5e6689e6]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;margin:%?40?% 0 0}.role-wait[data-v-5e6689e6]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font:700 %?24?% PingFang SC;color:#fff}.role-wait uni-text[data-v-5e6689e6]{margin-left:%?14?%}.tips[data-v-5e6689e6]{margin:0 auto %?40?%;width:%?450?%;font:500 %?26?% PingFang SC;text-align:center;color:#fff}.code[data-v-5e6689e6]{margin:%?58?% auto %?27?%;width:%?220?%;height:%?220?%;background:#fff;border:%?6?% solid #ff9b01;border-radius:%?10?%}uni-page-body[data-v-5e6689e6]{background:-webkit-gradient(linear,left bottom,left top,from(#62259c),to(#3d268a));background:-webkit-linear-gradient(bottom,#62259c,#3d268a);background:linear-gradient(0deg,#62259c,#3d268a)}body.?%PAGE?%[data-v-5e6689e6]{background:-webkit-gradient(linear,left bottom,left top,from(#62259c),to(#3d268a));background:-webkit-linear-gradient(bottom,#62259c,#3d268a);background:linear-gradient(0deg,#62259c,#3d268a)}",""]),t.exports=e},b344:function(t,e,n){"use strict";var a=n("15ba"),i=n.n(a);i.a},b685:function(t,e,n){"use strict";n.r(e);var a=n("365b"),i=n("bc94");for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);n("0cf7");var o,s=n("f0c5"),l=Object(s["a"])(i["default"],a["b"],a["c"],!1,null,"7dba5570",null,!1,a["a"],o);e["default"]=l.exports},bc94:function(t,e,n){"use strict";n.r(e);var a=n("8831"),i=n.n(a);for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);e["default"]=i.a},d392:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return a}));var a={uniStatusBar:n("b685").default,uniIcons:n("3b98").default},i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"uni-navbar"},[n("v-uni-view",{staticClass:"uni-navbar__content",class:{"uni-navbar--fixed":t.fixed,"uni-navbar--shadow":t.shadow,"uni-navbar--border":t.border},style:{"background-color":t.backgroundColor}},[t.statusBar?n("uni-status-bar"):t._e(),n("v-uni-view",{staticClass:"uni-navbar__header uni-navbar__content_view",style:{color:t.color,backgroundColor:t.backgroundColor}},[n("v-uni-view",{staticClass:"uni-navbar__header-btns uni-navbar__header-btns-left uni-navbar__content_view",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClickLeft.apply(void 0,arguments)}}},[t.leftIcon.length?n("v-uni-view",{staticClass:"uni-navbar__content_view"},[n("uni-icons",{attrs:{color:t.color,type:t.leftIcon,size:"24"}})],1):t._e(),t.leftText.length?n("v-uni-view",{staticClass:"uni-navbar-btn-text uni-navbar__content_view",class:{"uni-navbar-btn-icon-left":!t.leftIcon.length}},[n("v-uni-text",{style:{color:t.color,fontSize:"14px"}},[t._v(t._s(t.leftText))])],1):t._e(),t._t("left")],2),n("v-uni-view",{staticClass:"uni-navbar__header-container uni-navbar__content_view"},[t.title.length?n("v-uni-view",{staticClass:"uni-navbar__header-container-inner uni-navbar__content_view"},[n("v-uni-text",{staticClass:"uni-nav-bar-text",style:{color:t.color}},[t._v(t._s(t.title))])],1):t._e(),t._t("default")],2),n("v-uni-view",{staticClass:"uni-navbar__header-btns uni-navbar__content_view",class:t.title.length?"uni-navbar__header-btns-right":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClickRight.apply(void 0,arguments)}}},[t.rightIcon.length?n("v-uni-view",{staticClass:"uni-navbar__content_view"},[n("uni-icons",{attrs:{color:t.color,type:t.rightIcon,size:"24"}})],1):t._e(),t.rightText.length&&!t.rightIcon.length?n("v-uni-view",{staticClass:"uni-navbar-btn-text uni-navbar__content_view"},[n("v-uni-text",{staticClass:"uni-nav-bar-right-text"},[t._v(t._s(t.rightText))])],1):t._e(),t._t("right")],2)],1)],1),t.fixed?n("v-uni-view",{staticClass:"uni-navbar__placeholder"},[t.statusBar?n("uni-status-bar"):t._e(),n("v-uni-view",{staticClass:"uni-navbar__placeholder-view"})],1):t._e()],1)},r=[]},d432:function(t,e,n){"use strict";var a;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return a}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{},[n("v-uni-view",{staticClass:"spinner"},[n("v-uni-view",{staticClass:"spinner-container container1"},[n("v-uni-view",{staticClass:"circle1"}),n("v-uni-view",{staticClass:"circle2"}),n("v-uni-view",{staticClass:"circle3"}),n("v-uni-view",{staticClass:"circle4"})],1),n("v-uni-view",{staticClass:"spinner-container container2"},[n("v-uni-view",{staticClass:"circle1"}),n("v-uni-view",{staticClass:"circle2"}),n("v-uni-view",{staticClass:"circle3"}),n("v-uni-view",{staticClass:"circle4"})],1),n("v-uni-view",{staticClass:"spinner-container container3"},[n("v-uni-view",{staticClass:"circle1"}),n("v-uni-view",{staticClass:"circle2"}),n("v-uni-view",{staticClass:"circle3"}),n("v-uni-view",{staticClass:"circle4"})],1)],1)],1)},r=[]},e386:function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,".spinner[data-v-6d51509e]{width:20px;height:20px;position:relative}.container1>uni-view[data-v-6d51509e],\n.container2>uni-view[data-v-6d51509e],\n.container3>uni-view[data-v-6d51509e]{width:6px;height:6px;background-color:#fff;border-radius:100%;position:absolute;-webkit-animation:bouncedelay-data-v-6d51509e 1.2s infinite ease-in-out;animation:bouncedelay-data-v-6d51509e 1.2s infinite ease-in-out;-webkit-animation-fill-mode:both;animation-fill-mode:both}.spinner .spinner-container[data-v-6d51509e]{position:absolute;width:100%;height:100%}.container2[data-v-6d51509e]{-webkit-transform:rotate(45deg);transform:rotate(45deg)}.container3[data-v-6d51509e]{-webkit-transform:rotate(90deg);transform:rotate(90deg)}.circle1[data-v-6d51509e]{top:0;left:0}.circle2[data-v-6d51509e]{top:0;right:0}.circle3[data-v-6d51509e]{right:0;bottom:0}.circle4[data-v-6d51509e]{left:0;bottom:0}.container2 .circle1[data-v-6d51509e]{-webkit-animation-delay:-1.1s;animation-delay:-1.1s}.container3 .circle1[data-v-6d51509e]{-webkit-animation-delay:-1s;animation-delay:-1s}.container1 .circle2[data-v-6d51509e]{-webkit-animation-delay:-.9s;animation-delay:-.9s}.container2 .circle2[data-v-6d51509e]{-webkit-animation-delay:-.8s;animation-delay:-.8s}.container3 .circle2[data-v-6d51509e]{-webkit-animation-delay:-.7s;animation-delay:-.7s}.container1 .circle3[data-v-6d51509e]{-webkit-animation-delay:-.6s;animation-delay:-.6s}.container2 .circle3[data-v-6d51509e]{-webkit-animation-delay:-.5s;animation-delay:-.5s}.container3 .circle3[data-v-6d51509e]{-webkit-animation-delay:-.4s;animation-delay:-.4s}.container1 .circle4[data-v-6d51509e]{-webkit-animation-delay:-.3s;animation-delay:-.3s}.container2 .circle4[data-v-6d51509e]{-webkit-animation-delay:-.2s;animation-delay:-.2s}.container3 .circle4[data-v-6d51509e]{-webkit-animation-delay:-.1s;animation-delay:-.1s}@-webkit-keyframes bouncedelay-data-v-6d51509e{0%,\n\t80%,\n\t100%{-webkit-transform:scale(0)}40%{-webkit-transform:scale(1)}}@keyframes bouncedelay-data-v-6d51509e{0%,\n\t80%,\n\t100%{transform:scale(0);-webkit-transform:scale(0)}40%{transform:scale(1);-webkit-transform:scale(1)}}",""]),t.exports=e},f1f5:function(t,e,n){var a=n("99ce");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("37dfa830",a,!0,{sourceMap:!1,shadowMode:!1})},f50a:function(t,e,n){"use strict";var a=n("f1f5"),i=n.n(a);i.a}}]);