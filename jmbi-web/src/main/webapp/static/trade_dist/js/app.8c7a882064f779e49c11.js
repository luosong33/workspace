webpackJsonp([25],{123:function(e,t,a){"use strict";function n(e){return Me.a.get(e)}function r(e){return n("/biservice/v1/usertrace/login/platform/"+e.platform+"/startDate/"+e.startDate+"/endDate/"+e.endDate)}function i(e){return n("/biservice/v1/usertrace/browser/platform/"+e.platform+"/startDate/"+e.startDate+"/endDate/"+e.endDate)}function s(e){e.platform;return n("/biservice/v1/shop/openTrend/"+e.startDate+"/"+e.endDate)}function o(e){e.platform;return n("/biservice/v1/shop/perfect/"+e.startDate+"/"+e.endDate)}function u(e){var t=e.platform;return n("/biservice/v1/shop/releaseRank/"+e.startDate+"/"+e.endDate+"/"+t)}function l(e){e.platform;return n("/biservice/v1/shop/categoryRank/"+e.startDate+"/"+e.endDate)}function c(e){var t=e.platform;return n("/biservice/v1/shop/dealRank/"+e.startDate+"/"+e.endDate+"/"+t)}function m(e){var t=e.platform;return n("/biservice/v1/shop/releaseList/"+e.startDate+"/"+e.endDate+"/"+t)}function d(e){e.platform;return n("/biservice/v1/shop/categoryList/"+e.startDate+"/"+e.endDate)}function p(e){var t=e.platform;return n("/biservice/v1/shop/dealList/"+e.startDate+"/"+e.endDate+"/"+t)}function v(e){var t=e.platform,a=e.startDate,r=e.endDate;return n("/biservice/v1/register/newlyIncr/"+e.dataType+"/platform/"+t+"/startDate/"+a+"/endDate/"+r)}function f(e){return n("/biservice/v1/register/newlyIncr/table/platform/"+e.platform+"/startDate/"+e.startDate+"/endDate/"+e.endDate+"/limit/"+e.limit+"/offset/"+e.offset)}function h(e){return n("biservice/v1/register/authUser/overview/lineChart/platform/"+e.platform+"/startDate/"+e.startDate+"/endDate/"+e.endDate+"/type/"+e.type)}function D(e){return n("biservice/v1/register/authUser/cert3/history/platform/"+e)}function b(e){return n("biservice/v1/register/authUser/passed/histogram/platform/"+e.platform+"/startDate/"+e.startDate+"/endDate/"+e.endDate)}function g(e){return n("biservice/v1/register/authUser/licPercent/pieChart/platform/"+e.platform+"/startDate/"+e.startDate+"/endDate/"+e.endDate)}function y(e){return n("biservice/v1/register/authUser/areaDist/chinaMap/platform/"+e.platform+"/startDate/"+e.startDate+"/endDate/"+e.endDate)}function I(e){return n("biservice/v1/register/authUser/areaDist/barChart/platform/"+e.platform+"/startDate/"+e.startDate+"/endDate/"+e.endDate)}function A(e){return n("biservice/v1/register/visaAndPay/history/pieChart/platform/"+e)}function C(e){return n("biservice/v1/operate/total/"+e)}function R(e){return n("/biservice/v1/operate/getBasic/"+e.platform+"/"+e.startDate+"/"+e.endDate)}function _(e){return n("/biservice/v1/operate/getBuyer/"+e.platform+"/"+e.startDate+"/"+e.endDate)}function w(e){return n("/biservice/v1/operate/getSeller/"+e.platform+"/"+e.startDate+"/"+e.endDate)}function E(e){return n("/biservice/v1/operateOrder/orderType/platform/"+e.platform+"/startDate/"+e.startDate+"/endDate/"+e.endDate)}function T(e){return n("/biservice/v1/operateOrder/orderPay/platform/"+e.platform+"/startDate/"+e.startDate+"/endDate/"+e.endDate)}function N(e){e.platform;return n("/biservice/v1/operate/getTop/"+e.startDate+"/"+e.endDate)}function O(e){return n("/biservice/v1/operateGoods/goodsCate/platform/"+e.platform+"/startDate/"+e.startDate+"/endDate/"+e.endDate)}function P(e){return n("/biservice/v1/operateConv/convFunnel/platform/"+e.platform+"/startDate/"+e.startDate+"/endDate/"+e.endDate)}function U(e){return n("/biservice/v1/register/visaAndPay/overview/lineChart/platform/"+e.platform+"/startDate/"+e.startDate+"/endDate/"+e.endDate+"/type/"+e.type)}function M(e){return n("/biservice/v1/register/visaAndPay/areaDist/chinaMap/platform/"+e.platform+"/startDate/"+e.startDate+"/endDate/"+e.endDate)}function k(e){var t=e.platform,a=e.startDate,r=e.endDate;return n("/biservice/v1/register/"+e.type+"/areaDist/barChart/platform/"+t+"/startDate/"+a+"/endDate/"+r)}function L(e){var t=e.platform;return n("/biservice/v1/deal/operate/"+e.startDate+"/"+e.endDate+"/"+t)}function G(e){var t=e.platform;return n("/biservice/v1/deal/translate/"+e.startDate+"/"+e.endDate+"/"+t)}function x(e){var t=e.platform;return n("/biservice/v1/deal/pickup/"+e.startDate+"/"+e.endDate+"/"+t)}function B(e){var t=e.platform;return n("/biservice/v1/deal/delivery/"+e.startDate+"/"+e.endDate+"/"+t)}function S(e){var t=e.platform;return n("/biservice/v1/deal/receipt/"+e.startDate+"/"+e.endDate+"/"+t)}function Z(e){var t=e.platform;return n("/biservice/v1/deal/settle/"+e.startDate+"/"+e.endDate+"/"+t)}function V(e){var t=e.platform;return n("/biservice/v1/deal/pay/"+e.startDate+"/"+e.endDate+"/"+t)}function j(e){var t=e.platform;return n("/biservice/v1/deal/contract/"+e.startDate+"/"+e.endDate+"/"+t)}function z(e){var t=e.platform;return n("/biservice/v1/deal/payChannel/"+e.startDate+"/"+e.endDate+"/"+t)}function Y(e){var t=e.platform,a=e.startDate,r=e.endDate;return n("/biservice/v1/deal/areaAmount/"+e.role+"/"+a+"/"+r+"/"+t+"/"+e.sortField)}function F(e){return n("/biservice/v1/baidu/overivew/platform/"+e.platform+"/startDate/"+e.startDate+"/endDate/"+e.endDate)}function J(e){return n("/biservice/v1/baidu/trend/platform/"+e.platform+"/startDate/"+e.startDate+"/endDate/"+e.endDate)}function Q(e){return n("/biservice/v1/baidu/vist/platform/"+e.platform+"/startDate/"+e.startDate+"/endDate/"+e.endDate)}function W(e){return n("/biservice/v1/baidu/sources/platform/"+e.platform+"/startDate/"+e.startDate+"/endDate/"+e.endDate)}function H(e){return n("/biservice/v1/baidu/vistors/platform/"+e.platform+"/startDate/"+e.startDate+"/endDate/"+e.endDate)}function X(e){return n("/biservice/v1/baidu/areas/platform/"+e.platform+"/startDate/"+e.startDate+"/endDate/"+e.endDate)}function q(e){var t=e.platform;return n("/biservice/v1/deal/paymentDays/"+e.startDate+"/"+e.endDate+"/"+t)}function K(){return n("/biservice/v1/overview/getOverview")}function $(e){return n("/biservice/v1/overview/starLevel/"+e)}function ee(e){return n("/biservice/v1/overview/partner/"+e)}function te(e){return n("/biservice/v1/overview/customer/"+e)}function ae(e,t,a){return n("/biservice/v1/areaorder/list/"+e+"/"+t+"/"+a)}function ne(e){return n("/biservice/v1/areaorder/trend/"+e.flag+"/"+e.timeType+"/"+e.startDate+"/"+e.endDate+"/"+e.customsCode+"/"+e.interval)}function re(e,t,a){return n("/biservice/v1/areaorder/map/"+e+"/"+t+"/"+a)}function ie(){return Me.a.create({baseURL:""}).get("/v1/dict/firstLevelCustoms")}function se(e){var t=Me.a.create({baseURL:""}),a="/v1/dict/secondLevelCustoms/code/"+e;return t.get(a)}function oe(e){return n("/biservice/v1/company/getCompanyNum/timeType/"+e.timeType+"/startDate/"+e.startDate+"/endDate/"+e.endDate+"/chart/"+e.chart)}function ue(e){return n("/biservice/v1/company/getCompanyAmount/timeType/"+e.timeType+"/startDate/"+e.startDate+"/endDate/"+e.endDate+"/customsCode/"+e.customsCode+"/chart/"+e.chart)}function le(e){return n("/biservice/v1/inout/getInOutCountryAmount/timeType/"+e.timeType+"/startDate/"+e.startDate+"/endDate/"+e.endDate+"/customsCode/"+e.customsCode+"/inout/"+e.inout)}function ce(e){return n("/biservice/v1/inout/getInOutGoodsAmount/timeType/"+e.timeType+"/startDate/"+e.startDate+"/endDate/"+e.endDate+"/customsCode/"+e.customsCode+"/inout/"+e.inout)}function me(e){return n("/biservice/v1/inout/getInOutCustomsAmount/timeType/"+e.timeType+"/startDate/"+e.startDate+"/endDate/"+e.endDate+"/customsCode/"+e.customsCode+"/inout/"+e.inout)}function de(){return n("/biservice/v1/getSearchWordCloud/1")}function pe(){return n("/biservice/v1/masoperate/total")}function ve(e,t){return n("/biservice/v1/masoperate/getBasic/"+e+"/"+t)}function fe(e,t){return n("/biservice/v1/masoperate/getItemProportion/"+e+"/"+t)}function he(e,t){return n("/biservice/v1/masoperate/getOrderProportion/"+e+"/"+t)}function De(e,t){return n("/biservice/v1/masoperate/getOrderMoneyProportion/"+e+"/"+t)}function be(e){return n("/biservice/v1/register/ms/newlyIncr/pieChart/platform/"+e.platform+"/startDate/"+e.startDate+"/endDate/"+e.endDate)}function ge(e){return n("/biservice/v1/goods/newlyIncr/lineChart/platform/"+e.platform+"/startDate/"+e.startDate+"/endDate/"+e.endDate)}function ye(e){return n("/biservice/v1/goods/industry/pieChart/platform/"+e.platform+"/startDate/"+e.startDate+"/endDate/"+e.endDate)}function Ie(e){return n("/biservice/v1/goods/industry/"+e.industry+"/category/pieChart/platform/"+e.platform+"/startDate/"+e.startDate+"/endDate/"+e.endDate)}function Ae(e){return n("/biservice/v1/goods/industry/diff/bubbleGradient/platform/"+e.platform+"/startDate/"+e.startDate+"/endDate/"+e.endDate)}function Ce(e){return n("/biservice/v1/shopAnalysis/goodsCategoriesTop/platform/"+e.platform+"/startDate/"+e.startDate+"/endDate/"+e.endDate)}function Re(e){var t=e.itemId;return n("/biservice/v1/shopAnalysis/goodsIndustryRatio/platform/"+e.platform+"/startDate/"+e.startDate+"/endDate/"+e.endDate+"/itemId/"+t)}function _e(e){return n("/biservice/v1/shopAnalysis/moneyTransactionMoneyTop/platform/"+e.platform+"/startDate/"+e.startDate+"/endDate/"+e.endDate)}function we(e){var t=e.itemId;return n("/biservice/v1/shopAnalysis/moneyIndustryRatio/platform/"+e.platform+"/startDate/"+e.startDate+"/endDate/"+e.endDate+"/itemId/"+t)}function Ee(e){e.platform;return n("/biservice/v1/deal/industryPieCharts/"+e.startDate+"/"+e.endDate+"/"+e.code+"/"+e.clearing_type)}function Te(e){e.platform;return n("/biservice/v1/deal/industryAmount/"+e.startDate+"/"+e.endDate+"/"+e.sortField)}function Ne(e){e.platform;return n("/biservice/v1/deal/categoryAmount/"+e.startDate+"/"+e.endDate+"/"+e.industryId+"/"+e.sortField)}Object.defineProperty(t,"__esModule",{value:!0}),a.d(t,"requestCancels",function(){return Ge}),t.userTraceLogin=r,t.userTraceBrowser=i,t.shopOpenTrend=s,t.shopOpenPerfect=o,t.shopReleaseRank=u,t.shopCategoryRank=l,t.shopDealRank=c,t.shopReleaseList=m,t.shopCategoryList=d,t.shopDealList=p,t.newlyIncreased=v,t.newlyIncreasedTableList=f,t.authUserOverview=h,t.authUserCert3=D,t.authUserPassed=b,t.threeInOne=g,t.areaDistChinaMap=y,t.areaDistBarChart=I,t.visaAndPayHistory=A,t.operateTotal=C,t.operateIndex=R,t.getBuyerRate=_,t.getSellerRate=w,t.operateOrderType=E,t.operateOrderPay=T,t.operateGetTop=N,t.operateGoodsCate=O,t.operateConvFunnel=P,t.signaturePayIndex=U,t.signaturePayChinaMap=M,t.signaturePayBarChart=k,t.dealOperate=L,t.dealTranslate=G,t.dealPickup=x,t.dealDelivery=B,t.dealReceipt=S,t.dealSettle=Z,t.dealPay=V,t.dealContract=j,t.dealPayChannel=z,t.dealAreaAmount=Y,t.baiduOverivew=F,t.baiduTrend=J,t.pageVisit=Q,t.getSources=W,t.getVistors=H,t.getAreas=X,t.paymentDays=q,t.getOverview=K,t.starLevel=$,t.partner=ee,t.customer=te,t.getAreaOrderList=ae,t.getOrderTrend=ne,t.getOrderMap=re,t.firstLevelCustoms=ie,t.secondLevelCustoms=se,t.getCompanyNum=oe,t.getCompanyTopAmount=ue,t.getInOutCountryAmount=le,t.getInOutGoodsAmount=ce,t.getInOutCustomsAmount=me,t.getSearchWordCloud=de,t.masOperateTotal=pe,t.masOperateIndex=ve,t.getItemProportion=fe,t.getOrderProportion=he,t.getOrderMoneyProportion=De,t.mainNewlyIncreasedPie=be,t.mainPublishGoodsNumber=ge,t.mainPublishGoodsIndustry=ye,t.mainPublishGoodsIndustryDetail=Ie,t.bubbleGradient=Ae,t.goodsCategoriesTop=Ce,t.goodsIndustryRatio=Re,t.moneyTransactionMoneyTop=_e,t.moneyIndustryRatio=we,t.industryPieChartsDetail=Ee,t.industryOrderAmount=Te,t.industryOrderAmountDetail=Ne;var Oe=a(313),Pe=a.n(Oe),Ue=a(290),Me=a.n(Ue),ke=a(268);Me.a.defaults.baseURL=ke.SERVER_ADDRESS;var Le=Me.a.CancelToken,Ge=[];Me.a.interceptors.request.use(function(e){return e.cancelToken=new Le(function(e){Ge.push(e)}),e},function(e){return Pe.a.reject(e)})},214:function(e,t,a){"use strict";var n=a(17),r=a(195),i=function(){return a.e(4).then(a.bind(null,626))},s=function(){return a.e(19).then(a.bind(null,621))},o=function(){return a.e(17).then(a.bind(null,634))},u=function(){return a.e(15).then(a.bind(null,625))},l=function(){return a.e(5).then(a.bind(null,624))},c=function(){return a.e(10).then(a.bind(null,628))},m=function(){return a.e(9).then(a.bind(null,630))},d=function(){return a.e(11).then(a.bind(null,623))},p=function(){return a.e(12).then(a.bind(null,622))},v=function(){return a.e(8).then(a.bind(null,633))},f=function(){return a.e(0).then(a.bind(null,629))},h=function(){return a.e(18).then(a.bind(null,631))},D=function(){return a.e(7).then(a.bind(null,627))},b=function(){return a.e(6).then(a.bind(null,632))};n.default.use(r.a);var g=new r.a({mode:"history",routes:[{path:"/flow-analysis",name:"flow-analysis",component:i,meta:{menuId:"8002"}},{path:"/attension-analysis",name:"attension-analysis",component:s,meta:{menuId:"8003"}},{path:"/login-analysis",name:"login-analysis",component:o,meta:{menuId:"8004"}},{path:"/overview",name:"overview",component:f,meta:{menuId:"8006"}},{path:"/register-analysis",name:"register-analysis",component:h,meta:{menuId:"8007"}},{path:"/goods-analysis",name:"goods-analysis",component:D,meta:{menuId:"8008"}},{path:"/shop-operate-analysis",name:"shop-operate-analysis",component:b,meta:{menuId:"8009"}},{path:"/dealing-overall",name:"dealing-overall",component:u,meta:{menuId:"8011"}},{path:"/dealing-analysis",name:"dealing-analysis",component:l,meta:{menuId:"8012"}},{path:"/national-pavilion",name:"national-pavilion",component:c,meta:{menuId:"8013"}},{path:"/provincial-pavilion",name:"provincial-pavilion",component:m,meta:{menuId:"8014"}},{path:"/brand-pavilion",name:"brand-pavilion",component:d,meta:{menuId:"8015"}},{path:"/belt-and-road",name:"belt-and-road",component:p,meta:{menuId:"8016"}},{path:"/tuv",name:"tuv",component:v,meta:{menuId:"8017"}}]});t.a=g},215:function(e,t,a){"use strict";var n=a(17),r=a(195),i=function(e){return a.e(13).then(function(){return e(a(614))}.bind(null,a)).catch(a.oe)},s=function(e){return a.e(16).then(function(){return e(a(635))}.bind(null,a)).catch(a.oe)},o=function(e){return a.e(3).then(function(){return e(a(617))}.bind(null,a)).catch(a.oe)},u=function(e){return a.e(21).then(function(){return e(a(616))}.bind(null,a)).catch(a.oe)},l=function(e){return a.e(22).then(function(){return e(a(612))}.bind(null,a)).catch(a.oe)},c=function(e){return a.e(1).then(function(){return e(a(620))}.bind(null,a)).catch(a.oe)},m=function(e){return a.e(20).then(function(){return e(a(618))}.bind(null,a)).catch(a.oe)},d=function(e){return a.e(2).then(function(){return e(a(619))}.bind(null,a)).catch(a.oe)},p=function(e){return a.e(23).then(function(){return e(a(613))}.bind(null,a)).catch(a.oe)},v=function(e){return a.e(14).then(function(){return e(a(615))}.bind(null,a)).catch(a.oe)};n.default.use(r.a);var f=new r.a({mode:"history",routes:[{path:"/flow-analysis",name:"flow-analysis",component:i,meta:{menuId:"8102"}},{path:"/login-analysis",name:"login-analysis",component:s,meta:{menuId:"8103"}},{path:"/overview",name:"overview",component:o,meta:{menuId:"8106"}},{path:"/increased-user",name:"increased-user",component:u,meta:{menuId:"8108"}},{path:"/authenticated-user",name:"authenticated-user",component:l,meta:{menuId:"8109"}},{path:"/signature-pay",name:"signature-pay",component:c,meta:{menuId:"8116"}},{path:"/shop-activate",name:"shop-activate",component:m,meta:{menuId:"8111"}},{path:"/shop-operation",name:"shop-operation",component:d,meta:{menuId:"8112"}},{path:"/dealing",name:"dealing",component:p,meta:{menuId:"8114"}},{path:"/geographical-amount",name:"geographical-amount",component:v,meta:{menuId:"8115"}}]});t.a=f},216:function(e,t,a){"use strict";var n=a(81),r=a.n(n),i=a(265),s=(a.n(i),{install:function(e,t){e.prototype.$platformId="000000",e.prototype.$platformName="",e.prototype.$initChart=function(e,t,a){var n=e.$refs[t];n&&(e[t]=e[t]||r.a.init(n),e[t].setOption(a))},e.prototype.$clearChartData=function(e,t){e[t]&&e[t].clear()}}});t.a=s},254:function(e,t){},255:function(e,t){},256:function(e,t){},257:function(e,t,a){a(565);var n=a(80)(a(309),a(572),null,null);e.exports=n.exports},268:function(e,t){const a={SERVER_ADDRESS:"http://jmbi-service.jm.com",CDN_ADDRESS:"/"};e.exports=a},309:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(569),r=a.n(n),i=a(570),s=a.n(i);t.default={name:"app",data:function(){return{isLoginPage:!1}},components:{topHeader:r.a,sideBarNav:s.a},methods:{routeChange:function(){var e=this.$route.path;this.isLoginPage="/login"===e}},mounted:function(){},created:function(){this.routeChange()}}},310:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"header",created:function(){this.currentUserName=document.getElementById("currentUserName").value,this.currentUserRoleId=document.getElementById("currentUserRoleId").value,this.isAdmin="0"===document.getElementById("currentUserRoleId").value;var e=document.querySelector("#visiblePlatformIds").value.split(",");this.platformList=e||[],this.platformName=this.$platformName},methods:{hasVisiblePlatform:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];if(this.isAdmin)return!0;for(var t=0;t<e.length;t++)for(var a=e[t],n=0;n<this.platformList.length;n++){var r=this.platformList[n];if(a===r)return!0}return!1},isVisible:function(e){return!!this.isAdmin||this.platformList.find(function(t){return t===e})}},data:function(){return{currentUserName:"",currentUserRoleId:"",platformList:[],platformName:"",hasServicePlatform:!1,hasTradePlatform:!1,isAdmin:!1,servicePlatformIds:["100300","100700","100800","100900","101000","101100","101300","101200","101400"],tradePlatformIds:["102000"]}}}},311:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(607),r=a.n(n),i=a(608),s=a.n(i);t.default={name:"sideBarNav",created:function(){var e=document.querySelector("#visibleMenuList").value.split(",");this.isAdmin="0"===document.getElementById("currentUserRoleId").value,this.MenuList=e,"100100"===this.$platformId?this.dataStructure=r.a:this.dataStructure=s.a},methods:{isVisible:function(e){if(this.isAdmin)return!0;for(var t=0;t<e.length;t++){var a=e[t];if(this.MenuList.find(function(e){return e===a}))return!0}return!1}},computed:{activeIndex:function(){return this.$route.name}},data:function(){return{MenuList:[],dataStructure:[],isAdmin:!1}}}},312:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(254),r=(a.n(n),a(256)),i=(a.n(r),a(17)),s=a(216),o=a(253),u=a.n(o),l=a(255),c=(a.n(l),a(257)),m=a.n(c),d=a(123),p=a(215),v=a(214);i.default.use(s.a),i.default.use(u.a),i.default.config.productionTip=!1;var f=document.querySelector("#visibleMenuList").value.split(","),h=document.querySelector("#currentPlatformId").value,D=document.querySelector("#currentPlatformName").value;i.default.prototype.$platformId=h,i.default.prototype.$platformName=D;var b;b="100100"===h?v.a:p.a,b.beforeEach(function(e,t,a){for(;d.requestCancels.length;){d.requestCancels.pop()()}if(e.matched.some(function(e){return-1!==f.indexOf(e.meta.menuId)}))a();else{if(-1!==["/2-1","/2-2","/2-3"].indexOf(e.path))return void a(!1);if(f.length)for(var n=p.a.options.routes,r=0;r<n.length;r++)if(-1!==f.indexOf(n[r].meta.menuId)){a(n[r].path);break}}a(!1)}),new i.default({el:"#app",router:b,template:"<App/>",components:{App:m.a}})},564:function(e,t){},565:function(e,t){},566:function(e,t){},568:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAeCAYAAACrI9dtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjhFN0E3QzZGRkQ4NzExRTY5NjZGQzIwOEE3MUM5RUVEIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjhFN0E3QzcwRkQ4NzExRTY5NjZGQzIwOEE3MUM5RUVEIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OEU3QTdDNkRGRDg3MTFFNjk2NkZDMjA4QTcxQzlFRUQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6OEU3QTdDNkVGRDg3MTFFNjk2NkZDMjA4QTcxQzlFRUQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5i0OKOAAADFklEQVR42sSXf2hNYRjH750t1xq2WvjDj4kam//kR0n8o/uH/MqPKPmDREntH5QSkuKPRSm1FIuVnyNpiRTFJIqb6ba1K2P2o/kxtGFmu74Pz7l9vZ1zz7n3nMtTn84573ne5/3e933P87w3FMrCksnkdHAANILPyT/2A7wF18F2UBz6F4aBJoA6MJx0t0/gIIjkUtBi0GMMPARi4Ca4DVptxD0HZbkQtESXx7IusBOU2vhOBkdAP/nLsk4JUlAZ6KUBLoLRHvfdU+onMzoyKFG3KPA5EM6g71jwjPrvC0LQQgrYms2mRZ9y8FVjfABFfkXVkqi1PuIcozib/Yrq1kAfQUEav4hLnAoS9R0kwFmwEuRlImgcBbqaxm+/+lS7xHvjkM+awGwvggrACup43MFvFGX0Vy4xo+AauAs6DGEDYLlTR8kxp4wUIHbUwX81+bRlsAphsADcp/6SB+eajquMhMe22yH4hWxEUf8RoIZixEG+9XKplgzLOsFJsAtssUt6unR9fkSRsHsUZ500FoN3vH9kQA/B1huz2ebjK5/HFUMa9lLDmQwC1QclSuO9tuqkPDzWh0FJAx4DFIFvAYuyytmgJK5KbX8SDod7PMaQzzeSZgDZbxMz1JWv12ERVagPvRkE2ED3/aYgXJpAO+43eZwl0TFLHzu5lCTS5JTzmiQ3auUf0D7NeiRJLR+uVbSkDzyKilKf0+aGXWTTYQe9/wL20PMhFqXL1kXv5dg83kVQoZ5OLYtK4zJqSPBmx/1UIxeZVmmIqrLx2erywTSQb2PqvIabO/RCPs01Uvm1TvF5/K9Cqn0tUd00S+zbYCNmjOw38JL8pLRNY6dS0GIMymfyZqPOpU6RJIqtVkuGlWpiRLu2sb2XBGo3lSXgis0A8qvnq88lai93EPVTz+eHk97sBphklxtCyFGSEmTZ5ugnLxW7BNTg3SN12wbkK42jrcVhq9ThnezNE7ifCWZQ2hHrAx3gIaiH74tc/P2KmbPkN2ZewBp/z1Lofxv9hZKcVBFEzCBm6jIYAtWYpXgQon4JMACncDmwc6Z4XAAAAABJRU5ErkJggg=="},569:function(e,t,a){a(564);var n=a(80)(a(310),a(571),null,null);e.exports=n.exports},570:function(e,t,a){a(566);var n=a(80)(a(311),a(573),null,null);e.exports=n.exports},571:function(e,t,a){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("header",{staticClass:"top-header clearfix"},[e._m(0),e._v(" "),a("span",{staticClass:"welcome left"},[e._v("热烈欢迎，"+e._s(e.currentUserName)+"！")]),e._v(" "),a("div",{staticClass:"user-profile right"},[a("a",{staticClass:"platform"},[e._v("平台切换：\n      "),a("span",{staticClass:"dropdown"},[e._v(e._s(e.platformName)+"\n        "),a("i",{staticClass:"icon-link"})]),e._v(" "),a("div",{staticClass:"second-nav clearfix"},[a("ul",[a("h6",[e._v("大宗商品交易平台")]),e._v(" "),e.hasVisiblePlatform(e.servicePlatformIds)?[e.isVisible("100100")?a("li",[e._m(1)]):e._e(),e._v(" "),e.isVisible("100300")?a("li",[e._m(2)]):e._e(),e._v(" "),e.isVisible("100700")?a("li",[e._m(3)]):e._e(),e._v(" "),e.isVisible("100800")?a("li",[e._m(4)]):e._e(),e._v(" "),e.isVisible("100900")?a("li",[e._m(5)]):e._e(),e._v(" "),e.isVisible("101000")?a("li",[e._m(6)]):e._e(),e._v(" "),e.isVisible("101100")?a("li",[e._m(7)]):e._e(),e._v(" "),e.isVisible("101300")?a("li",[e._m(8)]):e._e(),e._v(" "),e.isVisible("101200")?a("li",[e._m(9)]):e._e(),e._v(" "),e.isVisible("101400")?a("li",[e._m(10)]):e._e()]:[a("li",[a("p",[e._v("\n                须授权访问\n              ")])])]],2),e._v(" "),a("ul",[a("h6",[e._v("服务平台")]),e._v(" "),e.hasVisiblePlatform(e.tradePlatformIds)?[e.isVisible("102000")?a("li",[e._m(11)]):e._e()]:[a("li",[a("p",[e._v("\n                须授权访问\n              ")])])]],2)])]),e._v(" "),a("a",{staticClass:"icon-user",attrs:{href:"/user/user"}}),e._v(" "),a("a",{directives:[{name:"show",rawName:"v-show",value:"0"===e.currentUserRoleId,expression:"currentUserRoleId === '0'"}],staticClass:"icon-setting",attrs:{href:"/user/list"}}),e._v(" "),a("a",{staticClass:"icon-logout",attrs:{href:"/doLogout"}})])])},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a",{staticClass:"jm-logo left",attrs:{href:"/index"}},[n("img",{attrs:{src:a(568),alt:""}}),e._v(" "),n("span",[e._v("聚贸大数据BI平台")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[a("a",{attrs:{href:"/index2?platformId=100100"}},[e._v("交易全站")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[a("a",{attrs:{href:"/index2?platformId=100300"}},[e._v("聚贸有色")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[a("a",{attrs:{href:"/index2?platformId=100700"}},[e._v("聚贸煤炭")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[a("a",{attrs:{href:"/index2?platformId=100800"}},[e._v("聚贸钢铁")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[a("a",{attrs:{href:"/index2?platformId=100900"}},[e._v("聚贸矿产")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[a("a",{attrs:{href:"/index2?platformId=101000"}},[e._v("聚贸农产品")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[a("a",{attrs:{href:"/index2?platformId=101100"}},[e._v("聚贸工业品")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[a("a",{attrs:{href:"/index2?platformId=101300"}},[e._v("聚贸机械")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[a("a",{attrs:{href:"/index2?platformId=101200"}},[e._v("聚贸消费品")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[a("a",{attrs:{href:"/index2?platformId=101400"}},[e._v("聚贸食品")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[a("a",{attrs:{href:"/index2?platformId=102000"}},[e._v("聚贸通")])])}]}},572:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[e.isLoginPage?e._e():a("top-header"),e._v(" "),e.isLoginPage?e._e():a("main",{staticClass:"jm-body"},[a("side-bar-nav"),e._v(" "),a("div",{staticClass:"jm-main"},[a("div",{staticClass:"jm-content"},[a("router-view")],1)])],1),e._v(" "),e.isLoginPage?a("router-view"):e._e()],1)},staticRenderFns:[]}},573:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("aside",{staticClass:"jm-sidebar"},[a("el-menu",{attrs:{"default-active":e.activeIndex,theme:"dark",router:!0}},e._l(e.dataStructure.menuData,function(t){return e.isVisible(t.meta)?a("el-submenu",{key:t,attrs:{index:t.path}},[a("template",{slot:"title"},[a("i",{staticClass:"icon",class:t.iconClass}),e._v(e._s(t.name))]),e._v(" "),e._l(t.items,function(t){return[e.isVisible(t.meta)?a("el-menu-item",{attrs:{index:t.path}},[a("span",{class:t.iconClass},[e._v(e._s(t.name))])]):e._e(),e._v(" "),e._l(t.items,function(t){return e.isVisible(t.meta)?a("el-menu-item",{key:t,attrs:{index:t.path}},[a("span",{class:t.iconClass},[e._v(e._s(t.name))])]):e._e()})]})],2):e._e()}))],1)},staticRenderFns:[]}},607:function(e,t){e.exports={platform:"聚贸总站BI",menuData:[{name:"用户行为",path:"1",iconClass:{"icon-yhxw":!0},meta:["8001","8002","8003","8004"],items:[{name:"流量分析",path:"flow-analysis",iconClass:{"icon-item":!0},meta:["8002"]},{name:"登录分析",path:"login-analysis",iconClass:{"icon-item":!0},meta:["8004"]}]},{name:"运营情况",path:"2",iconClass:{"icon-yyqk":!0},meta:["8005","8006","8007","8008","8009","8010","8011","8012","8013","8014","8015","8016","8017"],items:[{name:"总览",path:"overview",iconClass:{"icon-item":!0},meta:["8006"]},{name:"注册分析",path:"register-analysis",iconClass:{"icon-item":!0},meta:["8007"]},{name:"商品分析",path:"goods-analysis",iconClass:{"icon-item":!0},meta:["8008"]},{name:"店铺分析",path:"shop-operate-analysis",iconClass:{"icon-item":!0},meta:["8009"]},{name:"成交分析",path:"2-3",iconClass:{"icon-item":!0},meta:["8010","8011","8012"],items:[{name:"总体情况",path:"dealing-overall",iconClass:{"sub-node-item":!0},meta:["8011"]},{name:"交易分析",iconClass:{"sub-node-item":!0},path:"dealing-analysis",meta:["8012"]}]}]}]}},608:function(e,t){e.exports={platform:"聚贸交易BI",menuData:[{name:"用户行为",path:"1",iconClass:{"icon-yhxw":!0},meta:["8101","8102","8103"],items:[{name:"流量分析",path:"flow-analysis",iconClass:{"icon-item":!0},meta:["8102"]},{name:"登录分析",path:"login-analysis",iconClass:{"icon-item":!0},meta:["8103"]}]},{name:"运营情况",path:"2",iconClass:{"icon-yyqk":!0},meta:["8105","8106","8108","8109","8116","8111","8112","8114","8115"],items:[{name:"总览",path:"overview",iconClass:{"icon-item":!0},meta:["8106"]},{name:"注册分析",path:"2-1",iconClass:{"icon-item":!0},meta:["8107","8108","8109","8116"],items:[{name:"日新增用户",path:"increased-user",iconClass:{"sub-node-item":!0},meta:["8108"]},{name:"认证用户",path:"authenticated-user",iconClass:{"sub-node-item":!0},meta:["8109"]},{name:"签章支付",path:"signature-pay",iconClass:{"sub-node-item":!0},meta:["8116"]}]},{name:"店铺分析",path:"2-2",iconClass:{"icon-item":!0},meta:["8110","8111","8112"],items:[{name:"店铺激活",path:"shop-activate",iconClass:{"sub-node-item":!0},meta:["8111"]},{name:"店铺运营",path:"shop-operation",iconClass:{"sub-node-item":!0},meta:["8112"]}]},{name:"成交分析",path:"2-3",iconClass:{"icon-item":!0},meta:["8113","8114","8115"],items:[{name:"成交概览",path:"dealing",iconClass:{"sub-node-item":!0},meta:["8114"]},{name:"地域金额",iconClass:{"sub-node-item":!0},path:"geographical-amount",meta:["8115"]}]}]}]}},611:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAARCAYAAAA7bUf6AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkU4MDlGNzhBMDNDNTExRTdCODU5RkEzOEE5NTQwNzhGIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkU4MDlGNzhCMDNDNTExRTdCODU5RkEzOEE5NTQwNzhGIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RTgwOUY3ODgwM0M1MTFFN0I4NTlGQTM4QTk1NDA3OEYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RTgwOUY3ODkwM0M1MTFFN0I4NTlGQTM4QTk1NDA3OEYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5ZVU7/AAACOElEQVR42lyTu2tUURCHZ663EYKoETubxWBARdRFEQRRsDR2EVejlbE3vjpJYSdpUu3aiNmgpkv+g3RCTEASi4CktIiJWthYyPjNnHv23niXOTNnHr95ndVjL7+Lf6rKafxkCOmBmdwUldMqetjMfmBfhy/i9Br5t8dwj9giIaRwVB2OTWwX0M4AMIrW0UcJmIFfhDbx7jiAJ3YqAyQBvoDuoLwBX7MMm5J4uUugLXE5B8B77iPw6aikQusg34cuB4CXaQHekihFuxkP5Zr7EXaPuLseTzs2hN8rDOPQttXeDt6KUYm1Uss+B9fjZ3ILX1q0g/sOXHs6ifNf7LN5Po1vC9pP0BzVbNULCKdv0FnEQyXHmARiZBDLhaRledDzaE+tGl+zUnnL+aggw0l8PnkGa1QSc4gtmmGaDMBqCblY4j7DThUgH8FpJ+88J+K+incvz2JQXvOusovfcIEGQRzIsye/RD1sDxsI8bi0iWIyzLnrj22DVtoePVjt/xO26qr1K01bkzPQlwIDD8gmaqNKwjKpF9GYhe7Z0AS06JW8IegqvK2qze67vpKqxW71RKIdTwhRvVzn2i/J4H+mJ8R/wHSJ+3a16lXOngxmZT/rvctRBH/6U1x/lVUL8yAfh3/EYRzZV97Lg4zW6hmdR17AxhuROVeUWg9rGv7Ve0S3TOA7ZK9mB84WrI3bbeQrqvYM3s+FFWZ7nvk8ACfQrWB8zH0d8x8yb6CbwrZChW7vD54E3z8BBgA1qAWg+c0DswAAAABJRU5ErkJggg=="}},[312]);
//# sourceMappingURL=app.8c7a882064f779e49c11.js.map