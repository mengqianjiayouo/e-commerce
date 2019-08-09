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
class Orders extends Component {
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
            <SideBar {...this.props} />
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
              <span>全部订单</span>
              <span className="tip">
                温馨提示：待付款订单7天之内未付款，将被自动取消
              </span>
            </div>
            <div className="search">
              <ul>
                <li className="item">
                  <div className="title">创建时间</div>
                  <DatePicker
                    selected={this.state.setStartDate}
                    onChange={a => {
                      this.setState({
                        setStartDate: a
                      });
                    }}
                  />
                  <span style={{ margin: "0 8px" }}>—</span>
                  <DatePicker
                    selected={this.state.setEndDate}
                    onChange={a => {
                      this.setState({
                        setEndDate: a
                      });
                    }}
                  />
                </li>

                <li className="item">
                  <div className="title">平台</div>
                  <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                      {platform === "" ? "全部" : platform}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item
                        onClick={() => {
                          this.setState({
                            platform: "Action"
                          });
                        }}
                      >
                        Action
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </li>
                <li className="item account">
                  <div className="title">账号</div>
                  <Dropdown>
                    <Dropdown.Toggle variant="success">
                      {account === "" ? "全部" : account}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item
                        onClick={() => {
                          this.setState({
                            account: "Action"
                          });
                        }}
                      >
                        account
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </li>
                <li className="item margin0">
                  <div className="title">站点</div>
                  <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                      {site === "" ? "全部" : site}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item
                        onClick={() => {
                          this.setState({
                            site: "Action"
                          });
                        }}
                      >
                        Action
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </li>
                <li className="item drop">
                  <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                      {accountType}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item
                        onClick={() => {
                          this.setState({
                            accountType: "Action"
                          });
                        }}
                      >
                        Action
                      </Dropdown.Item>
                      <Dropdown.Item
                        onClick={() => {
                          this.setState({
                            accountType: "订单编号"
                          });
                        }}
                      >
                        订单编号
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  <input type="text" />
                </li>
                <li className="item ">
                  <div className="title">物流方式</div>
                  <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                      {logists === "" ? "全部" : logists}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item
                        onClick={() => {
                          this.setState({
                            logists: "Action"
                          });
                        }}
                      >
                        Action
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </li>
                <li className="item ">
                  <div className="title">目的国家</div>
                  <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                      {country === "" ? "全部" : country}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item
                        onClick={() => {
                          this.setState({
                            country: "Action"
                          });
                        }}
                      >
                        Action
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </li>
              </ul>
              <div className="btns">
                <Button>开始查询</Button>
              </div>
              <ul className="bomBar">
                <li
                  className={orderType === 0 ? "active" : ""}
                  onClick={() => {
                    this.setState(
                      {
                        orderType: 0
                      },
                      () => {
                        this.getData();
                      }
                    );
                  }}
                >
                  全部订单
                </li>
                <li
                  className={orderType === 1 ? "active" : ""}
                  onClick={() => {
                    this.setState(
                      {
                        orderType: 1
                      },
                      () => {
                        this.getData();
                      }
                    );
                  }}
                >
                  待发货
                </li>
                <li
                  className={orderType === 2 ? "active" : ""}
                  onClick={() => {
                    this.setState(
                      {
                        orderType: 2
                      },
                      () => {
                        this.getData();
                      }
                    );
                  }}
                >
                  已发货
                </li>
                <li
                  className={orderType === 3 ? "active" : ""}
                  onClick={() => {
                    this.setState(
                      {
                        orderType: 3
                      },
                      () => {
                        this.getData();
                      }
                    );
                  }}
                >
                  已退款
                </li>
              </ul>
            </div>
            <div className="table">
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>商品信息</th>
                    <th>单价 x 数量 </th>
                    <th> 总价</th>
                    <th>订单状态</th>
                    <th>平台</th>
                    <th>操作</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((a, b) => {
                    return (
                      <tr key={b}>
                        <td>{a.order_platform_code}</td>
                        <td>
                          {a.parcel_declared_value}*{a.parcel_quantity}
                        </td>
                        <td>
                          {a.parcel_declared_value * a.parcel_quantity +
                            a.shipping_fee_estimate}
                        </td>
                        <td>{Orderstatus[a.order_status]}</td>
                        <td>{a.platform}</td>
                        <td>
                          <Button style={{ marginRight: "10px" }}>
                            一键发货
                          </Button>

                          <Button>自行发货</Button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
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
)(Orders);
