(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-bff47a90"],{"06c6":function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"a",(function(){return i}));var n={data:function(){return{pageNo:1,pageSizeOpts:[10,15,20,50,100,200,500,1e3,2e3],pageSize:10,total:0}},methods:{correctPageNo:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=Math.ceil((this.total-t)/10);this.pageNo>e&&0!==e&&(this.pageNo=e)}}},i={methods:{confirmationBox:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"提示",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"您确定要删除这几项吗？",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"warning",n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"确定",i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"取消";return this.$confirm(e,t,{confirmButtonText:n,cancelButtonText:i,type:a})}}}},"374a":function(t,e,a){},8974:function(t,e,a){"use strict";a("374a")},"99aa":function(t,e){t.exports="data:image/png;base64,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"},d39e:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-row",{staticStyle:{height:"100%"},attrs:{gutter:20}},[n("el-col",{staticStyle:{"padding-left":"0"},attrs:{span:24}},[n("el-card",[n("el-form",{attrs:{inline:""}},[n("el-form-item",{staticClass:"mgb-0",attrs:{label:"质检名称:"}},[n("el-input",{attrs:{maxlength:"30"},model:{value:t.query.standardName,callback:function(e){t.$set(t.query,"standardName","string"===typeof e?e.trim():e)},expression:"query.standardName"}})],1),t._v(" "),n("el-form-item",{staticClass:"mgb-0",attrs:{label:"质检编号:"}},[n("el-input",{attrs:{maxlength:"30"},model:{value:t.query.standardNumber,callback:function(e){t.$set(t.query,"standardNumber","string"===typeof e?e.trim():e)},expression:"query.standardNumber"}})],1),t._v(" "),n("el-form-item",{staticClass:"mgb-0",attrs:{label:"类型:"}},[n("el-input",{attrs:{maxlength:"30"},model:{value:t.query.type,callback:function(e){t.$set(t.query,"type","string"===typeof e?e.trim():e)},expression:"query.type"}})],1),t._v(" "),n("el-form-item",{staticClass:"mgb-0"},[n("el-button",{attrs:{type:"primary"},on:{click:t.searchData}},[t._v("搜索")]),t._v(" "),n("el-button",{attrs:{type:"info"},on:{click:t.clearData}},[t._v("重置")])],1)],1)],1),t._v(" "),n("el-card",{staticStyle:{"margin-top":"10px"}},[n("div",{staticStyle:{"margin-bottom":"10px"}},[n("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.open_add_edit({type:"新增"})}}},[t._v("新增")]),t._v(" "),n("el-button",{attrs:{type:"primary"}},[t._v("导入Excel")]),t._v(" "),n("el-button",{attrs:{type:"primary"}},[t._v("模板下载")]),t._v(" "),n("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.openAudit({type:"批量提交"})}}},[t._v("提交审核")])],1),t._v(" "),n("div",{staticClass:"tables_form"},[n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.tableLoading,expression:"tableLoading"}],attrs:{"max-height":"600",border:"",data:t.dataList},on:{"selection-change":t.handleSelectionChange}},[n("el-table-column",{attrs:{align:"center",type:"selection",width:"55"}}),t._v(" "),n("el-table-column",{attrs:{label:"序号",align:"center",type:"index",fixed:"",width:"50"}}),t._v(" "),t._l(t.tableHeaderList,(function(e,a){return[n("el-table-column",{key:a,attrs:{label:e.label,prop:e.prop,align:"center","show-overflow-tooltip":"","min-width":"140"},scopedSlots:t._u([{key:"default",fn:function(a){return["status"===e.prop?["启用"==a.row.status?n("span",[t._v(t._s(a.row[e.prop]))]):n("span",{staticStyle:{color:"red"}},[t._v(t._s(a.row[e.prop]))])]:[n("span",[t._v(t._s(a.row[e.prop]))])]]}}],null,!0)})]})),t._v(" "),n("el-table-column",{attrs:{label:t.operation.label,fixed:"right",align:"center","min-width":t.operation.minWidth},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{type:"text"},on:{click:function(a){return t.openStandardDetail({type:"详情",rowData:e.row})}}},[t._v("\n                  详情\n                ")]),t._v(" "),n("el-button",{directives:[{name:"show",rawName:"v-show",value:t.operation.type,expression:"operation.type"}],attrs:{type:"text"},on:{click:function(a){return t.open_add_edit({type:"修改",rowData:e.row})}}},[t._v("\n                  修改\n                ")]),t._v(" "),n("el-button",{directives:[{name:"show",rawName:"v-show",value:t.operation.type,expression:"operation.type"}],attrs:{type:"text"},on:{click:function(a){return t.openAudit({type:"单个提交",rowData:e.row})}}},[t._v("\n                  提交审核\n                ")]),t._v(" "),n("el-button",{directives:[{name:"show",rawName:"v-show",value:t.operation.type&&"否"===e.row.isAbandon,expression:"operation.type && scope.row.isAbandon === '否'"}],staticStyle:{color:"red"},attrs:{type:"text"},on:{click:function(e){return t.isAbandon({type:"废弃"})}}},[t._v("\n                  废弃\n                ")]),t._v(" "),n("el-button",{directives:[{name:"show",rawName:"v-show",value:t.operation.type&&"是"===e.row.isAbandon,expression:"operation.type && scope.row.isAbandon === '是'"}],attrs:{type:"text"},on:{click:function(e){return t.isAbandon({type:"启用"})}}},[t._v("\n                  启用\n                ")]),t._v(" "),n("el-button",{directives:[{name:"show",rawName:"v-show",value:t.operation.type,expression:"operation.type"}],staticStyle:{color:"red"},attrs:{type:"text"},on:{click:function(e){return t.deleteStandard()}}},[t._v("\n                  删除\n                ")])]}}])})],2),t._v(" "),n("div",{staticClass:"expand",on:{click:t.setSelect}},[t.operation.type?n("img",{attrs:{src:a("99aa"),alt:"收缩"}}):n("img",{attrs:{src:a("da0f"),alt:"展开"}})])],1),t._v(" "),n("el-pagination",{staticStyle:{float:"right",margin:"10px 0"},attrs:{"current-page":t.pageNo,"page-sizes":t.pageSizeOpts,"page-size":t.pageSize,layout:"total, sizes, prev, pager, next, jumper","prev-text":"上一页","next-text":"下一页",total:t.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)],1)],1),t._v(" "),t.isShowStandardAddEdit?n("carding-addEdit",{attrs:{"add-edit-data":t.addEditData},on:{close:t.closeStandardAddEdit}}):t._e(),t._v(" "),t.isShowStandardDetail?n("carding-detail",{attrs:{"add-edit-data":t.addEditData},on:{close:t.closeStandardDetail}}):t._e(),t._v(" "),t.isAddPersonnelExamine?n("add-personnel-examine",{ref:"AddPersonnelExamine",attrs:{"add-personnel-examine":t.addPersonnelExaminedata},on:{cli:t.AddPersonnelExamine,close:t.closeAddPersonnelExamine}}):t._e()],1)},i=[],o=a("06c6"),r={name:"CardingStandard",components:{CardingAddEdit:function(t){return a.e("chunk-31fe49b2").then(function(){var e=[a("348b")];t.apply(null,e)}.bind(this)).catch(a.oe)},CardingDetail:function(t){return a.e("chunk-423c0790").then(function(){var e=[a("d5f9")];t.apply(null,e)}.bind(this)).catch(a.oe)}},mixins:[o["b"]],data:function(){return{query:{standardName:null,woolNetStructure:null,standardNumber:null},tableLoading:!1,dataList:[],multipleSelection:[],isAddPersonnelExamine:!1,addPersonnelExaminedata:{recipientIds:[],ids:[],detail:"梳理质检标准",pageType:3,url:"qualityInspectionStandard/CardingStandard"},isShowStandardAddEdit:!1,isShowStandardDetail:!1,operation:{label:"操作",minWidth:"65",type:!1},tableHeaderList:[{label:"质检名称",prop:"standardName"},{label:"质检编号",prop:"standardNumber"},{label:"类型",prop:"type"},{label:"创建人",prop:"creater"},{label:"创建时间",prop:"createTime"},{label:"审核人",prop:"reviewer"},{label:"审核时间",prop:"auditTime"},{label:"单据状态",prop:"state"},{label:"是否废弃",prop:"isAbandon"}],addEditData:{}}},created:function(){this.init()},methods:{init:function(){this.dataList=[{standardName:"1#",standardNumber:"MWJGGY2020527",type:"自检",creater:"张三",createTime:"2021-05-27",reviewer:"王五",auditTime:"2021-05-28",state:"自由",isAbandon:"否"},{standardName:"质检名称",standardNumber:"质检编号",type:"巡检",creater:"创建人",createTime:"创建时间",reviewer:"审核人",auditTime:"审核时间",state:"单据状态",isAbandon:"是"},{standardName:"质检名称",standardNumber:"质检编号",type:"互检",creater:"创建人",createTime:"创建时间",reviewer:"审核人",auditTime:"审核时间",state:"单据状态",isAbandon:"是否废弃"}],this.total=3},handleCurrentChange:function(t){this.pageNo=t},handleSizeChange:function(t){this.pageSize=t},searchData:function(){this.pageNo=1},clearData:function(){this.query.standardName=null,this.query.standardNumber=null,this.query.type=null},open_add_edit:function(t){this.addEditData.type=t.type,this.addEditData.rowData=t.rowData,this.isShowStandardAddEdit=!0},closeStandardAddEdit:function(){this.isShowStandardAddEdit=!1},openStandardDetail:function(t){this.addEditData.type=t.type,this.addEditData.rowData=t.rowData,this.isShowStandardDetail=!0},closeStandardDetail:function(){this.isShowStandardDetail=!1},openAudit:function(t){if("单个提交"===t.type&&this.multipleSelection.push(t.rowData),0===this.multipleSelection.length)return this.$message.warning("请选择需要审核的对象！");this.addPersonnelExaminedata.ids=[],this.addPersonnelExaminedata.pageType=1,this.isAddPersonnelExamine=!0},closeAddPersonnelExamine:function(){this.isAddPersonnelExamine=!1},AddPersonnelExamine:function(){this.isAddPersonnelExamine=!1},deleteStandard:function(){var t=this;this.$confirm("此操作将永久删除该质检标准, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){t.$message({type:"success",message:"删除成功"})})).catch((function(){t.$message({type:"info",message:"已取消删除"})}))},isAbandon:function(t){var e=this;this.$confirm("此操作将".concat(t.type,"该质检标准, 是否继续?"),"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){e.$message({type:"success",message:"".concat(t.type,"成功")})})).catch((function(){e.$message({type:"info",message:"已取消".concat(t.type)})}))},handleSelectionChange:function(t){0===t.length?this.multipleSelection=[]:this.multipleSelection=t},setSelect:function(){this.operation.type?this.operation.minWidth="65":this.operation.minWidth="270",this.operation.type=!this.operation.type}}},s=r,d=(a("8974"),a("2877")),l=Object(d["a"])(s,n,i,!1,null,"7ec4ef47",null);e["default"]=l.exports},da0f:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAEHElEQVR4Xu3dy2sTQRwH8O9M4uNmQb1Um62PgyKCj6pIqY8/QBCkPfSmkkY8FL16Mf+CD9AUq94ED4peFeqhgvhoEcSL1NhWexFvIto2M7KRStJGu9mdZn8z88t5ZvLL97O/nXZ32wjwi1QCglQ1XAwYhNhBwCAMQiwBYuVwhzAIsQSIlcMdwiDEEiBWDncIgxBLgFg53CEMQiCBos5mNk33aq1PAnqHgPyhhRpXEMPIB2/SrNC/Dhmeas9U9EMNHGwQvAZwXbXlLqJPVNKA8Qvk9pcOOTf/DAJblwn7mhoIBhlkJROIjhFWoZXAgTROX350SHMYfw4LoW+ofOf5lTxGGq3tPkgcjNADeFkZCA4xiMkEYmJUS9AYV4Vgn8lyoqzlbockwQg9tHigC7lTUUI0OcZNkIQY1S1EiP5KPnfPZNhR1nIPxAQGxIvKTEc3ikJFCdHkGLdAShM5iexIhN8z/pdhWYnMEeQ3fzYZdNS13AExhaHnj6GwbSpqgKbHuQHiCEZ17zIt3PL1HMKwH8QxDLtBHMSwF8RRDDtBHMawD8RxDLtAPMCwB8QTDDtAPMKgD+IZBm0QDzHogniKQRPEYwx6IJ5j0AJhjOqFchqX3xnj712L9EEYo+4WUnogpderJDaegRCXAJ1LcGOrrFK+7Zqg9iVT0wEJn0BX+pHW6Er4YZzCSGcPufphjVy7+jmA/YyxNIGWd4gsTQ5C4ApjNE6g9SBDk+FfKCV5Zta501QtTRogvwCsjtkhTmO0fg8painbp0KQbBwQpdGDQjAaZ64tc9LokPcAdsYKSOOjwvzxNJ8sjFV3E5NaD1KaLELgchM11g91HKXlIChNrJMi+xZAwCgEfuytllCa3i2lGoHGekapT6D1HbLw/rc+7ZVaPGEUKiBhHYxC5FpWbRmMQuRqL6M03D7T20MWlzNU3iOFfOr7nkIHJARiFCK3cGu7xXMUWh2yAOMxCk0Qj09fdEE8RaEN4iEKfRDPUOwA8QjFHhBPUOwC8QDFPhDHUewEcRjFXhBHUewGcRDFfhDHUNwAMYkiM0fT+vd+4cdwB8QUCjCm2r4fRt+u2dhPxCSY6BaIKRSNc6oQlBLkGnuqeyAGUAQwWhkIemKnmmCimyBJUQS+qXywIUGusae6C5IEhUFiH1DLT4xxO5hPWcvHmmxEsyi8qSfLO9LsiCgCeFXRX7tR6JqLtK7hQW7vIYvDCp+6F+oxgM5/5DimMuIEzuZmDOcceTm/QMJY7pTb5Ky8AIF+ANsBKEC8g9B3VVbdxOktPyOntwID/QOpDfG+zqAXCkKEX5dH4uU3CAmC+iIYhBgKgzAIsQSIlcMdwiDEEiBWDncIgxBLgFg53CEMQiwBYuVwhzAIsQSIlcMdwiDEEiBWDncIMZDfYh1gg/A9QiUAAAAASUVORK5CYII="}}]);