(function(t){function e(e){for(var c,o,i=e[0],l=e[1],s=e[2],b=0,d=[];b<i.length;b++)o=i[b],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&d.push(n[o][0]),n[o]=0;for(c in l)Object.prototype.hasOwnProperty.call(l,c)&&(t[c]=l[c]);u&&u(e);while(d.length)d.shift()();return a.push.apply(a,s||[]),r()}function r(){for(var t,e=0;e<a.length;e++){for(var r=a[e],c=!0,i=1;i<r.length;i++){var l=r[i];0!==n[l]&&(c=!1)}c&&(a.splice(e--,1),t=o(o.s=r[0]))}return t}var c={},n={app:0},a=[];function o(e){if(c[e])return c[e].exports;var r=c[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=t,o.c=c,o.d=function(t,e,r){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var c in t)o.d(r,c,function(e){return t[e]}.bind(null,c));return r},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var s=0;s<i.length;s++)e(i[s]);var u=l;a.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"2dcc":function(t,e,r){"use strict";r("505c")},"505c":function(t,e,r){},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var c=r("7a23"),n={id:"nav"},a=Object(c["h"])("Home"),o=Object(c["h"])(" | "),i=Object(c["h"])("About"),l={class:"container"};function s(t,e){var r=Object(c["x"])("router-link"),s=Object(c["x"])("router-view");return Object(c["r"])(),Object(c["f"])(c["a"],null,[Object(c["i"])("div",n,[Object(c["i"])(r,{to:"/"},{default:Object(c["D"])((function(){return[a]})),_:1}),o,Object(c["i"])(r,{to:"/about"},{default:Object(c["D"])((function(){return[i]})),_:1})]),Object(c["i"])("div",l,[Object(c["i"])(s)])],64)}r("2dcc");const u={};u.render=s;var b=u,d=r("6c02"),p=(r("b0c0"),{class:"navbar navbar-light sticky-top mr-3"}),j={key:0,class:" w-100 navbar-text ml-auto d-flex justify-content-end position-relative"},f={class:"mr-auto d-flex align-items-end flex-column bd-highlight mb-3 position-absolute"},O={class:"mb-2"},m={class:"font-weight-bold bg-white"},v={class:"dropdown-clip"},h={key:0,class:"list-group","aria-labelledby":"cartDropdown"},g={class:"ml-3 font-weight-bold"},y={class:"container"},x={for:"max-price",class:"form-label h2"},w={class:"badge bg-success ml-3"};function C(t,e,r,n,a,o){var i=Object(c["x"])("curr"),l=Object(c["x"])("fa"),s=Object(c["x"])("custom-alert"),u=Object(c["x"])("product");return Object(c["r"])(),Object(c["f"])(c["a"],null,[Object(c["i"])("nav",p,[t.cart.length?(Object(c["r"])(),Object(c["f"])("div",j,[Object(c["i"])("div",f,[Object(c["i"])("div",O,[Object(c["i"])("span",m,[Object(c["i"])(i,{amt:o.cartTotal},null,8,["amt"])]),Object(c["i"])("button",{onClick:e[1]||(e[1]=function(e){return t.displayCart=!t.displayCart}),class:"btn btn-sm btn-success ml-3",id:"cartDropdown","aria-haspopup":"true","aria-expanded":"false"},[Object(c["i"])(l,{icon:"shopping-cart"}),Object(c["h"])(" "+Object(c["z"])(t.cart.length),1)])]),Object(c["i"])("div",v,[Object(c["i"])(c["b"],{name:"dropdown"},{default:Object(c["D"])((function(){return[t.displayCart?(Object(c["r"])(),Object(c["f"])("div",h,[(Object(c["r"])(!0),Object(c["f"])(c["a"],null,Object(c["v"])(t.cart,(function(t,e){return Object(c["r"])(),Object(c["f"])("div",{key:e,class:"list-group-item d-flex justify-content-between"},[Object(c["i"])("div",null,Object(c["z"])(t.name),1),Object(c["i"])("div",g,[Object(c["i"])(i,{amt:t.price},null,8,["amt"])])])})),128))])):Object(c["g"])("",!0)]})),_:1})])])])):Object(c["g"])("",!0)]),Object(c["i"])("section",y,[Object(c["i"])("label",x,"Max Price ($"+Object(c["z"])(t.max)+")",1),Object(c["i"])("div",w," results: "+Object(c["z"])(o.filteredProducts.length),1),Object(c["E"])(Object(c["i"])("input",{"onUpdate:modelValue":e[2]||(e[2]=function(e){return t.max=e}),type:"range",class:"form-range",min:"0",max:"130"},null,512),[[c["B"],t.max,void 0,{number:!0}]]),o.cartTotal>100?(Object(c["r"])(),Object(c["f"])(s,{key:0,type:"danger",close:"true"})):Object(c["g"])("",!0),Object(c["i"])(c["c"],{name:"products",appear:""},{default:Object(c["D"])((function(){return[(Object(c["r"])(!0),Object(c["f"])(c["a"],null,Object(c["v"])(o.filteredProducts,(function(t){return Object(c["r"])(),Object(c["f"])("div",{key:t.id,id:"item-list",class:"row align-items-center"},[Object(c["i"])(u,{item:t,onAddToCart:o.addToCart},null,8,["item","onAddToCart"])])})),128))]})),_:1})])],64)}r("d3b7"),r("4de4"),r("13d5"),r("a9e3");function k(t,e,r,n,a,o){return Object(c["z"])(o.dollar(r.amt))}r("b680"),r("c35a");var P={props:["amt"],methods:{dollar:function(t){return"$"+Number.parseFloat(t).toFixed(2)}}};P.render=k;var T=P,_=Object(c["h"])("Congrats on getting some items in your cart.");function z(t,e,r,n,a,o){return Object(c["r"])(),Object(c["f"])("div",{class:[[r.type?"alert-"+r.type:"alert-secondary",r.close?"alert-dismissible":""],"alert"],role:"alert"},[Object(c["w"])(t.$slots,"default",{},(function(){return[_]})),r.close?(Object(c["r"])(),Object(c["f"])("button",{key:0,onClick:e[1]||(e[1]=function(){return o.closeButton&&o.closeButton.apply(o,arguments)}),type:"button",class:"btn-close","aria-label":"Close"})):Object(c["g"])("",!0)],2)}var D={props:["type","close"],methods:{closeButton:function(){event.target.parentNode.remove()}}};D.render=z;var B=D,M=(r("a4d3"),r("e01a"),{class:"col-2 m-auto"}),S={class:"col-sm-4"},A={class:"col"},$={class:"text-primary"},H={class:"mb-0"},N={class:"h5 float-right"},F=Object(c["i"])("span",{class:"label"},null,-1);function J(t,e,r,n,a,o){var i=Object(c["x"])("curr");return Object(c["r"])(),Object(c["f"])(c["a"],null,[Object(c["i"])("div",M,[Object(c["i"])("button",{onClick:e[1]||(e[1]=function(e){return t.$emit("add-to-cart",r.item)}),class:"btn btn-success"}," + ")]),Object(c["i"])("div",S,[Object(c["i"])("img",{class:"img-fluid d-block",src:r.item.image,alt:r.item.name},null,8,["src","alt"])]),Object(c["i"])("div",A,[Object(c["i"])("h3",$,Object(c["z"])(r.item.name),1),Object(c["i"])("p",H,Object(c["z"])(r.item.description),1),Object(c["i"])("div",N,[F,Object(c["i"])(i,{amt:r.item.price},null,8,["amt"])])])],64)}var E={props:["item"],emits:["addToCart"]};E.render=J;var U=E,V={name:"Home",data:function(){return{max:50,cart:[],displayCart:!1,products:[]}},components:{Curr:T,CustomAlert:B,Product:U},created:function(){var t=this;fetch("https://hplussport.com/api/products/order/price").then((function(t){return t.json()})).then((function(e){t.products=e}))},computed:{filteredProducts:function(){var t=this;return this.products.filter((function(e){return e.price<t.max}))},cartTotal:function(){return this.cart.reduce((function(t,e){return Number(e.price)+t}),0)}},methods:{addToCart:function(t){this.cart.push(t),this.cartTotal>=100&&(this.salesBtn="btn-danger")}}};V.render=C;var q=V,G=[{path:"/",name:"Home",component:q}],I=Object(d["a"])({history:Object(d["b"])("/"),routes:G}),K=I,L=r("5502"),Q=Object(L["a"])({state:{},mutations:{},actions:{},modules:{}}),R=r("ecee"),W=r("ad3d"),X=r("c074");R["c"].add(X["a"]),Object(c["e"])(b).use(Q).use(K).component("fa",W["a"]).mount("#app")}});
//# sourceMappingURL=app.073b1e0c.js.map