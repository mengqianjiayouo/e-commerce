import React, { Component } from "react";
import $ from "jquery";
import { Dropdown } from "react-bootstrap";
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
    const { islogin } = this.props;
    const { plat } = this.state;

    return (
      <div className={islogin ? "common_header" : "common_header guest"}>
        <div className="content">
          <a className="header_logo" href="/" />
          {islogin ? (
            <div className="header_platform pull-right">
              <div className="dropdown" />
              <a href="https://rumen.kjds.com" target="_blank">
                <span className="newer">入门指引</span>
              </a>
              <a className="bulletins" href="/sells/bulletins">
                {/* <img
                  src="https://cdn-resources-aliyun.kjds.com/assets/sells/users/bulletins-98b611d32f6139557f140f239f4525f9.png"
                  alt="Bulletins"
                /> */}
                <span>公告</span>
              </a>
              <a
                className="shopping_cart"
                onClick={() => {
                  this.props.history.push({
                    pathname: "/sells/orders/shopping_cart"
                  });
                }}
              >
                {/* <img
                  alt="购物车"
                  src="https://cdn-resources-aliyun.kjds.com/assets/sells/shopping_cart-dbb6910f337b1388ec7e92f50011f8bb.png"
                /> */}
                <span>购物车</span>
                <div className="products-sum-number">3</div>
              </a>
              <div className="navbar-custom-menu">
                <ul className="nav navbar-nav">
                  <li className="dropdown user user-menu">
                    <Dropdown alignRight>
                      <Dropdown.Toggle variant="success" id="dropdown-basic">
                        <div>
                          {/* <img
                            alt="用户头像"
                            className="user-image"
                            src="https://cdn-resources-aliyun.kjds.com/assets/user_default_avatar-4e570b12afe281b3e0cee7b2079e8abc.png"
                          /> */}
                          <span className="hidden-xs" title="王祚家">
                            王祚家
                          </span>
                        </div>
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <ul>
                          <li className="user-header">
                            {/* <img
                              alt="用户头像"
                              className="img-circle"
                              src="https://cdn-resources-aliyun.kjds.com/assets/user_default_avatar-4e570b12afe281b3e0cee7b2079e8abc.png"
                            /> */}
                            <p>
                              王祚家<small>2019年01月18日 17:25 加入</small>
                            </p>
                          </li>
                          <li className="sell-user-footer">
                            <div className="col-xs-4 sell">
                              <a
                                className="btn btn-default btn-flat"
                                href="/sells/users"
                              >
                                {/*  <img
                                  src="https://cdn-resources-aliyun.kjds.com/assets/sells/icon_mini_personal-7a48fa6b2e927d3258e81ad1392ed368.png"
                                  alt="Icon mini personal"
                                /> */}
                                <span>个人中心</span>
                              </a>
                            </div>
                            <div className="col-xs-4 sell">
                              <a
                                className="btn btn-primary btn-flat"
                                data-method="get"
                                href="/users/sign_out"
                              >
                                {/*  <img
                                className="member"
                                src="https://cdn-resources-aliyun.kjds.com/assets/sells/public_member-cb9c87ce661640304bfe54c9bc8fe96d.png"
                                alt="Public member"
                              /> */}
                                <span className="member-level-value">
                                  免费会员
                                </span>
                              </a>
                            </div>
                            <div className="col-xs-4 sell">
                              <a
                                className="btn btn-primary btn-flat"
                                data-method="get"
                                href="/users/sign_out"
                              >
                                {/* <img
                                  src="https://cdn-resources-aliyun.kjds.com/assets/sells/icon_quit_button-6876dd1effa9db545f0d71c753d27bd9.png"
                                  alt="Icon quit button"
                                /> */}
                                <span>退出</span>
                              </a>
                            </div>
                          </li>
                        </ul>
                      </Dropdown.Menu>
                    </Dropdown>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <div className="header_btn">
              <a
                onClick={() => {
                  this.props.history.push("/signin");
                }}
                href="javascript:void(0);"
              >
                登录
              </a>
              <a
                href="javascript:void(0);"
                onClick={() => {
                  this.props.history.push("/signup");
                }}
              >
                注册
              </a>
              <a target="blank" href="https://rumen.kjds.com">
                入门指引
              </a>
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
