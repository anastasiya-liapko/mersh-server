(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5ed6a89a"],{"42e4":function(o,t,e){"use strict";var i=e("fe20"),s=e.n(i);s.a},a907:function(o,t,e){"use strict";e.r(t);var i=function(){var o=this,t=o.$createElement,e=o._self._c||t;return e("div",{staticClass:"lookbook d-flex flex-column"},[e("div",{staticClass:"container container-main d-flex flex-grow-1"},[e("div",{staticClass:"container-inner"},[e("div",{staticClass:"lookbook__header",style:"background-image: url("+o.main_image+")"},[e("p",{staticClass:"lookbook__name text-center"},[o._v(o._s(o.info.title))]),e("h2",{staticClass:"title lookbook__title text-center"},[o._v("Современные ювелирные украшения")])]),e("div",{staticClass:"lookbook__content d-flex flex-column flex-sm-row"},[e("div",{staticClass:"lookbook__descr"},[e("div",{staticClass:"text privacy__text lookbook__text",domProps:{innerHTML:o._s(o.info.txt)}})]),""!==o.images?e("div",{staticClass:"lookbook__slider"},[e("app-slick",{ref:"slick",attrs:{options:o.slickOptions}},o._l(o.images,function(o,t){return e("div",{key:"image"+t},[e("a",[e("img",{attrs:{src:o.img,alt:""}})])])}),0)],1):o._e()])])])])},s=[],n=e("bc3a"),a=e.n(n),l=e("7ecd"),c=e("9c9e"),r={name:"lookbook",data:function(){return{slickOptions:{slidesToShow:1,dots:!0},info:"",main_image:"",images:"",domen:"http://localhost:8888"}},created:function(){this.fetch()},beforeDestroy:function(){this.scroll(0)},methods:{fetch:function(){var o=this;a.a.get(o.domen+"/api/info/lookbook").then(function(t){console.log(t),o.info=t.data.info,o.main_image=t.data.main_image.img,o.images=t.data.images,console.log(o.$refs.slick)}).catch(function(o){return console.log(o)})}},components:{"app-slick":l["a"]},mixins:[c["c"]]},f=r,d=(e("42e4"),e("2877")),k=Object(d["a"])(f,i,s,!1,null,null,null);t["default"]=k.exports},fe20:function(o,t,e){}}]);
//# sourceMappingURL=chunk-5ed6a89a.5d815c08.js.map