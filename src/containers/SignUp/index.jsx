import React, { Component } from "react";
import { Link } from "react-router-dom";
import { message, Modal } from "antd";
import { Api } from "../../server/_ajax";
import { apiList1 } from "../../server/apiMap";
import $ from "jquery";
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
      <div className="sign_container">
        <div className="signin">
          <form className="new_user" id="new_user" action="#">
            <img
              className="logo"
              src={require("../../images/logo.png")}
              alt="Logo white"
            />
            <p>注册</p>
            <div className="login">
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
              {mobileError ? (
                <p>
                  <span>!</span>
                  {mobileErrMsg}
                </p>
              ) : null}
            </div>
            <div className="login">
              <input
                className="input"
                placeholder="请输入真实姓名"
                type="text"
                value={name}
                onChange={a => {
                  this.setState({ name: a.target.value });
                }}
              />
              {nameError ? (
                <p>
                  <span>!</span>请输入用户名
                </p>
              ) : null}
            </div>
            <div className="password">
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
              <i className="glyphicon glyphicon-eye-open password-visible-control" />
              {wordError ? (
                <p>
                  <span>!</span>密码错误!
                </p>
              ) : null}
            </div>
            <div className="password">
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
