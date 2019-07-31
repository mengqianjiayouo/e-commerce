import React, { Component } from "react";
import Topbar from "../../components/Topbar/index";
import ReturnTop from "../../components/ReturnTop/index";
import Footer from "../../components/Footer/index";
import SideBar from "../../components/SideBar/index";
import { connect } from "react-redux";
import { Row, Col, Table, Button, Dropdown } from "react-bootstrap";
import DatePicker from "react-datepicker";

class TimeOrder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      islogin: false,
      platform: "",
      setStartDate: "",
      setEndDate: "",
      accountType: "订单编号",
      orderType: 0,
      reason: ""
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
    const { islogin, platform, reason, accountType, orderType } = this.state;
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
              <span>超时订单</span>
            </div>
            <div className="search">
              <ul
                className="flexul"
                style={{ display: "flex", justifyContent: "space-between" }}
              >
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
              </ul>
              <ul
                className="flexul"
                style={{ display: "flex", justifyContent: "space-between" }}
              >
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
                <li className="item ">
                  <div className="title">超时原因</div>
                  <Dropdown>
                    <Dropdown.Toggle variant="success">
                      {reason === "" ? "全部" : reason}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item
                        onClick={() => {
                          this.setState({
                            reason: "Action"
                          });
                        }}
                      >
                        account
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </li>
              </ul>
              <div className="btns">
                <Button>开始查询</Button>
                <div className="tip">
                  温馨提示：超时订单是指分销商付款后60小时仍未打印运单或填写运单号；或打印运单后24小时没有出库记录或48小时仍没有物流跟踪信息。
                </div>
              </div>
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
)(TimeOrder);
