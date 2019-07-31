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
      checkAry: []
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
      contentType: "application/x-www-form-urlencoded",
      // dataType: "json",
      success: data => {
        console.log(data);
      }
    });
  }
  render() {
    const { islogin, countryId, sortType, isCheckAll } = this.state;
    const { plat } = this.props.state.platId;
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
            <SearchBox />
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
                        this.setState({
                          isCheckAll: !isCheckAll
                        });
                      }}
                    >
                      全选
                    </div>
                    <div className="rightBtn">批量上传</div>
                  </div>
                </li>
              </ul>
              <div className="goods">
                <div className="goodsItem">
                  <input
                    type="checkbox"
                    className="checkbox"
                    checked={true}
                    onChange={e => {
                      console.log(e.target.checked);
                    }}
                  />
                  <div
                    className="goodsInfo"
                    onClick={() => {
                      this.props.history.push("/sells/products/415620468008");
                    }}
                  >
                    <img src="" alt="" />
                    <div className="name">mingcheng</div>
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
