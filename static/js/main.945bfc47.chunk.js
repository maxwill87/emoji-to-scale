(this["webpackJsonpemoji-to-scale"]=this["webpackJsonpemoji-to-scale"]||[]).push([[0],{10:function(e,t,c){"use strict";c.r(t);c(4);var i=c(1),n=c(3),s=c.n(n),a=c.p+"static/media/random.bdcef4fb.csv",r=c.p+"static/media/travel.ea220a41.csv",l=c.p+"static/media/nature.8a4f56ad.csv",o=c.p+"static/media/objects.cff3debe.csv";function h(e){return String(Number(e))===e}async function j(){let e={};let t=(await async function(){let e=[];return await fetch(a).then((e=>e.text())).then((t=>{e.push(...t.trim().split("\n").splice(1))})),await fetch(r).then((e=>e.text())).then((t=>{e.push(...t.trim().split("\n").splice(1))})),await fetch(l).then((e=>e.text())).then((t=>{e.push(...t.trim().split("\n").splice(1))})),await fetch(o).then((e=>e.text())).then((t=>{e.push(...t.trim().split("\n").splice(1))})),e}()).reduce(((t,c)=>{const[i,n,s,a]=c.split(",");return"?"===n||(e[i]&&console.warn("REPEATED",i),t[i]=n,e[i]={source:n,label:s,src:a}),t}),{});for(const c in t){const e=t[c];if(t[c].includes("km"))t[c]=100*Number(e.replace("km",""))*1e3;else if(t[c].includes("m"))t[c]=100*Number(e.replace("m",""));else if(h(t[c]))t[c]=Number(e);else if(t[e])t[c]=t[e];else if(e.includes("*")){const i=e.split("*").map((e=>h(e)?Number(e):t[e]?t[e]:e));t[c]=i[0]*i[1]}}return Object.entries(t).sort(((e,t)=>e[1]-t[1])).map((t=>[t[0],t[1],e[t[0]].label])).filter((e=>"?"!==e[1]))}var m=c(0);const d=300;function b(e){return e<2?"".concat(10*e,"mm"):e<100?"".concat(e,"cm"):e<1e5?"".concat(Math.round(100*e)/100/100,"m"):"".concat(Math.round(e/100/10)/100,"km")}var u=function(){const[e,t]=Object(i.useState)([]),[c,n]=Object(i.useState)(0);let s=window.innerWidth/2;return Object(i.useEffect)((()=>{j().then((e=>{t(e),document.body.style.height="".concat(d*e.length+window.innerHeight,"px")})),window.requestAnimationFrame((function e(){const t=window.pageYOffset;n(t),window.requestAnimationFrame(e)}))}),[]),Object(m.jsxs)(i.Fragment,{children:[Object(m.jsx)("div",{className:"bg"}),Object(m.jsxs)("div",{className:"header",children:[Object(m.jsxs)("div",{children:[Object(m.jsx)("h1",{children:"Emoji to Scale"}),Object(m.jsx)("div",{style:{marginTop:8},children:Object(m.jsx)("a",{href:"https://github.com/javierbyte/emoji-to-scale",children:"+ Info"})}),Object(m.jsx)("div",{style:{marginTop:8},children:Object(m.jsx)("a",{href:"https://twitter.com/intent/tweet?text=Visualize%20emojis%20to%20scale.%20The%20chicken%20is%20not%20bigger%20than%20the%20car%20anymore!%20%F0%9F%90%93%F0%9F%9A%97%0A%20http%3A//javier.xyz/emoji-to-scale/",children:"+ Tweet this!"})})]}),Object(m.jsx)("div",{style:{flex:1}}),Object(m.jsx)("a",{href:"https://twitter.com/javierbyte",children:Object(m.jsx)("h1",{children:"by javierbyte"})})]}),Object(m.jsx)("div",{className:"footer",children:Object(m.jsxs)("h2",{children:["Scroll ",Object(m.jsx)("span",{style:{fontSize:28},children:"\u2193"})]})}),Object(m.jsx)("div",{className:"emoji-display",children:e.map((t=>{let[i,n,a]=t;const r=window.innerWidth;let l=s-c;if(l<r/2&&(l=.25*l+.75*(l+.5*r)/2),s+=d,l<-300||l>r)return null;let o=[Math.floor(c/d),Math.ceil(c/d)];o=o.map((t=>t<0?0:t>e.length-1?e.length-1:t)).map((t=>e[t]));const h=c/d%1,j=h*o[1][1]+(1-h)*o[0][1],u=Math.min(n/j,1e3);let p=1;if(u>3){const e=(u-3)/8;p=Math.max(1-e,0)}return Object(m.jsxs)("div",{className:"emoji-container",style:{left:"".concat(l,"px")},children:[Object(m.jsx)("div",{className:"emoji",style:{opacity:p,transform:"scale(".concat(u,") translateY(10%)")},children:i}),Object(m.jsx)("div",{children:b(n)}),Object(m.jsx)("div",{children:a})]},i)}))})]})};s.a.render(Object(m.jsx)(u,{}),document.getElementById("root"))},4:function(e,t,c){}},[[10,1,2]]]);
//# sourceMappingURL=main.945bfc47.chunk.js.map