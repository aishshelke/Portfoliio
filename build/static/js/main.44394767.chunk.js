(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{24:function(e,t,s){},31:function(e,t,s){},32:function(e,t,s){},33:function(e,t,s){},34:function(e,t,s){},35:function(e,t,s){},36:function(e,t,s){},37:function(e,t,s){},38:function(e,t,s){},39:function(e,t,s){},40:function(e,t,s){"use strict";s.r(t);var i=s(1),c=s.n(i),n=s(17),a=s.n(n),r=s(8),l=(s(24),s(4)),o=s(0);function j(e){var t=e.menuOpen;e.setMenuOpen;return Object(o.jsx)("div",{className:"topbar "+(t&&"active"),children:Object(o.jsxs)("div",{className:"wrapper",children:[Object(o.jsx)("div",{className:"left",children:Object(o.jsx)(l.b,{to:"/",className:"logo",children:"Aishwarya Shelke"})}),Object(o.jsx)("div",{className:"right",children:Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{children:Object(o.jsx)(l.b,{to:"/",children:"Home"})}),Object(o.jsx)("li",{children:Object(o.jsx)(l.b,{to:"/portfolio",children:"Portfolio"})}),Object(o.jsx)("li",{children:Object(o.jsx)(l.b,{to:"/works",children:"Education"})}),Object(o.jsx)("li",{children:Object(o.jsx)(l.b,{to:"/contact",children:"Contact"})})]})})]})})}s(31);var d=s(19);function m(){var e=Object(i.useRef)();return Object(i.useEffect)((function(){Object(d.a)(e.current,{showCursor:!0,backDelay:1500,backSpeed:60,strings:["Developer","Engineer","mentor","Freelancer"]})}),[]),Object(o.jsxs)("div",{className:"intro",id:"intro",children:[Object(o.jsx)("div",{className:"left",children:Object(o.jsx)("div",{className:"imgContainer",children:Object(o.jsx)("img",{src:"assets/Aish.svg",alt:""})})}),Object(o.jsx)("div",{className:"right",children:Object(o.jsxs)("div",{className:"wrapper",children:[Object(o.jsx)("h2",{children:"Hi everyone \ud83d\udc4b, I'm"}),Object(o.jsx)("h1",{children:"Aishwarya Shelke "}),Object(o.jsxs)("h3",{children:["A Software ",Object(o.jsx)("span",{ref:e})]})]})})]})}s(32);function h(e){var t=e.id,s=e.title,i=e.active,c=e.setSelected;return Object(o.jsx)("li",{className:i?"portfolioTab active":"portfolioTab",onClick:function(){return c(t)},children:s})}s(33);var b=[{id:1,title:"Sih project",img:"assets/Project.svg",url:"https://github.com/aishshelke/SIH-Project"},{id:2,title:"Sentiment Analyser",img:"assets/Sentiment.png",url:"https://github.com/aishshelke/sentiment_analyser"},{id:3,title:"E-commerce Web Design",img:"assets/ecommerce.svg",url:"https://github.com/aishshelke/E-Commerce_Web"},{id:4,title:"canary Web Design",img:"assets/canary.png",url:"https://github.com/aishshelke/Canary_Deployment_helmCharts"},{id:5,title:"blue green Web Design",img:"assets/canary.png",url:"https://github.com/aishshelke/Blue-Green_Deployemnt_helmCharts"}],u=[{id:1,title:"Introduction to Structured Query Language",img:"assets/coursera.png",url:"https://www.coursera.org/account/accomplishments/certificate/RQRLGLFSQM4R"},{id:2,title:"Python-Introduction to Data Science and Machine learning A-Z",img:"assets/udemy.905b9766.svg",url:"https://www.udemy.com/certificate/UC-8db850a0-02c6-4e9f-8cd1-91fac98e3234/"},{id:3,title:"Web Development By Doing: HTML / CSS From Scratch",img:"assets/udemy.905b9766.svg",url:"https://www.udemy.com/certificate/UC-YSUBCMIP/"},{id:4,title:"Devops Introduction",img:"assets/udemy.905b9766.svg",url:"https://www.udemy.com/certificate/UC-YSUBCMIP/"}],p=[{id:1,title:"C++ ",img:"assets/cpp.png",url:" "},{id:2,title:"Javascript",img:"assets/js.png",url:""},{id:3,title:"React",img:"assets/react.svg",url:""},{id:4,title:"SQL",img:"assets/sql.jpg",url:""},{id:5,title:"Azure Cloud",img:"assets/azure.jpg",url:""},{id:6,title:"Linux",img:"assets/linux.jpg",url:""},{id:7,title:"git",img:"assets/git.png",url:""},{id:8,title:"Kubernetes",img:"assets/kubernetes.png",url:""},{id:9,title:"Docker",img:"assets/Docker.png",url:""},{id:10,title:"Helm",img:"assets/helm.png",url:""}];function g(){var e=Object(i.useState)("featured"),t=Object(r.a)(e,2),s=t[0],c=t[1],n=Object(i.useState)([]),a=Object(r.a)(n,2),l=a[0],j=a[1];return Object(i.useEffect)((function(){switch(s){case"web":j(b);break;case"design":j(u);break;case"content":j(p);break;default:j(b)}}),[s]),Object(o.jsxs)("div",{className:"portfolio",id:"portfolio",children:[Object(o.jsx)("h1",{children:"Portfolio"}),Object(o.jsx)("ul",{children:[{id:"web",title:"Projects"},{id:"design",title:"Certification"},{id:"content",title:"Skills"}].map((function(e){return Object(o.jsx)(h,{title:e.title,active:s===e.id,setSelected:c,id:e.id})}))}),Object(o.jsx)("div",{className:"container",children:l.map((function(e){return Object(o.jsx)("a",{href:e.url,children:Object(o.jsxs)("div",{className:"item",children:[Object(o.jsx)("img",{src:e.img,alt:""}),Object(o.jsx)("h3",{children:e.title})]})},e.id)}))})]})}s(34);function O(){var e=Object(i.useState)(0),t=Object(r.a)(e,2),s=t[0],c=t[1],n=[{id:"1",title:"Bachlor Of Technology june-2021",desc:"I am Graduate from G.H.Raisoni College of Engineering and Management,pune ",img:"./assets/ghrcem.png"},{id:"2",icon:"./assets/globe.png",title:"Higher school",desc:"I have completed my higher schooling from Kulbushan junior College of Arts and Science in the filed of pcm-cs",img:"./assets/highers.svg"},{id:"3",icon:"./assets/writing.png",title:"Secondary Schooling",desc:"I have Completed my secondary Schooling from jawahar vidyalaya jintur .",img:"./assets/jvj.jfif"}],a=function(e){c("left"===e?s>0?s-1:2:s<n.length-1?s+1:0)};return Object(o.jsxs)("div",{className:"works",id:"works",children:[Object(o.jsx)("div",{className:"slider",style:{transform:"translateX(-".concat(100*s,"vw)")},children:n.map((function(e){return Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)("div",{className:"item",children:[Object(o.jsx)("div",{className:"left",children:Object(o.jsxs)("div",{className:"leftContainer",children:[Object(o.jsx)("h2",{children:e.title}),Object(o.jsx)("p",{children:e.desc})]})}),Object(o.jsx)("div",{className:"right",children:Object(o.jsx)("img",{src:e.img,alt:""})})]})})}))}),Object(o.jsx)("img",{src:"assets/arrow.png",className:"arrow left",alt:"",onClick:function(){return a("left")}}),Object(o.jsx)("img",{src:"assets/arrow.png",className:"arrow right",alt:"",onClick:function(){return a()}})]})}s(35);function x(){return Object(o.jsxs)("div",{className:"testimonials",id:"testimonials",children:[Object(o.jsx)("h1",{children:"Testimonials"}),Object(o.jsx)("div",{className:"container",children:[{id:1,name:"Tom Durden",title:"Senior Developer",img:"https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",icon:"assets/twitter.png",desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem."},{id:2,name:"Alex Kalinski",title:"Co-Founder of DELKA",img:"https://images.pexels.com/photos/428321/pexels-photo-428321.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",icon:"assets/youtube.png",desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem recusandae perspiciatis ducimus vel hic temporibus. ",featured:!0},{id:3,name:"Martin Harold",title:"CEO of ALBI",img:"https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",icon:"assets/linkedin.png",desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem"}].map((function(e){return Object(o.jsxs)("div",{className:e.featured?"card featured":"card",children:[Object(o.jsxs)("div",{className:"top",children:[Object(o.jsx)("img",{src:"assets/right-arrow.png",className:"left",alt:""}),Object(o.jsx)("img",{className:"user",src:e.img,alt:""}),Object(o.jsx)("img",{className:"right",src:e.icon,alt:""})]}),Object(o.jsx)("div",{className:"center",children:e.desc}),Object(o.jsxs)("div",{className:"bottom",children:[Object(o.jsx)("h3",{children:e.name}),Object(o.jsx)("h4",{children:e.title})]})]})}))})]})}s(36);var f=s(11);function v(){return Object(o.jsx)("div",{children:Object(o.jsxs)("div",{className:"contact",id:"contact",children:[Object(o.jsx)("div",{className:"left",children:Object(o.jsx)("img",{src:"assets/email.svg",alt:""})}),Object(o.jsxs)("div",{className:"right",children:[Object(o.jsx)("h2",{children:"contact me"}),Object(o.jsx)("p",{children:"I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with Competitive Programming,web development otherwise I am always up for a good conversation"}),Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{children:Object(o.jsxs)("a",{href:"https://github.com/aishshelke",children:[Object(o.jsx)(f.a,{})," "]})}),Object(o.jsx)("li",{children:Object(o.jsxs)("a",{href:"https://www.linkedin.com/in/aishwarya-shelke-94510a18b/",children:[Object(o.jsx)(f.c,{})," "]})}),Object(o.jsxs)("li",{children:[" ",Object(o.jsx)("a",{href:"https://www.instagram.com/tara_shelke/",children:Object(o.jsx)(f.b,{})})]})]})]})]})})}s(37);var w=function(){return Object(o.jsx)("div",{className:"footer d__flex align__items__center justify__content__space__between pz-10",style:{padding:"10px 20px",zIndex:"100",textAlign:"center"},children:Object(o.jsx)("span",{className:"copyright",style:{color:"black",fontSize:"14px",opacity:"0.75"},children:"Made with \u2764\ufe0f by Aishwarya shelke"})})};s(38),s(39);function y(e){var t=e.menuOpen;e.setMenuOpen;return Object(o.jsx)("div",{className:"menu "+(t&&"active"),children:Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{children:Object(o.jsx)(l.b,{to:"/",children:"Home"})}),Object(o.jsx)("li",{children:Object(o.jsx)(l.b,{to:"/portfolio",children:"Portfolio"})}),Object(o.jsx)("li",{children:Object(o.jsx)(l.b,{to:"/works",children:"Education"})}),Object(o.jsx)("li",{children:Object(o.jsx)(l.b,{to:"/contact",children:"Contact"})})]})})}var N=s(2);var k=function(){var e=Object(i.useState)(!1),t=Object(r.a)(e,2),s=t[0],c=t[1];return Object(o.jsx)("div",{className:"app",children:Object(o.jsxs)(l.a,{children:[Object(o.jsx)(j,{menuOpen:s,setMenuOpen:c}),Object(o.jsx)(y,{menuOpen:s,setMenuOpen:c}),Object(o.jsx)("div",{className:"sections",children:Object(o.jsxs)(N.c,{children:[Object(o.jsx)(N.a,{exact:!0,path:"/",component:m}),Object(o.jsx)(N.a,{path:"/Portfolio",component:g}),Object(o.jsx)(N.a,{path:"/Works",component:O}),Object(o.jsx)(N.a,{path:"/Testimonials",component:x}),Object(o.jsx)(N.a,{path:"/Contact",component:v})]})}),Object(o.jsx)(w,{})]})})};a.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(k,{})}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.44394767.chunk.js.map