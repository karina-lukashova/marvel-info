(this.webpackJsonpmarvel=this.webpackJsonpmarvel||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,n){},,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(10),s=n.n(c),i=n(2),o=n(3),l=n(5),h=n(4),d=(n(15),n(0)),u=function(){return Object(d.jsxs)("header",{className:"app__header",children:[Object(d.jsx)("h1",{className:"app__title",children:Object(d.jsxs)("a",{href:"#",children:[Object(d.jsx)("span",{children:"Marvel"})," information portal"]})}),Object(d.jsx)("nav",{className:"app__menu",children:Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:Object(d.jsx)("a",{href:"#",children:"Characters"})}),"/",Object(d.jsx)("li",{children:Object(d.jsx)("a",{href:"#",children:"Comics"})})]})})]})},j=n(6),m=n.n(j),b=n(7),f=function e(){var t=this;Object(i.a)(this,e),this._apiBase="https://gateway.marvel.com:443/v1/public/",this._apiKey="apikey=382124e5ebc2fff76b70b64ce0e6f545",this.getResource=function(){var e=Object(b.a)(m.a.mark((function e(t){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:if((n=e.sent).ok){e.next=5;break}throw new Error("Could not fetch ".concat(t,", status: ").concat(n.status));case 5:return e.next=7,n.json();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getAllCharacters=function(){var e=Object(b.a)(m.a.mark((function e(n){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("".concat(t._apiBase,"characters?limit=9&offset=").concat(n,"&").concat(t._apiKey));case 2:return a=e.sent,e.abrupt("return",a.data.results.map(t._transformCharacter));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getOneCharacter=function(){var e=Object(b.a)(m.a.mark((function e(n){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("".concat(t._apiBase,"characters/").concat(n,"?").concat(t._apiKey));case 2:return a=e.sent,e.abrupt("return",t._transformCharacter(a.data.results[0]));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this._transformCharacter=function(e){return{id:e.id,name:e.name,description:e.description?e.description:"Description not found",thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,homepage:e.urls[0].url,wiki:e.urls[1].url,comics:e.comics.items.length>0?e.comics.items.slice(0,10):"There are no comics with this character"}}},O=(n(18),n.p+"static/media/mjolnir.61f31e18.png"),p=function(){return Object(d.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"200",height:"200",version:"1",viewBox:"0 0 150 150",style:{margin:"0 auto",background:"none",display:"block"},children:Object(d.jsxs)("g",{children:[Object(d.jsxs)("linearGradient",{id:"a",children:[Object(d.jsx)("stop",{offset:"0%"}),Object(d.jsx)("stop",{offset:"100%",stopColor:"#0090fe"})]}),Object(d.jsxs)("linearGradient",{id:"b",children:[Object(d.jsx)("stop",{offset:"0%"}),Object(d.jsx)("stop",{offset:"100%",stopColor:"#90e6fe"})]}),Object(d.jsx)("path",{fill:"url(#a)",fillRule:"evenodd",d:"M64 .98A63.02 63.02 0 11.98 64 63.02 63.02 0 0164 .98zm0 15.76A47.26 47.26 0 1116.74 64 47.26 47.26 0 0164 16.74z"}),Object(d.jsx)("path",{fill:"url(#b)",fillRule:"evenodd",d:"M64.12 125.54A61.54 61.54 0 11125.66 64a61.54 61.54 0 01-61.54 61.54zm0-121.1A59.57 59.57 0 10123.7 64 59.57 59.57 0 0064.1 4.43zM64 115.56a51.7 51.7 0 1151.7-51.7 51.7 51.7 0 01-51.7 51.7zM64 14.4a49.48 49.48 0 1049.48 49.48A49.48 49.48 0 0064 14.4z"}),Object(d.jsx)("animateTransform",{attributeName:"transform",dur:"1800ms",from:"0 64 64",repeatCount:"indefinite",to:"360 64 64",type:"rotate"})]})})},x=n.p+"static/media/error.42292aa1.gif",v=function(){return Object(d.jsx)("img",{style:{display:"block",width:"250px",height:"250px",objectFit:"contain",margin:"0 auto"},src:x,alt:"\u0412\u043e\u0437\u043d\u0438\u043a\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430"})},_=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={char:{},loading:!0,error:!1},e.marvelService=new f,e.onCharLoaded=function(t){e.setState({char:t,loading:!1})},e.onCharLoading=function(){e.setState({loading:!0})},e.onError=function(){e.setState({loading:!1,error:!0})},e.updateChar=function(){var t=Math.floor(400*Math.random()+1011e3);e.onCharLoading(),e.marvelService.getOneCharacter(t).then((function(t){return e.onCharLoaded(t)})).catch((function(t){return e.onError()}))},e.onTryAnotherClick=function(){e.setState({error:!1}),e.updateChar()},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.updateChar()}},{key:"render",value:function(){var e=this.state,t=e.char,n=e.loading,a=e.error,r=a?Object(d.jsx)(v,{}):null,c=n?Object(d.jsx)(p,{}):null,s=n||a?null:Object(d.jsx)(g,{char:t});return Object(d.jsxs)("div",{className:"randomchar",children:[r,c,s,Object(d.jsxs)("div",{className:"randomchar__static",children:[Object(d.jsxs)("p",{className:"randomchar__title",children:["Random character for today!",Object(d.jsx)("br",{}),"Do you want to get to know him better?"]}),Object(d.jsx)("p",{className:"randomchar__title",children:"Or choose another one"}),Object(d.jsx)("button",{className:"button button__main",onClick:this.onTryAnotherClick,children:Object(d.jsx)("div",{className:"inner",children:"try it"})}),Object(d.jsx)("img",{src:O,alt:"mjolnir",className:"randomchar__decoration"})]})]})}}]),n}(a.Component),g=function(e){var t=e.char,n=t.name,a=t.description,r=t.thumbnail,c=t.homepage,s=t.wiki,i=r.includes("not_available")?"contain":"cover";return Object(d.jsxs)("div",{className:"randomchar__block",children:[Object(d.jsx)("img",{src:r,alt:"Random character",className:"randomchar__img",style:{objectFit:i}}),Object(d.jsxs)("div",{className:"randomchar__info",children:[Object(d.jsx)("p",{className:"randomchar__name",children:n}),Object(d.jsx)("p",{className:"randomchar__descr",children:a}),Object(d.jsxs)("div",{className:"randomchar__btns",children:[Object(d.jsx)("a",{href:c,className:"button button__main",children:Object(d.jsx)("div",{className:"inner",children:"homepage"})}),Object(d.jsx)("a",{href:s,className:"button button__secondary",children:Object(d.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]})},y=_,C=n(9),N=(n(19),function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={charList:[],loading:!0,error:!1,newItemsLoading:!1,offset:Math.floor(590*Math.random()+10),charEnded:!1},e.marvelService=new f,e.onRequest=function(t){e.onCharListLoading(),e.marvelService.getAllCharacters(t).then((function(t){return e.onCharListLoaded(t)})).catch(e.onError)},e.onCharListLoading=function(){e.setState({newItemsLoading:!0})},e.onCharListLoaded=function(t){var n=!1;t.length<9&&(n=!0),e.setState((function(e){var a=e.charList,r=e.offset;e.charEnded;return{charList:[].concat(Object(C.a)(a),Object(C.a)(t)),loading:!1,newItemsLoading:!1,offset:r+9,charEnded:n}}))},e.onError=function(){e.setState({loading:!1,error:!0})},e.itemRefs=[],e.setRef=function(t){e.itemRefs.push(t)},e.focusOnItem=function(t){e.itemRefs.forEach((function(e){return e.classList.remove("char__item_selected")})),e.itemRefs[t].classList.add("char__item_selected"),e.itemRefs[t].focus()},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.onRequest(this.state.offset)}},{key:"renderItems",value:function(e){var t=this,n=this.state.charList.map((function(e,n){return Object(d.jsxs)("li",{ref:t.setRef,className:"char__item",onClick:function(){t.props.onCharSelected(e.id),t.focusOnItem(n)},onKeyPress:function(a){" "!==a.key&&"Enter"!==a.key||(t.props.onCharSelected(e.id),t.focusOnItem(n))},tabIndex:"0",children:[Object(d.jsx)("img",{src:e.thumbnail,alt:e.name}),Object(d.jsx)("div",{className:"char__name",children:e.name})]},e.id)}));return Object(d.jsx)("ul",{className:"char__grid",children:n})}},{key:"render",value:function(){var e=this,t=this.state,n=t.charList,a=t.loading,r=t.error,c=t.newItemsLoading,s=t.offset,i=t.charEnded,o=this.renderItems(n),l=r?Object(d.jsx)(v,{}):null,h=a?Object(d.jsx)(p,{}):null,u=a||r?null:o;return Object(d.jsxs)("div",{className:"char__list",children:[l,h,u,Object(d.jsx)("button",{className:"button button__main button__long",disabled:c,style:{display:i?"none":"block"},onClick:function(){return e.onRequest(s)},children:Object(d.jsx)("div",{className:"inner",children:"load more"})})]})}}]),n}(a.Component)),k=(n(20),n(21),function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("p",{className:"char__select",children:"Please select a character to see information"}),Object(d.jsxs)("div",{className:"skeleton",children:[Object(d.jsxs)("div",{className:"pulse skeleton__header",children:[Object(d.jsx)("div",{className:"pulse skeleton__circle"}),Object(d.jsx)("div",{className:"pulse skeleton__mini"})]}),Object(d.jsx)("div",{className:"pulse skeleton__block"}),Object(d.jsx)("div",{className:"pulse skeleton__block"}),Object(d.jsx)("div",{className:"pulse skeleton__block"})]})]})}),w=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={char:null,loading:!1,error:!1},e.marvelService=new f,e.onCharLoaded=function(t){e.setState({char:t,loading:!1})},e.onCharLoading=function(){e.setState({loading:!0})},e.onError=function(){e.setState({loading:!1,error:!0})},e.updateChar=function(){var t=e.props.charId;t&&(e.onCharLoading(),e.marvelService.getOneCharacter(t).then(e.onCharLoaded).catch(e.onError))},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.updateChar()}},{key:"componentDidUpdate",value:function(e){this.props.charId!==e.charId&&this.updateChar()}},{key:"render",value:function(){var e=this.state,t=e.char,n=e.loading,a=e.error,r=t||n||a?null:Object(d.jsx)(k,{}),c=a?Object(d.jsx)(v,{}):null,s=n?Object(d.jsx)(p,{}):null,i=n||a||!t?null:Object(d.jsx)(L,{char:t});return Object(d.jsxs)("div",{className:"char__info",children:[r,c,s,i]})}}]),n}(a.Component),L=function(e){var t=e.char,n=t.name,a=t.description,r=t.thumbnail,c=t.homepage,s=t.wiki,i=t.comics,o=r.includes("not_available")?"contain":"cover";return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{className:"char__basics",children:[Object(d.jsx)("img",{src:r,alt:n,style:{objectFit:o}}),Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{className:"char__info-name",children:n}),Object(d.jsxs)("div",{className:"char__btns",children:[Object(d.jsx)("a",{href:c,className:"button button__main",children:Object(d.jsx)("div",{className:"inner",children:"homepage"})}),Object(d.jsx)("a",{href:s,className:"button button__secondary",children:Object(d.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]}),Object(d.jsx)("div",{className:"char__descr",children:a}),Object(d.jsx)("div",{className:"char__comics",children:"Comics:"}),Object(d.jsx)("ul",{className:"char__comics-list",children:"string"===typeof i?Object(d.jsx)("li",{className:"char__comics-item",style:{color:"red"},children:i},0):i.map((function(e,t){return Object(d.jsx)("li",{className:"char__comics-item",children:e.name},t)}))})]})},S=w,R=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={error:!1},e}return Object(o.a)(n,[{key:"render",value:function(){return this.state.error?Object(d.jsx)(v,{}):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{error:!0}}}]),n}(a.Component),E=n.p+"static/media/vision.067d4ae1.png",I=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={selectedChar:null},e.onCharSelected=function(t){e.setState({selectedChar:t})},e}return Object(o.a)(n,[{key:"render",value:function(){return Object(d.jsxs)("div",{className:"app",children:[Object(d.jsx)(u,{}),Object(d.jsxs)("main",{children:[Object(d.jsx)(R,{children:Object(d.jsx)(y,{})}),Object(d.jsxs)("div",{className:"char__content",children:[Object(d.jsx)(R,{children:Object(d.jsx)(N,{onCharSelected:this.onCharSelected})}),Object(d.jsx)(R,{children:Object(d.jsx)(S,{charId:this.state.selectedChar})})]}),Object(d.jsx)("img",{className:"bg-decoration",src:E,alt:"vision"})]})]})}}]),n}(a.Component);n(22);s.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(I,{})}),document.getElementById("root"))}],[[23,1,2]]]);
//# sourceMappingURL=main.82cface2.chunk.js.map