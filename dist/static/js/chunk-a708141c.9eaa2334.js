(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a708141c"],{"0b76":function(t,a,e){"use strict";e("3716")},3716:function(t,a,e){},de7e:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("el-dialog",{attrs:{title:t.title,width:t.width,visible:t.isShowVisible,center:"","close-on-click-modal":!1,"before-close":function(){return t.$emit("close")}},on:{"update:visible":function(a){t.isShowVisible=a}}},[e("el-card",[e("el-form",{ref:"acupunctureTaskData",attrs:{inline:"","label-width":"100px",model:t.acupunctureTaskData}},[e("el-row",[e("el-col",{attrs:{span:12}},[e("el-form-item",{attrs:{label:"毯号:"}},[e("span",[t._v(t._s(t.acupunctureTaskData.blanketNumber))])])],1),t._v(" "),e("el-col",{attrs:{span:12}},[e("el-form-item",{attrs:{label:"产品编码:"}},[e("span",[t._v(t._s(t.acupunctureTaskData.productCode))])])],1),t._v(" "),e("el-col",{attrs:{span:12}},[e("el-form-item",{attrs:{label:"客户名称:"}},[e("span",[t._v(t._s(t.acupunctureTaskData.customer))])])],1),t._v(" "),e("el-col",{attrs:{span:12}},[e("el-form-item",{attrs:{label:"客户简称:"}},[e("span",[t._v(t._s(t.acupunctureTaskData.customerAbbreviation))])])],1),t._v(" "),e("el-col",{attrs:{span:12}},[e("el-form-item",{attrs:{label:"部位:"}},[e("span",[t._v(t._s(t.acupunctureTaskData.position))])])],1),t._v(" "),e("el-col",{attrs:{span:12}},[e("el-form-item",{attrs:{label:"品牌:"}},[e("span",[t._v(t._s(t.acupunctureTaskData.brand))])])],1),t._v(" "),e("el-col",{attrs:{span:12}},[e("el-form-item",{attrs:{label:"规格:"}},[e("span",[t._v(t._s(t.acupunctureTaskData.specifications))])])],1),t._v(" "),e("el-col",{attrs:{span:12}},[e("el-form-item",{attrs:{label:"毛毯理重:"}},[e("span",[t._v(t._s(t.acupunctureTaskData.theoryWeight))])])],1),t._v(" "),e("el-col",{attrs:{span:12}},[e("el-form-item",{attrs:{label:"毛毯品种:"}},[e("span",[t._v(t._s(t.acupunctureTaskData.varieties))])])],1),t._v(" "),e("el-col",{attrs:{span:12}},[e("el-form-item",{attrs:{label:"毛毯交期:"}},[e("span",[t._v(t._s(t.acupunctureTaskData.deliveryDate))])])],1),t._v(" "),e("el-col",{attrs:{span:12}},[e("el-form-item",{attrs:{label:"品号:"}},[e("span",[t._v(t._s(t.acupunctureTaskData.productNumber))])])],1),t._v(" "),e("el-col",{attrs:{span:12}},[e("el-form-item",{attrs:{label:"工艺:"}},[e("span",[t._v(t._s(t.acupunctureTaskData.craft))])])],1),t._v(" "),e("el-col",{attrs:{span:12}},[e("el-form-item",{attrs:{label:"订货长度:"}},[e("span",[t._v(t._s(t.acupunctureTaskData.orderLong))])])],1),t._v(" "),e("el-col",{attrs:{span:12}},[e("el-form-item",{attrs:{label:"订货宽度:"}},[e("span",[t._v(t._s(t.acupunctureTaskData.orderWidth))])])],1),t._v(" "),e("el-col",{attrs:{span:12}},[e("el-form-item",{attrs:{label:"订货克重:"}},[e("span",[t._v(t._s(t.acupunctureTaskData.orderWeight))])])],1),t._v(" "),e("el-col",{attrs:{span:12}},[e("el-form-item",{attrs:{label:"基网状态:"}},[e("span",[t._v(t._s(t.acupunctureTaskData.baseNetworkState))])])],1),t._v(" "),e("el-col",{attrs:{span:12}},[e("el-form-item",{attrs:{label:"毛网状态:"}},[e("span",[t._v(t._s(t.acupunctureTaskData.woolNetState))])])],1),t._v(" "),e("el-col",{attrs:{span:12}},[e("el-form-item",{attrs:{label:"基网位置:"}},[e("span",[t._v(t._s(t.acupunctureTaskData.baseNetworkLocation))])])],1),t._v(" "),e("el-col",{attrs:{span:12}},[e("el-form-item",{attrs:{label:"毛网位置:"}},[e("span",[t._v(t._s(t.acupunctureTaskData.woolNetLocation))])])],1),t._v(" "),e("el-col",{attrs:{span:12}},[e("el-form-item",{attrs:{label:"计划开始时间:"}},[e("span",[t._v(t._s(t.acupunctureTaskData.startDate))])])],1),t._v(" "),e("el-col",{attrs:{span:12}},[e("el-form-item",{attrs:{label:"计划结束时间:"}},[e("span",[t._v(t._s(t.acupunctureTaskData.enDate))])])],1),t._v(" "),e("el-col",{attrs:{span:12}},[e("el-form-item",{attrs:{label:"生产机台:"}},[e("span",[t._v(t._s(t.acupunctureTaskData.equipmentName))])])],1),t._v(" "),e("el-col",{attrs:{span:12}},[e("el-form-item",{attrs:{label:"任务下达时间:"}},[e("span",[t._v(t._s(t.acupunctureTaskData.taskReleaseTime))])])],1),t._v(" "),e("el-col",{attrs:{span:12}},[e("el-form-item",{attrs:{label:"下达人:"}},[e("span",[t._v(t._s(t.acupunctureTaskData.releasePeople))])])],1),t._v(" "),e("el-col",{attrs:{span:12}},[e("el-form-item",{attrs:{label:"生产状态:"}},[e("span",[t._v(t._s(t.acupunctureTaskData.state))])])],1),t._v(" "),e("el-col",{attrs:{span:12}},[e("el-form-item",{attrs:{label:"已生产(米):"}},[e("span",[t._v(t._s(t.acupunctureTaskData.produced))])])],1),t._v(" "),e("el-col",{attrs:{span:12}},[e("el-form-item",{attrs:{label:"湿度:"}},[e("span",[t._v(t._s(t.acupunctureTaskData.humidity))])])],1),t._v(" "),e("el-col",{attrs:{span:12}},[e("el-form-item",{attrs:{label:"温度（℃）:"}},[e("span",[t._v(t._s(t.acupunctureTaskData.temperature))])])],1)],1),t._v(" "),e("el-row",[e("el-col",{attrs:{span:24}},[e("div",{staticClass:"title_line"},[e("span",{staticClass:"title"},[t._v("工艺单")]),t._v(" "),e("i",{staticClass:"line"})])])],1),t._v(" "),e("el-row",[t._l(t.procesSheetList,(function(a,s){return[e("el-col",{key:s,attrs:{span:8}},[e("el-form-item",{attrs:{label:a.menuName,prop:a.menuData}},[e("span",[t._v(t._s(a.menuData))])])],1)]}))],2),t._v(" "),e("el-row",[e("el-col",{attrs:{span:24}},[e("div",{staticClass:"title_line"},[e("span",{staticClass:"title"},[t._v("生产记录")]),t._v(" "),e("i",{staticClass:"line"})])])],1),t._v(" "),e("el-row",[t._l(t.productionRecordList,(function(a,s){return["自评"===a.menuName||"各层毛网实重"===a.menuName||"底网质量评估"===a.menuName||"毛网质量评估"===a.menuName||"毛网位置"===a.menuName||"异常情况"===a.menuName?e("el-col",{key:s,attrs:{span:24}},[e("el-form-item",{attrs:{label:a.menuName,prop:a.menuData}},[e("span",[t._v(t._s(a.menuData))])])],1):e("el-col",{key:s,attrs:{span:8}},[e("el-form-item",{attrs:{label:a.menuName,prop:a.menuData}},[e("span",[t._v(t._s(a.menuData))])])],1)]}))],2),t._v(" "),e("el-row",[e("el-col",{attrs:{span:24}},[e("div",{staticClass:"title_line"},[e("span",{staticClass:"title"},[t._v("互检(异常项)")]),t._v(" "),e("i",{staticClass:"line"})])])],1),t._v(" "),e("el-row",[t._l(t.MutualInspection.MutualInspectionList,(function(a,s){return[e("el-col",{key:s,attrs:{span:8}},[e("el-form-item",{staticClass:"styleRed",attrs:{label:a.menuName,prop:a.menuData}},[e("el-checkbox",{attrs:{disabled:""},model:{value:a.isFlag,callback:function(e){t.$set(a,"isFlag",e)},expression:"item.isFlag"}},[t._v(t._s(a.menuData))])],1)],1)]}))],2),t._v(" "),e("el-row",[e("el-col",{attrs:{span:8}},[e("el-form-item",{attrs:{label:"处理结果:"}},[e("span",[t._v(t._s(t.MutualInspection.testResults))])])],1),t._v(" "),e("el-col",{attrs:{span:8}},[e("el-form-item",{attrs:{label:"处理方式:"}},[e("span",[t._v(t._s(t.MutualInspection.handleWay))])])],1),t._v(" "),e("el-col",{attrs:{span:24}},[e("el-form-item",{attrs:{label:"图片:"}},t._l(t.MutualInspection.img,(function(t,a){return e("img",{key:a,attrs:{src:t,alt:""}})})),0)],1),t._v(" "),e("el-col",{attrs:{span:24}},[e("el-form-item",{attrs:{label:"备注:"}},[e("span",[t._v(t._s(t.MutualInspection.remarks))])])],1)],1),t._v(" "),e("el-row",[e("el-col",{attrs:{span:24}},[e("div",{staticClass:"title_line"},[e("span",{staticClass:"title"},[t._v("自检(异常项)")]),t._v(" "),e("i",{staticClass:"line"})])])],1),t._v(" "),e("el-row",[t._l(t.MutualInspection.MutualInspectionList,(function(a,s){return[e("el-col",{key:s,attrs:{span:8}},[e("el-form-item",{staticClass:"styleRed",attrs:{label:a.menuName,prop:a.menuData}},[e("el-checkbox",{attrs:{disabled:""},model:{value:a.isFlag,callback:function(e){t.$set(a,"isFlag",e)},expression:"item.isFlag"}},[t._v(t._s(a.menuData))])],1)],1)]}))],2),t._v(" "),e("el-row",[e("el-col",{attrs:{span:8}},[e("el-form-item",{attrs:{label:"处理结果:"}},[e("span",[t._v(t._s(t.MutualInspection.testResults))])])],1),t._v(" "),e("el-col",{attrs:{span:8}},[e("el-form-item",{attrs:{label:"处理方式:"}},[e("span",[t._v(t._s(t.MutualInspection.handleWay))])])],1),t._v(" "),e("el-col",{attrs:{span:24}},[e("el-form-item",{attrs:{label:"图片:"}},t._l(t.MutualInspection.img,(function(t,a){return e("img",{key:a,attrs:{src:t,alt:""}})})),0)],1),t._v(" "),e("el-col",{attrs:{span:24}},[e("el-form-item",{attrs:{label:"备注:"}},[e("span",[t._v(t._s(t.MutualInspection.remarks))])])],1)],1),t._v(" "),e("el-row",[e("el-col",{attrs:{span:24}},[e("div",{staticClass:"title_line"},[e("span",{staticClass:"title"},[t._v("巡检(异常项)")]),t._v(" "),e("i",{staticClass:"line"})])])],1),t._v(" "),e("el-row",[t._l(t.MutualInspection.MutualInspectionList,(function(a,s){return[e("el-col",{key:s,attrs:{span:8}},[e("el-form-item",{staticClass:"styleRed",attrs:{label:a.menuName,prop:a.menuData}},[e("el-checkbox",{attrs:{disabled:""},model:{value:a.isFlag,callback:function(e){t.$set(a,"isFlag",e)},expression:"item.isFlag"}},[t._v(t._s(a.menuData))])],1)],1)]}))],2),t._v(" "),e("el-row",[e("el-col",{attrs:{span:8}},[e("el-form-item",{attrs:{label:"处理结果:"}},[e("span",[t._v(t._s(t.MutualInspection.testResults))])])],1),t._v(" "),e("el-col",{attrs:{span:8}},[e("el-form-item",{attrs:{label:"处理方式:"}},[e("span",[t._v(t._s(t.MutualInspection.handleWay))])])],1),t._v(" "),e("el-col",{attrs:{span:24}},[e("el-form-item",{attrs:{label:"图片:"}},t._l(t.MutualInspection.img,(function(t,a){return e("img",{key:a,attrs:{src:t,alt:""}})})),0)],1),t._v(" "),e("el-col",{attrs:{span:24}},[e("el-form-item",{attrs:{label:"备注:"}},[e("span",[t._v(t._s(t.MutualInspection.remarks))])])],1)],1),t._v(" "),e("el-row",[e("el-col",{attrs:{span:24}},[e("div",{staticClass:"title_line"},[e("span",{staticClass:"title"},[t._v("技术校验")]),t._v(" "),e("i",{staticClass:"line"})])])],1),t._v(" "),e("el-row",[e("el-col",{attrs:{span:8}},[e("el-form-item",{attrs:{label:"处理结果:"}},[e("span",[t._v(t._s(t.MutualInspection.testResults))])])],1),t._v(" "),e("el-col",{attrs:{span:8}},[e("el-form-item",{attrs:{label:"处理方式:"}},[e("span",[t._v(t._s(t.MutualInspection.handleWay))])])],1),t._v(" "),e("el-col",{attrs:{span:24}},[e("el-form-item",{attrs:{label:"图片:"}},t._l(t.MutualInspection.img,(function(t,a){return e("img",{key:a,attrs:{src:t,alt:""}})})),0)],1),t._v(" "),e("el-col",{attrs:{span:24}},[e("el-form-item",{attrs:{label:"备注:"}},[e("span",[t._v(t._s(t.MutualInspection.remarks))])])],1)],1),t._v(" "),e("el-row",[e("el-col",{attrs:{span:24}},[e("div",{staticClass:"title_line"},[e("span",{staticClass:"title"},[t._v("停机/开机")]),t._v(" "),e("i",{staticClass:"line"})])])],1),t._v(" "),t._l(t.startingUpList,(function(a,s){return e("el-row",{key:s},[e("el-col",{attrs:{span:8}},[e("el-form-item",{attrs:{label:"停机时间:"}},[e("span",[t._v(t._s(a.downtime))])])],1),t._v(" "),e("el-col",{attrs:{span:8}},[e("el-form-item",{attrs:{label:"开机时间:"}},[e("span",[t._v(t._s(a.startupTime))])])],1),t._v(" "),a.causeOfShutdown?e("el-col",{attrs:{span:24}},[e("el-form-item",{attrs:{label:"停机原因:"}},[e("span",[t._v(t._s(a.causeOfShutdown))])])],1):t._e()],1)})),t._v(" "),e("el-row",[e("el-col",{attrs:{span:24}},[e("div",{staticClass:"title_line"},[e("span",{staticClass:"title"},[t._v("基网位置")]),t._v(" "),e("i",{staticClass:"line"})])])],1),t._v(" "),t._l(t.baseNetLocationList,(function(a,s){return e("el-row",{key:"baseNet"+s},[e("el-col",{attrs:{span:8}},[e("el-form-item",{attrs:{label:"基网编号:"}},[e("span",[t._v(t._s(a.baseNetworkNumber))])])],1),t._v(" "),e("el-col",{attrs:{span:8}},[e("el-form-item",{attrs:{label:"位置:"}},[e("span",[t._v(t._s(a.position))])])],1),t._v(" "),e("el-col",{attrs:{span:24}},[e("el-form-item",{attrs:{label:"备注:"}},[e("span",[t._v(t._s(a.remarks))])])],1)],1)})),t._v(" "),e("el-row",[e("el-col",{attrs:{span:24}},[e("div",{staticClass:"title_line"},[e("span",{staticClass:"title"},[t._v("毛网位置")]),t._v(" "),e("i",{staticClass:"line"})])])],1),t._v(" "),t._l(t.woolNetLocationList,(function(a,s){return e("el-row",{key:"woolNet"+s},[e("el-col",{attrs:{span:8}},[e("el-form-item",{attrs:{label:"基网编号:"}},[e("span",[t._v(t._s(a.baseNetworkNumber))])])],1),t._v(" "),e("el-col",{attrs:{span:8}},[e("el-form-item",{attrs:{label:"位置:"}},[e("span",[t._v(t._s(a.position))])])],1),t._v(" "),e("el-col",{attrs:{span:24}},[e("el-form-item",{attrs:{label:"备注:"}},[e("span",[t._v(t._s(a.remarks))])])],1)],1)}))],2)],1),t._v(" "),e("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e("el-button",{on:{click:function(a){return t.$emit("close")}}},[t._v("取消")])],1)],1)},x=[],l={name:"AcupunctureTaskDetail",props:{width:{type:String,default:"50vw"},addEditData:{type:Object}},data:function(){return{title:"针刺任务详情",isShowVisible:!0,acupunctureTaskData:{},procesSheetList:[{menuName:"每圈深度",menuData:"xx"},{menuName:"每圈步速",menuData:"xx"},{menuName:"张力标准",menuData:"xx"},{menuName:"毛网工艺",menuData:"xx"},{menuName:"铺网宽度",menuData:"xx"},{menuName:"拉伸长度",menuData:"xx"}],productionRecordList:[{menuName:"拉伸长度",menuData:"xx"},{menuName:"铺网宽度",menuData:"xx"},{menuName:"张力执行",menuData:"xx"},{menuName:"最后一圈长",menuData:"xx"},{menuName:"最后一圈宽",menuData:"xx"},{menuName:"深度(每圈)",menuData:"xx"},{menuName:"步速(每圈)",menuData:"xx"},{menuName:"各层毛网实重",menuData:"xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"},{menuName:"底网质量评估",menuData:"xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"},{menuName:"底网质量评估",menuData:"xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"},{menuName:"异常情况",menuData:"xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"},{menuName:"毛网位置",menuData:"xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"},{menuName:"自评",menuData:"xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"}],MutualInspection:{testResults:"xx",handleWay:"xx",img:[],remarks:"xxxxxxxxxx",MutualInspectionList:[{menuName:"基网匹配度",isFlag:!0},{menuName:"基网张力匀度",isFlag:!0},{menuName:"基网瑕点",isFlag:!0}]},startingUpList:[{downtime:"2021-07-04",startupTime:"2021-07-05",causeOfShutdown:"XXXXXXXX"},{downtime:"2021-07-04",startupTime:"2021-07-05",causeOfShutdown:"XXXXXXXX"}],baseNetLocationList:[{baseNetworkNumber:"xx",position:"xx",remarks:"xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"},{baseNetworkNumber:"xxx",position:"xxx",remarks:"xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"}],woolNetLocationList:[{baseNetworkNumber:"xx",position:"xx",remarks:"xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"},{baseNetworkNumber:"xxx",position:"xxx",remarks:"xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"}]}},created:function(){this.acupunctureTaskData=this.addEditData.rowData},methods:{}},n=l,r=(e("0b76"),e("2877")),i=Object(r["a"])(n,s,x,!1,null,"01207208",null);a["default"]=i.exports}}]);