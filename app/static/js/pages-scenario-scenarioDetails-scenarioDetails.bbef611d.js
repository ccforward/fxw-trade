(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-scenario-scenarioDetails-scenarioDetails"],{"0015":function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var n={overflowEllipsis:i("fac1").default,scenarioCommentList:i("ec76").default,customPopup:i("f181").default,downloadTips:i("413b").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"container"},[n("v-uni-view",{staticClass:"info",class:{hasNotchInScreen:t.hasNotchInScreen}},[n("v-uni-view",{staticClass:"info-bj",style:{backgroundImage:"url("+t.details.imgs[0]+")"}}),n("v-uni-view",{staticClass:"info-img"},[n("v-uni-image",{attrs:{src:t.details.imgs[0]}})],1),n("v-uni-view",{staticClass:"info-scriptContent"},[n("v-uni-view",{staticClass:"title"},[t._v(t._s(t.details.script_name))]),n("v-uni-view",{staticClass:"introduce"},[n("v-uni-view",{},[n("v-uni-view",{staticClass:"introduce_score"},[t.details.role_amount>0?[t._v(t._s(t.details.role_amount+"人/"))]:t._e(),t.details.type?[t._v(t._s(t.details.type+"/"))]:t._e(),t.details.theme&&t.details.theme.length>0?[t._v(t._s(t.details.theme.join("/")))]:t._e()],2),t.details.author?n("v-uni-view",{staticClass:"author"},[t._v("发表："+t._s(t.details.author))]):t._e()],1),2!==t.details.scriptMarkStatus?[n("v-uni-view",{staticClass:"identification",class:{"identification-action":0===t.details.scriptMarkStatus},on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.handlePlay(t.details)}}},[n("v-uni-view",{staticClass:"img"},[n("v-uni-image",{attrs:{src:0===t.details.scriptMarkStatus?t.heart:t.press}})],1),t._v(t._s(0===t.details.scriptMarkStatus?"想玩":"已想玩"))],1)]:[n("v-uni-view",{staticClass:"identification identification-action"},[t._v("已玩过")])]],2)],1)],1),n("v-uni-view",{staticClass:"brief"},[n("v-uni-view",{staticClass:"brief-title"},[t._v("简介")]),n("v-uni-view",{staticClass:"brief-centent"},[n("overflow-ellipsis",{attrs:{content:t.details.desc,line:3,showButton:!0}})],1)],1),n("v-uni-view",{staticClass:"role"},[n("v-uni-view",{staticClass:"role-title"},[t._v("相关角色（"+t._s(t.details.maleNumber)+"男"+t._s(t.details.femaleNumber)+"女）")]),n("v-uni-scroll-view",{attrs:{"scroll-x":"true"}},[n("v-uni-view",{staticClass:"role-list"},[t._l(t.details.roles,(function(e,i){return[n("v-uni-view",{key:e.id||i+"_0",staticClass:"role-item"},[n("v-uni-view",{staticClass:"img",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleOpenRoles(i)}}},[n("v-uni-image",{attrs:{src:e.img&&e.img.url}})],1),n("v-uni-view",{staticClass:"role-name"},[t._v(t._s(e.name))])],1)]}))],2)],1)],1),n("v-uni-view",{staticClass:"comment"},[n("v-uni-view",{staticClass:"comment-title"},[t._v("玩家评论")]),n("v-uni-view",{staticClass:"comment-miaos"},[n("v-uni-view",{staticClass:"score"},[t.details.score.people_amount<10?[n("v-uni-view",{staticClass:"fraction",staticStyle:{"font-size":"40upx"}},[t._v("暂无评分")])]:[n("v-uni-view",{staticClass:"fraction"},[t._v(t._s(t.details.score.total))]),n("v-uni-view",{staticClass:"number"},[t._v("共"+t._s(t.details.score.people_amount)+"人评分")])]],2),n("v-uni-view",{staticClass:"evaluate"},[n("v-uni-view",[t._v("推理："+t._s(t.details.score.logic))]),n("v-uni-view",{staticStyle:{padding:"16upx 0"}},[t._v("剧情："+t._s(t.details.score.plot))]),n("v-uni-view",[t._v("其他："+t._s(t.details.score.subjective))])],1),n("v-uni-view",{staticClass:"operation",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.jumpComment.apply(void 0,arguments)}}},[n("v-uni-image",{attrs:{src:i("a824")}}),n("v-uni-view",[t._v(t._s(2===t.details.scriptMarkStatus?"已评论":"玩过并评论"))])],1)],1)],1),n("v-uni-view",{staticClass:"release"},[n("v-uni-view",{staticStyle:{"min-height":"400upx"}},[n("scenarioComment-list",{attrs:{url:"/pages/scenario/commentDetails/commentDetails",list:t.postList,scenarioData:t.details},on:{like:function(e){arguments[0]=e=t.$handleEvent(e),t.handleLike.apply(void 0,arguments)}}}),n("v-uni-view",{staticClass:"comment-total",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.downloadApp.apply(void 0,arguments)}}},[t._v("查看全部"+t._s(t.total)+"条回复")])],1)],1),n("custom-popup",{ref:"address",attrs:{type:"bottom"}},[n("storeList",{attrs:{list:t.storeData}})],1),n("custom-popup",{ref:"roles",attrs:{type:"center"}},[n("v-uni-swiper",{attrs:{current:t.rolesIndex}},t._l(t.details.roles,(function(e,a){return n("v-uni-swiper-item",{key:a},[n("v-uni-view",{staticClass:"rolesDetail",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handlePreviewImage(t.details.roles,a)}}},[n("v-uni-image",{attrs:{src:e.img&&e.img.url}}),n("v-uni-view",{staticClass:"rolesDetail-name"},[t._v(t._s(e.name))]),n("v-uni-view",{staticClass:"rolesDetail-desc"},[t._v(t._s(e.desc))]),n("v-uni-cover-view",{staticClass:"rolesDetail-cancel",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.$refs.roles.close()}}},[n("v-uni-cover-image",{attrs:{src:i("310a")}})],1)],1)],1)})),1)],1),n("download-tips",{ref:"download"})],1)},o=[]},"09c0":function(t,e,i){"use strict";i.r(e);var n=i("f3a2"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},"0f70":function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"OverflowEllipsis"},[i("v-uni-view",{staticClass:"unitrow",attrs:{id:"OverflowEllipsis-unitrow"}},[i("br")]),i("v-uni-view",{staticClass:"content-box-copy",attrs:{id:"OverflowEllipsis-contentBox"}},[i("v-uni-text",[t._v(t._s(t.viewContent))]),t.isOverflow&&t.content.length>0?[t.showAll?t._e():i("v-uni-text",[t._v("...")]),t.showButton?i("v-uni-text",{staticClass:"toggleBtn",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.toggleShowAll.apply(void 0,arguments)}}},[t._v(t._s(t.showAll?"[收起]":"[展开]"))]):t._e()]:t._e()],2),t.isAdjustFinish?i("v-uni-view",{staticClass:"content-box"},[i("v-uni-text",[t._v(t._s(t.viewContent))]),t.isOverflow&&t.content.length>0?[t.showAll?t._e():i("v-uni-text",[t._v("...")]),t.showButton?i("v-uni-text",{staticClass:"toggleBtn",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.toggleShowAll.apply(void 0,arguments)}}},[t._v(t._s(t.showAll?"[收起]":"[展开]"))]):t._e()]:t._e()],2):t._e()],1)},o=[]},"16f5":function(t,e,i){var n=i("4205");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("e65817e6",n,!0,{sourceMap:!1,shadowMode:!1})},"23d9":function(t,e,i){var n=i("7c16");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("083f362f",n,!0,{sourceMap:!1,shadowMode:!1})},"310a":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAABCCAQAAABJXchjAAAE70lEQVR4Ab3Bf2jUdRzH8ZebTjt/3PL2U09lYJlQIFRkP1UMLMwiIcIKKqI/8r/+6PcPadkvMlFCnVEKVhRUglRClP5hlq7JNtLd7cdt7tocy/JHv8yl2zPG1zefu213973zzsdD2WMGq3iDnTTQyXHO8A/H6aSez3md+6hWIVHE7dTRRiYRNrGIIuUbs3mTHrIR51VmKl+4gg8YIBdn2UKNLhZTWc85UvmLfmJ00s/fpDLAm0xW7riXPkaLsolHWcjlSkCIG3mMrXQwWpy7lAsmUcdIMV5hrjJgPrXESTbEekqUHebQRLIfWM44+cQ4lvM9yRqYKf+4ml4SHWapcsCdREjUzTz5w82cxBngOcYrR5TwMudwjnOtMuMaTuN0cZ0uErcSxznOXKXHHHpw9lKqPCDEjzjdhJUaAQ7jfMZE5QkBvsRpYJJSYQfOxxQrjxjPTpw6jY37cPZQojyjhD04d2k0ptGH6SKoAqCMXzC9TNNIbMAMcK0KhFs4h1mnZMznPOZZFRBrMP9Ro0R8iokwQQVECVHMNjnMZRCzVAXGCswAYRnWY/bpEuAQplYeSvgds0yXACsxXYzTMFZg2pUWM/iaX/mEcqXADHZzim+ZoTQo4ijmNg1jO+ZFpcUuPC1UaAyEacfzhdJiDWajhnEMU6O06MW0UKERCNOO6VZazMcckcSVmDZlwEc4LVQqAWHacT5QBvTgGaJKPISpUwaU04zTQqUuIEwHziGCyoAPMSvFWsxDyohymnEiVEoSYTpwGihVRjyOeU58hrlePlBOM06ESsLEcBoolQ8sxOwQjZhp8oVymnEixHAaKJUvhDAHRBzPSflGGc2MpYGgfOMsnqg4hadTWaCMZkb6iaCyQB+eHnEez8/KCmU0k+gngsoKcTynhWlVVggTI1GESmWFOJ7T4l88vcoCs4gxUoQqZYHTeE6IPjx/yjdmEWMsEarkG4N4OkQjplS+MIsYTj1NOFGq5AtVmP3iE8xC+cAsOnHqCVJGE06UavnAzZht4hXMw8qI2XTiHCQoSYRowolSrYxYjXlGrMLUKQPCdOIcJKgLCNGE00qFMmAH5m5Rg2lTBuzEOUBQCQjRiPORMuAXPIOEJBHHzFNa9GMOENQIhGjEdCotFmCaNIwtmLVKi4/xHCCoMTCdRjzvKS3ewLytYSzGdFOkNCjlfaK8xzSlwHS208pmpioNxnMMc4OGUUQ3ZqUuAR7ERGVYizmkgqOIFszzMlTzL+YeFRj3Y85QJofNmC4CKiAmE8dsUiLmcBbzmgqIdzD/MFPJWIs5z2IVCHcwhKnVSATowvRRoQIgzG+YGJdpNJYxhDlIQHlGgCbMeRZrbLyFs5sS5REB9uCsUSpMYD/ObgLKE6awF+c7ipUa5XTg1FOtPGA2TTg/E1J6zKUP5xiLdJFYzu84PYSVGVfTjzPIeqYoR5SyiSGcXq6SP1xJF4mO8QBFyhLFPEI/idqokX9UsJdkUR5mgnxiIo8RI9k3TFd2KKaWQZKd4F1uolhpMJ5b2MoJkp3jeYqUC5YQY7RT7OIpVnAFAV1AgHncwzN8yR+M1spNyh2X8RJnSG2Ik5xkiNT+4gUm6mJRxQb+Jhd/so5y5QvTeZpWshHlSUqVf1xHLfv5j3QG2McaFqiwmMJSVrORr6nnCEc5yhHq+YoNPMESAsra/9TiO639ZJKSAAAAAElFTkSuQmCC"},"397e":function(t,e,i){"use strict";var n=i("16f5"),a=i.n(n);a.a},"3a2e":function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"store"},[n("v-uni-view",{staticClass:"store-title"},[t._v("全部门店")]),n("v-uni-view",{staticClass:"store-list"},[t._l(t.list,(function(e,a){return[n("v-uni-view",{key:e.shop_id+"_0",staticClass:"store-item"},[n("v-uni-view",{staticClass:"img"},[n("v-uni-image",{attrs:{src:e.imgs&&e.imgs[0].url}})],1),n("v-uni-view",{staticStyle:{flex:"1"}},[n("v-uni-view",{staticClass:"name"},[t._v(t._s(e.name))]),n("v-uni-view",{staticClass:"address"},[n("v-uni-image",{attrs:{src:i("9fa3")}}),n("v-uni-text",[t._v(t._s(e.address))])],1)],1)],1)]}))],2)],1)},o=[]},4205:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,".store[data-v-3607fdf2]{height:%?1000?%;width:100%;border-radius:%?15?% %?15?% 0 0;background:#fff;overflow:auto}.store .store-title[data-v-3607fdf2]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;width:100%;height:%?80?%;color:#333;font:800 %?36?% PingFang SC}.store .store-address[data-v-3607fdf2]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding-left:%?30?%;font:700 %?36?% PingFang SC;color:#ffa443}.store .store-list[data-v-3607fdf2]{padding:0 %?30?%}.store .store-list .store-item[data-v-3607fdf2]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:%?187?%;border-bottom:%?1?% solid #e8e8e8}.store .store-list .store-item .img[data-v-3607fdf2]{margin-right:%?25?%;width:%?100?%;height:%?100?%}.store .store-list .store-item .img uni-image[data-v-3607fdf2]{display:block;width:100%;height:100%;border-radius:%?10?%}.store .store-list .store-item .name[data-v-3607fdf2]{padding-bottom:%?15?%;font:800 %?30?% PingFang SC;color:#333}.store .store-list .store-item .address[data-v-3607fdf2]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;width:100%}.store .store-list .store-item .address uni-image[data-v-3607fdf2]{width:%?26?%;height:%?30?%}.store .store-list .store-item .address uni-text[data-v-3607fdf2]{-webkit-box-flex:1;-webkit-flex:1;flex:1;padding-left:%?15?%;font-size:%?24?%;color:#333;word-break:break-word}",""]),t.exports=e},"47c3":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAQCAYAAAAvf+5AAAAABHNCSVQICAgIfAhkiAAAALpJREFUKFON0tERwiAMBmBzXaBOoCNUGECdQDewbNBNqhPYDXQRuC5U6p8eeGiBg5feNR+QhNAms4QQLcK9MWZLKceIiJ7zPD8AuygE6oB6IAU08GErKKXkwC1EK5hCP9ChK362Wuv3f+7UNE1dVdULgcM0TacRK1YgIfERie9zaLmaIb47a+05ddoC3dUDqjzm8Lc9XAzwBWmoaDFh4kXt8RuKGu5x0RMG2A/FgPdWyenhDW6C7iiu/gCwYngR53L3lAAAAABJRU5ErkJggg=="},"4b9c":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'.comment-total[data-v-77de2a91]{padding:20px 0;font:400 9px PingFang SC;text-align:center;color:#ffa926;opacity:1}[data-v-77de2a91] uni-scroll-view::-webkit-scrollbar{width:0!important}.container .header[data-v-77de2a91]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;padding:0 %?30?%;height:%?80?%}.container .header .right_img[data-v-77de2a91]{height:%?32?%;width:%?18?%;display:block}.container .header .share_img[data-v-77de2a91]{width:%?32?%;height:%?32?%}.container .solid-bottom[data-v-77de2a91]{border-bottom:%?1?% solid rgba(0,0,0,.1)}.container .info[data-v-77de2a91]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;padding:%?142?% %?22?% %?30?% %?32?%;width:100%;height:%?407?%}.container .info .info-bj[data-v-77de2a91]{position:absolute;top:0;left:0;width:100%;height:%?407?%;background-size:100% 100%;-webkit-filter:blur(30px);filter:blur(30px)}.container .info .info-img[data-v-77de2a91]{width:%?167?%;height:%?230?%}.container .info .info-img uni-image[data-v-77de2a91]{display:block;width:100%;height:100%;border-radius:%?10?%}.container .info .info-scriptContent[data-v-77de2a91]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-flex:1;-webkit-flex:1;flex:1;z-index:2;padding-left:%?30?%}.container .info .info-scriptContent .title[data-v-77de2a91]{height:%?40?%;font:500 %?42?% PingFang SC;color:#fff}.container .info .info-scriptContent .introduce[data-v-77de2a91]{-webkit-box-flex:1;-webkit-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;position:relative}.container .info .info-scriptContent .introduce_score[data-v-77de2a91]{padding-top:%?30?%;font-size:%?24?%;color:#fff}.container .info .info-scriptContent .introduce .author[data-v-77de2a91]{font-size:%?24?%;color:#fff;padding:%?10?% 0 %?20?% 0}.container .info .info-scriptContent .introduce .identification[data-v-77de2a91]{position:absolute;top:%?40?%;right:0;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;width:%?154?%;height:%?60?%;border-radius:%?28?%;font-weight:500;color:#333;background-color:#fff}.container .info .info-scriptContent .introduce .identification .img[data-v-77de2a91]{width:%?30?%;height:%?30?%;margin-right:%?10?%}.container .info .info-scriptContent .introduce .identification .img uni-image[data-v-77de2a91]{display:block;width:100%;height:100%}.container .info .info-scriptContent .introduce .identification-action[data-v-77de2a91]{color:#ffa926}.container .info .info-scriptContent .address[data-v-77de2a91]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;height:%?58?%;padding:0 %?18?% 0 %?11?%;color:#fff;font-size:%?28?%;border-radius:%?10?%;background:#080102;opacity:.5}.container .info .info-scriptContent .address .address-img[data-v-77de2a91]{margin-right:%?10?%;width:%?27?%;height:%?32?%}.container .info .info-scriptContent .address .right-img[data-v-77de2a91]{width:%?27?%;height:%?32?%}.container .hasNotchInScreen[data-v-77de2a91]{height:%?500?%;padding-top:%?200?%}.container .hasNotchInScreen .info-bj[data-v-77de2a91]{height:%?500?%;background-repeat:no-repeat;background-size:100% 100%}.container .hasNotchInScreen .info-img[data-v-77de2a91]{height:%?270?%}.container .brief[data-v-77de2a91]{-webkit-box-sizing:border-box;box-sizing:border-box;padding:%?24?% %?30?% %?34?% %?30?%;width:100%}.container .brief .brief-title[data-v-77de2a91]{padding-bottom:%?20?%;font-size:%?36?%;color:#333;font-weight:800}.container .brief .brief-centent[data-v-77de2a91]{color:#999;font-size:%?30?%}.container .role[data-v-77de2a91]{padding:%?30?% %?13?% %?26?% %?13?%;border-top:%?1?% solid #d2d2d2;border-bottom:%?1?% solid #d2d2d2}.container .role .role-title[data-v-77de2a91]{padding-left:%?25?%;padding-bottom:%?40?%;color:#333;font:800 %?36?% PingFang SC}.container .role .role-list[data-v-77de2a91]{display:-webkit-box;display:-webkit-flex;display:flex}.container .role .role-list .role-item[data-v-77de2a91]{margin:0 %?25?%}.container .role .role-list .role-item .img[data-v-77de2a91]{width:%?120?%;height:%?150?%}.container .role .role-list .role-item .img uni-image[data-v-77de2a91]{display:block;width:100%;height:100%;border-radius:%?10?%}.container .role .role-list .role-item .role-name[data-v-77de2a91]{padding-top:%?20?%;color:#333;font-size:%?26?%;text-align:center}.container .comment[data-v-77de2a91]{padding:%?40?% %?34?%;border-bottom:%?1?% solid #d2d2d2}.container .comment .comment-title[data-v-77de2a91]{padding-bottom:%?30?%;color:#333;font:800 %?36?% PingFang SC}.container .comment .comment-miaos[data-v-77de2a91]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:0 %?0?% 0 %?46?%}.container .comment .comment-miaos .score[data-v-77de2a91]{text-align:center}.container .comment .comment-miaos .score .fraction[data-v-77de2a91]{font:800 %?60?% PingFang SC;font-weight:800;color:#ffa926;text-align:center}.container .comment .comment-miaos .score .number[data-v-77de2a91]{font-size:%?24?%;color:#333}.container .comment .comment-miaos .evaluate[data-v-77de2a91]{padding:0 %?75?% 0 %?66?%;color:#999;font-size:%?24?%}.container .comment .comment-miaos .operation[data-v-77de2a91]{position:relative;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding-left:%?70?%;color:#333;font-size:%?30?%}.container .comment .comment-miaos .operation[data-v-77de2a91]::after{position:absolute;top:50%;left:0;content:"";width:%?1?%;height:%?91?%;background:#999;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.container .comment .comment-miaos .operation uni-image[data-v-77de2a91]{display:block;margin-bottom:%?6?%;width:%?38?%;height:%?42?%}.container .release[data-v-77de2a91]{padding-top:%?40?%}.container .release .release-title[data-v-77de2a91]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;padding:0 %?26?% 0 %?32?%;font-size:%?30?%;color:#ffa926}uni-swiper[data-v-77de2a91]{width:%?430?%;height:%?545?%}.rolesDetail[data-v-77de2a91]{position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:%?20?%;width:100%;height:100%;background-color:#fff;border-radius:%?10?%}.rolesDetail uni-image[data-v-77de2a91]{width:100%;height:%?420?%;border-radius:%?10?%;display:block}.rolesDetail-name[data-v-77de2a91]{padding:%?20?% 0;font:700 %?30?% PingFang SC;color:#ffa926}.rolesDetail-desc[data-v-77de2a91]{font-size:%?24?%;color:#333}.rolesDetail-cancel[data-v-77de2a91]{position:absolute;top:%?-118?%;right:%?13?%;width:%?60?%;height:%?60?%}.rolesDetail-cancel[data-v-77de2a91]::after{content:"";position:absolute;top:%?60?%;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);height:%?62?%;width:%?4?%;background-color:#fff}.rolesDetail-cancel uni-image[data-v-77de2a91]{width:100%;height:100%;display:block}[data-v-77de2a91] .uni-scroll-view::-webkit-scrollbar{\n  /* 隐藏滚动条，但依旧具备可以滚动的功能 */display:none}',""]),t.exports=e},"578c":function(t,e,i){"use strict";i.r(e);var n=i("0015"),a=i("66cd");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("8551");var s,r=i("f0c5"),l=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,"77de2a91",null,!1,n["a"],s);e["default"]=l.exports},"5b70":function(t,e,i){"use strict";i.r(e);var n=i("3a2e"),a=i("a480");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("397e");var s,r=i("f0c5"),l=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,"3607fdf2",null,!1,n["a"],s);e["default"]=l.exports},"631a":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={props:{list:{type:[Array],default:[]}}};e.default=n},"66cd":function(t,e,i){"use strict";i.r(e);var n=i("ddd6"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},"72bf":function(t,e,i){var n=i("4b9c");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("65784e00",n,!0,{sourceMap:!1,shadowMode:!1})},"7c16":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,".OverflowEllipsis[data-v-00197f1e]{position:relative}.unitrow[data-v-00197f1e]{visibility:hidden;position:absolute;padding:0;margin:0}.toggleBtn[data-v-00197f1e]{white-space:nowrap;cursor:pointer;\n  /* font-weight: bold; */color:#ffa926}.content-box-copy[data-v-00197f1e]{visibility:hidden;position:absolute}",""]),t.exports=e},8551:function(t,e,i){"use strict";var n=i("72bf"),a=i.n(n);a.a},9593:function(t,e,i){"use strict";var n=i("23d9"),a=i.n(n);a.a},"9fa3":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAADHUlEQVR4Ac3YA8wcXRjF8c+2bdu2bduMP9tGbdtB3Ya1bdvGi+XpP+mT5OZmXkz3znY3+QWDs2c595k9JBXk6quvPhWfYiBmYbuZhYG279RCn6eQgsejIVJQDVJ27PFFK2ol78Q6yDETbfAL/kIHzIQc63Bn4kWt5IvIQKYrLq/m+MvRFTIZvJhoUZ7gBqQgbMdzMc59DtshpHBjIkUJPgzLIaRws6TYLxRlkGUdlkTRnyHzrr9fLfbcCzfiTXMj9orIeQsyPwctSuB+WA9hLPb0Sj6CeZBnPh71sva0DFnmfiGL3g+ZN72S7yMPRbF973t5L0PmgZBFf4aQw7FOyYuRhWqQxcVO3pGWJfwcsmgnCIu9d7MjVEttvcxFEDqFLNoXwlSv6EqollZ5mVMh9A1ZtCOERV5RxRL9jnYMWfRXCFkc7BRdAdXSMifvYGQh/Bqy6OOQedgp2hqqpRZO3sOQeSJk0UNQBqGjU/RcpKAapHBexFepHIeEvjJ1gVCJU52yLyEDIUoGLzk5J1qG0CWJS+gNkGnu/ahuxyTIMwl3eDkNIHNDUqunfhAyuDjien8hnsPzuCji/EuQhtAvyWXeJchAGIN9Ypy7D8ZDyOCSpBfOf0Pmuxjn/QiZv4qxwj8A0yBkcW8tFzVZyM49oFgz06Uog7AO51Rz7DnYAKEMlwSfmQg9H0/jSewVMTvlIczDsRHnH2v7hDxeDDqFEng3JkKOFyOO+xIy43CEs+8oTIDMl0HnegI/Rg5ybMO1UQE2IsuMx5ERJVsGvQFB4I1OydX4AKdj32q+HnujK2QmGJmu2Dt00b4QNuHMWP+RVtbTxSkZtOgGCPXiBtk72wgyDZwfYPCiaQi/FXBP6gt8HrEvaNHhEObioELDkyz6EmSG4uJSLbonukGOpRifsFHohY9xWG3/R/fBjyiHdoO1UeuHmm7UfoB66ILuCZsJmTJc5hctCfa1exaVEPqUZFGncFMIm0q96L8QtpVs0at3PjZDGLwrc/0t+CJBP6MvMhCyuCNWUbuJWwEVSQVe83vEHZOTUo7ZqI/IsWYHWn75MxbU9b4AAAAASUVORK5CYII="},a480:function(t,e,i){"use strict";i.r(e);var n=i("631a"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},a824:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAsCAYAAAATmipGAAADIklEQVR4Ac3YU5gcTRSH8bP+bNu2bdu2bRuxb2Lbtm3btm1U3vgf9k5NdXYvfsmi8e5MPWeeLrv++utDSkM9rMRPSIWFEDr0LzjRCWfmttD7sQFOYTFeyS2hp2A2HDbgOdSGE9VxVE6GpqGTBOWT372BJfK7Kbgzp0L/k5A+yICJs9FNjtmAvMg4mKEPyLpcinMP8Kr/hnUSPAAXxx6KUzBHbrwOv0SMpBsxVs5ZiY/jDE1DB7h96IKzYUocjnJwojlOiiP0T7lJa7yKxfKzJXgt4hrPYJ6cMwePhQy9W9blNJwAw1noAidq4uiI5dNajt+EUjgs2dATMVPW5O0wkYpfsDaBkZSCL7FazumRTGiK/vX4ASbUdRiV4Eh6XY6fnUzoz3KhpkiJOP4wlMKmqJGEwzFG3v5HfENvw3o4TMaxsGx6AnMjRlJF+X1+mE/ocZgKh7W4EZagk9ESTjTFiXhFftYNaT6hKWgmF/oS5ikFn2KlrkUZa/Nwmu94+lYuWh8WwKUYCCc24mHfgX+jjJnxMg9DyMJECc3r+xF6DCbBYQ2ugwX0tUR2RZpvaAO50KewgG7G2uh1GR36mUTWhgV0HKbsOS99Qq/FGjiMwZGwQFLQfM8nAZ/QIzFOhvJVsIB+ksjuSPMNrSUXeh8W0B3yyTYfZ/g+M30okVVhAZ2IGbIuH/V9uLtSPi1G4jBYIKloA7ddAZhv6BA4rMClsID+kMgeSPcOlZn2Hyyge+VJYAHOgiUTOhIOpRDHzskmPB5iS6eRPD3GsXNSCBYiND8c5sIC+F8ieyEjVOjbcuHjYUl4CBvhsFDXZYjQWyX0Tpin0zBX1uWTsJChx0jox0msS90IKwILHWrySpSAecgvkb2RGUuovBptYQl6TB6JF+FsWFyh5eAwLcG3+2oskHX5NCzO0B/gtjsKJo7BzXgL+dAAw7EGThSDxR36hNywOMqii+x/RumLzNhDcQFcNi1Ab1TDH3gZx8HipOttnO5voj9q41+8gZs0SLm6F32FuqgXg5p4RG94LG7BSbAoEnk5XMwWRMdEhx6GfnAx2YCymwHNDzX3IFkaJQAAAABJRU5ErkJggg=="},bf5c:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAQCAYAAAAvf+5AAAAABHNCSVQICAgIfAhkiAAAAKhJREFUKFON0oENwiAQhWFvgzqBruAE1gl0A+kG3UQ7gd1AR3Ej/J+5GpSCbUJCuI+Du2KryhdjDIQvZra2knN0Iz4A+1kI6pWJ0YFGJcsgSIFzijJYQl/Q0YnFwHGP37sboGHxztgxWtBzrkBBBbY19D7a4Yb5oZRtgjpale5r+NMeL+bobcmLSS++qD3ThkUNT/D/X5jgwFyPYqQbXfH1aIO/oCuweQGxPE4RkLp91gAAAABJRU5ErkJggg=="},cf69:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAn9JREFUWEftl0+IzVEUxz9TFhYWFhbEwkYSxRRlYkEIyUJslAUZSTZjRyyIBTvKQiEWFspmioWiKFMUip2iWFiMUqZYzELR53Xuc5ve+73f7743snDr9d7rnnu+3/PnnnPuEH/WHOAwcABYA8zL9qp+vgI2Az8qhPYCd+JzJJcbij8LgfvA2pqgM8VGgBcVZ68Do7E/BlxJshLQ8ucZ+HQo+1STzDvgUg/ZVYGhV38C64HXnpHAceBqKJgA9gOfa4I3ETsI3IoDGjcMTEngGbAR0PJlswSeiEpAIq5xYI8EvkfCPQa2NTGphqzhXQ0sjY+hSAQ8PiaBX6HoNnCohtJeIsuBfcCOyKu5FQemB0lgF3AywtmLZNofHwSBxcCNsDgHti5YI7yebyO3tgBnQ8hEH+6XwIZIpgUZ8gPgJvAwEjttrQwy6SpavCb6IaA1ZnKqmFprlXvTwf/KWGtMQpehatWOUgK5NeoxBMeiyHSK/3ngTGzomZ1JqISAWf0ys+YycKJH1iUCrbgDX/shcBq4kFmzu8LyhGM92BThaYOXhGA+8BHwewpYAUzWvXOZnIS2e0uahuAocC0UeZ3OFYB7JIXkQ1MCT8KVdrRFeSwbEmn3hCYETL5vgN9PYwhpiNsWLyLgsGL2uy4Cp0rRoy23mlITD9hg7gWoTcvmVbqKPWA1c63rUvHqEioioHKHVVenclsXXLliAk1AqmT/E/i3PDCbQ2m3PHgEbE1juVfLh8LfGMsltAR4HxW1NRHlDcaHiQXny6DSfYYe58e72eA62u1pJpFBv458G+jpNKY7wo0M6nHa1GGCO8hMJgIqKH2e1wV3TLeC+kx3aral8xs1MKVLpy17VwAAAABJRU5ErkJggg=="},d79c:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAq1JREFUWEftl0GITWEUx3//srCwsLAgFjaSKKaomViYEJKFzEZZmMwk2YzdiMWIBTvKQjGZhYWymWKhKMoUhRo7RbGwGKVMsZiFOvo/39Xtmvd89703b+Wr2+32nXvO/5zzP+c7n0grIpYBJ4HjwDZgRbH3j/drYFDSj2ZyEXEUuOtH0mhZTv6IiNXAA2B7ptGq2ICkly0A3AJG0v6YpOuFrJLnL0rGFwAr+5QJ5p2kq61kI2ILYBuO6k+gX9Ib/2MAZ4AbScEMcEzS50zj2WIRcQK4k36wc32S5g3gObALsOcblsJ4iWcGYCBe05KOGMD3FJonkvZlu5QhmNK7FVifHqeiAGANYwYQSdeUpOEMvS1FImIjMAQcSLxa3uKHha4BiIhDwHhKZ64f0x0DiIi1wO3kcdmw+4J7hCvqLWBi7wEmkpC/+zoCEBE7TSZgVcnyQ2ASeCTJxG6siNicwBSl6OY10zaAiLA3Nl50THs7Kmm2Gv+IsIz7gEnoNV70jrYAVLyxQqfgtCQ3mb9WRFwCLqQNR+ZgIVQbQESY1a9K3lyTdLYV60oAfudd+toJgPPA5cIb4HAzz0v590G3G5gtG/d+rQhExErgI+D3PLBJ0lxuzVUA7XeV1AVwCriZFE1IuljXeKqIghMf6gJ4mkJpsq2phjMXTET8OROyASTyfQNMwmeSBnMNLlKWbQHwsGL2e12RdK7XAHzA3E9GhyVN9RqAI+Bu5rVjsY6XC6gtDiT2elilE+NJT30O5HqXI9d2BHKU58j8B1CNwJINpc3SERGPgb0+T9wJXVr9vRjLUwWsA96njtqYiMoHjC8mQ5K+5JCprkyaH++VBteRZlczA+n27ch3A0e6GNM9wg1063JaNxg27kFmrgEg5abd63mucY/pHlh9TZ8spqhfqmODHiNCqo4AAAAASUVORK5CYII="},ddd6:function(t,e,i){"use strict";var n=i("4ea4");i("d81d"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(i("5530")),o=n(i("6641")),s=n(i("ec76")),r=n(i("f181")),l=n(i("5b70")),c=n(i("7e68")),d=i("2f62"),u={components:{scenarioTab:o.default,scenarioCommentList:s.default,customPopup:r.default,storeList:l.default,customNavbar:c.default},data:function(){return{backGroundColor:"rgba(0,0,0,0)",isSolid:!1,hasNotchInScreen:!1,press:"../../../static/press.png",heart:"../../../static/heart.png",isReach:!0,id:"",rolesIndex:0,tabList:[{id:0,value:"无剧透"},{id:1,value:"有剧透"}],right_white:i("bf5c"),right_black:i("47c3"),share_black:i("cf69"),share_white:i("d79c")}},computed:(0,a.default)({},(0,d.mapState)({postList:function(t){return t.scenario.postList.list},total:function(t){return t.scenario.postList.total},loader:function(t){return t.scenario.postList.loader},details:function(t){return t.scenario.scenarioDetail},storeData:function(t){return t.scenario.storeList.list},is_spoilered:function(t){return t.scenario.postList.is_spoilered},login:function(t){return t.user.login}})),onPageScroll:function(t){var e=t.scrollTop;this.backGroundColor=e>0?"#FFF":"rgba(0,0,0,0)",this.isSolid=e>0},onLoad:function(t){var e=t.id;this.id=e,this.$store.commit("scenario/RESET_SCENARIO_DETAIL"),this.$store.commit("scenario/RESET_POST_LIST"),this.$store.dispatch("scenario/setScenarioDetail",this.id),this.$store.dispatch("scenario/setPostList",this.id)},onPullDownRefresh:function(){this.$store.commit("scenario/RESET_SCENARIO_DETAIL"),this.$store.commit("scenario/RESET_POST_LIST"),this.$store.dispatch("scenario/setScenarioDetail",this.id),this.$store.dispatch("scenario/setPostList",this.id),uni.stopPullDownRefresh()},methods:{downloadApp:function(){this.$refs.download.open()},choice:function(t){this.isReach=!1,this.$store.commit("scenario/RESET_POST_LIST",t),this.$store.dispatch("scenario/setPostList",this.id)},jumpAllComment:function(){uni.navigateTo({url:"/pages/scenario/allComments/allComments?id=".concat(this.id)})},jumpComment:function(){this.$refs.download.open()},handlePlay:function(t){this.$refs.download.open()},handleLike:function(t){this.$store.dispatch("scenario/setPostLike",t)},handleOpenAddress:function(){this.$refs.address.open()},handleBack:function(){uni.navigateBack(),uni.$emit("back")},handleShare:function(){this.$refs.share.open()},handleOpenRoles:function(t){this.$refs.roles.open(),this.rolesIndex=t},handlePreviewImage:function(t,e){var i=[];i=t.map((function(t){return t.img.url})),uni.previewImage({current:e,urls:i})}}};e.default=u},f3a2:function(t,e,i){"use strict";var n=i("4ea4");i("fb6a"),i("a9e3"),i("d3b7"),i("ac1f"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("96cf");var a=n(i("1da1")),o={name:"OverflowEllipsis",props:{content:String,line:{type:Number,default:1},showButton:{type:Boolean,default:!0}},data:function(){return{viewContentLength:0,foldViewContentLength:0,showAll:!1,isOverflow:!0,isOverFlowHeight:0,isAdjustFinish:!1}},watch:{content:{handler:function(){var t=this;this.init(),this.$nextTick((function(){t.content&&t.adjustContentLength()}))},immediate:!0}},computed:{viewContent:function(){return this.content.slice(0,this.viewContentLength)}},mounted:function(){this.getIsOverFlowHeight()},methods:{init:function(){this.viewContentLength=this.content.length,this.isOverflow=!0,this.showAll=!1,this.isAdjustFinish=!1},getIsOverFlowHeight:function(){var t=this;uni.createSelectorQuery().in(this).select("#OverflowEllipsis-unitrow").boundingClientRect().exec((function(e){t.isOverFlowHeight=e[0].height*t.line}))},checkIsOverflow:function(){var t=this;return new Promise((function(e,i){uni.createSelectorQuery().in(t).select("#OverflowEllipsis-contentBox").boundingClientRect().exec((function(i){var n=i[0].height>t.isOverFlowHeight;e(n)}))}))},adjustContentLength:function(){var t=arguments,e=this;return(0,a.default)(regeneratorRuntime.mark((function i(){var n,a,o;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:if(n=t.length>0&&void 0!==t[0]?t[0]:0,a=t.length>1&&void 0!==t[1]?t[1]:e.content.length,!(n+1>=a)){i.next=7;break}return e.foldViewContentLength=e.viewContentLength,e.isOverflow=e.content.length>e.viewContentLength,e.isAdjustFinish=!0,i.abrupt("return");case 7:return i.next=9,e.checkIsOverflow();case 9:o=i.sent,o?a=e.viewContentLength:n=e.viewContentLength,e.viewContentLength=Math.floor((n+a)/2),e.$nextTick((function(){e.adjustContentLength(n,a)}));case 13:case"end":return i.stop()}}),i)})))()},toggleShowAll:function(){this.viewContentLength=this.showAll?this.foldViewContentLength:this.content.length,this.showAll=!this.showAll}}};e.default=o},fac1:function(t,e,i){"use strict";i.r(e);var n=i("0f70"),a=i("09c0");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("9593");var s,r=i("f0c5"),l=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,"00197f1e",null,!1,n["a"],s);e["default"]=l.exports}}]);