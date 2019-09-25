import React, { Component } from "react";
import { connect } from "react-redux";
import { Table, Select, Button, Input } from "antd";
import DatePicker from "react-datepicker";

class Payment_records extends Component {
  constructor(props) {
    super(props);
    this.state = {
      platform: "",
      setStartDate: "",
      setEndDate: "",
      site: "",
      accoutnId: "",
      order_num: "",
      data: []
    };
  }
  componentDidMount() {}

  getData() {}
  showLogin() {}
  render() {
    const { platform, site, accoutnId, order_num, data } = this.state;
    // console.log(this.props.state);
    const columns = [
      {
        title: "下单时间",
        dataIndex: "order_platform_code",
        align: "center",
        key: "1"
      },
      {
        title: "付款时间",
        dataIndex: "order_platform_code",
        align: "center",
        key: "2"
      },
      {
        title: "订单号",
        dataIndex: "order_platform_code",
        align: "center",
        key: "3"
      },
      {
        title: "订单金额",
        dataIndex: "order_platform_code",
        align: "center",
        key: "4"
      },
      {
        title: "平台",
        dataIndex: "order_platform_code",
        align: "center",
        key: "5"
      },
      {
        title: "账号",
        dataIndex: "order_platform_code",
        align: "center",
        key: "6"
      },
      {
        title: "站点",
        dataIndex: "order_platform_code",
        align: "center",
        key: "7"
      },
      {
        title: "操作",
        dataIndex: "order_platform_code",
        align: "center",
        key: "8"
      }
    ];
    return (
      <div className="home orders">
        <div className="home_right">
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
                  <Select
                    value={platform ? platform : "全部"}
                    style={{ width: "200px" }}
                    onChange={val => {
                      this.setState({
                        platform: val
                      });
                    }}
                  >
                    <Select.Option value="1">1</Select.Option>
                  </Select>
                </li>
                <li className="item">
                  <div className="title">账号</div>
                  <Select
                    value={accoutnId ? accoutnId : "全部"}
                    style={{ width: "200px" }}
                    onChange={val => {
                      this.setState({
                        accoutnId: val
                      });
                    }}
                  >
                    <Select.Option value="1">1</Select.Option>
                  </Select>
                </li>
                <li className="item ">
                  <div className="title">站点</div>
                  <Select
                    value={site ? site : "全部"}
                    style={{ width: "200px" }}
                    onChange={val => {
                      this.setState({
                        site: val
                      });
                    }}
                  >
                    <Select.Option value="1">1</Select.Option>
                  </Select>
                </li>
              </ul>
              <ul
                className="flexul"
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <li className="item ">
                  <div className="title">订单号</div>
                  <Input
                    type="text"
                    style={{ width: "200px" }}
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
                  <Button type="primary">开始查询</Button>
                </li>
              </ul>
            </div>
            <div className="table">
              <Table columns={columns} dataSource={data} pagination={false} />
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
)(Payment_records);
