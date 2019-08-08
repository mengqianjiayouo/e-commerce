import React, { Component } from "react";
import Topbar from "../../../components/Topbar/index";
import ReturnTop from "../../../components/ReturnTop/index";
import Footer from "../../../components/Footer/index";
import SideBar from "../../../components/SideBar/index";
import { connect } from "react-redux";
import DatePicker from "react-datepicker";
import {
  Accordion,
  Card,
  Row,
  Col,
  FormControl,
  InputGroup,
  Dropdown,
  Button,
  Modal
} from "react-bootstrap";
class DetailEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      islogin: false,
      tiChecked: false,
      data: {
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
      },
      bianti: [
        {
          name: "变体1",
          names: [{ name: "大小", value: "" }, { name: "颜色", value: "" }],
          images: ["", ""]
        },
        {
          name: "变体2",
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
        xiuxiu.loadPhoto("http://");
      }
    };
    xiuxiu.onBeforeUpload = function(data, id) {
      console.log(data);
    };
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
    const { islogin, tiChecked, bianti, names, data } = this.state;
    // console.log(this.props.state);
    return (
      <div className="home detail_edit">
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
            <div className="process_left">
              <div className="panel-group" id="accordion">
                <Accordion defaultActiveKey="0">
                  <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0">
                      产品信息
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                      <Card.Body>
                        <div className="panel-body">
                          <form className="form-horizontal" role="form">
                            <Row>
                              <Col sm={2}>
                                <label className="control-label">
                                  ParentSKU
                                </label>
                              </Col>
                              <Col sm={5}>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="请输入产品SKU"
                                  value={data.product_sku}
                                  onChange={e => {
                                    this.changeData(
                                      "product_sku",
                                      e.target.value
                                    );
                                  }}
                                />
                              </Col>
                              <Col sm={5}>
                                <span className="form_note">
                                  还能输入{40 - data.product_sku.length}个字符
                                </span>
                              </Col>
                            </Row>
                            <Row>
                              <Col sm={2}>
                                <label className="control-label">
                                  产品标题
                                </label>
                              </Col>
                              <Col sm={7}>
                                <InputGroup className="mb-3">
                                  <FormControl
                                    placeholder=""
                                    aria-describedby="basic-addon2"
                                    value={data.product_title}
                                    onChange={e => {
                                      this.changeData(
                                        "product_title",
                                        e.target.value
                                      );
                                    }}
                                  />
                                  <InputGroup.Append>
                                    <InputGroup.Text id="basic-addon2">
                                      tT
                                    </InputGroup.Text>
                                  </InputGroup.Append>
                                </InputGroup>
                              </Col>
                              <Col sm={3}>
                                <span className="form_note">
                                  还能输入{200 - data.product_title.length}
                                  个字符
                                </span>
                              </Col>
                            </Row>
                            <Row>
                              <Col sm={2}>
                                <label className="control-label">产品ID</label>
                              </Col>
                              <Col sm={4}>
                                <InputGroup className="mb-3">
                                  <FormControl
                                    placeholder=""
                                    aria-describedby="basic-addon3"
                                    value={data.product_id}
                                    onChange={e => {
                                      this.changeDta(
                                        "product_id",
                                        e.target.value
                                      );
                                    }}
                                  />
                                  <InputGroup.Append>
                                    <InputGroup.Text id="basic-addon3">
                                      检查
                                    </InputGroup.Text>
                                  </InputGroup.Append>
                                </InputGroup>
                              </Col>
                              <Col sm={1}>
                                <Dropdown>
                                  <Dropdown.Toggle
                                    variant="success"
                                    id="dropdown-basic"
                                  >
                                    默认
                                  </Dropdown.Toggle>

                                  <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">
                                      Action
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">
                                      Another action
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">
                                      Something else
                                    </Dropdown.Item>
                                  </Dropdown.Menu>
                                </Dropdown>
                              </Col>
                              <Col sm={2}>
                                <Button>自动获取</Button>
                              </Col>
                              <Col sm={3}>
                                <div className="form_note">
                                  还能输入200个字符
                                </div>
                              </Col>
                            </Row>
                            <Row>
                              <Col sm={2}>
                                <label className="control-label">品牌</label>
                              </Col>
                              <Col sm={5}>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder=""
                                />
                              </Col>
                              <Col sm={5}>
                                <div className="form_note">
                                  还能输入100个字符
                                </div>
                              </Col>
                            </Row>
                            <Row>
                              <Col sm={2}>
                                <label className="control-label">制造商</label>
                              </Col>
                              <Col sm={5}>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder=""
                                />
                              </Col>
                              <Col sm={5}>
                                <div className="form_note">
                                  还能输入100个字符
                                </div>
                              </Col>
                            </Row>
                            <Row>
                              <Col sm={2}>
                                <label className=" control-label">
                                  制造商零件编号
                                </label>
                              </Col>
                              <Col sm={5}>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="lastname"
                                  placeholder=""
                                />
                              </Col>
                              <Col sm={5}>
                                <div className="form_note">
                                  还能输入100个字符
                                </div>
                              </Col>
                            </Row>
                            <Row>
                              <Col sm={2}>
                                <label className=" control-label">
                                  物品状况
                                </label>
                              </Col>
                              <Col sm={5}>
                                <Dropdown>
                                  <Dropdown.Toggle variant="success">
                                    new
                                  </Dropdown.Toggle>

                                  <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">
                                      Action
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">
                                      Another action
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">
                                      Something else
                                    </Dropdown.Item>
                                  </Dropdown.Menu>
                                </Dropdown>
                              </Col>
                            </Row>

                            <Row>
                              <Col sm={2}>
                                <label className="control-label">
                                  物品状况描述
                                </label>
                              </Col>
                              <Col sm={10}>
                                <textarea
                                  className="form-control"
                                  placeholder=""
                                />
                                <span className="form_note">
                                  还能输入2000个字符
                                </span>
                              </Col>
                            </Row>
                            <Row>
                              <Col sm={2}>选择变体</Col>
                              <Col sm={2}>
                                <input
                                  type="checkbox"
                                  onChange={e => {
                                    this.setState({
                                      tiChecked: e.target.checked
                                    });
                                  }}
                                />
                              </Col>
                            </Row>
                          </form>
                        </div>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                  {/* 变体信息 */}
                  {tiChecked ? (
                    <Card>
                      <Accordion.Toggle as={Card.Header} eventKey="check">
                        变体信息
                      </Accordion.Toggle>
                      <Accordion.Collapse eventKey="check">
                        <Card.Body>
                          {bianti.map((a, b) => {
                            return (
                              <div className="panel-body" key={b}>
                                <div className="header">{a.name}</div>
                                <form className="form-horizontal">
                                  {a.names.map((c, d) => {
                                    return (
                                      <Row key={d}>
                                        <Col sm={2}>
                                          <label className="control-label">
                                            {c.name}
                                          </label>
                                        </Col>
                                        <Col sm={5}>
                                          <input
                                            type="text"
                                            className="form-control"
                                            value={c.value}
                                            onChange={e => {
                                              bianti[b].names[d].value =
                                                e.target.value;
                                              this.setState({
                                                bianti
                                              });
                                            }}
                                            placeholder="请输入"
                                          />
                                        </Col>
                                        <Col sm={5} />
                                      </Row>
                                    );
                                  })}

                                  <Row>
                                    <span
                                      style={{
                                        cursor: "pointer",
                                        color: "#f13c3c"
                                      }}
                                      onClick={() => {
                                        this.setState({
                                          biantiId: b,
                                          show: true
                                        });
                                      }}
                                    >
                                      添加变体
                                    </span>
                                  </Row>

                                  <Row className="update_buttons">
                                    <button
                                      type="button"
                                      className="btn btn-success update_image"
                                    >
                                      <input
                                        type="file"
                                        accept="image/*"
                                        id="file"
                                      />
                                      本地图片
                                    </button>
                                    <span>图片不能超过7张</span>
                                  </Row>
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
                                </form>
                              </div>
                            );
                          })}
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                  ) : null}

                  {/* 图片与描述 */}
                  <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="1">
                      图片与描述
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                      <Card.Body>
                        <div className="panel-body">
                          <div>
                            <div className="image_note">
                              <p>图像必须符合以下标准</p>
                              <ul
                                style={{
                                  listStyle: "disc",
                                  paddingLeft: "20px"
                                }}
                              >
                                <li style={{ listStyle: "disc" }}>
                                  图片上传个数不能超过9张
                                </li>
                                <li style={{ listStyle: "disc" }}>
                                  主图的背景
                                  <span style={{ color: "red" }}>
                                    必须为纯白色
                                  </span>
                                  ,只能是图片，不能包含实际不在订单内的配件和道具；主图不能带logo和水印（产品本身的LOGO是允许的）主图中的产品最好占图片85%左右的空间。
                                </li>
                              </ul>
                            </div>
                            <div className="update_buttons">
                              <button
                                type="button"
                                className="btn btn-success update_image"
                              >
                                <input type="file" accept="image/*" id="file" />
                                本地图片
                              </button>
                              <button
                                type="button"
                                className="btn btn-success"
                                onClick={() => {
                                  this.setState(
                                    {
                                      imgShow: true
                                    },
                                    () => {
                                      this.meituxiuxiu(3, "url");
                                    }
                                  );
                                }}
                              >
                                在线图片(URL)
                              </button>
                              <button type="button" className="btn btn-primary">
                                删除所选图片
                              </button>
                              <button
                                type="button"
                                className="btn btn-primary"
                                onClick={() => {
                                  this.setState(
                                    {
                                      imgShow: true
                                    },
                                    () => {
                                      this.meituxiuxiu(2);
                                    }
                                  );
                                }}
                              >
                                拼图
                              </button>
                            </div>
                            <div className="image_sort_note">
                              <p>
                                图片位置为从左至右，超出位置向下换行，拖拽图片可改变图片顺序。
                              </p>
                              <a href="javascript:；">删除已上传图片</a>
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
                        </div>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                  {/* 价格信息 */}
                  <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="2">
                      价格信息
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="2">
                      <Card.Body>
                        <div className="panel-body">
                          <form className="form-horizontal" role="form">
                            <Row>
                              <Col sm={2}>
                                <label className="control-label">价格</label>
                              </Col>
                              <Col sm={3}>
                                <input
                                  type="number"
                                  className="form-control"
                                  placeholder=""
                                />
                              </Col>
                            </Row>

                            <Row>
                              <Col sm={2}>
                                <label className="control-label">促销价</label>
                              </Col>
                              <Col sm={3}>
                                <input
                                  type="number"
                                  className="form-control"
                                  placeholder=""
                                />
                              </Col>
                              <Col sm={7}>
                                <Row>
                                  <Col sm={3}>
                                    <label className=" control-label">
                                      促销日期
                                    </label>
                                  </Col>
                                  <Col sm={8}>
                                    <DatePicker
                                      selected={this.state.date}
                                      onChange={a => {
                                        this.setState({
                                          date: a
                                        });
                                      }}
                                    />
                                    <span> - </span>
                                    <DatePicker
                                      selected={this.state.date}
                                      onChange={a => {
                                        this.setState({
                                          date: a
                                        });
                                      }}
                                    />
                                  </Col>
                                </Row>
                              </Col>
                            </Row>
                            <Row>
                              <Col sm={2}>
                                <label className="control-label">数量</label>
                              </Col>
                              <Col sm={3}>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="lastname"
                                  placeholder=""
                                />
                              </Col>
                            </Row>
                            <Row>
                              <Col sm={2}>
                                <label className="control-label">
                                  税务编码
                                </label>
                              </Col>
                              <Col sm={5}>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="lastname"
                                  placeholder="选填项"
                                />
                              </Col>
                            </Row>
                            <Row>
                              <Col sm={2}>
                                <label className=" control-label">
                                  处理天数
                                </label>
                              </Col>
                              <Col sm={5}>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="lastname"
                                  placeholder=""
                                />
                                <span className="input-group-addon">天</span>
                              </Col>
                            </Row>
                          </form>
                        </div>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                  {/* 描述信息 */}
                  <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="3">
                      描述信息
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="3">
                      <Card.Body>
                        <div className="panel-body">
                          <form className="form-horizontal" role="form">
                            <Row>
                              <Col sm={2}>
                                <label className=" control-label">
                                  产品描述
                                </label>
                              </Col>
                              <Col sm={10}>
                                <textarea
                                  type="text"
                                  className="form-control"
                                  id="firstname"
                                  placeholder=""
                                />
                                <div>还能输入2000字，不支持HTML</div>
                              </Col>
                            </Row>
                            <Row>
                              <Col sm={2}>
                                <label className="control-label">
                                  BulletPoint
                                </label>
                              </Col>
                              <Col sm={10}>
                                <div className="textarta_wrap">
                                  <div className="top">
                                    <p>合并填写</p>
                                  </div>
                                  <div className="bom">
                                    <textarea cols="30" rows="10" />
                                    <span className="form_note">
                                      注：每行一条BulletPoint，最多五行，每行最多500个字符（按回车键换行）
                                    </span>
                                  </div>
                                </div>
                              </Col>
                            </Row>
                          </form>
                        </div>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>

                  <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="4">
                      关键词信息
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="4">
                      <Card.Body>
                        <div className="panel-body">
                          <form className="form-horizontal" role="form">
                            <Row>
                              <Col sm={2}>
                                <label className="control-label">
                                  Search Terms
                                </label>
                              </Col>
                              <Col sm={10}>
                                <div className="textarta_wrap">
                                  <div className="top">
                                    <p>合并填写</p>
                                  </div>
                                  <div className="bom">
                                    <textarea cols="30" rows="10" />
                                    <span className="form_note">
                                      注：请不要按回车键手动换行，并且不能超过250个字符
                                    </span>
                                  </div>
                                </div>
                              </Col>
                            </Row>
                            <Row>
                              <Col sm={2}>
                                <label className="control-label">
                                  Platinum Keywords
                                </label>
                              </Col>
                              <Col sm={10}>
                                <div className="textarta_wrap">
                                  <div className="top">
                                    <p>分行填写</p>
                                  </div>
                                  <div className="bom">
                                    <div className="col-sm-6">
                                      <input
                                        type="text"
                                        className="form-control"
                                        id="lastname"
                                        placeholder=""
                                      />
                                    </div>
                                    <div className="col-sm-6">
                                      <input
                                        type="text"
                                        className="form-control"
                                        id="lastname"
                                        placeholder=""
                                      />
                                    </div>
                                    <div className="col-sm-6">
                                      <input
                                        type="text"
                                        className="form-control"
                                        id="lastname"
                                        placeholder=""
                                      />
                                    </div>
                                    <div className="col-sm-6">
                                      <input
                                        type="text"
                                        className="form-control"
                                        id="lastname"
                                        placeholder=""
                                      />
                                    </div>
                                    <div className="col-sm-6">
                                      <input
                                        type="text"
                                        className="form-control"
                                        id="lastname"
                                        placeholder=""
                                      />
                                    </div>
                                    <div
                                      className="col-sm-12"
                                      style={{ cursor: "pointer" }}
                                    >
                                      +添加一个
                                    </div>
                                  </div>
                                </div>
                              </Col>
                            </Row>
                          </form>
                        </div>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
            </div>
            <Modal
              show={this.state.show}
              onHide={() => {
                this.setState({
                  show: false,
                  names: { name: "", value: "" },
                  status: {
                    ...this.state.status,
                    name: ""
                  }
                });
              }}
            >
              <Modal.Header closeButton>
                <Modal.Title>添加变体名</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Row>
                  <Col sm={4}>变体名：</Col>
                  <Col sm={8}>
                    <input
                      type="text"
                      value={names.name}
                      onChange={e => {
                        this.setState({
                          names: {
                            ...names,
                            name: e.target.value
                          },
                          status: {
                            ...this.state.status,
                            name: ""
                          }
                        });
                      }}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col sm={4}>变体值：</Col>
                  <Col sm={8}>
                    <input
                      type="text"
                      value={names.value}
                      onChange={e => {
                        this.setState({
                          names: {
                            ...names,
                            value: e.target.value
                          },
                          status: {
                            ...this.state.status,
                            value: ""
                          }
                        });
                      }}
                    />
                  </Col>
                </Row>
                {this.state.status.name === "error" ? (
                  <Row> 请输入变体名！</Row>
                ) : null}
              </Modal.Body>
              <Modal.Footer>
                <Button
                  variant="secondary"
                  onClick={() => {
                    this.setState({
                      show: false,
                      status: {
                        ...this.state.status,
                        name: ""
                      },
                      names: { name: "", value: "" }
                    });
                  }}
                >
                  取消
                </Button>
                <Button
                  variant="primary"
                  onClick={() => {
                    this.addBianTi();
                  }}
                >
                  确定添加
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
          <Footer />
          <Modal
            show={this.state.imgShow}
            dialogClassName="modal-meitu"
            onHide={() => {
              this.setState({
                imgShow: false
              });
            }}
          >
            <div id="altContent" />
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
)(DetailEdit);
