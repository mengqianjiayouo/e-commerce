import React, { Component } from "react";
import { connect } from "react-redux";
import { Row, Col } from "antd";
import { Table } from "antd";
import { getCookie } from "../../server/cookies";

class Recharge_histories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentList: "recharge",
      rechargeData: [],
      consumeData: [],
      refundData: [],
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
  render() {
    const { currentList, rechargeData, consumeData, refundData } = this.state;
    const rechargeColumns = [
      {
        title: "时间",
        dataIndex: "time",
        align: "center",
        key: "time"
      },
      {
        title: "充值金额",
        dataIndex: "money",
        align: "center",
        key: "money"
      },
      {
        title: "类型",
        dataIndex: "type",
        align: "center",
        key: "type"
      }
    ];
    const consumeClomnus = [
      {
        title: "订单",
        dataIndex: "time",
        align: "center",
        key: "time"
      },
      {
        title: "时间",
        dataIndex: "money",
        align: "center",
        key: "money"
      },
      {
        title: "消费金额",
        dataIndex: "type",
        align: "center",
        key: "type"
      },
      {
        title: "消费类型",
        dataIndex: "type",
        align: "center",
        key: "typ"
      },
      {
        title: "折扣方式",
        dataIndex: "type",
        align: "center",
        key: "ty"
      }
    ];
    const refundColmnus = [
      {
        title: "订单",
        dataIndex: "time",
        align: "center",
        key: "time"
      },
      {
        title: "退款时间",
        dataIndex: "money",
        align: "center",
        key: "money"
      },
      {
        title: "退款金额",
        dataIndex: "type",
        align: "center",
        key: "type"
      },
      {
        title: "退款类型",
        dataIndex: "type",
        align: "center",
        key: "typ"
      },
      {
        title: "退款路径",
        dataIndex: "type",
        align: "center",
        key: "ty"
      }
    ];
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
              <Col span={8} style={{ textAlign: "center" }}>
                充值金额：¥ 0.00
              </Col>
              <Col span={8} style={{ textAlign: "center" }}>
                消费金额：¥ 0.00
              </Col>
              <Col span={8} style={{ textAlign: "center" }}>
                退款金额：¥ 0.00
              </Col>
            </Row>
            <Row className="currentHead" align="middle" type="flex">
              <Col
                span={8}
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
                span={8}
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
                span={8}
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
                <Table
                  columns={rechargeColumns}
                  dataSource={rechargeData}
                  pagination={false}
                  scroll={{ x: true }}
                />
              </div>
            ) : currentList === "consume" ? (
              <div className="table">
                <Table
                  columns={consumeClomnus}
                  dataSource={consumeData}
                  pagination={false}
                  scroll={{ x: true }}
                />
              </div>
            ) : (
              <div className="table">
                <Table
                  columns={refundColmnus}
                  dataSource={refundData}
                  pagination={false}
                  scroll={{ x: true }}
                />
              </div>
            )}
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
)(Recharge_histories);
