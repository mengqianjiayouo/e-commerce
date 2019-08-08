import React, { Component } from "react";
import Topbar from "../../components/Topbar/index";
import ReturnTop from "../../components/ReturnTop/index";
import Footer from "../../components/Footer/index";
import SideBar from "../../components/SideBar/index";
import { connect } from "react-redux";
import { Row, Col, Table, Button, Dropdown } from "react-bootstrap";

class Recharge extends Component {
  constructor(props) {
    super(props);
    this.state = {
      islogin: false,
      recharge_money: ""
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
    const { islogin, recharge_money } = this.state;
    // console.log(this.props.state);

    return (
      <div className="home orders accounts">
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
              <span>账户充值</span>
            </div>
            <div className="form">
              <Row>
                <Col sm={2}>当前余额：</Col>
                <Col sm={10}>¥ 0.00</Col>
              </Row>
              <Row>
                <Col sm={2}>充值方式：</Col>
                <Col sm={10}>
                  <img
                    className="apply"
                    src="https://cdn-resources-aliyun.kjds.com/assets/apliay_icon-48a1bd6b43746bc7c8d7a4b65017ab0a.png"
                    alt=""
                  />
                </Col>
              </Row>
              <Row>
                <Col sm={2}>充值金额：</Col>
                <Col sm={10} className="recharge">
                  <input
                    type="text"
                    className="recharge_money"
                    value={recharge_money}
                    placeholder="请输入您的充值金额"
                    onClick={e => {
                      this.setState({
                        recharge_money: e.target.value
                      });
                    }}
                  />
                  <span>元</span>
                  <Button
                    onClick={() => {
                      this.setState({
                        recharge_money: 500
                      });
                    }}
                  >
                    500
                  </Button>
                  <Button
                    onClick={() => {
                      this.setState({
                        recharge_money: 1000
                      });
                    }}
                  >
                    1000
                  </Button>
                  <Button
                    onClick={() => {
                      this.setState({
                        recharge_money: 2000
                      });
                    }}
                  >
                    2000
                  </Button>
                  <Button
                    onClick={() => {
                      this.setState({
                        recharge_money: 5000
                      });
                    }}
                  >
                    5000
                  </Button>
                </Col>
              </Row>
              <Row>
                <Col sm={2}>备注：</Col>
                <Col sm={10}>
                  请谨慎充值，充值金额无法退款只能用于平台消费。
                </Col>
              </Row>
              <Row>
                <Col sm={2} />
                <Col sm={10} className="submit_btns">
                  <Button>提交</Button>
                  <Button
                    className="gray"
                    onClick={() => {
                      this.props.history.push(
                        "/sells/accounts/recharge_histories"
                      );
                    }}
                  >
                    取消
                  </Button>
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
)(Recharge);
