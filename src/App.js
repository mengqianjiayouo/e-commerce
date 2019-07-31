import React, { Component } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "./containers/Home/index";
import SignUp from "./containers/SignUp/index";
import SignIn from "./containers/SignIn/index";
import SearchList from "./containers/SearchList/index";
import B2c_platforms from "./containers/B2c_platforms/index";
import Product from "./containers/Product/index";
import Details from "./containers/Products/Details/index";
import DetailEdit from "./containers/Products/DetailEdit/index";
import Orders from "./containers/Orders/Orders";
import AbnormalOrder from "./containers/Orders/AbnormalOrder";
import TimeOrder from "./containers/Orders/TimeOrder";
import Bounces from "./containers/Orders/Bounces";
import SalesAnalysis from "./containers/SalesAnalysis/index";
import AuthLogistics from "./containers/AuthLogistics/index";
import International from "./containers/Logistics/International";
import ShoppingCart from "./containers/ShoppingCart/index";

class App extends Component {
  componentDidMount() {}

  render() {
    return (
      <div className="app">
        <Router>
          <Route exact path="/" component={Home} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/sells/products/:id" component={Details} />
          <Route path="/sells/search" component={SearchList} />
          <Route exact path="/sells/b2c_platforms" component={B2c_platforms} />
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
          <Route
            exact
            path="/sells/orders/shopping_cart"
            component={ShoppingCart}
          />
        </Router>
      </div>
    );
  }
}

export default App;

// <Route exact path="/qa/:recordId" component={ProtectedQa} />
