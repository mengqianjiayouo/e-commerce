import React, { Component } from "react";
import Topbar from "../../../components/Topbar/index";
import ReturnTop from "../../../components/ReturnTop/index";
import Footer from "../../../components/Footer/index";
import SideBar from "../../../components/SideBar/index";
import { connect } from "react-redux";
import { Modal, Dropdown, Button, Row, Col, Carousel } from "react-bootstrap";
import countryList from "../../../utils/detail_country.js";
const hotCountry = [
  16526,
  16512,
  16528,
  16511,
  16506,
  16514,
  16525,
  16520,
  16518,
  16510
];
class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      islogin: false,
      number: 1,
      currentShow: 0,
      show: false,
      shopName: "",
      price: "",
      calcountryList: [],
      goods: {
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
      smImgList: [
        "https://pic.kjds.com/uploads/product_image/picture_url/266297/thumb_500_500_e3a3d36f309145b9e6b4c9f9cef580cd.jpg",
        "https://pic.kjds.com/uploads/product_image/picture_url/266293/thumb_500_500_6172060126e1192fab17abe99c35220b.jpg",
        "https://pic.kjds.com/uploads/product_image/picture_url/266291/thumb_500_500_a11333efdb7f69ebd22107c5a01fc7a5.jpg",
        "https://pic.kjds.com/uploads/product_image/picture_url/266292/thumb_500_500_b815a6e0d5459ba2b43e38440cb62df2.jpg",
        "https://pic.kjds.com/uploads/product_image/picture_url/266292/thumb_500_500_b815a6e0d5459ba2b43e38440cb62df2.jpg",
        "https://pic.kjds.com/uploads/product_image/picture_url/266295/thumb_500_500_e4ea6b867104d6390a5d91d9681069e2.jpg",
        "https://pic.kjds.com/uploads/product_image/picture_url/266297/thumb_500_500_e3a3d36f309145b9e6b4c9f9cef580cd.jpg",
        "https://pic.kjds.com/uploads/product_image/picture_url/266293/thumb_500_500_6172060126e1192fab17abe99c35220b.jpg",
        "https://pic.kjds.com/uploads/product_image/picture_url/266291/thumb_500_500_a11333efdb7f69ebd22107c5a01fc7a5.jpg"
      ],
      showImg: "",
      left: 35
    };
  }
  componentDidMount() {
    this.checkIsLogin();
    console.log();
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
  render() {
    const {
      islogin,
      number,
      currentShow,
      show,
      shopName,
      price,
      calcountryList,
      goods,
      smImgList,
      showImg,
      left
    } = this.state;
    if (showImg == "") {
      this.setState({
        showImg: smImgList[0]
      });
    }
    return (
      <div className="home detail">
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
            <div className="hide-top-tip" id="top_tips_container_publish">
              <div className="gb_hintbar">
                <div className="inner">
                  <div className="hintbar_txt" />
                </div>
                <a
                  className="text_close"
                  href="javascript:void(0);"
                  title="点击关闭"
                >
                  &times;
                </a>
              </div>
            </div>
            <div id="product_detail">
              <input className="warehouse-type-code" type="hidden" value="3" />
              <div className="pt-details-main">
                <div className="pt-details-top">
                  商品分类：
                  <a href="javascript:void(0);">家具和室内装饰品</a>
                  <span>&gt;</span>
                  <a href="javascript:void(0);">办公家具</a>
                  <span>&gt;</span>
                  <div className="current-name">
                    <a href="#/sells/homes/search?product_category_id3=34175&amp;b2c_platform_id=2">
                      电脑桌
                    </a>
                  </div>
                </div>
                <div className="main-white-container clear">
                  <div className="left">
                    <div className="img-container">
                      <img alt="样例图片" className="img-show" src={showImg} />
                    </div>
                    <div className="small_img_container">
                      <div
                        className="move-btn left-btn"
                        onClick={() => {
                          if (74 * 5 + 10 + left > 35) {
                            this.setState({
                              left: 35
                            });
                          } else {
                            this.setState({
                              left: 74 * 5 + 10 + left
                            });
                          }
                        }}
                      >
                        &lt;
                      </div>
                      <div
                        className="img-container-box"
                        style={{
                          left: left
                        }}
                      >
                        {smImgList.map((a, b) => {
                          return (
                            <img
                              key={b}
                              onMouseOver={() => {
                                this.setState({
                                  showImg: a
                                });
                              }}
                              alt="样例图片"
                              className={
                                showImg == a ? "img-show select" : "img-show"
                              }
                              // className="img-show"
                              src={a}
                              style={{ display: "inline-block" }}
                            />
                          );
                        })}
                      </div>
                      <div
                        className="move-btn right-btn"
                        onClick={() => {
                          if (smImgList.length <= 5) {
                            this.setState({
                              left: 35
                            });
                          } else if (
                            74 *
                            (smImgList.length + left - 35 < 74 * 5)
                          ) {
                            this.setState({
                              left: 74 * 5 - smImgList.length * 74
                            });
                          } else {
                            this.setState({
                              left: left - (74 * 5 + 10)
                            });
                          }
                        }}
                      >
                        &gt;
                      </div>
                    </div>
                  </div>
                  <div className="right">
                    <div className="name">{goods.product_title}</div>
                    <div className="price-area clear">
                      <div className="sorrow-up" />
                      <div className="price-box">
                        <span className="sell-price">采购价</span>
                        <span className="font-red">&yen;</span>
                        <span
                          className="font-red"
                          data-bind="text: variant().price"
                        >
                          {goods.product_purchase_value}
                        </span>
                        <br />
                        <div className="product_tags">
                          <span className="free_shipping">免邮费</span>
                          <span className="preferred">热卖</span>
                        </div>
                      </div>
                      <div className="price-box logistics-price">
                        <span
                          className="font-grey"
                          data-bind="text: priceRange"
                        >
                          刊登价不限
                        </span>
                      </div>
                    </div>
                    <div className="skus-area">
                      <div className="each-sku">
                        <div className="left onsell_time">上架时间：</div>
                        <div className="right">{goods.product_add_time}</div>
                      </div>
                      <div className="each-sku">
                        <div className="left">货号：</div>
                        <div
                          className="right"
                          data-bind="text: variant().art_no"
                        >
                          {goods.product_sku}
                        </div>
                        <div
                          className="unique-sku-id"
                          data-bind="text: variant().id"
                        >
                          {goods.product_id}
                        </div>
                      </div>
                      <div className="each-sku warehouse-type">
                        <div className="left">仓库：</div>
                        <div className="right">
                          {goods.default_warehouse_id}
                        </div>
                      </div>
                      <div className="each-sku">
                        <div className="left">库存：</div>
                        <div className="right">
                          <span className="store-num">
                            <span data-bind="text: variant().inventory_quantity">
                              92
                            </span>
                            {goods.pu_code}
                          </span>
                        </div>
                      </div>
                      <div className="each-sku platform">
                        <div className="left platform-label">一键刊登：</div>
                        <div className="right">
                          <a
                            className="selected"
                            href="/sells/products/515093512159"
                          >
                            <div className="sku-box">
                              <span>Amazon</span>
                            </div>
                          </a>
                          <a
                            className="not_selected"
                            href="/sells/products/815093512212"
                          >
                            <div className="sku-box">
                              <span>shopee</span>
                            </div>
                          </a>
                          <span
                            className="publish "
                            onClick={() => {
                              this.setState({
                                show: true
                              });
                            }}
                          >
                            立即刊登
                          </span>
                          <span
                            className="publish "
                            style={{ marginLeft: "10px" }}
                            onClick={() => {
                              this.props.history.push(
                                "/sells/products/615644704232/detail_edit"
                              );
                            }}
                          >
                            产品编辑
                          </span>
                        </div>
                      </div>
                      <div className="each-sku product">
                        <div className="left">
                          <a alt="颜色" href="javascript:void(0);" title="颜色">
                            颜色：
                          </a>
                        </div>
                        <div className="right">
                          <div
                            className="sku-box choose"
                            data-product-variant-id="248831"
                            data-status="true"
                            data-value_id="10055347"
                          >
                            黑色
                          </div>
                        </div>
                      </div>
                      <div className="each-sku num">
                        <div className="left">数量：</div>
                        <div className="right" id="spinner">
                          <a
                            className="minus"
                            data-spin="down"
                            onClick={() => {
                              if (number === 1) {
                                return;
                              } else {
                                this.setState({
                                  number: number - 1
                                });
                              }
                            }}
                          >
                            <i>-</i>
                          </a>
                          <input
                            className="buy-num"
                            data-rule="quantity"
                            type="text"
                            value={number}
                            onChange={e => {
                              if (number < 1) {
                                return;
                              } else {
                                this.setState({
                                  number: e.target.value
                                });
                              }
                            }}
                          />
                          <a
                            className="add"
                            onClick={() => {
                              this.setState({
                                number: number + 1
                              });
                            }}
                          >
                            <i className="glyphicon glyphicon-plus">+</i>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="pt-operate">
                      <a
                        className="add_shopping_cart"
                        href="javascript:void(0);"
                      >
                        加入购物车
                      </a>
                      <div className="buy">立即下单</div>
                      <a
                        className="member-type"
                        data-member-type="normal_member"
                      />
                    </div>
                  </div>
                </div>
                <div className="recommend-image">
                  <img
                    src="https://cdn-resources-aliyun.kjds.com/assets/sells/recommend-f470a7a666a614d114850e4555858f43.jpg"
                    alt="Recommend"
                  />
                </div>
                <div className="main-white-container clear">
                  <div className="main-right col-xs-10">
                    <ul className="top-ul">
                      <li
                        className={currentShow === 0 ? "current-index" : ""}
                        style={{ width: "25%" }}
                        onClick={() => {
                          this.setState({
                            currentShow: 0
                          });
                        }}
                      >
                        商品描述
                      </li>
                      <li
                        className={currentShow === 1 ? "current-index" : ""}
                        style={{ width: "25%" }}
                        onClick={() => {
                          this.setState({
                            currentShow: 1
                          });
                        }}
                      >
                        商品属性
                      </li>
                      <li
                        className={currentShow === 2 ? "current-index" : ""}
                        style={{ width: "25%" }}
                        onClick={() => {
                          this.setState({
                            currentShow: 2
                          });
                        }}
                      >
                        服务模板
                      </li>
                      <li
                        className={currentShow === 3 ? "current-index" : ""}
                        style={{ width: "25%" }}
                        onClick={() => {
                          this.setState({
                            currentShow: 3
                          });
                        }}
                      >
                        运费测算
                      </li>
                    </ul>
                    <ul className="main-ul clear">
                      <li
                        className="good-description"
                        style={{
                          display: currentShow == 0 ? " list-item" : "none"
                        }}
                      >
                        <div className="member-subscription">
                          <div className="font-red register-log-tip">
                            <span>
                              温馨提示: 成为注册会员才可查看商品的详情描述。请先
                            </span>
                            <a className="register-btn" href="/role_choose">
                              注册
                            </a>
                            <span>。已注册会员请直接</span>
                            <a
                              className="log-btn"
                              data-remote="true"
                              href="/sign_in"
                            >
                              登录
                            </a>
                          </div>
                          <div className="font-red qq-tip-be-member">
                            <span>您也可以联系在线客服，开通会员。</span>
                            <a
                              className="qq-talk-btn"
                              href="http://wpa.b.qq.com/cgi/wpa.php?ln=1&amp;key=XzgwMDE4NzA1NV80NzY0OTNfODAwMTg3MDU1XzJf"
                              target="blank"
                            >
                              {/* <img
                                src="https://cdn-resources-aliyun.kjds.com/assets/qq_tiny_icon-07bbf1c388387acc27871264d4f51943.jpg"
                                alt="Qq tiny icon"
                              /> */}
                            </a>
                          </div>
                        </div>
                      </li>
                      <li
                        style={{
                          display: currentShow == 1 ? " list-item" : "none"
                        }}
                      >
                        <div className="parameter">
                          <span>商品名称:</span>
                          <span>{goods.product_title}</span>
                        </div>
                        <ul className="parameter-list">
                          <li>
                            <span>是否可折叠:</span>
                            <span>否</span>
                          </li>
                          <li>
                            <span>种类:</span>
                            <span>{goods.pc_id}</span>
                          </li>
                          <li>
                            <span>材质:</span>
                            <span>木制</span>
                          </li>
                          <li>
                            <span>品牌:</span>
                            <span>无品牌</span>
                          </li>
                          <li>
                            <span>预计发货时间:</span>
                            <span>2天</span>
                          </li>
                          <li>
                            <span>最小计量单位:</span>
                            <span>{goods.pu_code}</span>
                          </li>
                        </ul>
                      </li>
                      <li
                        style={{
                          display: currentShow == 2 ? " list-item" : "none"
                        }}
                      >
                        <div className="services_box">
                          <div className="ebay_services">
                            <div className="title">
                              <span className="country">模板名称</span>
                              <span className="service_content">
                                服务内容(Service Content)
                              </span>
                            </div>
                            <div className="country_box" />
                            <p className="tips">
                              备注：服务模板仅供分销商刊登商品时参考，不代表供应商的服务政策。
                            </p>
                          </div>
                        </div>
                      </li>
                      <li
                        style={{
                          display: currentShow == 3 ? " list-item" : "none"
                        }}
                      >
                        <div className="calculate">
                          <div className="product-number">
                            <Row>
                              <Col sm={6}>
                                <label>货号(SKU):</label>
                                <Dropdown>
                                  <Dropdown.Toggle variant="success">
                                    {goods.product_sku}
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
                              <Col sm={6}>
                                <label>数量:</label>
                                <input
                                  type="text"
                                  onChange={a => {}}
                                  value="1"
                                />
                              </Col>
                            </Row>
                          </div>
                          <Row className="store-size">
                            <Col sm={6}>
                              <label>仓库:</label>
                              <Dropdown>
                                <Dropdown.Toggle variant="success">
                                  {goods.default_warehouse_id}
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                  <Dropdown.Item href="#/action-1">
                                    美国ZT美西洛杉矶仓
                                  </Dropdown.Item>
                                </Dropdown.Menu>
                              </Dropdown>
                            </Col>
                            <Col sm={6}>
                              <p className="product_detail">
                                <span className="size">包装尺寸:</span>
                                <span data-bind='text: logistic_variant().package_length + "cm"'>
                                  {goods.product_length}cm
                                </span>
                                <span data-bind='text: logistic_variant().package_width + "cm"'>
                                  {goods.product_width}cm
                                </span>
                                <span
                                  className="size-end"
                                  data-bind='text: logistic_variant().package_height + "cm"'
                                >
                                  {goods.product_height}cm
                                </span>
                                <span className="weight">物流毛重:</span>
                                <span
                                  className="weight-end"
                                  data-bind="text: logistic_variant().weight + logistic_variant().weight_unit"
                                >
                                  {goods.product_weight}
                                </span>
                              </p>
                              <span className="daynumber">预计发货时间:</span>
                              <span className="daynumber-end">2天</span>
                            </Col>
                          </Row>
                          <Row className="row country_boxs">
                            <Col sm={6}>
                              <label className="pull-left tip">目的国家:</label>
                              <Dropdown>
                                <Dropdown.Toggle variant="success">
                                  请选择
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                  {countryList.map((a, b) => {
                                    let checked = calcountryList.indexOf(
                                      countryList[b][0]
                                    );
                                    return (
                                      <Dropdown.Item key={b}>
                                        <input
                                          type="checkbox"
                                          onClick={() => {
                                            if (checked) {
                                              let ary = calcountryList.filter(
                                                a => {
                                                  return (
                                                    a !== countryList[b][0]
                                                  );
                                                }
                                              );
                                              this.setState({
                                                calcountryList: ary
                                              });
                                            } else {
                                              calcountryList.push(
                                                countryList[b][0]
                                              );
                                              this.setState({
                                                calcountryList
                                              });
                                            }
                                          }}
                                        />
                                        {countryList[b][1]}
                                      </Dropdown.Item>
                                    );
                                  })}
                                </Dropdown.Menu>
                              </Dropdown>
                            </Col>
                          </Row>
                          <div>
                            <div className="country_box">
                              <div className="hot_country">
                                <div className="check_box">
                                  <input
                                    type="checkbox"
                                    onChange={e => {
                                      if (e.target.checked) {
                                        let ary = [
                                          ...calcountryList,
                                          ...hotCountry
                                        ];
                                        this.setState({
                                          calcountryList: [...new Set(ary)]
                                        });
                                      } else {
                                        let ary = calcountryList.filter(a => {
                                          return hotCountry.indexOf(a) == -1;
                                        });
                                        this.setState({
                                          calcountryList: ary
                                        });
                                      }
                                    }}
                                  />
                                </div>
                                <span className="title">热门国家:</span>
                                <span className="countrys">
                                  美国,英国,法国,俄罗斯,德国,澳大利亚,加拿大,意大利,瑞典,挪威,丹麦
                                </span>
                              </div>
                              {calcountryList.length > 0 ? (
                                <div className="selected_box">
                                  {countryList.map((a, b) => {
                                    if (
                                      calcountryList.indexOf(
                                        countryList[b][0]
                                      ) !== -1
                                    ) {
                                      return (
                                        <div className="box" key={b}>
                                          {countryList[b][1]}
                                          <span
                                            onClick={() => {
                                              let ary = calcountryList.filter(
                                                a => a !== countryList[b][0]
                                              );
                                              this.setState({
                                                calcountryList: ary
                                              });
                                            }}
                                          >
                                            -
                                          </span>
                                        </div>
                                      );
                                    }
                                  })}
                                </div>
                              ) : null}
                            </div>
                          </div>
                          <div className="row waybill-btn">
                            <div className="calculate_btn">
                              <button>运费测算</button>
                            </div>
                          </div>
                          <p className="all-user-tip">
                            温馨提示：1.不同Sku可能重量不同，请注意选择测算。
                          </p>
                          <p className="tip-overseas-product">
                            2.海外仓商品一般只支持仓库所在国本土配送。运费测算表格未显示的国家不能配送，请勿刊登。
                          </p>
                          {/* <table>
                            <thead>
                              <tr>
                                <th>物流公司</th>
                                <th>物流方式</th>
                                <th>目的国家</th>
                                <th style={{ width: " 90px" }}>物流费用</th>
                                <th>运输时间</th>
                                <th style={{ width: " 90px" }}>备注</th>
                              </tr>
                            </thead>
                            <tbody className="logistic-fee" />
                          </table> */}
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="main-white-container similar-recommend">
                  <div className="container-name">相关推荐</div>
                  <div className="operate-btn left">
                    <i className="glyphicon glyphicon-menu-left" />
                  </div>
                  <div className="operate-btn right">
                    <i className="glyphicon glyphicon-menu-right" />
                  </div>
                  <div className="show-recommend">
                    <ul style={{ width: " 1000%" }}>
                      <li>
                        <div className="good-box">
                          <a target="blank" href="/sells/products/815131448592">
                            <img
                              src="https://pic.kjds.com/uploads/product_image/picture_url/288786/thumb_500_500_590ffa3814154c6fd0cfb52ee9d81a71.jpg?imageMogr2/thumbnail/200x200/extent/200x200/background/d2hpdGU="
                              alt="D2hpdgu="
                            />
                          </a>
                          <div className="pt-name">
                            Double Rows Non-woven Fabric Shoe Cabinet Large Shoe
                            Rack Organizer Shoe Storage
                          </div>
                          <div className="pt-price">&yen;101.00</div>
                          <a
                            className="publish"
                            data-url="/sells/products/815131448592/detail_edit"
                            href="javascript:void(0);"
                          >
                            <i className="glyphicon glyphicon-edit" />
                            立即刊登
                          </a>
                        </div>
                      </li>
                      <li>
                        <div className="good-box">
                          <a target="blank" href="/sells/products/415132184427">
                            <img
                              src="https://pic.kjds.com/uploads/product_image/picture_url/289537/thumb_500_500_ab24a4affce7c19cdb1ac585d526f7a9.jpg?imageMogr2/thumbnail/200x200/extent/200x200/background/d2hpdGU="
                              alt="D2hpdgu="
                            />
                          </a>
                          <div className="pt-name">
                            Double Rows 9 Lattices Combination Style Shoe
                            Cabinet Organizer Rack Purple
                          </div>
                          <div className="pt-price">&yen;99.00</div>
                          <a
                            className="publish"
                            data-url="/sells/products/415132184427/detail_edit"
                            href="javascript:void(0);"
                          >
                            <i className="glyphicon glyphicon-edit" />
                            立即刊登
                          </a>
                        </div>
                      </li>
                      <li>
                        <div className="good-box">
                          <a target="blank" href="/sells/products/215058738621">
                            <img
                              src="https://pic.kjds.com/uploads/product_image/picture_url/246387/thumb_500_500_5eb1681d6570634489c21b7c700d5640.jpg?imageMogr2/thumbnail/200x200/extent/200x200/background/d2hpdGU="
                              alt="D2hpdgu="
                            />
                          </a>
                          <div className="pt-name">
                            53cm Smooth Adjustable Computer Desk with Cup Stand
                            Wood Color
                          </div>
                          <div className="pt-price">&yen;125.00</div>
                          <a
                            className="publish"
                            data-url="/sells/products/215058738621/detail_edit"
                            href="javascript:void(0);"
                          >
                            <i className="glyphicon glyphicon-edit" />
                            立即刊登
                          </a>
                        </div>
                      </li>
                      <li>
                        <div className="good-box">
                          <a target="blank" href="/sells/products/214980234032">
                            <img
                              src="https://pic.kjds.com/uploads/product_image/picture_url/191324/thumb_500_500_c3a32d9705d29dbec53b38bfbc0a3763.jpg?imageMogr2/thumbnail/200x200/extent/200x200/background/d2hpdGU="
                              alt="D2hpdgu="
                            />
                          </a>
                          <div className="pt-name">
                            Trendy Adjustable Bamboo Computer Desk Wood
                          </div>
                          <div className="pt-price">&yen;130.00</div>
                          <a
                            className="publish"
                            data-url="/sells/products/214980234032/detail_edit"
                            href="javascript:void(0);"
                          >
                            <i className="glyphicon glyphicon-edit" />
                            立即刊登
                          </a>
                        </div>
                      </li>
                      <li>
                        <div className="good-box">
                          <a target="blank" href="/sells/products/214985485758">
                            <img
                              src="https://pic.kjds.com/uploads/product_image/picture_url/196908/thumb_500_500_d3e9367b9b5f93fce4bd49f34983488c.jpg?imageMogr2/thumbnail/200x200/extent/200x200/background/d2hpdGU="
                              alt="D2hpdgu="
                            />
                          </a>
                          <div className="pt-name">
                            69&quot; High-leg Non-woven Fabric Assembled Cloth
                            Wardrobe Gray
                          </div>
                          <div className="pt-price">&yen;130.00</div>
                          <a
                            className="publish"
                            data-url="/sells/products/214985485758/detail_edit"
                            href="javascript:void(0);"
                          >
                            <i className="glyphicon glyphicon-edit" />
                            立即刊登
                          </a>
                        </div>
                      </li>
                      <li>
                        <div className="good-box">
                          <a target="blank" href="/sells/products/514985449714">
                            <img
                              src="https://pic.kjds.com/uploads/product_image/picture_url/196779/thumb_500_500_b65f30599039feb16fb937ce96f2d998.jpg?imageMogr2/thumbnail/200x200/extent/200x200/background/d2hpdGU="
                              alt="D2hpdgu="
                            />
                          </a>
                          <div className="pt-name">
                            Double Rows 9 Lattices Combination Style Shoe
                            Cabinet Wine Red
                          </div>
                          <div className="pt-price">&yen;91.00</div>
                          <a
                            className="publish"
                            data-url="/sells/products/514985449714/detail_edit"
                            href="javascript:void(0);"
                          >
                            <i className="glyphicon glyphicon-edit" />
                            立即刊登
                          </a>
                        </div>
                      </li>
                      <li>
                        <div className="good-box">
                          <a target="blank" href="/sells/products/414985446677">
                            <img
                              src="https://pic.kjds.com/uploads/product_image/picture_url/196759/thumb_500_500_e2ecc6eb2e6e1696694459cb4efde983.jpg?imageMogr2/thumbnail/200x200/extent/200x200/background/d2hpdGU="
                              alt="D2hpdgu="
                            />
                          </a>
                          <div className="pt-name">
                            69&quot; High-leg Non-woven Fabric Assembled Cloth
                            Wardrobe Dark Blue
                          </div>
                          <div className="pt-price">&yen;140.00</div>
                          <a
                            className="publish"
                            data-url="/sells/products/414985446677/detail_edit"
                            href="javascript:void(0);"
                          >
                            <i className="glyphicon glyphicon-edit" />
                            立即刊登
                          </a>
                        </div>
                      </li>
                      <li>
                        <div className="good-box">
                          <a target="blank" href="/sells/products/114980245857">
                            <img
                              src="https://pic.kjds.com/uploads/product_image/picture_url/194710/thumb_500_500_afff29db000ad4f4befaa8d04b188f0f.jpg?imageMogr2/thumbnail/200x200/extent/200x200/background/d2hpdGU="
                              alt="D2hpdgu="
                            />
                          </a>
                          <div className="pt-name">
                            Concise 12-Batten 4 Tiers Bamboo Shoe Rack Wood
                          </div>
                          <div className="pt-price">&yen;132.00</div>
                          <a
                            className="publish"
                            data-url="/sells/products/114980245857/detail_edit"
                            href="javascript:void(0);"
                          >
                            <i className="glyphicon glyphicon-edit" />
                            立即刊登
                          </a>
                        </div>
                      </li>
                      <li>
                        <div className="good-box">
                          <a target="blank" href="/sells/products/814980267865">
                            <img
                              src="https://pic.kjds.com/uploads/product_image/picture_url/191418/thumb_500_500_08b2fa0609d88a21b2294b95c7161c8f.jpg?imageMogr2/thumbnail/200x200/extent/200x200/background/d2hpdGU="
                              alt="D2hpdgu="
                            />
                          </a>
                          <div className="pt-name">
                            53cm Trendy Adjustable Bamboo Computer Desk
                          </div>
                          <div className="pt-price">&yen;133.00</div>
                          <a
                            className="publish"
                            data-url="/sells/products/814980267865/detail_edit"
                            href="javascript:void(0);"
                          >
                            <i className="glyphicon glyphicon-edit" />
                            立即刊登
                          </a>
                        </div>
                      </li>
                      <li>
                        <div className="good-box">
                          <a target="blank" href="/sells/products/515029331618">
                            <img
                              src="https://pic.kjds.com/uploads/product_image/picture_url/217918/thumb_500_500_89d06c47ead284e56a5e3e855d3ccca9.jpg?imageMogr2/thumbnail/200x200/extent/200x200/background/d2hpdGU="
                              alt="D2hpdgu="
                            />
                          </a>
                          <div className="pt-name">
                            Beauty Barber Chair With Stool Facial Tattoo Chair
                            Massage Bed Chair Salon Equipment
                          </div>
                          <div className="pt-price">&yen;1097.00</div>
                          <a
                            className="publish"
                            data-url="/sells/products/515029331618/detail_edit"
                            href="javascript:void(0);"
                          >
                            <i className="glyphicon glyphicon-edit" />
                            立即刊登
                          </a>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Modal
            show={show}
            onHide={() => {
              this.setState({
                show: false
              });
            }}
            dialogClassName="detail_modal"
            aria-labelledby="example-custom-modal-styling-title"
          >
            <Modal.Header closeButton>
              <Modal.Title id="example-custom-modal-styling-title">
                立即刊登
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <ul>
                <li>
                  价格：
                  <input
                    type="number"
                    value={price}
                    onChange={e => {
                      this.setState({ price: e.target.value });
                    }}
                  />
                </li>
                <li className="shopChose">
                  {" "}
                  店铺：
                  <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                      {shopName}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item
                        onClick={() => {
                          this.setState({
                            shopName: "店铺名字1"
                          });
                        }}
                      >
                        店铺名字1
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </li>
              </ul>
            </Modal.Body>
            <Modal.Footer>
              <Button
                onClick={() =>
                  this.setState({
                    show: false
                  })
                }
              >
                确定
              </Button>
            </Modal.Footer>
          </Modal>
          <Footer />
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
)(Details);
