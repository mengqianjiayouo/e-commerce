import React, { Component } from "react";
import { Link } from "react-router-dom";
import $ from "jquery";
import { connect } from "react-redux";
import { Table, Button, Select, Modal, Input } from "antd";
import { country } from "../../utils/countryFreight";
import Pagination from "../../components/Pagination/index";
const { Option } = Select;
class B2c_platforms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      platform: "",
      tipMessage: "",
      shopee: {
        account: "",
        account2: "",
        recive: ""
      },
      amazon: {
        store_name: "",
        // nick_name: "",
        site: "BR",
        seller_id: "",
        token: "",
        status: 0
      },
      amazonPages: {
        page: 1,
        total: 1,
        pageSize: 20
      },
      amazonStatus: {
        store_name_status: "",
        seller_id_status: "",
        token_status: ""
      },
      amazonData: [
        {
          usa_id: 1,
          user_id: 10,
          usa_online_status: 10,
          usa_auth_status: 10,
          usa_auth_code: "111",
          usa_quick_login: 1,
          usa_add_time: "2019-08-01 10:10:20",
          usa_update_time: "2019-08-01 10:10:23",
          usa_auth_time: "2019-08-01 10:10:25",
          usa_login_time: "2019-08-01 10:10:27",
          usa_logout_time: "2019-08-01 10:10:29"
        }
      ],
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
    this.getAmazonData();
  }
  changFormStatus(a, b, c) {
    this.setState(
      {
        [a]: {
          ...this.state[a],
          [b + "_status"]: c
        }
      },
      () => {}
    );
  }
  changeAccount(a, b, c) {
    this.setState({
      [a]: {
        ...this.state[a],
        [b]: c
      }
    });
  }
  addCount() {
    let { platform, amazon, shopee } = this.state;
    if (platform === "amazon") {
      if (amazon.store_name == "") {
        this.changFormStatus("amazonStatus", "store_name", "error");
        return;
      }
      if (amazon.seller_id == "") {
        this.changFormStatus("amazonStatus", "seller_id", "error");
        return;
      }
      if (amazon.token == "") {
        this.changFormStatus("amazonStatus", "token", "error");
        return;
      }
      $.ajax({
        method: "post",
        url: "https://118.25.155.176:8080/authSave",
        /* xhrFields: {
          withCredentials: true
        },
        crossDomain: true, */
        data: { ...amazon, platform },
        dataType: "json",
        success: res => {
          console.log(res);
          if (res.state === 1) {
            this.setState({
              show: false
            });
          }
          /* let data = res.data;
        this.setState({
          data
        }); */
        }
      });
      /* this.setState({
        show: false
      }); */
    } else {
      this.setState({
        show: false
      });
    }
  }
  showModal(a) {
    this.setState({
      show: true,
      platform: a
    });
  }

  getAmazonData() {
    let { amazonPages } = this.state;
    $.ajax({
      method: "get",
      url: "https://118.25.155.176:8080/auth",
      /*  xhrFields: {
        withCredentials: true
      },
      crossDomain: true, */
      data: { page: amazonPages.page, pageSize: amazonPages.pageSize },
      dataType: "json",
      error: err => {
        console.log(err);
      },
      success: (res, status, xhr) => {
        if (res.state === 1) {
          if (res.data && res.data.data) {
            this.setState({
              amazonData: res.data.data.filter((a, b) => {
                a.key = b;
              }),
              amazonPages: {
                ...this.state.amazonPages,
                total: res.data.last_page
              }
            });
          }
        }

        // console.log($.cookie("csrftoken"));
      }
    });
  }
  onAuthCheck(usa_id) {
    $.ajax({
      method: "post",
      url: "https://118.25.155.176:8080/authCheck",
      /*  xhrFields: {
        withCredentials: true
      },
      crossDomain: true, */
      data: { auth_id: usa_id },
      dataType: "json",
      error: err => {
        Modal.error({
          content: "检测失败！"
        });
      },
      success: res => {
        if (res.message === "Success") {
          Modal.success({
            content: "检测成功！"
          });

          this.getAmazonData();
        } else {
          Modal.error({
            content: "绑定失败！"
          });
        }

        // console.log($.cookie("csrftoken"));
      }
    });
  }

  render() {
    const {
      show,
      platform,
      shopee,
      amazon,
      amazonData,
      siteList,
      amazonStatus,
      amazonPages
    } = this.state;
    // console.log(this.props.state);
    let that = this;
    const amazonColumns = [
      {
        title: "店铺名称",
        dataIndex: "store_name",
        align: "center",
        key: "store_name"
      },
      {
        title: "操作时间",
        align: "center",
        key: "usa_add_time",
        render(a) {
          return `添加时间${a.usa_add_time}`;
        }
      },
      {
        title: "状态",
        align: "center",
        key: "usa_auth_status",
        render(a) {
          return a.usa_auth_status === 0 ? "未授权" : "已授权";
        }
      },
      {
        title: "国家",
        align: "center",
        key: "usa_region",
        render(a) {
          return country[a.usa_region];
        }
      },
      {
        title: "操作",
        align: "center",
        key: "action",
        render(a) {
          return (
            <Button
              type="primary"
              onClick={() => {
                that.onAuthCheck(a.usa_id);
              }}
            >
              检测
            </Button>
          );
        }
      }
    ];
    const shopeeColumns = [
      {
        title: "shopee账号",
        dataIndex: "store_name",
        align: "center",
        key: "store_name"
      },
      {
        title: "账号缩写",
        align: "center",
        key: "usa_add_time",
        render(a) {
          return `添加时间${a.usa_add_time}`;
        }
      },
      {
        title: "收款账号",
        align: "center",
        key: "usa_auth_status",
        render(a) {
          return a.usa_auth_status === 0 ? "未授权" : "已授权";
        }
      },
      {
        title: "API状态",
        align: "center",
        key: "usa_region",
        render(a) {
          return country[a.usa_region];
        }
      },
      {
        title: "操作",
        align: "center",
        key: "action",
        render(a) {
          return (
            <Button
              type="primary"
              onClick={() => {
                that.onAuthCheck(a.usa_id);
              }}
            >
              检测
            </Button>
          );
        }
      }
    ];
    return (
      <div className="home B2c">
        <div className="home_right">
          <div className="main">
            <Button
              type="primary"
              style={{ marginRight: "20px" }}
              onClick={() => {
                this.showModal("amazon");
              }}
            >
              添加账号
            </Button>
            <Link
              className="tip_note"
              to="/sells/b2c_platforms/note"
              target="_blank"
            >
              Amazon亚马逊店铺授权方法
            </Link>
            <Table
              columns={amazonColumns}
              dataSource={amazonData}
              pagination={false}
            />

            {amazonPages.total > 1 ? (
              <Pagination
                page={amazonPages.page}
                total={amazonPages.total}
                pageSize={amazonPages.pageSize}
                onPageChange={page => {
                  this.setState(
                    {
                      amazonPages: {
                        ...amazonPages,
                        page
                      }
                    },
                    () => {
                      this.getAmazonData();
                    }
                  );
                }}
                onPageSizeChange={pageSize => {
                  this.setState(
                    {
                      amazonPages: {
                        ...amazonPages,
                        pageSize,
                        page: 1
                      }
                    },
                    () => {
                      this.getAmazonData();
                    }
                  );
                }}
              />
            ) : null}
            <Button
              type="primary"
              onClick={() => {
                this.showModal("shopee");
              }}
            >
              添加shopee账号
            </Button>
            <Table columns={shopeeColumns} dataSource={[]} pagination={false} />
          </div>
        </div>
        <Modal
          wrapClassName="b2c_modal"
          visible={show}
          onCancel={() => {
            this.setState({
              show: false,
              amazonStatus: {
                store_name_status: "",
                seller_id_status: "",
                token_status: ""
              }
            });
          }}
          width={700}
          title="请输入你想添加的账号"
          onOk={() => {
            this.addCount();
          }}
          okText="确定"
          cancelText="取消"
        >
          <div className="modal-body">
            {platform === "shopee" ? (
              <div className="note">
                <p>温馨提示：</p>
                <h4>
                  1.shopee 店铺须首票订单产生后270天，才能使用第三方刊登软件。
                </h4>
                <h4>
                  2.授权操作需要登录shopee页面。请到您的shopee账号常用电脑上操作，以防账号
                  关联。
                </h4>
              </div>
            ) : (
              <div className="note">
                <p>温馨提示：</p>
                <h4 className="text-danger">
                  注意：授权操作需要登录 amazon页面。请到您的
                  amazon账号常用电脑上操作,以防账号关联;
                </h4>
              </div>
            )}
            {platform === "shopee" ? (
              <ul className="inputs">
                <li>
                  <p>
                    shopee账号:可以是非shopee账号名的任何名称，您只需要保证自己和同事都认识它。
                  </p>
                  <Input
                    type="text"
                    placeholder="请输入你想添加的账号"
                    value={shopee.account}
                    onChange={e => {
                      this.changeAccount("shopee", "account", e.target.value);
                    }}
                  />
                </li>
                <li>
                  <p>账号名缩写:2-3位的字母或数字，将用于系统中的简要展现。</p>
                  <Input
                    type="text"
                    placeholder="请输入账号缩写"
                    value={shopee.account2}
                    onChange={e => {
                      this.changeAccount("shopee", "account2", e.target.value);
                    }}
                  />
                </li>
                <li>
                  <p>
                    收款账号:请确认Paypal账号已与对应的shopee做好关联,该账号将提供给shopee收取刊登费用，并接受买家的订单付款。
                  </p>
                  <Input
                    type="text"
                    placeholder="请输入收款账号"
                    value={shopee.recive}
                    onChange={e => {
                      this.changeAccount("shopee", "recive", e.target.value);
                    }}
                  />
                </li>
              </ul>
            ) : (
              <ul className="inputs">
                <li>
                  <p>
                    店铺名称:可以是非店铺名称的任何名称，您只需要保证自己和同事都认识它。
                  </p>
                  <Input
                    type="text"
                    placeholder="请输入店铺名称"
                    className={
                      amazonStatus.store_name_status == "error"
                        ? "err_input"
                        : ""
                    }
                    value={amazon.store_name}
                    onChange={e => {
                      this.changFormStatus("amazonStatus", "store_name", "");
                      this.changeAccount(
                        "amazon",
                        "store_name",
                        e.target.value
                      );
                    }}
                  />
                  {amazonStatus.store_name_status == "error" ? (
                    <span className="note">请输入店铺名称</span>
                  ) : null}
                </li>
                {/*  <li>
                  <p>别名:账号名缩写:2-3位的别名，将用于系统中的简要展现。</p>
                  <Input
                    type="text"
                    placeholder="请输入名称缩写"
                    value={amazon.nick_name}
                    onChange={e => {
                      this.changeAccount("amazon", "nick_name", e.target.value);
                    }}
                  />
                </li> */}
                <li>
                  <p>卖家编号:请确保填写正确,否则无法绑定账号。</p>
                  <Input
                    type="text"
                    placeholder="请输入卖家编号"
                    value={amazon.seller_id}
                    className={
                      amazonStatus.seller_id_status == "error"
                        ? "err_input"
                        : ""
                    }
                    onChange={e => {
                      this.changFormStatus("amazonStatus", "seller_id", "");
                      this.changeAccount("amazon", "seller_id", e.target.value);
                    }}
                  />
                  {amazonStatus.seller_id_status == "error" ? (
                    <span className="note">请输入卖家编号</span>
                  ) : null}
                </li>
                <li>
                  <p>站点</p>
                  <Select
                    style={{ width: "100%" }}
                    value={amazon.site}
                    onChange={val => {
                      this.setState({
                        amazon: {
                          ...amazon,
                          site: val
                        }
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
                <li>
                  <p>MWS授权码:请确保填写正确,否则无法绑定账号。</p>
                  <Input
                    value={amazon.token}
                    className={
                      amazonStatus.token_status == "error" ? "err_input" : ""
                    }
                    onChange={e => {
                      this.changFormStatus("amazonStatus", "token", "");
                      this.changeAccount("amazon", "token", e.target.value);
                    }}
                    type="text"
                    placeholder="请输入MWS授权码"
                  />
                  {amazonStatus.token_status == "error" ? (
                    <span className="note">请输入MWS授权码</span>
                  ) : null}
                </li>
                <li>
                  <p>状态：</p>
                  <span>启用</span>{" "}
                  <Input
                    type="checkbox"
                    style={{
                      display: "inline-block",
                      width: "20px",
                      height: "20px",
                      verticalAlign: "middle",
                      marginRight: "30px"
                    }}
                    checked={amazon.status === 1}
                    onChange={e => {
                      if (e.target.checked) {
                        this.setState({
                          amazon: {
                            ...amazon,
                            status: 1
                          }
                        });
                      }
                    }}
                  />
                  <span>禁用</span>
                  <Input
                    type="checkbox"
                    checked={amazon.status === 0}
                    style={{
                      display: "inline-block",
                      width: "20px",
                      height: "20px",
                      verticalAlign: "middle"
                    }}
                    onChange={e => {
                      if (e.target.checked) {
                        this.setState({
                          amazon: {
                            ...amazon,
                            status: 0
                          }
                        });
                      }
                    }}
                  />
                </li>
              </ul>
            )}
          </div>
        </Modal>
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
)(B2c_platforms);
