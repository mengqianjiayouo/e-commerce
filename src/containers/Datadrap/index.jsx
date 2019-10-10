import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Row,
  Col,
  Table,
  Button,
  Dropdown,
  Select,
  Menu,
  Input,
  Drawer
} from "antd";
import DetailEdit from "../Products/DetailEdit/index";
import { getCookie } from "../../server/cookies";

const { Option } = Select;
const drapTypes = {
  all: "全部",
  url: "产品网址"
};
const mockData = [
  {
    product_sku: "001-M-RD-T-002",
    origin: "",
    detail: "",
    product_sales_value: "0.00",
    product_add_time: "2019-07-30 14:28:38",

    product_id: 1,
    customer_id: 1,
    product_title_en: "turn_light-middle-RED-T\u578b-\u5b9d\u9a6cA",
    product_title:
      "\u8f6c\u5411\u706f-\u4e2d\u7801[M]-\u7ea2\u8272[RD]-T\u578b[T]-\u5b9d\u9a6c-CBR1000-2008[002]",
    product_status: 1,
    sale_status: 1,
    hs_code: "0",
    currency_code: "USD",
    pu_code: "001",
    product_length: "10.00",
    product_width: "10.00",
    product_height: "10.00",
    product_net_weight: "0.500",
    product_weight: "0.000",
    product_purchase_value: "1.0000",
    product_declared_value: "2.00",
    product_is_combination: 0,
    product_barcode_type: 0,
    pc_id: 0,
    pc_attr: 0,
    product_update_time: "0000-00-00 00:00:00",
    contain_battery: 0,
    prl_id: 0,
    parent_product_id: 0,
    seller_id: 0,
    fbo_tax_rate: 0,
    exp_date: 0,
    warehouse_barcode: "",
    gross_rofit: 0,
    tax_rate: 0,
    default_warehouse_id: null,
    product_declaration_statement: "",
    product_specs: "",
    prt_id: 0
  }
];
class Datadrap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      origin: "",
      country: "",
      data: [],
      drapType: "all",
      isSaveProdut: "all",
      loading: false,
      editData: {},
      drawVisible: false,
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
  getData() {
    this.setState({
      loading: true
    });
    setTimeout(() => {
      this.setState({
        data: mockData,
        loading: false
      });
    }, 500);
  }
  showLogin() {}
  render() {
    const {
      origin,
      drapType,
      data,
      isSaveProdut,
      loading,
      drawVisible,
      editData
    } = this.state;
    let that = this;
    const columns = [
      {
        title: "产品SKU",
        dataIndex: "product_sku",
        key: "product_sku",
        align: "center"
      },
      {
        title: "来源",
        dataIndex: "origin",
        key: "origin",
        align: "center"
      },
      {
        title: "产品明细",
        dataIndex: "detail",
        key: "detail",
        align: "center"
      },
      {
        title: "售价",
        dataIndex: "product_sales_value",
        key: "product_sales_value",
        align: "center"
      },
      {
        title: "采集链接/货源链接",
        dataIndex: "5",
        key: 5,
        align: "center"
      },
      {
        title: "时间",
        dataIndex: "product_add_time",
        key: "product_add_time",
        align: "center"
      },
      {
        title: "操作",
        dataIndex: "7",
        key: 7,
        align: "center",
        render(a, item) {
          return (
            <Button
              onClick={() => {
                that.setState(
                  {
                    editData: item
                  },
                  () => {
                    that.setState({
                      drawVisible: true
                    });
                  }
                );
              }}
            >
              编辑
            </Button>
          );
        }
      }
    ];
    return (
      <div
        className="home orders drap"
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
              <span>添加产品</span>
            </div>
            <div className="search">
              <Row className="row">
                <Col span={4}>
                  <div className="title">来源：</div>
                </Col>
                <Col span={12} className="input">
                  <Select
                    value={origin === "" ? "全部" : origin}
                    style={{ width: "200px" }}
                    onChange={val => {
                      this.setState({
                        origin: val
                      });
                    }}
                  >
                    <Option value="1">1</Option>
                  </Select>
                </Col>
              </Row>

              <Row className="row">
                <Col span={4}>
                  <div className="title">采集方式：</div>
                </Col>
                <Col span={12}>
                  {Object.keys(drapTypes).map((a, b) => {
                    return (
                      <div
                        key={b}
                        className={
                          drapType === a ? "active drap_item" : "drap_item"
                        }
                        onClick={() => {
                          this.setState({
                            drapType: a
                          });
                        }}
                      >
                        {drapTypes[a]}
                      </div>
                    );
                  })}
                </Col>
              </Row>
              <Row className="row">
                <Col span={4}>
                  <div className="title" />
                </Col>
                <Col span={12}>
                  <Input placeholder="请输入采集链接" />
                </Col>
              </Row>
              <Row className="row">
                <Col span={4}>
                  <div className="title">已保存为产品：</div>
                </Col>
                <Col span={12}>
                  <div
                    className={
                      isSaveProdut === "all" ? "active drap_item" : "drap_item"
                    }
                    onClick={() => {
                      this.setState({
                        isSaveProdut: "all"
                      });
                    }}
                  >
                    全部
                  </div>
                  <div
                    className={
                      isSaveProdut === true ? "active drap_item" : "drap_item"
                    }
                    onClick={() => {
                      this.setState({
                        isSaveProdut: true
                      });
                    }}
                  >
                    是
                  </div>
                  <div
                    className={
                      isSaveProdut === false ? "active drap_item" : "drap_item"
                    }
                    onClick={() => {
                      this.setState({
                        isSaveProdut: false
                      });
                    }}
                  >
                    否
                  </div>
                </Col>
              </Row>
              <Row className="btns row">
                <Col span={4} />
                <Col span={12}>
                  <Button
                    style={{ marginRight: "15px" }}
                    type="primary"
                    onClick={() => {
                      this.getData();
                    }}
                  >
                    开始查询
                  </Button>
                  <Button>产品采集</Button>
                </Col>
              </Row>
            </div>
            <div className="table">
              <Table columns={columns} dataSource={data} loading={loading} />
            </div>
          </div>
        </div>
        <Drawer
          title="商品编辑"
          width={800}
          height="100%"
          onClose={() => {
            this.setState({
              drawVisible: false
            });
          }}
          visible={drawVisible}
        >
          <DetailEdit
            data={editData}
            onCancel={() => {
              this.setState({
                drawVisible: false
              });
            }}
          />
        </Drawer>
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
)(Datadrap);
