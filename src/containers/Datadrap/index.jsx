import React, { Component } from "react";
import Topbar from "../../components/Topbar/index";
import ReturnTop from "../../components/ReturnTop/index";
import Footer from "../../components/Footer/index";
import SideBar from "../../components/SideBar/index";
import { connect } from "react-redux";
import { Row, Col, Table, Button, Dropdown } from "react-bootstrap";
const drapTypes = {
  all: "全部",
  url: "产品网址"
};
class Datadrap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      islogin: false,
      origin: "",
      country: "",
      data: [{}],
      drapType: "all",
      isSaveProdut: "all"
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
  render() {
    const { islogin, origin, drapType, data, isSaveProdut } = this.state;
    // console.log(this.props.state);

    return (
      <div className="home orders drap">
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

          <div className="main">
            <div className="header">
              <span>数据采集</span>
            </div>
            <div className="search">
              <Row>
                <Col sm={2}>
                  <div className="title">来源：</div>
                </Col>
                <Col sm={6} className="input">
                  <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                      {origin === "" ? "全部" : origin}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item
                        onClick={() => {
                          this.setState({
                            origin: "Action"
                          });
                        }}
                      >
                        来源1
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Col>
              </Row>

              <Row>
                <Col sm={2}>
                  <div className="title">采集方式：</div>
                </Col>
                <Col sm={6}>
                  {Object.keys(drapTypes).map((a, b) => {
                    return (
                      <div
                        key={b}
                        className={
                          drapType === a ? "active drap_item" : "drap_item"
                        }
                        onClick={() => {
                          this.setState({
                            drapType: a
                          });
                        }}
                      >
                        {drapTypes[a]}
                      </div>
                    );
                  })}
                </Col>
              </Row>
              <Row>
                <Col sm={2}>
                  <div className="title">已保存为产品：</div>
                </Col>
                <Col sm={6}>
                  <div
                    className={
                      isSaveProdut === "all" ? "active drap_item" : "drap_item"
                    }
                    onClick={() => {
                      this.setState({
                        isSaveProdut: "all"
                      });
                    }}
                  >
                    全部
                  </div>
                  <div
                    className={
                      isSaveProdut === true ? "active drap_item" : "drap_item"
                    }
                    onClick={() => {
                      this.setState({
                        isSaveProdut: true
                      });
                    }}
                  >
                    是
                  </div>
                  <div
                    className={
                      isSaveProdut === false ? "active drap_item" : "drap_item"
                    }
                    onClick={() => {
                      this.setState({
                        isSaveProdut: false
                      });
                    }}
                  >
                    否
                  </div>
                </Col>
              </Row>
              <Row className="btns">
                <Col sm={2} />
                <Col sm={6}>
                  <Button>开始查询</Button>
                  <Button>产品采集</Button>
                </Col>
              </Row>
            </div>
            <div className="table">
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>产品SKU</th>
                    <th>来源</th>
                    <th>产品明细</th>
                    <th>售价</th>
                    <th>采集链接/货源链接</th>
                    <th>时间</th>
                    <th>操作</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((a, b) => {
                    return (
                      <tr key={b}>
                        <td>- </td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>
                          <Dropdown>
                            <Dropdown.Toggle variant="success">
                              操作
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                              <Dropdown.Item onClick={() => {}}>
                                操作1
                              </Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
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
)(Datadrap);
