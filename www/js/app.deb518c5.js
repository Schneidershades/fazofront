(function(e){function t(t){for(var r,a,s=t[0],i=t[1],c=t[2],l=0,f=[];l<s.length;l++)a=s[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);d&&d(t);while(f.length)f.shift()();return u.push.apply(u,c||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,a=1;a<n.length;a++){var s=n[a];0!==o[s]&&(r=!1)}r&&(u.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={3:0},o={3:0},u=[];function s(e){return i.p+"js/"+({}[e]||e)+"."+{0:"8fb3af52",1:"ae4b05dc",4:"579918db",5:"a86bf953",6:"47065989",7:"304883f6",8:"d9183542",9:"a881367c",10:"5924c6f0",11:"ce77f374",12:"d5f816ef",13:"59b8c017"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={1:1,4:1,5:1,6:1,7:1,8:1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{0:"31d6cfe0",1:"73fb23c7",4:"045cac15",5:"6dcacbff",6:"5af85c96",7:"1396e7ee",8:"6810e7cb",9:"31d6cfe0",10:"31d6cfe0",11:"31d6cfe0",12:"31d6cfe0",13:"31d6cfe0"}[e]+".css",o=i.p+r,u=document.getElementsByTagName("link"),s=0;s<u.length;s++){var c=u[s],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===r||l===o))return t()}var f=document.getElementsByTagName("style");for(s=0;s<f.length;s++){c=f[s],l=c.getAttribute("data-href");if(l===r||l===o)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||o,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete a[e],d.parentNode.removeChild(d),n(u)},d.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var u=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=u);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=s(e);var f=new Error;c=function(t){l.onerror=l.onload=null,clearTimeout(d);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",f.name="ChunkLoadError",f.type=r,f.request=a,n[1](f)}o[e]=void 0}};var d=setTimeout((function(){c({type:"timeout",target:l})}),12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var f=0;f<c.length;f++)t(c[f]);var d=l;u.push([0,2]),n()})({0:function(e,t,n){e.exports=n("2f39")},2946:function(e,t,n){"use strict";n.r(t);n("caad"),n("96cf");var r=n("c973"),a=n.n(r),o=(n("e260"),n("d3b7"),n("e6cf"),n("3ca3"),n("ddb0"),n("8b7d")),u=function(e){s(e);var t=[];return new Promise((function(n,r){for(var a in e){var u=e[a];for(var s in u)"cart"!=s&&"connected"!=s&&"history"!=s&&"roles"!=s&&"token"!=s&&"user"!=s&&"plate_numbers"!=s&&"products"!=s||t.push(o["a"].setItem(s,u[s]))}Promise.all(t).then((function(e){n(e)})).catch((function(e){r(e)}))}))},s=function(e){},i=n("4360"),c=n("bc3a"),l=n.n(c),f=(n("b178"),function(){var e=a()(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:l.a.defaults.baseURL="http://localhost:8000/";case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}());f().then((function(){console.log("fetched online data")}));var d=[],p=function(e){return d.includes(e)};i["a"].subscribe((function(e,t){p(e.type)&&(console.log(e.type),u(t))}))},"2f39":function(e,t,n){"use strict";n.r(t);n("ac1f"),n("5319"),n("96cf");var r=n("c973"),a=n.n(r),o=(n("5c7d"),n("7d6e"),n("e54f"),n("985d"),n("31cd"),n("2b0e")),u=n("1f91"),s=n("42d2"),i=n("b178");o["a"].use(i["e"],{config:{},lang:u["a"],iconSet:s["a"]});var c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"q-app"}},[n("router-view")],1)},l=[],f={name:"App"},d=f,p=n("2877"),h=Object(p["a"])(d,c,l,!1,null,null,null),m=h.exports,g=n("4360"),v=n("a18c"),b=function(e){return w.apply(this,arguments)};function w(){return w=a()(regeneratorRuntime.mark((function e(t){var n,r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if("function"!==typeof g["a"]){e.next=6;break}return e.next=3,Object(g["a"])({Vue:o["a"],ssrContext:t});case 3:e.t0=e.sent,e.next=7;break;case 6:e.t0=g["a"];case 7:if(n=e.t0,"function"!==typeof v["a"]){e.next=14;break}return e.next=11,Object(v["a"])({Vue:o["a"],ssrContext:t,store:n});case 11:e.t1=e.sent,e.next=15;break;case 14:e.t1=v["a"];case 15:return r=e.t1,n.$router=r,a={router:r,store:n,render:function(e){return e(m)}},i["e"].ssrUpdate({app:a,ssr:t}),e.abrupt("return",{app:a,store:n,router:r});case 20:case"end":return e.stop()}}),e)}))),w.apply(this,arguments)}var y=n("a925"),S={failed:"Action failed",success:"Action was successful"},k={"en-us":S};o["a"].use(y["a"]);var E=new y["a"]({locale:"en-us",fallbackLocale:"en-us",messages:k}),x=function(e){var t=e.app;t.i18n=E},O=n("bc3a"),P=n.n(O);o["a"].prototype.$axios=P.a;var T=function(){var e=a()(regeneratorRuntime.mark((function e(t){var n,r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.app,n=t.router,r=t.store,a=t.Vue,P.a.defaults.withCredentials=!0,P.a.defaults.baseURL="https://fazo.herokuapp.com/",e.prev=3,e.next=7,r.dispatch("auth/attempt",i["a"].getItem("token")).then((function(){new a({router:n,store:r,render:function(e){return e(m)}}).$mount("#q-app")}));case 7:e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](3),console.log("Welcome to parkit");case 12:case"end":return e.stop()}}),e,null,[[3,9]])})));return function(t){return e.apply(this,arguments)}}(),_=(n("4160"),n("159b"),n("448a")),C=n.n(_),R=n("2b52"),M=n("4b58");o["a"].component("Can",R["a"]),g["a"].watch((function(e,t){return t["auth/user"]}),(function(e){if(e){var t=function(){var e=a()(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();t().then((function(){console.log("AUTHENTICATED ACTIONS")}));var n=g["a"].getters["auth/user"];if(n.permissions){var r=Object(M["a"])((function(e,t){n.permissions.forEach((function(t){e.apply(void 0,C()(t))}))}));o["a"].use(R["b"],r)}}else console.log("niwnieowwone")}));var q="/";function A(){return I.apply(this,arguments)}function I(){return I=a()(regeneratorRuntime.mark((function e(){var t,n,r,a,u,s,i,c,l,f;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,b();case 2:t=e.sent,n=t.app,r=t.store,a=t.router,window.__INITIAL_STATE__&&r.replaceState(window.__INITIAL_STATE__),u=!1,s=function(e){u=!0;var t=Object(e)===e?a.resolve(e).route.fullPath:e;window.location.href=t},i=window.location.href.replace(window.location.origin,""),c=[x,void 0,T,void 0],l=0;case 12:if(!(!1===u&&l<c.length)){e.next=30;break}if("function"===typeof c[l]){e.next=15;break}return e.abrupt("continue",27);case 15:return e.prev=15,e.next=18,c[l]({app:n,router:a,store:r,Vue:o["a"],ssrContext:null,redirect:s,urlPath:i,publicPath:q});case 18:e.next=27;break;case 20:if(e.prev=20,e.t0=e["catch"](15),!e.t0||!e.t0.url){e.next=25;break}return window.location.href=e.t0.url,e.abrupt("return");case 25:return console.error("[Quasar] boot error:",e.t0),e.abrupt("return");case 27:l++,e.next=12;break;case 30:if(!0!==u){e.next=32;break}return e.abrupt("return");case 32:f=new o["a"](n),a.onReady((function(){f.$mount("#q-app")}));case 34:case"end":return e.stop()}}),e,null,[[15,20]])}))),I.apply(this,arguments)}A()},"31cd":function(e,t,n){},"42e1":function(e,t,n){"use strict";n.r(t);var r=n("4360"),a=n("bc3a"),o=n.n(a),u=n("b178");n("8b7d");r["a"].subscribe((function(e){switch(e.type){case"auth/SET_TOKEN":e.payload?(o.a.defaults.headers.common["Authorization"]="Bearer ".concat(e.payload),u["a"].set("token",e.payload)):o.a.defaults.headers.common["Authorization"]=null;break}}))},4360:function(e,t,n){"use strict";var r={};n.r(r),n.d(r,"message",(function(){return E})),n.d(r,"errorMessage",(function(){return x}));var a={};n.r(a),n.d(a,"flashMessage",(function(){return O})),n.d(a,"flashErrorMessage",(function(){return P}));var o={};n.r(o),n.d(o,"message",(function(){return I})),n.d(o,"errorMessage",(function(){return N}));var u={};n.r(u),n.d(u,"setMessage",(function(){return z})),n.d(u,"clearMessage",(function(){return D})),n.d(u,"setErrorMessage",(function(){return F})),n.d(u,"clearErrorMessage",(function(){return j}));var s={};n.r(s),n.d(s,"flashMessage",(function(){return L})),n.d(s,"flashErrorMessage",(function(){return U}));var i={};n.r(i),n.d(i,"connected",(function(){return B}));var c={};n.r(c),n.d(c,"setConnection",(function(){return K}));var l={};n.r(l),n.d(l,"setConnection",(function(){return H})),n.d(l,"checkOnline",(function(){return $}));var f={};n.r(f),n.d(f,"allClasses",(function(){return X})),n.d(f,"selectedClass",(function(){return G}));var d={};n.r(d),n.d(d,"setClasses",(function(){return Y})),n.d(d,"setSelectedClass",(function(){return Z}));var p={};n.r(p),n.d(p,"selectedClass",(function(){return ee})),n.d(p,"getClasses",(function(){return te}));var h={};n.r(h),n.d(h,"question",(function(){return ae})),n.d(h,"session",(function(){return oe})),n.d(h,"classSchedule",(function(){return ue})),n.d(h,"scores",(function(){return se}));var m={};n.r(m),n.d(m,"setQuestion",(function(){return ie})),n.d(m,"setSession",(function(){return ce})),n.d(m,"setSessionClear",(function(){return le})),n.d(m,"setScores",(function(){return fe}));var g={};n.r(g),n.d(g,"selectedClass",(function(){return de})),n.d(g,"startQuizSession",(function(){return pe})),n.d(g,"quizQuestion",(function(){return he})),n.d(g,"quizAnswer",(function(){return me})),n.d(g,"quizScores",(function(){return ge}));var v={};n.r(v),n.d(v,"flights",(function(){return we})),n.d(v,"searchInputs",(function(){return ye})),n.d(v,"dataFlight",(function(){return Se})),n.d(v,"selectedOneWayFlight",(function(){return ke})),n.d(v,"passengerDetails",(function(){return Ee}));var b={};n.r(b),n.d(b,"setFlights",(function(){return xe})),n.d(b,"setSearchInputs",(function(){return Oe})),n.d(b,"setSelectedOneWayFlight",(function(){return Pe})),n.d(b,"setSelectedDataFlight",(function(){return Te})),n.d(b,"setPassengerDetails",(function(){return _e}));var w={};n.r(w),n.d(w,"selectOneWayFlight",(function(){return Ce})),n.d(w,"checkFlight",(function(){return Re})),n.d(w,"bookFlight",(function(){return Me})),n.d(w,"passengerDetails",(function(){return qe}));var y=n("2b0e"),S=n("2f62"),k={message:null,errors:[]},E=function(e){return e.message},x=function(e){return e.errors},O=function(e,t){var n=e.commit;console.log(t,0),n("setMessage",t),setTimeout((function(){n("clearMessage")}),1e4)},P=function(e,t){var n=e.commit;n("setErrorMessage",t),setTimeout((function(){n("clearErrorMessage")}),1e4)},T=(n("d3b7"),n("e6cf"),n("96cf"),n("c973")),_=n.n(T),C=n("bc3a"),R=n.n(C),M=n("b178"),q={namespaced:!0,state:{token:null,user:null},getters:{authenticated:function(e){return e.token&&e.user},user:function(e){return e.user}},mutations:{SET_TOKEN:function(e,t){e.token=t},SET_USER:function(e,t){e.user=t}},actions:{login:function(e,t){return _()(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.dispatch,n.abrupt("return",new Promise((function(e,n){R.a.post("api/v1/user/login",t).then((function(t){r("attempt",t.data.token),e()}),(function(e){r("errorbag/flashMessage",e.response.data.data.error,{root:!0}),n()}))})));case 2:case"end":return n.stop()}}),n)})))()},attempt:function(e,t){return _()(regeneratorRuntime.mark((function n(){var r,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(r=e.commit,e.dispatch,a=e.state,e.rootState,t&&r("SET_TOKEN",t),a.token){n.next=4;break}return n.abrupt("return");case 4:return n.prev=4,n.abrupt("return",new Promise((function(e,t){R.a.get("api/v1/user/profile").then((function(t){M["a"].set("user",JSON.stringify(t.data.data)),r("SET_USER",t.data.data),r("SET_USER",JSON.parse(M["a"].getItem("user"))),e()}),(function(e){t()}))})));case 8:n.prev=8,n.t0=n["catch"](4),r("SET_USER",null),r("SET_TOKEN",null);case 12:case"end":return n.stop()}}),n,null,[[4,8]])})))()},signOut:function(e){var t=e.commit;e.dispatch,e.rootState;return R.a.post("api/v1/user/logout").then((function(){t("SET_USER",null),t("SET_TOKEN",null),t("shopping/clearCart",null,{root:!0})}))},updateProfile:function(e,t){return _()(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.commit,r=e.dispatch,n.abrupt("return",new Promise((function(e,n){R.a.post("api/v1/user/update",t).then((function(t){r("errorbag/flashMessage",t.data.data.message,{root:!0}),r("attempt",t.data.token),e(t)}),(function(e){r("errorbag/flashErrorMessage",e.response.data,{root:!0}),n(e.response.data.data)}))})));case 2:case"end":return n.stop()}}),n)})))()},register:function(e,t){return _()(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.dispatch,n.abrupt("return",new Promise((function(e,n){R.a.post("api/v1/user/register",t).then((function(t){r("attempt",t.data.token),e()}),(function(e){console.log(e.response.data.data.error),r("errorbag/flashMessage",e.response.data.data.error,{root:!0}),n()}))})));case 2:case"end":return n.stop()}}),n)})))()}}},A={message:null,errors:null},I=function(e){return e.message},N=function(e){return e.errors},z=function(e,t){e.message=t},D=function(e){e.message=null},F=function(e,t){e.errors=t},j=function(e){e.errors=null},L=function(e,t){var n=e.commit;n("setMessage",t),setTimeout((function(){n("clearMessage")}),1e4)},U=function(e,t){var n=e.commit;n("setErrorMessage",t),setTimeout((function(){n("clearErrorMessage")}),1e4)},W={namespaced:!0,state:A,getters:o,mutations:u,actions:s},Q={connected:null},B=function(e){return e.connected},K=function(e,t){e.connected=t},H=function(e,t){var n=e.commit,r=e.dispatch;e.rootState;if(console.log(t),n("setConnection",t),0!=t)return r("adminOrders/sendOfflineOrders",null,{root:!0})},$=function(e,t){var n=e.commit,r=e.dispatch;e.rootState;if(console.log(t),n("setConnection",t),0!=t)return r("adminOrders/sendOfflineOrders",null,{root:!0}),r("adminShopping/getProducts",null,{root:!0}),r("locationHistory/getLocationHistory",null,{root:!0}),r("customerPlateNumbers/getPlateNumbers",null,{root:!0})},J={namespaced:!0,state:Q,getters:i,mutations:c,actions:l},V={classes:null,selectedClass:null},X=function(e){return e.classes},G=function(e){return e.selectedClass},Y=function(e,t){e.classes=t},Z=function(e,t){e.selectedClass=t},ee=function(e,t){var n=e.commit;return n("setSelectedClass",t),Promise.resolve()},te=function(e){var t=e.commit;R.a.get("api/v1/class").then((function(e){return t("setClasses",e.data.data),Promise.resolve()}))},ne={namespaced:!0,state:V,getters:f,mutations:d,actions:p},re={quiz:null,session:null,classSchedule:null,scores:null},ae=function(e){return e.quiz},oe=function(e){return e.session},ue=function(e){return e.classSchedule},se=function(e){return e.scores},ie=function(e,t){e.quiz=t},ce=function(e,t){e.session=t.id,e.classSchedule=t.class_schedule_id},le=function(e,t){e.session=null,e.classSchedule=null},fe=function(e,t){e.scores=t},de=function(e,t){var n=e.commit;return n("setSelectedClass",t),Promise.resolve()},pe=function(e,t){var n=e.commit,r=e.dispatch;R.a.post("api/v1/quiz/start",t).then((function(e){return n("setSession",e.data.data),r("quizQuestion",{class_schedule_id:e.data.data.class_schedule_id,quiz_session_id:e.data.data.id}),Promise.resolve()}))},he=function(e,t){var n=e.commit;R.a.post("api/v1/quiz/question",t).then((function(e){return console.log(e.data.data),n("setQuestion",e.data.data),Promise.resolve()}))},me=function(e,t){var n=e.commit;R.a.post("api/v1/quiz/answer",t).then((function(e){return n("setQuestion",null),console.log(e.data.data),Promise.resolve()}))},ge=function(e,t){var n=e.commit,r="api/v1/quiz/scores/"+t;R.a.get(r,t).then((function(e){return console.log(e.data.data),n("setScores",e.data.data),Promise.resolve()}))},ve={namespaced:!0,state:re,getters:h,mutations:m,actions:g},be={flights:null,searchInputs:null,dataFlight:null,selectedOneWayFlight:null,passengerDetails:null},we=function(e){return e.flights},ye=function(e){return e.searchInputs},Se=function(e){return e.dataFlight},ke=function(e){return e.selectedOneWayFlight},Ee=function(e){return e.passengerDetails},xe=function(e,t){e.flights=t},Oe=function(e,t){e.searchInputs=t},Pe=function(e,t){e.selectedOneWayFlight=t},Te=function(e,t){e.dataFlight=t},_e=function(e,t){e.passengerDetails=t},Ce=function(e,t){var n=e.commit;return n("setSelectedDataFlight",t),R.a.post("api/flight-select",{selectData:t.SelectData}).then((function(e){return n("setSelectedOneWayFlight",e.data.data),Promise.resolve()})),Promise.resolve()},Re=function(e,t){var n=e.commit;e.dispatch;n("setSearchInputs",t),n("setFlights",null),R.a.post("api/flight-check",t).then((function(e){return n("setFlights",e.data.data),Promise.resolve()}))},Me=function(e,t){e.commit,e.dispatch;R.a.post("api/flight-book",t).then((function(e){return Promise.resolve()}))},qe=function(e,t){var n=e.commit;e.dispatch;n("setPassengerDetails",t)},Ae={namespaced:!0,state:be,getters:v,mutations:b,actions:w};n("c790");y["a"].use(S["a"]);t["a"]=new S["a"].Store({state:k,getters:r,mutations:{initialize:function(e,t){overwriteStore(e,{state:e}),console.log(e),y["a"].set(e,"initialized",!0)}},actions:a,modules:{auth:q,internetStatus:J,schedule:ne,quiz:ve,errorbag:W,flight:Ae}});n("42e1"),n("2946"),n("d41a")},"8b7d":function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("a002"),a=n.n(r),o=(n("f79f"),a.a.createInstance({name:"mydatabase",version:1,storeName:"mystorageobj"}));o.setDriver([a.a.INDEXEDDB]).then((function(){})).catch((function(e){console.log("localstorage not created")}))},a18c:function(e,t,n){"use strict";var r=n("ded3"),a=n.n(r),o=n("2b0e"),u=n("8c4f");n("d3b7"),n("e6cf");function s(e){var t=e.next;return t()}n("b178");function i(e){var t=e.next,n=e.store;return null==n.state.auth.user?t({name:"home"}):t()}var c=[{path:"/",component:function(){return n.e(1).then(n.bind(null,"f241"))},children:[{path:"",name:"home",component:function(){return n.e(4).then(n.bind(null,"73f1"))},meta:{middleware:[s]}}]},{path:"/flight-list",component:function(){return n.e(1).then(n.bind(null,"f241"))},children:[{path:"",name:"flightList",component:function(){return n.e(7).then(n.bind(null,"662d"))},meta:{middleware:[s]}}]},{path:"/flight-checkout",component:function(){return n.e(1).then(n.bind(null,"f241"))},children:[{path:"",name:"flightCheckout",component:function(){return n.e(6).then(n.bind(null,"a479"))},meta:{middleware:[s]}}]},{path:"/flight-payment",component:function(){return n.e(1).then(n.bind(null,"f241"))},children:[{path:"",name:"flightPayment",component:function(){return Promise.all([n.e(2),n.e(8)]).then(n.bind(null,"77d9"))},meta:{middleware:[s]}}]},{path:"/user/dashboard",component:function(){return n.e(0).then(n.bind(null,"a4b2"))},children:[{path:"",name:"userDashboard",component:function(){return n.e(5).then(n.bind(null,"5572"))},meta:{middleware:[i]}}]},{path:"/user/profile",component:function(){return n.e(0).then(n.bind(null,"a4b2"))},children:[{path:"",name:"userProfile",component:function(){return n.e(10).then(n.bind(null,"dd67"))},meta:{middleware:[i]}}]},{path:"/user/class-details",component:function(){return n.e(0).then(n.bind(null,"a4b2"))},children:[{path:"",name:"classDetails",component:function(){return n.e(9).then(n.bind(null,"307a"))},meta:{middleware:[i]}}]},{path:"/user/quiz",component:function(){return n.e(0).then(n.bind(null,"a4b2"))},children:[{path:"",name:"quiz",component:function(){return n.e(11).then(n.bind(null,"e8f7"))},meta:{middleware:[i]}}]},{path:"/user/class-scores",component:function(){return n.e(0).then(n.bind(null,"a4b2"))},children:[{path:"",name:"classScheduleScores",component:function(){return n.e(12).then(n.bind(null,"1551"))},meta:{middleware:[i]}}]},{path:"/user/security",component:function(){return n.e(0).then(n.bind(null,"a4b2"))},children:[{path:"",name:"userSecurity",component:function(){return n.e(13).then(n.bind(null,"2b64"))},meta:{middleware:[i]}}]}];var l=c,f=n("4360");function d(e,t,n){var r=t[n];return r?function(){var o=d(e,t,n+1);r(a()(a()({},e),{},{nextPipeline:o}))}:e.next}var p=d;o["a"].use(u["a"]);t["a"]=function(){var e=new u["a"]({scrollBehavior:function(){return{x:0,y:0}},routes:l,mode:"history",base:"/"});return e.beforeEach((function(t,n,r){if(!t.meta.middleware)return r();var o=t.meta.middleware,u={to:t,from:n,next:r,Router:e,store:f["a"]};return o[0](a()(a()({},u),{},{next:p(u,o,1)}))})),e}},d41a:function(e,t,n){"use strict";n.r(t);n("4160"),n("159b");var r=n("448a"),a=n.n(r),o=(n("96cf"),n("c973")),u=n.n(o),s=n("2b0e"),i=n("2b52"),c=n("4b58"),l=n("4360");n("bc3a");s["a"].component("Can",i["a"]),l["a"].watch((function(e,t){return t["auth/user"]}),(function(e){if(e){var t=function(){var e=u()(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();t().then((function(){console.log("AUTHENTICATED ACTIONS")}));var n=l["a"].getters["auth/user"];if(n.permissions){var r=Object(c["a"])((function(e,t){n.permissions.forEach((function(t){e.apply(void 0,a()(t))}))}));s["a"].use(i["b"],r)}}else console.log("niwnieowwone")}))}});