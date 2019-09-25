import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Tabs,
  Row,
  Col,
  Form,
  Input,
  Select,
  Button,
  DatePicker,
  Icon,
  Upload,
  message,
  Checkbox,
  Modal
} from "antd";
import moment from "moment";
const { TabPane } = Tabs;
const { RangePicker } = DatePicker;
const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 6 }
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 18 }
  }
};
class DetailEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: true,
      platinumKeywords: ["", "", ""],
      data: {},
      bianti: [
        {
          name: "变体1",
          price: "",
          names: [{ name: "大小", value: "" }, { name: "颜色", value: "" }],
          images: ["", ""]
        },
        {
          name: "变体2",
          price: "",
          names: [{ name: "大小", value: "" }, { name: "颜色", value: "" }],
          images: ["", ""]
        }
      ],
      biantiId: 0,
      names: {
        name: "",
        value: ""
      },
      status: {
        name: ""
      },
      imgShow: false
    };
  }
  componentDidMount() {
    this.setState({
      data: this.props.data
    });
  }
  showLogin() {}
  addBianTi() {
    let { biantiId, names, bianti, status } = this.state;
    if (names.name === "") {
      this.setState({
        status: {
          ...status,
          name: "error"
        }
      });
      return;
    }
    bianti[biantiId].names.push(names);
    this.setState({
      bianti,
      biantiId: 0,
      show: false,
      names: { name: "", value: "" }
    });
  }

  meituxiuxiu(number, url) {
    let that = this;
    let xiuxiu = window.xiuxiu;

    xiuxiu.embedSWF("altContent", number, "100%", "100%");
    xiuxiu.onInit = () => {
      if (url) {
        xiuxiu.loadPhoto("https://");
      }
    };
    xiuxiu.onBeforeUpload = function(data, id) {};
    xiuxiu.onClose = function(id) {
      that.setState({
        imgShow: false
      });
    };
  }
  changeData(k, v) {
    this.setState({
      data: {
        ...this.state.data,
        [k]: v
      }
    });
  }
  render() {
    const { isChecked, bianti, names, data, platinumKeywords } = this.state;
    // console.log(this.props.state);
    const { getFieldDecorator } = this.props.form;
    const uploadProps = {
      action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
      accept: "image/*",
      name: "file",
      onChange(info) {
        if (info.file.status !== "uploading") {
          // console.log(info.file, info.fileList);
        }
        if (info.file.status === "done") {
          message.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === "error") {
          message.error(`${info.file.name} file upload failed.`);
        }
      }
    };
    return (
      <div className="product_edit_draw" id="product_edit_draw">
        <Tabs defaultActiveKey="1">
          <TabPane tab="产品信息" key="1">
            <Form {...formItemLayout}>
              <Form.Item label="ParentSKU">
                {getFieldDecorator("ParentSKU", {
                  initialValue: data.product_sku,
                  rules: [
                    { max: 40, message: "最多40个字!" },
                    {
                      required: true,
                      message: "请输入ParentSKU!"
                    }
                  ]
                })(
                  <Input
                    onChange={e => {
                      this.changeData("product_sku", e.target.value);
                    }}
                  />
                )}
              </Form.Item>
              <Form.Item label="产品标题">
                {getFieldDecorator("product_title", {
                  initialValue: data.product_title,
                  rules: [
                    { max: 200, message: "最多200个字!" },
                    {
                      required: true,
                      message: "请输入产品标题!"
                    }
                  ]
                })(
                  <Input
                    onChange={e => {
                      this.changeData("product_title", e.target.value);
                    }}
                  />
                )}
              </Form.Item>
              <Form.Item label="产品ID">
                {getFieldDecorator("product_id", {
                  initialValue: data.product_id,
                  rules: [
                    { max: 200, message: "最多200个字!" },
                    {
                      required: true,
                      message: "请输入产品ID!"
                    }
                  ]
                })(
                  <Input
                    addonAfter={<span>检查</span>}
                    style={{ width: "200px" }}
                    onChange={e => {
                      this.changeData("product_id", e.target.value);
                    }}
                  />
                )}
                <Select
                  defaultValue="默认"
                  style={{ width: "100px", marginLeft: "20px" }}
                />
                <Button style={{ width: "100px", marginLeft: "20px" }}>
                  自动获取
                </Button>
              </Form.Item>
              <Form.Item label="品牌">
                {getFieldDecorator("brand", {
                  initialValue: "",
                  rules: [{ max: 100, message: "最多100个字!" }]
                })(<Input />)}
              </Form.Item>
              <Form.Item label="制造商">
                {getFieldDecorator("manufacturer", {
                  initialValue: "",
                  rules: [{ max: 100, message: "最多100个字!" }]
                })(<Input />)}
              </Form.Item>
              <Form.Item label="制造商零件编号">
                {getFieldDecorator("identifier", {
                  initialValue: "",
                  rules: [{ max: 100, message: "最多100个字!" }]
                })(<Input />)}
              </Form.Item>
              <Form.Item label="物品状况">
                {getFieldDecorator("product_status", {
                  initialValue: "new",
                  rules: [{ max: 100, message: "最多100个字!" }]
                })(<Select />)}
              </Form.Item>
              <Form.Item label="物品状况描述">
                {getFieldDecorator("goods_desc", {
                  initialValue: "",
                  rules: [{ max: 2000, message: "最多2000个字!" }]
                })(<Input.TextArea row={2} />)}
              </Form.Item>
            </Form>
          </TabPane>
          <TabPane tab="价格信息" key="2">
            <Form {...formItemLayout}>
              <Form.Item label="价格">
                {getFieldDecorator("price", {
                  initialValue: ""
                })(<Input type="number" />)}
              </Form.Item>
              <Form.Item label="促销价">
                {getFieldDecorator("sale_price", {
                  initialValue: ""
                })(<Input type="number" />)}
              </Form.Item>
              <Form.Item label="促销价">
                {getFieldDecorator("sale_date", {})(
                  <RangePicker format="YYYY-MM-DD" />
                )}
              </Form.Item>
              <Form.Item label="数量">
                {getFieldDecorator("product_number", {})(
                  <Input type="number" />
                )}
              </Form.Item>
              <Form.Item label="税务编码">
                {getFieldDecorator("tax_number", {})(<Input type="number" />)}
              </Form.Item>
              <Form.Item label="处理天数">
                {getFieldDecorator("days", {})(
                  <Input type="number" addonAfter="天" />
                )}
              </Form.Item>
            </Form>
          </TabPane>
          <TabPane tab="描述信息" key="3">
            <Form {...formItemLayout}>
              <Form.Item label="产品描述">
                {getFieldDecorator("product_desc", {
                  rules: [{ max: 2000, message: "最多2000个字!" }]
                })(<Input.TextArea autosize={{ minRows: 6 }} />)}
              </Form.Item>
              <Form.Item label="BulletPoint">
                {getFieldDecorator("bullet_point", {
                  rules: [{ max: 2500, message: "最多2500个字!" }]
                })(<Input.TextArea autosize={{ minRows: 6 }} />)}
              </Form.Item>
            </Form>
          </TabPane>
          <TabPane tab="关键词信息" key="4">
            <Form {...formItemLayout}>
              <Form.Item label="Search Terms">
                {getFieldDecorator("search_terms", {
                  rules: [{ max: 250, message: "最多250个字!" }]
                })(<Input.TextArea autosize={{ minRows: 6 }} />)}
              </Form.Item>
              <Form.Item label="Platinum Keywords">
                <Row gutter={24}>
                  {platinumKeywords.map((a, b) => {
                    return (
                      <Col span={12} key={b}>
                        <Input
                          value={a}
                          onChange={e => {
                            platinumKeywords[b] = e.target.value;
                            this.setState({
                              platinumKeywords
                            });
                          }}
                        />
                      </Col>
                    );
                  })}
                  <Col span={12}>
                    <div
                      className="keywordadd_icon"
                      onClick={() => {
                        platinumKeywords.push("");
                        this.setState({
                          platinumKeywords
                        });
                      }}
                    >
                      <Icon type="plus" style={{ verticalAlign: "middle" }} />
                      添加一个
                    </div>
                  </Col>
                </Row>
              </Form.Item>
            </Form>
          </TabPane>
          <TabPane tab="图片与描述" key="5">
            <div className="image_note">
              <p>图像必须符合以下标准</p>
              <ul
                style={{
                  listStyle: "disc",
                  paddingLeft: "20px"
                }}
              >
                <li style={{ listStyle: "disc" }}>图片上传个数不能超过9张</li>
                <li style={{ listStyle: "disc" }}>
                  主图的背景
                  <span style={{ color: "red" }}>必须为纯白色</span>
                  ,只能是图片，不能包含实际不在订单内的配件和道具；主图不能带logo和水印（产品本身的LOGO是允许的）主图中的产品最好占图片85%左右的空间。
                </li>
              </ul>
            </div>
            <div className="btns">
              <Upload {...uploadProps}>
                <Button>本地图片</Button>
              </Upload>
              <Button
                type="button"
                onClick={() => {
                  this.setState(
                    {
                      imgShow: true
                    },
                    () => {
                      setTimeout(() => {
                        this.meituxiuxiu(3, "url");
                      }, 0);
                    }
                  );
                }}
              >
                在线图片(URL)
              </Button>
              <Button type="danger">删除所选图片</Button>
              <Button
                type="danger"
                onClick={() => {
                  this.setState(
                    {
                      imgShow: true
                    },
                    () => {
                      setTimeout(() => {
                        this.meituxiuxiu(2);
                      }, 0);
                    }
                  );
                }}
              >
                拼图
              </Button>
            </div>
            <div className="image_sort_note">
              <p>
                图片位置为从左至右，超出位置向下换行，拖拽图片可改变图片顺序。
              </p>
              <span>删除已上传图片</span>
            </div>
            <div className="image_content">
              <div className="image_item">
                <img src="" alt="" />
                <div>
                  <div className="img_check">
                    <input type="checkbox" />
                    选择
                  </div>
                  <div className="img_bom">
                    <span>预览</span>
                    <span>美图</span>
                    <span>删除</span>
                  </div>
                </div>
              </div>
              <div className="image_item">
                <img src="" alt="" />
                <div>
                  <div className="img_check">
                    {" "}
                    <input type="checkbox" />
                    选择
                  </div>
                  <div className="img_bom">
                    <span>预览</span>
                    <span>美图</span>
                    <span>删除</span>
                  </div>
                </div>
              </div>
            </div>
          </TabPane>
          <TabPane tab="变体信息" key="6">
            <Checkbox
              style={{ marginLeft: "20px" }}
              checked={isChecked}
              onChange={e => {
                this.setState({
                  isChecked: e.target.checked
                });
              }}
            >
              是否变体
            </Checkbox>
            {isChecked
              ? bianti.map((a, b) => {
                  return (
                    <div className="panel-item" key={b}>
                      <div className="header">
                        {a.name}：
                        <Input
                          value={a.price}
                          placeholder="价格"
                          style={{ width: 100 }}
                          type="number"
                          onChange={e => {
                            bianti[b].price = e.target.value;
                            this.setState({
                              bianti
                            });
                          }}
                        />
                        元
                      </div>
                      {a.names.map((c, d) => {
                        return (
                          <div key={d} className="attr_list">
                            <Input.Group compact>
                              <Input
                                style={{ width: "50%" }}
                                value={c.name}
                                placeholder="属性名"
                                onChange={e => {
                                  bianti[b].names[d].name = e.target.value;
                                  this.setState({
                                    bianti
                                  });
                                }}
                              />
                              <Input
                                style={{ width: "50%" }}
                                placeholder="属性值"
                                value={c.value}
                                onChange={e => {
                                  bianti[b].names[d].value = e.target.value;
                                  this.setState({
                                    bianti
                                  });
                                }}
                              />
                            </Input.Group>
                            <Icon
                              type="delete"
                              className="delete_icon"
                              onClick={() => {
                                bianti[b].names.splice(d, 1);
                                this.setState({
                                  bianti
                                });
                              }}
                            />
                          </div>
                        );
                      })}
                      <div
                        className="add_attr"
                        onClick={() => {
                          bianti[b].names.push({ name: "", value: "" });
                          this.setState({
                            bianti
                          });
                        }}
                      >
                        <Icon type="plus" />
                      </div>
                      <div className="btns">
                        <Upload {...uploadProps}>
                          <Button>本地图片</Button>
                        </Upload>
                        <span>图片不能超过7张</span>
                      </div>
                      <div className="image_content">
                        <div className="image_item">
                          <img src="" alt="" />
                          <div>
                            <div className="img_check">
                              {" "}
                              <input type="checkbox" />
                              选择
                            </div>
                            <div className="img_bom">
                              <span>预览</span>
                              <span>美图</span>
                              <span>删除</span>
                            </div>
                          </div>
                        </div>
                        <div className="image_item">
                          <img src="" alt="" />
                          <div>
                            <div className="img_check">
                              {" "}
                              <input type="checkbox" />
                              选择
                            </div>
                            <div className="img_bom">
                              <span>预览</span>
                              <span>美图</span>
                              <span>删除</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })
              : null}
          </TabPane>
        </Tabs>
        <Modal
          visible={this.state.imgShow}
          style={{ top: 20 }}
          wrapClassName="modal-meitu"
          onCancel={() => {
            this.setState({
              imgShow: false
            });
          }}
          getContainer={() => {
            return document.getElementById("product_edit_draw");
          }}
          footer={null}
          width="90%"
        >
          <div id="altContent" />
        </Modal>
        <div
          style={{
            position: "absolute",
            left: 0,
            bottom: 0,
            width: "100%",
            borderTop: "1px solid #e9e9e9",
            padding: "10px 16px",
            background: "#fff",
            textAlign: "right"
          }}
        >
          <Button
            onClick={() => {
              this.props.onCancel();
            }}
            style={{ marginRight: 8 }}
          >
            取消
          </Button>
          <Button
            onClick={() => {
              this.props.onCancel();
            }}
            type="primary"
          >
            确定
          </Button>
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
)(Form.create({})(DetailEdit));
