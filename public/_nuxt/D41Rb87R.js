import{E}from"./CAYgcm9m.js";import{a as w,E as k,u as V,b as q}from"./B3en76v2.js";import{E as C}from"./DjFJZaCT.js";import{_ as B}from"./D4R3U5Ns.js";import{E as j}from"./DG4vFwbg.js";import"./BO-BUzP0.js";import"./RrxjGB37.js";import{E as p}from"./Dtsb2UZl.js";import{Q as T}from"./BAqQFXgv.js";import{f as F,r as d,c as I,b as t,w as i,N as M,a as f,o as N,d as g,j as O}from"./CsIamsOv.js";import"./D-9BgIql.js";import"./r5W6hzzQ.js";const U=f("h5",null,"选择分类：",-1),z=f("h5",null,"标题：",-1),X=F({__name:"publish",setup(D){const _=[["bold","italic","underline","strike"],["blockquote","code-block"],["link","image"],[{header:1},{header:2}],[{list:"ordered"},{list:"bullet"},{list:"check"}],[{script:"sub"},{script:"super"}],[{indent:"-1"},{indent:"+1"}],[{direction:"rtl"}],[{size:["small",!1,"large","huge"]}],[{header:[1,2,3,4,5,6,!1]}],[{color:[]},{background:[]}],[{font:[]}],[{align:[]}],["clean"]],r=d(""),m=d(""),u=d(""),y={theme:"snow",placeholder:"请输入内容",modules:{toolbar:{container:_,handlers:{image:function(){var o;(o=document.getElementById("getFile"))==null||o.click()}}}}},b=async o=>{const e=o.target.files[0],a=new FormData;a.append("img",e);let l;if(l=await V(a),l){const s=await l.json();if(s.code===0){const c=document.querySelector(".ql-editor");c&&(c.innerHTML+=`<img src="${s.data.imageUrl}" alt="图片" style="max-width: 100%; max-height: 400px;"  />`)}else p({message:s.message,type:"error"})}},h=async()=>{let o;if(o=await w(r.value,m.value,u.value),o){const e=await o.json();if(e.code===0){p({message:e.message,type:"success"}),r.value="",m.value="",u.value="";const a=document.querySelector(".ql-editor");a&&(a.innerHTML="")}else p({message:e.message,type:"error"})}else console.log("Error fetching user info")};return(o,e)=>{const a=E,l=q,s=k,c=C,v=B,x=j;return N(),I(M,null,[t(a,{class:"mx-1",type:"info"},{default:i(()=>[g("发布帖子")]),_:1}),U,t(s,{modelValue:r.value,"onUpdate:modelValue":e[0]||(e[0]=n=>r.value=n),placeholder:"选择",style:{width:"100%"},size:"large"},{default:i(()=>[t(l,{label:"招聘",value:"招聘"}),t(l,{label:"新闻",value:"新闻"}),t(l,{label:"生活",value:"生活"}),t(l,{label:"科技",value:"科技"}),t(l,{label:"娱乐",value:"娱乐"}),t(l,{label:"社会",value:"社会"}),t(l,{label:"编程",value:"编程"})]),_:1},8,["modelValue"]),z,t(c,{modelValue:m.value,"onUpdate:modelValue":e[1]||(e[1]=n=>m.value=n),style:{width:"100%",height:"40px","margin-bottom":"20px"},placeholder:"标题推荐在30字以内"},null,8,["modelValue"]),t(a,{class:"mx-1",type:"danger"},{default:i(()=>[g("注意: 单张图片不能高于2MB!")]),_:1}),t(v,null,{default:i(()=>[t(O(T),{options:y,content:u.value,"onUpdate:content":e[2]||(e[2]=n=>u.value=n),"content-type":"html"},null,8,["content"]),f("input",{type:"file",style:{display:"none"},id:"getFile",onChange:e[3]||(e[3]=n=>b(n)),accept:"image/gif,image/jpeg,image/jpg,image/png"},null,32)]),_:1}),t(x,{type:"primary",size:"large",style:{"margin-top":"20px",width:"100%"},onClick:h},{default:i(()=>[g("发布")]),_:1})],64)}}});export{X as default};
