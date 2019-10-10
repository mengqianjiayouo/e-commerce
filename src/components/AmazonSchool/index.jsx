import React, { Component } from "react";
import { apiList2 } from "../../server/apiMap";
import { Api } from "../../server/_ajax";
import { Collapse, Row, Col } from "antd";
import { getCookie } from "../../server/cookies";

const { Panel } = Collapse;
const api = new Api();
export default class AmazonSchool extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      islogin: false,
      cateListAry: [],
      subCateObj: {},
      cateListAry2: [],
      subCateObj2: {}
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
    api.$get(apiList2.messageList.path, { cate: "亚马逊大学" }, res => {
      let list = res.messageList;
      let cateListAry = []; //存放没有二级分类的list
      let subCateObj = {};
      list.map(a => {
        if (!a.subCate) {
          cateListAry.push(a);
        } else {
          if (subCateObj[a.subCate]) {
            subCateObj[a.subCate].push(a);
          } else {
            subCateObj[a.subCate] = [];
            subCateObj[a.subCate].push(a);
          }
        }
      });
      this.setState({
        list: res.messageList,
        cateListAry,
        subCateObj
      });
    });
    api.$get(apiList2.messageList.path, { cate: "亚马逊卖家视频" }, res => {
      let list = res.messageList;
      let cateListAry2 = []; //存放没有二级分类的list
      let subCateObj2 = {};
      list.map(a => {
        if (!a.subCate) {
          cateListAry2.push(a);
        } else {
          if (subCateObj2[a.subCate]) {
            subCateObj2[a.subCate].push(a);
          } else {
            subCateObj2[a.subCate] = [];
            subCateObj2[a.subCate].push(a);
          }
        }
      });
      this.setState({
        list: res.messageList,
        cateListAry2,
        subCateObj2
      });
    });
  }
  render() {
    const {
      list,
      cateListAry,
      subCateObj,
      cateListAry2,
      subCateObj2
    } = this.state;
    return (
      <div
        className="amazon_school"
        style={{
          paddingTop: "40px",
          /* paddingLeft: this.state.islogin ? "140px" : 0, */
          paddingLeft: "140px",
          minHeight: "908px"
        }}
      >
        <Row gutter={24}>
          <Col span={12}>
            <div className="title">亚马逊大学</div>

            {cateListAry.length > 0 ? (
              <Collapse defaultActiveKey={["1"]}>
                {cateListAry.map((a, b) => {
                  return (
                    <Panel header={a.subCate + "." + a.title} key={b + 1 + ""}>
                      <div
                        dangerouslySetInnerHTML={{ __html: a.content }}
                        className="message_content"
                      />
                    </Panel>
                  );
                })}
              </Collapse>
            ) : null}
            {Object.keys(subCateObj).map(key => {
              return (
                <div>
                  <div className="sub_title">{key}</div>
                  <Collapse defaultActiveKey={["1"]}>
                    {subCateObj[key].map((a, b) => {
                      return (
                        <Panel
                          header={a.subCate + "." + a.title}
                          key={b + 1 + ""}
                        >
                          <div
                            dangerouslySetInnerHTML={{ __html: a.content }}
                            className="message_content"
                          />
                        </Panel>
                      );
                    })}
                  </Collapse>
                </div>
              );
            })}
          </Col>
          <Col span={12}>
            <div className="title">亚马逊卖家视频</div>

            {cateListAry2.length > 0 ? (
              <Collapse defaultActiveKey={["1"]}>
                {cateListAry2.map((a, b) => {
                  return (
                    <Panel header={a.subCate + "." + a.title} key={b + 1 + ""}>
                      <div
                        dangerouslySetInnerHTML={{ __html: a.content }}
                        className="message_content"
                      />
                    </Panel>
                  );
                })}
              </Collapse>
            ) : null}
            {Object.keys(subCateObj2).map(key => {
              return (
                <div>
                  <div className="sub_title">{key}</div>
                  <Collapse defaultActiveKey={["1"]}>
                    {subCateObj2[key].map((a, b) => {
                      return (
                        <Panel
                          header={a.subCate + "." + a.title}
                          key={b + 1 + ""}
                        >
                          <div
                            dangerouslySetInnerHTML={{ __html: a.content }}
                            className="message_content"
                          />
                        </Panel>
                      );
                    })}
                  </Collapse>
                </div>
              );
            })}
          </Col>
        </Row>
        {/* <Collapse defaultActiveKey={["1"]}>
          {list.map((a, b) => {
            return (
              <Panel header={a.subCate + "." + a.title} key={b + 1 + ""}>
                <div dangerouslySetInnerHTML={{ __html: a.content }} />
              </Panel>
            );
          })}
        </Collapse> */}
      </div>
    );
  }
}
