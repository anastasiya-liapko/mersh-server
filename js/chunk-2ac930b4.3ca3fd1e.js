(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2ac930b4"],{"3c3c":function(t,a,e){"use strict";var i=e("aae2"),n=e.n(i);n.a},aae2:function(t,a,e){},f820:function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"privacy about d-flex flex-column"},[e("div",{staticClass:"container container-main d-flex flex-grow-1"},[e("div",{staticClass:"container-inner"},[e("h2",{staticClass:"title privacy__title text-center"},[t._v(t._s(t.info.title))]),e("div",{staticClass:"about__img-wrapper about__img-wrapper_1 d-flex"},[e("img",{attrs:{src:t.mainImage,alt:""}})]),e("div",{staticClass:"text privacy__text",domProps:{innerHTML:t._s(t.info.txt)}}),e("div",{staticClass:"about__img-wrapper about__img-wrapper_2 d-flex flex-wrap align-items-center justify-content-between"},t._l(t.images,function(t,a){return e("img",{key:a,attrs:{src:t.img,alt:""}})}),0)])])])},n=[],c=e("bc3a"),s=e.n(c),o=e("9c9e"),r={name:"about",data:function(){return{info:"",images:[],mainImage:"",domen:"http://localhost:8888"}},created:function(){this.fetch()},beforeDestroy:function(){this.scroll(0)},methods:{fetch:function(){var t=this;s.a.get(t.domen+"/api/info/about").then(function(a){t.info=a.data.info,t.images=a.data.images,t.mainImage=a.data.main_image.img}).catch(function(t){return console.log(t)})}},mixins:[o["c"]]},l=r,u=(e("3c3c"),e("2877")),f=Object(u["a"])(l,i,n,!1,null,null,null);a["default"]=f.exports}}]);
//# sourceMappingURL=chunk-2ac930b4.3ca3fd1e.js.map