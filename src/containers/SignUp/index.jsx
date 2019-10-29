import React, { Component } from "react";
import { Link } from "react-router-dom";
import { message, Modal, Row, Col, Icon } from "antd";
import { Api } from "../../server/_ajax";
import { apiList1 } from "../../server/apiMap";
import $ from "jquery";
import Particle from "zhihu-particle";

const api = new Api();
export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nameError: false,
      wordError: false,
      codeError: false,
      mobileError: false,
      mobileErrMsg: "",
      mobile: "",
      name: "",
      password: "",
      inviteCode: ""
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
    });
    new Particle(this.background, {
      interactive: true,
      density: "low"
    });
    let h = document.clientHeight || document.body.clientHeight;
    $(".sign_container").css("height", h);
  }

  signUp() {
    let { name, password, inviteCode, mobile } = this.state;
    if (!mobile) {
      this.setState({
        mobileError: true,
        mobileErrMsg: "请输入手机号"
      });
      return;
    }
    if (!/^1[3456789]\d{9}$/.test(mobile)) {
      this.setState({
        mobileError: true,
        mobileErrMsg: "请填写正确手机号"
      });
      return;
    }
    if (!name) {
      this.setState({ nameError: true });
      return;
    }
    if (!password) {
      this.setState({
        wordError: true
      });
      return;
    }

    api.$post(
      apiList1.signUp.path,
      { name, mobile, password, inviteCode },
      res => {
        if (res.Success) {
          message.success("注册成功，正在前往登录...", 1, () => {
            this.props.history.push("/signin");
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
    const {
      nameError,
      wordError,
      mobileError,
      mobileErrMsg,
      name,
      mobile,
      password,
      inviteCode,
      codeError
    } = this.state;
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
                    type="phone"
                    style={{ color: "#fff", fontSize: "16px" }}
                  />
                </Col>
                <Col span={22}>
                  {" "}
                  <input
                    className="input"
                    autoFocus="autofocus"
                    placeholder="请输入手机号码"
                    type="tel"
                    value={mobile}
                    onChange={a => {
                      this.setState({ mobile: a.target.value });
                    }}
                  />
                </Col>
              </Row>

              {mobileError ? (
                <p>
                  <span>!</span>
                  {mobileErrMsg}
                </p>
              ) : null}
            </div>
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
                    placeholder="请输入真实姓名"
                    type="text"
                    value={name}
                    onChange={a => {
                      this.setState({ name: a.target.value });
                    }}
                  />
                </Col>
              </Row>

              {nameError ? (
                <p>
                  <span>!</span>请输入用户名
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
            <div className="password">
              <Row>
                <Col span={2} style={{ height: 40, lineHeight: "40px" }}>
                  <Icon
                    type="key"
                    style={{ color: "#fff", fontSize: "16px" }}
                  />
                </Col>
                <Col span={22}>
                  <input
                    className="input"
                    autoComplete="off"
                    placeholder="请输入邀请码"
                    type="text"
                    value={inviteCode}
                    onChange={a => {
                      this.setState({ inviteCode: a.target.value });
                    }}
                  />
                </Col>
              </Row>

              {codeError ? (
                <p>
                  <span>!</span>邀请码错误!
                </p>
              ) : null}
            </div>

            <div className="submit_button">
              <div
                className="input"
                onClick={() => {
                  this.signUp();
                }}
              >
                注册
              </div>
            </div>
            <div className="bottom_notes sign_up">
              已有账户，
              <Link to="/signin">前往登录!</Link>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
