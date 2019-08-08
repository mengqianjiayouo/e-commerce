import React, { Component } from "react";
import Topbar from "../../components/Topbar/index";
import ReturnTop from "../../components/ReturnTop/index";
import Footer from "../../components/Footer/index";
import SideBar from "../../components/SideBar/index";
import { connect } from "react-redux";
import { Row, Col, Table, Button, Dropdown } from "react-bootstrap";
import DatePicker from "react-datepicker";

class Payment_records extends Component {
  constructor(props) {
    super(props);
    this.state = {
      islogin: false,
      platform: "",
      setStartDate: "",
      setEndDate: "",
      site: "",
      accoutnId: "",
      order_num: ""
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
    const { islogin, platform, site, accoutnId, order_num } = this.state;
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
              <span>付款记录</span>
            </div>
            <div className="search">
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
                  <div className="title">账号</div>
                  <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                      {accoutnId === "" ? "全部" : accoutnId}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item
                        onClick={() => {
                          this.setState({
                            accoutnId: "Action"
                          });
                        }}
                      >
                        Action
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </li>
                <li className="item ">
                  <div className="title">站点</div>
                  <Dropdown>
                    <Dropdown.Toggle variant="success">
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
                        account
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
                  <div className="title">订单号</div>
                  <input
                    type="text"
                    value={order_num}
                    placeholder="精准查询"
                    onChange={e => {
                      this.setState({
                        order_num: e.target.value
                      });
                    }}
                  />
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
                    <th>下单时间</th>
                    <th>付款时间</th>
                    <th>订单号</th>
                    <th>订单金额</th>
                    <th>平台</th>
                    <th>账号</th>
                    <th>站点</th>
                    <th>操作</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>--</td>
                    <td>--</td>
                    <td>--</td>
                    <td>--</td>
                    <td>--</td>
                    <td>--</td>
                    <td>--</td>
                    <td>--</td>
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
)(Payment_records);
