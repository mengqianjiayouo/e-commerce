import React, { Component } from "react";
import { connect } from "react-redux";
import { Row, Col, Button, Modal } from "antd";
import { apiList1 } from "../../server/apiMap";
import { Api } from "../../server/_ajax";
import { getCookie } from "../../server/cookies";
import apply_icon from "../../images/apliay_icon.png";

const api = new Api();
class Recharge extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recharge_money: 500,
      islogin: false
    };
  }
  componentDidMount() {
    let ApiKey = getCookie("ApiKey");
    if (ApiKey && ApiKey !== "") {
      this.setState({
        islogin: true
      });
    }
  }
  /*
   *确定充值
   */
  sureRecharge() {
    let { recharge_money } = this.state;
    if (recharge_money === "") {
      Modal.error({
        content: "请输入充值金额！"
      });
      return;
    }
    api.$post(
      apiList1.recharge.path,
      { money: parseFloat(recharge_money) },
      res => {
        if (res.Success) {
          window.open(res.Data.payUrl);
        } else {
          Modal.error({
            content: res.Msg
          });
        }
      },
      code => {
        if (code === 401) {
          this.props.history.push("/signin");
        }
      }
    );
  }

  render() {
    const { recharge_money } = this.state;
    // console.log(this.props.state);

    return (
      <div
        className="home orders accounts"
        style={{
          paddingTop: "40px",
          /* paddingLeft: this.state.islogin ? "140px" : 0, */
          paddingLeft: "140px",
          minHeight: "908px"
        }}
      >
        <div className="home_right">
          <div className="main">
            <div className="header">
              <span>账户充值</span>
            </div>
            <div className="form">
              <Row>
                <Col span={4}>当前余额：</Col>
                <Col span={20}>¥ 0.00</Col>
              </Row>
              <Row>
                <Col span={4}>充值方式：</Col>
                <Col span={20}>
                  <img className="apply" src={apply_icon} alt="" />
                </Col>
              </Row>
              <Row>
                <Col span={4}>充值金额：</Col>
                <Col span={20} className="recharge">
                  <Button
                    style={{
                      background: recharge_money === 500 ? "#f13c3c" : "#fff",
                      color: recharge_money === 500 ? "#fff" : "#f13c3c"
                    }}
                    onClick={() => {
                      this.setState({
                        recharge_money: 500
                      });
                    }}
                  >
                    500
                  </Button>
                  <Button
                    style={{
                      background: recharge_money === 1000 ? "#f13c3c" : "#fff",
                      color: recharge_money === 1000 ? "#fff" : "#f13c3c"
                    }}
                    onClick={() => {
                      this.setState({
                        recharge_money: 1000
                      });
                    }}
                  >
                    1000
                  </Button>
                  <Button
                    style={{
                      background: recharge_money === 2000 ? "#f13c3c" : "#fff",
                      color: recharge_money === 2000 ? "#fff" : "#f13c3c"
                    }}
                    onClick={() => {
                      this.setState({
                        recharge_money: 2000
                      });
                    }}
                  >
                    2000
                  </Button>
                  <Button
                    style={{
                      background: recharge_money === 5000 ? "#f13c3c" : "#fff",
                      color: recharge_money === 5000 ? "#fff" : "#f13c3c"
                    }}
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
                <Col span={4}>备注：</Col>
                <Col span={20}>
                  请谨慎充值，充值金额无法退款只能用于平台消费。
                </Col>
              </Row>
              <Row>
                <Col span={4} />
                <Col span={20} className="submit_btns">
                  <Button
                    type="primary"
                    onClick={() => {
                      this.sureRecharge();
                    }}
                  >
                    提交
                  </Button>
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
