import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
// import { Route, HashRouter as Router, Switch } from "react-router-dom";
import createHistory from "history/createBrowserHistory";
import Footer from "./components/Footer/index";

import PageApp from "./App.js";

//主页
import PageHome from "./containers/Home/index";

//注册
import PageSignUp from "./containers/SignUp/index";
//登录
import PageSignIn from "./containers/SignIn/index";
//查询之后产品列表页
import PageSearchList from "./containers/SearchList/index";
//账号授权-B2C账号授权
import PageB2cplatforms from "./containers/B2c_platforms/index";
//B2C提示页
import PageNotehtml from "./containers/B2c_platforms/Notehtml/index";
//一键刊登-Amazon刊登商品
import PageProduct from "./containers/Product/index";
//产品详情
import PageDetails from "./containers/Products/Details/index";
//产品编辑
import PageDetailEdit from "./containers/Products/DetailEdit/index";
//订单查询
import PageOrders from "./containers/Orders/Orders";
//异常订单查询
import PageAbnormalOrder from "./containers/Orders/AbnormalOrder";
//超时订单
import PageTimeOrder from "./containers/Orders/TimeOrder";
// 退件订单
import PageBounces from "./containers/Orders/Bounces";
//经营分析-销售分析
import PageSalesAnalysis from "./containers/SalesAnalysis/index";
//账号授权-物流账号授权
import PageAuthLogistics from "./containers/AuthLogistics/index";
//物流配送-国际物流查询
import PageInternational from "./containers/Logistics/International";
//物流配送-国内物流查询
import PageDomestic from "./containers/Logistics/Domestic";
//购物车
import PageShoppingCart from "./containers/ShoppingCart/index";
//个人中心 基本资料
import PageUser from "./containers/SelfContent/User";
//个人中心-更改密码
import PageChangePass from "./containers/SelfContent/ChangePass/index";
//财务管理-个人账户
import PageRechargeHistories from "./containers/Accounts/Recharge_histories";
//财务管理-个人账户-充值
import PageRecharge from "./containers/Accounts/Recharge";
//财务管理-付款记录
import PagePaymentRecords from "./containers/Accounts/Payment_records";
//我的会员
import PageMember from "./containers/Members/Member";
//我的会员-成为会员充值页面
import PageSubscription from "./containers/Members/Subscription";
//我的会员-我的订阅
import PageSubscribe from "./containers/SelfContent/Subscribe";
//意见箱
import PageFeedBack from "./containers/FeedBack/index";
//数据抓取
import PageDatadrap from "./containers/Datadrap/index";
//公告
import PageBulletins from "./containers/Bulletins/index";
//关于我们
import PageAbout from "./components/About/index";
//常用邮箱列表
import PageUsedEmail from "./components/UsedEmail/index";
//入门指引
import PageGuid from "./components/Guid/index";
//充值成功
import PageSuccess from "./components/RechargeSuccess/index";
//亚马逊学校
import PageAmazonSchool from "./components/AmazonSchool/index";
//shopee学校
import PageShopeeSchool from "./components/ShopeeSchool/index";
//各站招商经理
import PageLeasingManager from "./components/LeasingManager/index";

const history = createHistory({
  basename: "/"
});

const Root = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/signup" component={PageSignUp} />
        <Route exact path="/signin" component={PageSignIn} />
        <Route exact path="/rechargeSuccess" component={PageSuccess} />
        <Route component={PageApp} />
      </Switch>
      <Route exact path="/" component={PageHome} />
      <Route exact path="/about" component={PageAbout} />
      <Route exact path="/guid" component={PageGuid} />
      <Route exact path="/amazonSchool" component={PageAmazonSchool} />
      <Route exact path="/shopeeSchool" component={PageShopeeSchool} />

      <Route exact path="/sells/products/:id" component={PageDetails} />
      <Route path="/sells/search" component={PageSearchList} />
      <Route exact path="/sells/b2c_platforms" component={PageB2cplatforms} />
      <Route exact path="/sells/b2c_platforms/note" component={PageNotehtml} />
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
      <Route exact path="/sells/bulletins" component={PageBulletins} />
      <Route exact path="/feedBack" component={PageFeedBack} />
      <Route exact path="/emails" component={PageUsedEmail} />
      <Route exact path="/leasing" component={PageLeasingManager} />
      <Switch>
        <Route path="/" component={Footer}>
          {/* <div style={{ marginTop: "20px" }}>
          <Footer history={history} />
        </div> */}
        </Route>
      </Switch>
    </Router>
  );
};

export default Root;
