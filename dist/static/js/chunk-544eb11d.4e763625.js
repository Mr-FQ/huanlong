(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-544eb11d"],{"4b04":function(e,r,t){"use strict";t("a758")},a758:function(e,r,t){},f856:function(e,r,t){"use strict";t.r(r);var a=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("el-dialog",{attrs:{title:e.title,width:e.width,visible:e.isShowVisible,center:"","close-on-click-modal":!1,"before-close":function(){return e.$emit("close")}},on:{"update:visible":function(r){e.isShowVisible=r}}},[t("el-card",[t("el-form",{ref:"workOrderData",attrs:{inline:"","label-width":"100px",model:e.workOrderData,rules:e.rules}},[t("el-row",[t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:"毯号:",prop:"blanketNumber"}},[t("el-input",{attrs:{maxlength:"30"},model:{value:e.workOrderData.blanketNumber,callback:function(r){e.$set(e.workOrderData,"blanketNumber","string"===typeof r?r.trim():r)},expression:"workOrderData.blanketNumber"}})],1)],1),e._v(" "),t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:"客户名称:",prop:"customer"}},[t("el-input",{attrs:{maxlength:"30"},model:{value:e.workOrderData.customer,callback:function(r){e.$set(e.workOrderData,"customer","string"===typeof r?r.trim():r)},expression:"workOrderData.customer"}})],1)],1),e._v(" "),t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:"客户简称:",prop:"customerAbbreviation"}},[t("el-input",{attrs:{maxlength:"30"},model:{value:e.workOrderData.customerAbbreviation,callback:function(r){e.$set(e.workOrderData,"customerAbbreviation","string"===typeof r?r.trim():r)},expression:"workOrderData.customerAbbreviation"}})],1)],1),e._v(" "),t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:"订货部位:",prop:"workOrderPosition"}},[t("el-input",{attrs:{maxlength:"30"},model:{value:e.workOrderData.workOrderPosition,callback:function(r){e.$set(e.workOrderData,"workOrderPosition","string"===typeof r?r.trim():r)},expression:"workOrderData.workOrderPosition"}})],1)],1),e._v(" "),t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:"机型:",prop:"model"}},[t("el-select",{attrs:{filterable:"",placeholder:"请选择"},model:{value:e.workOrderData.model,callback:function(r){e.$set(e.workOrderData,"model",r)},expression:"workOrderData.model"}},[t("el-option",{attrs:{label:"针刺机型",value:"针刺机型"}}),e._v(" "),t("el-option",{attrs:{label:"梳理机型",value:"梳理机型"}})],1)],1)],1),e._v(" "),t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:"工艺路线:",prop:"craft"}},[t("el-select",{attrs:{filterable:"",placeholder:"请选择"},model:{value:e.workOrderData.craft,callback:function(r){e.$set(e.workOrderData,"craft",r)},expression:"workOrderData.craft"}},[t("el-option",{attrs:{label:"1#",value:"1#"}}),e._v(" "),t("el-option",{attrs:{label:"2#",value:"2#"}})],1)],1)],1),e._v(" "),t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:"宽:",prop:"wide"}},[t("el-input",{attrs:{maxlength:"30"},model:{value:e.workOrderData.wide,callback:function(r){e.$set(e.workOrderData,"wide","string"===typeof r?r.trim():r)},expression:"workOrderData.wide"}})],1)],1),e._v(" "),t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:"长:",prop:"long"}},[t("el-input",{attrs:{maxlength:"30"},model:{value:e.workOrderData.long,callback:function(r){e.$set(e.workOrderData,"long","string"===typeof r?r.trim():r)},expression:"workOrderData.long"}})],1)],1),e._v(" "),t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:"克重:",prop:"gramWeight"}},[t("el-input",{attrs:{maxlength:"30"},model:{value:e.workOrderData.gramWeight,callback:function(r){e.$set(e.workOrderData,"gramWeight","string"===typeof r?r.trim():r)},expression:"workOrderData.gramWeight"}})],1)],1),e._v(" "),t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:"理重:",prop:"theoryWeight"}},[t("el-input",{attrs:{maxlength:"30"},model:{value:e.workOrderData.theoryWeight,callback:function(r){e.$set(e.workOrderData,"theoryWeight","string"===typeof r?r.trim():r)},expression:"workOrderData.theoryWeight"}})],1)],1),e._v(" "),t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:"品牌:",prop:"brand"}},[t("el-input",{attrs:{maxlength:"30"},model:{value:e.workOrderData.brand,callback:function(r){e.$set(e.workOrderData,"brand","string"===typeof r?r.trim():r)},expression:"workOrderData.brand"}})],1)],1),e._v(" "),t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:"物料名称:",prop:"materialName"}},[t("el-input",{attrs:{maxlength:"30"},model:{value:e.workOrderData.materialName,callback:function(r){e.$set(e.workOrderData,"materialName","string"===typeof r?r.trim():r)},expression:"workOrderData.materialName"}})],1)],1),e._v(" "),t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:"物料编码:",prop:"materialCode"}},[t("el-input",{attrs:{maxlength:"30"},model:{value:e.workOrderData.materialCode,callback:function(r){e.$set(e.workOrderData,"materialCode","string"===typeof r?r.trim():r)},expression:"workOrderData.materialCode"}})],1)],1),e._v(" "),t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:"制卡日期:",prop:"makeCardDate"}},[t("el-date-picker",{attrs:{type:"date",placeholder:"选择日期"},model:{value:e.workOrderData.makeCardDate,callback:function(r){e.$set(e.workOrderData,"makeCardDate",r)},expression:"workOrderData.makeCardDate"}})],1)],1),e._v(" "),t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:"开始日期:",prop:"startDate"}},[t("el-date-picker",{attrs:{type:"date",placeholder:"选择日期"},model:{value:e.workOrderData.startDate,callback:function(r){e.$set(e.workOrderData,"startDate",r)},expression:"workOrderData.startDate"}})],1)],1),e._v(" "),t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:"结束日期:",prop:"endDate"}},[t("el-date-picker",{attrs:{type:"date",placeholder:"选择日期"},model:{value:e.workOrderData.endDate,callback:function(r){e.$set(e.workOrderData,"endDate",r)},expression:"workOrderData.endDate"}})],1)],1)],1)],1)],1),e._v(" "),t("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{attrs:{type:"primary"},on:{click:e.saveWorkOrder}},[e._v("保存")]),e._v(" "),t("el-button",{on:{click:function(r){return e.$emit("close")}}},[e._v("取消")])],1)],1)},l=[],o={name:"WorkOrderAddEdit",props:{width:{type:String,default:"50vw"},addEditData:{type:Object}},data:function(){return{title:"新增工单",isShowVisible:!0,rules:{blanketNumber:[{required:!0,message:"请填写毯号",tirgger:"blur"}],customer:[{required:!0,message:"请填写客户名称",tirgger:"blur"}],customerAbbreviation:[{required:!0,message:"请填写客户简称",tirgger:"blur"}],workOrderPosition:[{required:!0,message:"请填写订货部位",tirgger:"blur"}],model:[{required:!0,message:"请选择机型",tirgger:"change"}],craft:[{required:!0,message:"请选择工艺路线",tirgger:"change"}],wide:[{required:!0,message:"请填写宽",tirgger:"blur"}],long:[{required:!0,message:"请填写长",tirgger:"blur"}],gramWeight:[{required:!0,message:"请填写克重",tirgger:"blur"}],theoryWeight:[{required:!0,message:"请填写理重",tirgger:"blur"}],brand:[{required:!0,message:"请填写品牌",tirgger:"blur"}],materialName:[{required:!0,message:"请填写物料名称",tirgger:"blur"}],materialCode:[{required:!0,message:"请填写物料编码",tirgger:"blur"}],makeCardDate:[{required:!0,type:"date",message:"请填写制卡日期",tirgger:"blur"}],startDate:[{required:!0,type:"date",message:"请填写开始日期",tirgger:"blur"}],endDate:[{required:!0,type:"date",message:"请填写结束日期",tirgger:"blur"}]},workOrderData:{}}},created:function(){"修改"===this.addEditData.type&&(this.workOrderData=this.addEditData.rowData,this.workOrderData.makeCardDate=new Date(this.addEditData.rowData.makeCardDate),this.workOrderData.startDate=new Date(this.addEditData.rowData.startDate),this.workOrderData.endDate=new Date(this.addEditData.rowData.endDate),this.title="修改工单")},methods:{saveWorkOrder:function(){var e=this;this.$refs["workOrderData"].validate((function(r,t){r&&(e.$message.success("保存成功!"),e.$emit("close"))}))}}},s=o,i=(t("4b04"),t("2877")),d=Object(i["a"])(s,a,l,!1,null,"188ba941",null);r["default"]=d.exports}}]);