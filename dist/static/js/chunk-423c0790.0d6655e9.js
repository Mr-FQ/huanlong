(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-423c0790"],{d217:function(a,t,e){},d5f9:function(a,t,e){"use strict";e.r(t);var n=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("el-dialog",{attrs:{title:a.title,width:a.width,visible:a.isShowVisible,center:"","close-on-click-modal":!1,"before-close":function(){return a.$emit("close")}},on:{"update:visible":function(t){a.isShowVisible=t}}},[e("el-card",[e("el-form",{ref:"standardData",attrs:{inline:"","label-width":"125px",model:a.standardData}},[e("el-row",[e("el-col",{attrs:{span:12}},[e("el-form-item",{attrs:{label:"质检名称:"}},[e("span",[a._v(a._s(a.standardData.standardName))])])],1),a._v(" "),e("el-col",{attrs:{span:12}},[e("el-form-item",{attrs:{label:"质检编号:"}},[e("span",[a._v(a._s(a.standardData.standardNumber))])])],1),a._v(" "),e("el-col",{attrs:{span:12}},[e("el-form-item",{attrs:{label:"类型:"}},[e("span",[a._v(a._s(a.standardData.type))])])],1)],1),a._v(" "),e("el-row",[e("el-col",{attrs:{span:24}},[e("div",{staticClass:"title_line"},[e("span",{staticClass:"title"},[a._v("质检参数")]),a._v(" "),e("i",{staticClass:"line"})])])],1),a._v(" "),e("el-row",[a._l(a.standardList,(function(t,n){return[e("el-col",{key:n,attrs:{span:12}},[e("el-form-item",{attrs:{label:t.menuName,prop:t.menuData}},[e("span",[a._v(a._s(t.menuData))])])],1)]}))],2)],1)],1),a._v(" "),e("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e("el-button",{on:{click:function(t){return a.$emit("close")}}},[a._v("取消")])],1)],1)},s=[],i={name:"CardingDetail",props:{width:{type:String,default:"50vw"},addEditData:{type:Object}},data:function(){return{title:"梳理质检标准详情",isShowVisible:!0,classenable:0,standardData:{},standardList:[],ownStandardList:[{menuName:"表面瑕疵",menuData:"无瑕疵"},{menuName:"表面平整度",menuData:"平整"},{menuName:"表面清洁状况",menuData:"整洁"},{menuName:"多轴缝合区平整性",menuData:"pingzheng"}],mutualStandardList:[{menuName:"基网机构",menuData:"xx"},{menuName:"基网匹配度",menuData:"xx"},{menuName:"基网疵点",menuData:"xx"},{menuName:"基网匀度",menuData:"xx"},{menuName:"纬线平直度",menuData:"xx"},{menuName:"毛网匀度",menuData:"xx"},{menuName:"毛网克重",menuData:"xx"},{menuName:"拉伸长度",menuData:"xx"}],inspectionStandardList:[{menuName:"基网机构",menuData:"xx"},{menuName:"基网匹配度",menuData:"xx"},{menuName:"基网疵点",menuData:"xx"},{menuName:"基网匀度",menuData:"xx"},{menuName:"纬线平直度",menuData:"xx"},{menuName:"毛网匀度",menuData:"xx"},{menuName:"毛网克重",menuData:"xx"},{menuName:"拉伸长度",menuData:"xx"}]}},created:function(){this.standardData=this.addEditData.rowData,"互检"===this.standardData.type?this.standardList=this.mutualStandardList:"自检"===this.standardData.type?this.standardList=this.ownStandardList:"巡检"===this.standardData.type?this.standardList=this.inspectionStandardList:this.standardList=[]},methods:{}},m=i,d=(e("e77f"),e("2877")),r=Object(d["a"])(m,n,s,!1,null,"1a77ede6",null);t["default"]=r.exports},e77f:function(a,t,e){"use strict";e("d217")}}]);