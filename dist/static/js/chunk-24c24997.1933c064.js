(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-24c24997"],{"06c6":function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"a",(function(){return o}));var i={data:function(){return{pageNo:1,pageSizeOpts:[10,15,20,50,100,200,500,1e3,2e3],pageSize:10,total:0}},methods:{correctPageNo:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=Math.ceil((this.total-t)/10);this.pageNo>e&&0!==e&&(this.pageNo=e)}}},o={methods:{confirmationBox:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"提示",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"您确定要删除这几项吗？",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"warning",i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"确定",o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"取消";return this.$confirm(e,t,{confirmButtonText:i,cancelButtonText:o,type:a})}}}},"0b80":function(t,e,a){},"73d6":function(t,e,a){"use strict";a("0b80")},"99aa":function(t,e){t.exports="data:image/png;base64,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"},b3cc:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("el-row",{staticStyle:{height:"100%"},attrs:{gutter:20}},[i("el-col",{staticStyle:{"padding-left":"0"},attrs:{span:24}},[i("el-card",[i("el-form",{attrs:{inline:""}},[i("el-form-item",{staticClass:"mgb-0",attrs:{label:"字典名称:"}},[i("el-input",{attrs:{maxlength:"30"},model:{value:t.query.dictName,callback:function(e){t.$set(t.query,"dictName","string"===typeof e?e.trim():e)},expression:"query.dictName"}})],1),t._v(" "),i("el-form-item",{staticClass:"mgb-0",attrs:{label:"字典编码:"}},[i("el-input",{attrs:{maxlength:"30"},model:{value:t.query.dictCode,callback:function(e){t.$set(t.query,"dictCode","string"===typeof e?e.trim():e)},expression:"query.dictCode"}})],1),t._v(" "),i("el-form-item",{staticClass:"mgb-0"},[i("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.searchData({type:"dict"})}}},[t._v("搜索")]),t._v(" "),i("el-button",{attrs:{type:"info"},on:{click:function(e){return t.clearData({type:"dict"})}}},[t._v("重置")])],1)],1)],1),t._v(" "),i("el-card",{staticStyle:{"margin-top":"10px"}},[i("div",{staticStyle:{"margin-bottom":"10px"}},[i("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.open_add_edit({type:"新增",name:"字典"})}}},[t._v("新增")])],1),t._v(" "),i("div",{staticClass:"tables_form"},[i("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.tableLoading,expression:"tableLoading"}],attrs:{"max-height":"600",border:"",data:t.dataList}},[i("el-table-column",{attrs:{label:"序号",align:"center",type:"index",fixed:"",width:"50"}}),t._v(" "),t._l(t.tableHeaderList,(function(e,a){return[i("el-table-column",{key:a,attrs:{label:e.label,prop:e.prop,align:"center","show-overflow-tooltip":"","min-width":"140"},scopedSlots:t._u([{key:"default",fn:function(a){return["status"===e.prop?["启用"==a.row.status?i("span",[t._v(t._s(a.row[e.prop]))]):i("span",{staticStyle:{color:"red"}},[t._v(t._s(a.row[e.prop]))])]:[i("span",[t._v(t._s(a.row[e.prop]))])]]}}],null,!0)})]})),t._v(" "),i("el-table-column",{attrs:{label:t.operation.label,fixed:"right",align:"center","min-width":t.operation.minWidth},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-button",{attrs:{type:"text"},on:{click:function(a){return t.openDictDetail({type:"详情",name:"字典",rowData:e.row})}}},[t._v("\n                  详情\n                ")]),t._v(" "),i("el-button",{directives:[{name:"show",rawName:"v-show",value:t.operation.type,expression:"operation.type"}],attrs:{type:"text"},on:{click:function(a){return t.open_add_edit({type:"修改",name:"字典",rowData:e.row})}}},[t._v("\n                  修改\n                ")]),t._v(" "),i("el-button",{directives:[{name:"show",rawName:"v-show",value:t.operation.type,expression:"operation.type"}],staticStyle:{color:"red"},attrs:{type:"text"},on:{click:function(e){return t.deleteDict({type:"字典"})}}},[t._v("\n                  删除\n                ")])]}}])})],2),t._v(" "),i("div",{staticClass:"expand",on:{click:t.setSelect}},[t.operation.type?i("img",{attrs:{src:a("99aa"),alt:"收缩"}}):i("img",{attrs:{src:a("da0f"),alt:"展开"}})])],1),t._v(" "),i("el-pagination",{staticStyle:{float:"right",margin:"10px 0"},attrs:{"current-page":t.pageNo,"page-sizes":t.pageSizeOpts,"page-size":t.pageSize,layout:"total, sizes, prev, pager, next, jumper","prev-text":"上一页","next-text":"下一页",total:t.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)],1),t._v(" "),i("el-col",{staticStyle:{"padding-left":"0"},attrs:{span:24}},[i("el-card",{staticStyle:{"margin-top":"60px"}},[i("el-tabs",{attrs:{type:"card"},on:{"tab-click":t.handleClick},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[i("el-tab-pane",{attrs:{label:"字典码值",name:"字典码值"}},[i("div",{staticClass:"table_form"},[i("div",{staticClass:"table_left"},[i("el-form",{attrs:{inline:""}},[i("el-form-item",{staticClass:"mgb-0",attrs:{label:"字典名称:"}},[i("el-input",{attrs:{maxlength:"30"},model:{value:t.code_query.codeName,callback:function(e){t.$set(t.code_query,"codeName","string"===typeof e?e.trim():e)},expression:"code_query.codeName"}})],1),t._v(" "),i("el-form-item",{staticClass:"mgb-0",attrs:{label:"字典编码:"}},[i("el-input",{attrs:{maxlength:"30"},model:{value:t.code_query.code,callback:function(e){t.$set(t.code_query,"code","string"===typeof e?e.trim():e)},expression:"code_query.code"}})],1),t._v(" "),i("el-form-item",{staticClass:"mgb-0"},[i("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.searchData({type:"code"})}}},[t._v("搜索")]),t._v(" "),i("el-button",{attrs:{type:"info"},on:{click:function(e){return t.clearData({type:"code"})}}},[t._v("重置")])],1)],1)],1),t._v(" "),i("div",[i("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.open_add_edit({type:"新增",name:"码值"})}}},[t._v("新增")])],1)]),t._v(" "),i("div",{staticClass:"tables_form"},[i("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.tableLoading,expression:"tableLoading"}],attrs:{"max-height":"600",border:"",data:t.codeDataList}},[i("el-table-column",{attrs:{label:"序号",align:"center",type:"index",fixed:"",width:"50"}}),t._v(" "),t._l(t.tableHeaderCodeValue,(function(e,a){return[i("el-table-column",{key:a,attrs:{label:e.label,prop:e.prop,align:"center","show-overflow-tooltip":"","min-width":"140"},scopedSlots:t._u([{key:"default",fn:function(a){return["status"===e.prop?["启用"==a.row.status?i("span",[t._v(t._s(a.row[e.prop]))]):i("span",{staticStyle:{color:"red"}},[t._v(t._s(a.row[e.prop]))])]:[i("span",[t._v(t._s(a.row[e.prop]))])]]}}],null,!0)})]})),t._v(" "),i("el-table-column",{attrs:{label:t.operationCodeValue.label,fixed:"right",align:"center","min-width":t.operationCodeValue.minWidth},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-button",{attrs:{type:"text"},on:{click:function(a){return t.openDictDetail({type:"详情",name:"码值",rowData:e.row})}}},[t._v("\n                      详情\n                    ")]),t._v(" "),i("el-button",{directives:[{name:"show",rawName:"v-show",value:t.operationCodeValue.type,expression:"operationCodeValue.type"}],attrs:{type:"text"},on:{click:function(a){return t.open_add_edit({type:"修改",name:"码值",rowData:e.row})}}},[t._v("\n                      修改\n                    ")]),t._v(" "),i("el-button",{directives:[{name:"show",rawName:"v-show",value:t.operationCodeValue.type,expression:"operationCodeValue.type"}],staticStyle:{color:"red"},attrs:{type:"text"},on:{click:function(e){return t.deleteDict({type:"码值"})}}},[t._v("\n                      删除\n                    ")])]}}])})],2),t._v(" "),i("div",{staticClass:"expand",on:{click:t.setSelectCodeValue}},[t.operationCodeValue.type?i("img",{attrs:{src:a("99aa"),alt:"收缩"}}):i("img",{attrs:{src:a("da0f"),alt:"展开"}})])],1),t._v(" "),i("el-pagination",{staticStyle:{float:"right",margin:"10px 0"},attrs:{"current-page":t.code_pageNo,"page-sizes":t.pageSizeOpts,"page-size":t.code_pageSize,layout:"total, sizes, prev, pager, next, jumper","prev-text":"上一页","next-text":"下一页",total:t.code_total},on:{"size-change":t.code_handleSizeChange,"current-change":t.code_handleCurrentChange}})],1)],1)],1)],1)],1),t._v(" "),t.isShowDictAddEdit?i("dict-addEdit",{attrs:{"add-edit-data":t.addEditData},on:{close:t.closeAddEdit}}):t._e(),t._v(" "),t.isShowDictDetail?i("dict-detail",{attrs:{"add-edit-data":t.addEditData},on:{close:t.closeDetail}}):t._e(),t._v(" "),t.isShowCodeAddEdit?i("dict-code-addEdit",{attrs:{"add-edit-data":t.addEditData},on:{close:t.closeAddEdit}}):t._e(),t._v(" "),t.isShowCodeDetail?i("dict-code-detail",{attrs:{"add-edit-data":t.addEditData},on:{close:t.closeDetail}}):t._e()],1)},o=[],n=(a("7f7f"),a("06c6")),l={name:"DictManage",components:{DictAddEdit:function(t){return a.e("chunk-4972102e").then(function(){var e=[a("3419")];t.apply(null,e)}.bind(this)).catch(a.oe)},DictDetail:function(t){return a.e("chunk-2d0d01b5").then(function(){var e=[a("6720")];t.apply(null,e)}.bind(this)).catch(a.oe)},DictCodeAddEdit:function(t){return a.e("chunk-26f8bab9").then(function(){var e=[a("5316")];t.apply(null,e)}.bind(this)).catch(a.oe)},DictCodeDetail:function(t){return a.e("chunk-2d0abf9d").then(function(){var e=[a("1822")];t.apply(null,e)}.bind(this)).catch(a.oe)}},mixins:[n["b"]],data:function(){return{activeName:"字典码值",query:{DictName:null,dictCode:null},tableLoading:!1,dataList:[],codeDataList:[],code_pageNo:0,code_pageSize:0,code_query:{codeName:null,code:null},isShowDictAddEdit:!1,isShowDictDetail:!1,isShowCodeAddEdit:!1,isShowCodeDetail:!1,operation:{label:"操作",minWidth:"35",type:!1},operationCodeValue:{label:"操作",minWidth:"35",type:!1},tableHeaderList:[{label:"字典名称",prop:"dictName"},{label:"字典编码",prop:"dictCode"},{label:"备注",prop:"remarks"},{label:"创建人",prop:"creater"},{label:"创建时间",prop:"createTime"}],tableHeaderCodeValue:[{label:"字典名称",prop:"dictName"},{label:"码值名称",prop:"codeName"},{label:"码值编码",prop:"code"},{label:"备注",prop:"remarks"},{label:"创建人",prop:"creater"},{label:"创建时间",prop:"createTime"}],addEditData:{}}},created:function(){this.init()},methods:{init:function(){this.dataList=[{dictName:"设备运行状态",dictCode:"SHEBEIYUNXINGZHUANGT",remarks:"备注.....",creater:"张三",createTime:"2021-06-23 08:08:08"},{dictName:"学历",dictCode:"XUELI",remarks:"备注.....",creater:"李四",createTime:"2021-06-23 08:08:08"}],this.total=2,this.codeDataList=[{dictName:"设备运行状态",codeName:"正常",code:"ZHENGCHANG",remarks:"备注.....",creater:"张三",createTime:"2021-06-23 08:08:08"},{dictName:"学历",codeName:"停运",code:"TINGYUN",remarks:"备注.....",creater:"李四",createTime:"2021-06-23 08:08:08"}],this.code_total=2},handleClick:function(t,e){console.log(t,e)},handleCurrentChange:function(t){this.pageNo=t},handleSizeChange:function(t){this.pageSize=t},searchData:function(t){"dict"===t.type?this.pageNo=1:this.code_pageSize=1},clearData:function(t){"dict"===t.type?(this.query.dictName=null,this.query.dictCode=null):(this.code_query.codeName=null,this.code_query.code=null)},code_handleCurrentChange:function(t){this.code_pageNo=t},code_handleSizeChange:function(t){this.code_pageSize=t},open_add_edit:function(t){"字典"===t.name?(this.addEditData.type=t.type,this.addEditData.rowData=t.rowData,this.isShowDictAddEdit=!0):"码值"===t.name&&(this.addEditData.type=t.type,this.addEditData.rowData=t.rowData,this.isShowCodeAddEdit=!0)},closeAddEdit:function(){this.isShowDictAddEdit=!1,this.isShowCodeAddEdit=!1},openDictDetail:function(t){"字典"===t.name?(console.log(1),this.addEditData.type=t.type,this.addEditData.rowData=t.rowData,this.isShowDictDetail=!0):"码值"===t.name&&(console.log(2),this.addEditData.type=t.type,this.addEditData.rowData=t.rowData,this.isShowCodeDetail=!0)},closeDetail:function(){this.isShowDictDetail=!1,this.isShowCodeDetail=!1},deleteDict:function(t){var e=this,a=t.type;this.$confirm("此操作将永久删除该".concat(a,", 是否继续?"),"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){e.$message({type:"success",message:"删除成功"})})).catch((function(){e.$message({type:"info",message:"已取消删除"})}))},setSelect:function(){this.operation.type?this.operation.minWidth="35":this.operation.minWidth="100",this.operation.type=!this.operation.type},setSelectCodeValue:function(){this.operationCodeValue.type?this.operationCodeValue.minWidth="35":this.operationCodeValue.minWidth="100",this.operationCodeValue.type=!this.operationCodeValue.type}}},r=l,c=(a("73d6"),a("2877")),d=Object(c["a"])(r,i,o,!1,null,"b689736c",null);e["default"]=d.exports},da0f:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAEHElEQVR4Xu3dy2sTQRwH8O9M4uNmQb1Um62PgyKCj6pIqY8/QBCkPfSmkkY8FL16Mf+CD9AUq94ED4peFeqhgvhoEcSL1NhWexFvIto2M7KRStJGu9mdZn8z88t5ZvLL97O/nXZ32wjwi1QCglQ1XAwYhNhBwCAMQiwBYuVwhzAIsQSIlcMdwiDEEiBWDncIgxBLgFg53CEMQiCBos5mNk33aq1PAnqHgPyhhRpXEMPIB2/SrNC/Dhmeas9U9EMNHGwQvAZwXbXlLqJPVNKA8Qvk9pcOOTf/DAJblwn7mhoIBhlkJROIjhFWoZXAgTROX350SHMYfw4LoW+ofOf5lTxGGq3tPkgcjNADeFkZCA4xiMkEYmJUS9AYV4Vgn8lyoqzlbockwQg9tHigC7lTUUI0OcZNkIQY1S1EiP5KPnfPZNhR1nIPxAQGxIvKTEc3ikJFCdHkGLdAShM5iexIhN8z/pdhWYnMEeQ3fzYZdNS13AExhaHnj6GwbSpqgKbHuQHiCEZ17zIt3PL1HMKwH8QxDLtBHMSwF8RRDDtBHMawD8RxDLtAPMCwB8QTDDtAPMKgD+IZBm0QDzHogniKQRPEYwx6IJ5j0AJhjOqFchqX3xnj712L9EEYo+4WUnogpderJDaegRCXAJ1LcGOrrFK+7Zqg9iVT0wEJn0BX+pHW6Er4YZzCSGcPufphjVy7+jmA/YyxNIGWd4gsTQ5C4ApjNE6g9SBDk+FfKCV5Zta501QtTRogvwCsjtkhTmO0fg8painbp0KQbBwQpdGDQjAaZ64tc9LokPcAdsYKSOOjwvzxNJ8sjFV3E5NaD1KaLELgchM11g91HKXlIChNrJMi+xZAwCgEfuytllCa3i2lGoHGekapT6D1HbLw/rc+7ZVaPGEUKiBhHYxC5FpWbRmMQuRqL6M03D7T20MWlzNU3iOFfOr7nkIHJARiFCK3cGu7xXMUWh2yAOMxCk0Qj09fdEE8RaEN4iEKfRDPUOwA8QjFHhBPUOwC8QDFPhDHUewEcRjFXhBHUewGcRDFfhDHUNwAMYkiM0fT+vd+4cdwB8QUCjCm2r4fRt+u2dhPxCSY6BaIKRSNc6oQlBLkGnuqeyAGUAQwWhkIemKnmmCimyBJUQS+qXywIUGusae6C5IEhUFiH1DLT4xxO5hPWcvHmmxEsyi8qSfLO9LsiCgCeFXRX7tR6JqLtK7hQW7vIYvDCp+6F+oxgM5/5DimMuIEzuZmDOcceTm/QMJY7pTb5Ky8AIF+ANsBKEC8g9B3VVbdxOktPyOntwID/QOpDfG+zqAXCkKEX5dH4uU3CAmC+iIYhBgKgzAIsQSIlcMdwiDEEiBWDncIgxBLgFg53CEMQiwBYuVwhzAIsQSIlcMdwiDEEiBWDncIMZDfYh1gg/A9QiUAAAAASUVORK5CYII="}}]);