webpackJsonp([10],{628:function(t,e,a){a(777);var n=a(80)(a(699),a(809),null,null);t.exports=n.exports},636:function(t,e,a){"use strict";function n(t){var e=t.toString().split(".");return e[0]=e[0].replace(/\B(?=(\d{3})+(?!\d))/g,","),e.join(".")}function i(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Date,e=new Date(t),a=e.getDay(),n=e.getDate(),i=n-a;return e.setDate(i),e}function r(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Date,e=new Date(t),a=e.getDay(),n=e.getDate(),i=6-a,r=n+i;return e.setDate(r),e}function o(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Date,e=new Date(t);return e.setDate(1),e}function s(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Date,e=new Date(t),a=e.getMonth(),n=a+1;return e.setMonth(n,0),e}function l(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Date,e=new Date(t),a=e.getMonth();return a>=0&&a<=2&&e.setMonth(0,1),a>=3&&a<=5&&e.setMonth(3,1),a>=6&&a<=8&&e.setMonth(6,1),a>=9&&a<=11&&e.setMonth(9,1),e}function d(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Date,e=new Date(t),a=e.getMonth();return a>=0&&a<=2&&e.setMonth(3,0),a>=3&&a<=5&&e.setMonth(6,0),a>=6&&a<=8&&e.setMonth(9,0),a>=9&&a<=11&&e.setMonth(12,0),e}function c(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Date,e=new Date(t);return e.setMonth(0,1),e}function u(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Date,e=new Date(t);return e.setMonth(12,0),e}function p(t){var e=t.match(/\d+/g),a=+e[0],n=+e[1],i=new Date(a,0,1),r=m(n),o=i.getTime()+r,s=i.setTime(o);return new Date(s)}function m(t){return 6048e5*(t-1)}function h(t){if(8!==t.length)return new Date;var e=+t.substring(0,4),a=Number(t.substring(4,6))-1,n=+t.substring(6,8);return new Date(e,a,n)}function v(t,e){return Math.round((e-t)/864e5)}function g(t){return 8!==t.length?new Date:+t.substring(0,4)+"年"+Number(t.substring(4,6))+"月"+ +t.substring(6,8)+"日"}String.prototype.padStart||(String.prototype.padStart=function(t,e){return t>>=0,e=String(e||" "),this.length>t?String(this):(t-=this.length,t>e.length&&(e+=e.repeat(t/e.length)),e.slice(0,t)+String(this))}),Date.prototype.format=function(){return""+this.getFullYear()+(this.getMonth()+1).toString().padStart(2,"0")+this.getDate().toString().padStart(2,"0")},e.a={firstDayOfWeek:i,lastDayOfWeek:r,firstDayOfMonth:o,lastDayOfMonth:s,firstDayOfQuarter:l,lastDayOfQuarter:d,firstDayOfYear:c,lastDayOfYear:u,getDayByWeek:p,numberWithCommas:n,parseDate:h,formatDate:g,daydiff:v}},637:function(t,e,a){"use strict";function n(t,e){r=e+1;var a=new Date,n=new Date;n.setTime(n.getTime()-864e5*e),t.$emit("pick",[n,a])}Object.defineProperty(e,"__esModule",{value:!0});var i=a(636),r=1;e.default={name:"rangeDatePicker",created:function(){var t=new Date;t.setTime(t.getTime()-0),this.global_time_filter_value[0]=t,r=1,this.loadDatePeriodByQuery()},data:function(){return{latest1Days:"primary",latest15Days:"",latest30Days:"",global_time_filter_value:[new Date,new Date],globalPickerOptions:{shortcuts:[{text:"今日",onClick:function(t){n(t,0)}},{text:"最近15天",onClick:function(t){n(t,14)}},{text:"最近30天",onClick:function(t){n(t,29)}}]}}},methods:{dateChanged:function(){var t=r;this.updateFilterButtonState(t);var e=this.global_time_filter_value[0].format(),a=this.global_time_filter_value[1].format();this.$router.push({path:this.$router.path,query:{startDate:e,endDate:a}}),this.$emit("selectedRangeDate",{startDate:e,endDate:a}),r=-1},selectDatePeriod:function(t){r=t;var e=new Date,a=new Date;a.setTime(a.getTime()-864e5*(t-1)),this.global_time_filter_value=[a,e],this.updateFilterButtonState(r)},loadDatePeriodByQuery:function(){var t=this.$route.query;if(t.startDate&&t.endDate){var e=t.startDate,a=t.endDate;e=i.a.parseDate(e),a=i.a.parseDate(a);var n=i.a.daydiff(e,a);a.format()===(new Date).format()?0===n?n=1:14===n?n=15:29===n&&(n=30):n=-1,r=-1,this.updateFilterButtonState(n),this.global_time_filter_value=[e,a]}},updateFilterButtonState:function(t){switch(t){case 1:this.latest1Days="primary",this.latest15Days="",this.latest30Days="";break;case 15:this.latest1Days="",this.latest15Days="primary",this.latest30Days="";break;case 30:this.latest1Days="",this.latest15Days="",this.latest30Days="primary";break;default:this.latest1Days="",this.latest15Days="",this.latest30Days=""}}},mounted:function(){function t(){document.body.scrollTop>113?(e.style.position="fixed",e.style.top="40px",e.style.left="192px",e.style.right="20px",e.style.zIndex=4e4):(e.style.position="static",e.style.top="",e.style.left="",e.style.right="")}window.addEventListener("resize",t,!1),window.addEventListener("scroll",t,!1);var e=document.querySelector(".primary-timer-filter")}}},638:function(t,e,a){e=t.exports=a(609)(),e.push([t.i,".primary-timer-filter .el-button{padding-top:8px;padding-bottom:8px}","",{version:3,sources:["F:/Developer/2016/big-data/jmdata/code/jmbi/trunk/jmbi-web/src/main/webapp/app-trade-bi/src/components/RangeDatePicker.vue"],names:[],mappings:"AACA,iCACE,gBAAiB,AACjB,kBAAoB,CACrB",file:"RangeDatePicker.vue",sourcesContent:["\n.primary-timer-filter .el-button {\n  padding-top: 8px;\n  padding-bottom: 8px;\n}\n"],sourceRoot:""}])},639:function(t,e,a){var n=a(638);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a(610)("7ea804fb",n,!0)},640:function(t,e,a){a(639);var n=a(80)(a(637),a(641),null,null);t.exports=n.exports},641:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-row",{staticClass:"jm-grid-box-border-radius jm-grid-box-bg-white jm-grid-border-1px jm-padding-15X20 jm-margin-top20 jm-margin-bottom20 primary-timer-filter"},[a("el-col",{attrs:{span:12}},[a("div",{staticClass:"grid-content"},[a("span",[t._v("时间段选择：")]),t._v(" "),a("el-button",{attrs:{type:t.latest1Days},on:{click:function(e){t.selectDatePeriod(1)}}},[t._v("今日")]),t._v(" "),a("el-button",{attrs:{type:t.latest15Days},on:{click:function(e){t.selectDatePeriod(15)}}},[t._v("最近15天")]),t._v(" "),a("el-button",{attrs:{type:t.latest30Days},on:{click:function(e){t.selectDatePeriod(30)}}},[t._v("最近30天")])],1)]),t._v(" "),a("el-col",{attrs:{span:12}},[a("div",{staticClass:"grid-content clearfix"},[a("el-date-picker",{staticClass:"right",attrs:{editable:!1,clearable:!1,type:"daterange","picker-options":t.globalPickerOptions,placeholder:"选择时间范围",align:"right"},on:{change:t.dateChanged},model:{value:t.global_time_filter_value,callback:function(e){t.global_time_filter_value=e},expression:"global_time_filter_value"}})],1)])],1)},staticRenderFns:[]}},647:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(123),i=(a(636),a(81)),r=a.n(i);e.default={name:"BaiduIndexTrend",props:{platform:[String],startDate:[String],endDate:[String]},created:function(){this.loadTabItem()},computed:{isOneDay:function(){return this.startDate===this.endDate}},watch:{startDate:function(){this.loadAllData()},endDate:function(){this.loadAllData()},isOneDay:function(t){var e=this;t||(this.showDelay=!1,this.$nextTick(function(){this.showDelay=!0}),setTimeout(function(){e.loadTabContentChart(e.zhibiao_activeTabName)},50))}},methods:{loadTabItem:function(){var t=this;t.isOneDay&&("pv"!==t.zhibiao_activeTabName&&"uv"!==t.zhibiao_activeTabName||(t.zhibiao_activeTabName="ip"))},loadAllData:function(){var t=this;t.loadTabItem(),t.loadTabContentChart(t.zhibiao_activeTabName)},handle_zhibiao_Click:function(t,e){var a=this,n=t.name;console.log(n),a.$nextTick(function(){a.loadTabContentChart(n,!1)})},loadTabContentChart:function(t){function e(t){var e=t.xAxisData,a=t[s],n={tooltip:{trigger:"axis"},legend:{data:[a.seriesName]},grid:{left:"3%",right:"3%",bottom:"10%",containLabel:!0},xAxis:[{type:"category",boundaryGap:!1,axisLine:{lineStyle:{color:"#158bca"}},data:e}],yAxis:[{name:a.unit,type:"value",axisLine:{lineStyle:{color:"#158bca"}}}],series:[{name:a.seriesName,type:"line",smooth:!0,itemStyle:{normal:{color:"#5eb2ed"}},areaStyle:{normal:{color:"#acd7f4"}},data:a.seriesData}]};o[s].setOption(n)}var i=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],o=this,s=t+"Chart";o[s]=r.a.init(o.$refs[s]);var l=o.platform,d=o.startDate,c=o.endDate;if(i||null===o.indexList)o.loadingIndex=!0,a.i(n.baiduTrend)({platform:l,startDate:d,endDate:c}).then(function(t){o.loadingIndex=!1;var a=t.data;o.indexList=a,e(a)}).catch(function(t){console.log(t)});else{e(o.indexList)}}},mounted:function(){function t(){a&&clearTimeout(a),a=setTimeout(function(){var t=e.zhibiao_activeTabName+"Chart";e[t]&&e[t].resize()},100)}var e=this;e.loadAllData(),window.addEventListener("resize",t,!1);var a},data:function(){return{loadingIndex:!1,indexList:null,zhibiao_activeTabName:"pv",showDelay:!0}}}},648:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(123);e.default={name:"dataOverview",props:{platform:[String],startDate:[String],endDate:[String]},watch:{startDate:function(){this.getOverview()},endDate:function(){this.getOverview()}},data:function(){return{loadingBaiduOverivew:!1,overviewData:{},splitCount:0}},methods:{getOverview:function(){var t=this;t.loadingBaiduOverivew=!0,a.i(n.baiduOverivew)({platform:t.platform,startDate:t.startDate,endDate:t.endDate}).then(function(e){t.loadingBaiduOverivew=!1;var a=e.data.overview;t.splitCount=24/a.length,t.overviewData=a}).catch(function(t){console.log(t)})}},mounted:function(){this.getOverview()}}},649:function(t,e,a){e=t.exports=a(609)(),e.push([t.i,".zhibiao-tooltip{width:300px}.zhibiao-activeTabName{position:relative}.zhibiao-activeTabName .el-tooltip{position:absolute;display:block;width:17px;height:17px;padding:0 10px 0 5px;top:22px;right:30px;margin-top:-8px;cursor:pointer;background:url("+a(611)+") no-repeat 50%}.bar-trend-chart-tooltip-icon{display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px}.button-header{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}.button-header .title{-ms-flex-item-align:start;align-self:flex-start;margin-right:auto}.button-header .el-button-group{margin-top:2px}","",{version:3,sources:["F:/Developer/2016/big-data/jmdata/code/jmbi/trunk/jmbi-web/src/main/webapp/app-trade-bi/src/components/ZZ/BaiduIndexTrend.vue"],names:[],mappings:"AACA,iBACE,WAAa,CACd,AACD,uBACE,iBAAmB,CACpB,AACD,mCACI,kBAAmB,AACnB,cAAe,AACf,WAAY,AACZ,YAAa,AACb,qBAAsB,AACtB,SAAU,AACV,WAAY,AACZ,gBAAiB,AACjB,eAAgB,AAChB,sDAAuE,CAC1E,AACD,8BACE,qBAAsB,AACtB,iBAAkB,AAClB,mBAAoB,AACpB,UAAW,AACX,UAAY,CACb,AACD,eACE,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,qBAAsB,AAClB,kBAAmB,AACf,wBAA0B,CACnC,AACD,sBACI,0BAA2B,AACvB,sBAAuB,AAC3B,iBAAmB,CACtB,AACD,gCACI,cAAgB,CACnB",file:"BaiduIndexTrend.vue",sourcesContent:["\n.zhibiao-tooltip {\n  width: 300px;\n}\n.zhibiao-activeTabName {\n  position: relative;\n}\n.zhibiao-activeTabName .el-tooltip {\n    position: absolute;\n    display: block;\n    width: 17px;\n    height: 17px;\n    padding: 0 10px 0 5px;\n    top: 22px;\n    right: 30px;\n    margin-top: -8px;\n    cursor: pointer;\n    background: url(../../assets/images/icon-tooltip.png) no-repeat center;\n}\n.bar-trend-chart-tooltip-icon {\n  display: inline-block;\n  margin-right: 5px;\n  border-radius: 10px;\n  width: 9px;\n  height: 9px;\n}\n.button-header {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n}\n.button-header .title {\n    -ms-flex-item-align: start;\n        align-self: flex-start;\n    margin-right: auto;\n}\n.button-header .el-button-group {\n    margin-top: 2px;\n}\n"],sourceRoot:""}])},650:function(t,e,a){e=t.exports=a(609)(),e.push([t.i,".overview-cell{height:136px}.total-summary{padding:10px;border-left:1px solid #dedede}.total-summary>div{text-align:center;line-height:36px}.total-summary.first-box{border-left:none}.total-summary .title{font-size:18px}.total-summary .amount{padding-top:15px;color:#0286ea;font-weight:700;font-size:40px}.total-summary .amount span{font-size:16px;font-weight:400}","",{version:3,sources:["F:/Developer/2016/big-data/jmdata/code/jmbi/trunk/jmbi-web/src/main/webapp/app-trade-bi/src/components/ZZ/DataOverview.vue"],names:[],mappings:"AACA,eACE,YAAc,CACf,AACD,eACE,aAAc,AACd,6BAA+B,CAChC,AACD,mBACI,kBAAmB,AACnB,gBAAkB,CACrB,AACD,yBACI,gBAAkB,CACrB,AACD,sBACI,cAAgB,CACnB,AACD,uBACI,iBAAkB,AAClB,cAAe,AACf,gBAAkB,AAClB,cAAgB,CACnB,AACD,4BACM,eAAgB,AAChB,eAAoB,CACzB",file:"DataOverview.vue",sourcesContent:["\n.overview-cell {\n  height: 136px;\n}\n.total-summary {\n  padding: 10px;\n  border-left: 1px solid #dedede;\n}\n.total-summary > div {\n    text-align: center;\n    line-height: 36px;\n}\n.total-summary.first-box {\n    border-left: none;\n}\n.total-summary .title {\n    font-size: 18px;\n}\n.total-summary .amount {\n    padding-top: 15px;\n    color: #0286ea;\n    font-weight: bold;\n    font-size: 40px;\n}\n.total-summary .amount span {\n      font-size: 16px;\n      font-weight: normal;\n}\n"],sourceRoot:""}])},651:function(t,e,a){var n=a(649);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a(610)("91dacdf4",n,!0)},652:function(t,e,a){var n=a(650);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a(610)("a6cef9d0",n,!0)},653:function(t,e,a){a(651);var n=a(80)(a(647),a(655),null,null);t.exports=n.exports},654:function(t,e,a){a(652);var n=a(80)(a(648),a(656),null,null);t.exports=n.exports},655:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-row",[a("el-col",{attrs:{span:24}},[a("div",{staticClass:"grid-content jm-grid-box-bg-white jm-grid-border-1px zhibiao-activeTabName"},[a("header",{staticClass:"panel-header jm-grid-box-bg-white jm-grid-border-bottom-1px button-header"},[a("span",{staticClass:"title"},[t._v("趋势分析")]),t._v(" "),t._e()],1),t._v(" "),a("el-tabs",{directives:[{name:"loading",rawName:"v-loading",value:t.loadingIndex,expression:"loadingIndex"}],attrs:{type:"card","element-loading-text":"加载中..."},on:{"tab-click":t.handle_zhibiao_Click},model:{value:t.zhibiao_activeTabName,callback:function(e){t.zhibiao_activeTabName=e},expression:"zhibiao_activeTabName"}},[t.isOneDay?t._e():a("el-tab-pane",{attrs:{label:"浏览量",name:"pv"}},[a("div",{staticClass:"box chart home-row-group-1 sixteen-nine"},[a("div",{ref:"pvChart",staticClass:"content "})])]),t._v(" "),t.isOneDay?t._e():a("el-tab-pane",{attrs:{label:"独立访客",name:"uv"}},[a("div",{staticClass:"box chart home-row-group-1 sixteen-nine"},[a("div",{ref:"uvChart",staticClass:"content "})])]),t._v(" "),t.showDelay?a("el-tab-pane",{attrs:{label:"IP数",name:"ip"}},[a("div",{staticClass:"box chart home-row-group-1 sixteen-nine"},[a("div",{ref:"ipChart",staticClass:"content "})])]):t._e(),t._v(" "),t.showDelay?a("el-tab-pane",{attrs:{label:"平均停留时长",name:"averageTime"}},[a("div",{staticClass:"box chart home-row-group-1 sixteen-nine"},[a("div",{ref:"averageTimeChart",staticClass:"content "})])]):t._e(),t._v(" "),t.showDelay?a("el-tab-pane",{attrs:{label:"平均访问页数",name:"avgVisitPages"}},[a("div",{staticClass:"box chart home-row-group-1 sixteen-nine"},[a("div",{ref:"avgVisitPagesChart",staticClass:"content "})])]):t._e(),t._v(" "),t.showDelay?a("el-tab-pane",{attrs:{label:"跳出率",name:"exitRate"}},[a("div",{staticClass:"box chart home-row-group-1 sixteen-nine"},[a("div",{ref:"exitRateChart",staticClass:"content"})])]):t._e()],1)],1)])],1)},staticRenderFns:[]}},656:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-row",{directives:[{name:"loading",rawName:"v-loading",value:t.loadingBaiduOverivew,expression:"loadingBaiduOverivew"}],staticClass:"jm-grid-border-1px",attrs:{"element-loading-text":"加载中..."}},[a("header",{staticClass:"panel-header jm-grid-box-bg-white jm-grid-border-bottom-1px"},[t._v("数据概览")]),t._v(" "),a("div",{staticClass:"overview-cell jm-grid-box-bg-white"},t._l(t.overviewData,function(e,n){return a("el-col",{key:e,attrs:{xs:12,sm:12,md:12,lg:t.splitCount}},[a("div",{staticClass:"grid-content jm-grid-box-bg-white jm-padding-bottom-20 jm-padding-top-20"},[a("div",{staticClass:"box total-summary",class:{"first-box":0===n}},[a("div",{staticClass:"title"},[t._v(t._s(e.name))]),t._v(" "),a("div",{staticClass:"amount"},[t._v(t._s(e.value)+"\n            "),a("span",[t._v(t._s(e.unit))])])])])])}))])},staticRenderFns:[]}},699:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=(a(123),a(636),a(640)),i=a.n(n),r=a(654),o=a.n(r),s=a(653),l=a.n(s),d=a(81);a.n(d);e.default={name:"NationalPavilion",created:function(){var t=this.$route.query;t.startDate&&t.endDate&&(this.startDate=t.startDate,this.endDate=t.endDate)},components:{rangeDatePicker:i.a,DataOverview:o.a,BaiduIndexTrend:l.a},methods:{getRangeDate:function(t){var e=t.startDate,a=t.endDate;this.startDate=e,this.endDate=a}},data:function(){return{platformId:"102300",startDate:(new Date).format(),endDate:(new Date).format()}}}},744:function(t,e,a){e=t.exports=a(609)(),e.push([t.i,"","",{version:3,sources:[],names:[],mappings:"",file:"NationalPavilion.vue",sourceRoot:""}])},777:function(t,e,a){var n=a(744);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a(610)("142f34e6",n,!0)},809:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-breadcrumb",{attrs:{separator:">"}},[a("span",{staticClass:"el-breadcrumb__item"},[a("span",[t._v("我的位置：")])]),t._v(" "),a("el-breadcrumb-item",{attrs:{to:{path:"/"}}},[t._v(t._s(t.$platformName))]),t._v(" "),a("el-breadcrumb-item",[t._v("运营分析")]),t._v(" "),a("el-breadcrumb-item",[t._v("国家馆")])],1),t._v(" "),a("range-date-picker",{on:{selectedRangeDate:t.getRangeDate}}),t._v(" "),a("data-overview",{attrs:{platform:t.platformId,startDate:t.startDate,endDate:t.endDate}}),t._v(" "),a("baidu-index-trend",{attrs:{platform:t.platformId,startDate:t.startDate,endDate:t.endDate}})],1)},staticRenderFns:[]}}});
//# sourceMappingURL=10.d4feb1267ca58e4a65a4.js.map