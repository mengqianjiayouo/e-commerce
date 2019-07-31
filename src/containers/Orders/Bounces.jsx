import React, { Component } from "react";
import Topbar from "../../components/Topbar/index";
import ReturnTop from "../../components/ReturnTop/index";
import Footer from "../../components/Footer/index";
import SideBar from "../../components/SideBar/index";
import { connect } from "react-redux";
import { Row, Col, Table, Button, Dropdown } from "react-bootstrap";
import DatePicker from "react-datepicker";

class Bounces extends Component {
  constructor(props) {
    super(props);
    this.state = {
      islogin: false,
      platform: "",
      setStartDate: "",
      setEndDate: "",
      accountType: "订单编号",
      reason: "",
      status: "",
      handleStatus: ""
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
      reason,
      accountType,
      status,
      handleStatus
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
              <span>退件查询</span>
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
                  <div className="title">订单状态</div>
                  <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                      {status === "" ? "全部" : status}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item
                        onClick={() => {
                          this.setState({
                            status: "Action"
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
                <li className="item">
                  <div className="title">处理状态</div>
                  <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                      {handleStatus === "" ? "全部" : handleStatus}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item
                        onClick={() => {
                          this.setState({
                            handleStatus: "Action"
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
                <li className="item ">
                  <div className="title">退件原因</div>
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
                <li className="btns">
                  <Button>开始查询</Button>
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
                    <th>处理状态</th>
                    <th>退件原因</th>
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
)(Bounces);
