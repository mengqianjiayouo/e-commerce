import React, { Component } from "react";
import $ from "jquery";
import { Link } from "react-router-dom";
import { Dropdown, Popover } from "antd";
import { clearCookie } from "../../server/cookies.js";
export default class Topbar extends Component {
  constructor(props) {
    super(props);
    this.state = { dropShow: false, plat: 0 };
  }
  componentDidMount() {
    const { plat } = this.props.state.platId;
    this.setState({
      plat
    });
  }
  componentWillReceiveProps(newProps) {
    const { plat } = newProps.state.platId;
    this.setState({
      plat
    });
  }
  pushSearch(plat) {
    this.props.changePlat(plat);
    this.props.history.push({
      pathname: "/sells/search",
      query: { page: 1, pageSize: 50 }
    });
  }
  render() {
    const { islogin, member } = this.props;
    const { plat } = this.state;
    const content = (
      <ul>
        <li className="user-header">
          {/* <img
                              alt="用户头像"
                              className="img-circle"
                              src="https://cdn-resources-aliyun.kjds.com/assets/user_default_avatar-4e570b12afe281b3e0cee7b2079e8abc.png"
                            /> */}
          <p>{member.Name}</p>
        </li>
        <li className="sell-user-footer">
          <div className="col-xs-4 sell">
            <a href="/sells/users">
              {/*  <img
                                  src="https://cdn-resources-aliyun.kjds.com/assets/sells/icon_mini_personal-7a48fa6b2e927d3258e81ad1392ed368.png"
                                  alt="Icon mini personal"
                                /> */}
              <span>个人中心</span>
            </a>
          </div>
          <div className="col-xs-4 sell">
            <a data-method="get" href="/users/sign_out">
              <span className="member-level-value">免费会员</span>
            </a>
          </div>
          <div className="col-xs-4 sell">
            <Link
              data-method="get"
              to="#"
              onClick={() => {
                clearCookie("ApiKey");
                // window.location.href = "/signin";
                this.props.history.push("/signin");
              }}
            >
              <span>退出</span>
            </Link>
          </div>
        </li>
      </ul>
    );
    return (
      <div className={islogin ? "common_header" : "common_header guest"}>
        <div className="content">
          <Link className="header_logo" to="/" />
          {islogin ? (
            <div className="header_platform pull-right">
              <div className="dropdown" />
              <Link to="/guid">
                <span className="newer">入门指引</span>
              </Link>
              <Link className="bulletins" to="/sells/bulletins">
                <span>公告</span>
              </Link>
              <div
                className="shopping_cart"
                onClick={() => {
                  this.props.history.push({
                    pathname: "/sells/orders/shopping_cart"
                  });
                }}
              >
                <span>记事本</span>
              </div>
              {/* <div
                className="shopping_cart"
                onClick={() => {
                  this.props.history.push({
                    pathname: "/sells/orders/shopping_cart"
                  });
                }}
              >
                
                <span>邮箱</span>
              </div> */}
              <div className="navbar-custom-menu">
                <ul className="nav navbar-nav">
                  <li className="dropdown user user-menu">
                    <Popover
                      content={content}
                      trigger="click"
                      overlayClassName="user_menu_pop"
                    >
                      <span className="hidden-xs">{member.Name}</span>
                    </Popover>
                  </li>
                </ul>
              </div>
              <div className="money-menu">
                <span style={{ marginRight: 15, color: "#f13c3c" }}>
                  {member.Balance}
                </span>
                |<Link to="/sells/financial_management/recharge">充值</Link>
              </div>
            </div>
          ) : (
            <div className="header_btn">
              <div
                onClick={() => {
                  this.props.history.push("/signin");
                }}
              >
                登录
              </div>
              <div
                onClick={() => {
                  this.props.history.push("/signup");
                }}
              >
                注册
              </div>
              <div>
                <Link to="/guid">入门指引</Link>
              </div>
            </div>
          )}

          <ul className="show-platform">
            <li className={plat == 0 ? "active" : ""}>
              <span
                onClick={() => {
                  this.props.changePlat(0);
                  this.props.history.push("/");
                }}
              >
                首页
              </span>
            </li>
            <li id="1" className={plat == 1 ? "active" : ""}>
              <span
                onClick={() => {
                  this.pushSearch(1);
                }}
              >
                Amazon
              </span>
            </li>
            <li id="26" className={plat == 2 ? "active" : ""}>
              <span
                onClick={() => {
                  this.pushSearch(2);
                }}
              >
                shopee
              </span>
            </li>
            <div className="clear_float" />
          </ul>
          <div className="header_platform pull-right">
            <div className="dropdown" />
          </div>
        </div>
      </div>
    );
  }
}
