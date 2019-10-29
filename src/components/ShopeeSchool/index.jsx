import React, { Component } from "react";
import { apiList2 } from "../../server/apiMap";
import { Api } from "../../server/_ajax";
import { Collapse, Row, Col } from "antd";
import { getCookie } from "../../server/cookies";
import SubCateItem from "../SubCateItem/index";
const { Panel } = Collapse;
const api = new Api();
export default class ShopeeSchool extends Component {
  constructor(props) {
    super(props);
    this.state = {
      islogin: false,
      cateListAry: [],
      cateListAry2: [],
      subCateList: [], //亚马逊大学二级分类
      subCateList2: [],
      cate: "Shopee大学",
      cate2: "Shopee卖家课程"
    };
  }
  componentDidMount() {
    let { cate, cate2 } = this.state;
    this.getData();
    this.getSubCate(cate, "subCateList");
    this.getSubCate(cate2, "subCateList2");
    let ApiKey = getCookie("ApiKey");
    if (ApiKey && ApiKey !== "") {
      this.setState({
        islogin: true
      });
    }
  }
  getData() {
    let { cate, cate2 } = this.state;
    api.$get(
      apiList2.messageList.path,
      { cate: cate },
      res => {
        let list = res.messageList;
        let cateListAry = []; //存放没有二级分类的list
        list.map(a => {
          if (!a.subCate) {
            cateListAry.push(a);
          }
        });
        this.setState({
          list: res.messageList,
          cateListAry
        });
      },
      code => {
        if (code === 401) {
          this.props.history.push("/signin");
        }
      }
    );
    api.$get(
      apiList2.messageList.path,
      { cate: cate2 },
      res => {
        let list = res.messageList;
        let cateListAry2 = []; //存放没有二级分类的list
        list.map(a => {
          if (!a.subCate) {
            cateListAry2.push(a);
          }
        });
        this.setState({
          list: res.messageList,
          cateListAry2
        });
      },
      code => {
        if (code === 401) {
          this.props.history.push("/signin");
        }
      }
    );
  }
  getSubCate(cate, subCateList) {
    api.$get(
      apiList2.getSubCate.path,
      { cate },
      res => {
        let list = res.categoryList;
        list = list.filter(a => a.subCate);
        this.setState({
          [subCateList]: [...list]
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
    const {
      cateListAry,
      cateListAry2,
      subCateList,
      subCateList2,
      cate,
      cate2
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
            <div className="title">{cate}</div>

            {cateListAry.length > 0 ? (
              <Collapse>
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
            {subCateList.length > 0 ? (
              <Collapse>
                {subCateList.map((a, b) => {
                  return (
                    <Panel header={a.subCate} key={b + 1 + ""}>
                      <SubCateItem key={b} cate={a.cate} subCate={a.subCate} />
                    </Panel>
                  );
                })}
              </Collapse>
            ) : null}
          </Col>
          <Col span={12}>
            <div className="title">{cate2}</div>

            {cateListAry2.length > 0 ? (
              <Collapse>
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
            {subCateList2.length > 0 ? (
              <Collapse>
                {subCateList2.map((a, b) => {
                  return (
                    <Panel header={a.subCate} key={b + 1 + ""}>
                      <SubCateItem key={b} cate={a.cate} subCate={a.subCate} />
                    </Panel>
                  );
                })}
              </Collapse>
            ) : null}
          </Col>
        </Row>
      </div>
    );
  }
}
