(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{175:function(e,t,n){"use strict";n.r(t);var a,r=n(244),o=n.n(r),i=n(0),c=n.n(i),u=n(187),l=n(197),s=n(183),f=function(e){var t=e.title,n=e.category,a=e.selectCategory;return c.a.createElement("li",{className:"item",role:"tab","aria-selected":n===t?"true":"false"},c.a.createElement("div",{onClick:function(){return a(t)}},t))},d=n(180),m=(n(170),function(e){var t=e.categories,n=e.category,a=e.selectCategory;return c.a.createElement("ul",{className:"category-container",role:"tablist",id:"category",style:{margin:"0 -"+Object(d.a)(.75)}},c.a.createElement(f,{title:"All",category:n,selectCategory:a}),t.map(function(e,t){return c.a.createElement(f,{key:t,title:e,category:n,selectCategory:a})}))}),g=(n(171),c.a.memo(function(e){var t=e.children;return c.a.createElement("div",{className:"thumbnail-container"},t)})),h=n(176),p=(n(38),n(36),n(181)),b="#___gatsby",E="observed",v="visible",y="20px",w=.8;function A(e){return e.filter(function(e){return e.isIntersecting}).forEach(function(e){var t=e.target;return p.a(t,v)})}function k(){return p.e("."+E).forEach(function(e){return a.observe(e)})}function S(){if(!a)throw Error("Not found IntersectionObserver instance");return Promise.resolve(a.disconnect())}n(172);var I=function(e){var t=e.node;return c.a.createElement(h.a,{className:"thumbnail "+E,to:t.fields.slug},c.a.createElement("div",{key:t.fields.slug},c.a.createElement("h3",null,t.frontmatter.title||t.fields.slug),c.a.createElement("h6",null,t.frontmatter.date||t.fields.slug),c.a.createElement("p",{dangerouslySetInnerHTML:{__html:t.excerpt}})))},N=n(178),C=function(e){var t=e.posts,n=e.countOfInitialPost,a=e.count,r=e.category,o=Object(i.useMemo)(function(){return t.filter(function(e){var t=e.node;return r===N.a.ALL||t.frontmatter.category===r}).slice(0,a*n)});return c.a.createElement(g,null,o.map(function(e,t){var n=e.node;return c.a.createElement(I,{node:n,key:"item_"+t})}))},x=n(202),O=n(216),L=n.n(O);function T(e){return!e||e==={}}function U(e,t){if(!T(e)){var n=e.getItem(t);if(n)return JSON.parse(n)}}function H(e,t,n){if(!T(e))return e.setItem(t,JSON.stringify(n))}var J="undefined"!=typeof window?window:{},G=J.localStorage,W=J.sessionStorage,j=L()(H,W),R=L()(U,W),D=(L()(H,G),L()(U,G),"__felog_session_storage_key__");n.d(t,"pageQuery",function(){return P});t.default=function(e){var t,n=e.data,r=e.location,f=(t=1,R(D+"/count")||t),d=function(e){return R(D+"/category")||e}(N.a.ALL),g=Object(i.useState)(f),h=g[0],E=g[1],v=Object(i.useRef)(h),I=Object(i.useState)(d),O=I[0],L=I[1],T=n.site.siteMetadata,U=T.configs.countOfInitialPost,H=n.allMarkdownRemark.edges,J=o()(H.map(function(e){return e.node.frontmatter.category}));Object(i.useEffect)(function(){return window.addEventListener("scroll",G,{passive:!1}),a=new IntersectionObserver(A,{root:p.d(b),rootMargin:y,threshold:w}),k(),x.c(),function(){window.removeEventListener("scroll",G,{passive:!1}),S().then(function(){return a=null}),x.a()}},[]),Object(i.useEffect)(function(){v.current=h,S().then(k),j(D+"/count",h),function(e){j(D+"/category",e)}(O)});var G=function(){var e=window.scrollY+window.innerHeight,t=function(){return function(e){return p.c()-e}(e)<80};return function(e,t){var n=t.dismissCondition,a=void 0===n?function(){return!1}:n,r=t.triggerCondition,o=void 0===r?function(){return!0}:r;if(!e)throw Error("Invalid required arguments");var i=!1;return function(){if(!i)return i=!0,requestAnimationFrame(function(){if(!a())return o()?(i=!1,e()):void 0;i=!1})}}(function(){return E(function(e){return e+1})},{dismissCondition:function(){return!t()},triggerCondition:function(){return t()&&H.length>v.current*U}})()};return c.a.createElement(u.a,{location:r,title:T.title},c.a.createElement(s.a,{title:N.c,keywords:T.keywords}),c.a.createElement(l.a,null),c.a.createElement(m,{categories:J,category:O,selectCategory:function(e){L(e),x.b(316)}}),c.a.createElement(C,{posts:H,countOfInitialPost:U,count:h,category:O}))};var P="2515441134"},176:function(e,t,n){"use strict";n.d(t,"b",function(){return s});var a=n(0),r=n.n(a),o=n(4),i=n.n(o),c=n(33),u=n.n(c);n.d(t,"a",function(){return u.a});n(179);var l=r.a.createContext({}),s=function(e){return r.a.createElement(l.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};s.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},178:function(e,t,n){"use strict";var a={ALL:"All"},r={LIGHT:"light",DARK:"dark"};n.d(t,"c",function(){return"Home"}),n.d(t,"a",function(){return a}),n.d(t,"d",function(){return r}),n.d(t,"b",function(){return"en"})},179:function(e,t,n){var a;e.exports=(a=n(182))&&a.default||a},180:function(e,t,n){"use strict";n.d(t,"a",function(){return u});var a=n(188),r=n.n(a),o=n(189),i=n.n(o);i.a.overrideThemeStyles=function(){return{a:{boxShadow:"none",textDecoration:"none",color:"#0687f0"},"a.gatsby-resp-image-link":{boxShadow:"none",textDecoration:"none"},"a:hover":{textDecoration:"none"},h1:{fontWeight:800,lineHeight:1.2,fontFamily:"Catamaran"},h2:{fontWeight:700,lineHeight:1.2,marginTop:"56px",marginBottom:"20px",fontFamily:"Catamaran"},ul:{marginBottom:"6px"},li:{marginBottom:"2px"}}};var c=new r.a(i.a);var u=c.rhythm;c.scale},181:function(e,t,n){"use strict";n.d(t,"e",function(){return a}),n.d(t,"d",function(){return r}),n.d(t,"a",function(){return o}),n.d(t,"b",function(){return c}),n.d(t,"g",function(){return u}),n.d(t,"f",function(){return l}),n.d(t,"c",function(){return s});var a=function(e){return document.querySelectorAll(e)},r=function(e){return document.querySelector(e)},o=function(e,t){return e.classList.add(t)},i=function(){return r("body")},c=function(e){return o(i(),e)},u=function(e){return function(e,t){return e.classList.remove(t)}(i(),e)},l=function(e){return function(e,t){return e.classList.contains(t)}(i(),e)},s=function(){return document.documentElement.offsetHeight}},182:function(e,t,n){"use strict";n.r(t);n(34);var a=n(0),r=n.n(a),o=n(4),i=n.n(o),c=n(55),u=n(2),l=function(e){var t=e.location,n=u.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:n},n.json))};l.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=l},183:function(e,t,n){"use strict";n.d(t,"a",function(){return f});var a=n(184),r=n(0),o=n.n(r),i=n(4),c=n.n(i),u=n(196),l=n.n(u),s=n(176);function f(e){var t=e.description,n=e.lang,r=e.meta,i=e.keywords,c=e.title;return o.a.createElement(s.b,{query:d,render:function(e){var a=t||e.site.siteMetadata.description;return o.a.createElement(l.a,{htmlAttributes:{lang:n},title:c,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:a},{property:"og:title",content:c},{property:"og:description",content:a},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:a}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(r)})},data:a})}f.defaultProps={lang:"en",meta:[],keywords:[]},f.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.array,keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired};var d="1025518380"},184:function(e){e.exports={data:{site:{siteMetadata:{title:"KUSG.io",description:"Kwon Ku Sang record and portfolio",author:"[KU_SANG]"}}}}},187:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(176),i=(n(153),function(){return r.a.createElement("a",{href:"https://github.com/rnjsrntkd95/rnjsrntkd95.github.io",className:"github","aria-label":"GitHub"},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 24 24"},r.a.createElement("path",{d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"})))}),c=(n(154),function(e){var t=e.title,n=e.location,a=e.rootPath,c=n.pathname===a;return r.a.createElement("div",{className:"top"},!c&&r.a.createElement(o.a,{to:"/",className:"link"},t),r.a.createElement(i,null))}),u=(n(155),function(e){var t=e.title,n=e.location,a=e.rootPath;return n.pathname===a&&r.a.createElement("h1",{className:"home-header"},r.a.createElement(o.a,{to:"/",className:"link"},t))}),l=n(195),s=n.n(l),f=n(181),d=n(178);n(156);var m=function(){var e=Object(a.useState)(!1),t=e[0],n=e[1],o=function(e){var t=function(e){return e?d.d.DARK:d.d.LIGHT}(e);n(e),function(e){switch(e){case d.d.LIGHT:f.b(d.d.LIGHT),f.g(d.d.DARK);break;case d.d.DARK:f.b(d.d.DARK),f.g(d.d.LIGHT)}}(t)};return Object(a.useEffect)(function(){var e=f.f(d.d.DARK);o(e)},[]),r.a.createElement("div",{className:"switch-container"},r.a.createElement("label",{htmlFor:"normal-switch"},r.a.createElement(s.a,{onChange:o,checked:t,id:"normal-switch",height:24,width:48,checkedIcon:r.a.createElement("div",{className:"icon checkedIcon"},"D"),uncheckedIcon:r.a.createElement("div",{className:"icon uncheckedIcon"},"L"),offColor:"#d9dfe2",offHandleColor:"#fff",onColor:"#999",onHandleColor:"#282c35"})))},g=(n(157),function(){return r.a.createElement("footer",{className:"footer"},"©",r.a.createElement("a",{href:"https://github.com/rnjsrntkd95"},"KuSang"),", Built with"," ",r.a.createElement("a",{href:"https://github.com/JaeYeopHan/gatsby-starter-bee"},"Gatsby-starter-bee"))}),h=n(180);n(158);n.d(t,"a",function(){return p});var p=function(e){var t=e.location,n=e.title,a=e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement(c,{title:n,location:t,rootPath:"/"}),r.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(h.a)(24),padding:Object(h.a)(1.5)+" "+Object(h.a)(.75)}},r.a.createElement(m,null),r.a.createElement(u,{title:n,location:t,rootPath:"/"}),a,r.a.createElement(g,null)))}},197:function(e,t,n){"use strict";n.d(t,"a",function(){return l});n(198);var a=n(200),r=n(0),o=n.n(r),i=n(176),c=n(201),u=n.n(c),l=(n(159),function(){return o.a.createElement(i.b,{query:s,render:function(e){var t=e.site.siteMetadata,n=t.author,a=t.social,r=t.introduction;return o.a.createElement("div",{className:"bio"},o.a.createElement("div",{className:"author"},o.a.createElement("div",{className:"author-description"},o.a.createElement(u.a,{className:"author-image",fixed:e.avatar.childImageSharp.fixed,alt:n,style:{borderRadius:"100%"}}),o.a.createElement("div",{className:"author-name"},o.a.createElement("span",{className:"author-name-prefix"},"Written by"),o.a.createElement(i.a,{to:"/about",className:"author-name-content"},o.a.createElement("span",null,"@",n)),o.a.createElement("div",{className:"author-introduction"},r),o.a.createElement("p",{className:"author-socials"},a.github&&o.a.createElement("a",{href:"https://github.com/"+a.github},"GitHub"),a.medium&&o.a.createElement("a",{href:"https://medium.com/"+a.medium},"Medium"),a.twitter&&o.a.createElement("a",{href:"https://twitter.com/"+a.twitter},"Twitter"),a.facebook&&o.a.createElement("a",{href:"https://www.facebook.com/"+a.facebook},"Facebook"))))))},data:a})}),s="1177532027"},200:function(e){e.exports={data:{avatar:{childImageSharp:{fixed:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEz0lEQVQ4ywHEBDv7AH9wVlVNOlJKNVlOOFBIM1VLNlBINU5GMko/LUw8LUk6K0o9LD4vIz4uJTksIj8yJlVENVxMO2xdSIh1XABHQC5QSDNgVjxdUjpcUDhhUjtVSTRWTDVUSTVJPzBLQDJPQTBGNScwJBw4LCJGNypJOSxHOCtFNytNPjEAXlU9TUgzT0gyXVM7YFU9YFI7Z1c+PjcmEhIOCwwNExMSLSgfSDgpJR0WOi4kSTksRTUqRDYrRjgtSDkvAEQ+LElEMDg0JDQuITYxITUvIDcxIhIUDwQGBwYHCAMGCQgLDSIdGBwYER4YEiMbFSceFysjGikhGCoiGgAfHBQvKx4yLh8sKBsjIBUjHxQgHxUSFA8ODQoEBQUGCAcICw0UFRUUEg0aFQ4iHBQpIRgrIxooIRgrIxoAbF5Kh3VYgG5TenJYbGZOQzwsKyUaOy4lTDoxXUI4OCkiFhUSPzovYldEXE89X1A+Xk46XUs4ZlI9aFM9AJmMcsW7orOojYyCZ46GaWRWQU08K4tvWH9aS4VcTWdFPF1JQIp4Y3VmT15TQZqQe4F1X2BSPVFBMEQ1JgCFfGKek32Yj3iEemBvalViVEF6YEizi3C1hXOPZFZ4T0Z9XFCSfmlvX0teUD2DclppW0ZwXURbTzlBNyoAjIRskIVrlIlulYxyi4NpiHZaemNKp4Rpqntrm29gb0k/fVxObl9Og29Wf2lRhXJcfGVQcV1IZFlHe2pWAJuUfIh8YZCGbI+HboyEaJB6XGxYP5yBX6eBaaBiX4ZVT3JeTnlsWJiAYJp8Wp1/X5yAYVlTSWFWSH9lUQDLwqeWjXOQiG+Oh2+Xj3WRf2RcUkKSfFyzk3G9gHV7UEpXSkRoamxbUE5tWVJvamhjXV1aUEtcTEVkTkUAfH1kYWVRZmlUaWtXdHVgoJmEpKSY0ce10b2o38W6po6CgHx7mJ+tn6Cpp6Wuo6e6e4OmbnqdbnqWbHSJAEA+LSkuIyQpIzU/Naeqm+bh1Ozp2/Hu4fn69////93c0KyrpMnDvZmaoKilpaytt5akyZW26azO9L7f9wA1MCYrLCYdIh+Eh3///PDt597x7OL29Oz29PD////W1s60sKjJvrF2d35xc3h9gISPlKSEkLGNnsCRr9UAaG9baHRgcoBt5Obe+Pbx8+/o9vXs8+XT5MWu28Cvs6uhy8W6wLWnfHl4eXyAnJqZv7q5mpunZ2p+T1d3AC8tJicpJXN4dP////X08Pj59/bw5u7Lrt21mcKWfoNiVZ2Th5uUioWEgIWGiLCvrtfQyMG8vIyIkYB1eQA3MiswLCipqaf////29/f29vLv1bzxzrLPqpS1kXiQbFt6dHFpXWKGhoiNkZOzs7Pm3dLd1Myko6pjXV8ANC0pTUlD3Nza////9/f18Ne/58Wp4sGs07GazKSGl3NikJOZgYuWkJeekZGSo6Gh8One6+HWxsPDa2t5ACwoJHJyb/////n7/fPgz/LLscOklpeTmK6vu8S4uaiipqCotJafqpWcpJeTkXRtbdHMyP/77+PVyJCFhQA/LiVqYl7s3tXr1MDtyrPeu6mompiwtcXY2N7w8O7v8PDl4uHHxMatrbCemJWCdmqYj4TeyLTgvKGtineP8SlMyPQxEAAAAABJRU5ErkJggg==",width:72,height:72,src:"/static/3e9f23c883a3beeb51ecbe4e0bb7b964/f53aa/profile.png",srcSet:"/static/3e9f23c883a3beeb51ecbe4e0bb7b964/f53aa/profile.png 1x,\n/static/3e9f23c883a3beeb51ecbe4e0bb7b964/0ccf0/profile.png 1.5x,\n/static/3e9f23c883a3beeb51ecbe4e0bb7b964/34113/profile.png 2x,\n/static/3e9f23c883a3beeb51ecbe4e0bb7b964/5584e/profile.png 3x"}}},site:{siteMetadata:{author:"[KU_SANG]",introduction:"Back-End 개발자가 되기 위한 개발로그. @경기대학교 @P'rogramming-12th",social:{twitter:"",github:"rnjsrntkd95",medium:"",facebook:""}}}}}},202:function(e,t,n){"use strict";n.d(t,"c",function(){return i}),n.d(t,"a",function(){return c}),n.d(t,"b",function(){return u});var a,r=n(203),o=n.n(r);function i(){return a=new o.a('a[href*="#"]',{speed:500,speedAsDuration:!0})}function c(){if(!a)throw Error("Not founded SmoothScroll instance");return a.destroy(),a=null}function u(e){if(!a)throw Error("Not founded SmoothScroll instance");return a.animateScroll(e),a}}}]);
//# sourceMappingURL=component---src-pages-index-js-a5bca7494e0d902bd970.js.map