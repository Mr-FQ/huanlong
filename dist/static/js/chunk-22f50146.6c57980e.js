(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-22f50146"],{"2e02d":function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("el-dialog",{attrs:{title:t.title,width:t.width,visible:t.isShowVisible,center:"","close-on-click-modal":!1,"before-close":function(){return t.$emit("close")}},on:{"update:visible":function(a){t.isShowVisible=a}}},[e("el-card",[e("el-form",{ref:"craftData",attrs:{inline:"","label-width":"100px",model:t.craftData}},[e("el-row",[e("el-col",{attrs:{span:12}},[e("el-form-item",{attrs:{label:"工艺名称:"}},[e("span",[t._v(t._s(t.craftData.craftName))])])],1),t._v(" "),e("el-col",{attrs:{span:12}},[e("el-form-item",{attrs:{label:"工艺编号:"}},[e("span",[t._v(t._s(t.craftData.craftNumber))])])],1),t._v(" "),e("el-col",{attrs:{span:12}},[e("el-form-item",{attrs:{label:"毛网结构:"}},[e("span",[t._v(t._s(t.craftData.woolNetStructure))])])],1)],1),t._v(" "),e("el-row",[e("el-col",{attrs:{span:24}},[e("div",{staticClass:"title_line"},[e("span",{staticClass:"title"},[t._v("工艺参数")]),t._v(" "),e("i",{staticClass:"line"})])])],1),t._v(" "),e("el-row",[t._l(t.craftList,(function(a,n){return[e("el-col",{key:n,attrs:{span:12}},[e("el-form-item",{attrs:{label:a.menuName,prop:a.menuData}},[e("span",[t._v(t._s(a.menuData))])])],1)]}))],2)],1)],1),t._v(" "),e("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e("el-button",{on:{click:function(a){return t.$emit("close")}}},[t._v("取消")])],1)],1)},l=[],s={name:"CraftDetail",props:{width:{type:String,default:"50vw"},addEditData:{type:Object}},data:function(){return{title:"梳理工艺详情",isShowVisible:!0,craftData:{},craftList:[{menuName:"喂毛量",menuData:"xx"},{menuName:"总牵伸比",menuData:"xx"},{menuName:"道夫速度",menuData:"xx"},{menuName:"底帘速度",menuData:"xx"},{menuName:"预刺输入速度",menuData:"xx"},{menuName:"输出速度",menuData:"xx"},{menuName:"卷曲速度",menuData:"xx"},{menuName:"预刺频率",menuData:"xx"},{menuName:"预刺深度",menuData:"xx"},{menuName:"喂毛量",menuData:"xx"},{menuName:"预刺密度",menuData:"xx"}]}},created:function(){this.craftData=this.addEditData.rowData},methods:{}},i=s,r=(e("8619"),e("2877")),o=Object(r["a"])(i,n,l,!1,null,"63f71de5",null);a["default"]=o.exports},4516:function(t,a,e){},8619:function(t,a,e){"use strict";e("4516")}}]);