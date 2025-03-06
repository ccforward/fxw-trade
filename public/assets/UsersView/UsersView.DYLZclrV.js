import{_ as K,r,o as O,c as Q,a,w as l,E as W,b as X,d as E,e as u,f as C,g as Y,h as Z,i as h,j as d,k as x,l as ee,m as ae,n as le,t as R,p as se,v as oe,q as te,s as re,u as ne,x as de}from"../index/index.Cvs2YD_u.js";/* empty css                                         */const ue={class:"user-management"},ie={class:"header"},me={__name:"UsersView",setup(pe){const P=r(!1),i=r(!1),p=r(!1),n=r({username:"",password:"",confirmPassword:""}),c=r(!1),g=r(!1),U=r(),$={username:[{required:!0,message:"请输入用户名",trigger:"blur"},{min:1,message:"用户名至少1个字符",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"},{min:6,message:"密码至少6个字符",trigger:"blur"}],confirmPassword:[{required:!0,message:"请确认密码",trigger:"blur"},{validator:(s,e,t)=>{e!==n.value.password?t(new Error("两次输入密码不一致")):t()},trigger:"blur"}]},A=()=>{n.value={username:"",password:""},p.value=!0},H=async()=>{await U.value.validate();try{i.value=!0;const s=await E({path:"/api/users/create",data:{username:n.value.username.trim(),password:n.value.password.trim()}});if(s.success===!1)throw new Error(s.message);u.success("用户创建成功"),p.value=!1,y()}catch(s){console.error(s),u.error(s.message||"用户创建失败")}finally{i.value=!1}},B=r([]),f=r([]),v=r(!1),m=r({id:"",newPassword:""}),_=r(!1),D=r(),z={newPassword:[{required:!0,message:"请输入新密码",trigger:"blur"}]},y=async()=>{try{P.value=!0;const s=await E({path:"/api/users/list"});if(s.success===!1)throw new Error(s.message);B.value=s.data,f.value=new Array(s.data.length).fill(!1)}catch(s){console.error(s),u.error(s.message||"获取用户列表失败")}finally{P.value=!1}},I=s=>{f.value[s]=!f.value[s]},L=s=>{m.value={id:s.id,newPassword:""},v.value=!0},M=async()=>{await D.value.validate();try{i.value=!0;const s=await E({path:"/api/users/update",data:{id:m.value.id,password:m.value.newPassword}});if(s.success===!1)throw new Error(s.message);u.success("密码修改成功"),v.value=!1,y()}catch(s){u.error(s.message||"密码修改失败")}finally{i.value=!1}},N=async s=>{try{await de.confirm("确认删除该用户？","警告",{confirmButtonText:"确认",cancelButtonText:"取消",type:"warning"}),await E({path:"/api/users/delete",data:{id:s}}),u.success("用户删除成功"),y()}catch(e){e!=="cancel"&&u.error("删除操作失败")}};return O(y),(s,e)=>{const t=h,V=ae,F=le,j=se,S=ee,G=W,b=ne,k=re,T=te,q=X,J=oe;return C(),Q("div",ue,[a(G,null,{default:l(()=>[Y("div",ie,[a(t,{type:"primary",onClick:A},{default:l(()=>e[11]||(e[11]=[d("新增用户")])),_:1})]),Z((C(),x(S,{data:B.value,border:""},{default:l(()=>[a(V,{prop:"name",label:"用户名",width:"180"}),a(V,{label:"密码",width:"220"},{default:l(({row:o,$index:w})=>[f.value[w]?(C(),x(F,{key:1},{default:l(()=>[d(R(o.password),1)]),_:2},1024)):(C(),x(F,{key:0},{default:l(()=>e[12]||(e[12]=[d("******")])),_:1})),a(t,{size:"small",onClick:fe=>I(w),icon:f.value[w]?"Hide":"View",style:{float:"right"}},null,8,["onClick","icon"])]),_:1}),a(V,{label:"角色"},{default:l(({row:o})=>[a(j,{type:o.role===100?"danger":"primary"},{default:l(()=>[d(R(o.role===100?"管理员":"普通用户"),1)]),_:2},1032,["type"])]),_:1}),a(V,{label:"操作",width:"200"},{default:l(({row:o})=>[a(t,{type:"primary",size:"small",onClick:w=>L(o)},{default:l(()=>e[13]||(e[13]=[d(" 修改 ")])),_:2},1032,["onClick"]),a(t,{type:"danger",size:"small",onClick:w=>N(o.id)},{default:l(()=>e[14]||(e[14]=[d(" 删除 ")])),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])),[[J,P.value]])]),_:1}),a(q,{modelValue:v.value,"onUpdate:modelValue":e[3]||(e[3]=o=>v.value=o),title:"修改密码",width:"500px"},{footer:l(()=>[a(t,{onClick:e[2]||(e[2]=o=>v.value=!1)},{default:l(()=>e[15]||(e[15]=[d("取消")])),_:1}),a(t,{loading:i.value,type:"primary",onClick:M},{default:l(()=>e[16]||(e[16]=[d("确认修改")])),_:1},8,["loading"])]),default:l(()=>[a(T,{model:m.value,rules:z,ref_key:"editFormRef",ref:D},{default:l(()=>[a(k,{label:"新密码",prop:"newPassword"},{default:l(()=>[a(b,{modelValue:m.value.newPassword,"onUpdate:modelValue":e[1]||(e[1]=o=>m.value.newPassword=o),type:_.value?"text":"password",placeholder:"请输入新密码"},{suffix:l(()=>[a(t,{link:"",icon:_.value?"Hide":"View",onClick:e[0]||(e[0]=o=>_.value=!_.value)},null,8,["icon"])]),_:1},8,["modelValue","type"])]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue"]),a(q,{modelValue:p.value,"onUpdate:modelValue":e[10]||(e[10]=o=>p.value=o),title:"新增用户",width:"500px"},{footer:l(()=>[a(t,{onClick:e[9]||(e[9]=o=>p.value=!1)},{default:l(()=>e[17]||(e[17]=[d("取消")])),_:1}),a(t,{loading:i.value,type:"primary",onClick:H},{default:l(()=>e[18]||(e[18]=[d("确认创建")])),_:1},8,["loading"])]),default:l(()=>[a(T,{model:n.value,rules:$,ref_key:"addFormRef",ref:U,"label-width":"auto","label-position":"right"},{default:l(()=>[a(k,{label:"用户名",prop:"username"},{default:l(()=>[a(b,{modelValue:n.value.username,"onUpdate:modelValue":e[4]||(e[4]=o=>n.value.username=o),placeholder:"请输入用户名"},null,8,["modelValue"])]),_:1}),a(k,{label:"密码",prop:"password"},{default:l(()=>[a(b,{modelValue:n.value.password,"onUpdate:modelValue":e[6]||(e[6]=o=>n.value.password=o),type:c.value?"text":"password",placeholder:"请输入密码"},{suffix:l(()=>[a(t,{link:"",icon:c.value?"Hide":"View",onClick:e[5]||(e[5]=o=>c.value=!c.value)},null,8,["icon"])]),_:1},8,["modelValue","type"])]),_:1}),a(k,{label:"确认密码",prop:"confirmPassword"},{default:l(()=>[a(b,{modelValue:n.value.confirmPassword,"onUpdate:modelValue":e[8]||(e[8]=o=>n.value.confirmPassword=o),type:g.value?"text":"password",placeholder:"请再次输入密码"},{suffix:l(()=>[a(t,{link:"",icon:g.value?"Hide":"View",onClick:e[7]||(e[7]=o=>g.value=!g.value)},null,8,["icon"])]),_:1},8,["modelValue","type"])]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue"])])}}},ce=K(me,[["__scopeId","data-v-d7ce4bef"]]);export{ce as default};
