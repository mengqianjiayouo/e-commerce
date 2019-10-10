import React, { Component } from "react";
import $ from "jquery";

export default class ReturnTop extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {}
  render() {
    return (
      <div className="right_sidebar">
        <div
          // href="http://q.url.cn/ab2LoP?_type=wpa&qidian=true"
          id="customer"
          // href="https://wpa.b.qq.com/cgi/wpa.php?ln=1&amp;key=XzgwMDE4NzA1NV80NzY0OTNfODAwMTg3MDU1XzJf"
          // target="blank"
        >
          <img src={require("../../images/QQ.png")} alt="" />
          在线客服
        </div>
        <div
          onClick={() => {
            this.props.history.push("/feedBack");
          }}
        >
          <img src={require("../../images/yijian_icon.png")} alt="" />
          意见箱
        </div>
      </div>
    );
  }
}
