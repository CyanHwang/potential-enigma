(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6e05a760"],{"8c7d":function(e,t,n){},d215:function(e,t,n){"use strict";var a=n("8c7d"),c=n.n(a);c.a},e2c5:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("accountManage")],1)},c=[],r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"accountManageCom"},[n("div",{staticClass:"top"},[n("div",{staticClass:"search"},[e._v(" 帐号名称： "),n("el-input",{model:{value:e.keywords,callback:function(t){e.keywords=t},expression:"keywords"}}),n("el-button",{attrs:{type:"primary",size:"small"},on:{click:e.clickSearch}},[e._v("搜索")])],1)]),n("div",{staticClass:"addAccount"},[n("el-button",{attrs:{type:"primary",size:"small"},on:{click:e.clickAddAccount}},[e._v("新增子帐号")])],1),n("div",{staticClass:"bottom"},[n("div",{staticClass:"right"},[n("div",{staticClass:"fr total"},[e._v("共"+e._s(e.total)+"项")]),n("el-pagination",{staticClass:"fr",attrs:{"current-page":e.currentPage,"page-sizes":[10,100,200],"page-size":e.per_page,layout:"sizes, prev, pager, next",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.currentPage=t},"update:current-page":function(t){e.currentPage=t}}})],1),n("el-table",{staticStyle:{width:"100%"},attrs:{data:e.AccountList,"header-align":"center"}},[n("el-table-column",{attrs:{label:"id",prop:"id","min-width":"50",align:"center"}}),n("el-table-column",{attrs:{label:"用户名",prop:"username","min-width":"100",align:"center"}}),n("el-table-column",{attrs:{label:"真实姓名",prop:"realname","min-width":"100",align:"center"}}),n("el-table-column",{attrs:{label:"创建时间",prop:"create_at","min-width":"100",align:"center"}}),n("el-table-column",{attrs:{label:"管理店铺",prop:"store_names","min-width":"200",align:"center"}}),n("el-table-column",{attrs:{label:"状态",prop:"status","min-width":"40",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[1==t.row.status?n("span",{staticClass:"cologreen"},[e._v("启用中")]):n("span",{staticClass:"colored"},[e._v("禁用中")])]}}])}),n("el-table-column",{attrs:{label:"操作","min-width":"100",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(n){return e.editAccount(t.row)}}},[e._v("编辑")]),1==t.row.status?n("el-button",{attrs:{type:"info",size:"mini"},on:{click:function(n){return e.forbiddenAccount(t.row)}}},[e._v("禁用")]):e._e(),2==t.row.status?n("el-button",{attrs:{type:"warning",size:"mini"},on:{click:function(n){return e.forbiddenAccount(t.row)}}},[e._v("启用")]):e._e()]}}])})],1)],1),n("el-dialog",{staticClass:"insertImgDialog",attrs:{title:"新增子帐号",visible:e.addAccountDialogVisible,width:"40%"},on:{"update:visible":function(t){e.addAccountDialogVisible=t},close:e.addAccountClose}},[n("el-form",{ref:"addAccountFormRef",staticClass:"addAccountForm",attrs:{model:e.addAccountForm,rules:e.addAccountFormRules}},[n("el-form-item",{attrs:{label:"用户名：",prop:"username"}},[n("el-input",{attrs:{placeholder:"支持字母、数字和下划线，4-30字符"},model:{value:e.addAccountForm.username,callback:function(t){e.$set(e.addAccountForm,"username",t)},expression:"addAccountForm.username"}})],1),n("br"),n("el-form-item",{attrs:{label:"密  码：",prop:"password"}},[n("el-input",{attrs:{placeholder:"长度要在6~16字符之间并且必须包含数字和字母","show-password":""},model:{value:e.addAccountForm.password,callback:function(t){e.$set(e.addAccountForm,"password",t)},expression:"addAccountForm.password"}})],1),n("br"),n("el-form-item",{attrs:{label:"真实姓名：",prop:"realname"}},[n("el-input",{attrs:{placeholder:"请输入真实姓名"},model:{value:e.addAccountForm.realname,callback:function(t){e.$set(e.addAccountForm,"realname",t)},expression:"addAccountForm.realname"}})],1),n("br"),n("el-form-item",{attrs:{label:"关联店铺：",prop:"checkedShops"}},[n("el-col",{attrs:{span:18}},[n("el-checkbox",{attrs:{indeterminate:e.isIndeterminate},on:{change:e.handleCheckAllChange},model:{value:e.checkAll,callback:function(t){e.checkAll=t},expression:"checkAll"}},[e._v("全选")]),n("el-checkbox-group",{on:{change:e.handleCheckedCitiesChange},model:{value:e.addAccountForm.checkedShops,callback:function(t){e.$set(e.addAccountForm,"checkedShops",t)},expression:"addAccountForm.checkedShops"}},e._l(e.ShopList,(function(t){return n("el-checkbox",{key:t.id,attrs:{label:t.id}},[e._v(e._s(t.store_name))])})),1)],1)],1)],1),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{size:"small"},on:{click:function(t){e.addAccountDialogVisible=!1}}},[e._v("取 消")]),n("el-button",{staticStyle:{"margin-right":"20px"},attrs:{type:"primary",size:"small"},on:{click:function(t){return e.confirmAddAccount()}}},[e._v("保 存")])],1)],1),n("el-dialog",{staticClass:"insertImgDialog",attrs:{title:"编辑店铺",visible:e.editAccountDialogVisible,width:"40%"},on:{"update:visible":function(t){e.editAccountDialogVisible=t},close:e.editAccountClose}},[n("el-form",{ref:"editAccountFormRef",staticClass:"addAccountForm",attrs:{model:e.editAccountForm,rules:e.editAccountFormRules}},[n("el-form-item",{attrs:{label:"用户名：",prop:"username"}},[n("el-input",{attrs:{placeholder:"支持字母、数字和下划线，4-30字符",disabled:!0},model:{value:e.editAccountForm.username,callback:function(t){e.$set(e.editAccountForm,"username",t)},expression:"editAccountForm.username"}})],1),n("br"),n("el-form-item",{attrs:{label:"密  码：",prop:"password"}},[n("el-input",{attrs:{placeholder:"密码为空不修改密码","show-password":""},model:{value:e.editAccountForm.password,callback:function(t){e.$set(e.editAccountForm,"password",t)},expression:"editAccountForm.password"}})],1),n("br"),n("el-form-item",{attrs:{label:"真实姓名：",prop:"realname"}},[n("el-input",{attrs:{placeholder:"请输入真实姓名"},model:{value:e.editAccountForm.realname,callback:function(t){e.$set(e.editAccountForm,"realname",t)},expression:"editAccountForm.realname"}})],1),n("br"),n("el-form-item",{attrs:{label:"关联店铺：",prop:"checkedShops"}},[n("el-col",{attrs:{span:18}},[n("el-checkbox",{attrs:{indeterminate:e.isIndeterminate},on:{change:e.handleCheckAllChange},model:{value:e.checkAll,callback:function(t){e.checkAll=t},expression:"checkAll"}},[e._v("全选")]),n("el-checkbox-group",{on:{change:e.handleCheckedCitiesChange},model:{value:e.editAccountForm.checkedShops,callback:function(t){e.$set(e.editAccountForm,"checkedShops",t)},expression:"editAccountForm.checkedShops"}},e._l(e.ShopList,(function(t){return n("el-checkbox",{key:t.id,attrs:{label:t.id}},[e._v(e._s(t.store_name))])})),1)],1)],1)],1),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{size:"small"},on:{click:function(t){e.editAccountDialogVisible=!1}}},[e._v("取 消")]),n("el-button",{staticStyle:{"margin-right":"20px"},attrs:{type:"primary",size:"small"},on:{click:function(t){return e.confirmEditAccount()}}},[e._v("保 存")])],1)],1)],1)},o=[],s=(n("96cf"),n("1da1")),i={data:function(){return{checkAll:!1,isIndeterminate:!1,addAccountDialogVisible:!1,editAccountDialogVisible:!1,editAccountForm:{id:"",username:"",password:"英文",realname:"",checkedShops:[]},addAccountForm:{username:"",password:"",realname:"",checkedShops:[]},addAccountFormRules:{username:[{required:!0,message:"请输入用户名",trigger:"blur"},{min:1,max:30,message:"长度在 0 到 30 个字符",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"}],realname:[{required:!0,message:"请输入真实姓名",trigger:"blur"}]},editAccountFormRules:{username:[{required:!0,message:"请输入用户名",trigger:"blur"},{min:1,max:30,message:"长度在 0 到 30 个字符",trigger:"blur"}],realname:[{required:!0,message:"请输入真实姓名",trigger:"blur"}]},AccountList:[],ShopList:[],editLanguage:"",currentPage:1,per_page:10,total:0,keywords:""}},methods:{handleSizeChange:function(e){this.per_page=e,this.currentPage=1,this.getAccountList()},handleCurrentChange:function(e){this.currentPage=e,this.getAccountList()},handleCheckAllChange:function(e){if(e)for(var t=0;t<this.ShopList.length;t++){var n=this.ShopList[t];this.editAccountDialogVisible?this.editAccountForm.checkedShops.push(n.id):this.addAccountForm.checkedShops.push(n.id)}else this.editAccountDialogVisible?this.editAccountForm.checkedShops=[]:this.addAccountForm.checkedShops=[]},handleCheckedCitiesChange:function(e){var t=e.length;this.checkAll=t===this.ShopList.length,this.isIndeterminate=t>0&&t<this.ShopList.length},editAccount:function(e){this.editAccountDialogVisible=!0,this.editAccountForm.id=e.id,this.editAccountForm.username=e.username,this.editAccountForm.password="",this.editAccountForm.realname=e.realname,this.editAccountForm.checkedShops=e.storeids,this.editAccountForm.status=e.status},editAccountClose:function(){this.$refs.editAccountFormRef.resetFields()},addAccountClose:function(){this.$refs.addAccountFormRef.resetFields()},forbiddenAccount:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:"1"==e.status?t.$confirm("此操作将禁用该用户, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(Object(s["a"])(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.api.accountStatus({id:e.id,status:2});case 2:a=n.sent,200==a.data.code&&(t.$message({type:"success",message:"禁用成功"}),t.getAccountList());case 4:case"end":return n.stop()}}),n)})))).catch((function(){t.$message({type:"info",message:"已取消禁用"})})):t.$confirm("此操作将启用该用户, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(Object(s["a"])(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.api.accountStatus({id:e.id,status:1});case 2:a=n.sent,200==a.data.code&&(t.$message({type:"success",message:"启用成功"}),t.getAccountList());case 4:case"end":return n.stop()}}),n)})))).catch((function(){t.$message({type:"info",message:"已取消启用"})}));case 1:case"end":return n.stop()}}),n)})))()},accountAdd:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.api.accountAdd(e.addAccountForm);case 2:n=t.sent,200==n.data.code&&(e.$message({message:"添加成功",type:"success"}),e.addAccountDialogVisible=!1,e.getAccountList());case 4:case"end":return t.stop()}}),t)})))()},accountEdit:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.api.accountEdit(e.editAccountForm);case 2:n=t.sent,200==n.data.code&&(e.$message({message:"修改成功",type:"success"}),e.editAccountDialogVisible=!1,e.getAccountList());case 4:case"end":return t.stop()}}),t)})))()},confirmAddAccount:function(){var e=this;this.$refs["addAccountFormRef"].validate((function(t){if(!t)return!1;e.accountAdd()}))},confirmEditAccount:function(){var e=this;this.$refs["editAccountFormRef"].validate((function(t){if(!t)return!1;e.accountEdit()}))},clickAddAccount:function(){this.addAccountDialogVisible=!0},clickSearch:function(){this.currentPage=1,this.getShopList()},getAccountList:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.api.accountList({page:e.currentPage,per_page:e.per_page,username:e.keywords});case 2:n=t.sent,200==n.data.code&&(e.AccountList=n.data.data.data,e.total=n.data.data.total);case 4:case"end":return t.stop()}}),t)})))()},getShopList:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.api.storeList({page:e.currentPage,store_name:e.keywords});case 2:n=t.sent,200==n.data.code&&(e.ShopList=n.data.data.data);case 4:case"end":return t.stop()}}),t)})))()}},created:function(){this.getShopList(),this.getAccountList()}},l=i,u=(n("d215"),n("2877")),d=Object(u["a"])(l,r,o,!1,null,"4c14ff63",null),m=d.exports,p={components:{accountManage:m}},h=p,g=Object(u["a"])(h,a,c,!1,null,null,null);t["default"]=g.exports}}]);
//# sourceMappingURL=chunk-6e05a760.ae43e37e.js.map