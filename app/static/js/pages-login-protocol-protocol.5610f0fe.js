(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-login-protocol-protocol"],{"11b9":function(t,n,e){"use strict";var o;e.d(n,"b",(function(){return c})),e.d(n,"c",(function(){return r})),e.d(n,"a",(function(){return o}));var c=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"container"},[e("v-uni-rich-text",{attrs:{nodes:t.content}})],1)},r=[]},"5c87":function(t,n,e){var o=e("24fb");n=o(!1),n.push([t.i,".container[data-v-54e811ff]{padding:%?20?%}",""]),t.exports=n},"637e":function(t,n,e){"use strict";e.r(n);var o=e("11b9"),c=e("ab3c");for(var r in c)"default"!==r&&function(t){e.d(n,t,(function(){return c[t]}))}(r);e("8172");var a,u=e("f0c5"),i=Object(u["a"])(c["default"],o["b"],o["c"],!1,null,"54e811ff",null,!1,o["a"],a);n["default"]=i.exports},8172:function(t,n,e){"use strict";var o=e("e70e"),c=e.n(o);c.a},ab3c:function(t,n,e){"use strict";e.r(n);var o=e("d5d5"),c=e.n(o);for(var r in o)"default"!==r&&function(t){e.d(n,t,(function(){return o[t]}))}(r);n["default"]=c.a},d5d5:function(t,n,e){"use strict";e("caad"),e("ac1f"),e("2532"),e("5319"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=e("f659"),c={data:function(){return{content:""}},onLoad:function(t){var n=this;console.log(t.protocol_key),(0,o.getProtocol)({protocol_key:t.protocol_key}).then((function(t){t&&t.success&&(n.content=n.stringToHtml(t.data.content),console.log(n.content))}))},methods:{stringToHtml:function(t){var n=t.includes("&lt;")&&t.includes("&gt;");return n?(t=t.replace(/&lt;/g,"<"),t=t.replace(/&gt;/g,">"),t):""}}};n.default=c},e70e:function(t,n,e){var o=e("5c87");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var c=e("4f06").default;c("ed63284e",o,!0,{sourceMap:!1,shadowMode:!1})}}]);