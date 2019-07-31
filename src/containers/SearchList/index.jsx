import React, { Component } from "react";
import $ from "jquery";
import Topbar from "../../components/Topbar/index";
import ReturnTop from "../../components/ReturnTop/index";
import SearchBox from "../../components/SearchBox/index";
import Footer from "../../components/Footer/index";
import SideBar from "../../components/SideBar/index";
import { Pagination } from "react-bootstrap";
import { connect } from "react-redux";

class SearchList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      pageSize: 50,
      countryId: 0,
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
      ]
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
  getData() {
    let { pageSize, page } = this.state;

    $.ajax({
      method: "get",
      url: "http://118.25.155.176:8080/place",
      xhrFields: {
        withCredentials: true
      },
      crossDomain: true,
      data: { page, pageSize },
      dataType: "json",
      success: res => {
        console.log(res);
        /* let data = res.data;
        this.setState({
          data
        }); */
      }
    });
  }
  render() {
    const { islogin, countryId, sortType, data, checkAry } = this.state;
    const { plat } = this.props.state.platId;
    let isCheckAll = false;
    if (checkAry.length === data.length) {
      isCheckAll = true;
    }
    return (
      <div className="home searchList">
        {islogin ? (
          <div className="home_left">
            <SideBar />
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
                <li>
                  <div className="title">海外仓：</div>
                  {plat === 1 ? (
                    <div className="items">
                      {/* amazon 对应国家 */}
                      <span className={countryId == 0 ? "item active" : "item"}>
                        全部
                      </span>
                    </div>
                  ) : (
                    <div className="items">
                      {/* shopee 对应国家 */}
                      <span className={countryId == 0 ? "item active" : "item"}>
                        全部
                      </span>
                    </div>
                  )}
                </li>
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
                    <div className="rightBtn">批量上传</div>
                  </div>
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
                          this.props.history.push(
                            `/sells/products/${a.product_id}`
                          );
                        }}
                      >
                        <img src="" alt="" />
                        <div className="name">{a.product_title_en}</div>
                        <div className="goods_tag">
                          <span>海外仓</span>
                          <span>免邮费</span>
                        </div>
                      </div>
                      <div className="opration">
                        <div className="download">下载</div>
                        <div className="publish">立即刊登</div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="pagination">
                <Pagination>
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
                </Pagination>
              </div>
            </div>
          </div>
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
)(SearchList);
