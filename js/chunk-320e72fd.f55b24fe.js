(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-320e72fd"],{"112a":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"privacy paper d-flex flex-column"},[n("div",{staticClass:"container container-main d-flex flex-grow-1"},[n("div",{staticClass:"container-inner d-flex flex-column flex-sm-row"},[n("ul",{staticClass:"paper__nav d-flex flex-column justify-content-center"},t._l(t.papers,function(e){return n("li",{key:e.id,staticClass:"paper__nav-item"},[n("p",{staticClass:"paper__nav-link d-block mb-0",class:{active:e.id===t.shownPaper.id},on:{click:function(n){return t.showPaper(e)}}},[t._v(t._s(e.title))])])}),0),n("div",{staticClass:"paper__content"},[n("h2",{staticClass:"title privacy__title text-left"},[t._v(t._s(t.shownPaper.title))]),n("p",{staticClass:"subtitle privacy__subtitle"},[t._v(t._s(t.shownPaper.subtitle))]),n("p",{staticClass:"text privacy__text"},[t._v(t._s(t.shownPaper.text))])])])])])},c=[],s=n("cebc"),i=n("bc3a"),l=n.n(i),o=n("2f62"),r=n("9c9e"),p={name:"paper",data:function(){return{articles:"",article:"",shownPaper:"",domen:"http://localhost:8888"}},computed:Object(s["a"])({},Object(o["c"])([])),created:function(){this.fetch()},beforeDestroy:function(){this.scroll(0)},methods:{showPaper:function(t){this.shownPaper=t},fetch:function(){var t=this;l.a.get(t.domen+"/api/info/articles").then(function(e){console.log(e),t.articles=e.data}).catch(function(t){return console.log(t)}),l.a.get(t.domen+"/api/info/article").then(function(e){console.log(e),t.article=e.data}).catch(function(t){return console.log(t)})}},mixins:[r["c"]]},u=p,f=(n("1e35"),n("2877")),d=Object(f["a"])(u,a,c,!1,null,null,null);e["default"]=d.exports},"1e35":function(t,e,n){"use strict";var a=n("73da"),c=n.n(a);c.a},"73da":function(t,e,n){}}]);
//# sourceMappingURL=chunk-320e72fd.f55b24fe.js.map