(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{85286:function(e,t,n){Promise.resolve().then(n.t.bind(n,4968,23)),Promise.resolve().then(n.t.bind(n,2778,23)),Promise.resolve().then(n.bind(n,43838)),Promise.resolve().then(n.t.bind(n,75381,23)),Promise.resolve().then(n.bind(n,35736))},43838:function(e,t,n){"use strict";n.d(t,{default:function(){return p}});var a=n(57437),r=n(72972),o=n.n(r),i=n(2265),l=n(41512),s=n(35475);let c=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),d=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((e,t,n)=>!!e&&n.indexOf(e)===t).join(" ")};var m={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let u=(0,i.forwardRef)((e,t)=>{let{color:n="currentColor",size:a=24,strokeWidth:r=2,absoluteStrokeWidth:o,className:l="",children:s,iconNode:c,...u}=e;return(0,i.createElement)("svg",{ref:t,...m,width:a,height:a,stroke:n,strokeWidth:o?24*Number(r)/Number(a):r,className:d("lucide",l),...u},[...c.map(e=>{let[t,n]=e;return(0,i.createElement)(t,n)}),...Array.isArray(s)?s:[s]])}),h=(e,t)=>{let n=(0,i.forwardRef)((n,a)=>{let{className:r,...o}=n;return(0,i.createElement)(u,{ref:a,iconNode:t,className:d("lucide-".concat(c(e)),r),...o})});return n.displayName="".concat(e),n},f=h("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),y=h("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);var p=()=>{let[e,t]=(0,i.useState)(!1),[n,r]=(0,i.useState)(!1),c=(0,s.usePathname)();(0,i.useEffect)(()=>{let e=()=>{r(window.scrollY>20)};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[]);let d=[{name:"About",href:"/"},{name:"Projects",href:"/projects"},{name:"Contact",href:"/contact"},{name:"Resume",href:"/resume"}];return(0,a.jsx)("header",{className:"fixed w-full top-0 z-[100] transition-all duration-300 ".concat(n?"py-2 bg-black/80 backdrop-blur-lg border-b border-white/10":"py-4 bg-transparent"),children:(0,a.jsxs)("div",{className:"container mx-auto px-4",children:[(0,a.jsxs)("nav",{className:"flex items-center justify-between",children:[(0,a.jsx)(o(),{href:"/",className:"flex items-center space-x-2",children:(0,a.jsx)(l.E.span,{initial:{opacity:0},animate:{opacity:1},className:"text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text",children:"Raymond Chi"})}),(0,a.jsx)("div",{className:"hidden md:flex items-center space-x-1",children:d.map(e=>(0,a.jsxs)(o(),{href:e.href,className:"relative px-4 py-2 rounded-lg transition-colors duration-200 hover:text-white ".concat(c===e.href?"text-white":"text-gray-300"),children:[(0,a.jsx)("span",{className:"relative z-10",children:e.name}),c===e.href&&(0,a.jsx)(l.E.div,{layoutId:"navbar-indicator",className:"absolute inset-0 bg-white/10 rounded-lg",initial:!1,transition:{type:"spring",stiffness:500,damping:30}})]},e.name))}),(0,a.jsxs)(o(),{href:"/terminal",className:"hidden md:flex relative overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50",children:[(0,a.jsx)("span",{className:"absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"}),(0,a.jsx)("span",{className:"inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-4 py-2 text-sm font-medium text-white backdrop-blur-3xl hover:bg-slate-900",children:"Try It In Terminal Style"})]}),(0,a.jsx)("button",{className:"md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors",onClick:()=>t(!e),"aria-label":"Toggle menu",children:e?(0,a.jsx)(f,{size:24}):(0,a.jsx)(y,{size:24})})]}),(0,a.jsx)(l.E.div,{initial:!1,animate:{height:e?"auto":0},className:"md:hidden overflow-hidden",children:(0,a.jsxs)(l.E.div,{initial:{opacity:0},animate:{opacity:e?1:0},transition:{delay:.1},className:"py-4 space-y-2",children:[d.map(e=>(0,a.jsx)(o(),{href:e.href,onClick:()=>t(!1),className:"block px-4 py-2 rounded-lg transition-colors duration-200 ".concat(c===e.href?"bg-white/10 text-white":"text-gray-300 hover:bg-white/5"),children:e.name},e.name)),(0,a.jsx)(o(),{href:"/terminal",onClick:()=>t(!1),className:"block px-4 py-2 text-gray-300 hover:bg-white/5 rounded-lg",children:"Terminal Style"})]})})]})})}},35736:function(e,t,n){"use strict";n.d(t,{ThemeProvider:function(){return p}});var a=n(57437),r=n(2265),o=["light","dark"],i="(prefers-color-scheme: dark)",l="undefined"==typeof window,s=r.createContext(void 0),c=e=>r.useContext(s)?e.children:r.createElement(m,{...e}),d=["light","dark"],m=e=>{let{forcedTheme:t,disableTransitionOnChange:n=!1,enableSystem:a=!0,enableColorScheme:l=!0,storageKey:c="theme",themes:m=d,defaultTheme:p=a?"system":"light",attribute:g="data-theme",value:x,children:b,nonce:v}=e,[w,k]=r.useState(()=>h(c,p)),[N,_]=r.useState(()=>h(c)),j=x?Object.values(x):m,E=r.useCallback(e=>{let t=e;if(!t)return;"system"===e&&a&&(t=y());let r=x?x[t]:t,i=n?f():null,s=document.documentElement;if("class"===g?(s.classList.remove(...j),r&&s.classList.add(r)):r?s.setAttribute(g,r):s.removeAttribute(g),l){let e=o.includes(p)?p:null,n=o.includes(t)?t:e;s.style.colorScheme=n}null==i||i()},[]),S=r.useCallback(e=>{let t="function"==typeof e?e(e):e;k(t);try{localStorage.setItem(c,t)}catch(e){}},[t]),C=r.useCallback(e=>{_(y(e)),"system"===w&&a&&!t&&E("system")},[w,t]);r.useEffect(()=>{let e=window.matchMedia(i);return e.addListener(C),C(e),()=>e.removeListener(C)},[C]),r.useEffect(()=>{let e=e=>{e.key===c&&S(e.newValue||p)};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[S]),r.useEffect(()=>{E(null!=t?t:w)},[t,w]);let T=r.useMemo(()=>({theme:w,setTheme:S,forcedTheme:t,resolvedTheme:"system"===w?N:w,themes:a?[...m,"system"]:m,systemTheme:a?N:void 0}),[w,S,t,N,a,m]);return r.createElement(s.Provider,{value:T},r.createElement(u,{forcedTheme:t,disableTransitionOnChange:n,enableSystem:a,enableColorScheme:l,storageKey:c,themes:m,defaultTheme:p,attribute:g,value:x,children:b,attrs:j,nonce:v}),b)},u=r.memo(e=>{let{forcedTheme:t,storageKey:n,attribute:a,enableSystem:l,enableColorScheme:s,defaultTheme:c,value:d,attrs:m,nonce:u}=e,h="system"===c,f="class"===a?"var d=document.documentElement,c=d.classList;".concat("c.remove(".concat(m.map(e=>"'".concat(e,"'")).join(","),")"),";"):"var d=document.documentElement,n='".concat(a,"',s='setAttribute';"),y=s?(o.includes(c)?c:null)?"if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'".concat(c,"'"):"if(e==='light'||e==='dark')d.style.colorScheme=e":"",p=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=!(arguments.length>2)||void 0===arguments[2]||arguments[2],r=d?d[e]:e,i=t?e+"|| ''":"'".concat(r,"'"),l="";return s&&n&&!t&&o.includes(e)&&(l+="d.style.colorScheme = '".concat(e,"';")),"class"===a?t||r?l+="c.add(".concat(i,")"):l+="null":r&&(l+="d[s](n,".concat(i,")")),l},g=t?"!function(){".concat(f).concat(p(t),"}()"):l?"!function(){try{".concat(f,"var e=localStorage.getItem('").concat(n,"');if('system'===e||(!e&&").concat(h,")){var t='").concat(i,"',m=window.matchMedia(t);if(m.media!==t||m.matches){").concat(p("dark"),"}else{").concat(p("light"),"}}else if(e){").concat(d?"var x=".concat(JSON.stringify(d),";"):"").concat(p(d?"x[e]":"e",!0),"}").concat(h?"":"else{"+p(c,!1,!1)+"}").concat(y,"}catch(e){}}()"):"!function(){try{".concat(f,"var e=localStorage.getItem('").concat(n,"');if(e){").concat(d?"var x=".concat(JSON.stringify(d),";"):"").concat(p(d?"x[e]":"e",!0),"}else{").concat(p(c,!1,!1),";}").concat(y,"}catch(t){}}();");return r.createElement("script",{nonce:u,dangerouslySetInnerHTML:{__html:g}})}),h=(e,t)=>{let n;if(!l){try{n=localStorage.getItem(e)||void 0}catch(e){}return n||t}},f=()=>{let e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(e)},1)}},y=e=>(e||(e=window.matchMedia(i)),e.matches?"dark":"light");function p(e){let{children:t,...n}=e;return(0,a.jsx)(c,{...n,children:t})}},2778:function(){},75381:function(){},4968:function(e){e.exports={style:{fontFamily:"'__DM_Sans_05e5f9', '__DM_Sans_Fallback_05e5f9'",fontStyle:"normal"},className:"__className_05e5f9"}}},function(e){e.O(0,[385,512,972,971,117,744],function(){return e(e.s=85286)}),_N_E=e.O()}]);