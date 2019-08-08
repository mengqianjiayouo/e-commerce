import React, { Component } from "react";
import Topbar from "../../components/Topbar/index";
import ReturnTop from "../../components/ReturnTop/index";
import Footer from "../../components/Footer/index";
import SideBar from "../../components/SideBar/index";
import { connect } from "react-redux";
import { Row, Col, Dropdown, Button, Table } from "react-bootstrap";
import DatePicker from "react-datepicker";
class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      islogin: false,
      startDate: "",
      endDate: "",
      platId: "",
      accountId: "",
      zhandianId: ""
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
  showLogin() {}
  handleChange(a, date) {
    this.setState({
      [a]: date
    });
  }
  render() {
    const { islogin, platId, accountId, zhandianId } = this.state;
    // console.log(this.props.state);

    return (
      <div className="home product">
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
            <div className="search">
              <Row className="row_1">
                <Col>
                  <Row>
                    <Col sm={3}>刊登标题：</Col>
                    <Col sm={9}>
                      <input type="text" />
                    </Col>
                  </Row>
                </Col>
                <Col>
                  <Row>
                    <Col sm={3}>刊登货号：</Col>
                    <Col sm={9}>
                      <input type="text" />
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row className="row_1">
                <Col>
                  <Row>
                    <Col sm={3}>刊登商品时间：</Col>
                    <Col sm={9}>
                      <DatePicker
                        selected={this.state.startDate}
                        onChange={b => this.changDate("startDate", b)}
                      />
                      <span style={{ margin: "0 8px" }}>—</span>
                      <DatePicker
                        selected={this.state.endDate}
                        onChange={b => this.changDate("endDate", b)}
                      />
                    </Col>
                  </Row>
                </Col>
                <Col>
                  <Row>
                    <Col sm={3}>刊登平台:</Col>
                    <Col sm={9}>
                      <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                          {platId == "" ? "请选择平台" : platId}
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item
                            onClick={() => {
                              this.setState({
                                platId: "else"
                              });
                            }}
                          >
                            else
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                      <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                          {accountId == "" ? "请选择账号" : accountId}
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item
                            onClick={() => {
                              this.setState({
                                accountId: "Something else"
                              });
                            }}
                          >
                            Someth
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                      <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                          {zhandianId == "" ? "请选择平台" : zhandianId}
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item
                            onClick={() => {
                              this.setState({
                                zhandianId: "123"
                              });
                            }}
                          >
                            123
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <div>
                <Button style={{ marginLeft: 0 }}>开始查询</Button>
              </div>
            </div>
            <div style={{ width: "1180px", overflowX: "scroll" }}>
              <Table striped bordered hover size="sm">
                <thead>
                  <tr>
                    <th>商品图片</th>
                    <th>商品编码 </th>
                    <th>父货号</th>
                    <th>闪质大卖商品状态</th>
                    <th>闪质大卖最近下架时间</th>
                    <th>刊登时间</th>
                    <th>刊登标题</th>
                    <th>店铺下架时间</th>
                    <th>仓库类型</th>
                    <th>仓库所在国家</th>
                    <th>仓库名称</th>
                    <th>风险产品</th>
                    <th>特殊属性</th>
                    <th>刊登平台</th>
                    <th>刊登账号</th>
                    <th>刊登站点</th>
                    <th>店铺状态</th>
                    <th>Relisted</th>
                    <th>操作</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                  </tr>
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
)(Product);
