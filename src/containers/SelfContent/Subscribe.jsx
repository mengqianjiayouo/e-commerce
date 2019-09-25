import React, { Component } from "react";
import { connect } from "react-redux";
import { Row, Col, Button, Select } from "antd";
const { Option } = Select;
class Subscribe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: "",
      contact: "",
      phone: "",
      subScribeAry: [],
      isEdit: false
    };
  }
  componentDidMount() {}

  getData() {}
  showLogin() {}
  classAdd(name) {
    let { subScribeAry } = this.state;
    if (subScribeAry.indexOf(name) === -1) {
      subScribeAry.push(name);
    }
    this.setState({
      subScribeAry
    });
  }
  render() {
    let { class1, class2, subScribeAry, isEdit } = this.state;
    // console.log(this.props.state);

    return (
      <div className="home self">
        <div className="home_right">
          <div className="main subscribe">
            <div className="header">热销和新品订阅</div>
            <div className="top">
              <Row className="row">
                <Col span={6}>
                  <div>已订阅品类</div>
                </Col>
                <Col span={18}>
                  <p style={{ color: "#f13c3c" }}>
                    温馨提示：每周一次为您推送热销商品和新品，默认推荐您注册时所选择的主营品类，您可以自行修改订阅类目。
                  </p>
                </Col>
              </Row>
              <Row className="content row">
                <Col span={4}>
                  <Select
                    defaultValue="一级分类"
                    style={{ width: "100%" }}
                    onChange={val => {
                      this.setState({
                        class1: val
                      });
                    }}
                  >
                    <Option value="分类1">分类1</Option>
                  </Select>
                </Col>
                <Col span={4}>
                  <Select
                    defaultValue="二级分类"
                    style={{ width: "100%" }}
                    onChange={val => {
                      this.setState({
                        class1: val
                      });
                      this.classAdd(val);
                    }}
                  >
                    <Option value="分类1">分类1</Option>
                    <Option value="分类2">分类2</Option>
                    <Option value="分类3">分类3</Option>
                  </Select>
                </Col>
                <Col span={12} className="class_content">
                  {subScribeAry.map((a, b) => {
                    return (
                      <div style={{ display: "inline-block" }} key={b}>
                        {a}
                        <span
                          onClick={() => {
                            subScribeAry = subScribeAry.filter(b => {
                              return b !== a;
                            });
                            this.setState({
                              subScribeAry
                            });
                          }}
                        >
                          -
                        </span>
                      </div>
                    );
                  })}
                </Col>
                <Col span={4}>* 已选分类</Col>
              </Row>
              <div style={{ textAlign: "right" }}>
                <Button>取消订阅</Button>
              </div>
            </div>
            <div className="bom">
              <p>邮箱地址</p>
              <div className="content">
                <Row>
                  <Col span={8}>
                    <input
                      type="email"
                      className="email_input"
                      disabled={!this.state.isEdit}
                    />
                  </Col>
                  <Col span={16} className="action">
                    <span
                      onClick={() => {
                        this.setState({
                          isEdit: true
                        });
                      }}
                    >
                      编辑
                    </span>
                    {!isEdit ? <span>删除</span> : null}
                    {!isEdit ? <span>添加</span> : null}
                  </Col>
                </Row>
                {isEdit ? (
                  <Button
                    className="ok_btn"
                    onClick={() => {
                      this.setState({
                        isEdit: false
                      });
                    }}
                  >
                    保存
                  </Button>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    dispatch
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Subscribe);
