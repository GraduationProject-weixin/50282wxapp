(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/chongwufenlei/add-or-update"],{"188a":function(e,t,n){"use strict";var r;n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return u})),n.d(t,"a",(function(){return r}));var a=function(){var e=this,t=e.$createElement;e._self._c},u=[]},"19b1":function(e,t,n){"use strict";n.r(t);var r=n("9295"),a=n.n(r);for(var u in r)"default"!==u&&function(e){n.d(t,e,(function(){return r[e]}))}(u);t["default"]=a.a},"35ee":function(e,t,n){"use strict";n.r(t);var r=n("188a"),a=n("19b1");for(var u in a)"default"!==u&&function(e){n.d(t,e,(function(){return a[e]}))}(u);n("efea");var o,c=n("f0c5"),i=Object(c["a"])(a["default"],r["b"],r["c"],!1,null,"b29fa8ac",null,!1,r["a"],o);t["default"]=i.exports},"6f81":function(e,t,n){},9295:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n("a34a"));function a(e){return e&&e.__esModule?e:{default:e}}function u(e,t,n,r,a,u,o){try{var c=e[u](o),i=c.value}catch(s){return void n(s)}c.done?t(i):Promise.resolve(i).then(r,a)}function o(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function c(e){u(o,r,a,c,i,"next",e)}function i(e){u(o,r,a,c,i,"throw",e)}c(void 0)}))}}var c=function(){Promise.all([n.e("common/vendor"),n.e("components/w-picker/w-picker")]).then(function(){return resolve(n("c04a"))}.bind(null,n)).catch(n.oe)},i={data:function(){return{cross:"",ruleForm:{chongwufenlei:""},user:{},ro:{chongwufenlei:!1}}},components:{wPicker:c},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(t){var n=this;return o(r.default.mark((function a(){var u,o,c,i;return r.default.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return u=e.getStorageSync("nowTable"),a.next=3,n.$api.session(u);case 3:if(o=a.sent,n.user=o.data,n.ruleForm.userid=e.getStorageSync("userid"),t.refid&&(n.ruleForm.refid=t.refid,n.ruleForm.nickname=e.getStorageSync("nickname")),!t.id){a.next=13;break}return n.ruleForm.id=t.id,a.next=11,n.$api.info("chongwufenlei",n.ruleForm.id);case 11:o=a.sent,n.ruleForm=o.data;case 13:if(n.cross=t.cross,!t.cross){a.next=25;break}c=e.getStorageSync("crossObj"),a.t0=r.default.keys(c);case 17:if((a.t1=a.t0()).done){a.next=25;break}if(i=a.t1.value,"chongwufenlei"!=i){a.next=23;break}return n.ruleForm.chongwufenlei=c[i],n.ro.chongwufenlei=!0,a.abrupt("continue",17);case 23:a.next=17;break;case 25:n.styleChange();case 26:case"end":return a.stop()}}),a)})))()},methods:{styleChange:function(){this.$nextTick((function(){}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var t=this;return o(r.default.mark((function n(){var a,u,o,c,i,s,f,l,d,g;return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(!t.cross){n.next=16;break}if(c=e.getStorageSync("statusColumnName"),i=e.getStorageSync("statusColumnValue"),""==c){n.next=16;break}if(s=e.getStorageSync("crossObj"),c.startsWith("[")){n.next=12;break}for(f in s)f==c&&(s[f]=i);return l=e.getStorageSync("crossTable"),n.next=10,t.$api.update("".concat(l),s);case 10:n.next=16;break;case 12:a=Number(e.getStorageSync("userid")),u=s["id"],o=e.getStorageSync("statusColumnName"),o=o.replace(/\[/,"").replace(/\]/,"");case 16:if(!u||!a){n.next=38;break}return t.ruleForm.crossuserid=a,t.ruleForm.crossrefid=u,d={page:1,limit:10,crossuserid:a,crossrefid:u},n.next=22,t.$api.list("chongwufenlei",d);case 22:if(g=n.sent,!(g.data.total>=o)){n.next=28;break}return t.$utils.msg(e.getStorageSync("tips")),n.abrupt("return",!1);case 28:if(!t.ruleForm.id){n.next=33;break}return n.next=31,t.$api.update("chongwufenlei",t.ruleForm);case 31:n.next=35;break;case 33:return n.next=35,t.$api.add("chongwufenlei",t.ruleForm);case 35:t.$utils.msgBack("提交成功");case 36:n.next=46;break;case 38:if(!t.ruleForm.id){n.next=43;break}return n.next=41,t.$api.update("chongwufenlei",t.ruleForm);case 41:n.next=45;break;case 43:return n.next=45,t.$api.add("chongwufenlei",t.ruleForm);case 45:t.$utils.msgBack("提交成功");case 46:case"end":return n.stop()}}),n)})))()},optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var t=new Date,n=t.getFullYear(),r=t.getMonth()+1,a=t.getDate();return"start"===e?n-=60:"end"===e&&(n+=2),r=r>9?r:"0"+r,a=a>9?a:"0"+a,"".concat(n,"-").concat(r,"-").concat(a)},toggleTab:function(e){this.$refs[e].show()}}};t.default=i}).call(this,n("543d")["default"])},b744:function(e,t,n){"use strict";(function(e){n("a9af");r(n("66fd"));var t=r(n("35ee"));function r(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("543d")["createPage"])},efea:function(e,t,n){"use strict";var r=n("6f81"),a=n.n(r);a.a}},[["b744","common/runtime","common/vendor"]]]);