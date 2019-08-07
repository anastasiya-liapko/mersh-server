(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f1550a4e"],{2624:function(e,t,s){
/*!
 * pretty-checkbox-vue v1.1.9
 * (c) 2017-2018 Hamed Ehtesham
 * Released under the MIT License.
 */
!function(t,s){e.exports=s()}("undefined"!=typeof self&&self,function(){return function(e){var t={};function s(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,s),a.l=!0,a.exports}return s.m=e,s.c=t,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s(s.s=1)}([function(e,t){e.exports=function(e,t,s,r,a,i){var n,o=e=e||{},l=typeof e.default;"object"!==l&&"function"!==l||(n=e,o=e.default);var c,d="function"==typeof o?o.options:o;if(t&&(d.render=t.render,d.staticRenderFns=t.staticRenderFns,d._compiled=!0),s&&(d.functional=!0),a&&(d._scopeId=a),i?(c=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(i)},d._ssrRegister=c):r&&(c=r),c){var u=d.functional,h=u?d.render:d.beforeCreate;u?(d._injectStyles=c,d.render=function(e,t){return c.call(t),h(e,t)}):d.beforeCreate=h?[].concat(h,c):[c]}return{esModule:n,exports:o,options:d}}},function(e,t,s){var r=s(0)(s(2),null,!1,null,null,null);r.options.__file="src/PrettyCheckbox.vue",e.exports=r.exports},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=s(3),a={name:"pretty-checkbox",input_type:"checkbox",model:r.model,props:r.props,data:r.data,computed:r.computed,watch:r.watch,mounted:r.mounted,methods:r.methods,render:r.render};t.default=a},function(e,t,s){var r=s(0)(s(4),s(5),!1,null,null,null);r.options.__file="src/PrettyInput.vue",e.exports=r.exports},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"pretty-input",model:{prop:"modelValue",event:"change"},props:{type:String,name:String,value:{},modelValue:{},trueValue:{},falseValue:{},checked:{},disabled:{},required:{},indeterminate:{},color:String,offColor:String,hoverColor:String,indeterminateColor:String,toggle:{},hover:{},focus:{}},data:function(){return{m_checked:void 0,default_mode:!1}},computed:{_type:function(){return this.$options.input_type?this.$options.input_type:this.type?this.type:"checkbox"},shouldBeChecked:function(){return void 0!==this.modelValue?"radio"===this._type?this.modelValue===this.value:this.modelValue instanceof Array?this.modelValue.includes(this.value):this._trueValue?this.modelValue===this.trueValue:"string"==typeof this.modelValue||!!this.modelValue:void 0===this.m_checked?this.m_checked="string"==typeof this.checked||!!this.checked:this.m_checked},_disabled:function(){return"string"==typeof this.disabled||!!this.disabled},_required:function(){return"string"==typeof this.required||!!this.required},_indeterminate:function(){return"string"==typeof this.indeterminate||!!this.indeterminate},_trueValue:function(){return"string"==typeof this.trueValue?this.trueValue:!!this.trueValue},_falseValue:function(){return"string"==typeof this.falseValue?this.falseValue:!!this.falseValue},_toggle:function(){return"string"==typeof this.toggle||!!this.toggle},_hover:function(){return"string"==typeof this.hover||!!this.hover},_focus:function(){return"string"==typeof this.focus||!!this.focus},classes:function(){return{pretty:!0,"p-default":this.default_mode,"p-round":"radio"===this._type&&this.default_mode,"p-toggle":this._toggle,"p-has-hover":this._hover,"p-has-focus":this._focus,"p-has-indeterminate":this._indeterminate}},onClasses:function(){var e={state:!0,"p-on":this._toggle};return this.color&&(e["p-"+this.color]=!0),e},offClasses:function(){var e={state:!0,"p-off":!0};return this.offColor&&(e["p-"+this.offColor]=!0),e},hoverClasses:function(){var e={state:!0,"p-is-hover":!0};return this.hoverColor&&(e["p-"+this.hoverColor]=!0),e},indeterminateClasses:function(){var e={state:!0,"p-is-indeterminate":!0};return this.indeterminateColor&&(e["p-"+this.indeterminateColor]=!0),e}},watch:{checked:function(e){this.m_checked=e},indeterminate:function(e){this.$refs.input.indeterminate=e}},mounted:function(){this.$vnode.data&&!this.$vnode.data.staticClass&&(this.default_mode=!0),this._indeterminate&&(this.$refs.input.indeterminate=!0),this.$el.setAttribute("p-"+this._type,"")},methods:{updateInput:function(e){if("radio"!==this._type){this.$emit("update:indeterminate",!1);var t=e.target.checked;if(this.m_checked=t,this.modelValue instanceof Array){var s=[].concat(function(e){if(Array.isArray(e)){for(var t=0,s=Array(e.length);t<e.length;t++)s[t]=e[t];return s}return Array.from(e)}(this.modelValue));t?s.push(this.value):s.splice(s.indexOf(this.value),1),this.$emit("change",s)}else this.$emit("change",t?!this._trueValue||this.trueValue:!!this._falseValue&&this.falseValue)}else this.$emit("change",this.value)}}}},function(e,t,s){var r=function(){var e=this.$createElement,t=this._self._c||e;return t("div",{class:this.classes},[t("input",{ref:"input",attrs:{type:this._type,name:this.name,disabled:this._disabled,required:this._required},domProps:{checked:this.shouldBeChecked,value:this.value},on:{change:this.updateInput}}),this._v(" "),t("div",{class:this.onClasses},[this._t("extra"),this._v(" "),t("label",[this._t("default")],2)],2),this._v(" "),this._toggle?t("div",{class:this.offClasses},[this._t("off-extra"),this._v(" "),this._t("off-label")],2):this._e(),this._v(" "),this._hover?t("div",{class:this.hoverClasses},[this._t("hover-extra"),this._v(" "),this._t("hover-label")],2):this._e(),this._v(" "),this._indeterminate?t("div",{class:this.indeterminateClasses},[this._t("indeterminate-extra"),this._v(" "),this._t("indeterminate-label")],2):this._e()])};r._withStripped=!0,e.exports={render:r,staticRenderFns:[]}}])})},"28df":function(e,t,s){"use strict";var r=s("b0db"),a=s.n(r);a.a},"42de":function(e,t,s){"use strict";var r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"select",class:{isOpened:e.computedShow}},[void 0!==e.selected&&""!==e.selected?s("li",{staticClass:"select__toggle",attrs:{id:e.id},on:{click:function(t){return e.toggleMenu()}}},[e._v("\n    "+e._s(e.computedOption)+"\n    "),s("span",{staticClass:"select__caret icon-arrow-order",class:{open:e.computedShow}})]):e._e(),void 0===e.selected||""===e.selected?s("li",{staticClass:"select__toggle select__toggle_type_placeholder",attrs:{id:e.id},on:{click:function(t){return e.toggleMenu()}}},[e._v("\n    "+e._s(e.placeholder)+"\n    "),s("span",{staticClass:"select__caret icon-arrow-order",class:{open:e.computedShow}})]):e._e(),s("transition",{attrs:{name:"slide-bottom",appear:""}},[s("ul",{directives:[{name:"show",rawName:"v-show",value:e.computedShow,expression:"computedShow"}],staticClass:"select__menu",class:{opened:e.computedShow}},[s("li",{staticClass:"select__menu-item"},[s("a",{staticClass:"select__menu-link",attrs:{href:"javascript:void(0)"},on:{click:function(t){return e.updateOption(e.name,"")}}})]),e._l(e.options,function(t){return s("li",{key:t.id,staticClass:"select__menu-item"},[s("a",{staticClass:"select__menu-link",class:{isSelected:t.value===e.selectedOption},attrs:{href:"javascript:void(0)"},on:{click:function(s){return e.updateOption(e.name,t)}}},[e._v("\n          "+e._s(t.value)+"\n        ")])])})],2)])],1)},a=[],i=(s("7f7f"),s("cebc")),n=s("9c9e"),o=s("2f62"),l={data:function(){return{showMenu:!1,selectorName:"",selectedOption:""}},props:{show:[Boolean],id:[String],name:[String],options:{type:[Array,Object]},selected:[String],placeholder:[String]},computed:{computedOption:function(){return this.selectedOption=this.selected},computedShow:function(){return this.showMenu=this.show}},methods:Object(i["a"])({},Object(o["b"])(["toggleSelect","hideSelect"]),{updateOption:function(e,t){this.selectorName=e,this.selectedOption=t,this.showMenu=!1,this.$emit("updateOption",[this.selectorName,this.selectedOption])},toggleMenu:function(){var e={name:this.name,show:this.computedShow};this.toggleSelect(e)},hide:function(e){var t=this;(null===e.target.closest(".select")||e.target.closest(".select__menu"))&&t.hideSelect(t.name)}}),mixins:[n["a"]]},c=l,d=(s("28df"),s("2877")),u=Object(d["a"])(c,r,a,!1,null,null,null);t["a"]=u.exports},"72cf":function(e,t,s){"use strict";var r=s("f9fc"),a=s.n(r);a.a},8558:function(e,t,s){"use strict";s.r(t);var r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"order-register d-flex flex-column"},[s("div",{staticClass:"container container-main d-flex flex-column flex-grow-1"},[s("div",{staticClass:"container-inner flex-grow-1 d-flex flex-column align-items-center"},[s("form",{staticClass:"order-register__form d-flex flex-column align-items-center justify-content-center"},[s("h2",{staticClass:"title order-register__title"},[e._v("Оформление заказа")]),s("p",{staticClass:"order-register__number"},[e._v("Заказ №34535432")]),s("p",{staticClass:"order-register__products"},[e._v(e._s(e.productsNames))]),s("p",{staticClass:"order-register__price"},[e._v("Сумма: "+e._s(e.totalPrice)+" руб.")]),s("div",{staticClass:"order-register__fields"},[s("div",{staticClass:"order-register__field d-flex flex-wrap align-items-center justify-content-between"},[s("label",{staticClass:"order-register__label"},[e._v("Имя")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.data.name,expression:"data.name"}],staticClass:"order-register__input",class:{invalid:e.$v.data.name.$error},attrs:{type:"text",name:"name",placeholder:"Иван Петров"},domProps:{value:e.data.name},on:{blur:function(t){return e.$v.data.name.$touch()},input:function(t){t.target.composing||e.$set(e.data,"name",t.target.value)}}}),e.$v.data.name.$error?s("p",{staticClass:"order-register__error-text"},[e._v("Укажите имя")]):e._e()]),s("div",{staticClass:"order-register__field d-flex flex-wrap align-items-center justify-content-between"},[s("label",{staticClass:"order-register__label"},[e._v("Телефон")]),s("input",{directives:[{name:"mask",rawName:"v-mask",value:"+9 (999) 999-99-99",expression:"'+9 (999) 999-99-99'"},{name:"model",rawName:"v-model",value:e.data.phone,expression:"data.phone"}],staticClass:"order-register__input",class:{invalid:e.$v.data.phone.$error},attrs:{type:"text",name:"phone",placeholder:"+ 7 (ххх) ххх хх хх"},domProps:{value:e.data.phone},on:{blur:function(t){return e.$v.data.phone.$touch()},input:function(t){t.target.composing||e.$set(e.data,"phone",t.target.value)}}}),s("transition",{attrs:{name:"fade"}},[!e.$v.data.phone.required&&e.$v.data.phone.$dirty?s("p",{staticClass:"order-register__error-text"},[e._v("\n              Укажите телефон или email\n            ")]):e._e(),e.$v.data.phone.minLength?e._e():s("p",{staticClass:"order-register__error-text"},[e._v("\n              Введите телефон в формате + 7 (ххх) ххх хх хх\n            ")])])],1),s("div",{staticClass:"order-register__field d-flex flex-wrap align-items-center justify-content-between"},[s("label",{staticClass:"order-register__label"},[e._v("Email")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.data.email,expression:"data.email"}],staticClass:"order-register__input",class:{invalid:e.$v.data.email.$error},attrs:{type:"text",name:"email",placeholder:"mersh@site.com"},domProps:{value:e.data.email},on:{blur:function(t){return e.$v.data.email.$touch()},input:function(t){t.target.composing||e.$set(e.data,"email",t.target.value)}}}),s("transition",{attrs:{name:"fade"}},[e.$v.data.email.email?e._e():s("p",{staticClass:"order-register__error-text"},[e._v("\n              Введите email в формате mersh@site.com\n            ")])])],1),s("div",{staticClass:"order-register__select-wrapper select-wrapper d-flex flex-wrap align-items-center justify-content-between",class:{invalid:!e.$v.data.delivery.required&&e.$v.data.delivery.$invalid&&e.touchDelivery}},[s("label",{staticClass:"order-register__label"},[e._v("Способ доставки")]),s("app-select",{staticClass:"order-register__select select select_type_register",attrs:{id:"js-selectDelivery",show:e.selectShow&&"delivery"===e.selectName,name:"delivery",placeholder:"Курьер",options:e.deliveryTypes,selected:e.data.delivery},on:{updateOption:e.select}}),s("transition",{attrs:{name:"fade"}},[!e.$v.data.delivery.required&&e.$v.data.delivery.$invalid&&e.touchDelivery?s("p",{staticClass:"order-register__error-text order-register__error-text_type_select"},[e._v("\n              Укажите способ доставки\n            ")]):e._e()])],1),s("div",{staticClass:"order-register__field d-flex flex-wrap align-items-center justify-content-between"},[s("label",{staticClass:"order-register__label"},[e._v("Адрес")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.data.address,expression:"data.address"}],staticClass:"order-register__input",class:{invalid:e.$v.data.address.$error},attrs:{type:"text",name:"address",placeholder:"Улица"},domProps:{value:e.data.address},on:{blur:function(t){return e.$v.data.address.$touch()},input:function(t){t.target.composing||e.$set(e.data,"address",t.target.value)}}}),e.$v.data.address.$error?s("p",{staticClass:"order-register__error-text"},[e._v("Укажите адрес")]):e._e()]),s("div",{staticClass:"order-register__select-wrapper select-wrapper d-flex flex-wrap align-items-center justify-content-between",class:{invalid:!e.$v.data.payment.required&&e.$v.data.payment.$invalid&&e.touchPayment}},[s("label",{staticClass:"order-register__label"},[e._v("Способ оплаты")]),s("app-select",{staticClass:"order-register__select select select_type_register",attrs:{id:"js-selectPayment",show:e.selectShow&&"payment"===e.selectName,name:"payment",placeholder:"Наличные",options:e.selectPayment,selected:e.data.payment},on:{updateOption:e.select}}),s("transition",{attrs:{name:"fade"}},[!e.$v.data.payment.required&&e.$v.data.payment.$invalid&&e.touchPayment?s("p",{staticClass:"order-register__error-text order-register__error-text_type_select"},[e._v("\n              Укажите cпособ оплаты\n            ")]):e._e()])],1),s("div",{staticClass:"order-register__field d-flex flex-wrap align-items-center justify-content-between"},[s("label",{staticClass:"order-register__label"},[e._v("Сообщение")]),s("textarea",{directives:[{name:"model",rawName:"v-model",value:e.data.message,expression:"data.message"}],staticClass:"order-register__textarea",attrs:{type:"text",name:"message",placeholder:"Текст"},domProps:{value:e.data.message},on:{input:function(t){t.target.composing||e.$set(e.data,"message",t.target.value)}}})]),s("p-check",{staticClass:"order-register__checkbox p-icon",model:{value:e.checkboxPrivacy,callback:function(t){e.checkboxPrivacy=t},expression:"checkboxPrivacy"}},[s("i",{staticClass:"icon fas fa-check d-flex align-items-center justify-content-center",attrs:{slot:"extra"},slot:"extra"}),s("p",{staticClass:"order-register__checkbox-descr d-flex flex-wrap mb-0"},[e._v("\n          Я согласен с \n          "),s("router-link",{staticClass:"order-register__link",attrs:{tag:"a",to:{name:"privacy"}}},[e._v("\n            политикой конфиденциальности\n          ")]),e._v("\n          и даю разрешение на обработку персональных данных\n          ")],1)])],1),s("vue-recaptcha",{ref:"recaptcha",staticClass:"recaptcha",attrs:{sitekey:e.sitekey},on:{verify:e.register,expired:e.onCaptchaExpired}}),s("div",{staticClass:"order-register__buttons d-flex flex-column flex-sm-row align-items-center justify-content-between"},[s("router-link",{staticClass:"order-register__cancel button button_form button_form-page order-2 order-sm-1",attrs:{to:{name:"cart"},tag:"a"}},[e._v("\n              Отмена\n          ")]),s("button",{staticClass:"order-register__submit button button_form button_form-page button_submit order-1 order-sm-2 d-flex align-items-center justify-content-center",attrs:{"data-success":"Отправлено!","data-error":"Ошибка!",disabled:e.$v.$invalid||!e.recaptcha||!e.checkboxPrivacy},on:{click:function(t){return t.preventDefault(),e.submit(t)}}},[s("span",[e._v(e._s(e.message))])])],1)],1)])])])},a=[],i=(s("456d"),s("7f7f"),s("ac6a"),s("cebc")),n=s("e096"),o=s("b5ae"),l=s("8865"),c=s.n(l),d=s("bc3a"),u=s.n(d),h=s("2f62"),p=s("42de"),m=s("2624"),f=s.n(m),_=s("9c9e"),v={name:"order-register",data:function(){return{id:"js-orderRegister",data:{name:"",phone:"",email:"",delivery:"",deliveryId:"",address:"",payment:"",payment_type:"",message:"",recaptchaToken:""},message:"Отправить",sitekey:"6Lcs-KsUAAAAAEFXV5k8NK7RIlXx205jtIVU0mNa",recaptcha:!1,touchDelivery:!1,touchPayment:!1,checkboxPrivacy:!1,domen:"http://localhost:8888",deliveryTypes:[],orderNumber:""}},computed:Object(i["a"])({},Object(h["c"])(["selectPayment","selectName","selectShow","totalPrice","cartProducts","order"]),{productsNames:function(){var e="";return this.cartProducts.forEach(function(t){e+=t.name+", "}),e}}),created:function(){this.getDeliveryTypes(),this.getOrderNumber()},beforeDestroy:function(){this.scroll(0)},validations:{data:{name:{required:o["required"]},phone:{required:o["required"],minLength:Object(o["minLength"])(18)},email:{email:o["email"]},delivery:{required:o["required"]},address:{required:o["required"]},payment:{required:o["required"]}}},methods:Object(i["a"])({},Object(h["b"])(["filterSelect","resetSelect","addDelivery"]),{select:function(e){switch(e[0]){case"delivery":this.data.delivery=e[1].value,this.data.deliveryId=e[1].id,this.touchDelivery=!0,this.addDelivery(e[1]);break;case"payment":this.data.payment=e[1].value,this.data.payment_type=e[1].type,this.touchPayment=!0,this.message="Онлайн"===e[1].value?"Оплатить":"Отправить";break}},getOrderNumber:function(){var e=this;console.log("getOrderNumber"),u.a.post(e.domen+"/api/checkout/").then(function(t){console.log(t),e.orderNumber=t}).catch(function(e){return console.log(e)})},getDeliveryTypes:function(){var e=this;u.a.get(e.domen+"/api/delivery").then(function(t){console.log(t),t.data.forEach(function(t){e.deliveryTypes.push({id:t.id,value:t.name,price:t.price})})}).catch(function(e){return console.log(e)})},resetForm:function(){var e=this;Object.keys(e.data).forEach(function(t,s){e.data[t]=""}),e.$v.$reset(),this.touchDelivery=!1,this.touchPayment=!1,this.checkboxPrivacy=!1},showMessage:function(e){var t=document.querySelector(".order-register .button_submit");e?t.classList.add("success"):t.classList.add("error"),setTimeout(function(){t.classList.remove("error"),t.classList.remove("success")},1200)},register:function(e){this.recaptcha=!0,this.data.recaptchaToken=e},submit:function(){var e=this,t={name:this.data.name,phone:this.data.phone,email:this.data.email,address:this.data.address,msg:this.data.message,payment_type:this.data.payment_type,delivery_type:this.data.delivery,products:this.order};console.log(t),u.a.post(e.domen+"/api/order/?name="+e.data.name+"&phone="+e.data.phone+"&email="+e.data.email+"&address="+e.data.address+"&msg="+e.data.message+"&payment_type="+e.data.payment_type+"&delivery_type="+e.data.deliveryId+"&products="+e.order).then(function(t){console.log(t),e.showMessage(1),e.resetForm(),e.$refs.recaptcha.reset(),e.recaptcha=!1,e.$router.push({name:"order-accept"})}).catch(function(t){console.log(t),e.showMessage(0)})},onCaptchaExpired:function(){this.$refs.recaptcha.reset(),this.recaptcha=!1}}),directives:{mask:c.a},components:{"vue-recaptcha":n["a"],"app-select":p["a"],"p-check":f.a},mixins:[_["c"]]},g=v,y=(s("72cf"),s("2877")),b=Object(y["a"])(g,r,a,!1,null,null,null);t["default"]=b.exports},b0db:function(e,t,s){},f9fc:function(e,t,s){}}]);
//# sourceMappingURL=chunk-f1550a4e.b05462e3.js.map