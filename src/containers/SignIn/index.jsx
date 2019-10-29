import React, { Component } from "react";
import { Link } from "react-router-dom";
import { message, Modal, Col, Row, Icon } from "antd";
import $ from "jquery";
import { Api } from "../../server/_ajax";
import { apiList1 } from "../../server/apiMap";
import { setCookie, getCookie } from "../../server/cookies";
import Particle from "zhihu-particle";

const api = new Api();
export default class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileError: false,
      wordError: false,
      mobile: "",
      password: ""
    };
  }
  componentDidMount() {
    $(function() {
      //密码框眼睛:
      $(".glyphicon.password-visible-control").click(function() {
        if ($(this).hasClass("glyphicon-eye-close")) {
          //眼睛闭着
          $(this)
            .addClass("glyphicon-eye-open")
            .removeClass("glyphicon-eye-close");
          $("#user_password").attr("type", "text");
        } else {
          $(this)
            .addClass("glyphicon-eye-close")
            .removeClass("glyphicon-eye-open");
          $("#user_password").attr("type", "password");
        }
      });
      //记住我:
      $(".remember_me.check_box>p>span").click(function() {
        $(this).toggleClass("active");
      });
    });
    let h = document.clientHeight || document.body.clientHeight;
    $(".sign_container").css("height", h);
    new Particle(this.background, {
      interactive: true,
      density: "low"
    });
  }

  login() {
    let { mobile, password } = this.state;
    if (!mobile) {
      this.setState({ mobileError: true });
      return;
    }
    if (!password) {
      this.setState({
        wordError: true
      });
      return;
    }
    api.$post(
      apiList1.login.path,
      { mobile, password },
      res => {
        if (res.Success) {
          message.success("登录成功", 1, () => {
            setCookie("ApiKey", res.Data.token);
            this.props.history.push("/");
            // window.open("/");
          });
        } else {
          Modal.error({
            content: res.Msg
          });
        }
      },
      code => {
        if (code === 401) {
          this.props.history.push("/signin");
        }
      }
    );
  }
  render() {
    const { mobileError, wordError, mobile, password } = this.state;
    return (
      <div
        className="sign_container"
        ref={background => {
          this.background = background;
        }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 0,
          overflow: "hidden"
        }}
      >
        <div className="signin">
          <form
            className="new_user"
            id="new_user"
            action="#"
            autocomplete="off"
          >
            <img
              className="logo"
              src={require("../../images/logo.png")}
              alt="Logo white"
            />
            <p>闪质跨境供应链</p>
            <div className="login">
              <Row>
                <Col span={2} style={{ height: 40, lineHeight: "40px" }}>
                  <Icon
                    type="user"
                    style={{ color: "#fff", fontSize: "16px" }}
                  />
                </Col>
                <Col span={22}>
                  <input
                    className="input"
                    autoFocus="autofocus"
                    placeholder="请输入邮箱/手机号"
                    type="text"
                    value={mobile}
                    onChange={a => {
                      this.setState({ mobile: a.target.value });
                    }}
                    id="user_login"
                  />
                </Col>
              </Row>

              {mobileError ? (
                <p>
                  <span>!</span>请输入手机号
                </p>
              ) : null}
            </div>
            <div className="password">
              <Row>
                <Col span={2} style={{ height: 40, lineHeight: "40px" }}>
                  <Icon
                    type="lock"
                    style={{ color: "#fff", fontSize: "16px" }}
                  />
                </Col>
                <Col span={22}>
                  <input
                    className="input"
                    autoComplete="off"
                    placeholder="请输入密码"
                    type="password"
                    value={password}
                    onChange={a => {
                      this.setState({ password: a.target.value });
                    }}
                    id="user_password"
                  />
                </Col>
              </Row>

              <i className="glyphicon glyphicon-eye-open password-visible-control" />
              {wordError ? (
                <p>
                  <span>!</span>密码错误!
                </p>
              ) : null}
            </div>
            <div className="remember_me check_box">
              <p>
                <input type="checkbox" />
                <span />
                记住我
              </p>
            </div>
            <a className="forget_password" href="/forget_password">
              忘记密码
            </a>
            <div className="submit_button">
              <div
                className="input"
                onClick={() => {
                  this.login();
                }}
              >
                登录
              </div>
            </div>
            <div className="bottom_notes sign_up">
              还没账户?
              <Link to="/signup">前往注册!</Link>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
