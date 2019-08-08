import React, { Component } from "react";
import Topbar from "../../components/Topbar/index";
import ReturnTop from "../../components/ReturnTop/index";
import Footer from "../../components/Footer/index";
import SideBar from "../../components/SideBar/index";
import { connect } from "react-redux";
import { Row, Col, Table, Button, Dropdown } from "react-bootstrap";

class Subscription extends Component {
  constructor(props) {
    super(props);
    this.state = {
      islogin: false,
      rechargeList: [
        { month: 1, money: "299.00" },
        { month: 3, money: "799.00" },
        { month: 12, money: "2999.00" }
      ],
      recharge_money: "299.00"
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
    const { islogin, rechargeList, recharge_money } = this.state;
    // console.log(this.props.state);

    return (
      <div className="home members accounts">
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
            <div className="form">
              <Row>
                <Col sm={2}>会员类型：</Col>
                <Col sm={10}>普通会员</Col>
              </Row>
              <Row>
                <Col sm={2}>当前账号：</Col>
                <Col sm={10}>zhanghao</Col>
              </Row>
              <Row>
                <Col sm={2}>开通时长：</Col>
                <Col sm={10} className="member_charge">
                  {rechargeList.map((a, b) => {
                    return (
                      <Button
                        className={recharge_money === a.money ? "current" : ""}
                        onClick={() => {
                          this.setState({
                            recharge_money: a.money
                          });
                        }}
                      >
                        {a.month}个月：{a.money}元
                      </Button>
                    );
                  })}
                </Col>
              </Row>
              <Row>
                <Col sm={2}>支付方式：</Col>
                <Col sm={10}>
                  <img
                    className="apply"
                    src="https://cdn-resources-aliyun.kjds.com/assets/apliay_icon-48a1bd6b43746bc7c8d7a4b65017ab0a.png"
                    alt=""
                  />
                </Col>
              </Row>

              <Row>
                <Col sm={2}>应付金额：</Col>
                <Col sm={10}>
                  <span
                    style={{
                      color: "#f13c3c",
                      fontSize: "25px"
                    }}
                  >
                    {recharge_money}
                  </span>
                  元
                </Col>
              </Row>
              <Row>
                <Col sm={2} />
                <Col sm={10} className="submit_btns">
                  <Button>立即支付</Button>
                </Col>
              </Row>
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
)(Subscription);
