(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d84b0ed"],{"13ed":function(t,e,a){},"840b":function(t,e,a){"use strict";a("13ed")},c376:function(t,e,a){"use strict";a.r(e);var l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-dialog",{attrs:{title:t.title,width:t.width,visible:t.isShowVisible,center:"","close-on-click-modal":!1,"before-close":function(){return t.$emit("close")}},on:{"update:visible":function(e){t.isShowVisible=e}}},[a("el-card",[a("el-form",{ref:"schedulingData",attrs:{"label-width":"125px",model:t.schedulingData,rules:t.rules}},[a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"排班名称:"}},[a("span",[t._v(t._s(t.schedulingData.schedulingName))])])],1),t._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"类型:"}},[a("span",[t._v(t._s(t.schedulingData.type))])])],1),t._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"生产机台:"}},[a("span",[t._v(t._s(t.schedulingData.device))])])],1),t._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"所属班组:"}},[a("span",[t._v(t._s(t.schedulingData.belongingToclass))])])],1),t._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"生效日期:"}},[a("span",[t._v(t._s(t.schedulingData.effectiveDate))])])],1),t._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"轮换(天/次):"}},[a("span",[t._v(t._s(t.schedulingData.intervalDays))])])],1),t._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"下次换班日期"}},[a("span",[t._v(t._s(t.schedulingData.nextDate))])])],1)],1),t._v(" "),"延期换班"===t.title?a("el-row",[a("el-col",{attrs:{span:24}},[a("div",{staticClass:"title_line"},[a("span",{staticClass:"title"},[t._v("延期日期")]),t._v(" "),a("i",{staticClass:"line"})]),t._v(" "),a("div",{staticClass:"add_person"},[a("el-form-item",{attrs:{label:"延期换班日期",prop:"replaceNextDate"}},[a("el-date-picker",{attrs:{type:"date",placeholder:"选择日期"},model:{value:t.schedulingData.replaceNextDate,callback:function(e){t.$set(t.schedulingData,"replaceNextDate",e)},expression:"schedulingData.replaceNextDate"}})],1)],1)])],1):t._e(),t._v(" "),a("el-row",[a("el-col",{attrs:{span:24}},[a("div",{staticClass:"title_line"},[a("span",{staticClass:"title"},[t._v("人员选择")]),t._v(" "),a("i",{staticClass:"line"})]),t._v(" "),a("div",{staticClass:"add_person"},[a("el-table",{attrs:{"max-height":"600",border:"",data:t.personDataList}},[a("el-table-column",{attrs:{label:"序号",align:"center",type:"index",fixed:"",width:"50"}}),t._v(" "),t._l(t.tableHeaderList,(function(e,l){return[a("el-table-column",{key:l,attrs:{label:e.label,prop:e.prop,align:"center","show-overflow-tooltip":"","min-width":"140"},scopedSlots:t._u([{key:"default",fn:function(l){return["personCharge"===e.prop?[a("el-checkbox",{staticClass:"checkboxSize",attrs:{disabled:""},model:{value:l.row.personCharge,callback:function(e){t.$set(l.row,"personCharge",e)},expression:"scope.row.personCharge"}})]:[a("span",[t._v(t._s(l.row[e.prop]))])]]}}],null,!0)})]}))],2)],1)])],1),t._v(" "),a("el-row",[a("el-col",{attrs:{span:24}},[a("div",{staticClass:"title_line"},[a("span",{staticClass:"title"},[t._v("工作时段")]),t._v(" "),a("i",{staticClass:"line"})]),t._v(" "),a("div",{staticClass:"add_person"},[a("el-table",{attrs:{"max-height":"600",border:"",data:t.timeIntervalList}},[a("el-table-column",{attrs:{label:"序号",align:"center",type:"index",fixed:"",width:"50"}}),t._v(" "),t._l(t.tableHeaderTimeInterval,(function(e,l){return[a("el-table-column",{key:l,attrs:{label:e.label,prop:e.prop,align:"center","show-overflow-tooltip":"","min-width":"140"},scopedSlots:t._u([{key:"default",fn:function(l){return[[a("span",[t._v(t._s(l.row[e.prop]))])]]}}],null,!0)})]}))],2)],1)])],1),t._v(" "),a("el-row",[a("el-col",{attrs:{span:24}},[a("div",{staticClass:"title_line"},[a("span",{staticClass:"title"},[t._v("过滤日期")]),t._v(" "),a("i",{staticClass:"line"})]),t._v(" "),a("div",{staticClass:"add_person"},[a("el-table",{attrs:{"max-height":"600",border:"",data:t.filterDateList}},[a("el-table-column",{attrs:{label:"序号",align:"center",type:"index",fixed:"",width:"50"}}),t._v(" "),t._l(t.tableHeaderFilterDate,(function(e,l){return[a("el-table-column",{key:l,attrs:{label:e.label,prop:e.prop,align:"center","show-overflow-tooltip":"","min-width":"140"},scopedSlots:t._u([{key:"default",fn:function(l){return[[a("span",[t._v(t._s(l.row[e.prop]))])]]}}],null,!0)})]}))],2)],1)])],1)],1)],1),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},["延期换班"===t.title?a("el-button",{attrs:{type:"primary"},on:{click:t.saveScheduling}},[t._v("保存")]):t._e(),t._v(" "),a("el-button",{on:{click:function(e){return t.$emit("close")}}},[t._v("取消")])],1)],1)},s=[],i={name:"SchedulingDetail",props:{width:{type:String,default:"50vw"},addEditData:{type:Object}},data:function(){return{title:"班组详情",isShowVisible:!0,rules:{replaceNextDate:[{required:!0,type:"date",message:"请选择日期",tirgger:"change"}]},schedulingData:{},tableHeaderList:[{label:"人员",prop:"person"},{label:"负责人",prop:"personCharge"}],personDataList:[],timeIntervalList:[{type:"白班",startTime:"08:00",endTime:"19:59"},{type:"夜班",startTime:"20:00",endTime:"07:59"}],tableHeaderTimeInterval:[{label:"类型",prop:"type"},{label:"起始时间",prop:"startTime"},{label:"结束时间",prop:"endTime"}],tableHeaderFilterDate:[{label:"起始日期",prop:"startDate"},{label:"结束日期",prop:"endDate"}],filterDateList:[]}},created:function(){console.log(this.addEditData),this.schedulingData={},"详情"===this.addEditData.type?(this.title="班组详情",this.schedulingData=this.addEditData.rowData,this.personDataList=this.addEditData.rowData.personDataList,this.filterDateList=this.addEditData.rowData.filterDateList):(this.title="延期换班",this.schedulingData=this.addEditData.rowData,this.personDataList=this.addEditData.rowData.personDataList,this.filterDateList=this.addEditData.rowData.filterDateList)},methods:{saveScheduling:function(){var t=this;this.$refs["schedulingData"].validate((function(e,a){e&&(t.$message.success("保存成功!"),t.$emit("close"))}))}}},r=i,n=(a("840b"),a("2877")),o=Object(n["a"])(r,l,s,!1,null,"132601bf",null);e["default"]=o.exports}}]);