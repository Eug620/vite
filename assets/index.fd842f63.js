let e=document.createElement("style");e.innerHTML=".eug-composition-api-content-anchor{position:fixed;width:150px;right:25px;top:50%}.eug-composition-api-content-anchor .ant-anchor-link-title{font-weight:700}",document.head.appendChild(e);import{b as o,t,d as n,r,o as s,c as a,w as i,h as l,i as c,a as p,B as u,A as d,C as f,D as m,E as h,G as g,H as x,I as v,F as b,f as C,e as k}from"./index.a8cbfbff.js";const _=(e,o)=>{e.setupProps=o},I=e=>{console.log("触发emit"),e("useChangeSetup","Hello, Composition-API!!! --- from  setup")};var H=n({props:{setupProps:String},setup(e,n){const{attrs:r,slots:s,emit:a}=n;console.log("setup 参数(prop, context)"),console.log("prop-------------------"),console.log(e),console.log("context----------------"),console.log(n),console.log("{ attrs, slots, emit }"),console.log(r,s,a);const i=(()=>{const e=o({name:"setup",extra:"https://v3.vuejs.org/api/composition-api.html#setup"});return t(e)})();return{emit:a,slots:s,attrs:r,state:i,...i,...t(e),useEmitSetup:I}}});const P=l("h3",null,"props",-1),w=l("div",{class:"pl-20"},[l("i",null,"props是反应性的，不能使用ES6解构，因为它会删除道具的反应性"),l("br"),l("i",null,"可以通过使用函数内部的toRefs来安全地进行操作setup"),l("br")],-1),L=l("h3",null,"context",-1),y=l("div",{class:"pl-20"},[l("i",null,"context对象是普通的JavaScript对象,可以在上安全地使用ES6解构context"),l("br"),l("i",null,"setup(props, { attrs, slots, emit })"),l("br")],-1),j=l("h3",null,"example",-1),E={class:"pl-20"},U=p("emit");H.render=function(e,o,t,n,p,u){const d=r("eug-button"),f=r("eug-card");return s(),a(f,{bordered:"",hoverable:"",showHeader:"",header:e.name,showExtra:"",extra:e.extra},{description:i(()=>[P,w,L,y,j,l("div",E,[l("p",null,c(e.setupProps),1),l(d,{onClick:o[1]||(o[1]=o=>e.useEmitSetup(e.emit))},{default:i(()=>[U]),_:1})])]),_:1},8,["header","extra"])},H.__file="src/views/pages/Composition-API/setup/index.vue";const S=()=>{const e=o({name:"Lifecycle Hooks",extra:"https://v3.vuejs.org/api/composition-api.html#lifecycle-hooks",hooksList:[{before:"2.x",after:"3.x"},{before:"beforeCreate",after:"setup()"},{before:"created",after:"setup()"},{before:"beforeMount",after:"onBeforeMount"},{before:"mounted",after:"onMounted"},{before:"beforeUpdate",after:"onBeforeUpdate"},{before:"updated",after:"onUpdated"},{before:"beforeUnmount",after:"onBeforeUnmount"},{before:"unmounted",after:"onUnmounted"},{before:"errorCaptured",after:"onErrorCaptured"},{before:"renderTracked",after:"onRenderTracked"},{before:"renderTriggered",after:"onRenderTriggered"}]});return t(e)};var A=n({setup:()=>(u(()=>{console.log("Lifecycle Hooks --- onBeforeMount")}),d(()=>{console.log("Lifecycle Hooks --- onMounted")}),f(()=>{console.log("Lifecycle Hooks --- onUpdated")}),m(()=>{console.log("Lifecycle Hooks --- onBeforeUnmount")}),h(()=>{console.log("Lifecycle Hooks --- onUnmounted")}),g(()=>{console.log("Lifecycle Hooks --- onErrorCaptured")}),x(()=>{console.log("Lifecycle Hooks --- onRenderTracked")}),v(()=>{console.log("Lifecycle Hooks --- onRenderTriggered")}),{...S()})});const M=l("h3",null,"import",-1),T=l("i",{class:"pl-20"},"import { onMounted, onUpdated, onUnmounted } from 'vue'",-1),B=l("h3",null,"changes",-1),R={class:"pl-20"},G=p(">>>");A.render=function(e,o,t,n,u,d){const f=r("a-col"),m=r("a-row"),h=r("eug-card");return s(),a(h,{showHeader:"",header:e.name,bordered:"",hoverable:"",showExtra:"",extra:e.extra},{description:i(()=>[M,T,B,l("p",R,[(s(!0),a(b,null,C(e.hooksList,e=>(s(),a(m,{key:e},{default:i(()=>[l(f,{span:8},{default:i(()=>[p(c(e.before),1)]),_:2},1024),l(f,{span:2},{default:i(()=>[G]),_:1}),l(f,{span:8},{default:i(()=>[p(c(e.after),1)]),_:2},1024)]),_:2},1024))),128))])]),_:1},8,["header","extra"])},A.__file="src/views/pages/Composition-API/lifecycle_hooks/index.vue";const D=()=>{const e=o({name:"Provide / Inject",extra:"https://v3.vuejs.org/api/composition-api.html#provide-inject"});return t(e)};var F=n({setup:()=>({...D()})});const J=l("p",null,"provide 和 inject 两者都只能在setup（）中使用当前活动实例进行调用。",-1);F.render=function(e,o,t,n,l,c){const p=r("eug-card");return s(),a(p,{showHeader:"",header:e.name,bordered:"",hoverable:"",showExtra:"",extra:e.extra},{description:i(()=>[J]),_:1},8,["header","extra"])},F.__file="src/views/pages/Composition-API/provide_inject/index.vue";const q=()=>{const e=o({name:"getCurrentInstance",extra:"https://v3.vuejs.org/api/composition-api.html#getcurrentinstance"});return t(e)};var z=n({setup:()=>({...q()})});const K=l("p",null,"getCurrentInstance允许访问内部组件实例，这些实例对于高级用法或库创建者很有用。",-1),N=l("p",null,"getCurrentInstance仅在设置或生命周期挂钩期间起作用",-1),O=l("h3",null,"example",-1),Q=l("i",null,"const internalInstance = getCurrentInstance()",-1),V=l("br",null,null,-1),W=l("i",null,"internalInstance.appContext.config.globalProperties // access to globalProperties",-1);z.render=function(e,o,t,n,l,c){const p=r("eug-card");return s(),a(p,{showHeader:"",header:e.name,bordered:"",hoverable:"",showExtra:"",extra:e.extra},{description:i(()=>[K,N,O,Q,V,W]),_:1},8,["header","extra"])},z.__file="src/views/pages/Composition-API/getCurrentInstance/index.vue";var X=n({components:{Setup:H,LifecycleHooks:A,ProvideInject:F,GetCurrentInstance:z},setup(e,n){const r=o({name:"Composition-API",extra:"https://v3.vuejs.org/api/composition-api.html",itemList:["setup","Lifecycle Hooks","Provide / Inject","getCurrentInstance"],setupProps:"Hello, setup!!! --- from Composition-API"});return{...t(r),state:r,useChangeSetup:_}}});X.render=function(e,o,t,n,c,p){const u=r("setup"),d=r("lifecycle-hooks"),f=r("provide-inject"),m=r("get-current-instance"),h=r("eug-card");return r("a-anchor-link"),r("a-anchor"),s(),a("div",null,[l(h,{showHeader:"",showExtra:"",extra:e.extra,header:e.name},{description:i(()=>[k(" description ")]),content:i(()=>[l(u,{id:e.itemList[0],setupProps:e.setupProps,onUseChangeSetup:o[1]||(o[1]=o=>e.useChangeSetup(e.state,o))},null,8,["id","setupProps"]),l(d,{id:e.itemList[1]},null,8,["id"]),l(f,{id:e.itemList[2]},null,8,["id"]),l(m,{id:e.itemList[3]},null,8,["id"])]),_:1},8,["extra","header"]),k(" 锚点 "),k("v-if",!0)])},X.__file="src/views/pages/Composition-API/index.vue";export default X;