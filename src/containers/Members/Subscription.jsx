import React, { Component } from "react";
import { connect } from "react-redux";
import { Row, Col, Button } from "antd";
import { getCookie } from "../../server/cookies";
import apply_icon from "../../images/apliay_icon.png";
import member_icon from "../../images/member.png";
import { Api } from "../../server/_ajax";
import { apiList1 } from "../../server/apiMap";

const api = new Api();
class Subscription extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rechargeList: [
        { month: 1, money: "299.00" },
        { month: 3, money: "799.00" },
        { month: 12, money: "2999.00" }
      ],
      recharge_money: "299.00",
      islogin: false,
      member: {}
    };
  }
  componentDidMount() {
    let ApiKey = getCookie("ApiKey");
    if (ApiKey && ApiKey !== "") {
      this.setState({
        islogin: true
      });
    }
    this.getMemberInfo();
  }
  getMemberInfo() {
    api.$post(
      apiList1.memberInfo.path,
      null,
      res => {
        if (res.Success) {
          this.setState({
            member: res.Data
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
    const { rechargeList, recharge_money, member } = this.state;
    // console.log(this.props.state);

    return (
      <div
        className="home members accounts"
        style={{
          paddingTop: "40px",
          /* paddingLeft: this.state.islogin ? "140px" : 0, */
          paddingLeft: "140px",
          minHeight: "908px"
        }}
      >
        <div className="home_right">
          <div className="main">
            <div className="form">
              <Row>
                <Col span={4}>会员类型：</Col>
                <Col span={20}>
                  <img
                    src={member_icon}
                    alt=""
                    style={{
                      width: "20px",
                      verticalAlign: "middle",
                      marginRight: "10px"
                    }}
                  />
                  普通会员
                </Col>
              </Row>
              <Row>
                <Col span={4}>当前账号：</Col>
                <Col span={20}>{member.Name}</Col>
              </Row>
              <Row>
                <Col span={4}>开通时长：</Col>
                <Col span={20} className="member_charge">
                  {rechargeList.map((a, b) => {
                    return (
                      <Button
                        key={b}
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
                <Col span={4}>支付方式：</Col>
                <Col span={20}>
                  <img className="apply" src={apply_icon} alt="" />
                </Col>
              </Row>

              <Row>
                <Col span={4}>应付金额：</Col>
                <Col span={20}>
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
                <Col span={4} />
                <Col span={20} className="submit_btns">
                  <Button type="primary">立即支付</Button>
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
)(Subscription);
