import React, { Component } from "react";
import { Route, HashRouter as Router, Switch } from "react-router-dom";
import Home from "./containers/Home/index"; //主页
import SignUp from "./containers/SignUp/index"; //注册
import SignIn from "./containers/SignIn/index"; // 登录
import SearchList from "./containers/SearchList/index"; //查询之后产品列表页
import B2c_platforms from "./containers/B2c_platforms/index"; //账号授权-B2C账号授权
import Notehtml from "./containers/B2c_platforms/Notehtml/index"; // B2C提示页
import Product from "./containers/Product/index"; //一键刊登-Amazon刊登商品
import Details from "./containers/Products/Details/index"; //产品详情
import DetailEdit from "./containers/Products/DetailEdit/index"; //产品编辑
import Orders from "./containers/Orders/Orders"; //订单查询
import AbnormalOrder from "./containers/Orders/AbnormalOrder"; //异常订单查询
import TimeOrder from "./containers/Orders/TimeOrder"; //超时订单
import Bounces from "./containers/Orders/Bounces"; //退件订单
import SalesAnalysis from "./containers/SalesAnalysis/index"; // 经营分析-销售分析
import AuthLogistics from "./containers/AuthLogistics/index"; //账号授权-物流账号授权
import International from "./containers/Logistics/International"; //物流配送-国际物流查询
import Domestic from "./containers/Logistics/Domestic"; //物流配送-国内物流查询
import ShoppingCart from "./containers/ShoppingCart/index"; //购物车
import User from "./containers/SelfContent/User"; //个人中心 基本资料
import ChangePass from "./containers/SelfContent/ChangePass"; //个人中心-更改密码
import Recharge_histories from "./containers/Accounts/Recharge_histories"; //财务管理-个人账户
import Recharge from "./containers/Accounts/Recharge"; //财务管理-个人账户-充值
import Payment_records from "./containers/Accounts/Payment_records"; //财务管理-付款记录
import Member from "./containers/Members/Member"; //我的会员
import Subscription from "./containers/Members/Subscription"; //我的会员-成为会员充值页面
import Subscribe from "./containers/SelfContent/Subscribe"; //我的会员-我的订阅
import Datadrap from "./containers/Datadrap/index"; //数据抓取

import createHistory from "history/createBrowserHistory";

const history = createHistory({
  basename: "/"
});
class App extends Component {
  componentDidMount() {}

  render() {
    return (
      <div className="app">
        <Router history={history}>
          <Route exact path="/" component={Home} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/sells/products/:id" component={Details} />
          <Route path="/sells/search" component={SearchList} />
          <Route exact path="/sells/b2c_platforms" component={B2c_platforms} />
          <Route exact path="/sells/b2c_platforms/note" component={Notehtml} />
          <Route exact path="/sells/products" component={Product} />
          <Route
            exact
            path="/sells/products/:id/detail_edit"
            component={DetailEdit}
          />
          <Route exact path="/sells/orders" component={Orders} />
          <Route
            exact
            path="/sells/orders/abnormal_order"
            component={AbnormalOrder}
          />
          <Route
            exact
            path="/sells/orders/overtime_order"
            component={TimeOrder}
          />
          <Route exact path="/sells/bounces" component={Bounces} />
          <Route
            exact
            path="/sells/orders/overtime_order"
            component={TimeOrder}
          />
          <Route
            exact
            path="/analysis/data_analyses/sales_analysis"
            component={SalesAnalysis}
          />
          <Route
            exact
            path="/sells/b2c_platforms/auth_logistics"
            component={AuthLogistics}
          />
          <Route
            exact
            path="/logistics/international"
            component={International}
          />
          <Route exact path="/logistics/domestic" component={Domestic} />
          <Route
            exact
            path="/sells/orders/shopping_cart"
            component={ShoppingCart}
          />
          <Route exact path="/sells/users" component={User} />
          <Route exact path="/sells/changePass" component={ChangePass} />
          <Route exact path="/sells/users/subscribe" component={Subscribe} />
          <Route
            exact
            path="/sells/accounts/recharge_histories"
            component={Recharge_histories}
          />
          <Route
            exact
            path="/sells/financial_management/recharge"
            component={Recharge}
          />
          <Route exact path="/sells/members" component={Member} />
          <Route
            exact
            path="/sells/members/subscription"
            component={Subscription}
          />
          <Route
            exact
            path="/sells/financial_management/payment_records"
            component={Payment_records}
          />
          <Route exact path="/analysis/data_grap" component={Datadrap} />
        </Router>
      </div>
    );
  }
}

export default App;

// <Route exact path="/qa/:recordId" component={ProtectedQa} />
