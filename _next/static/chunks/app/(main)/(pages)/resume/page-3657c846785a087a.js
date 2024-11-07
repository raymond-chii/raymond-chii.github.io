(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[301],{3193:function(e,t,r){Promise.resolve().then(r.bind(r,846))},846:function(e,t,r){"use strict";r.r(t);var n=r(7437);r(2265);var a=r(9089),o=r(5267),i=r(8595),s=r(3448),l=r(1512);t.default=()=>(0,n.jsxs)("div",{className:"relative min-h-screen p-4 bg-black text-white",children:[(0,n.jsx)("div",{className:"absolute inset-0 z-0 overflow-hidden",children:(0,n.jsx)(i.Boxes,{})}),(0,n.jsxs)(o.TracingBeam,{children:[(0,n.jsx)(l.E.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},className:"relative z-10 text-center mb-8",children:(0,n.jsxs)("div",{className:"h-24 relative w-full overflow-hidden flex flex-col items-center justify-center rounded-lg",children:[(0,n.jsx)("div",{className:"absolute inset-0 w-full h-full bg-black z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none"}),(0,n.jsx)("h1",{className:(0,s.cn)("md:text-4xl text-xl text-white relative z-20 font-medium"),children:"My Resume"}),(0,n.jsx)("p",{className:"text-lg text-gray-400",children:"View or download my resume"})]})}),(0,n.jsxs)(l.E.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.2},className:"flex flex-col sm:flex-row justify-center items-center gap-4 mb-8",children:[(0,n.jsxs)("a",{href:"/SW Raymond Chi.pdf",download:"Raymond Chi Resume.pdf",className:"w-full sm:w-auto flex items-center justify-center px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition-all duration-300 text-white group shadow-lg hover:shadow-blue-500/30",children:[(0,n.jsx)(a.aBF,{className:"mr-2 group-hover:scale-110 transition-transform"}),"Download Resume (PDF)"]}),(0,n.jsxs)("a",{href:"/SW Raymond Chi.pdf",target:"_blank",rel:"noopener noreferrer",className:"w-full sm:w-auto flex items-center justify-center px-6 py-3 bg-gray-700 rounded-lg hover:bg-gray-600 transition-all duration-300 text-white group shadow-lg hover:shadow-gray-500/30",children:[(0,n.jsx)(a.CkN,{className:"mr-2 group-hover:scale-110 transition-transform"}),"Open in New Tab"]})]}),(0,n.jsx)(l.E.div,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},transition:{duration:.5,delay:.4},className:"resume-viewer mt-8 max-w-5xl mx-auto",children:(0,n.jsx)("div",{className:"bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden shadow-2xl border border-gray-700",children:(0,n.jsx)("div",{className:"aspect-[8.5/11] w-full",children:(0,n.jsx)("iframe",{src:"/SW Raymond Chi.pdf#view=FitH",className:"w-full h-full",style:{minHeight:"80vh"},title:"Resume PDF Viewer"})})})})]})]})},8595:function(e,t,r){"use strict";r.d(t,{Boxes:function(){return s}});var n=r(7437),a=r(2265),o=r(1512),i=r(1201);let s=a.memo(e=>{let{className:t,...r}=e,a=Array(150).fill(1),s=Array(100).fill(1),l=["--sky-300","--pink-300","--green-300","--yellow-300","--red-300","--purple-300","--blue-300","--indigo-300","--violet-300"],c=()=>l[Math.floor(Math.random()*l.length)];return(0,n.jsx)("div",{style:{transform:"translate(-40%,-60%) skewX(-48deg) skewY(14deg) scale(0.675) rotate(0deg) translateZ(0)"},className:(0,i.cn)("absolute left-1/4 p-4 -top-1/4 flex  -translate-x-1/2 -translate-y-1/2 w-full h-full z-0 ",t),...r,children:a.map((e,t)=>(0,n.jsx)(o.E.div,{className:"w-16 h-8  border-l  border-slate-700 relative",children:s.map((e,r)=>(0,n.jsx)(o.E.div,{whileHover:{backgroundColor:"var(".concat(c(),")"),transition:{duration:0}},animate:{transition:{duration:2}},className:"w-16 h-8  border-r border-t border-slate-700 relative",children:r%2==0&&t%2==0?(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"absolute h-6 w-10 -top-[14px] -left-[22px] text-slate-700 stroke-[1px] pointer-events-none",children:(0,n.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 6v12m6-6H6"})}):null},"col"+r))},"row"+t))})})},5267:function(e,t,r){"use strict";r.d(t,{TracingBeam:function(){return d}});var n=r(7437),a=r(2265),o=r(7066),i=r(5318),s=r(3812),l=r(1512),c=r(1201);let d=e=>{let{children:t,className:r}=e,d=(0,a.useRef)(null),{scrollYProgress:u}=(0,o.v)({target:d,offset:["start start","end start"]}),f=(0,a.useRef)(null),[m,h]=(0,a.useState)(0);(0,a.useEffect)(()=>{f.current&&h(f.current.offsetHeight)},[]);let p=(0,i.q)((0,s.H)(u,[0,.8],[50,m]),{stiffness:500,damping:90}),v=(0,i.q)((0,s.H)(u,[0,1],[50,m-200]),{stiffness:500,damping:90});return(0,n.jsxs)(l.E.div,{ref:d,className:(0,c.cn)("relative w-full max-w-4xl mx-auto h-full",r),children:[(0,n.jsxs)("div",{className:"absolute -left-4 md:-left-20 top-3",children:[(0,n.jsx)(l.E.div,{transition:{duration:.2,delay:.5},animate:{boxShadow:u.get()>0?"none":"rgba(0, 0, 0, 0.24) 0px 3px 8px"},className:"ml-[27px] h-4 w-4 rounded-full border border-netural-200 shadow-sm flex items-center justify-center",children:(0,n.jsx)(l.E.div,{transition:{duration:.2,delay:.5},animate:{backgroundColor:u.get()>0?"white":"var(--emerald-500)",borderColor:u.get()>0?"white":"var(--emerald-600)"},className:"h-2 w-2  rounded-full border border-neutral-300 bg-white"})}),(0,n.jsxs)("svg",{viewBox:"0 0 20 ".concat(m),width:"20",height:m,className:" ml-4 block","aria-hidden":"true",children:[(0,n.jsx)(l.E.path,{d:"M 1 0V -36 l 18 24 V ".concat(.8*m," l -18 24V ").concat(m),fill:"none",stroke:"#9091A0",strokeOpacity:"0.16",transition:{duration:10}}),(0,n.jsx)(l.E.path,{d:"M 1 0V -36 l 18 24 V ".concat(.8*m," l -18 24V ").concat(m),fill:"none",stroke:"url(#gradient)",strokeWidth:"1.25",className:"motion-reduce:hidden",transition:{duration:10}}),(0,n.jsx)("defs",{children:(0,n.jsxs)(l.E.linearGradient,{id:"gradient",gradientUnits:"userSpaceOnUse",x1:"0",x2:"0",y1:p,y2:v,children:[(0,n.jsx)("stop",{stopColor:"#18CCFC",stopOpacity:"0"}),(0,n.jsx)("stop",{stopColor:"#18CCFC"}),(0,n.jsx)("stop",{offset:"0.325",stopColor:"#6344F5"}),(0,n.jsx)("stop",{offset:"1",stopColor:"#AE48FF",stopOpacity:"0"})]})})]})]}),(0,n.jsx)("div",{ref:f,children:t})]})}},3448:function(e,t,r){"use strict";r.d(t,{cn:function(){return o}});var n=r(1994),a=r(3335);function o(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,a.m6)((0,n.W)(t))}},1201:function(e,t,r){"use strict";r.d(t,{cn:function(){return o}});var n=r(1994),a=r(3335);function o(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,a.m6)((0,n.W)(t))}},6231:function(e,t,r){"use strict";r.d(t,{w_:function(){return d}});var n=r(2265),a={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},o=n.createContext&&n.createContext(a),i=["attr","size","title"];function s(){return(s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach(function(t){var n,a;n=t,a=r[t],(n=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(n))in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function d(e){return t=>n.createElement(u,s({attr:c({},e.attr)},t),function e(t){return t&&t.map((t,r)=>n.createElement(t.tag,c({key:r},t.attr),e(t.child)))}(e.child))}function u(e){var t=t=>{var r,{attr:a,size:o,title:l}=e,d=function(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}(e,i),u=o||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",s({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,a,d,{className:r,style:c(c({color:e.color||t.color},t.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),l&&n.createElement("title",null,l),e.children)};return void 0!==o?n.createElement(o.Consumer,null,e=>t(e)):t(a)}}},function(e){e.O(0,[699,95,312,971,117,744],function(){return e(e.s=3193)}),_N_E=e.O()}]);