(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-21ee6ed0"],{"01b2":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-dialog",{attrs:{title:t.title,width:t.width,visible:t.isShowVisible,center:"","close-on-click-modal":!1,"before-close":function(){return t.$emit("close")}},on:{"update:visible":function(e){t.isShowVisible=e}}},[a("el-card",{directives:[{name:"loading",rawName:"v-loading",value:t.isLoading,expression:"isLoading"}]},[a("el-form",{ref:"dutyData",attrs:{"label-width":"105px",model:t.dutyData,rules:t.rules}},[a("el-row",[a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"职位名称:",prop:"dutyName"}},[a("el-input",{attrs:{maxlength:"30"},model:{value:t.dutyData.dutyName,callback:function(e){t.$set(t.dutyData,"dutyName","string"===typeof e?e.trim():e)},expression:"dutyData.dutyName"}})],1)],1)],1),t._v(" "),a("el-row",[a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"职位编码:",prop:"dutyCode"}},[a("el-input",{attrs:{maxlength:"30"},model:{value:t.dutyData.dutyCode,callback:function(e){t.$set(t.dutyData,"dutyCode","string"===typeof e?e.trim():e)},expression:"dutyData.dutyCode"}})],1)],1)],1),t._v(" "),a("el-row",[a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"状态:",prop:"status"}},[a("el-radio-group",{model:{value:t.dutyData.status,callback:function(e){t.$set(t.dutyData,"status",e)},expression:"dutyData.status"}},[a("el-radio",{attrs:{label:"启用"}}),t._v(" "),a("el-radio",{attrs:{label:"禁用"}})],1)],1)],1)],1),t._v(" "),a("el-form-item",{attrs:{label:"备注:"}},[a("el-input",{attrs:{type:"textarea",rows:"6",maxlength:"500"},model:{value:t.dutyData.description,callback:function(e){t.$set(t.dutyData,"description","string"===typeof e?e.trim():e)},expression:"dutyData.description"}})],1)],1)],1),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:t.saveDuty}},[t._v("保存")]),t._v(" "),a("el-button",{on:{click:function(e){return t.$emit("close")}}},[t._v("取消")])],1)],1)},s=[],l={name:"DutyAddEdit",props:{width:{type:String,default:"26vw"},addEditData:{type:Object}},data:function(){return{title:"新增职位",isShowVisible:!0,isLoading:!1,rules:{dutyName:[{required:!0,message:"请填写职位名称",tirgger:"blur"}],dutyCode:[{required:!0,message:"请填写职位编码",tirgger:"blur"}],status:[{required:!0,message:"请选择状态",tirgger:"change"}]},dutyData:{}}},created:function(){console.log(this.addEditData),"新增"===this.addEditData.type?this.title="新增职位":(this.title="修改职位",this.dutyData=this.addEditData.rowData)},methods:{saveDuty:function(){var t=this;this.$refs["dutyData"].validate((function(e,a){e&&(t.$message.success("保存成功!"),t.$emit("close"))}))}}},o=l,r=(a("f5a7"),a("2877")),d=Object(r["a"])(o,i,s,!1,null,"07db86ee",null);e["default"]=d.exports},"39a8":function(t,e,a){},f5a7:function(t,e,a){"use strict";a("39a8")}}]);