(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e8f9bbde"],{"06c6":function(e,t,a){"use strict";a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return o}));var n={data:function(){return{pageNo:1,pageSizeOpts:[10,15,20,50,100,200,500,1e3,2e3],pageSize:10,total:0}},methods:{correctPageNo:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=Math.ceil((this.total-e)/10);this.pageNo>t&&0!==t&&(this.pageNo=t)}}},o={methods:{confirmationBox:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"提示",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"您确定要删除这几项吗？",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"warning",n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"确定",o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"取消";return this.$confirm(t,e,{confirmButtonText:n,cancelButtonText:o,type:a})}}}},1:function(e,t){},2:function(e,t){},3:function(e,t){},3587:function(e,t,a){"use strict";a("87aa")},"4bf8d":function(e,t,a){"use strict";a.d(t,"a",(function(){return p}));a("6b54"),a("ac6a"),a("34ef");var n=a("21a6"),o=a("1146"),i=a.n(o);function r(e,t){t&&(e+=1462);var a=Date.parse(e);return(a-new Date(Date.UTC(1899,11,30)))/864e5}function s(e,t){for(var a={},n={s:{c:1e7,r:1e7},e:{c:0,r:0}},o=0;o!=e.length;++o)for(var s=0;s!=e[o].length;++s){n.s.r>o&&(n.s.r=o),n.s.c>s&&(n.s.c=s),n.e.r<o&&(n.e.r=o),n.e.c<s&&(n.e.c=s);var c={v:e[o][s]};if(null!=c.v){var l=i.a.utils.encode_cell({c:s,r:o});"number"===typeof c.v?c.t="n":"boolean"===typeof c.v?c.t="b":c.v instanceof Date?(c.t="n",c.z=i.a.SSF._table[14],c.v=r(c.v)):c.t="s",a[l]=c}}return n.s.c<1e7&&(a["!ref"]=i.a.utils.encode_range(n)),a}function c(){if(!(this instanceof c))return new c;this.SheetNames=[],this.Sheets={}}function l(e){for(var t=new ArrayBuffer(e.length),a=new Uint8Array(t),n=0;n!=e.length;++n)a[n]=255&e.charCodeAt(n);return t}function u(e,t){return t.map((function(t){return e.map((function(e){return t[e]}))}))}function p(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.multiHeader,a=void 0===t?[]:t,o=e.header,r=e.filterVal,p=e.dataList,h=e.filename,d=e.merges,m=void 0===d?[]:d,w=e.autoWidth,v=void 0===w||w,f=e.bookType,b=void 0===f?"xlsx":f,g=new Date,y=g.getFullYear(),A=g.getMonth()+1,k=g.getDate(),S=y+(A<10?"0":"")+A+(k<10?"0":"")+k,D=u(r,p);h=(h||"excel-list")+S,o&&D.unshift(o);for(var N=a.length-1;N>-1;N--)D.unshift(a[N]);var x="SheetJS",C=new c,I=s(D);if(m.length>0&&(I["!merges"]||(I["!merges"]=[]),m.forEach((function(e){I["!merges"].push(i.a.utils.decode_range(e))}))),v){for(var T=D.map((function(e){return e.map((function(e){return null==e?{wch:10}:e.toString().charCodeAt(0)>255?{wch:2*e.toString().length}:{wch:e.toString().length}}))})),E=T[0],P=1;P<T.length;P++)for(var B=0;B<T[P].length;B++)E[B]["wch"]<T[P][B]["wch"]&&(E[B]["wch"]=T[P][B]["wch"]);I["!cols"]=E}C.SheetNames.push(x),C.Sheets[x]=I;var _=i.a.write(C,{bookType:b,bookSST:!1,type:"binary"});Object(n["saveAs"])(new Blob([l(_)],{type:"application/octet-stream"}),"".concat(h,".").concat(b))}},"87aa":function(e,t,a){},"99aa":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAHf0lEQVR4Xu2dW4wcxRWG/1Ozawiy5DXISInY7rHBUgBHSBDxkghZJgqOERiTaG0HBTDe6Vlk4oAJF6EkLCQSF3HHCTszyzo3IuwgrgISIhBOgDxAhBAiUSSIp8fYSQwSBoEdZqfPQbW7Doibd6tmpqp7u577P33q/+pUq6eragh588oB8iqbPBnkQDwbBDmQHIhnDniWTl4hORDPHPAsnbxCciCeOeBZOnmF5EA8c8CzdPIKyYF8xIGf75mrevd/H8AAgGMA7BPg+QKrza2h/j945lVX0nFXIbX6sUroUQALP7WnhFHeFVyIYWp1xQlPbuIGyJYdfaqp/gbCooP4sI37gu9igBJP/Op4Gk6AqGp8PYArptU7wW95fnD+bIHiCEgjBiSYFhB9kcgWjsL1IJJpa1J6YfeBVF6bp6hn74z90s+UwSDKOpTuAxn79wLVau6ZMZAJAW3mUv/GLEPpPhAAqha/CcERRlAEt3E5vMRImwKRGyDVeARA2dwfuomj4DJzvb9KJ0AwtqtftVovAZhvbg39jKPgx+Z6P5VugADoqdWXsdBjAA4xtoYwzKXwGmO9h0JnQLQXhUr9dCG6H8AcC2+u4ii8zkLvldQpkAko1foqAd1rB4Uu5Si4xStnDZNxDmQCSi3+jgg0lIJhP7TsYo7C2y30Xki9ADIJpbFWRH5jAUUgtIHLwV1eOGuYhDdAJp8p8XlCuNsGCpGUklJRx0hl8wrI1DPlAgGN6tdyQ0eZQOuTKPilod6pzLTTHU1aVRtDgPzCAkpCIucm5eLvOppoB4J7CUT3U1XijSDcZgcFa5Ny+PsO+NaxkN4CmYBSbWwC5GaL3o8TyZqkVNTvOqloXgOZqpQrQbB58WuSyNlJuag/F3vfvAcyWSnxTwDY/ETSVKxWpmHhRCqATE1fPwXkRxZDfL8irGyVwj9ZxOi4NDVApirlBgCXW7iyj6FWIOrfbhGjo9JUAZmEUr8FIJsPVO+xYDnK4TMdddYweOqAQIRUbecdgFxk2Gcte4dZlmOo+FeLGB2Rpg+ItkFDqTZGQIgsXHmbmb6BoeAFixhtl6YTyP+hxHeDaJ2FK2+xklMxWHzRIkZbpekFom3YJgW1t7EFwPcsXHmTRS1Duf9lixhtk6YbyAEobzXuAWG1uSvyBjMtxVD4d/MY7VGmH8gUFNrb2ErAt41tIfyHVbIU6xf90zhGG4TZADIB5ZU5tHfuNgJWWviyi5VaisH+Vy1iWEmzA+RDKA8QsMLClVdYek9G+Uv7LGIYS7MFRNuwZcehNK4eIuCbxq5ALuOoeJO53lyZPSDai8ruw4jGHyFgmZE1ghe5HJ5opLUUZRPIFBRF4/pZ8EUDjxLeHczBMLGB1kqSWSCqGtv8ECncF/S62CSUSSCqGutvJ/obimn7B0fhcaZiG13mgLThYxYguIbL4bCNsabaTAFR1VjvW9T7F23a69zLX8G6hTPf5WVz1yltZoCoSuMSkNiu793NnKzA0CK9VcJJywSQNiwZ2g+gypRch9Ki/zohkZUKUZW4DIJez2s6uPYpkjNapeJTLkEcuLdpJ3zIXW9lsF12+r4SOrNVDp7wokMWo8p5/m1YmN0kklVJqah3cXnTUlkhhVpjtYjcY7FKvklEA0kpeMgbEml9hrRhc09ChDVJKbzPNxg6n1RVSKHSOEtItlpsf0uI6JykFOgYXrbUACnU6itE6AE7GLggKYW/9pJEmqasnmrjNIbo+d50C7UQZDCJimM+w0jFlNUzEp/KCg8DOMzQTAFhiEth1VDfVZnfU9ZI4xSl5HErGMAPOArv7KqrFjfzF8ho/DXF0OcuzjXun9AmLge3GusdCP0EMrrzZMWs357nGXsiuILL4Y3GekdC/4DU4pOU4EkrGMDVHIXXOvLU6rZ+ARn51wlKFfSPfIdb9OpajsKrLfROpf4AGW0sUcxPAbTAwpEbOAqvtNA7l/oBZPIM36cBHGnuiNzKUXGTud4PpXsgIzsXK8V6i5nJcp1JFwl38GBwcRbOYnQLpNI4WpHoyjjKYnxWuBRcmAUYbt/U79pRVIXC9hmd3/sJajTGpf7BrMBwB6T2+lGKk+3TOGr8swuH8CueF6x3sZjNopoPKu3+lFV5obegFjwngq8eNLvPukCwlecH52QNhpMKUbU4gqBiCkOA+6QvWJNFGE6AFKrxXwT4ugkQgTwofe+txsDxTRN9GjRdn7JUtb7H5OVPgMek791VWYbhpEJMjhkX4I/yv+ZKbFz8fhpGuU2OXa+QmU5ZQnhSuPdMV1vMbMw10XYdiKrVN0Bo83SSJcKfE+791myB4WTK0nsAVVM9D8KSz4NCwLPJ+BeWY8OR704HXlau6XqFTBhXqy9Uk+e+f/nTjBTgCZHWAMpHv50Vo6fbDzdAdHb6L/N69v8QJGsBWgxA//HXSyBUeVcwNtv+ne0AMHdAPjpkhqVntgL4eOX4AWS69TwLrsuBeAY5B5ID8cwBz9LJKyQH4pkDnqWTV0gOxDMHPEsnr5AciGcOeJZOXiE5EM8c8CydvEJyIJ454Fk6eYV4BuQDydIxgxNE/UAAAAAASUVORK5CYII="},a985:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("el-row",{staticStyle:{height:"100%"},attrs:{gutter:20}},[n("el-col",{staticStyle:{"padding-left":"0"},attrs:{span:24}},[n("el-card",[n("el-form",{attrs:{inline:""}},[n("el-form-item",{staticClass:"mgb-0",attrs:{label:"毯号:"}},[n("el-input",{attrs:{maxlength:"30"},model:{value:e.query.blanketNumber,callback:function(t){e.$set(e.query,"blanketNumber","string"===typeof t?t.trim():t)},expression:"query.blanketNumber"}})],1),e._v(" "),n("el-form-item",{staticClass:"mgb-0",attrs:{label:"机台:"}},[n("el-input",{attrs:{maxlength:"30"},model:{value:e.query.equipmentName,callback:function(t){e.$set(e.query,"equipmentName","string"===typeof t?t.trim():t)},expression:"query.equipmentName"}})],1),e._v(" "),n("el-form-item",{staticClass:"mgb-0",attrs:{label:"计划生产时间:"}},[n("el-date-picker",{attrs:{type:"daterange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:e.query.date,callback:function(t){e.$set(e.query,"date",t)},expression:"query.date"}})],1),e._v(" "),n("el-form-item",{staticClass:"mgb-0",attrs:{label:"状态:"}},[n("el-select",{attrs:{filterable:"",placeholder:"请选择状态"},model:{value:e.query.state,callback:function(t){e.$set(e.query,"state",t)},expression:"query.state"}},[n("el-option",{attrs:{label:"自由",value:"自由"}}),e._v(" "),n("el-option",{attrs:{label:"待互检",value:"待互检"}}),e._v(" "),n("el-option",{attrs:{label:"待开工",value:"待开工"}}),e._v(" "),n("el-option",{attrs:{label:"报技术",value:"报技术"}}),e._v(" "),n("el-option",{attrs:{label:"已开工",value:"已开工"}}),e._v(" "),n("el-option",{attrs:{label:"停机中",value:"停机中"}})],1)],1),e._v(" "),n("el-form-item",{staticClass:"mgb-0"},[n("el-button",{attrs:{type:"primary"},on:{click:e.searchData}},[e._v("搜索")]),e._v(" "),n("el-button",{attrs:{type:"info"},on:{click:e.clearData}},[e._v("重置")])],1)],1)],1),e._v(" "),n("el-card",{staticStyle:{"margin-top":"10px"}},[n("div",{staticClass:"table_form"},[n("div",{staticClass:"table_left"},[n("el-button",{attrs:{type:"primary"}},[e._v("导入Excel")])],1),e._v(" "),n("div",[n("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.exportExcel()}}},[e._v("导出")])],1)]),e._v(" "),n("div",{staticClass:"tables_form"},[n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.tableLoading,expression:"tableLoading"}],attrs:{"max-height":"600",border:"",data:e.dataList},on:{"selection-change":e.handleSelectionChange}},[n("el-table-column",{attrs:{align:"center",type:"selection",width:"55"}}),e._v(" "),n("el-table-column",{attrs:{label:"序号",align:"center",type:"index",fixed:"",width:"50"}}),e._v(" "),e._l(e.tableHeaderList,(function(t,a){return[n("el-table-column",{key:a,attrs:{label:t.label,prop:t.prop,align:"center","show-overflow-tooltip":"","min-width":"140"},scopedSlots:e._u([{key:"default",fn:function(a){return[[n("span",[e._v(e._s(a.row[t.prop]))])]]}}],null,!0)})]})),e._v(" "),n("el-table-column",{attrs:{label:e.operation.label,fixed:"right",align:"center","min-width":e.operation.minWidth},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{attrs:{type:"text"},on:{click:function(a){return e.implement({type:"详情",rowData:t.row})}}},[e._v("\n                  详情\n                ")]),e._v(" "),n("el-button",{directives:[{name:"show",rawName:"v-show",value:e.operation.type,expression:"operation.type"}],attrs:{type:"text"},on:{click:function(a){return e.implement({type:"原料确认",rowData:t.row})}}},[e._v("\n                  原料确认\n                ")]),e._v(" "),n("el-button",{directives:[{name:"show",rawName:"v-show",value:e.operation.type,expression:"operation.type"}],attrs:{type:"text"},on:{click:function(a){return e.implement({type:"互检",rowData:t.row})}}},[e._v("\n                  互检\n                ")]),e._v(" "),n("el-button",{directives:[{name:"show",rawName:"v-show",value:e.operation.type,expression:"operation.type"}],attrs:{type:"text"},on:{click:function(a){return e.start_end_shutdown({type:"开工",rowData:t.row})}}},[e._v("\n                  开工\n                ")]),e._v(" "),n("el-button",{directives:[{name:"show",rawName:"v-show",value:e.operation.type,expression:"operation.type"}],attrs:{type:"text"},on:{click:function(a){return e.implement({type:"上基网",rowData:t.row})}}},[e._v("\n                  上基网\n                ")]),e._v(" "),n("el-button",{directives:[{name:"show",rawName:"v-show",value:e.operation.type,expression:"operation.type"}],attrs:{type:"text"},on:{click:function(a){return e.implement({type:"上毛网",rowData:t.row})}}},[e._v("\n                  上毛网\n                ")]),e._v(" "),n("el-button",{directives:[{name:"show",rawName:"v-show",value:e.operation.type,expression:"operation.type"}],attrs:{type:"text"},on:{click:function(a){return e.start_end_shutdown({type:"完工",rowData:t.row})}}},[e._v("\n                  完工\n                ")]),e._v(" "),n("el-button",{directives:[{name:"show",rawName:"v-show",value:e.operation.type,expression:"operation.type"}],attrs:{type:"text"},on:{click:function(a){return e.implement({type:"自检",rowData:t.row})}}},[e._v("\n                  自检\n                ")]),e._v(" "),n("el-button",{directives:[{name:"show",rawName:"v-show",value:e.operation.type,expression:"operation.type"}],attrs:{type:"text"},on:{click:function(a){return e.implement({type:"巡检",rowData:t.row})}}},[e._v("\n                  巡检\n                ")]),e._v(" "),n("el-button",{directives:[{name:"show",rawName:"v-show",value:e.operation.type,expression:"operation.type"}],attrs:{type:"text"},on:{click:function(a){return e.implement({type:"过程记录",rowData:t.row})}}},[e._v("\n                  过程记录\n                ")]),e._v(" "),n("el-button",{directives:[{name:"show",rawName:"v-show",value:e.operation.type,expression:"operation.type"}],attrs:{type:"text"},on:{click:function(a){return e.implement({type:"报工",rowData:t.row})}}},[e._v("\n                  报工\n                ")]),e._v(" "),n("el-button",{directives:[{name:"show",rawName:"v-show",value:e.operation.type,expression:"operation.type"}],staticStyle:{color:"red"},attrs:{type:"text"},on:{click:function(a){return e.start_end_shutdown({type:"停机",rowData:t.row})}}},[e._v("\n                  停机\n                ")]),e._v(" "),n("el-button",{directives:[{name:"show",rawName:"v-show",value:e.operation.type,expression:"operation.type"}],attrs:{type:"text"},on:{click:function(a){return e.implement({type:"开机",rowData:t.row})}}},[e._v("\n                  开机\n                ")]),e._v(" "),n("el-button",{directives:[{name:"show",rawName:"v-show",value:e.operation.type,expression:"operation.type"}],attrs:{type:"text"},on:{click:function(a){return e.implement({type:"技术校验",rowData:t.row})}}},[e._v("\n                  技术校验\n                ")])]}}])})],2),e._v(" "),n("div",{staticClass:"expand",on:{click:e.setSelect}},[e.operation.type?n("img",{attrs:{src:a("99aa"),alt:"收缩"}}):n("img",{attrs:{src:a("da0f"),alt:"展开"}})])],1),e._v(" "),n("el-pagination",{staticStyle:{float:"right",margin:"10px 0"},attrs:{"current-page":e.pageNo,"page-sizes":e.pageSizeOpts,"page-size":e.pageSize,layout:"total, sizes, prev, pager, next, jumper","prev-text":"上一页","next-text":"下一页",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)],1),e._v(" "),n("el-col",{staticStyle:{"padding-left":"0"},attrs:{span:24}},[n("el-card",{staticStyle:{"margin-top":"40px"}},[n("el-tabs",{attrs:{type:"card"},on:{"tab-click":e.handleClick},model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[n("el-tab-pane",{attrs:{label:"工艺明细",name:"工艺明细"}},e._l(e.processDetails,(function(t,a){return n("span",{key:a,staticClass:"spanItem"},[e._v(e._s(t.menuName)+"："+e._s(t.menuData))])})),0)],1)],1)],1)],1),e._v(" "),e.isShowAcupunctureTaskDetail?n("acupuncture-task-detail",{attrs:{"add-edit-data":e.addEditData},on:{close:e.closeAcupunctureTaskPopup}}):e._e(),e._v(" "),e.isShowMutualInspect?n("acupuncture-task-mutual-inspect",{attrs:{"add-edit-data":e.addEditData},on:{close:e.closeAcupunctureTaskPopup}}):e._e(),e._v(" "),e.isShowSelfTest?n("acupuncture-task-self-test",{attrs:{"add-edit-data":e.addEditData},on:{close:e.closeAcupunctureTaskPopup}}):e._e(),e._v(" "),e.isShowOnSiteInspection?n("acupuncture-task-on-site-inspection",{attrs:{"add-edit-data":e.addEditData},on:{close:e.closeAcupunctureTaskPopup}}):e._e(),e._v(" "),e.isShowProcessRecord?n("acupuncture-task-process-record",{attrs:{"add-edit-data":e.addEditData},on:{close:e.closeAcupunctureTaskPopup}}):e._e(),e._v(" "),e.isShowReportWork?n("acupuncture-task-report-work",{attrs:{"add-edit-data":e.addEditData},on:{close:e.closeAcupunctureTaskPopup}}):e._e(),e._v(" "),e.isShowPowerOn?n("acupuncture-task-power-on",{attrs:{"add-edit-data":e.addEditData},on:{close:e.closeAcupunctureTaskPopup}}):e._e(),e._v(" "),e.isShowTechnicalVerification?n("acupuncture-task-technical-verification",{attrs:{"add-edit-data":e.addEditData},on:{close:e.closeAcupunctureTaskPopup}}):e._e(),e._v(" "),e.isShowRawMaterial?n("acupuncture-task-raw-material",{attrs:{"add-edit-data":e.addEditData},on:{close:e.closeAcupunctureTaskPopup}}):e._e(),e._v(" "),e.isShowUpperBaseNetwork?n("acupuncture-task-upper-base-network",{attrs:{"add-edit-data":e.addEditData},on:{close:e.closeAcupunctureTaskPopup}}):e._e(),e._v(" "),e.isShowUpperWoolNet?n("acupuncture-task-upper-wool-net",{attrs:{"add-edit-data":e.addEditData},on:{close:e.closeAcupunctureTaskPopup}}):e._e()],1)},o=[],i=a("06c6"),r=a("4bf8d"),s={name:"AcupunctureTask",components:{AcupunctureTaskDetail:function(e){return a.e("chunk-a708141c").then(function(){var t=[a("de7e")];e.apply(null,t)}.bind(this)).catch(a.oe)},AcupunctureTaskMutualInspect:function(e){return a.e("chunk-b6be145a").then(function(){var t=[a("7b50")];e.apply(null,t)}.bind(this)).catch(a.oe)},AcupunctureTaskSelfTest:function(e){return a.e("chunk-46b4781d").then(function(){var t=[a("e342")];e.apply(null,t)}.bind(this)).catch(a.oe)},AcupunctureTaskOnSiteInspection:function(e){return a.e("chunk-093bf3b2").then(function(){var t=[a("0b24")];e.apply(null,t)}.bind(this)).catch(a.oe)},AcupunctureTaskProcessRecord:function(e){return a.e("chunk-2d0d30d1").then(function(){var t=[a("5ab1")];e.apply(null,t)}.bind(this)).catch(a.oe)},AcupunctureTaskReportWork:function(e){return a.e("chunk-46a904e2").then(function(){var t=[a("8413")];e.apply(null,t)}.bind(this)).catch(a.oe)},AcupunctureTaskPowerOn:function(e){return a.e("chunk-d6c81e12").then(function(){var t=[a("6e27")];e.apply(null,t)}.bind(this)).catch(a.oe)},AcupunctureTaskTechnicalVerification:function(e){return a.e("chunk-a7476c50").then(function(){var t=[a("6510")];e.apply(null,t)}.bind(this)).catch(a.oe)},AcupunctureTaskRawMaterial:function(e){return a.e("chunk-2d0d2f81").then(function(){var t=[a("5b86")];e.apply(null,t)}.bind(this)).catch(a.oe)},AcupunctureTaskUpperBaseNetwork:function(e){return a.e("chunk-2d0b32f5").then(function(){var t=[a("26fa")];e.apply(null,t)}.bind(this)).catch(a.oe)},AcupunctureTaskUpperWoolNet:function(e){return a.e("chunk-2d0e6875").then(function(){var t=[a("98aa")];e.apply(null,t)}.bind(this)).catch(a.oe)}},mixins:[i["b"]],data:function(){return{query:{blanketNumber:null,equipmentName:null,state:null,date:null},tableLoading:!1,activeName:"工艺明细",dataList:[],processDetails:[{menuName:"每圈深度",menuData:"xxx"},{menuName:"每圈步速",menuData:"xxx"},{menuName:"张力标准",menuData:"xxx"},{menuName:"毛网工艺",menuData:"xxx"},{menuName:"拉伸长度",menuData:"xxx"}],multipleSelection:[],isShowAcupunctureTaskDetail:!1,isShowMutualInspect:!1,isShowSelfTest:!1,isShowOnSiteInspection:!1,isShowProcessRecord:!1,isShowReportWork:!1,isShowPowerOn:!1,isShowTechnicalVerification:!1,isShowRawMaterial:!1,isShowUpperBaseNetwork:!1,isShowUpperWoolNet:!1,operation:{label:"操作",minWidth:"65",type:!1},tableHeaderList:[{label:"毯号",prop:"blanketNumber"},{label:"产品编码",prop:"productCode"},{label:"客户名称",prop:"customer"},{label:"客户简称",prop:"customerAbbreviation"},{label:"部位",prop:"position"},{label:"品牌",prop:"brand"},{label:"规格",prop:"specifications"},{label:"毛毯理重",prop:"theoryWeight"},{label:"毛毯品种",prop:"varieties"},{label:"毛毯交期",prop:"deliveryDate"},{label:"品号",prop:"productNumber"},{label:"工艺",prop:"craft"},{label:"计划开始时间",prop:"startDate"},{label:"计划结束时间",prop:"enDate"},{label:"生产机台",prop:"equipmentName"},{label:"任务下达时间",prop:"taskReleaseTime"},{label:"下达人",prop:"releasePeople"},{label:"生产状态",prop:"state"},{label:"已生产(米)",prop:"produced"},{label:"温度（℃）",prop:"temperature"},{label:"湿度",prop:"humidity"}],addEditData:{}}},created:function(){this.init()},methods:{init:function(){this.dataList=[{blanketNumber:"TANHAO1#",productCode:"CHANPINBIANMA13",customer:"KEHUMINGCHEN1#",customerAbbreviation:"KU",position:"BUWEI",brand:"PINPAI",specifications:"500*500",theoryWeight:"500",varieties:"PINZHONG",deliveryDate:"2025-05-05",productNumber:"PINHAO",craft:"1#",startDate:"2021-07-05",enDate:"2021-09-05",equipmentName:"23#",taskReleaseTime:"2021-08-02",releasePeople:"ZHANGSAN",state:"ZHENGZAISHENGC",produced:"123",humidity:"56",temperature:"26",orderLong:"订货长度",orderWidth:"订货宽度",orderWeight:"订货克重",baseNetworkState:"基网状态",woolNetState:"毛网状态",baseNetworkLocation:"基网位置",woolNetLocation:"毛网位置"},{blanketNumber:"毯号",productCode:"产品编码",customer:"客户名称",customerAbbreviation:"客户简称",position:"部位",brand:"品牌",specifications:"规格",theoryWeight:"毛毯理重",varieties:"毛毯品种",deliveryDate:"毛毯交期",productNumber:"品号",craft:"工艺",startDate:"计划开始时间",enDate:"计划结束时间",equipmentName:"生产机台",taskReleaseTime:"任务下达时间",releasePeople:"下达人",state:"生产状态",produced:"已生产(米)",humidity:"湿度",temperature:"温度（℃）",orderLong:"订货长度",orderWidth:"订货宽度",orderWeight:"订货克重",baseNetworkState:"基网状态",woolNetState:"毛网状态",baseNetworkLocation:"基网位置",woolNetLocation:"毛网位置"}],this.total=2},handleCurrentChange:function(e){this.pageNo=e},handleSizeChange:function(e){this.pageSize=e},searchData:function(){this.pageNo=1},clearData:function(){this.query.blanketNumber=null,this.query.equipmentName=null,this.query.state=null,this.query.date=null},handleClick:function(e,t){console.log(e,t)},implement:function(e){this.addEditData.type=e.type,this.addEditData.rowData=e.rowData,"详情"===e.type?this.isShowAcupunctureTaskDetail=!0:"互检"===e.type?this.isShowMutualInspect=!0:"自检"===e.type?this.isShowSelfTest=!0:"巡检"===e.type?this.isShowOnSiteInspection=!0:"过程记录"===e.type?this.isShowProcessRecord=!0:"报工"===e.type?this.isShowReportWork=!0:"开机"===e.type?this.isShowPowerOn=!0:"技术校验"===e.type?this.isShowTechnicalVerification=!0:"原料确认"===e.type?this.isShowRawMaterial=!0:"上基网"===e.type?this.isShowUpperBaseNetwork=!0:"上毛网"===e.type&&(this.isShowUpperWoolNet=!0)},closeAcupunctureTaskPopup:function(){this.isShowAcupunctureTaskDetail=!1,this.isShowMutualInspect=!1,this.isShowSelfTest=!1,this.isShowOnSiteInspection=!1,this.isShowProcessRecord=!1,this.isShowReportWork=!1,this.isShowPowerOn=!1,this.isShowTechnicalVerification=!1,this.isShowRawMaterial=!1,this.isShowUpperBaseNetwork=!1,this.isShowUpperWoolNet=!1},start_end_shutdown:function(e){var t=this;this.$confirm("对该任务执行".concat(e.type,"处理, 是否继续?"),"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){t.$message({type:"success",message:"已".concat(e.type)})})).catch((function(){t.$message({type:"info",message:"已取消".concat(e.type)})}))},handleSelectionChange:function(e){0===e.length?this.multipleSelection=[]:this.multipleSelection=e},setSelect:function(){this.operation.type?this.operation.minWidth="65":this.operation.minWidth="270",this.operation.type=!this.operation.type},exportExcel:function(){var e=[];e=0!==this.multipleSelection.length?this.multipleSelection:this.dataList;var t=[["毯号","产品编码","客户名称","客户简称","部位","品牌","规格","毛毯理重","毛毯品种","毛毯交期","品号","工艺","计划开始时间","计划结束时间","生产机台","任务下达时间","下达人","生产状态","已生产(米)","湿度","温度（℃）"]],a=["blanketNumber","productCode","customer","customerAbbreviation","position","brand","specifications","theoryWeight","varieties","deliveryDate","productNumber","craft","startDate","enDate","equipmentName","taskReleaseTime","releasePeople","state","produced","humidity","temperature"];Object(r["a"])({multiHeader:t,filterVal:a,dataList:e,filename:"针刺任务"})}}},c=s,l=(a("3587"),a("2877")),u=Object(l["a"])(c,n,o,!1,null,"77ceecf2",null);t["default"]=u.exports},da0f:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAEHElEQVR4Xu3dy2sTQRwH8O9M4uNmQb1Um62PgyKCj6pIqY8/QBCkPfSmkkY8FL16Mf+CD9AUq94ED4peFeqhgvhoEcSL1NhWexFvIto2M7KRStJGu9mdZn8z88t5ZvLL97O/nXZ32wjwi1QCglQ1XAwYhNhBwCAMQiwBYuVwhzAIsQSIlcMdwiDEEiBWDncIgxBLgFg53CEMQiCBos5mNk33aq1PAnqHgPyhhRpXEMPIB2/SrNC/Dhmeas9U9EMNHGwQvAZwXbXlLqJPVNKA8Qvk9pcOOTf/DAJblwn7mhoIBhlkJROIjhFWoZXAgTROX350SHMYfw4LoW+ofOf5lTxGGq3tPkgcjNADeFkZCA4xiMkEYmJUS9AYV4Vgn8lyoqzlbockwQg9tHigC7lTUUI0OcZNkIQY1S1EiP5KPnfPZNhR1nIPxAQGxIvKTEc3ikJFCdHkGLdAShM5iexIhN8z/pdhWYnMEeQ3fzYZdNS13AExhaHnj6GwbSpqgKbHuQHiCEZ17zIt3PL1HMKwH8QxDLtBHMSwF8RRDDtBHMawD8RxDLtAPMCwB8QTDDtAPMKgD+IZBm0QDzHogniKQRPEYwx6IJ5j0AJhjOqFchqX3xnj712L9EEYo+4WUnogpderJDaegRCXAJ1LcGOrrFK+7Zqg9iVT0wEJn0BX+pHW6Er4YZzCSGcPufphjVy7+jmA/YyxNIGWd4gsTQ5C4ApjNE6g9SBDk+FfKCV5Zta501QtTRogvwCsjtkhTmO0fg8painbp0KQbBwQpdGDQjAaZ64tc9LokPcAdsYKSOOjwvzxNJ8sjFV3E5NaD1KaLELgchM11g91HKXlIChNrJMi+xZAwCgEfuytllCa3i2lGoHGekapT6D1HbLw/rc+7ZVaPGEUKiBhHYxC5FpWbRmMQuRqL6M03D7T20MWlzNU3iOFfOr7nkIHJARiFCK3cGu7xXMUWh2yAOMxCk0Qj09fdEE8RaEN4iEKfRDPUOwA8QjFHhBPUOwC8QDFPhDHUewEcRjFXhBHUewGcRDFfhDHUNwAMYkiM0fT+vd+4cdwB8QUCjCm2r4fRt+u2dhPxCSY6BaIKRSNc6oQlBLkGnuqeyAGUAQwWhkIemKnmmCimyBJUQS+qXywIUGusae6C5IEhUFiH1DLT4xxO5hPWcvHmmxEsyi8qSfLO9LsiCgCeFXRX7tR6JqLtK7hQW7vIYvDCp+6F+oxgM5/5DimMuIEzuZmDOcceTm/QMJY7pTb5Ky8AIF+ANsBKEC8g9B3VVbdxOktPyOntwID/QOpDfG+zqAXCkKEX5dH4uU3CAmC+iIYhBgKgzAIsQSIlcMdwiDEEiBWDncIgxBLgFg53CEMQiwBYuVwhzAIsQSIlcMdwiDEEiBWDncIMZDfYh1gg/A9QiUAAAAASUVORK5CYII="}}]);