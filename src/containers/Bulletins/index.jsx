import React, { Component } from "react";
import { apiList2 } from "../../server/apiMap";
import { Api } from "../../server/_ajax";
import { Collapse, Pagination } from "antd";
import { getCookie } from "../../server/cookies";
import moment from "moment";
const { Panel } = Collapse;
const api = new Api();
export default class Bulletins extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      islogin: false,
      total: 0,
      pageSize: 20,
      page: 1
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
  /* 获取数据 */
  getData() {
    const { page, pageSize } = this.state;
    api.$get(
      apiList2.messageList.path,
      { cate: "news", currentPage: page, limit: pageSize },
      res => {
        this.setState({
          list: res.messageList,
          total: res.totalCount
        });
      },
      code => {
        if (code === 401) {
          this.props.history.push("/signin");
        }
      }
    );
  }
  pageChange(page, size) {
    this.setState(
      {
        page: page,
        pageSize: size
      },
      () => {
        this.getData();
      }
    );
  }
  render() {
    const { list, pageSize, total, page } = this.state;
    return (
      <div
        style={{
          paddingTop: "40px",
          /* paddingLeft: this.state.islogin ? "140px" : 0, */
          paddingLeft: "140px",
          minHeight: "908px"
        }}
      >
        {list.length > 0 ? (
          <Collapse defaultActiveKey={["1"]}>
            {list.map((a, b) => {
              return (
                <Panel
                  header={
                    moment(a.createTime).format("YYYY-MM-DD") + " " + a.title
                  }
                  key={b + 1 + ""}
                >
                  <div dangerouslySetInnerHTML={{ __html: a.content }} />
                </Panel>
              );
            })}
          </Collapse>
        ) : (
          <div
            style={{
              fontSize: "20px",
              textAlign: "center"
            }}
          >
            目前没有公告！
          </div>
        )}
        {pageSize < total ? (
          <Pagination
            current={page}
            pageSize={pageSize}
            onChange={(page, size) => {
              this.pageChange(page, size);
            }}
            style={{ padding: "15px 0" }}
            total={total}
            showSizeChanger
            showQuickJumper
          />
        ) : null}
      </div>
    );
  }
}
