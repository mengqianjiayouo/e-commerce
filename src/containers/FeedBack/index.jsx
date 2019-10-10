import React, { Component } from "react";
import $ from "jquery";
import { Row, Col, Input, Button, Modal } from "antd";
import { apiList2 } from "../../server/apiMap";
import { Api } from "../../server/_ajax";
const api = new Api();

export default class FeedBack extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: ""
    };
  }
  componentDidMount() {}
  submit() {
    let { content } = this.state;
    if (content === "") {
      Modal.error({
        content: "请输入意见内容！"
      });
      return;
    }
    let data = {
      cate: "意见箱",
      title: "",
      description: "",
      content: `<div>${content}</div>`
    };
    api.$postJSON(apiList2.addMessage.path, { ...data }, res => {
      this.setState({
        isSave: false
      });
      if (res.code === 0) {
        Modal.success({
          content: "意见反馈成功！"
        });
        this.setState({
          content: ""
        });
      }
    });
  }

  render() {
    return (
      <div
        className="home orders"
        style={{
          paddingTop: "40px",
          /* paddingLeft: this.state.islogin ? "140px" : 0, */
          paddingLeft: "140px",
          minHeight: "908px"
        }}
      >
        <div className="main" style={{ padding: "20px", textAlign: "center" }}>
          <Row>
            <Col span={4} style={{ textAlign: "right" }}>
              意见内容：
            </Col>
            <Col span={20}>
              <Input.TextArea
                className="TextArea"
                value={this.state.content}
                onChange={e => {
                  this.setState({
                    content: e.target.value
                  });
                }}
              />
            </Col>
          </Row>
          <Button
            style={{ marginTop: "20px" }}
            onClick={() => {
              this.submit();
            }}
          >
            提交
          </Button>
        </div>
      </div>
    );
  }
}
