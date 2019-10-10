import React, { Component } from "react";
import { connect } from "react-redux";
import { Row, Col, Button, Table, Input, Select } from "antd";
import DatePicker from "react-datepicker";
import { getCookie } from "../../server/cookies";

const { Option } = Select;
class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: "",
      endDate: "",
      platId: "",
      accountId: "",
      zhandianId: "",
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

  showLogin() {}
  handleChange(a, date) {
    this.setState({
      [a]: date
    });
  }
  render() {
    const { platId, accountId, zhandianId, data } = this.state;
    // console.log(this.props.state);

    const columns = [
      {
        title: "商品图片",
        dataIndex: "1",
        align: "center",
        key: "1",
        width: 100
      },
      {
        title: "商品编码",
        dataIndex: "2",
        align: "center",
        key: "2",
        width: 100
      },
      {
        title: "父货号",
        dataIndex: "3",
        align: "center",
        key: "3",
        width: 100
      },
      {
        title: "闪质大卖商品状态",
        dataIndex: "4",
        align: "center",
        key: "4",
        width: 200
      },
      {
        title: "闪质大卖最近下架时间",
        dataIndex: "5",
        align: "center",
        key: "5",
        width: 200
      },
      {
        title: "刊登时间",
        dataIndex: "6",
        align: "center",
        key: "6",
        width: 100
      },
      {
        title: "刊登标题",
        dataIndex: "7",
        align: "center",
        key: "7",
        width: 100
      },
      {
        title: "店铺下架时间",
        dataIndex: "8",
        align: "center",
        key: "8",
        width: 100
      },
      {
        title: "仓库类型",
        dataIndex: "9",
        align: "center",
        key: "9",
        width: 100
      },
      {
        title: "仓库所在国家",
        dataIndex: "10",
        align: "center",
        key: "10",
        width: 100
      },
      {
        title: "仓库名称",
        dataIndex: "11",
        align: "center",
        key: "11",
        width: 100
      },
      {
        title: "风险产品",
        dataIndex: "12",
        align: "center",
        key: "12",
        width: 100
      },
      {
        title: "风险产品",
        dataIndex: "12",
        align: "center",
        key: "12",
        width: 100
      },
      {
        title: "特殊属性",
        dataIndex: "13",
        align: "center",
        key: "13",
        width: 100
      },
      {
        title: "刊登平台",
        dataIndex: "14",
        align: "center",
        key: "14",
        width: 100
      },
      {
        title: "刊登账号",
        dataIndex: "15",
        align: "center",
        key: "15",
        width: 100
      },
      {
        title: "刊登站点",
        dataIndex: "16",
        align: "center",
        key: "16",
        width: 100
      },
      {
        title: "店铺状态",
        dataIndex: "17",
        align: "center",
        key: "17",
        width: 100
      },
      {
        title: "Relisted",
        dataIndex: "18",
        align: "center",
        key: "18",
        width: 100
      },

      {
        title: "操作",
        dataIndex: "action",
        align: "center",
        key: "action",
        width: 140,
        render: () => {
          return <div>操作</div>;
        }
      }
    ];
    return (
      <div
        className="home product"
        style={{
          paddingTop: "40px",
          /* paddingLeft: this.state.islogin ? "140px" : 0, */
          paddingLeft: "140px",
          minHeight: "908px"
        }}
      >
        <div className="home_right">
          <div className="main">
            <div className="search">
              <Row className="row_1">
                <Col span={12}>
                  <Row>
                    <Col span={6}>刊登标题：</Col>
                    <Col span={18}>
                      <Input type="text" />
                    </Col>
                  </Row>
                </Col>
                <Col span={12}>
                  <Row>
                    <Col span={6}>刊登货号：</Col>
                    <Col span={18}>
                      <Input type="text" />
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row className="row_1">
                <Col span={12}>
                  <Row>
                    <Col span={6}>刊登商品时间：</Col>
                    <Col span={18}>
                      <DatePicker
                        selected={this.state.startDate}
                        onChange={b => this.changDate("startDate", b)}
                      />
                      <span style={{ margin: "0 8px" }}>—</span>
                      <DatePicker
                        selected={this.state.endDate}
                        onChange={b => this.changDate("endDate", b)}
                      />
                    </Col>
                  </Row>
                </Col>
                <Col span={12}>
                  <Row>
                    <Col span={6}>刊登平台:</Col>
                    <Col span={18}>
                      <Row>
                        <Col span={8}>
                          <Select
                            defaultValue="请选择平台"
                            style={{ width: "100%" }}
                            onChange={val => {
                              this.setState({
                                platId: val
                              });
                            }}
                          >
                            <Option value="平台1">平台1</Option>
                          </Select>
                        </Col>
                        <Col span={8}>
                          <Select
                            defaultValue="请选择账号"
                            style={{ width: "100%" }}
                            onChange={val => {
                              this.setState({
                                accountId: val
                              });
                            }}
                          >
                            <Option value="平台1">平台1</Option>
                          </Select>
                        </Col>
                        <Col span={8}>
                          <Select
                            defaultValue="请选择站点"
                            style={{ width: "100%" }}
                            onChange={val => {
                              this.setState({
                                zhandianId: val
                              });
                            }}
                          >
                            <Option value="平台1">平台1</Option>
                          </Select>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <div>
                <Button type="primary" style={{ marginLeft: 0 }}>
                  开始查询
                </Button>
              </div>
            </div>
            <div style={{ width: "1180px", overflowX: "scroll" }}>
              <Table columns={columns} dataSource={data} scroll={{ x: 2600 }} />
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
)(Product);
