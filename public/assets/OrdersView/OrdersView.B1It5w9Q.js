import{_ as T,r as i,y as b,o as S,c as A,a as e,w as t,E as L,b as j,d as V,e as v,f as R,h as z,q as $,s as P,u as G,z as H,A as J,B as K,i as Q,j as m,k as W,l as X,m as Z,t as y,p as ee,v as ae,x as le}from"../index/index.Cvs2YD_u.js";/* empty css                                         */const te={class:"order-management"},oe={__name:"OrdersView",setup(de){const _=i(!1),r=i({createUserId:"",dateRange:[b().subtract(10,"day").format("YYYY-MM-DD"),b().format("YYYY-MM-DD")],status:1}),D=i([]),c=i(!1),g=i(!1),o=i({clientName:"",invoiceNumber:"",contractNumber:"",cargoDetail:"",accountsReceivable:"",date:b().format("YYYY-MM-DD"),status:1}),Y=i(),M={clientName:[{required:!0,message:"请输入客户名称",trigger:"blur"}],invoiceNumber:[{required:!0,message:"请输入发票号",trigger:"blur"}],accountsReceivable:[{required:!0,message:"请输入应收金额",trigger:"blur"}],date:[{required:!0,message:"请选择日期",trigger:"change"}]},f=async()=>{try{_.value=!0;const n={startDate:r.value.dateRange[0],endDate:r.value.dateRange[1],...r.value};delete n.dateRange;const a=await V({path:"/api/orders/list",method:"post",data:n});a.success&&(D.value=a.data.map(s=>(s.date=b(s.date).format("YYYY-MM-DD"),s)))}catch(n){v.error(n.message||"获取订单失败")}finally{_.value=!1}},x=()=>{f()},U=()=>{c.value=!0},k=async()=>{await Y.value.validate();try{g.value=!0,await V({path:"/api/orders/add",method:"post",data:o.value}),v.success("订单创建成功"),c.value=!1,f()}catch(n){v.error(n.message||"订单创建失败")}finally{g.value=!1}},h=async n=>{try{await le.confirm("确认标记为已收款？","操作确认",{confirmButtonText:"确认",cancelButtonText:"取消",type:"warning"}),await V({path:"/api/orders/updateStatus",method:"post",data:{id:n.id,status:10}}),v.success("状态更新成功"),f()}catch(a){a!=="cancel"&&v.error("状态更新失败")}};return S(()=>{f()}),(n,a)=>{const s=G,d=P,w=H,N=K,C=J,p=Q,E=$,u=Z,B=ee,q=X,F=L,I=j,O=ae;return R(),A("div",te,[e(F,null,{default:t(()=>[e(E,{inline:!0,model:r.value,class:"search-form"},{default:t(()=>[e(d,{label:"创建人"},{default:t(()=>[e(s,{modelValue:r.value.createUserId,"onUpdate:modelValue":a[0]||(a[0]=l=>r.value.createUserId=l),placeholder:"输入用户名",clearable:""},null,8,["modelValue"])]),_:1}),e(d,{label:"日期范围"},{default:t(()=>[e(w,{modelValue:r.value.dateRange,"onUpdate:modelValue":a[1]||(a[1]=l=>r.value.dateRange=l),type:"daterange","range-separator":"-","start-placeholder":"开始日期","end-placeholder":"结束日期","value-format":"YYYY-MM-DD"},null,8,["modelValue"])]),_:1}),e(d,{label:"状态"},{default:t(()=>[e(C,{style:{width:"100px"},modelValue:r.value.status,"onUpdate:modelValue":a[2]||(a[2]=l=>r.value.status=l),placeholder:"全部",clearable:""},{default:t(()=>[e(N,{label:"待收款",value:1}),e(N,{label:"已收款",value:10})]),_:1},8,["modelValue"])]),_:1}),e(d,null,{default:t(()=>[e(p,{type:"primary",onClick:x},{default:t(()=>a[11]||(a[11]=[m("查询")])),_:1})]),_:1}),e(d,null,{default:t(()=>[e(p,{type:"success",onClick:U},{default:t(()=>a[12]||(a[12]=[m("新增订单")])),_:1})]),_:1})]),_:1},8,["model"]),z((R(),W(q,{data:D.value,border:"",style:{width:"100%"}},{default:t(()=>[e(u,{type:"index",label:"序号",width:"60"}),e(u,{prop:"createUserName",label:"创建人",width:"120"}),e(u,{prop:"date",label:"日期",width:"120"}),e(u,{prop:"clientName",label:"客户名称",width:"150"}),e(u,{prop:"invoiceNumber",label:"发票号",width:"120"}),e(u,{prop:"contractNumber",label:"合同号",width:"120"}),e(u,{prop:"cargoDetail",label:"货物明细","min-width":"200"}),e(u,{prop:"accountsReceivable",label:"应收货款",width:"120"},{default:t(({row:l})=>[m(y(l.accountsReceivable),1)]),_:1}),e(u,{prop:"status",label:"状态",width:"100"},{default:t(({row:l})=>[e(B,{type:l.status===10?"success":"warning"},{default:t(()=>[m(y(l.status===10?"已收款":"待收款"),1)]),_:2},1032,["type"])]),_:1}),e(u,{label:"操作",width:"120"},{default:t(({row:l})=>[e(p,{type:l.status===10?"info":"primary",size:"small",onClick:re=>h(l),disabled:l.status===10},{default:t(()=>[m(y(l.status===10?"已完成":"标记收款"),1)]),_:2},1032,["type","onClick","disabled"])]),_:1})]),_:1},8,["data"])),[[O,_.value]])]),_:1}),e(I,{modelValue:c.value,"onUpdate:modelValue":a[10]||(a[10]=l=>c.value=l),title:"新增订单",width:"600px"},{footer:t(()=>[e(p,{onClick:a[9]||(a[9]=l=>c.value=!1)},{default:t(()=>a[13]||(a[13]=[m("取消")])),_:1}),e(p,{loading:g.value,type:"primary",onClick:k},{default:t(()=>a[14]||(a[14]=[m(" 确认新增 ")])),_:1},8,["loading"])]),default:t(()=>[e(E,{model:o.value,rules:M,ref_key:"addFormRef",ref:Y,"label-width":"100px"},{default:t(()=>[e(d,{label:"客户名称",prop:"clientName"},{default:t(()=>[e(s,{modelValue:o.value.clientName,"onUpdate:modelValue":a[3]||(a[3]=l=>o.value.clientName=l),placeholder:"输入客户名称"},null,8,["modelValue"])]),_:1}),e(d,{label:"发票号",prop:"invoiceNumber"},{default:t(()=>[e(s,{modelValue:o.value.invoiceNumber,"onUpdate:modelValue":a[4]||(a[4]=l=>o.value.invoiceNumber=l),placeholder:"输入发票号码"},null,8,["modelValue"])]),_:1}),e(d,{label:"合同号",prop:"contractNumber"},{default:t(()=>[e(s,{modelValue:o.value.contractNumber,"onUpdate:modelValue":a[5]||(a[5]=l=>o.value.contractNumber=l),placeholder:"输入合同编号"},null,8,["modelValue"])]),_:1}),e(d,{label:"货物明细",prop:"cargoDetail"},{default:t(()=>[e(s,{modelValue:o.value.cargoDetail,"onUpdate:modelValue":a[6]||(a[6]=l=>o.value.cargoDetail=l),type:"textarea",rows:3,placeholder:"输入货物详细信息"},null,8,["modelValue"])]),_:1}),e(d,{label:"应收货款",prop:"accountsReceivable"},{default:t(()=>[e(s,{modelValue:o.value.accountsReceivable,"onUpdate:modelValue":a[7]||(a[7]=l=>o.value.accountsReceivable=l),placeholder:"输入金额"},null,8,["modelValue"])]),_:1}),e(d,{label:"日期",prop:"date"},{default:t(()=>[e(w,{modelValue:o.value.date,"onUpdate:modelValue":a[8]||(a[8]=l=>o.value.date=l),type:"date",placeholder:"选择日期","value-format":"YYYY-MM-DD"},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue"])])}}},ne=T(oe,[["__scopeId","data-v-279db0c8"]]);export{ne as default};
