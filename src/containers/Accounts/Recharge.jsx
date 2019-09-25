import React, { Component } from "react";
import { connect } from "react-redux";
import { Row, Col, Button } from "antd";

class Recharge extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recharge_money: ""
    };
  }
  componentDidMount() {}
  getData() {}
  showLogin() {}
  render() {
    const { recharge_money } = this.state;
    // console.log(this.props.state);

    return (
      <div className="home orders accounts">
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
                  <img
                    className="apply"
                    src="https://cdn-resources-aliyun.kjds.com/assets/apliay_icon-48a1bd6b43746bc7c8d7a4b65017ab0a.png"
                    alt=""
                  />
                </Col>
              </Row>
              <Row>
                <Col span={4}>充值金额：</Col>
                <Col span={20} className="recharge">
                  <input
                    type="text"
                    className="recharge_money"
                    value={recharge_money}
                    placeholder="请输入您的充值金额"
                    onChange={e => {
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
                <Col span={4}>备注：</Col>
                <Col span={20}>
                  请谨慎充值，充值金额无法退款只能用于平台消费。
                </Col>
              </Row>
              <Row>
                <Col span={4} />
                <Col span={20} className="submit_btns">
                  <Button type="primary">提交</Button>
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
