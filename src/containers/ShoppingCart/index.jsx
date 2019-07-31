import React, { Component } from "react";
import Topbar from "../../components/Topbar/index";
import ReturnTop from "../../components/ReturnTop/index";
import Footer from "../../components/Footer/index";
import SideBar from "../../components/SideBar/index";
import { connect } from "react-redux";
import { Row, Col, Table, Button, Dropdown } from "react-bootstrap";
import DatePicker from "react-datepicker";
const Orderstatus = {
  0: "删除",
  1: "草稿",
  2: "确认",
  3: "异常",
  4: "已提交",
  5: "已打印",
  6: "已下架",
  7: "已打包",
  8: "已装袋",
  9: "装袋完成",
  10: "已加挂",
  11: "物流完成",
  12: "物流发货",
  13: "已签收"
};
class ShoppingCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      islogin: false,
      platform: "",
      setStartDate: "",
      setEndDate: "",
      account: "",
      site: "",
      accountType: "订单编号",
      logists: "",
      country: "",
      orderType: 0,
      data: [
        {
          order_id: 1,
          order_code: "po9493821123",
          platform: "88",
          order_platform_type: "uk",
          order_platform_code: "49338211039834551",
          create_type: "api",
          warehouse_id: 10,
          to_warehouse_id: 4,
          order_type: 0,
          country_code: "RMB",
          parcel_declared_value: "10.000",
          declared_weight: "2.000",
          shipping_fee_estimate: "1.000",
          currency_code: "RMB",
          parcel_contents: "this is my phone",
          parcel_quantity: 0,
          order_status: 1,
          order_hold_inventory: 0,
          order_exception_status: 0,
          order_waiting_status: 0,
          print_quantity: 0,
          add_time: "2019-07-31 01:51:22",
          update_time: "0000-00-00 00:00:00",
          order_paydate: "0000-00-00 00:00:00",
          reference_no: "",
          remark: "",
          site_id: "",
          seller_id: "1",
          sync_count: 0,
          sync_express_ship: 0
        }
      ]
    };
  }
  componentDidMount() {
    this.checkIsLogin();
  }

  checkIsLogin() {
    let user = sessionStorage.getItem("user");
    if (user) {
      this.setState({
        islogin: true
      });
    }
  }
  changePlat(a) {
    this.props.dispatch({ type: "PLATCHANGE", plat: a });
  }
  getData() {}
  showLogin() {}
  render() {
    const {
      islogin,
      platform,
      account,
      site,
      accountType,
      logists,
      orderType,
      country,
      data
    } = this.state;
    // console.log(this.props.state);

    return (
      <div className="home orders">
        {islogin ? (
          <div className="home_left">
            <SideBar />
          </div>
        ) : null}

        <div
          className="home_right"
          style={{ paddingLeft: islogin ? "118px" : 0 }}
        >
          <Topbar
            {...this.props}
            islogin={this.state.islogin}
            changePlat={a => {
              this.changePlat(a);
            }}
          />
          <ReturnTop />

          <div className="main">
            <div className="header">
              <span>我的购物车</span>
            </div>
            <div className="plats" style={{ padding: "  20px" }}>
              <Button style={{ marginRight: "40px" }}>Amazon</Button>
              <Button>Shopee</Button>
            </div>
            <div className="table">
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>
                      <input type="checkbox" />
                    </th>
                    <th>商品</th>
                    <th>单价 </th>
                    <th>数量 </th>
                    <th> 金额</th>
                    <th>平台</th>
                    <th>操作</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((a, b) => {
                    return (
                      <tr key={b}>
                        <td>
                          <input type="checkbox" />
                        </td>
                        <td>{a.order_platform_code}</td>
                        <td>{a.parcel_declared_value}</td>
                        <td>
                          <span
                            className="mins"
                            style={{
                              display: "inlineBlock",
                              background: "#ccc",
                              color: "#fff",
                              cursor: "pointer",
                              padding: " 0 5px",
                              margin: " 0 9px"
                            }}
                            onClick={() => {
                              if (a.parcel_quantity <= 1) {
                                return;
                              } else {
                                data[b].parcel_quantity = a.parcel_quantity - 1;
                                this.setState({
                                  data
                                });
                              }
                            }}
                          >
                            -
                          </span>
                          {a.parcel_quantity}
                          <span
                            className="add"
                            style={{
                              display: "inlineBlock",
                              background: "#ccc",
                              color: "#fff",
                              cursor: "pointer",
                              padding: " 0 5px",
                              margin: " 0 9px"
                            }}
                            onClick={() => {
                              data[b].parcel_quantity = a.parcel_quantity + 1;
                              this.setState({
                                data
                              });
                            }}
                          >
                            +
                          </span>
                        </td>
                        <td>¥{a.parcel_quantity * a.parcel_declared_value}</td>
                        <td>{a.platform}</td>
                        <td> 删除</td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </div>
            <div
              className="bom"
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "0 20px"
              }}
            >
              <div>
                <Button>删除</Button>
              </div>
              <div>
                去结算合计(不含运费和订单处理费)：￥0.00
                <Button style={{ marginLeft: 40 }}>去结算</Button>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    dispatch
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShoppingCart);
