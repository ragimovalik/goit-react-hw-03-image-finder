(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{19:function(n,e,t){n.exports={Scroller:"Scroller_Scroller__3D29k"}},55:function(n,e,t){},58:function(n,e,t){"use strict";t.r(e);var i,c,o,r,a,l,s,d,b=t(0),p=t.n(b),u=t(10),f=t.n(u),g=t(7),x=t(5),h=t(2),j=t(3),m="20179181-b536d7b2e359c0533f6f56cb7",O="https://pixabay.com/api/",v=function(n,e){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:12,i="".concat(O,"/?q=").concat(n,"&page=").concat(e,"&key=").concat(m,"&image_type=photo&orientation=horizontal&per_page=").concat(t," ");return fetch(i).then((function(n){return 200!==n.status?void console.log("Server response by non 200 status"):n.json()})).then((function(n){var e=n.totalHits;return{hits:n.hits,totalHits:e}})).catch((function(n){return console.log("Server Error. Something gone wrong.",n)}))},w=j.a.header(i||(i=Object(h.a)(["\n  top: 0;\n  left: 0;\n  position: sticky;\n  z-index: 1100;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 64px;\n  padding-right: 24px;\n  padding-left: 24px;\n  padding-top: 12px;\n  padding-bottom: 12px;\n  color: #fff;\n  background-color: #3f51b5;\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),\n    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n"]))),y=j.a.form(c||(c=Object(h.a)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  max-width: 600px;\n  background-color: #fff;\n  border-radius: 3px;\n  overflow: hidden;\n"]))),k=j.a.button(o||(o=Object(h.a)(["\n  display: inline-block;\n  width: 48px;\n  height: 48px;\n  border: 0;\n  background-image: url('https://image.flaticon.com/icons/svg/149/149852.svg');\n  background-size: 40%;\n  background-repeat: no-repeat;\n  background-position: center;\n  opacity: 0.6;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  outline: none;\n\n  &:hover {\n    opacity: 1;\n  }\n"]))),S=j.a.span(r||(r=Object(h.a)(["\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  clip-path: inset(50%);\n  border: 0;\n"]))),P=j.a.input(a||(a=Object(h.a)(["\n  display: inline-block;\n  width: 100%;\n  font: inherit;\n  font-size: 20px;\n  border: none;\n  outline: none;\n  padding-left: 4px;\n  padding-right: 4px;\n\n  &::placeholder {\n    font: inherit;\n    font-size: 1.125rem;\n  }\n"]))),C=t(1),z=function(n){var e=n.onSubmit,t=Object(b.useState)(""),i=Object(x.a)(t,2),c=i[0],o=i[1];return Object(C.jsx)(w,{children:Object(C.jsxs)(y,{onSubmit:function(n){n.preventDefault(),e(c),o("")},children:[Object(C.jsx)(k,{type:"submit",children:Object(C.jsx)(S,{children:"Search"})}),Object(C.jsx)(P,{type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:c,onChange:function(n){var e=n.target;o(e.value)}})]})})},E=j.a.li(l||(l=Object(h.a)(["\n  border-radius: 2px;\n  overflow: hidden;\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n"]))),U=j.a.img(s||(s=Object(h.a)(["\n  width: 100%;\n  height: 260px;\n  object-fit: cover;\n  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover {\n    transform: scale(1.03);\n    cursor: zoom-in;\n  }\n"]))),T=function(n){var e=n.id,t=n.lilPicUrl,i=n.bigPicUrl,c=n.tags,o=n.onClick;return Object(C.jsx)(E,{onClick:function(){return o(i)},children:Object(C.jsx)(U,{src:t,alt:c,title:c,data:i})},e)},_=j.a.ul(d||(d=Object(h.a)(["\n  display: grid;\n  max-width: calc(100vw - 48px);\n  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n  grid-gap: 16px;\n  margin: 0 auto;\n  padding: 0;\n  list-style: none;\n"]))),L=function(n){var e=n.collection,t=n.onClick;return Object(C.jsx)(_,{children:e.map((function(n){return Object(C.jsx)(T,{onClick:function(){return t(n.bigPicUrl)},id:n.id,lilPicUrl:n.lilPicUrl,bigPicUrl:n.bigPicUrl,tags:n.tags},n.id)}))})};L.defaultProps={collection:[{id:3295891,lilPicUrl:"https://pixabay.com/get/gb770f66d952c702d775af8030f534a313d6d926a64b10a982e3370d96f644aac37d1b4936df2e44f505663e64e1bc4effccf8b758c6344b2dae4ace19f28e4c6_640.jpg",bigPicUrl:"https://pixabay.com/get/g2eef296fd61c640231dd5a2882f825f73bbd55e2840b18d7f5b56b6e4e478815062ddc2c65376c107b005b8204f0cc75e3c998849527c91589c6d9ed0e64405d_1280.jpg",tags:"maki, curious, halfaap"}]};var B,H=L,D=j.a.button(B||(B=Object(h.a)(["\n  display: inline-block;\n  width: 180px;\n  height: 40px;\n  padding: 5px;\n  margin: 0 auto;\n\n  border: 3px solid lightgray;\n  border-radius: 8px;\n  outline: none;\n\n  background-color: #3f51b5;\n  color: #ffffff;\n  font-family: inherit;\n  font-size: 1.15rem;\n  font-style: normal;\n  font-weight: 500;\n  text-transform: uppercase;\n  text-align: center;\n  text-decoration: none;\n  line-height: 1.33;\n\n  overflow: hidden;\n  cursor: pointer;\n\n  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover,\n  &:focus {\n    transform: scale(1.05);\n    background-color: #303f9f;\n  }\n"]))),F=function(n){var e=n.btnText,t=n.onClick;return Object(C.jsx)(D,{onClick:t,children:e})};F.defaultProps={btnText:"click me",onClick:function(){return null}};var N,q=F,I=t(18),J=t.n(I),R=j.a.div(N||(N=Object(h.a)(["\n  position: relative;\n  display: block;\n  margin: 0 auto;\n  width: 60px;\n  height: 60px;\n  text-align: center;\n  top: 0;\n"]))),M=function(n){var e=n.visible;return Object(C.jsx)(R,{children:Object(C.jsx)(J.a,{type:"ThreeDots",color:"#303F9F",height:60,width:60,timeout:5e3,visible:e})})};M.defaultProps={visible:!0};var A,G=M,K=j.a.p(A||(A=Object(h.a)(["\n  display: block;\n  margin: 0 auto;\n  padding: 5px 10px;\n  font-size: 1.2rem;\n  font-weight: 500;\n  color: #3f51b5;\n"]))),Q=function(n){var e=n.message;return Object(C.jsx)(K,{children:e})};Q.defaultProps={message:":)"};var V,W,X,Y=Q,Z=t.p+"static/media/closeBtn.b449d580.svg",$=j.a.button(V||(V=Object(h.a)(["\n  position: absolute;\n  top: 2%;\n  right: 2%;\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  width: 44px;\n  height: 44px;\n  padding: 0;\n  margin: 0;\n  /* border: 3px solid #3f51b5; */\n  border: none;\n  border-radius: 50%;\n  outline: none;\n\n  background-color: #e0e8e5;\n  background-image: url(",");\n  background-position: center;\n  background-size: 60%;\n  background-repeat: no-repeat;\n\n  opacity: 0.7;\n  cursor: pointer;\n  transition: opacity 250ms linear;\n\n  &:hover,\n  &:focus {\n    opacity: 1;\n    transform: scale(1.03);\n  }\n"])),Z),nn=j.a.div(W||(W=Object(h.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.8);\n  z-index: 1200;\n"]))),en=j.a.div(X||(X=Object(h.a)(["\n  position: relative;\n  max-width: calc(100vw - 48px);\n  max-height: calc(100vh - 24px);\n"]))),tn=function(n){var e=n.url,t=n.onClose;return Object(b.useEffect)((function(){return window.addEventListener("keydown",t),function(){return window.removeEventListener("keydown",t)}}),[]),Object(C.jsx)(nn,{onClick:t,id:"backdrop",children:Object(C.jsxs)(en,{children:[Object(C.jsx)("img",{src:e,alt:" "}),Object(C.jsx)($,{onClick:t,type:"button"})]})})};tn.defaultProps={url:"https://pixabay.com/get/g2eef296fd61c640231dd5a2882f825f73bbd55e2840b18d7f5b56b6e4e478815062ddc2c65376c107b005b8204f0cc75e3c998849527c91589c6d9ed0e64405d_1280.jpg"};var cn,on=tn,rn=t(19),an=t.n(rn),ln=t(20),sn=t.n(ln),dn=function(){return Object(C.jsx)("button",{className:an.a.Scroller,onClick:function(){return window.scrollTo({top:0})},children:Object(C.jsx)(sn.a,{style:{fontSize:36}})})},bn=j.a.div(cn||(cn=Object(h.a)(["\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-gap: 16px;\n  padding-bottom: 24px;\n"]))),pn=function(){var n=Object(b.useState)([]),e=Object(x.a)(n,2),t=e[0],i=e[1],c=Object(b.useState)(""),o=Object(x.a)(c,2),r=o[0],a=o[1],l=Object(b.useState)(1),s=Object(x.a)(l,2),d=s[0],p=s[1],u=Object(b.useState)(),f=Object(x.a)(u,2),h=f[0],j=f[1],m=Object(b.useState)(!1),O=Object(x.a)(m,2),w=O[0],y=O[1],k=Object(b.useState)(!1),S=Object(x.a)(k,2),P=S[0],E=S[1],U=Object(b.useState)(""),T=Object(x.a)(U,2),_=T[0],L=T[1],B=Object(b.useState)(""),D=Object(x.a)(B,2),F=D[0],N=D[1],I=Object(b.useState)(!1),J=Object(x.a)(I,2),R=J[0],M=J[1];Object(b.useEffect)((function(){r&&A()}),[r]);var A=function(){v(r,d).then((function(n){var e=n.totalHits,t=n.hits;0===t.length&&N("Please check your query and try again"),j(e),i((function(n){return[].concat(Object(g.a)(n),Object(g.a)(t.map((function(n){return{id:n.id,lilPicUrl:n.webformatURL,bigPicUrl:n.largeImageURL,tags:n.tags}}))))}))})).catch((function(n){return N(n.message)})).finally((function(){return E(!1)}))},K=function(){return document.documentElement.scrollTop<=140?M(!1):M(!0)};Object(b.useEffect)((function(){return window.addEventListener("scroll",K),function(){window.removeEventListener("scroll",K)}}),[]),Object(b.useEffect)((function(){t.length>12&&window.scrollBy(0,document.documentElement.clientHeight-140),t.length/d===12?y(!0):y(!1)}),[t]);var Q=h?"".concat(h," images in the album"):F;return Object(C.jsxs)(bn,{children:[Object(C.jsx)(z,{onSubmit:function(n){p(1),a(n),i([]),y(!1),E(!0),L("")}}),Object(C.jsx)(Y,{message:Q}),t?Object(C.jsx)(H,{collection:t,onClick:function(n){return L(n)}}):null,P&&Object(C.jsx)(G,{}),w&&Object(C.jsx)(q,{btnText:"load more",onClick:function(){p(++d),E(!0),A()}}),R&&Object(C.jsx)(dn,{}),_&&Object(C.jsx)(on,{url:_,onClose:function(n){var e=n.target,t=n.code;("backdrop"===e.id||"BUTTON"===e.nodeName)&&L(""),"Escape"===t&&"Escape"===t&&L("")}})]})};t(55),t(56);f.a.render(Object(C.jsx)(p.a.StrictMode,{children:Object(C.jsx)(pn,{})}),document.getElementById("root"))}},[[58,1,2]]]);
//# sourceMappingURL=main.48af46da.chunk.js.map