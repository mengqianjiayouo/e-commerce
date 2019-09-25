import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Row,
  Col,
  Button,
  Table,
  Modal,
  Select,
  Input,
  Switch,
  message
} from "antd";
import DatePicker from "react-datepicker";
import Pagination from "../../components/Pagination";
import $ from "jquery";
import moment from "moment";
import { country, countryList } from "../../utils/countryFreight";

import computeFreight from "../../utils/computeFreight";

const Option = Select.Option;
const Orderstatus = {
  0: "删除",
  1: "草稿",
  2: "确认",
  3: "异常",
  4: "已提交",
  5: "已打印",
  6: "已下架",
  7: "已打包",
  8: "已装袋",
  9: "装袋完成",
  10: "已加挂",
  11: "物流完成",
  12: "物流发货",
  13: "已签收"
};
class Orders extends Component {
  constructor(props) {
    super(props);
    this.state = {
      platform: "",
      start_time: new Date(moment().subtract(365, "day")),
      end_time: new Date(moment()),
      page: 1,
      pageSize: 20,
      total: 0,
      account: "",
      site: "",
      accountType: "订单编号",
      logists: "",
      countrys: "",
      orderType: 0,
      orderModalShow: false,
      sendType: "auto",
      isShowfregiht: false,
      sendModalData: {
        courierNumber: "",
        logisticsCompany: "",
        declarePrice: "",
        declareTitleEn: "",
        declareTitle: "",
        weight: "",
        long: "",
        width: "",
        height: "",
        diam: "",
        countryId: "",
        declareProduct: "",
        isElect: false,
        isColumn: false
      },
      data: [],
      fregihtData: [],
      siteList: [
        "BR",
        "CA",
        "MX",
        "US",
        //阿拉伯联合酋长国（U.A.E.）
        "AE",
        "DE",
        "ES",
        "FR",
        "GB",
        "IN",
        "IT",
        "TR",
        "AU",
        "JP"
      ]
    };
  }
  componentDidMount() {
    this.getData();
  }

  getData() {
    let { start_time, end_time } = this.state;

    new Promise(resolve => {
      $.ajax({
        method: "post",
        url: "https://118.25.155.176:8080/handPullOrder",
        data: {
          // start_time: moment(start_time).format("YYYY-MM-DD"),
          // end_time: moment(end_time).format("YYYY-MM-DD"),
          auth_id: 55
          // status: 1
        },
        dataType: "json",
        error: err => {
          console.log(err);
        },
        success: (res, status, xhr) => {
          if (res.state === 1) {
            if (res.data && res.data.data) {
              resolve();
            }
          } // console.log($.cookie("csrftoken"));
        }
      });
    }).then(this.getOrders());
  }
  getOrders() {
    let { page, pageSize } = this.state;
    $.ajax({
      method: "get",
      url: "https://118.25.155.176:8080/orders",
      data: {
        page,
        pageSize
      },
      dataType: "json",
      error: err => {
        console.log(err);
      },
      success: (res, status, xhr) => {
        let { data, last_page } = res.data;
        this.setState({
          data: data.filter((a, b) => (a.key = b)),
          total: last_page
        });
      }
    });
  }
  showLogin() {}

