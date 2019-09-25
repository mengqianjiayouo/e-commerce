import React, { Component } from "react";
import { connect } from "react-redux";
import { Table, Button, Dropdown, Input, Select } from "antd";
const { Option } = Select;
class Bounces extends Component {
  constructor(props) {
    super(props);
    this.state = {
      platform: "",
      setStartDate: "",
      setEndDate: "",
      accountType: "订单编号",
      reason: "",
      status: "",
      handleStatus: "",
      data: []
    };
  }
  componentDidMount() {}

  getData() {}
  showLogin() {}
  render() {
    const {
      platform,
      reason,
      accountType,
      status,
      handleStatus,
      data
    } = this.state;
    // console.log(this.props.state);
    const columns = [
      {
        title: "商品信息",
        dataIndex: "order_platform_code",
        align: "center",
        key: "order_platform_code"
      },
      {
        title: "单价 x 数量",
        dataIndex: "2",
        align: "center",
        key: "2"
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
        title: "处理状态",
        dataIndex: "4",
        align: "center",
        key: "4"
      },
      {
        title: "退件原因",
        dataIndex: "5",
        align: "center",
        key: "5"
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
      <div className="home orders">
        <div className="home_right">
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
                  <div className="title">订单状态</div>
                  <Select
                    defaultValue="全部"
                    style={{ width: 200 }}
                    onChange={val => {
                      this.setState({
                        status: val
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
                <li className="item">
                  <div className="title">处理状态</div>
                  <Select
                    defaultValue="全部"
                    style={{ width: 200 }}
                    onChange={val => {
                      this.setState({
                        handleStatus: val
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
                <li className="item ">
                  <div className="title">退件原因</div>
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
                <li className="btns" style={{ marginRight: "30px" }}>
                  <Button type="primary">开始查询</Button>
                </li>
              </ul>
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
)(Bounces);
