(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-301878cd"],{"153f":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"d-flex"},[a("catalogueOfProducts",{attrs:{componentName:t.componentName}}),t.showStatus?a("pageMain",{staticClass:"flex-1",on:{changeShowStatus:t.changeShowStatus}}):t._e(),t.showStatus?t._e():a("pageOtherMain",{staticClass:"flex-1",on:{changeShowStatus:t.changeShowStatus}})],1)},i=[],n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"treeCon"},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.iconProductState,expression:"iconProductState"}],staticClass:"tree",on:{mouseover:t.mouseoverTree,mouseout:t.mouseoutTree}},[t._m(0),a("el-tree",{directives:[{name:"loading",rawName:"v-loading",value:t.proCateLoading,expression:"proCateLoading"}],staticClass:"tree1",staticStyle:{"padding-left":"5px"},attrs:{data:t.treeData,props:t.defaultProps,"highlight-current":!0,"expand-on-click-node":!1,"default-expand-all":!1},on:{"node-click":t.handleNodeClick}})],1)])},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"treeTitle d-flex fs-xl jc-start"},[a("i",{staticClass:"iconfont icon_mulu fs-xl"}),a("div",{staticStyle:{"margin-left":".5em"}},[t._v("产品分类目录")])])}],l=(a("96cf"),a("1da1")),r={props:["componentName"],data:function(){return{proCateLoading:!1,iconProductState:!0,treeData:[],defaultProps:{children:"subcate",label:"cate_name"},cate_id:""}},methods:{handleNodeClick:function(t){if(this.cate_id==t.id)return!1;this.cate_id=t.id,"OptionalCharges"==this.componentName&&this.$store.commit("CHANGE_CATE_ID",t.id),"CommodityManagement"==this.componentName&&this.$store.commit("CHANGE_SHOP_PRODUCT_CATE_ID",t.id),"OrderManagement"==this.componentName&&this.$store.commit("CHANGE_ORDER_CATEID",t.id)},clickIconProductState:function(){this.iconProductState=!0},mouseoutTree:function(){this.iconProductState=!0},mouseoverTree:function(){this.iconProductState=!0},initData:function(){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function e(){var a,s,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.proCateLoading=!0,e.next=3,t.api.leftmenu();case 3:if(a=e.sent,"200"==a.data.code){for(s in a.data.data)a.data.data.hasOwnProperty(s)&&(i=a.data.data[s],t.treeData.push(i));t.proCateLoading=!1}case 5:case"end":return e.stop()}}),e)})))()}},beforeMount:function(){this.initData()},created:function(){this.$store.commit("CHANGE_CATE_ID",0)}},c=r,u=(a("b095"),a("2877")),d=Object(u["a"])(c,n,o,!1,null,"3a3b57f0",null),p=d.exports,m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mainCon"},[a("div",{staticClass:"OptionalChargesMainTop"},[a("div",{staticClass:"d-flex jc-between ai-center"},[a("div",[a("el-button-group",[a("el-button",{class:t.isSelectedList1?"leftLi":"leftLi selectedListLi",attrs:{type:"primary",size:"mini",icon:"el-icon-picture-outline"},on:{click:function(e){return t.changeListStatus(!1)}}},[t._v("图片列表")]),a("el-button",{staticStyle:{background:"#fff !important",color:"#000"},attrs:{type:"primary",size:"mini",icon:"el-icon-s-unfold"},on:{click:function(e){return t.changeListStatus(!0)}}},[t._v("列表显示")])],1),a("el-button",{attrs:{type:"success",icon:"el-icon-refresh",size:"mini"},on:{click:t.handleClickRefresh}},[t._v("刷新")])],1),a("div",{staticClass:"d-flex ai-center",staticStyle:{"min-width":"26em"}},[a("el-input",{attrs:{placeholder:"搜索：名称，编码等..."},model:{value:t.product_name,callback:function(e){t.product_name=e},expression:"product_name"}}),a("el-button",{staticStyle:{"margin-right":"1em"},attrs:{type:"primary",icon:"el-icon-search",size:"mini"},on:{click:t.handleClickSearch}},[t._v("搜索")])],1),a("div",{staticClass:"pageCon"},[a("el-pagination",{attrs:{"current-page":t.currentPage,"page-sizes":[50,100,200],"page-size":100,layout:"total, sizes, prev, pager, next, jumper",total:t.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)])]),a("div",{staticClass:"mainBottom"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],ref:"multipleTable",staticStyle:{width:"100%","padding-top":"10px","margin-left":"10px","padding-left":"10px"},attrs:{data:t.tableData,"tooltip-effect":"dark",border:"",stripe:"",height:"84vh"},on:{"selection-change":t.handleSelectionChange,"cell-dblclick":t.handledbClickRow}},[a("el-table-column",{attrs:{type:"index","header-align":"center",width:"50",align:"center"}}),a("el-table-column",{attrs:{"header-align":"center",label:"图片",width:"80",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.product_imgs.length>0?a("span",[a("el-tooltip",{attrs:{placement:"right-start",effect:"light"}},[a("div",{attrs:{slot:"content"},slot:"content"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.bigImgSrc,expression:"bigImgSrc"}],staticClass:"bigImgCon",attrs:{alt:"",srcset:""}})]),t._l(e.row.product_imgs,(function(s,i){return 0==i?a("span",{key:i},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:s,expression:"item"}],ref:"user_image",refInFor:!0,attrs:{alt:"",srcset:""},on:{mouseover:function(a){return t.mouseover(e.row.product_imgs)},mousewheel:function(a){return t.wheel(e.row.product_imgs)}}})]):t._e()}))],2)],1):t._e()]}}])}),a("el-table-column",{attrs:{"header-align":"center",label:"名称","show-overflow-tooltip":"",sortable:"",align:"center","min-width":"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("p",[t._v(" "+t._s(e.row.name)+" ")]),a("span",[t._v("货号："+t._s(e.row.product_code))])]}}])}),a("el-table-column",{attrs:{"header-align":"center",width:"100",label:"操作",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{icon:"iconfont icon_design-tool-quill-",type:"primary",size:"mini"},on:{click:function(a){return t.addThisProduct(e.row.id)}}},[t._v(" 设计")])]}}])}),a("el-table-column",{attrs:{"header-align":"center",label:"颜色规格","min-width":"150",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{staticStyle:{"font-weight":"550"}},[t._v("颜色：")]),t._l(e.row.product_colors,(function(s,i){return a("span",{key:i},[a("span",[t._v(" "+t._s(s.color_name)+" "),i!==e.row.product_colors.length-1?a("i",[t._v("、")]):t._e()])])})),a("br"),a("span",{staticStyle:{"font-weight":"550"}},[t._v("规格：")]),t._l(e.row.product_size,(function(s,i){return a("span",{key:i+"wo"},[a("span",[t._v(" "+t._s(s.size_name)+" "),i!==e.row.product_size.length-1?a("i",[t._v("、")]):t._e()])])}))]}}])}),a("el-table-column",{attrs:{"header-align":"center",label:"价格（元）","show-overflow-tooltip":"","min-width":"80",align:"center",prop:"msrp"}}),a("el-table-column",{attrs:{"header-align":"center",label:"产品重量","show-overflow-tooltip":"","min-width":"80",align:"center",prop:"weight"}}),a("el-table-column",{attrs:{"header-align":"center",prop:"update_at",label:"更新时间","min-width":"80",sortable:"","show-overflow-tooltip":"",align:"center"}})],1)],1),a("dialogCom",{attrs:{dialogValue:t.passValue},on:{closeDialog:t.closeDialog}})],1)},h=[],g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-dialog",{staticClass:"addProTip",attrs:{title:"提示",visible:t.passValue.showState,width:"70%","before-close":t.handleClose},on:{"update:visible":function(e){return t.$set(t.passValue,"showState",e)}}},[a("el-tabs",{attrs:{type:"card"},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[a("el-tab-pane",{attrs:{label:"基础信息",name:"first"}},[t.passValue.showState?a("el-form",{ref:"form",attrs:{model:t.passValue,"label-width":"120px",size:"mini",disabled:""}},[a("el-form-item",{attrs:{label:"名称"}},[a("el-input",{model:{value:t.passValue.val.name,callback:function(e){t.$set(t.passValue.val,"name",e)},expression:"passValue.val.name"}})],1),a("el-form-item",{attrs:{label:"标签"}},[a("el-input",{model:{value:t.passValue.val.name,callback:function(e){t.$set(t.passValue.val,"name",e)},expression:"passValue.val.name"}})],1),a("el-form-item",{attrs:{label:"描述"}},[a("el-input",{attrs:{type:"textarea"},model:{value:t.passValue.val.description,callback:function(e){t.$set(t.passValue.val,"description",e)},expression:"passValue.val.description"}})],1),a("el-form-item",{attrs:{label:"货号"}},[a("el-input",{model:{value:t.passValue.val.product_code,callback:function(e){t.$set(t.passValue.val,"product_code",e)},expression:"passValue.val.product_code"}})],1),a("el-form-item",{attrs:{label:"库存"}},[a("el-input",{model:{value:t.passValue.val.inventory,callback:function(e){t.$set(t.passValue.val,"inventory",e)},expression:"passValue.val.inventory"}})],1),a("el-form-item",{staticClass:"marginBottm5 formBottomConRight",attrs:{label:"MSRP："}},[a("el-input",{attrs:{autocomplete:"off"},model:{value:t.passValue.val.msrp,callback:function(e){t.$set(t.passValue.val,"msrp",e)},expression:"passValue.val.msrp"}},[a("template",{slot:"append"},[t._v("美元")])],2)],1),a("el-form-item",{staticClass:"marginBottm5 formBottomConRight",attrs:{label:"重量："}},[a("el-input",{attrs:{autocomplete:"off"},model:{value:t.passValue.val.product_weight,callback:function(e){t.$set(t.passValue.val,"product_weight",e)},expression:"passValue.val.product_weight"}},[a("template",{slot:"append"},[t._v("克")])],2)],1),a("el-form-item",{staticClass:"marginBottm5 formBottomConRight",attrs:{label:"运费："}},[a("el-input",{attrs:{autocomplete:"off"},model:{value:t.passValue.val.freight,callback:function(e){t.$set(t.passValue.val,"freight",e)},expression:"passValue.val.freight"}},[a("template",{slot:"append"},[t._v("人民币")])],2)],1),a("el-form-item",{staticClass:"marginBottm5 formBottomConRight textLeft",attrs:{label:"发货周期："}},[a("el-input-number",{attrs:{"controls-position":"right"},model:{value:t.passValue.val.delivery_end,callback:function(e){t.$set(t.passValue.val,"delivery_end",e)},expression:"passValue.val.delivery_end"}}),t._v("~ "),a("el-input-number",{attrs:{"controls-position":"right"},model:{value:t.passValue.val.delivery_start,callback:function(e){t.$set(t.passValue.val,"delivery_start",e)},expression:"passValue.val.delivery_start"}}),t._v("天 ")],1)],1):t._e()],1),a("el-tab-pane",{attrs:{label:"颜色/规格",name:"second"}},[a("div",{staticClass:"colorCon"},[a("el-table",{staticClass:"positonNone",staticStyle:{width:"100%"},attrs:{data:t.passValue.val.product_color,"default-sort":{prop:"date",order:"descending"}}},[a("el-table-column",{attrs:{type:"index","header-align":"center",width:"50"}}),a("el-table-column",{attrs:{label:"图片","min-width":"70"},scopedSlots:t._u([{key:"default",fn:function(e){return[t.passValue.val.product_imgs.length>0?a("span",{attrs:{effect:"light"}},[a("el-tooltip",{attrs:{placement:"right-start"}},[a("div",{attrs:{slot:"content"},slot:"content"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.bigImgSrc,expression:"bigImgSrc"}],staticClass:"bigImgCon",attrs:{alt:"",srcset:""}})]),a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.passValue.val.product_imgs[0].path,expression:"passValue.val.product_imgs[0].path"}],ref:"user_image",staticClass:"ImgCon",attrs:{alt:"",srcset:""},on:{mouseover:function(e){return t.mouseover(t.passValue.val.product_imgs)},mousewheel:function(e){return t.wheel(t.passValue.val.product_imgs)}}})])],1):t._e()]}}])}),a("el-table-column",{attrs:{prop:"color_name",label:"颜色","min-width":"70"}}),a("el-table-column",{attrs:{label:"主色","min-width":"70"},scopedSlots:t._u([{key:"default",fn:function(e){return[1==e.row.main?a("i",{staticClass:"el-icon-check colorGreen"}):t._e(),1==!e.row.main?a("i",{staticClass:"el-icon-close colorRed"}):t._e()]}}])}),a("el-table-column",{attrs:{label:"上架","min-width":"70"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"上架",placement:"top"}},[1==e.row.status?a("i",{staticClass:"el-icon-check colorGreen"}):t._e()]),a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"未上架",placement:"top"}},[1==!e.row.status?a("i",{staticClass:"el-icon-close colorRed"}):t._e()])]}}])})],1)],1),a("div",{staticClass:"specCon"},[a("el-table",{staticClass:"positonNone",staticStyle:{width:"100%"},attrs:{data:t.passValue.val.product_size,"default-sort":{prop:"date",order:"descending"}}},[a("el-table-column",{attrs:{type:"index","header-align":"center",width:"50"}}),a("el-table-column",{attrs:{prop:"size",label:"规格"}}),a("el-table-column",{attrs:{prop:"putaway_status",label:"上架"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"上架",placement:"top"}},[1==e.row.putaway_status?a("i",{staticClass:"el-icon-check colorGreen"}):t._e()]),a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"未上架",placement:"top"}},[1==!e.row.putaway_status?a("i",{staticClass:"el-icon-close colorRed"}):t._e()])]}}])})],1)],1)]),a("el-tab-pane",{attrs:{label:"SKU详情",name:"third"}},[a("el-table",{staticClass:"positonNone",staticStyle:{width:"100%"},attrs:{data:t.passValue.val.product_size,"default-sort":{prop:"color",order:"descending"}}},[a("el-table-column",{attrs:{prop:"sku",label:"SKU编码"}}),a("el-table-column",{attrs:{prop:"color",sortable:"",label:"颜色"}}),a("el-table-column",{attrs:{prop:"size",sortable:"",label:"规格"}}),a("el-table-column",{attrs:{prop:"putaway_status",label:"上架"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"上架",placement:"top"}},[1==e.row.putaway_status?a("i",{staticClass:"el-icon-check colorGreen"}):t._e()]),a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"未上架",placement:"top"}},[1==!e.row.putaway_status?a("i",{staticClass:"el-icon-close colorRed"}):t._e()])]}}])})],1)],1)],1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"})],1)],1)},f=[],v=0,_={props:["dialogValue"],data:function(){return{bigImgSrc:"",activeName:"first",passValue:{showState:!1,val:{}}}},methods:{wheel:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:event;(e.wheelDelta>0||e.detail>0)&&(t.length>=v&&v>=0&&(this.bigImgSrc=t[v].path,v--),-1==v&&(v=3)),(e.wheelDelta<0||e.detail<0)&&(t.length>v&&(this.bigImgSrc=t[v].path,v++),t.length==v&&(v=0))},mouseover:function(t){this.bigImgSrc=t[0].path},handleClose:function(){this.$emit("closeDialog",!1)},clickAddThisShop:function(){var t=this;this.postRequest("/v1/productaddgoods?product_id=".concat(this.passValue.val.id)).then((function(e){200==e.data.code&&(t.$message({message:"添加成功，请前往商品管理查看",type:"success"}),t.handleClose())}))}},watch:{dialogValue:{deep:!0,handler:function(t){this.passValue=t}}}},b=_,C=(a("4b80"),Object(u["a"])(b,g,f,!1,null,"330edefb",null)),S=C.exports,w=0,y={data:function(){return{product_name:"",isSelectedList1:!0,isSelectedList2:!1,currentPage:1,pagerCount:5,total:null,pageSize:50,loading:!0,tableData:[],bigImgSrc:"",count:null,multipleSelection:[],passValue:{showState:!1,val:{}}}},methods:{handleClickSearch:function(){this.$store.commit("SEARCH_VALUE",this.product_name)},changeListStatus:function(t){1==t?(this.isSelectedList1=!0,this.isSelectedList2=!1):(this.isSelectedList2=!0,this.isSelectedList1=!1),this.show=t,localStorage.setItem("showStatus",t),this.$emit("changeShowStatus",this.show)},handleSizeChange:function(t){this.$store.commit("CHANGE_CATE_LIMIT",t),this.initData()},handleCurrentChange:function(t){this.currentPage=t,this.$store.commit("CHANGE_CATE_PAGE",t),this.initData()},handleSelectionChange:function(t){for(var e in this.multipleSelection=[],t)if(t.hasOwnProperty(e)){var a=t[e];this.multipleSelection.push(a.id)}},wheel:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:event;(e.wheelDelta>0||e.detail>0)&&(t.length>=w&&w>=0&&(this.bigImgSrc=t[w],w--),-1==w&&(w=3)),(e.wheelDelta<0||e.detail<0)&&(t.length>w&&(this.bigImgSrc=t[w],w++),t.length==w&&(w=0))},mouseover:function(t){this.bigImgSrc=t[0]},handledbClickRow:function(t){this.passValue.showState=!0,this.passValue.val=t},closeDialog:function(t){this.passValue.showState=t},addThisProduct:function(t){this.$router.push({name:"DesignPage",params:{productid:t}})},handleClickRefresh:function(){this.initData()},initData:function(){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.loading=!0,e.next=3,t.api.productList({cate_id:"".concat(t.$store.state.productCate.cate_id),page:"".concat(t.currentPage),limit:"".concat(t.pageSize),product_name:"".concat(t.$store.state.productSearchVal)});case 3:a=e.sent,"200"==a.data.code&&(t.tableData=a.data.data.data,t.count=a.data.data.count,t.total=a.data.data.total,t.loading=!1);case 5:case"end":return e.stop()}}),e)})))()}},computed:{counts:function(){return this.$store.state.productCate.cate_id},searchValue:function(){return this.$store.state.productSearchVal}},watch:{counts:function(t,e){sessionStorage.setItem("oldCate_id",t),this.initData()},searchValue:function(t,e){this.initData()}},beforeMount:function(){sessionStorage.getItem("cate_id")&&this.$store.commit("CHANGE_CATE_ID",sessionStorage.getItem("cate_id")),this.initData()},components:{dialogCom:S}},k=y,x=(a("f9d9"),Object(u["a"])(k,m,h,!1,null,"51deae44",null)),V=x.exports,I=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"mainCon pageOtherPage"},[s("div",{staticClass:"OptionalChargesMainTop"},[s("div",{staticClass:"d-flex jc-between ai-center"},[s("div",[s("el-button-group",[s("el-button",{class:t.isSelectedList1?"leftLi":"leftLi selectedListLi",attrs:{type:"primary",size:"mini",icon:"el-icon-picture-outline"},on:{click:function(e){return t.changeListStatus(!1)}}},[t._v("图片列表")]),s("el-button",{staticStyle:{background:"#fff !important",color:"#000"},attrs:{type:"primary",size:"mini",icon:"el-icon-s-unfold"},on:{click:function(e){return t.changeListStatus(!0)}}},[t._v("列表显示")])],1),s("el-button",{attrs:{type:"success",icon:"el-icon-refresh",size:"mini"},on:{click:t.handleClickRefresh}},[t._v("刷新")])],1),s("div",{staticClass:"d-flex ai-center",staticStyle:{"min-width":"26em"}},[s("el-input",{attrs:{placeholder:"搜索：名称，编码等..."},model:{value:t.product_name,callback:function(e){t.product_name=e},expression:"product_name"}}),s("el-button",{staticStyle:{"margin-right":"1em"},attrs:{type:"primary",icon:"el-icon-search",size:"mini"},on:{click:t.handleClickSearch}},[t._v("搜索")])],1),s("div",{staticClass:"pageCon"},[s("el-pagination",{attrs:{"current-page":t.currentPage,"page-sizes":[50,100,200],"page-size":100,layout:"total, sizes, prev, pager, next, jumper",total:t.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)])]),s("div",{directives:[{name:"loading",rawName:"v-loading",value:t.Loading,expression:"Loading"}],staticClass:"mainBottom"},[s("el-checkbox-group",{staticClass:"imgConSyle",on:{change:t.handleCheckedimagesListChange},model:{value:t.selectedId,callback:function(e){t.selectedId=e},expression:"selectedId"}},[s("el-row",{staticStyle:{"min-width":"1300px"}},t._l(t.tableData,(function(e,i){return s("el-col",{key:i,staticClass:"imgInfo",attrs:{span:4}},[s("div",{staticStyle:{"margin-bottom":"10px",height:"25px","line-height":"25px"}},[s("el-checkbox",{key:e.id,attrs:{label:e.id}},[t._v(t._s(null))]),s("el-button",{staticStyle:{float:"right"},attrs:{type:"primary",icon:"iconfont icon_design-tool-quill-",size:"mini"},on:{click:function(a){return t.addThisProduct(e.id)}}},[t._v("设计")])],1),s("div",{staticStyle:{"text-align":"center"}},[e.product_imgs[0]?s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.product_imgs[0],expression:"item.product_imgs[0]"}],staticClass:"imgShow",staticStyle:{border:"1px solid #d9d9d9"},attrs:{alt:"",srcset:""}}):t._e(),e.product_imgs[0]?t._e():s("img",{staticStyle:{border:"1px solid #d9d9d9"},attrs:{src:a("9b34"),title:"图片无法显示或缺少图片",alt:"",srcset:""}})]),s("ul",{staticClass:"imgLists d-flex",staticStyle:{height:"6rem"}},t._l(e.product_imgs,(function(e,a){return s("li",{key:a},[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e,expression:"item1"}],attrs:{alt:""},on:{mouseenter:function(a){return t.changeImg(i,e)}}})])})),0),s("div",{staticClass:"bottomStyle"},[s("span",{staticClass:"productName"},[t._v(t._s(e.name))]),s("div",{staticStyle:{color:"#606060","font-size":"18px"}},[t._v(" 价格：￥"),s("span",{staticStyle:{color:"#ffb500"}},[t._v(t._s(e.msrp))]),t._v("元 ")]),s("p",[t._v(" 规格： "),s("span",{staticClass:"priceStyle"},[s("el-tooltip",{staticClass:"item",attrs:{effect:"dark",placement:"top-start"}},[t._l(e.product_size,(function(e,a){return s("span",{key:a},[t._v(t._s(e.size_name))])})),t._l(e.product_size,(function(a,i){return s("span",{key:i},[t._v(" "+t._s(a.size_name)+" "),i!==e.product_size.length-1?s("i",[t._v(",")]):t._e()])}))],2)],1)]),s("p",[t._v(" 颜色： "),s("el-tooltip",{staticClass:"item",attrs:{effect:"dark",placement:"top-start"}},[s("span",{staticClass:"priceStyle"},t._l(e.product_colors,(function(e,a){return s("span",{key:a},[t._v(t._s(e.color_name))])})),0),s("span",{staticClass:"priceStyle"},t._l(e.product_colors,(function(a,i){return s("span",{key:i},[t._v(" "+t._s(a.color_name)+" "),i!==e.product_colors.length-1?s("i",[t._v(",")]):t._e()])})),0)])],1)])])})),1)],1)],1),s("dialogCom",{attrs:{dialogValue:t.passValue},on:{closeDialog:t.closeDialog}})],1)},D=[],z=(a("d81d"),{data:function(){return{selectedId:[],product_name:"",Loading:!1,show:!0,isSelectedList1:!1,isSelectedList2:!0,pageSize:50,pagerCount:5,currentPage:1,total:0,count:0,checkedimagesList:[],multipleSelection:[],tableData:[],bigImg:[],passValue:{showState:!1,val:{}}}},methods:{changeImg:function(t,e){document.getElementsByClassName("imgShow")[t].src=e},handleClickSearch:function(){this.$store.commit("SEARCH_VALUE",this.product_name)},changeListStatus:function(t){1==t?(this.isSelectedList1=!0,this.isSelectedList2=!1):(this.isSelectedList2=!0,this.isSelectedList1=!1),this.show=t,localStorage.setItem("showStatus",t),this.$emit("changeShowStatus",this.show)},changeImage:function(t,e){this.tableData[t].mainImgPath=e},leftClick:function(t){var e=this.tableData[t].mainImgIndex-1;this.$set(this.tableData[t],"mainImgIndex",e)},rightClick:function(t){var e=this.tableData[t].mainImgIndex+1;this.$set(this.tableData[t],"mainImgIndex",e)},clickDetail:function(t){this.passValue.showState=!0,this.passValue.val=t},closeDialog:function(t){this.passValue.showState=t},addThisProduct:function(t){this.$router.push({name:"Design",params:{productid:t}})},handleCheckedimagesListChange:function(t){var e=t.map((function(t,e,a){return t.id}),this);this.selectedId=e},handleClickRefresh:function(){this.initData()},handleSizeChange:function(t){this.$store.commit("CHANGE_CATE_LIMIT",t),this.initData()},handleCurrentChange:function(t){this.$store.commit("CHANGE_CATE_PAGE",t),this.currentPage=t,this.initData()},initData:function(){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function e(){var a,s,i,n,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.Loading=!0,e.next=3,t.api.productList({cate_id:"".concat(t.$store.state.productCate.cate_id),page:"".concat(t.currentPage),limit:"".concat(t.pageSize),product_name:"".concat(t.$store.state.productSearchVal)});case 3:for(a=e.sent,t.total=a.data.data.total,t.tableData=a.data.data.data,s=0;s<t.tableData.length;s++)t.$set(t.tableData[s],"mainImgPath",t.tableData[s].product_imgs[0]),t.$set(t.tableData[s],"mainImgIndex",0);for(t.count=a.data.data.count,i=0;i<t.tableData.length;i++)for(n=t.tableData[i],o=0;o<n.product_imgs.length;o++)1==n.product_imgs[o].master&&t.bigImg.push(n.product_imgs[o].texture);t.Loading=!1;case 10:case"end":return e.stop()}}),e)})))()}},created:function(){this.$store.commit("CHANGE_IMGLIST_CATE_ID",0)},computed:{counts:function(){return this.$store.state.productCate.cate_id},searchValue:function(){return this.$store.state.productSearchVal}},watch:{counts:function(t,e){sessionStorage.setItem("oldCate_id",t),this.initData()},searchValue:function(t,e){this.initData()}},beforeMount:function(){sessionStorage.getItem("cate_id")&&this.$store.commit("CHANGE_CATE_ID",sessionStorage.getItem("cate_id")),this.initData()},components:{dialogCom:S}}),L=z,$=(a("66f8"),Object(u["a"])(L,I,D,!1,null,"6b149590",null)),N=$.exports,E={data:function(){return{showStatus:!0,componentName:"OptionalCharges"}},methods:{changeShowStatus:function(t){this.showStatus=t}},created:function(){"true"==localStorage.getItem("showStatus")&&(this.showStatus=!0),"false"==localStorage.getItem("showStatus")&&(this.showStatus=!1)},destroyed:function(){var t=sessionStorage.getItem("userId");sessionStorage.setItem("selectUId",t)},components:{catalogueOfProducts:p,pageMain:V,pageOtherMain:N}},P=E,A=Object(u["a"])(P,s,i,!1,null,null,null);e["default"]=A.exports},"4b80":function(t,e,a){"use strict";var s=a("5465"),i=a.n(s);i.a},5465:function(t,e,a){},5786:function(t,e,a){},"64d1":function(t,e,a){},"66f8":function(t,e,a){"use strict";var s=a("8fcc"),i=a.n(s);i.a},"8fcc":function(t,e,a){},"9b34":function(t,e,a){t.exports=a.p+"static/img/err.44d22ef9.png"},b095:function(t,e,a){"use strict";var s=a("5786"),i=a.n(s);i.a},d81d:function(t,e,a){"use strict";var s=a("23e7"),i=a("b727").map,n=a("1dde"),o=a("ae40"),l=n("map"),r=o("map");s({target:"Array",proto:!0,forced:!l||!r},{map:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},f9d9:function(t,e,a){"use strict";var s=a("64d1"),i=a.n(s);i.a}}]);
//# sourceMappingURL=chunk-301878cd.68edc791.js.map