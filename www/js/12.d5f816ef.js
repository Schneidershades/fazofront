(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[12],{1551:function(e,s,t){"use strict";t.r(s);var r=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("q-page",{attrs:{padding:""}},[t("div",{staticClass:"q-pa-md q-gutter-sm"},[t("q-breadcrumbs",[t("q-breadcrumbs-el",{attrs:{label:"Home"}}),t("q-breadcrumbs-el",{attrs:{label:"Scores"}})],1)],1),t("div",{staticClass:"q-pa-md"},[t("div",{staticClass:"q-gutter-y-md"},[t("div",{staticClass:"f"},[t("q-table",{attrs:{title:"Scores",columns:e.columns,"row-key":"name",data:e.scores,pagination:e.pagination,filter:e.filterModel},on:{"update:pagination":function(s){e.pagination=s}},scopedSlots:e._u([{key:"top-right",fn:function(){return[t("q-input",{attrs:{borderless:"",dense:"",debounce:"300",placeholder:"Search"},scopedSlots:e._u([{key:"append",fn:function(){return[t("q-icon",{attrs:{name:"search"},model:{value:e.filterModel,callback:function(s){e.filterModel=s},expression:"filterModel"}})]},proxy:!0}]),model:{value:e.filterModel,callback:function(s){e.filterModel=s},expression:"filterModel"}})]},proxy:!0},{key:"body",fn:function(s){return[t("q-tr",{attrs:{props:s}},[t("q-td",{key:"user",attrs:{props:s}},[e._v(e._s(s.row.user))]),t("q-td",{key:"scores",attrs:{props:s}},[e._v(e._s(s.row.session))]),t("q-td",{key:"session",attrs:{props:s}},[e._v(e._s(s.row.score?s.row.score:0))])],1)]}}])})],1)])])])},o=[],l=t("ded3"),a=t.n(l),n=t("2f62"),i={data:function(){return{venueLists:["parkit-location","home-office"],createModel:null,filterModel:"",separator:"cell",pagination:{rowsPerPage:30,page:1},text:"",columns:[{name:"user",align:"left",label:"user",field:"user",sortable:!0},{name:"scores",align:"left",label:"Scores",field:"score",sortable:!0},{name:"session",align:"left",label:"Session",field:"session",sortable:!0}]}},computed:a()({},Object(n["c"])({scores:"quiz/scores",selectedClass:"schedule/selectedClass"})),methods:a()({},Object(n["b"])({quizScores:"quiz/quizScores"})),mounted:function(){if(null==this.selectedClass)return this.$router.push({name:"userDashboard"});this.quizScores(this.selectedClass.id)}},c=i,u=t("2877"),d=Object(u["a"])(c,r,o,!1,null,null,null);s["default"]=d.exports}}]);