  getFregiht() {
    let {
      weight,
      long,
      width,
      height,
      diam,
      isColumn,
      countryId
    } = this.state.sendModalData;
    if (country === "") {
      return null;
    }
    height = height ? Number(height) : 0;
    weight = weight ? Number(weight) : 1000;
    long = long ? Number(long) : 0;
    width = width ? Number(width) : 0;
    diam = diam ? Number(diam) : 0;
    if (isColumn) {
      if (long + diam * 2 > 104) {
        message.error("圆柱体体积过大！");
        return;
      }
    } else if (
      height > 175 ||
      width > 175 ||
      long > 175 ||
      height + long + width > 130
    ) {
      message.error("物品体积过大！");
      return;
    }
    let ary = computeFreight(long, width, height, weight, country[countryId]);
    this.setState({
      fregihtData: ary,
      isShowfregiht: true
    });
  }
  clear() {
    this.setState({
      orderModalShow: false,
      sendModalData: {
        courierNumber: "",
        logisticsCompany: "",
        declarePrice: "",
        declareTitleEn: "",
        declareTitle: "",
        weight: "",
        long: "",
        width: "",
        height: "",
        countryId: "",
        declareProduct: "",
        isElect: false
      }
    });
  }
  render() {
    const {
      platform,
      account,
      site,
      accountType,
      logists,
      orderType,
      countrys,
      data,
      orderModalShow,
      sendType,
      sendModalData,
      total,
      page,
      pageSize,
      isShowfregiht,
      siteList,
      fregihtData
    } = this.state;
    // console.log(this.props.state);
    const columns = [
      {
        title: "标题",
        dataIndex: "order_platform_code",
        align: "center",
        key: "order_platform_code"
      },
      {
        title: "图片",
        dataIndex: "age",
        align: "center",
        key: "age",
        width: 100
      },
      {
        title: "货号",
        dataIndex: "order_code",
        align: "center",
        key: "order_code"
      },
      {
        title: "SKU",
        dataIndex: "sku",
        align: "center",
        key: "sku"
      },
      {
        title: "国家",
        dataIndex: "country_code",
        align: "center",
        key: "country_code",
        width: 100
      },
      {
        title: "ASIN",
        dataIndex: "asin",
        align: "center",
        key: "asin"
      },
      {
        title: "数量",
        dataIndex: "parcel_quantity",
        align: "center",
        key: "parcel_quantity",
        width: 100
      },
      {
        title: "销售额",
        dataIndex: "parcel_declared_value",
        align: "center",
        key: "parcel_declared_value"
      },
      {
        title: "发货时间",
        dataIndex: "send",
        align: "center",
        key: "send",
        width: 100
      },
      {
        title: "送达时间",
        dataIndex: "arrive",
        align: "center",
        key: "arrive",
        width: 100
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
              <Button
                style={{ marginBottom: "10px" }}
                onClick={() => {
                  Modal.success({
                    title: "已发送至管理员！"
                  });
                }}
              >
                一键发货
              </Button>

              <Button
                onClick={() => {
                  this.setState({
                    orderModalShow: true,
                    sendType: "self"
                  });
                }}
              >
                自行发货
              </Button>
            </div>
          );
        }
      }
    ];
    const modalRow = {
      marginBottom: "10px"
    };
    let fregiht = fregihtData[0];

    return (
      <div className="home orders">
        <div className="home_right">
          <div className="main">
            <div className="header">
              <span>全部订单</span>
              <span className="tip">
                温馨提示：待付款订单7天之内未付款，将被自动取消
              </span>
            </div>
            <div className="search">
              <ul>
                <li className="item">
                  <div className="title">创建时间</div>
                  <DatePicker
                    selected={this.state.start_time}
                    dateFormat="yyyy-MM-dd"
                    onChange={a => {
                      console.log(a);
                      this.setState({
                        start_time: a
                      });
                    }}
                  />
                  <span style={{ margin: "0 8px" }}>—</span>
                  <DatePicker
                    selected={this.state.end_time}
                    dateFormat="yyyy-MM-dd"
                    onChange={a => {
                      this.setState({
                        end_time: a
                      });
                    }}
                  />
                </li>

                <li className="item">
                  <div className="title">平台</div>
                  <Select
                    defaultValue="全部"
                    style={{ width: 130 }}
                    onChange={val => {
                      this.setState({
                        platform: val
                      });
                    }}
                  >
                    <Option value="平台1">平台1</Option>
                  </Select>
                </li>
                <li className="item account">
                  <div className="title">账号</div>
                  <Select
                    defaultValue="全部"
                    style={{ width: 200 }}
                    onChange={val => {
                      this.setState({
                        account: val
                      });
                    }}
                  >
                    <Option value="zhanghao1">zhanghao1</Option>
                  </Select>
                </li>
                <li className="item margin0">
                  <div className="title">站点</div>
                  <Select
                    value={site ? country[site] : "全部"}
                    style={{ width: 130 }}
                    onChange={val => {
                      this.setState({
                        site: val
                      });
                    }}
                  >
                    {siteList.map((a, b) => {
                      return (
                        <Option key={b} value={a}>
                          {country[a]}
                        </Option>
                      );
                    })}
                  </Select>
                </li>
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
                        <Option value="zhanghao1">zhanghao1</Option>
                      </Select>
                    }
                  />
                </li>
                <li className="item ">
                  <div className="title">物流方式</div>
                  <Select
                    value={logists ? logists : "全部"}
                    style={{ width: 130 }}
                    onChange={val => {
                      this.setState({
                        logists: val
                      });
                    }}
                  >
                    <Option value="zhanghao1">zhanghao1</Option>
                  </Select>
                </li>
                <li className="item ">
                  <div className="title">目的国家</div>
                  <Select
                    value={countrys ? countrys : ""}
                    style={{ width: 130 }}
                    onChange={val => {
                      this.setState({
                        countrys: val
                      });
                    }}
                  >
                    <Option value="zhanghao1">zhanghao1</Option>
                  </Select>
                </li>
              </ul>
              <div className="btns">
                <Button type="primary">开始查询</Button>
              </div>
              <ul className="bomBar">
                <li
                  className={orderType === 0 ? "active" : ""}
                  onClick={() => {
                    this.setState(
                      {
                        orderType: 0
                      },
                      () => {
                        this.getData();
                      }
                    );
                  }}
                >
                  全部订单
                </li>
                <li
                  className={orderType === 1 ? "active" : ""}
                  onClick={() => {
                    this.setState(
                      {
                        orderType: 1
                      },
                      () => {
                        this.getData();
                      }
                    );
                  }}
                >
                  待发货
                </li>
                <li
                  className={orderType === 2 ? "active" : ""}
                  onClick={() => {
                    this.setState(
                      {
                        orderType: 2
                      },
                      () => {
                        this.getData();
                      }
                    );
                  }}
                >
                  已发货
                </li>
                <li
                  className={orderType === 3 ? "active" : ""}
                  onClick={() => {
                    this.setState(
                      {
                        orderType: 3
                      },
                      () => {
                        this.getData();
                      }
                    );
                  }}
                >
                  已退款
                </li>
              </ul>
            </div>
            <div className="table">
              <Table
                columns={columns}
                dataSource={data}
                pagination={false}
                scroll={{ x: true }}
              />
              {total > 1 ? (
                <Pagination
                  page={page}
                  total={total}
                  pageSize={pageSize}
                  onPageChange={page => {
                    this.setState(
                      {
                        page
                      },
                      () => {
                        this.getData();
                      }
                    );
                  }}
                  onPageSizeChange={pageSize => {
                    this.setState(
                      {
                        pageSize,
                        page: 1
                      },
                      () => {
                        this.getData();
                      }
                    );
                  }}
                />
              ) : null}
            </div>
          </div>
          <Modal
            visible={orderModalShow}
            style={{ top: 20 }}
            className="order_send_modal"
            onCancel={() => {
              this.clear();
            }}
            title="自行发货"
            width={750}
            footer={
              <Button
                variant="primary"
                onClick={() => {
                  this.setState({
                    orderModalShow: false
                  });
                }}
              >
                确定
              </Button>
            }
          >
            <div style={{ padding: "0 30px", lineHeight: "32px" }}>
              <Row style={modalRow}>
                <Col span={6}>申报名称（中）：</Col>
                <Col span={18}>
                  <Input
                    placeholder="请输入申报名称（中）"
                    value={sendModalData.declareTitle}
                    onChange={e => {
                      this.setState({
                        sendModalData: {
                          ...sendModalData,
                          declareTitle: e.target.value
                        }
                      });
                    }}
                  />
                </Col>
              </Row>
              <Row style={modalRow}>
                <Col span={6}>申报名称（英）：</Col>
                <Col span={18}>
                  <Input
                    placeholder="请输入申报名称（英）"
                    value={sendModalData.declareTitleEn}
                    onChange={e => {
                      this.setState({
                        sendModalData: {
                          ...sendModalData,
                          declareTitleEn: e.target.value
                        }
                      });
                    }}
                  />
                </Col>
              </Row>
              <Row style={modalRow}>
                <Col span={6}>申报价格：</Col>
                <Col span={18}>
                  <Input
                    placeholder="请输入申报价格"
                    value={sendModalData.declarePrice}
                    onChange={e => {
                      this.setState({
                        sendModalData: {
                          ...sendModalData,
                          declarePrice: e.target.value
                        }
                      });
                    }}
                  />
                </Col>
              </Row>
              <Row style={modalRow}>
                <Col span={6}>重量(g)：</Col>
                <Col span={18}>
                  <Input
                    placeholder="请输入重量"
                    value={sendModalData.weight}
                    onChange={e => {
                      this.setState(
                        {
                          sendModalData: {
                            ...sendModalData,
                            weight: e.target.value
                          }
                        },
                        () => {
                          this.getFregiht();
                        }
                      );
                    }}
                  />
                </Col>
              </Row>
              <Row style={modalRow}>
                <Col span={6}>尺寸：</Col>
                <Col span={18}>
                  {sendModalData.isColumn ? (
                    <Row>
                      <Col span={8}>
                        <Input
                          placeholder="高"
                          value={sendModalData.height}
                          style={{ width: 100 }}
                          type="number"
                          onChange={e => {
                            this.setState(
                              {
                                sendModalData: {
                                  ...sendModalData,
                                  height: e.target.value
                                }
                              },
                              () => {
                                this.getFregiht();
                              }
                            );
                          }}
                        />
                        <span style={{ marginLeft: "15px" }}>cm</span>
                      </Col>
                      <Col span={8}>
                        <Input
                          placeholder="直径"
                          style={{ width: 100 }}
                          type="number"
                          value={sendModalData.diam}
                          onChange={e => {
                            this.setState(
                              {
                                sendModalData: {
                                  ...sendModalData,
                                  diam: e.target.value
                                }
                              },
                              () => {
                                this.getFregiht();
                              }
                            );
                          }}
                        />
                        <span style={{ marginLeft: "15px" }}>cm</span>
                      </Col>
                    </Row>
                  ) : (
                    <Row>
                      <Col span={8}>
                        <Input
                          placeholder="长"
                          value={sendModalData.long}
                          style={{ width: 100 }}
                          type="number"
                          onChange={e => {
                            this.setState(
                              {
                                sendModalData: {
                                  ...sendModalData,
                                  long: e.target.value
                                }
                              },
                              () => {
                                this.getFregiht();
                              }
                            );
                          }}
                        />
                        <span style={{ marginLeft: "15px" }}>cm</span>
                      </Col>
                      <Col span={8}>
                        <Input
                          placeholder="宽"
                          value={sendModalData.width}
                          style={{ width: 100 }}
                          type="number"
                          onChange={e => {
                            this.setState(
                              {
                                sendModalData: {
                                  ...sendModalData,
                                  width: e.target.value
                                }
                              },
                              () => {
                                this.getFregiht();
                              }
                            );
                          }}
                        />
                        <span style={{ marginLeft: "15px" }}>cm</span>
                      </Col>
                      <Col span={8}>
                        <Input
                          placeholder="高"
                          style={{ width: 100 }}
                          type="number"
                          value={sendModalData.height}
                          onChange={e => {
                            this.setState(
                              {
                                sendModalData: {
                                  ...sendModalData,
                                  height: e.target.value
                                }
                              },
                              () => {
                                this.getFregiht();
                              }
                            );
                          }}
                        />
                        <span style={{ marginLeft: "15px" }}>cm</span>
                      </Col>
                    </Row>
                  )}
                </Col>
              </Row>
              <Row style={modalRow}>
                <Col span={6}>目的地：</Col>
                <Col span={18}>
                  <Select
                    value={
                      sendModalData.countryId
                        ? sendModalData.countryId
                        : "选择目的地"
                    }
                    style={{ width: "100%" }}
                    onChange={val => {
                      this.setState(
                        {
                          sendModalData: {
                            ...sendModalData,
                            countryId: val
                          }
                        },
                        () => {
                          this.getFregiht();
                        }
                      );
                    }}
                  >
                    {countryList.map((a, b) => {
                      return (
                        <Option key={a} value={a}>
                          {country[a]}
                        </Option>
                      );
                    })}
                  </Select>
                </Col>
              </Row>
              <Row style={modalRow}>
                <Col span={6}>是否为圆柱体：</Col>
                <Col span={18}>
                  <Switch
                    checked={sendModalData.isColumn}
                    onChange={checked => {
                      this.setState({
                        sendModalData: {
                          ...sendModalData,
                          isColumn: checked
                        }
                      });
                    }}
                  />
                </Col>
              </Row>
              <Row style={modalRow}>
                <Col span={6}>是否带电(带电需备案)：</Col>
                <Col span={18}>
                  <Switch
                    checked={sendModalData.isElect}
                    onChange={checked => {
                      this.setState({
                        sendModalData: {
                          ...sendModalData,
                          isElect: checked
                        }
                      });
                    }}
                  />
                </Col>
              </Row>
              <Row style={modalRow}>
                <Col span={6}>运单号：</Col>
                <Col span={18}>
                  <Input
                    placeholder="请输入运单号"
                    value={sendModalData.courierNumber}
                    onChange={e => {
                      this.setState({
                        sendModalData: {
                          ...sendModalData,
                          courierNumber: e.target.value
                        }
                      });
                    }}
                  />
                </Col>
              </Row>
              <Row style={modalRow}>
                <Col span={6}>物流公司：</Col>
                <Col span={18}>
                  <Select
                    value={
                      sendModalData.logisticsCompany
                        ? sendModalData.logisticsCompany
                        : "选择物流公司"
                    }
                    style={{ width: "100%" }}
                    onChange={val => {
                      this.setState({
                        sendModalData: {
                          ...sendModalData,
                          logisticsCompany: val
                        }
                      });
                    }}
                  >
                    <Option value="dhlpps">DHL pps挂号</Option>
                    <Option value="dhlzx">DHL 专线</Option>
                    <Option value="sfxb1">顺丰国际小包</Option>
                    <Option value="sfxb2">顺丰经济小包</Option>
                    <Option value="sfxb3">顺丰精品小包</Option>
                    <Option value="sfly">顺丰卢邮小包</Option>
                    <Option value="sfby">顺丰比邮小包</Option>
                    <Option value="sfzd">顺丰专递</Option>
                    <Option value="sfzx">顺丰国际专线</Option>
                  </Select>
                </Col>
              </Row>
              {isShowfregiht ? (
                <Row style={{ modalRow }}>
                  <Col>
                    运费测算结果(尺寸重量未填写按照1000g计算,不计泡,计泡值为6000)：
                  </Col>
                </Row>
              ) : null}
              {isShowfregiht ? (
                <div
                  className="table_list"
                  style={{ modalRow, height: "200px", overflowY: "scroll" }}
                >
                  <Row>
                    <Col span={8}>DHL pps挂号</Col>
                    <Col span={16}>
                      {fregiht.dhlpps
                        ? !isNaN(fregiht.dhlpps)
                          ? `${fregiht.dhlpps}元`
                          : fregiht.dhlpps
                        : "-"}
                      {fregiht.dhlppstime ? `(${fregiht.dhlppstime}天)` : null}
                    </Col>
                  </Row>
                  <Row>
                    <Col span={8}>DHL 专线</Col>
                    <Col span={16}>
                      {fregiht.dhlzx
                        ? !isNaN(fregiht.dhlzx)
                          ? `${fregiht.dhlzx}元`
                          : fregiht.dhlzx
                        : "-"}
                      {fregiht.dhlzxtime ? `(${fregiht.dhlzxtime}天)` : null}
                    </Col>
                  </Row>
                  <Row>
                    <Col span={8}>顺丰国际小包</Col>
                    <Col span={16}>
                      {fregiht.sfxb1
                        ? !isNaN(fregiht.sfxb1)
                          ? `${fregiht.sfxb1}元`
                          : fregiht.sfxb1
                        : "-"}
                      {fregiht.sfxb1time ? `(${fregiht.sfxb1time}天)` : null}
                    </Col>
                  </Row>
                  <Row>
                    <Col span={8}>顺丰经济小包</Col>
                    <Col span={16}>
                      {fregiht.sfxb2
                        ? !isNaN(fregiht.sfxb2)
                          ? `${fregiht.sfxb2}元`
                          : fregiht.sfxb2
                        : "-"}
                      {fregiht.sfxb2time ? `(${fregiht.sfxb2time}天)` : null}
                    </Col>
                  </Row>
                  <Row>
                    <Col span={8}>顺丰精品小包</Col>
                    <Col span={16}>
                      {fregiht.sfxb3
                        ? !isNaN(fregiht.sfxb3)
                          ? `${fregiht.sfxb3}元`
                          : fregiht.sfxb3
                        : "-"}
                      {fregiht.sfxb3time ? `(${fregiht.sfxb3time}天)` : null}
                    </Col>
                  </Row>
                  <Row>
                    <Col span={8}>顺丰卢邮小包</Col>
                    <Col span={16}>
                      {fregiht.sfly
                        ? !isNaN(fregiht.sfly)
                          ? `${fregiht.sfly}元`
                          : fregiht.sfly
                        : "-"}
                      {fregiht.sflytime ? `(${fregiht.sflytime}天)` : null}
                    </Col>
                  </Row>
                  <Row>
                    <Col span={8}>顺丰比邮小包</Col>
                    <Col span={16}>
                      {fregiht.sfby
                        ? !isNaN(fregiht.sfby)
                          ? `${fregiht.sfby}元`
                          : fregiht.sfby
                        : "-"}
                      {fregiht.sfbytime ? `(${fregiht.sfbytime}天)` : null}
                    </Col>
                  </Row>
                  <Row>
                    <Col span={8}>顺丰专递</Col>
                    <Col span={16}>
                      {fregiht.sfzd
                        ? !isNaN(fregiht.sfzd)
                          ? `${fregiht.sfzd}元`
                          : fregiht.sfzd
                        : "-"}
                      {fregiht.sfzdtime ? `(${fregiht.sfzdtime}天)` : null}
                    </Col>
                  </Row>
                  <Row>
                    <Col span={8}>顺丰国际专线</Col>
                    <Col span={16}>
                      {fregiht.sfzx
                        ? !isNaN(fregiht.sfzx)
                          ? `${fregiht.sfzx}元`
                          : fregiht.sfzx
                        : "-"}
                      {fregiht.sfzxtime ? `(${fregiht.sfzxtime}天)` : null}
                    </Col>
                  </Row>
                </div>
              ) : null}
            </div>
          </Modal>
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
)(Orders);
