(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-07b9dad5"],{"28df":function(t,e,s){"use strict";var i=s("b0db"),o=s.n(i);o.a},"2bf5":function(t,e,s){"use strict";var i=s("74bd"),o=s.n(i);o.a},"42de":function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"select",class:{isOpened:t.computedShow}},[void 0!==t.selected&&""!==t.selected?s("li",{staticClass:"select__toggle",attrs:{id:t.id},on:{click:function(e){return t.toggleMenu()}}},[s("span",{staticClass:"select__text"},[t._v(t._s(t.computedOption))]),s("span",{staticClass:"select__caret icon-arrow-order",class:{open:t.computedShow}})]):t._e(),void 0===t.selected||""===t.selected?s("li",{staticClass:"select__toggle select__toggle_type_placeholder",attrs:{id:t.id},on:{click:function(e){return t.toggleMenu()}}},[s("span",{staticClass:"select__text"},[t._v(t._s(t.placeholder))]),s("span",{staticClass:"select__caret icon-arrow-order",class:{open:t.computedShow}})]):t._e(),s("transition",{attrs:{name:"slide-bottom",appear:""}},[s("ul",{directives:[{name:"show",rawName:"v-show",value:t.computedShow,expression:"computedShow"}],staticClass:"select__menu",class:{opened:t.computedShow}},[s("li",{staticClass:"select__menu-item"},[s("a",{staticClass:"select__menu-link",attrs:{href:"javascript:void(0)"},on:{click:function(e){return t.updateOption(t.name,"")}}})]),t._l(t.options,function(e){return s("li",{key:e.id,staticClass:"select__menu-item"},[s("a",{staticClass:"select__menu-link",class:{isSelected:e.value===t.selectedOption},attrs:{href:"javascript:void(0)"},on:{click:function(s){return t.updateOption(t.name,e)}}},[s("span",{staticClass:"select__text"},[t._v(t._s(e.value))])])])})],2)])],1)},o=[],c=(s("7f7f"),s("cebc")),a=s("9c9e"),n=s("2f62"),r={data:function(){return{showMenu:!1,selectorName:"",selectedOption:""}},props:{show:[Boolean],id:[String],name:[String],options:{type:[Array,Object]},selected:[String],placeholder:[String]},computed:{computedOption:function(){return this.selectedOption=this.selected},computedShow:function(){return this.showMenu=this.show}},methods:Object(c["a"])({},Object(n["b"])(["toggleSelect","hideSelect"]),{updateOption:function(t,e){this.selectorName=t,this.selectedOption=e,this.showMenu=!1,this.$emit("updateOption",[this.selectorName,this.selectedOption])},toggleMenu:function(){var t={name:this.name,show:this.computedShow};this.toggleSelect(t)},hide:function(t){var e=this;(null===t.target.closest(".select")||t.target.closest(".select__menu"))&&e.hideSelect(e.name)}}),mixins:[a["a"]]},l=r,d=(s("28df"),s("2877")),u=Object(d["a"])(l,i,o,!1,null,null,null);e["a"]=u.exports},5763:function(t,e,s){},"74bd":function(t,e,s){},a36f:function(t,e,s){"use strict";var i=s("5763"),o=s.n(i);o.a},b0db:function(t,e,s){},d2f1:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"page-product d-flex flex-column"},[s("div",{staticClass:"container container-main d-flex flex-grow-1"},[s("div",{staticClass:"container-inner"},[s("h2",{staticClass:"title page-product__title text-center"},[t._v(t._s(t.product.info.name))]),s("router-link",{staticClass:"page-product__category d-block text-center",attrs:{to:{name:"category",params:{name:t.product.info.category_name.split(" ").join("-").toLowerCase()}},tag:"a"}},[t._v("\n        "+t._s(t.product.info.category_name)+"\n      ")]),s("div",{staticClass:"page-product__slider"},[s("app-slick",{ref:"slick",staticClass:"product-slider",attrs:{options:t.slickOptions},on:{beforeChange:t.handleBeforeChange,init:t.handleInit},nativeOn:{click:function(e){return t.showCurrentSlide(e)}}},t._l(t.product.images,function(e){return s("div",{key:e.id,staticClass:"position-relative"},[s("div",{attrs:{"data-toggle":"modal","data-target":"#js-preview"}},[s("a",[1===e.is_video?s("video",{attrs:{muted:"muted",loop:"loop",preload:"auto",width:"100%"},domProps:{muted:!0}},[s("source",{attrs:{src:e.content,type:'video/mp4; codecs="avc1.42E01E, mp4a.40.2"'}}),t._v("\n                Тег video не поддерживается вашим браузером.\n              ")]):t._e(),0===e.is_video?s("img",{attrs:{src:e.content,alt:""}}):t._e()])]),1===e.is_video&&t.showMute?s("i",{staticClass:"product-slider__sound fas fa-volume-mute d-flex align-items-center justify-content-start",on:{click:function(e){t.showMute=!t.showMute}}}):t._e(),0!==e.is_video||t.showMute?t._e():s("i",{staticClass:"product-slider__sound fas fa-volume-up d-flex align-items-center justify-content-start",on:{click:function(e){t.showMute=!t.showMute}}})])}),0)],1),s("div",{staticClass:"d-flex flex-column flex-sm-row justify-content-between"},[s("div",{staticClass:"page-product__descr order-2 order-sm-1"},[s("div",{staticClass:"text privacy__text page-product__text",domProps:{innerHTML:t._s(t.product.info.txt)}})]),s("form",{staticClass:"page-product__form order-1 order-sm-2 d-flex flex-column align-items-center"},[s("h2",{staticClass:"title page-product__form-title text-right w-100"},[t._v(t._s(t.productPrice)+" P.")]),t._l(t.product.attributes,function(e,i){return s("div",{key:i,staticClass:"page-product__select-wrapper select-wrapper d-flex flex-wrap align-items-center justify-content-between w-100",class:{invalid:""===e.selected&&e.touched}},[s("app-select",{staticClass:"page-product__select select select_type_product",attrs:{show:t.selectShow&&t.selectName===e.name,name:e.name,placeholder:e.name,options:e.values,selected:e.selected},on:{updateOption:t.select}}),s("transition",{attrs:{name:"fade"}},[""===e.selected&&e.touched?s("p",{staticClass:"page-product__error-text page-product__error-text_type_select"},[t._v("\n                Это обязательное поле\n              ")]):t._e()])],1)}),s("button",{staticClass:"page-product__submit button button_form button_form-page button_submit",attrs:{"data-toggle":!t.$v.$invalid&&0===t.product.attributes.length||!t.validForm?"modal":"","data-target":!t.$v.$invalid&&0===t.product.attributes.length||!t.validForm?"#js-success":""},on:{click:function(e){return e.preventDefault(),t.submit(e)}}},[s("span",{staticClass:"button_submit-text"},[t._v("В корзину")])])],2)])],1)]),s("app-preview",{attrs:{type:"modal",product:t.product,options:t.options}})],1)},o=[],c=(s("7f7f"),s("ac6a"),s("cebc")),a=s("bc3a"),n=s.n(a),r=s("2f62"),l=s("b5ae"),d=s("42de"),u=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"popup preview modal fade",attrs:{id:t.id,tabindex:"-1",role:"dialog","aria-hidden":"true"}},[s("div",{staticClass:"modal-dialog modal-dialog-centered",attrs:{role:"document"}},[s("div",{staticClass:"modal-content"},[t._m(0),s("app-slick",{ref:"slick",staticClass:"product-slider",attrs:{options:t.options},on:{beforeChange:t.handleBeforeChange}},t._l(t.product.images,function(e){return s("div",{key:e.id,staticClass:"position-relative"},[s("div",[s("a",[1===e.is_video?s("video",{attrs:{muted:"muted",loop:"loop",preload:"auto",width:"100%",autoplay:"autoplay"},domProps:{muted:!0}},[s("source",{attrs:{src:e.content,type:'video/mp4; codecs="avc1.42E01E, mp4a.40.2"'}}),t._v("\n              Тег video не поддерживается вашим браузером.\n            ")]):t._e(),0===e.is_video?s("img",{attrs:{src:e.content,alt:""}}):t._e()])]),1===e.is_video&&t.showMute?s("i",{staticClass:"product-slider__sound fas fa-volume-mute d-flex align-items-center justify-content-start",on:{click:function(e){t.showMute=!t.showMute}}}):t._e(),0!==e.is_video||t.showMute?t._e():s("i",{staticClass:"product-slider__sound fas fa-volume-up d-flex align-items-center justify-content-start",on:{click:function(e){t.showMute=!t.showMute}}})])}),0)],1)])])},p=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("button",{staticClass:"close d-flex align-items-center justify-content-center",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[s("span",{staticClass:"icon-close d-flex align-items-center justify-content-center",attrs:{"aria-hidden":"true"}})])}],h=s("7ecd"),f={data:function(){return{id:"js-preview",showMute:!0}},props:["product","options"],mounted:function(){var t=this;$("#"+this.id).on("shown.bs.modal",function(){t.$refs.slick.reSlick()})},methods:{handleBeforeChange:function(t,e,s,i){e.$slides[s].querySelector("video")&&(e.$slides[s].querySelector("video").muted=!0,e.$slides[s].querySelector("video").pause(),this.showMute=!0),e.$slides[i].querySelector("video")&&(e.$slides[i].querySelector("video").currentTime=0,e.$slides[i].querySelector("video").play())},handleInit:function(t,e){this.$refs.slick.reSlick();var s=document.querySelector(".slick-current video");s&&s.play()}},watch:{showMute:function(){var t=document.querySelector(".slick-active video");t&&(this.showMute?t.muted=!0:t.muted=!1)},options:function(){this.$refs.slick.reSlick()}},components:{"app-slick":h["a"]}},m=f,v=(s("2bf5"),s("2877")),_=Object(v["a"])(m,u,p,!1,null,null,null),g=_.exports,w=s("9c9e"),b={name:"product",data:function(){return{product:"",productPrice:"",variant:"",slickOptions:{slidesToShow:1,dots:!0,initialSlide:0},showMute:!0,currentSlide:0,domen:"http://mersh.alef.im",validForm:!1}},created:function(){this.fetch()},beforeDestroy:function(){this.scroll(0)},computed:Object(c["a"])({},Object(r["c"])(["selectName","selectShow"]),{options:function(){return{slidesToShow:1,dots:!0,initialSlide:this.currentSlide}},productId:function(){return this.$route.params.id}}),validations:{variant:{required:l["required"]}},methods:Object(c["a"])({},Object(r["b"])(["filterSelect","resetSelect","addToCart"]),{fetch:function(){var t=this;n.a.get(t.domen+"/api/product/"+t.productId).then(function(e){t.product=e.data,0===t.product.images.length&&t.product.images.push({id:1,is_video:0,content:"/img/product-placeholder.png"}),t.productPrice=e.data.info.price,t.product.attributes.forEach(function(t){t.touched=!1,t.selected=""})}).catch(function(t){return console.log(t)})},select:function(t){this.variant=""===t[1]?"":t[1].value,this.product.attributes.forEach(function(e){e.name===t[0]&&(e.touched=!0,e.selected=""===t[1]?"":t[1].value,e.selectedPrice=""===t[1]?0:parseFloat(t[1].price))}),this.calcProductPrice()},calcProductPrice:function(){var t=0;this.product.attributes.forEach(function(e){void 0!==e.selectedPrice&&(t+=e.selectedPrice)}),this.productPrice=+(parseFloat(this.product.info.price)+parseFloat(t)).toFixed(10)},submit:function(){var t=this;t.validForm=!1;var e={id:this.product.info.id,name:this.product.info.name,category:this.product.info.category_name,quantity:1,priceStart:parseFloat(this.product.info.price),price:this.productPrice,variant:this.variant,variants:this.product.attributes};this.product.attributes.forEach(function(e){e.touched=!0,""===e.selected&&(t.validForm=!0)}),(this.$v.$invalid||0!==this.product.attributes.length)&&this.validForm||this.addToCart(e)},handleBeforeChange:function(t,e,s,i){e.$slides[s].querySelector("video")&&(e.$slides[s].querySelector("video").muted=!0,e.$slides[s].querySelector("video").pause(),this.showMute=!0),e.$slides[i].querySelector("video")&&(e.$slides[i].querySelector("video").currentTime=0,e.$slides[i].querySelector("video").play())},handleInit:function(t,e){var s=document.querySelector(".slick-current video");s&&s.play()},showCurrentSlide:function(){this.currentSlide=this.$refs.slick.currentSlide()}}),watch:{showMute:function(){var t=document.querySelector(".slick-active video");t&&(this.showMute?t.muted=!0:t.muted=!1)}},components:{"app-select":d["a"],"app-preview":g,"app-slick":h["a"]},mixins:[w["c"]]},C=b,y=(s("a36f"),Object(v["a"])(C,i,o,!1,null,null,null));e["default"]=y.exports}}]);
//# sourceMappingURL=chunk-07b9dad5.848906ee.js.map