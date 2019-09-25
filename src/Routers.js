import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
// import { Route, HashRouter as Router, Switch } from "react-router-dom";
import createHistory from "history/createBrowserHistory";
// import Bundle from "./bundle";
import Footer from "./components/Footer/index";

/*
 * 代码分割模型
 */
// 默认app
/* const PageApp = props => {
  return (
    <Bundle load={() => import("./App.js")}>
      {PageApp => <PageApp {...props} />}
    </Bundle>
  );
}; */
import PageApp from "./App.js";

//主页
/* const PageHome = props => {
  return (
    <Bundle load={() => import("./containers/Home/index")}>
      {PageHome => <PageHome {...props} />}
    </Bundle>
  );
}; */
import PageHome from "./containers/Home/index";

//注册
/* const PageSignUp = props => {
  return (
    <Bundle load={() => import("./containers/SignUp/index")}>
      {PageSignUp => <PageSignUp {...props} />}
    </Bundle>
  );
}; */
import PageSignUp from "./containers/SignUp/index";
//登录
/* const PageSignIn = props => {
  return (
    <Bundle load={() => import("./containers/SignIn/index")}>
      {PageSignIn => <PageSignIn {...props} />}
    </Bundle>
  );
}; */
import PageSignIn from "./containers/SignIn/index";
//查询之后产品列表页
/* const PageSearchList = props => {
  return (
    <Bundle load={() => import("./containers/SearchList/index")}>
      {PageSearchList => <PageSearchList {...props} />}
    </Bundle>
  );
}; */
import PageSearchList from "./containers/SearchList/index";
//账号授权-B2C账号授权
/* const PageB2cplatforms = props => {
  return (
    <Bundle load={() => import("./containers/B2c_platforms/index")}>
      {PageB2cplatforms => <PageB2cplatforms {...props} />}
    </Bundle>
  );
}; */
import PageB2cplatforms from "./containers/B2c_platforms/index";
//B2C提示页
/* const PageNotehtml = props => {
  return (
    <Bundle load={() => import("./containers/B2c_platforms/Notehtml/index")}>
      {PageNotehtml => <PageNotehtml {...props} />}
    </Bundle>
  );
}; */
import PageNotehtml from "./containers/B2c_platforms/Notehtml/index";
//一键刊登-Amazon刊登商品
/* const PageProduct = props => {
  return (
    <Bundle load={() => import("./containers/Product/index")}>
      {PageProduct => <PageProduct {...props} />}
    </Bundle>
  );
}; */
import PageProduct from "./containers/Product/index";
//产品详情
/* const PageDetails = props => {
  return (
    <Bundle load={() => import("./containers/Products/Details/index")}>
      {PageDetails => <PageDetails {...props} />}
    </Bundle>
  );
}; */
import PageDetails from "./containers/Products/Details/index";
//产品编辑
/* const PageDetailEdit = props => {
  return (
    <Bundle load={() => import("./containers/Products/DetailEdit/index")}>
      {PageDetailEdit => <PageDetailEdit {...props} />}
    </Bundle>
  );
}; */
import PageDetailEdit from "./containers/Products/DetailEdit/index";
//订单查询
/* const PageOrders = props => {
  return (
    <Bundle load={() => import("./containers/Orders/Orders")}>
      {PageOrders => <PageOrders {...props} />}
    </Bundle>
  );
}; */
import PageOrders from "./containers/Orders/Orders";
//异常订单查询
/* const PageAbnormalOrder = props => {
  return (
    <Bundle load={() => import("./containers/Orders/AbnormalOrder")}>
      {PageAbnormalOrder => <PageAbnormalOrder {...props} />}
    </Bundle>
  );
}; */
import PageAbnormalOrder from "./containers/Orders/AbnormalOrder";
//超时订单
/* const PageTimeOrder = props => {
  return (
    <Bundle load={() => import("./containers/Orders/TimeOrder")}>
      {PageTimeOrder => <PageTimeOrder {...props} />}
    </Bundle>
  );
}; */
import PageTimeOrder from "./containers/Orders/TimeOrder";
// 退件订单
/* const PageBounces = props => {
  return (
    <Bundle load={() => import("./containers/Orders/Bounces")}>
      {PageBounces => <PageBounces {...props} />}
    </Bundle>
  );
}; */
import PageBounces from "./containers/Orders/Bounces";
//经营分析-销售分析
/* const PageSalesAnalysis = props => {
  return (
    <Bundle load={() => import("./containers/SalesAnalysis/index")}>
      {PageSalesAnalysis => <PageSalesAnalysis {...props} />}
    </Bundle>
  );
}; */
import PageSalesAnalysis from "./containers/SalesAnalysis/index";
//账号授权-物流账号授权
/* const PageAuthLogistics = props => {
  return (
    <Bundle load={() => import("./containers/AuthLogistics/index")}>
      {PageAuthLogistics => <PageAuthLogistics {...props} />}
    </Bundle>
  );
}; */
import PageAuthLogistics from "./containers/AuthLogistics/index";
//物流配送-国际物流查询
/* const PageInternational = props => {
  return (
    <Bundle load={() => import("./containers/Logistics/International")}>
      {PageInternational => <PageInternational {...props} />}
    </Bundle>
  );
}; */
import PageInternational from "./containers/Logistics/International";
//物流配送-国内物流查询
/* const PageDomestic = props => {
  return (
    <Bundle load={() => import("./containers/Logistics/Domestic")}>
      {PageDomestic => <PageDomestic {...props} />}
    </Bundle>
  );
}; */
import PageDomestic from "./containers/Logistics/Domestic";
//购物车
/* const PageShoppingCart = props => {
  return (
    <Bundle load={() => import("./containers/ShoppingCart/index")}>
      {PageShoppingCart => <PageShoppingCart {...props} />}
    </Bundle>
  );
}; */
import PageShoppingCart from "./containers/ShoppingCart/index";
//个人中心 基本资料
/* const PageUser = props => {
  return (
    <Bundle load={() => import("./containers/SelfContent/User")}>
      {PageUser => <PageUser {...props} />}
    </Bundle>
  );
}; */
import PageUser from "./containers/SelfContent/User";
//个人中心-更改密码
/* const PageChangePass = props => {
  return (
    <Bundle load={() => import("./containers/SelfContent/ChangePass")}>
      {PageChangePass => <PageChangePass {...props} />}
    </Bundle>
  );
}; */
import PageChangePass from "./containers/SelfContent/ChangePass/index";
//财务管理-个人账户
/* const PageRechargeHistories = props => {
  return (
    <Bundle load={() => import("./containers/Accounts/Recharge_histories")}>
      {PageRechargeHistories => <PageRechargeHistories {...props} />}
    </Bundle>
  );
}; */
import PageRechargeHistories from "./containers/Accounts/Recharge_histories";
//财务管理-个人账户-充值
/* const PageRecharge = props => {
  return (
    <Bundle load={() => import("./containers/Accounts/Recharge")}>
      {PageRecharge => <PageRecharge {...props} />}
    </Bundle>
  );
}; */
import PageRecharge from "./containers/Accounts/Recharge";
//财务管理-付款记录
/* const PagePaymentRecords = props => {
  return (
    <Bundle load={() => import("./containers/Accounts/Payment_records")}>
      {PagePaymentRecords => <PagePaymentRecords {...props} />}
    </Bundle>
  );
}; */
import PagePaymentRecords from "./containers/Accounts/Payment_records";
//我的会员
/* const PageMember = props => {
  return (
    <Bundle load={() => import("./containers/Members/Member")}>
      {PageMember => <PageMember {...props} />}
    </Bundle>
  );
}; */
import PageMember from "./containers/Members/Member";
//我的会员-成为会员充值页面
/* const PageSubscription = props => {
  return (
    <Bundle load={() => import("./containers/Members/Subscription")}>
      {PageSubscription => <PageSubscription {...props} />}
    </Bundle>
  );
}; */
import PageSubscription from "./containers/Members/Subscription";
//我的会员-我的订阅
/* const PageSubscribe = props => {
  return (
    <Bundle load={() => import("./containers/SelfContent/Subscribe")}>
      {PageSubscribe => <PageSubscribe {...props} />}
    </Bundle>
  );
}; */
import PageSubscribe from "./containers/SelfContent/Subscribe";
//数据抓取
/* const PageDatadrap = props => {
  return (
    <Bundle load={() => import("./containers/Datadrap/index")}>
      {PageDatadrap => <PageDatadrap {...props} />}
    </Bundle>
  );
}; */
import PageDatadrap from "./containers/Datadrap/index";

