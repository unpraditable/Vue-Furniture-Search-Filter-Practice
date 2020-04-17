(function(e){function t(t){for(var i,a,n=t[0],l=t[1],u=t[2],d=0,h=[];d<n.length;d++)a=n[d],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&h.push(s[a][0]),s[a]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(e[i]=l[i]);o&&o(t);while(h.length)h.shift()();return c.push.apply(c,u||[]),r()}function r(){for(var e,t=0;t<c.length;t++){for(var r=c[t],i=!0,n=1;n<r.length;n++){var l=r[n];0!==s[l]&&(i=!1)}i&&(c.splice(t--,1),e=a(a.s=r[0]))}return e}var i={},s={app:0},c=[];function a(t){if(i[t])return i[t].exports;var r=i[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=e,a.c=i,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)a.d(r,i,function(t){return e[t]}.bind(null,i));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/Vue-Furniture-Search-Filter-Practice/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],l=n.push.bind(n);n.push=t,n=n.slice();for(var u=0;u<n.length;u++)t(n[u]);var o=l;c.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},2395:function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var i=r("2b0e"),s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("Home")],1)},c=[],a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home"},[r("header",[r("div",{staticClass:"container"},[r("div",{staticClass:"row search-row"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.search,expression:"search"}],staticClass:"search-box",attrs:{type:"text",placeholder:"Search Furniture"},domProps:{value:e.search},on:{input:function(t){t.target.composing||(e.search=t.target.value)}}})]),r("div",{staticClass:"row filter-row"},[r("div",{staticClass:"dropdown-check-list",attrs:{tabindex:"100"}},[r("span",{staticClass:"anchor"},[e._v("Furniture Style")]),r("ul",{staticClass:"list-unstyled items"},e._l(e.furnitureStyles,(function(t){return r("li",[r("label",{staticClass:"flex-checkbox"},[r("span",{staticClass:"title"},[e._v(e._s(t))]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.checkedFurnitureStyles,expression:"checkedFurnitureStyles"}],staticClass:"checkbox",attrs:{type:"checkbox"},domProps:{value:t,checked:Array.isArray(e.checkedFurnitureStyles)?e._i(e.checkedFurnitureStyles,t)>-1:e.checkedFurnitureStyles},on:{change:function(r){var i=e.checkedFurnitureStyles,s=r.target,c=!!s.checked;if(Array.isArray(i)){var a=t,n=e._i(i,a);s.checked?n<0&&(e.checkedFurnitureStyles=i.concat([a])):n>-1&&(e.checkedFurnitureStyles=i.slice(0,n).concat(i.slice(n+1)))}else e.checkedFurnitureStyles=c}}}),r("span",{staticClass:"checkmark"})])])})),0)]),r("div",{staticClass:"dropdown-check-list",attrs:{tabindex:"100"}},[r("span",{staticClass:"anchor"},[e._v("Time Delivery")]),r("ul",{staticClass:"list-unstyled items"},e._l(e.deliveryTimes,(function(t){return r("li",[r("label",{staticClass:"flex-checkbox"},[r("span",{staticClass:"title"},[e._v(e._s(t.title))]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.checkedDeliveryTimes,expression:"checkedDeliveryTimes"}],staticClass:"checkbox",attrs:{type:"checkbox"},domProps:{value:{max:t.maxValue,min:t.minValue},checked:Array.isArray(e.checkedDeliveryTimes)?e._i(e.checkedDeliveryTimes,{max:t.maxValue,min:t.minValue})>-1:e.checkedDeliveryTimes},on:{change:function(r){var i=e.checkedDeliveryTimes,s=r.target,c=!!s.checked;if(Array.isArray(i)){var a={max:t.maxValue,min:t.minValue},n=e._i(i,a);s.checked?n<0&&(e.checkedDeliveryTimes=i.concat([a])):n>-1&&(e.checkedDeliveryTimes=i.slice(0,n).concat(i.slice(n+1)))}else e.checkedDeliveryTimes=c}}}),r("span",{staticClass:"checkmark"})])])})),0)])])])]),r("div",{staticClass:"content"},[r("div",{staticClass:"container"},[e.filter||e.search?e._e():r("Furnitures",{attrs:{furnitures:e.furnitures}}),e.filter&&!e.search?r("Furnitures",{attrs:{furnitures:e.filteredFurnitures}}):e._e(),e.search?r("Furnitures",{attrs:{furnitures:e.searchFurniture}}):e._e()],1)])])},n=[],l=(r("a4d3"),r("e01a"),r("4de4"),r("caad"),r("c975"),r("45fc"),r("b0c0"),r("ac1f"),r("2532"),r("841c"),r("bc3a")),u=r.n(l),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",{staticClass:"row product-row list-unstyled"},e._l(e.furnitures,(function(t){return r("li",{key:t.name},[r("div",{staticClass:"product-card"},[r("div",{staticClass:"row name-row"},[r("h2",[e._v(e._s(t.name))]),r("p",{staticClass:"price"},[e._v("Rp "+e._s(t.price)+",00")])]),r("div",{staticClass:"row description-row"},[r("p",{staticClass:"description"},[e._v(e._s(t.description))])]),r("div",{staticClass:"row style-row"},[r("ul",{staticClass:"list-unstyled"},e._l(t.furniture_style,(function(t){return r("li",[e._v(e._s(t))])})),0)]),r("div",{staticClass:"row days-row"},[r("p",{staticClass:"days"},[e._v(e._s(t.delivery_time)+" Days")])])])])})),0)},d=[],h={name:"Furnitures",props:["furnitures"]},m=h,v=r("2877"),f=Object(v["a"])(m,o,d,!1,null,null,null),p=f.exports,y=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"dropdown-check-list"},[r("span",{staticClass:"anchor"},[e._v(e._s(e.title))]),r("ul",{staticClass:"list-unstyled items"},e._l(e.models,(function(t){return r("li",[r("label",{staticClass:"flex-checkbox"},[e.isDeliveryTime?e._e():r("span",{staticClass:"title"},[e._v(e._s(t))]),e.isDeliveryTime?r("span",{staticClass:"title"},[e._v(e._s(t.title))]):e._e(),e.isDeliveryTime?e._e():r("input",{directives:[{name:"model",rawName:"v-model",value:e.checked,expression:"checked"}],staticClass:"checkbox",attrs:{type:"checkbox"},domProps:{value:t,checked:Array.isArray(e.checked)?e._i(e.checked,t)>-1:e.checked},on:{change:function(r){var i=e.checked,s=r.target,c=!!s.checked;if(Array.isArray(i)){var a=t,n=e._i(i,a);s.checked?n<0&&(e.checked=i.concat([a])):n>-1&&(e.checked=i.slice(0,n).concat(i.slice(n+1)))}else e.checked=c}}}),e.isDeliveryTime?r("input",{directives:[{name:"model",rawName:"v-model",value:e.checked,expression:"checked"}],staticClass:"checkbox",attrs:{type:"checkbox"},domProps:{value:{max:t.maxValue,min:t.minValue},checked:Array.isArray(e.checked)?e._i(e.checked,{max:t.maxValue,min:t.minValue})>-1:e.checked},on:{change:function(r){var i=e.checked,s=r.target,c=!!s.checked;if(Array.isArray(i)){var a={max:t.maxValue,min:t.minValue},n=e._i(i,a);s.checked?n<0&&(e.checked=i.concat([a])):n>-1&&(e.checked=i.slice(0,n).concat(i.slice(n+1)))}else e.checked=c}}}):e._e(),r("span",{staticClass:"checkmark"})])])})),0)])},k=[],_={name:"SelectFilter",props:["title","models","isDeliveryTime","checked"]},x=_,b=Object(v["a"])(x,y,k,!1,null,null,null),C=b.exports,w="https://www.mocky.io/v2/5c9105cb330000112b649af8",g={name:"Home",components:{Furnitures:p,SelectFilter:C},data:function(){return{search:"",filter:!1,furnitures:[],filteredFurnitures:[],furnitureStyles:[],deliveryTimes:[{title:"1 Week",maxValue:7,minValue:0},{title:"2 Weeks",maxValue:14,minValue:8},{title:"1 Month",maxValue:28,minValue:15},{title:"& more",minValue:32}],checkedFurnitureStyles:[],checkedDeliveryTimes:[]}},created:function(){var e=this;u.a.get(w).then((function(t){e.furnitures=t.data.products,e.furnitureStyles=t.data.furniture_styles;for(var r=e.furnitures,i=0;i<r.length;i++)r[i].description=r[i].description.substring(0,114)+"...",r[i].price=r[i].price.toLocaleString("id-ID")}))},mounted:function(){for(var e=document.querySelectorAll(".dropdown-check-list"),t=function(t){e[t].querySelector(".anchor").onclick=function(){var r=e[t].querySelector(".items");r.classList.contains("visible")?(r.classList.remove("visible"),r.style.display="none"):(r.classList.add("visible"),r.style.display="block")}},r=0;r<e.length;r++)t(r)},computed:{searchFurniture:function(){var e=this;return this.filter?this.filteredFurnitures:this.furnitures,this.furnitures.filter((function(t){return t.name.toLowerCase().includes(e.search.toLowerCase())}))}},watch:{checkedFurnitureStyles:{handler:function(){var e=this;this.checkedFurnitureStyles.length?this.filter=!0:this.filter=!1;var t=[],r="";r=this.search?this.searchFurniture:this.furnitures;for(var i=0;i<r.length;i++)r[i].furniture_style.some((function(t){return-1!==e.checkedFurnitureStyles.indexOf(t)}))&&t.push(r[i]);this.filteredFurnitures=t}},checkedDeliveryTimes:{handler:function(){this.checkedDeliveryTimes.length?this.filter=!0:this.filter=!1;var e=[],t="";t=this.search?this.searchFurniture:this.furnitures;for(var r=0;r<t.length;r++)for(var i=0;i<this.checkedDeliveryTimes.length;i++)parseInt(t[r].delivery_time)<=this.checkedDeliveryTimes[i].max&&this.checkedDeliveryTimes[i].min<t[r].delivery_time&&e.push(t[r]);this.filteredFurnitures=e}}}},F=g,S=Object(v["a"])(F,a,n,!1,null,null,null),T=S.exports,D={components:{Home:T}},V=D,A=(r("7c55"),Object(v["a"])(V,s,c,!1,null,null,null)),O=A.exports;i["a"].config.productionTip=!1,new i["a"]({render:function(e){return e(O)}}).$mount("#app")},"7c55":function(e,t,r){"use strict";var i=r("2395"),s=r.n(i);s.a}});
//# sourceMappingURL=app.3e7b1294.js.map