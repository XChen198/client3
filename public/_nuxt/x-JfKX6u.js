import{_ as ke}from"./BNo7q0CF.js";import{f as Se,a as Be,E as Oe}from"./z0lRkXp0.js";import{E as Re}from"./CAYgcm9m.js";import{E as ze}from"./Zit-6Cij.js";import{E as Ae}from"./DCPSvxVJ.js";import{E as De}from"./CYz9hpGZ.js";import{b as X,d as ce,m as ge,t as re,u as he,_ as ye,a as Ve,c as je,E as W,e as Ie,f as Fe,g as Le,h as G,p as Me,w as Ke,i as Ue}from"./BO-BUzP0.js";import{s as qe,l as He,f as I,m as ie,n as Y,r as g,q as j,v as ue,o as V,c as U,x as Ce,j as O,y as We,z as Q,A as J,h as de,B as Ge,b as o,C as Je,D as le,E as fe,F as Xe,G as Ye,H as Qe,I as ve,J as Ze,K as et,L as tt,M as at,k as st,w as C,N as se,O as be,i as me,d as D,t as K,p as ot,e as nt,a as lt}from"./CsIamsOv.js";import{c as R,g as H,d as ct}from"./B3en76v2.js";import{U as we}from"./DjFJZaCT.js";import"./RrxjGB37.js";import{E as pe}from"./Dtsb2UZl.js";import{g as oe,d as rt}from"./BQbn65E-.js";import{_ as it}from"./DlAUqK2U.js";import"./D-9BgIql.js";const ut=(e,i,u)=>Se(e.subTree).filter(t=>{var b;return He(t)&&((b=t.type)==null?void 0:b.name)===i&&!!t.component}).map(t=>t.component.uid).map(t=>u[t]).filter(t=>!!t),dt=(e,i)=>{const u={},w=qe([]);return{children:w,addChild:b=>{u[b.uid]=b,w.value=ut(e,i,u)},removeChild:b=>{delete u[b],w.value=w.value.filter(P=>P.uid!==b)}}},Z=Symbol("tabsRootContextKey"),ft=X({tabs:{type:ce(Array),default:()=>ge([])}}),Ee="ElTabBar",vt=I({name:Ee}),bt=I({...vt,props:ft,setup(e,{expose:i}){const u=e,w=Q(),d=ie(Z);d||re(Ee,"<el-tabs><el-tab-bar /></el-tabs>");const t=Y("tabs"),b=g(),P=g(),m=()=>{let p=0,N=0;const y=["top","bottom"].includes(d.props.tabPosition)?"width":"height",f=y==="width"?"x":"y",S=f==="x"?"left":"top";return u.tabs.every(a=>{var s,n;const l=(n=(s=w.parent)==null?void 0:s.refs)==null?void 0:n[`tab-${a.uid}`];if(!l)return!1;if(!a.active)return!0;p=l[`offset${R(S)}`],N=l[`client${R(y)}`];const _=window.getComputedStyle(l);return y==="width"&&(u.tabs.length>1&&(N-=Number.parseFloat(_.paddingLeft)+Number.parseFloat(_.paddingRight)),p+=Number.parseFloat(_.paddingLeft)),!1}),{[y]:`${N}px`,transform:`translate${R(f)}(${p}px)`}},h=()=>P.value=m();return j(()=>u.tabs,async()=>{await ue(),h()},{immediate:!0}),he(b,()=>h()),i({ref:b,update:h}),(p,N)=>(V(),U("div",{ref_key:"barRef",ref:b,class:Ce([O(t).e("active-bar"),O(t).is(O(d).props.tabPosition)]),style:We(P.value)},null,6))}});var mt=ye(bt,[["__file","tab-bar.vue"]]);const pt=X({panes:{type:ce(Array),default:()=>ge([])},currentName:{type:[String,Number],default:""},editable:Boolean,type:{type:String,values:["card","border-card",""],default:""},stretch:Boolean}),_t={tabClick:(e,i,u)=>u instanceof Event,tabRemove:(e,i)=>i instanceof Event},_e="ElTabNav",gt=I({name:_e,props:pt,emits:_t,setup(e,{expose:i,emit:u}){const w=Q(),d=ie(Z);d||re(_e,"<el-tabs><tab-nav /></el-tabs>");const t=Y("tabs"),b=Ve(),P=je(),m=g(),h=g(),p=g(),N=g(),y=g(!1),f=g(0),S=g(!1),a=g(!0),s=J(()=>["top","bottom"].includes(d.props.tabPosition)?"width":"height"),n=J(()=>({transform:`translate${s.value==="width"?"X":"Y"}(-${f.value}px)`})),l=()=>{if(!m.value)return;const v=m.value[`offset${R(s.value)}`],c=f.value;if(!c)return;const r=c>v?c-v:0;f.value=r},_=()=>{if(!m.value||!h.value)return;const v=h.value[`offset${R(s.value)}`],c=m.value[`offset${R(s.value)}`],r=f.value;if(v-r<=c)return;const x=v-r>c*2?r+c:v-c;f.value=x},z=async()=>{const v=h.value;if(!y.value||!p.value||!m.value||!v)return;await ue();const c=p.value.querySelector(".is-active");if(!c)return;const r=m.value,x=["top","bottom"].includes(d.props.tabPosition),$=c.getBoundingClientRect(),T=r.getBoundingClientRect(),B=x?v.offsetWidth-T.width:v.offsetHeight-T.height,k=f.value;let E=k;x?($.left<T.left&&(E=k-(T.left-$.left)),$.right>T.right&&(E=k+$.right-T.right)):($.top<T.top&&(E=k-(T.top-$.top)),$.bottom>T.bottom&&(E=k+($.bottom-T.bottom))),E=Math.max(E,0),f.value=Math.min(E,B)},L=()=>{var v;if(!h.value||!m.value)return;e.stretch&&((v=N.value)==null||v.update());const c=h.value[`offset${R(s.value)}`],r=m.value[`offset${R(s.value)}`],x=f.value;r<c?(y.value=y.value||{},y.value.prev=x,y.value.next=x+r<c,c-x<r&&(f.value=c-r)):(y.value=!1,x>0&&(f.value=0))},q=v=>{const c=v.code,{up:r,down:x,left:$,right:T}=G;if(![r,x,$,T].includes(c))return;const B=Array.from(v.currentTarget.querySelectorAll("[role=tab]:not(.is-disabled)")),k=B.indexOf(v.target);let E;c===$||c===r?k===0?E=B.length-1:E=k-1:k<B.length-1?E=k+1:E=0,B[E].focus({preventScroll:!0}),B[E].click(),M()},M=()=>{a.value&&(S.value=!0)},F=()=>S.value=!1;return j(b,v=>{v==="hidden"?a.value=!1:v==="visible"&&setTimeout(()=>a.value=!0,50)}),j(P,v=>{v?setTimeout(()=>a.value=!0,50):a.value=!1}),he(p,L),de(()=>setTimeout(()=>z(),0)),Ge(()=>L()),i({scrollToActiveTab:z,removeFocus:F}),j(()=>e.panes,()=>w.update(),{flush:"post",deep:!0}),()=>{const v=y.value?[o("span",{class:[t.e("nav-prev"),t.is("disabled",!y.value.prev)],onClick:l},[o(W,null,{default:()=>[o(Ie,null,null)]})]),o("span",{class:[t.e("nav-next"),t.is("disabled",!y.value.next)],onClick:_},[o(W,null,{default:()=>[o(Fe,null,null)]})])]:null,c=e.panes.map((r,x)=>{var $,T,B,k;const E=r.uid,ee=r.props.disabled,te=(T=($=r.props.name)!=null?$:r.index)!=null?T:`${x}`,ae=!ee&&(r.isClosable||e.editable);r.index=`${x}`;const Ne=ae?o(W,{class:"is-icon-close",onClick:A=>u("tabRemove",r,A)},{default:()=>[o(Le,null,null)]}):null,xe=((k=(B=r.slots).label)==null?void 0:k.call(B))||r.props.label,$e=!ee&&r.active?0:-1;return o("div",{ref:`tab-${E}`,class:[t.e("item"),t.is(d.props.tabPosition),t.is("active",r.active),t.is("disabled",ee),t.is("closable",ae),t.is("focus",S.value)],id:`tab-${te}`,key:`tab-${E}`,"aria-controls":`pane-${te}`,role:"tab","aria-selected":r.active,tabindex:$e,onFocus:()=>M(),onBlur:()=>F(),onClick:A=>{F(),u("tabClick",r,te,A)},onKeydown:A=>{ae&&(A.code===G.delete||A.code===G.backspace)&&u("tabRemove",r,A)}},[xe,Ne])});return o("div",{ref:p,class:[t.e("nav-wrap"),t.is("scrollable",!!y.value),t.is(d.props.tabPosition)]},[v,o("div",{class:t.e("nav-scroll"),ref:m},[o("div",{class:[t.e("nav"),t.is(d.props.tabPosition),t.is("stretch",e.stretch&&["top","bottom"].includes(d.props.tabPosition))],ref:h,style:n.value,role:"tablist",onKeydown:q},[e.type?null:o(mt,{ref:N,tabs:[...e.panes]},null),c])])])}}}),ht=X({type:{type:String,values:["card","border-card",""],default:""},closable:Boolean,addable:Boolean,modelValue:{type:[String,Number]},editable:Boolean,tabPosition:{type:String,values:["top","right","bottom","left"],default:"top"},beforeLeave:{type:ce(Function),default:()=>!0},stretch:Boolean}),ne=e=>Xe(e)||Ye(e),yt={[we]:e=>ne(e),tabClick:(e,i)=>i instanceof Event,tabChange:e=>ne(e),edit:(e,i)=>["remove","add"].includes(i),tabRemove:e=>ne(e),tabAdd:()=>!0},Ct=I({name:"ElTabs",props:ht,emits:yt,setup(e,{emit:i,slots:u,expose:w}){var d;const t=Y("tabs"),{children:b,addChild:P,removeChild:m}=dt(Q(),"ElTabPane"),h=g(),p=g((d=e.modelValue)!=null?d:"0"),N=async(a,s=!1)=>{var n,l,_;if(!(p.value===a||fe(a)))try{await((n=e.beforeLeave)==null?void 0:n.call(e,a,p.value))!==!1&&(p.value=a,s&&(i(we,a),i("tabChange",a)),(_=(l=h.value)==null?void 0:l.removeFocus)==null||_.call(l))}catch{}},y=(a,s,n)=>{a.props.disabled||(N(s,!0),i("tabClick",a,n))},f=(a,s)=>{a.props.disabled||fe(a.props.name)||(s.stopPropagation(),i("edit",a.props.name,"remove"),i("tabRemove",a.props.name))},S=()=>{i("edit",void 0,"add"),i("tabAdd")};return j(()=>e.modelValue,a=>N(a)),j(p,async()=>{var a;await ue(),(a=h.value)==null||a.scrollToActiveTab()}),Je(Z,{props:e,currentName:p,registerPane:P,unregisterPane:m}),w({currentName:p}),()=>{const a=u["add-icon"],s=e.editable||e.addable?o("span",{class:t.e("new-tab"),tabindex:"0",onClick:S,onKeydown:_=>{_.code===G.enter&&S()}},[a?le(u,"add-icon"):o(W,{class:t.is("icon-plus")},{default:()=>[o(Me,null,null)]})]):null,n=o("div",{class:[t.e("header"),t.is(e.tabPosition)]},[s,o(gt,{ref:h,currentName:p.value,editable:e.editable,type:e.type,panes:b.value,stretch:e.stretch,onTabClick:y,onTabRemove:f},null)]),l=o("div",{class:t.e("content")},[le(u,"default")]);return o("div",{class:[t.b(),t.m(e.tabPosition),{[t.m("card")]:e.type==="card",[t.m("border-card")]:e.type==="border-card"}]},[...e.tabPosition!=="bottom"?[n,l]:[l,n]])}}}),wt=X({label:{type:String,default:""},name:{type:[String,Number]},closable:Boolean,disabled:Boolean,lazy:Boolean}),Et=["id","aria-hidden","aria-labelledby"],Pe="ElTabPane",Pt=I({name:Pe}),Tt=I({...Pt,props:wt,setup(e){const i=e,u=Q(),w=Qe(),d=ie(Z);d||re(Pe,"usage: <el-tabs><el-tab-pane /></el-tabs/>");const t=Y("tab-pane"),b=g(),P=J(()=>i.closable||d.props.closable),m=ve(()=>{var f;return d.currentName.value===((f=i.name)!=null?f:b.value)}),h=g(m.value),p=J(()=>{var f;return(f=i.name)!=null?f:b.value}),N=ve(()=>!i.lazy||h.value||m.value);j(m,f=>{f&&(h.value=!0)});const y=Ze({uid:u.uid,slots:w,props:i,paneName:p,active:m,index:b,isClosable:P});return de(()=>{d.registerPane(y)}),et(()=>{d.unregisterPane(y.uid)}),(f,S)=>O(N)?tt((V(),U("div",{key:0,id:`pane-${O(p)}`,class:Ce(O(t).b()),role:"tabpanel","aria-hidden":!O(m),"aria-labelledby":`tab-${O(p)}`},[le(f.$slots,"default")],10,Et)),[[at,O(m)]]):st("v-if",!0)}});var Te=ye(Tt,[["__file","tab-pane.vue"]]);const Nt=Ke(Ct,{TabPane:Te}),xt=Ue(Te),$t=e=>(ot("data-v-f20620e3"),e=e(),nt(),e),kt=$t(()=>lt("h1",null,"管理员",-1)),St=I({__name:"admin",setup(e){const i=g("first"),u=g(1),w=g(1),d=g(""),t=g(""),b=g([]),P=g(0),m=g([]),h=g(0);de(async()=>{const a=await H(u.value,d.value,t.value),s=await(a==null?void 0:a.json());s.code===0?(b.value=s.data.result,P.value=s.data.total):console.log("Error in getting posts")});const p=async a=>{u.value=a;const s=await H(u.value,d.value,t.value),n=await(s==null?void 0:s.json());n.code===0?(b.value=n.data.result,P.value=n.data.total):console.log("Error in getting posts")},N=async a=>{w.value=a;const s=await oe(w.value),n=await(s==null?void 0:s.json());n.code===0?(m.value=n.data.comments,h.value=n.data.total):console.log("Error in getting comments")},y=async(a,s)=>{if(a.props.name==="first"){const n=await H(u.value,d.value,t.value),l=await(n==null?void 0:n.json());l.code===0?(b.value=l.data.result,P.value=l.data.total):console.log("Error in getting posts")}else{const n=await oe(w.value),l=await(n==null?void 0:n.json());l.code===0?(m.value=l.data.comments,h.value=l.data.total):console.log("Error in getting comments")}},f=async a=>{const s=await ct(a),n=await(s==null?void 0:s.json());if(n.code===0){pe.success("删除成功");const l=await H(u.value,d.value,t.value),_=await(l==null?void 0:l.json());_.code===0?(b.value=_.data.result,P.value=_.data.total):console.log(_.msg)}else console.log(n.msg)},S=async a=>{const s=await rt(a),n=await(s==null?void 0:s.json());if(n.code===0){pe.success("删除成功");const l=await oe(w.value),_=await(l==null?void 0:l.json());_.code===0?(m.value=_.data.comments,h.value=_.data.total):console.log(_.msg)}else console.log(n.msg)};return(a,s)=>{const n=ke,l=Be,_=Re,z=ze,L=Oe,q=Ae,M=De,F=xt,v=Nt;return V(),U(se,null,[kt,o(v,{modelValue:i.value,"onUpdate:modelValue":s[0]||(s[0]=c=>i.value=c),class:"demo-tabs",onTabClick:y},{default:C(()=>[o(F,{label:"帖子",name:"first"},{default:C(()=>[(V(!0),U(se,null,be(b.value,c=>(V(),me(q,{key:c._id,class:"mb-2"},{default:C(()=>[o(L,null,{default:C(()=>[o(l,{span:9},{default:C(()=>[o(n,{to:`/post/${c._id}`,class:"goPost"},{default:C(()=>[D(K(c.title),1)]),_:2},1032,["to"])]),_:2},1024),o(l,{span:9},{default:C(()=>[o(_,null,{default:C(()=>[D(K(c.updatedAt.split("T")[0]),1)]),_:2},1024)]),_:2},1024),o(l,{span:6,class:"text-right"},{default:C(()=>[o(z,{underline:!1,onClick:r=>f(c._id)},{default:C(()=>[D("删除")]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024)]),_:2},1024))),128)),o(M,{background:"",layout:"prev, pager, next",total:P.value,"page-size":10,"pager-count":5,style:{"justify-content":"center"},onCurrentChange:p},null,8,["total"])]),_:1}),o(F,{label:"评论",name:"second"},{default:C(()=>[(V(!0),U(se,null,be(m.value,c=>(V(),me(q,{key:c._id,class:"mb-2"},{default:C(()=>[o(L,null,{default:C(()=>[o(l,{span:9},{default:C(()=>[o(n,{to:`/post/${c.postId}`,class:"goPost"},{default:C(()=>[D(K(c.content),1)]),_:2},1032,["to"])]),_:2},1024),o(l,{span:3},{default:C(()=>[D("用户名: "+K(c.username),1)]),_:2},1024),o(l,{span:6},{default:C(()=>[o(_,null,{default:C(()=>[D(K(c.createdAt.split("T")[0]),1)]),_:2},1024)]),_:2},1024),o(l,{span:6,class:"text-right"},{default:C(()=>[o(z,{underline:!1,onClick:r=>S(c._id)},{default:C(()=>[D("删除")]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024)]),_:2},1024))),128)),o(M,{background:"",layout:"prev, pager, next",total:h.value,"page-size":10,"pager-count":5,style:{"justify-content":"center"},onCurrentChange:N},null,8,["total"])]),_:1})]),_:1},8,["modelValue"])],64)}}}),Ht=it(St,[["__scopeId","data-v-f20620e3"]]);export{Ht as default};