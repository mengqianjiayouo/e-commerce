import React, { Component } from "react";
import Topbar from "../../components/Topbar/index";
import ReturnTop from "../../components/ReturnTop/index";
import Footer from "../../components/Footer/index";
import SideBar from "../../components/SideBar/index";
import { connect } from "react-redux";
import { Row, Col, Table, Button, Dropdown } from "react-bootstrap";

class Recharge_histories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      islogin: false,
      currentList: "recharge",
      rechargeData: [],
      consumeData: [],
      refundData: []
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
      currentList,
      rechargeData,
      consumeData,
      refundData
    } = this.state;
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
              <span>财务管理</span>
              &gt;
              <span>个人账户</span>
              {currentList === "recharge" ? (
                <div
                  className="recharge_btn"
                  onClick={() => {
                    this.props.history.push(
                      "/sells/financial_management/recharge"
                    );
                  }}
                >
                  充值
                </div>
              ) : null}
            </div>
            <Row className="total">
              <Col sm={3}>充值金额：¥ 0.00</Col>
              <Col sm={3}>消费金额：¥ 0.00</Col>
              <Col sm={3}>退款金额：¥ 0.00</Col>
            </Row>
            <Row className="currentHead">
              <Col
                sm={4}
                className={currentList === "recharge" ? "active" : ""}
                onClick={() => {
                  this.setState({
                    currentList: "recharge"
                  });
                }}
              >
                <div> 充值历史</div>
              </Col>
              <Col
                sm={4}
                className={currentList === "consume" ? "active mid" : "mid"}
                onClick={() => {
                  this.setState({
                    currentList: "consume"
                  });
                }}
              >
                <div>消费历史</div>
              </Col>
              <Col
                sm={4}
                className={currentList === "refund" ? "active" : ""}
                onClick={() => {
                  this.setState({
                    currentList: "refund"
                  });
                }}
              >
                <div>退款历史</div>
              </Col>
            </Row>
            {currentList === "recharge" ? (
              <div className="table">
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>时间</th>
                      <th>充值金额 </th>
                      <th>类型</th>
                    </tr>
                  </thead>
                  <tbody>
                    {rechargeData.map((a, b) => {
                      return (
                        <tr key={b}>
                          <td>{a.time}</td>
                          <td>{a.money}</td>
                          <td>{a.type}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              </div>
            ) : currentList === "consume" ? (
              <div className="table">
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>订单</th>
                      <th>时间</th>
                      <th>消费金额</th>
                      <th>消费类型</th>
                      <th>折扣方式</th>
                    </tr>
                  </thead>
                  <tbody>
                    {consumeData.map((a, b) => {
                      return (
                        <tr key={b}>
                          <td>{a.time}</td>
                          <td>{a.money}</td>
                          <td>{a.type}</td>
                          <td>{a.type}</td>
                          <td>{a.type}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              </div>
            ) : (
              <div className="table">
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>订单</th>
                      <th>退款时间 </th>
                      <th>退款金额</th>
                      <th>退款类型</th>
                      <th>退款路径</th>
                    </tr>
                  </thead>
                  <tbody>
                    {refundData.map((a, b) => {
                      return (
                        <tr key={b}>
                          <td>{a.time}</td>
                          <td>{a.money}</td>
                          <td>{a.type}</td>
                          <td>{a.type}</td>
                          <td>{a.type}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              </div>
            )}
            {(currentList === "recharge" && rechargeData.length === 0) ||
            (currentList === "consume" && consumeData.length === 0) ||
            (currentList === "refund" && refundData.length === 0) ? (
              <div className="noData">暂无数据</div>
            ) : null}
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
)(Recharge_histories);
