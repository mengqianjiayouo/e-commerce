import React, { Component } from "react";
import { apiList2 } from "../../server/apiMap";
import { Api } from "../../server/_ajax";
import { Collapse } from "antd";
import { getCookie } from "../../server/cookies";

const { Panel } = Collapse;
const api = new Api();
export default class Bulletins extends Component {
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
    api.$get(apiList2.messageList.path, { cate: "news" }, res => {
      console.log(res);
      this.setState({
        list: res.messageList
      });
    });
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
      >
        <Collapse defaultActiveKey={["1"]}>
          {list.map((a, b) => {
            return (
              <Panel header={a.title} key={b + 1 + ""}>
                <div dangerouslySetInnerHTML={{ __html: a.content }} />
              </Panel>
            );
          })}
        </Collapse>
      </div>
    );
  }
}
