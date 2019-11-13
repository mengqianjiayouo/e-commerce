import React, { Component } from "react";
import { connect } from "react-redux";
import { Table, Button, Select, Input } from "antd";
import DatePicker from "react-datepicker";
import { getCookie } from "../../server/cookies";

const { Option } = Select;
class AbnormalOrder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      platform: "",
      setStartDate: "",
      setEndDate: "",
      accountType: "订单编号",
      orderType: 0,
      reason: "",
      data: [],
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
    const { platform, reason, accountType, orderType, data } = this.state;

    const columns = [
      {
        title: "商品信息",
        dataIndex: "order_platform_code",
        align: "center",
        key: "order_platform_code"
      },
      {
        title: "总价",
        dataIndex: "age",
        align: "center",
        key: "age",
        width: 100
      },
      {
        title: "订单状态",
        dataIndex: "order_code",
        align: "center",
        key: "order_code"
      },
      {
        title: "平台",
        dataIndex: "sku",
        align: "center",
        key: "sku"
      },
      {
        title: "操作",
        dataIndex: "action",
        align: "center",
        key: "action",
        width: 140,
        render: () => {
          return (
            <div>
              <Button style={{ marginBottom: "10px" }} onClick={() => {}}>
                一键发货
              </Button>

              <Button onClick={() => {}}>自行发货</Button>
            </div>
          );
        }
      }
    ];
    return (
      <div
        className="home orders"
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
              <span>异常订单</span>
            </div>
            <div className="search">
              <ul
                className="flexul"
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <li className="item drop">
                  <Input
                    addonBefore={
                      <Select
                        value={accountType !== "" ? accountType : "订单编号"}
                        style={{ width: 120 }}
                        onChange={val => {
                          this.setState({
                            accountType: val
                          });
                        }}
                      >
                        <Select.Option value="zhanghao1">
                          zhanghao1
                        </Select.Option>
                      </Select>
                    }
                  />
                </li>
                <li className="item">
                  <div className="title">平台</div>
                  <Select
                    defaultValue="全部"
                    style={{ width: 200 }}
                    onChange={val => {
                      this.setState({
                        platform: val
                      });
                    }}
                  >
                    <Option value="平台1">平台1</Option>
                  </Select>
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
                  <div className="title">异常原因</div>
                  <Select
                    defaultValue="全部"
                    style={{ width: 200 }}
                    onChange={val => {
                      this.setState({
                        reason: val
                      });
                    }}
                  >
                    <Option value="平台1">平台1</Option>
                  </Select>
                </li>
              </ul>
              <div className="btns">
                <Button type="primary">开始查询</Button>
              </div>
            </div>
            <div className="table">
              <Table columns={columns} dataSource={data} />
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
)(AbnormalOrder);
