(this.webpackJsonpmarvel=this.webpackJsonpmarvel||[]).push([[0],{26:function(e,t,c){},28:function(e,t,c){},29:function(e,t,c){},30:function(e,t,c){},31:function(e,t,c){},32:function(e,t,c){},33:function(e,t,c){},34:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c(12),a=c.n(r),s=c(5),i=c(2),o=c(3),l=c(6),j=c.n(l),u=c(7),b=function(){var e=function(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),c=t[0],r=t[1],a=Object(n.useState)(null),s=Object(o.a)(a,2),i=s[0],l=s[1];return{loading:c,error:i,request:Object(n.useCallback)(function(){var e=Object(u.a)(j.a.mark((function e(t){var c,n,a,s,i,o=arguments;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=o.length>1&&void 0!==o[1]?o[1]:"GET",n=o.length>2&&void 0!==o[2]?o[2]:null,a=o.length>3&&void 0!==o[3]?o[3]:{"Content-Type":"application/json"},r(!0),e.prev=4,e.next=7,fetch(t,{method:c,body:n,headers:a});case 7:if((s=e.sent).ok){e.next=10;break}throw new Error("Could not fetch ".concat(t,", status: ").concat(s.status));case 10:return e.next=12,s.json();case 12:return i=e.sent,r(!1),e.abrupt("return",i);case 17:throw e.prev=17,e.t0=e.catch(4),r(!1),l(e.t0.message),e.t0;case 22:case"end":return e.stop()}}),e,null,[[4,17]])})));return function(t){return e.apply(this,arguments)}}(),[]),clearError:Object(n.useCallback)((function(){return l(null)}),[])}}(),t=e.loading,c=e.error,r=e.request,a=e.clearError,s="https://gateway.marvel.com:443/v1/public/",i="apikey=382124e5ebc2fff76b70b64ce0e6f545",l=function(){var e=Object(u.a)(j.a.mark((function e(t){var c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r("".concat(s,"characters?limit=9&offset=").concat(t,"&").concat(i));case 2:return c=e.sent,e.abrupt("return",c.data.results.map(h));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b=function(){var e=Object(u.a)(j.a.mark((function e(t){var c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r("".concat(s,"characters/").concat(t,"?").concat(i));case 2:return c=e.sent,e.abrupt("return",h(c.data.results[0]));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=Object(u.a)(j.a.mark((function e(t){var c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r("".concat(s,"comics?orderBy=issueNumber&offset=").concat(t,"&limit=8&").concat(i));case 2:return c=e.sent,e.abrupt("return",c.data.results.map(O));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=Object(u.a)(j.a.mark((function e(t){var c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r("".concat(s,"comics/").concat(t,"?").concat(i));case 2:return c=e.sent,e.abrupt("return",O(c.data.results[0]));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(e){return{id:e.id,name:e.name,description:e.description?e.description:"Description not found",thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,homepage:e.urls[0].url,wiki:e.urls[1].url,comics:e.comics.items.length>0?e.comics.items.slice(0,10):"There are no comics with this character"}},O=function(e){return{id:e.id,title:e.title,description:e.description||"There is no description",pageCount:e.pageCount?"".concat(e.pageCount," pages"):"No information about the number of pages",thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,language:e.textObjects.language||"en-us",price:e.prices[0].price?"".concat(e.prices[0].price,"$"):"NOT AVAILABLE"}};return{loading:t,error:c,getAllCharacters:l,getOneCharacter:b,getAllComics:d,getOneComics:m,clearError:a}},d=(c(26),c.p+"static/media/mjolnir.61f31e18.png"),m=c(0),h=function(){return Object(m.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"200",height:"200",version:"1",viewBox:"0 0 150 150",style:{margin:"0 auto",background:"none",display:"block"},children:Object(m.jsxs)("g",{children:[Object(m.jsxs)("linearGradient",{id:"a",children:[Object(m.jsx)("stop",{offset:"0%"}),Object(m.jsx)("stop",{offset:"100%",stopColor:"#0090fe"})]}),Object(m.jsxs)("linearGradient",{id:"b",children:[Object(m.jsx)("stop",{offset:"0%"}),Object(m.jsx)("stop",{offset:"100%",stopColor:"#90e6fe"})]}),Object(m.jsx)("path",{fill:"url(#a)",fillRule:"evenodd",d:"M64 .98A63.02 63.02 0 11.98 64 63.02 63.02 0 0164 .98zm0 15.76A47.26 47.26 0 1116.74 64 47.26 47.26 0 0164 16.74z"}),Object(m.jsx)("path",{fill:"url(#b)",fillRule:"evenodd",d:"M64.12 125.54A61.54 61.54 0 11125.66 64a61.54 61.54 0 01-61.54 61.54zm0-121.1A59.57 59.57 0 10123.7 64 59.57 59.57 0 0064.1 4.43zM64 115.56a51.7 51.7 0 1151.7-51.7 51.7 51.7 0 01-51.7 51.7zM64 14.4a49.48 49.48 0 1049.48 49.48A49.48 49.48 0 0064 14.4z"}),Object(m.jsx)("animateTransform",{attributeName:"transform",dur:"1800ms",from:"0 64 64",repeatCount:"indefinite",to:"360 64 64",type:"rotate"})]})})},O=c.p+"static/media/error.42292aa1.gif",f=function(){return Object(m.jsx)("img",{style:{display:"block",width:"250px",height:"250px",objectFit:"contain",margin:"0 auto"},src:O,alt:"\u0412\u043e\u0437\u043d\u0438\u043a\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430"})},x=function(e){var t=e.char,c=t.name,n=t.description,r=t.thumbnail,a=t.homepage,s=t.wiki,i=r&&r.includes("not_available")?"contain":"cover";return Object(m.jsxs)("div",{className:"randomchar__block",children:[Object(m.jsx)("img",{src:r,alt:"Random character",className:"randomchar__img",style:{objectFit:i}}),Object(m.jsxs)("div",{className:"randomchar__info",children:[Object(m.jsx)("p",{className:"randomchar__name",children:c}),Object(m.jsx)("p",{className:"randomchar__descr",children:n}),Object(m.jsxs)("div",{className:"randomchar__btns",children:[Object(m.jsx)("a",{href:a,className:"button button__main",children:Object(m.jsx)("div",{className:"inner",children:"homepage"})}),Object(m.jsx)("a",{href:s,className:"button button__secondary",children:Object(m.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]})},p=function(){var e=Object(n.useState)({}),t=Object(o.a)(e,2),c=t[0],r=t[1],a=b(),s=a.loading,i=a.error,l=a.getOneCharacter,j=a.clearError;Object(n.useEffect)((function(){u()}),[]);var u=function(){j();var e=Math.floor(400*Math.random()+1011e3);l(e).then((function(e){r(e)}))},O=i?Object(m.jsx)(f,{}):null,p=s?Object(m.jsx)(h,{}):null,_=s||i?null:Object(m.jsx)(x,{char:c});return Object(m.jsxs)("div",{className:"randomchar",children:[O,p,_,Object(m.jsxs)("div",{className:"randomchar__static",children:[Object(m.jsxs)("p",{className:"randomchar__title",children:["Random character for today!",Object(m.jsx)("br",{}),"Do you want to get to know him better?"]}),Object(m.jsx)("p",{className:"randomchar__title",children:"Or choose another one"}),Object(m.jsx)("button",{className:"button button__main",onClick:u,children:Object(m.jsx)("div",{className:"inner",children:"try it"})}),Object(m.jsx)("img",{src:d,alt:"mjolnir",className:"randomchar__decoration"})]})]})},_=c(9),v=(c(28),function(e){var t=Object(n.useState)([]),c=Object(o.a)(t,2),r=c[0],a=c[1],s=Object(n.useState)(!1),i=Object(o.a)(s,2),l=i[0],j=i[1],u=Object(n.useState)(Math.floor(590*Math.random()+10)),d=Object(o.a)(u,2),O=d[0],x=d[1],p=Object(n.useState)(!1),v=Object(o.a)(p,2),g=v[0],N=v[1],k=b(),y=k.loading,w=k.error,C=k.getAllCharacters;Object(n.useEffect)((function(){A(O,!0)}),[]);var A=function(e,t){j(!t),C(e).then((function(e){return S(e)}))},S=function(e){var t=!1;e.length<9&&(t=!0),a((function(t){return[].concat(Object(_.a)(t),Object(_.a)(e))})),j((function(e){return!1})),x((function(e){return e+9})),N((function(e){return t}))},E=Object(n.useRef)([]),M=function(e){E.current.forEach((function(e){return e.classList.remove("char__item_selected")})),E.current[e].classList.add("char__item_selected"),E.current[e].focus()},F=function(t){var c=t.map((function(t,c){return Object(m.jsxs)("li",{ref:function(e){return E.current[c]=e},className:"char__item",onClick:function(){e.onCharSelected(t.id),M(c)},onKeyPress:function(n){" "!==n.key&&"Enter"!==n.key||(e.onCharSelected(t.id),M(c))},tabIndex:"0",children:[Object(m.jsx)("img",{src:t.thumbnail,alt:t.name}),Object(m.jsx)("div",{className:"char__name",children:t.name})]},t.id)}));return Object(m.jsx)("ul",{className:"char__grid",children:c})}(r),I=w?Object(m.jsx)(f,{}):null,z=y&&!l?Object(m.jsx)(h,{}):null;return Object(m.jsxs)("div",{className:"char__list",children:[I,z,F,Object(m.jsx)("button",{className:"button button__main button__long",disabled:l,style:{display:g?"none":"block"},onClick:function(){return A(O)},children:Object(m.jsx)("div",{className:"inner",children:"load more"})})]})}),g=(c(29),c(30),function(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("p",{className:"char__select",children:"Please select a character to see information"}),Object(m.jsxs)("div",{className:"skeleton",children:[Object(m.jsxs)("div",{className:"pulse skeleton__header",children:[Object(m.jsx)("div",{className:"pulse skeleton__circle"}),Object(m.jsx)("div",{className:"pulse skeleton__mini"})]}),Object(m.jsx)("div",{className:"pulse skeleton__block"}),Object(m.jsx)("div",{className:"pulse skeleton__block"}),Object(m.jsx)("div",{className:"pulse skeleton__block"})]})]})}),N=function(e){var t=e.char,c=t.name,n=t.description,r=t.thumbnail,a=t.homepage,i=t.wiki,o=t.comics,l=r.includes("not_available")?"contain":"cover";return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("div",{className:"char__basics",children:[Object(m.jsx)("img",{src:r,alt:c,style:{objectFit:l}}),Object(m.jsxs)("div",{children:[Object(m.jsx)("div",{className:"char__info-name",children:c}),Object(m.jsxs)("div",{className:"char__btns",children:[Object(m.jsx)("a",{href:a,className:"button button__main",children:Object(m.jsx)("div",{className:"inner",children:"homepage"})}),Object(m.jsx)("a",{href:i,className:"button button__secondary",children:Object(m.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]}),Object(m.jsx)("div",{className:"char__descr",children:n}),Object(m.jsx)("div",{className:"char__comics",children:"Comics:"}),Object(m.jsx)("ul",{className:"char__comics-list",children:"string"===typeof o?Object(m.jsx)("li",{className:"char__comics-item",style:{color:"red"},children:o},0):o.map((function(e,t){var c=e.resourceURI.replace("http://gateway.marvel.com/v1/public/comics/","");return Object(m.jsx)("li",{className:"char__comics-item",children:Object(m.jsx)(s.b,{to:"/comics/"+c,children:e.name})},t)}))})]})},k=function(e){var t=Object(n.useState)(null),c=Object(o.a)(t,2),r=c[0],a=c[1],s=b(),i=s.loading,l=s.error,j=s.getOneCharacter,u=s.clearError;Object(n.useEffect)((function(){O()}),[e.charId]);var d=function(e){a(e)},O=function(){var t=e.charId;t&&(u(),j(t).then(d))},x=r||i||l?null:Object(m.jsx)(g,{}),p=l?Object(m.jsx)(f,{}):null,_=i?Object(m.jsx)(h,{}):null,v=i||l||!r?null:Object(m.jsx)(N,{char:r});return Object(m.jsxs)("div",{className:"char__info",children:[x,p,_,v]})},y=c(13),w=c(14),C=c(16),A=c(15),S=function(e){Object(C.a)(c,e);var t=Object(A.a)(c);function c(){var e;Object(y.a)(this,c);for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).state={error:!1},e}return Object(w.a)(c,[{key:"render",value:function(){return this.state.error?Object(m.jsx)(f,{}):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{error:!0}}}]),c}(n.Component),E=c.p+"static/media/vision.067d4ae1.png",M=function(){var e=Object(n.useState)(null),t=Object(o.a)(e,2),c=t[0],r=t[1];return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(S,{children:Object(m.jsx)(p,{})}),Object(m.jsxs)("div",{className:"char__content",children:[Object(m.jsx)(S,{children:Object(m.jsx)(v,{onCharSelected:function(e){r(e)}})}),Object(m.jsx)(S,{children:Object(m.jsx)(k,{charId:c})})]}),Object(m.jsx)("img",{className:"bg-decoration",src:E,alt:"vision"})]})},F=(c(31),c.p+"static/media/Avengers.4065c8f9.png"),I=c.p+"static/media/Avengers_logo.9eaf2193.png",z=function(){return Object(m.jsxs)("div",{className:"app__banner",children:[Object(m.jsx)("img",{src:F,alt:"Avengers"}),Object(m.jsxs)("div",{className:"app__banner-text",children:["New comics every week!",Object(m.jsx)("br",{}),"Stay tuned!"]}),Object(m.jsx)("img",{src:I,alt:"Avengers logo"})]})},R=(c(32),function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),c=t[0],r=t[1],a=Object(n.useState)(!1),i=Object(o.a)(a,2),l=i[0],j=i[1],u=Object(n.useState)(Math.floor(4990*Math.random()+10)),d=Object(o.a)(u,2),O=d[0],x=d[1],p=Object(n.useState)(!1),v=Object(o.a)(p,2),g=v[0],N=v[1],k=b(),y=k.loading,w=k.error,C=k.getAllComics;Object(n.useEffect)((function(){A(O,!0)}),[]);var A=function(e,t){j(!t),C(e).then((function(e){return S(e)}))},S=function(e){var t=!1;e.length<8&&(t=!0),r((function(t){return[].concat(Object(_.a)(t),Object(_.a)(e))})),j((function(e){return!1})),x((function(e){return e+8})),N((function(e){return t}))},E=function(e){var t=e.map((function(e,t){return Object(m.jsx)("li",{className:"comics__item",children:Object(m.jsxs)(s.b,{to:"/comics/".concat(e.id),children:[Object(m.jsx)("img",{src:e.thumbnail,alt:e.title,className:"comics__item-img"}),Object(m.jsx)("div",{className:"comics__item-name",children:e.title}),Object(m.jsx)("div",{className:"comics__item-price",children:e.price})]})},e.id)}));return Object(m.jsx)("ul",{className:"comics__grid",children:t})}(c),M=w?Object(m.jsx)(f,{}):null,F=y&&!l?Object(m.jsx)(h,{}):null;return Object(m.jsxs)("div",{className:"comics__list",children:[M,F,E,Object(m.jsx)("button",{className:"button button__main button__long",disabled:l,style:{display:g?"none":"block"},onClick:function(){return A(O)},children:Object(m.jsx)("div",{className:"inner",children:"load more"})})]})}),T=function(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(z,{}),Object(m.jsx)(R,{})]})},B=function(){return Object(m.jsxs)("div",{children:[Object(m.jsx)(f,{}),Object(m.jsx)("p",{style:{textAlign:"center",fontWeight:"bold",fontSize:"24px"},children:"Page doesn't exist"}),Object(m.jsx)(s.b,{style:{display:"block",textAlign:"center",fontWeight:"bold",fontSize:"24px",marginTop:"30px"},to:"/",children:"Back to main page"})]})},L=(c(33),function(){var e=Object(i.g)().comicId,t=Object(n.useState)(null),c=Object(o.a)(t,2),r=c[0],a=c[1],s=b(),l=s.loading,j=s.error,u=s.getOneComics,d=s.clearError;Object(n.useEffect)((function(){x()}),[e]);var O=function(e){a(e)},x=function(){d(),u(e).then(O)},p=j?Object(m.jsx)(f,{}):null,_=l?Object(m.jsx)(h,{}):null,v=l||j||!r?null:Object(m.jsx)(W,{comic:r});return Object(m.jsxs)(m.Fragment,{children:[p,_,v]})}),W=function(e){var t=e.comic,c=t.title,n=t.description,r=t.pageCount,a=t.thumbnail,i=t.language,o=t.price;return Object(m.jsxs)("div",{className:"single-comic",children:[Object(m.jsx)("img",{src:a,alt:c,className:"single-comic__img"}),Object(m.jsxs)("div",{className:"single-comic__info",children:[Object(m.jsx)("h2",{className:"single-comic__name",children:c}),Object(m.jsx)("p",{className:"single-comic__descr",children:n}),Object(m.jsx)("p",{className:"single-comic__descr",children:r}),Object(m.jsxs)("p",{className:"single-comic__descr",children:["Language: ",i]}),Object(m.jsx)("div",{className:"single-comic__price",children:o})]}),Object(m.jsx)(s.b,{to:"/comics",className:"single-comic__back",children:"Back to all comics"})]})},D=function(){return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(L,{})})},G=(c(34),function(){return Object(m.jsxs)("header",{className:"app__header",children:[Object(m.jsx)("h1",{className:"app__title",children:Object(m.jsxs)(s.b,{to:"/",children:[Object(m.jsx)("span",{children:"Marvel"})," information portal"]})}),Object(m.jsx)("nav",{className:"app__menu",children:Object(m.jsxs)("ul",{children:[Object(m.jsx)("li",{children:Object(m.jsx)(s.c,{style:function(e){return{color:e.isActive?"#9f0013":"inherit"}},to:"/",children:"Characters"})}),"/",Object(m.jsx)("li",{children:Object(m.jsx)(s.c,{style:function(e){return{color:e.isActive?"#9f0013":"inherit"}},to:"/comics",children:"Comics"})})]})})]})}),P=function(){return Object(m.jsx)(s.a,{children:Object(m.jsxs)("div",{className:"app",children:[Object(m.jsx)(G,{}),Object(m.jsx)("main",{children:Object(m.jsxs)(i.c,{children:[Object(m.jsx)(i.a,{path:"/",element:Object(m.jsx)(M,{})}),Object(m.jsx)(i.a,{path:"/comics/",element:Object(m.jsx)(T,{})}),Object(m.jsx)(i.a,{path:"/comics/:comicId",element:Object(m.jsx)(D,{})}),Object(m.jsx)(i.a,{path:"*",element:Object(m.jsx)(B,{})})]})})]})})};c(35);a.a.createRoot(document.getElementById("root")).render(Object(m.jsx)(P,{}))}},[[36,1,2]]]);
//# sourceMappingURL=main.7dad3f00.chunk.js.map