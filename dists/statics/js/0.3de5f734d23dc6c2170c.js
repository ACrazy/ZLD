webpackJsonp([0,4],{239:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{page:1,limit:20,time:100}},mounted:function(){this.onRefresh()},methods:{onRefresh:function(){var e=this;this.time=new Date,this.$loading.show(),setTimeout(function(){e.$loading.hide()},2e3)}},computed:{minHeight:function(){return document.body.clientHeight>=400&&document.body.clientHeight<=736?document.body.clientHeight:window.screen.height}}}},243:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("group",[i("cell",{attrs:{title:"模板渲染",value:"value"}}),e._v(" "),i("cell",{attrs:{title:"指令","is-link":""}}),e._v(" "),i("cell",{attrs:{title:"组件,表单控件",value:"value"}}),e._v(" "),i("cell",{attrs:{title:"状态管理",value:"value"}}),e._v(" "),i("cell",{attrs:{title:"webpack构建工具",value:"value"}}),e._v(" "),i("cell",{attrs:{title:"你需要一款强大的IDE环境 webstrom ",value:"value"}})],1),e._v(" "),i("div",{staticClass:"pad20"},[e._v(e._s(e._f("formatDate")(e.time,"yyyy-MM-dd hh:mm")))])],1)},staticRenderFns:[]}},80:function(e,t,i){var l=i(0)(i(239),i(243),null,null);e.exports=l.exports}});