const history = createHistory({
  basename: "/"
});

const Root = () => {
  let islogin = false;
  let user = sessionStorage.getItem("user");
  if (JSON.parse(user)) {
    islogin = true;
  }

  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/signup" component={PageSignUp} />
        <Route exact path="/signin" component={PageSignIn} />
        <Route component={PageApp} />
      </Switch>
      <div style={{ paddingLeft: islogin ? "140px" : 0, minHeight: "858px" }}>
        <Route exact path="/" component={PageHome} />
        <Route exact path="/sells/products/:id" component={PageDetails} />
        <Route path="/sells/search" component={PageSearchList} />
        <Route exact path="/sells/b2c_platforms" component={PageB2cplatforms} />
        <Route
          exact
          path="/sells/b2c_platforms/note"
          component={PageNotehtml}
        />
        <Route exact path="/sells/products" component={PageProduct} />
        <Route
          exact
          path="/sells/products/:id/detail_edit"
          component={PageDetailEdit}
        />
        <Route exact path="/sells/orders" component={PageOrders} />
        <Route
          exact
          path="/sells/orders/abnormal_order"
          component={PageAbnormalOrder}
        />
        <Route
          exact
          path="/sells/orders/overtime_order"
          component={PageTimeOrder}
        />
        <Route exact path="/sells/bounces" component={PageBounces} />
        <Route
          exact
          path="/analysis/data_analyses/sales_analysis"
          component={PageSalesAnalysis}
        />
        <Route
          exact
          path="/sells/b2c_platforms/auth_logistics"
          component={PageAuthLogistics}
        />
        <Route
          exact
          path="/logistics/international"
          component={PageInternational}
        />
        <Route exact path="/logistics/domestic" component={PageDomestic} />
        <Route
          exact
          path="/sells/orders/shopping_cart"
          component={PageShoppingCart}
        />
        <Route exact path="/sells/users" component={PageUser} />
        <Route exact path="/sells/changePass" component={PageChangePass} />
        <Route exact path="/sells/users/subscribe" component={PageSubscribe} />
        <Route
          exact
          path="/sells/accounts/recharge_histories"
          component={PageRechargeHistories}
        />
        <Route
          exact
          path="/sells/financial_management/recharge"
          component={PageRecharge}
        />
        <Route exact path="/sells/members" component={PageMember} />
        <Route
          exact
          path="/sells/members/subscription"
          component={PageSubscription}
        />
        <Route
          exact
          path="/sells/financial_management/payment_records"
          component={PagePaymentRecords}
        />
        <Route exact path="/analysis/data_grap" component={PageDatadrap} />
      </div>
      <div style={{ marginTop: "20px" }}>
        <Footer />
      </div>
    </Router>
  );
};

export default Root;
