(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-32703590"],{"9c01":function(t,a,c){"use strict";var n=c("d1d7"),s=c.n(n);s.a},c93c:function(t,a,c){"use strict";c.r(a);var n=function(){var t=this,a=t.$createElement,c=t._self._c||a;return c("div",{staticClass:"privacy contacts d-flex flex-column"},[c("div",{staticClass:"container container-main d-flex flex-grow-1"},[c("div",{staticClass:"container-inner"},[c("h2",{staticClass:"title privacy__title text-center"},[t._v(t._s(t.contacts.title))]),c("div",{staticClass:"text privacy__text",domProps:{innerHTML:t._s(t.contacts.txt)}}),c("div",{staticClass:"contacts__data d-flex flex-column flex-sm-row align-items-sm-center justify-content-start"},[""!==t.contacts.address?c("div",{staticClass:"contacts__data-item contacts__data-item_type_address d-flex align-items-center justify-content-start"},[c("span",{staticClass:"contacts__data-icon contacts__data-icon_type_address icon icon-map d-flex align-items-center justify-content-center"}),c("span",{staticClass:"contacts__data-text"},[t._v(t._s(t.contacts.address))])]):t._e(),""!==t.contacts.phone?c("a",{staticClass:"contacts__data-item contacts__data-item_type_phone d-flex align-items-center justify-content-start",attrs:{href:"tel:"+t.phoneCall}},[c("span",{staticClass:"contacts__data-icon contacts__data-icon_type_phone icon icon-telephone d-flex align-items-center justify-content-center"}),c("span",{staticClass:"contacts__data-text"},[t._v(t._s(t.contacts.phone))])]):t._e(),""!==t.contacts.email?c("a",{staticClass:"contacts__data-item contacts__data-item_type_mail d-flex align-items-center justify-content-start",attrs:{href:"mailto:"+t.contacts.email}},[c("span",{staticClass:"contacts__data-icon contacts__data-icon_type_mail icon icon-mail d-flex align-items-center justify-content-center"}),c("span",{staticClass:"contacts__data-text"},[t._v(t._s(t.contacts.email))])]):t._e()]),""!==t.contacts.map_img?c("div",{staticClass:"contacts__map"},[c("img",{attrs:{src:t.contacts.map_img,alt:""}})]):t._e()])])])},s=[],e=(c("28a5"),c("bc3a")),i=c.n(e),o=c("9c9e"),l={name:"contacts",data:function(){return{contacts:"",domen:"http://mersh.alef.im"}},computed:{phoneCall:function(){if(this.contacts.phone)return this.contacts.phone.split(" ").join("")}},created:function(){this.fetch()},beforeDestroy:function(){this.scroll(0)},methods:{fetch:function(){var t=this;i.a.get(t.domen+"/api/info/contacts").then(function(a){t.contacts=a.data}).catch(function(t){return console.log(t)})}},mixins:[o["c"]]},_=l,r=(c("9c01"),c("2877")),d=Object(r["a"])(_,n,s,!1,null,null,null);a["default"]=d.exports},d1d7:function(t,a,c){}}]);
//# sourceMappingURL=chunk-32703590.28c7b585.js.map