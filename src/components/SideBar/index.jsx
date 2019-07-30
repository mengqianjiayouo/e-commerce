import React, { Component } from "react";
export default class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = { h: "" };
  }
  componentDidMount() {
    let h = document.body.clientHeight;
    this.setState({ h: h + 371 });
  }
  render() {
    return (
      <div>
        <nav className="left_sidebar" style={{ height: this.state.h }}>
          <div className="left_bar_close" />
          <div className="logo-container">
            <a href="/">
              <img
                src="https://cdn-resources-aliyun.kjds.com/assets/logo_white-eb3350a5fcb70a24d95ef4fc7392f7d8.png"
                alt="Logo white"
              />
            </a>
          </div>
          <div className="option-box hover-box">
            <a href="/sells/users">
              <img
                src="https://cdn-resources-aliyun.kjds.com/assets/user_default_avatar-4e570b12afe281b3e0cee7b2079e8abc.png"
                alt="User default avatar"
              />
              <div className="name">个人中心</div>
            </a>
            <div className="hide-box">
              <div className="each-item">
                <a href="/sells/users">基本资料</a>
              </div>
              <div className="each-item">
                <a href="/sells/users/account_security">账号安全</a>
              </div>
              <div className="each-item">
                <a href="/sells/users/subscribe">我的订阅</a>
              </div>
              <div className="each-item">
                <a href="/sells/users/custom">页数设置</a>
              </div>
            </div>
          </div>
          <div className="option-box hover-box">
            <a href="/sells/members">
              <img
                src="https://cdn-resources-aliyun.kjds.com/assets/member_icon-954804cff28697bdf9dae6fc05f81426.png"
                alt="Member icon"
              />
              <div className="name">我的会员</div>
            </a>
          </div>
          <div className="option-box hover-box">
            <a href="javascript:void(0);">
              <img
                src="https://cdn-resources-aliyun.kjds.com/assets/sells/users/icon10-5c2866878238693b4f1598fc2a3af3e8.png"
                alt="Icon10"
              />
              <div className="name">账号授权</div>
            </a>
            <div className="hide-box">
              <div className="each-item">
                <a href="/sells/b2c_platforms">B2C账号授权</a>
              </div>
              <div className="each-item">
                <a href="/sells/b2c_platforms/auth_logistics">物流账号授权</a>
              </div>
            </div>
          </div>
          <div className="option-box hover-box">
            <a href="/sells/products">
              <img
                src="https://cdn-resources-aliyun.kjds.com/assets/sells/users/icon2-1eff06d5ed25119d8303581f95aa5aa8.png"
                alt="Icon2"
              />
              <div className="name">一键刊登</div>
            </a>
            <div className="hide-box">
              <div className="each-item">
                <a href="/sells/products">我的刊登商品</a>
              </div>
              <div className="each-item">
                <a href="/freight_templates/template_new">eBay物流模板</a>
              </div>
            </div>
          </div>
          <div className="option-box hover-box">
            <a href="/product_exports/product_download_file">
              <img
                src="https://cdn-resources-aliyun.kjds.com/assets/sells/users/icon2-1eff06d5ed25119d8303581f95aa5aa8.png"
                alt="Icon2"
              />
              <div className="name">物流配送</div>
            </a>
            <div className="hide-box">
              <div className="each-item">
                <a href="/sells/products">国内物流查询</a>
              </div>
              <div className="each-item">
                <a href="/freight_templates/template_new">国际物流查询</a>
              </div>
            </div>
          </div>
          <div className="option-box hover-box">
            <a href="/sells/inventories">
              <img
                src="https://cdn-resources-aliyun.kjds.com/assets/sells/users/icon2-1eff06d5ed25119d8303581f95aa5aa8.png"
                alt="Icon2"
              />
              <div className="name">库存预警</div>
            </a>
          </div>
          <div className="option-box hover-box">
            <a href="/sells/orders">
              <img
                src="https://cdn-resources-aliyun.kjds.com/assets/sells/users/icon3-7ef36eb63ff68c53ba11e47b70cba6f1.png"
                alt="Icon3"
              />
              <div className="name">订单管理</div>
            </a>
            <div className="hide-box">
              <div className="each-item">
                <a href="/sells/orders">订单查询</a>
              </div>
              <div className="each-item">
                <a href="/sells/orders/abnormal_order">异常订单</a>
              </div>
              <div className="each-item">
                <a href="/sells/orders/overtime_order">超时订单</a>
              </div>
              <div className="each-item">
                <a href="/sells/bounces">退件查询</a>
              </div>
              <div className="each-item">
                <a className="import_order" href="/sells/import_orders">
                  批量下单
                </a>
              </div>
            </div>
          </div>
          <div className="option-box hover-box">
            <a href="javascript:void(0);">
              <img
                src="https://cdn-resources-aliyun.kjds.com/assets/sells/users/icon8-f0645d5c9039c05d38d56c6eb821351b.png"
                alt="Icon8"
              />
              <div className="name">财务管理</div>
            </a>
            <div className="hide-box">
              <div className="each-item">
                <a href="/sells/accounts/recharge_histories">个人账户</a>
              </div>
              <div className="each-item">
                <a href="/sells/financial_management/payment_records">
                  付款记录
                </a>
              </div>
            </div>
          </div>
          <div className="option-box hover-box">
            <img
              src="https://cdn-resources-aliyun.kjds.com/assets/sells/users/icon9-0a440e9d44189725c256f2bf35400a42.png"
              alt="Icon9"
            />
            <div className="name">经营分析</div>
            <div className="hide-box">
              <div
                className="each-item"
                style={{ minHeight: "inherit", lineHeight: "55px" }}
              >
                <a
                  href="/analysis/data_analyses/sales_analysis"
                  style={{ minHeight: "inherit", lineHeight: "55px" }}
                >
                  销售分析
                </a>
              </div>
            </div>
          </div>
          <div className="option-box hover-box">
            <a href="javascript:void(0);">
              <img
                src="https://cdn-resources-aliyun.kjds.com/assets/sells/users/icon6-a7b717adf63425774ef52f413e44bcb7.png"
                alt="Icon6"
              />
              <div className="name">客户服务</div>
            </a>
            <div className="hide-box">
              <div className="each-item">
                <a href="/sells/customer_services">帮助</a>
              </div>
              <div className="each-item">
                <a href="/feedbacks/new">建议</a>
              </div>
              <div className="each-item">
                <a href="/complaints/new">投诉</a>
              </div>
            </div>
          </div>
          <div className="option-box hover-box">
            <a href="javascript:void(0);">
              <img
                src="https://cdn-resources-aliyun.kjds.com/assets/sells/users/icon2-1eff06d5ed25119d8303581f95aa5aa8.png"
                alt="Icon2"
              />
              <div className="name">文件中心</div>
            </a>
            <div className="hide-box">
              <div className="each-item">
                <a href="/sells/records_centers/export_file">文件导出</a>
              </div>
              <div className="each-item">
                <a href="/sells/records_centers/import_file">文件导入</a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
