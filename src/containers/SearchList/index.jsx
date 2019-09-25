import React, { Component } from "react";
import $ from "jquery";
import SearchBox from "../../components/SearchBox/index";
import { connect } from "react-redux";
import Pagination from "react-js-pagination";
import { Select, Input, Button, Popover, Row, Radio } from "antd";
const { Option } = Select;
const InputGroup = Input.Group;
const storeContury = ["全部", "美国", "澳大利亚"];
const amaZonContury = [
  "全部",
  "美国",
  "加拿大",
  "墨西哥",
  "英国",
  "德国",
  "法国",
  "意大利",
  "西班牙",
  "日本站",
  "澳大利亚"
];
const shopeeContury = [
  "全部",
  "新加坡",
  "马来西亚",
  "台湾",
  "印度尼西亚",
  "泰国",
  "越南和菲律宾"
];
class SearchList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      pageSize: 50,
      countryId: 0,
      storeConturyId: 0,
      sortType: "time",
      isCheckAll: false,
      checkAry: [],
      data: [
        {
          product_id: 1,
          product_sku: "001-M-RD-T-002",
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
          product_sales_value: "0.00",
          product_purchase_value: "1.0000",
          product_declared_value: "2.00",
          product_is_combination: 0,
          product_barcode_type: 0,
          pc_id: 0,
          pc_attr: 0,
          product_add_time: "2019-07-30 14:28:38",
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
      ],
      changeItems: {
        name: "option1", //设置批量设置的name
        value: "", //设置批量设置的value
        popType: "setAttr", //replace insert
        popValue: "",
        language: "default",
        attrName: "title",
        position: "before", //插入文本的位置
        keywords: "", //插入或需要替换的文本
        setValue: "" //要更改替换的值
      },
      popVisible: false
    };
  }
  componentDidMount() {
    if (this.props.location.query) {
      let { pageSize, page } = this.props.location.query;
      this.setState(
        {
          pageSize,
          page
        },
        () => {
          this.getData();
        }
      );
    } else {
      this.getData();
    }
  }
  changePlat(a) {
    if (a === this.state.plat) {
      return;
    } else {
      this.setState({
        countryId: 0
      });
    }
    this.props.dispatch({ type: "PLATCHANGE", plat: a });
  }
  getData() {
    let { pageSize, page } = this.state;

    $.ajax({
      method: "get",
      url: "https://118.25.155.176:8080/place",
      /* xhrFields: {
        withCredentials: true
      },
      crossDomain: true, */
      data: { page, pageSize },
      dataType: "json",
      success: res => {
        let data = res.data;
        if (data.data) {
          this.setState({
            data: data.data
          });
        }
      }
    });
  }
  render() {
    const {
      countryId,
      sortType,
      data,
      checkAry,
      storeConturyId,
      changeItems,
      popVisible
    } = this.state;
    const { plat } = this.props.state.platId;
    let isCheckAll = false;
    if (checkAry.length === data.length) {
      isCheckAll = true;
    }
    const rowStyle = {
      marginBottom: "15px"
    };
    const content = (
      <div>
        <Row style={rowStyle}>
          <Radio.Group
            onChange={e => {
              this.setState({
                changeItems: {
                  ...changeItems,
                  popType: e.target.value
                }
              });
            }}
            value={changeItems.popType}
          >
            <Radio.Button value="setAttr">批量设置属性值</Radio.Button>
            <Radio.Button value="replace">查找替换文本</Radio.Button>
            <Radio.Button value="insert">插入文本</Radio.Button>
          </Radio.Group>
        </Row>
        <Row style={rowStyle}>
          <InputGroup compact>
            <Select
              style={{
                width: changeItems.popType === "insert" ? "25%" : "50%"
              }}
              value={changeItems.language}
              onChange={val => {
                this.setState({
                  changeItems: {
                    ...changeItems,
                    language: val
                  }
                });
              }}
            >
              <Option value="default">原文</Option>
              <Option value="chinese">中文</Option>
            </Select>
            {changeItems.popType === "setAttr" ? null : (
              <Input
                style={{ width: "50%" }}
                value={changeItems.keywords}
                onChange={e => {
                  this.setState({
                    changeItems: {
                      ...changeItems,
                      keywords: e.target.value
                    }
                  });
                }}
              />
            )}
            {changeItems.popType === "setAttr" ? (
              <Select
                value={changeItems.attrName}
                style={{ width: "50%" }}
                onChange={val => {
                  this.setState({
                    changeItems: {
                      ...changeItems,
                      attrName: val
                    }
                  });
                }}
              >
                <Option value="title">商品标题</Option>
                <Option value="keyword">检索关键字</Option>
                <Option value="abstract1">商品摘要1</Option>
              </Select>
            ) : null}
            {changeItems.popType === "insert" ? (
              <Select
                style={{ width: "25%" }}
                value={changeItems.position}
                onChange={val => {
                  this.setState({
                    changeItems: {
                      ...changeItems,
                      position: val
                    }
                  });
                }}
              >
                <Option value="before">前</Option>
                <Option value="after">后</Option>
              </Select>
            ) : null}
          </InputGroup>
        </Row>
        <Row style={rowStyle}>
          <Input.TextArea
            rows={4}
            value={changeItems.setValue}
            placeholder={
              changeItems.popType === "setAttr"
                ? "请输入批量设置的值"
                : changeItems.popType === "replace"
                ? "请输入替换文本"
                : "请输入插入文本"
            }
            onChange={e => {
              this.setState({
                changeItems: {
                  ...changeItems,
                  setValue: e.target.value
                }
              });
            }}
          />
        </Row>
        <Row style={{ ...rowStyle, textAlign: "right" }}>
          {/* <Button style={{ marginRight: "10px" }}>取消</Button> */}
          <Button
            disabled={
              changeItems.popType === "setAttr"
                ? changeItems.setValue === ""
                : changeItems.setValue === "" || changeItems.keywords === ""
            }
          >
            确定
          </Button>
        </Row>
      </div>
    );
    return (
      <div className="home searchList">
        <div className="home_right">
          <div className="main">
            <SearchBox {...this.props} />
            <div className="searchArea">
              <ul className="checkArea">
                <li>
                  <div className="title">平台：</div>
                  <div className="items">
                    <span
                      className={plat === 1 ? "item active" : "item"}
                      onClick={() => {
                        if (plat === 1) return;
                        this.changePlat(1);
                        this.setState(
                          {
                            pageSize: 50,
                            page: 1
                          },
                          () => {
                            this.getData();
                          }
                        );
                      }}
                    >
                      Amazon
                    </span>
                    <span
                      className={plat === 2 ? "item active" : "item"}
                      onClick={() => {
                        if (plat === 2) return;
                        this.changePlat(2);
                        this.setState(
                          {
                            pageSize: 50,
                            page: 1
                          },
                          () => {
                            this.getData();
                          }
                        );
                      }}
                    >
                      shopee
                    </span>
                  </div>
                </li>
                {plat === 1 ? (
                  <li>
                    <div className="title">海外仓：</div>
                    <div className="items">
                      {/* amazon 对应国家 */}
                      {storeContury.map((a, b) => {
                        return (
                          <span
                            key={b}
                            className={
                              storeConturyId == b ? "item active" : "item"
                            }
                            onClick={() => {
                              this.setState({
                                storeConturyId: b
                              });
                            }}
                          >
                            {storeContury[b]}
                          </span>
                        );
                      })}
                    </div>
                  </li>
                ) : null}
                {plat === 1 ? (
                  <li>
                    <div className="title">国家：</div>
                    <div className="items">
                      {/* amazon 对应国家 */}
                      {amaZonContury.map((a, b) => {
                        return (
                          <span
                            key={b}
                            className={countryId == b ? "item active" : "item"}
                            onClick={() => {
                              this.setState({
                                countryId: b
                              });
                            }}
                          >
                            {amaZonContury[b]}
                          </span>
                        );
                      })}
                    </div>
                  </li>
                ) : (
                  <li>
                    <div className="title">国家：</div>
                    <div className="items">
                      {/* amazon 对应国家 */}
                      {shopeeContury.map((a, b) => {
                        return (
                          <span
                            key={b}
                            className={countryId == b ? "item active" : "item"}
                            onClick={() => {
                              this.setState({
                                countryId: b
                              });
                            }}
                          >
                            {shopeeContury[b]}
                          </span>
                        );
                      })}
                    </div>
                  </li>
                )}

                <li>
                  <div className="title">排序方式：</div>
                  <div className="sorts">
                    <div
                      className={
                        sortType == "time" ? "time_btn active" : "time_btn"
                      }
                      onClick={() => {
                        this.setState(
                          {
                            sortType: "time"
                          },
                          () => {
                            this.getData();
                          }
                        );
                      }}
                    >
                      最近一次上架时间
                    </div>
                    <div
                      className={
                        sortType == "sale" ? "sale_btn active" : "sale_btn"
                      }
                      onClick={() => {
                        this.setState(
                          {
                            sortType: "sale"
                          },
                          () => {
                            this.getData();
                          }
                        );
                      }}
                    >
                      销量
                    </div>
                    <div
                      onClick={() => {
                        this.setState(
                          {
                            sortType: "price"
                          },
                          () => {
                            this.getData();
                          }
                        );
                      }}
                      className={
                        sortType == "price" ? "price_btn active" : "price_btn"
                      }
                    >
                      售价
                    </div>
                    <div className="priceRange">
                      价格筛选
                      <div className="input_wrap">
                        <input type="number" className="input_left" />
                        <span>—</span>
                        <input type="number" />
                      </div>
                    </div>
                    <div
                      className={isCheckAll ? "checkAll active" : "checkAll"}
                      onClick={() => {
                        if (isCheckAll) {
                          this.setState({
                            checkAry: []
                          });
                        } else {
                          let ary = [];
                          data.map(a => {
                            ary.push(a.product_id);
                          });
                          this.setState({
                            checkAry: ary
                          });
                        }
                      }}
                    >
                      全选
                    </div>
                  </div>
                </li>

                <li>
                  <Button type="primary" style={{ marginRight: "10px" }}>
                    批量上传
                  </Button>
                  <InputGroup compact>
                    <Select
                      defaultValue="Option1"
                      onChange={val => {
                        this.setState({
                          changeItems: {
                            ...changeItems,
                            name: val
                          }
                        });
                      }}
                    >
                      <Option value="Option1">生产厂商</Option>
                      <Option value="Option2">商品名称</Option>
                    </Select>
                    <Input
                      style={{ width: "130px" }}
                      value={changeItems.value}
                      onChange={e => {
                        this.setState({
                          changeItems: {
                            ...changeItems,
                            value: e.target.value
                          }
                        });
                      }}
                    />
                    <Button disabled={changeItems.value === ""}>
                      批量设置
                    </Button>
                    <Popover
                      title={null}
                      content={content}
                      trigger="click"
                      placement="bottom"
                    >
                      <Button>···</Button>
                    </Popover>
                  </InputGroup>
                </li>
              </ul>
              <div className="goods">
                {data.map((a, b) => {
                  return (
                    <div className="goodsItem" key={b}>
                      <input
                        type="checkbox"
                        className="checkbox"
                        checked={
                          checkAry.indexOf(a.product_id) == -1 ? false : true
                        }
                        onChange={e => {
                          let ary = [];
                          if (checkAry.indexOf(a.product_id) !== -1) {
                            ary = checkAry.filter(b => {
                              return b !== a.product_id;
                            });
                          } else {
                            checkAry.push(a.product_id);
                            ary = checkAry;
                          }
                          this.setState({
                            checkAry: ary
                          });
                        }}
                      />
                      <div
                        className="goodsInfo"
                        onClick={() => {
                          this.props.history.push({
                            pathname: `/sells/products/${a.product_id}`,
                            params: {
                              goods: a
                            }
                          });
                        }}
                      >
                        <img src="" alt="" />
                        <div className="goods_tag">
                          <span>海外仓</span>
                          <span>免邮费</span>
                        </div>
                        <div className="name">{a.product_title_en}</div>

                        <div className="price">¥{a.product_sales_value}</div>
                      </div>
                      <div className="opration">
                        <div className="download">下载</div>
                        <div className="publish">立即刊登</div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="page">
                <Pagination
                  activePage={this.state.page}
                  itemsCountPerPage={10}
                  totalItemsCount={450}
                  pageRangeDisplayed={5}
                  onChange={page => {
                    this.setState({
                      page
                    });
                  }}
                />
                {/* <Pagination>
                  <Pagination.First />
                  <Pagination.Prev />
                  <Pagination.Item>{1}</Pagination.Item>
                  <Pagination.Ellipsis />

                  <Pagination.Item>{10}</Pagination.Item>
                  <Pagination.Item>{11}</Pagination.Item>
                  <Pagination.Item active>{12}</Pagination.Item>

                  <Pagination.Ellipsis />
                  <Pagination.Item>{20}</Pagination.Item>
                  <Pagination.Next />
                  <Pagination.Last />
                </Pagination> */}
              </div>
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
)(SearchList);
