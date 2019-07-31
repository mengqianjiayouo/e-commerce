import React, { Component } from "react";
import Topbar from "../../components/Topbar/index";
import ReturnTop from "../../components/ReturnTop/index";
import Footer from "../../components/Footer/index";
import SideBar from "../../components/SideBar/index";
import { connect } from "react-redux";
import { Row, Col, Table, Button, Dropdown } from "react-bootstrap";
import DatePicker from "react-datepicker";

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
      orderType: 0
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
      country
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
                  <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                  </tr>
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
