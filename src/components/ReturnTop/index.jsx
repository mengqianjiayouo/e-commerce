import React, { Component } from "react";
export default class ReturnTop extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {}
  render() {
    return (
      <div className="right_sidebar">
        <div className="service" id="CampBizQQWPA">
          <a
            href="http://wpa.b.qq.com/cgi/wpa.php?ln=1&amp;key=XzgwMDE4NzA1NV80NzY0OTNfODAwMTg3MDU1XzJf"
            target="blank"
          >
            在线客服
          </a>
        </div>
        <div className="back_top">
          <a>返回顶部</a>
        </div>
      </div>
    );
  }
}
