(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-login-setUp-setUp"],{"0e38":function(t,e,i){"use strict";i.r(e);var o=i("dd32"),n=i("a814");for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);i("a616");var c,r=i("f0c5"),u=Object(r["a"])(n["default"],o["b"],o["c"],!1,null,"2a942689",null,!1,o["a"],c);e["default"]=u.exports},4578:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={props:{title:{type:String,default:"确定"},width:{type:String,default:"100%"},height:{type:String,default:"100upx"},fontSize:{type:String,default:"28upx"},color:{type:String,default:"#333"},borderRadius:{type:String,default:"10upx"},background:{type:String,default:"#FF9B01"},disabled:{type:Boolean,default:!1},border:{type:String,default:""}},methods:{submit:function(){this.$emit("submit")}}};e.default=o},"53e4":function(t,e,i){"use strict";var o=i("d098"),n=i.n(o);n.a},"5c7a":function(t,e,i){"use strict";var o=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=o(i("5530")),a=i("2f62"),c={data:function(){return{cacheSize:"0B",version:""}},mounted:function(){this.formatSize()},methods:(0,n.default)((0,n.default)({},(0,a.mapActions)({logOut:"user/logOut"})),{},{formatSize:function(){},clearCache:function(){},submit:function(){this.$refs.popup_bottom.open()},dropOut:function(){this.logOut()}})};e.default=c},"7dc2":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAQAAABvygHQAAABJklEQVR42u3XIW4CQRTG8d2QIFYUA46guhLM36wGPL7JqkpaUQ03gAu0XAAOAB48BlEkEkGKwZBA2IbNywT8NwmCOcAvmcy8770XBHeHGit2vAXKwxcZGRc+lWjMX85m9JVsna2xQ0Id+8rG2BEFHVtlbeyEoo4tszR2RqRjX5gbu6CkYyOmxi6p6NgiY2PXVHVsgR9jN8Q6NmRg7JaGsiB6xu5JlGyXS84eaCvZlFPOHuko2Q7HnD2TKtkmBx/RmDyj8RqNv8a++8hbFUrsrv8tuj4N91AD0UORsDeyp7p4233+rrpMT7IyJeUsDhQ+XPS1HjWkCRm6dlJ/1MbnoUUTMXPDRFlDltzYMxeNPR4GtJtoG4tGSQ/J7qEHeVkk/Kw8kuXsH8e58DZ/2TzoAAAAAElFTkSuQmCC"},a429:function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return o}));var o={customButton:i("0e38").default,customPopup:i("f181").default},n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-uni-view",{staticClass:"setUp"},[o("v-uni-view",{staticClass:"item border_bottom"},[o("v-uni-view",[t._v("版本信息")]),o("v-uni-view",{staticClass:"value"},[t._v("V"+t._s(t.version)),o("v-uni-image",{attrs:{src:i("7dc2"),mode:""}})],1)],1),o("v-uni-view",{staticClass:"item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clearCache.apply(void 0,arguments)}}},[o("v-uni-view",[t._v("清理缓存")]),o("v-uni-view",{staticClass:"value"},[t._v(t._s(t.cacheSize)),o("v-uni-image",{attrs:{src:i("7dc2"),mode:""}})],1)],1),o("v-uni-view",{staticClass:"btn"},[o("custom-button",{attrs:{width:"680upx",height:"90upx",fontSize:"30upx",color:"#fff",title:"退出登录"},on:{submit:function(e){arguments[0]=e=t.$handleEvent(e),t.submit.apply(void 0,arguments)}}})],1),o("custom-popup",{ref:"popup_bottom",attrs:{type:"bottom"}},[o("v-uni-view",{staticClass:"popup_bottom"},[o("v-uni-view",{staticClass:"temp"}),o("v-uni-view",{staticClass:"tips"},[t._v("退出账号将无法获取圈子最新动态")]),o("v-uni-view",{staticClass:"dropOut cu-fx-row-c-c",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.dropOut.apply(void 0,arguments)}}},[t._v("退出")]),o("v-uni-view",{staticClass:"cancel cu-fx-row-c-c",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.$refs.popup_bottom.close()}}},[t._v("取消")])],1)],1)],1)},a=[]},a616:function(t,e,i){"use strict";var o=i("f9c2"),n=i.n(o);n.a},a814:function(t,e,i){"use strict";i.r(e);var o=i("4578"),n=i.n(o);for(var a in o)"default"!==a&&function(t){i.d(e,t,(function(){return o[t]}))}(a);e["default"]=n.a},b122:function(t,e,i){"use strict";i.r(e);var o=i("5c7a"),n=i.n(o);for(var a in o)"default"!==a&&function(t){i.d(e,t,(function(){return o[t]}))}(a);e["default"]=n.a},d015:function(t,e,i){var o=i("24fb");e=o(!1),e.push([t.i,'.setUp[data-v-71ec8acc]{height:100vh;width:100%;background:#f5f5f5}.btn[data-v-71ec8acc]{position:fixed;left:0;bottom:%?58?%;padding:0 %?35?%;width:100%}.item[data-v-71ec8acc]{position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;padding:0 %?48?% 0 %?36?%;width:100%;height:%?130?%;font-size:%?30?%;color:#333;background-color:#fff}.border_bottom[data-v-71ec8acc]::after{content:"";position:absolute;left:50%;bottom:0;-webkit-transform:translateX(-50%);transform:translateX(-50%);width:%?702?%;height:%?2?%;background:#d9d9d9}uni-image[data-v-71ec8acc]{margin-left:%?22?%;width:%?30?%;height:%?28?%;display:block}.value[data-v-71ec8acc]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;color:#999}.popup_bottom[data-v-71ec8acc]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;width:100%;background-color:#fff;border-radius:%?8?% %?8?% 0 0}.popup_bottom .temp[data-v-71ec8acc]{margin-top:%?16?%;width:%?76?%;height:%?10?%;background-color:#ccc;border-radius:%?6?%}.popup_bottom .tips[data-v-71ec8acc]{position:relative;padding:%?36?% 0;line-height:%?18?%;color:#999;font-size:%?26?%}.popup_bottom .tips[data-v-71ec8acc]::after{content:"";position:absolute;left:0;bottom:0;width:100vw;height:%?1?%}.popup_bottom .dropOut[data-v-71ec8acc]{padding:%?28?% 0;color:#ff5f2e;width:100%;font-size:%?30?%;font-weight:700}.popup_bottom .cancel[data-v-71ec8acc]{margin-bottom:%?10?%;width:%?702?%;height:%?76?%;color:#333;font-size:%?30?%;font-weight:700;background-color:#f6f6f6;border-radius:%?80?%}',""]),t.exports=e},d098:function(t,e,i){var o=i("d015");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var n=i("4f06").default;n("ec18f90e",o,!0,{sourceMap:!1,shadowMode:!1})},d2a9:function(t,e,i){"use strict";i.r(e);var o=i("a429"),n=i("b122");for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);i("53e4");var c,r=i("f0c5"),u=Object(r["a"])(n["default"],o["b"],o["c"],!1,null,"71ec8acc",null,!1,o["a"],c);e["default"]=u.exports},dd32:function(t,e,i){"use strict";var o;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return o}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-button",{style:{width:t.width,height:t.height,fontSize:t.fontSize,color:t.color,borderRadius:t.borderRadius,background:t.background,border:t.border},attrs:{disabled:t.disabled,type:"default"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.submit.apply(void 0,arguments)}}},[t._v(t._s(t.title))])},a=[]},eb82:function(t,e,i){var o=i("24fb");e=o(!1),e.push([t.i,"uni-button[data-v-2a942689]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:0;margin:0;border:0}uni-button[data-v-2a942689]:after{display:none}",""]),t.exports=e},f9c2:function(t,e,i){var o=i("eb82");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var n=i("4f06").default;n("12983705",o,!0,{sourceMap:!1,shadowMode:!1})}}]);