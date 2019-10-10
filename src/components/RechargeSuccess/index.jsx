import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class RechargeSuccess extends Component {
  constructor(props) {
    super(props);
    this.timer = null;
  }

  componentDidMount() {
    this.timer = window.setTimeout(() => {
      //   this.props.history.push("/sells/users");
    }, 2000);
  }

  componentWillUnmount() {
    window.clearTimeout(this.timer);
  }
  render() {
    return (
      <div
        className="home"
        style={{
          paddingTop: "40px",
          textAlign: "center"
        }}
      >
        充值成功，正在跳转至个人中心（<Link to="/sells/users">点击跳转</Link>）
      </div>
    );
  }
}
