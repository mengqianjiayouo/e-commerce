import React, { Component } from "react";
import { Link } from "react-router-dom";
import user_icon from "../../images/sidebar_users.png";
import member_icon from "../../images/sidebar_members.png";
import logisitcs_icon from "../../images/sidebar_logistics.png";
import datagrap_icon from "../../images/sidebar_datagrap.png";
import file_icon from "../../images/sidebar_file.png";
import financial_icon from "../../images/sidebar_financial.png";
import move_icon from "../../images/sidebar_move.png";
import analysis_icon from "../../images/sidebar_analysis.png";
import order_icon from "../../images/sidebar_order.png";
import study_online_icon from "../../images/study_online.png";
import authorize_icon from "../../images/sidebar_authorize.png";
import email_icon from "../../images/email.png";
import $ from "jquery";

export default class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = { h: "" };
  }
  componentDidMount() {}
  render() {
    return (
      <div>
        <nav className="left_sidebar">
          <div className="left_bar_close" />
          <div className="logo-container">
            <a href="/">
              {/* <img src="../../e-commerce/images/logo.png" alt="Logo white" /> */}
              <img src={require("../../images/logo.png")} alt="Logo white" />
            </a>
          </div>
          <div className="option-box hover-box">
            <Link to="/sells/users">
              <img src={user_icon} alt="User default avatar" />
              个人中心
            </Link>

            <div className="hide-box">
              <div className="each-item">
                <Link to="/sells/users">基本资料</Link>
              </div>
              <div className="each-item">
                <Link to="/sells/changePass">修改密码</Link>
              </div>
            </div>
          </div>
          <div className="option-box hover-box">
            <Link to="/sells/members">
              <img src={member_icon} alt="Member icon" />
              <div className="name">我的会员</div>
            </Link>
          </div>
          <div className="option-box hover-box">
            <div>
              <img src={authorize_icon} alt="Icon10" />
              <div className="name">账号授权</div>
            </div>
            <div className="hide-box">
              <div className="each-item">
                <Link to="/sells/b2c_platforms">B2C账号授权</Link>
              </div>
            </div>
          </div>
          <div className="option-box hover-box">
            <img src={email_icon} alt="Icon9" />
            <div className="name">我的邮箱</div>
          </div>
          <div className="option-box hover-box">
            <Link to="/sells/products">
              <img src={file_icon} alt="Icon2" />
              <div className="name">一键刊登</div>
            </Link>
            <div className="hide-box">
              <div className="each-item">
                <Link to="/sells/products">Amazon刊登商品</Link>
              </div>
              <div className="each-item">
                <Link to="/freight_templates/template_new">
                  Shopee刊登的产品
                </Link>
              </div>
            </div>
          </div>
          <div className="option-box hover-box">
            <Link to="#">
              <img src={logisitcs_icon} alt="Icon2" />
              <div className="name">物流配送</div>
            </Link>
            <div className="hide-box">
              <div className="each-item">
                <Link to="/logistics/domestic">国内物流查询</Link>
              </div>
              <div className="each-item">
                <Link to="/logistics/international">国际物流查询</Link>
              </div>
            </div>
          </div>
          <div className="option-box hover-box">
            <Link to="/sells/inventories">
              <img src={move_icon} alt="Icon2" />
              <div className="name">店铺搬家</div>
            </Link>
          </div>
          <div className="option-box hover-box">
            <Link to="/sells/orders">
              <img src={order_icon} alt="Icon3" />
              <div className="name">订单管理</div>
            </Link>
            <div className="hide-box">
              <div className="each-item">
                <Link to="/sells/orders">订单查询</Link>
              </div>
              <div className="each-item">
                <Link to="/sells/orders/abnormal_order">异常订单</Link>
              </div>
              <div className="each-item">
                <Link to="/sells/orders/overtime_order">超时订单</Link>
              </div>
              <div className="each-item">
                <Link to="/sells/bounces">退件查询</Link>
              </div>
              <div className="each-item">
                <Link className="import_order" to="/sells/import_orders">
                  滞留件查询
                </Link>
              </div>
            </div>
          </div>
          <div className="option-box hover-box">
            <div>
              <img src={financial_icon} alt="Icon8" />
              <div className="name">财务管理</div>
            </div>
            <div className="hide-box">
              <div className="each-item">
                <Link to="/sells/accounts/recharge_histories">个人账户</Link>
              </div>
              <div className="each-item">
                <Link to="/sells/financial_management/payment_records">
                  付款记录
                </Link>
              </div>
            </div>
          </div>
          <div className="option-box hover-box">
            <img src={analysis_icon} alt="Icon9" />
            <div className="name">经营分析</div>
            <div className="hide-box">
              <div
                className="each-item"
                style={{ minHeight: "inherit", lineHeight: "55px" }}
              >
                <Link
                  to="/analysis/data_analyses/sales_analysis"
                  style={{ minHeight: "inherit", lineHeight: "55px" }}
                >
                  销售分析
                </Link>
              </div>
            </div>
          </div>
          <div className="option-box hover-box">
            <Link to="/analysis/data_grap">
              <img src={datagrap_icon} alt="Icon6" />
              <div className="name">数据抓取</div>
            </Link>
          </div>
          <div className="option-box hover-box">
            <img src={study_online_icon} alt="Icon9" />
            <div className="name">在线学习</div>
            <div className="hide-box">
              <div
                className="each-item"
                style={{ minHeight: "inherit", lineHeight: "55px" }}
              >
                <Link
                  to="/amazonSchool"
                  style={{ minHeight: "inherit", lineHeight: "55px" }}
                >
                  亚马逊大学
                </Link>
              </div>
              <div
                className="each-item"
                style={{ minHeight: "inherit", lineHeight: "55px" }}
              >
                <Link
                  to="/shopeeSchool"
                  style={{ minHeight: "inherit", lineHeight: "55px" }}
                >
                  shopee大学
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
