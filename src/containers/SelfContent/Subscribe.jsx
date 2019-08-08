import React, { Component } from "react";
import Topbar from "../../components/Topbar/index";
import ReturnTop from "../../components/ReturnTop/index";
import Footer from "../../components/Footer/index";
import SideBar from "../../components/SideBar/index";
import { connect } from "react-redux";
import { Row, Col, Table, Button, Dropdown } from "react-bootstrap";
import DatePicker from "react-datepicker";

class Subscribe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      islogin: false,
      address: "",
      contact: "",
      phone: "",
      subScribeAry: [],
      isEdit: false
    };
  }
  componentDidMount() {
    this.checkIsLogin();
  }

  checkIsLogin() {
    let user = sessionStorage.getItem("user");
    if (user) {
      this.setState({
        islogin: true
      });
    }
  }
  changePlat(a) {
    this.props.dispatch({ type: "PLATCHANGE", plat: a });
  }
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
    let { islogin, class1, class2, subScribeAry, isEdit } = this.state;
    // console.log(this.props.state);

    return (
      <div className="home self">
        {islogin ? (
          <div className="home_left">
            <SideBar {...this.props} />
          </div>
        ) : null}

        <div
          className="home_right"
          style={{ paddingLeft: islogin ? "118px" : 0 }}
        >
          <Topbar
            {...this.props}
            islogin={this.state.islogin}
            changePlat={a => {
              this.changePlat(a);
            }}
          />
          <ReturnTop />

          <div className="main subscribe">
            <div className="header">热销和新品订阅</div>
            <div className="top">
              <Row>
                <Col sm={3}>
                  <div>已订阅品类</div>
                </Col>
                <Col sm={9}>
                  <p style={{ color: "#f13c3c" }}>
                    温馨提示：每周一次为您推送热销商品和新品，默认推荐您注册时所选择的主营品类，您可以自行修改订阅类目。
                  </p>
                </Col>
              </Row>
              <Row className="content">
                <Col sm={2}>
                  <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                      {class1 || "一级分类"}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item
                        onClick={() => {
                          this.setState({
                            class1: "分类1"
                          });
                        }}
                      >
                        分类1
                      </Dropdown.Item>
                      <Dropdown.Item
                        onClick={() => {
                          this.setState({
                            class1: "分类2"
                          });
                        }}
                      >
                        分类2
                      </Dropdown.Item>
                      <Dropdown.Item
                        onClick={() => {
                          this.setState({
                            class1: "分类3"
                          });
                        }}
                      >
                        分类3
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Col>
                <Col sm={2}>
                  <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                      {class2 || "二级分类"}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item
                        onClick={() => {
                          this.setState({
                            class2: "分类1"
                          });
                          this.classAdd("分类1");
                        }}
                      >
                        分类1
                      </Dropdown.Item>
                      <Dropdown.Item
                        onClick={() => {
                          this.setState({
                            class2: "分类2"
                          });
                          this.classAdd("分类2");
                        }}
                      >
                        分类2
                      </Dropdown.Item>
                      <Dropdown.Item
                        onClick={() => {
                          this.setState({
                            class2: "分类3"
                          });
                          this.classAdd("分类3");
                        }}
                      >
                        分类3
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Col>
                <Col sm={6} className="class_content">
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
                <Col sm={2}>* 已选分类</Col>
              </Row>
              <div style={{ textAlign: "right" }}>
                <Button>取消订阅</Button>
              </div>
            </div>
            <div className="bom">
              <p>邮箱地址</p>
              <div className="content">
                <Row>
                  <Col sm={4}>
                    <input
                      type="email"
                      className="email_input"
                      disabled={!this.state.isEdit}
                    />
                  </Col>
                  <Col sm={8} className="action">
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
          <Footer />
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
