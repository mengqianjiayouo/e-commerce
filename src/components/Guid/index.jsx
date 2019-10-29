import React, { Component } from "react";
import { apiList2 } from "../../server/apiMap";
import { Api } from "../../server/_ajax";
import { Collapse } from "antd";
import { getCookie } from "../../server/cookies";

const { Panel } = Collapse;
const api = new Api();
export default class Guid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      islogin: false
    };
  }
  componentDidMount() {
    this.getData();
    let ApiKey = getCookie("ApiKey");
    if (ApiKey && ApiKey !== "") {
      this.setState({
        islogin: true
      });
    }
  }
  getData() {
    api.$get(
      apiList2.messageList.path,
      { cate: "入门指引" },
      res => {
        this.setState({
          list: res.messageList
        });
      },
      code => {
        if (code === 401) {
          this.props.history.push("/signin");
        }
      }
    );
  }
  render() {
    const { list } = this.state;
    return (
      <div
        style={{
          paddingTop: "40px",
          /* paddingLeft: this.state.islogin ? "140px" : 0, */
          paddingLeft: "140px",
          minHeight: "908px"
        }}
        dangerouslySetInnerHTML={{
          __html: list[0] ? list[0].content : "没有数据"
        }}
      />
    );
  }
}
