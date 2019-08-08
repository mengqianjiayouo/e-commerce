import React, { Component } from "react";
import Topbar from "../../components/Topbar/index";
import ReturnTop from "../../components/ReturnTop/index";
import Footer from "../../components/Footer/index";
import SideBar from "../../components/SideBar/index";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Row, Col, Table, Button, Dropdown, Modal } from "react-bootstrap";

class Members extends Component {
  constructor(props) {
    super(props);
    this.state = {
      islogin: false,
      recharge_money: "",
      isFreeMember: true,
      show: false
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
  handleClose() {
    this.setState({
      show: false
    });
  }
  render() {
    const { islogin, isFreeMember, show } = this.state;
    // console.log(this.props.state);

    return (
      <div className="home members">
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
            <div className="header">我的会员</div>
            <div className="content">
              <Row className="free_member">
                <Col sm={3}>我的会员级别：</Col>

                {isFreeMember ? (
                  <Col sm={9}>
                    <Button className="active">免费会员</Button>
                    <Button>
                      <Link to="/sells/members/subscription" target="_blank">
                        成为会员
                      </Link>
                    </Button>
                  </Col>
                ) : (
                  <Col sm={9}>
                    <Button className="active">普通会员</Button>
                  </Col>
                )}
              </Row>
              <Row>
                <Col sm={3}>会员权限：</Col>
                <Col sm={9}>
                  <Button>查看会员权限</Button>
                </Col>
              </Row>
              <Row>
                <Col sm={3}>购买记录：</Col>
                <Col sm={9}>
                  <Button
                    onClick={() => {
                      this.setState({
                        show: true
                      });
                    }}
                  >
                    查看购买记录
                  </Button>
                </Col>
              </Row>
            </div>
          </div>
          <Modal
            show={show}
            onHide={this.handleClose.bind(this)}
            className="member_modal"
          >
            <Modal.Body>
              <div className="head">购买记录</div>
              <div className="record">
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>日期</th>
                      <th>购买途径 </th>
                      <th>金额</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>time</td>
                      <td>from</td>
                      <td>money</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
              <div className="footer">
                <Button
                  variant="secondary"
                  onClick={this.handleClose.bind(this)}
                >
                  关闭
                </Button>
              </div>
            </Modal.Body>
          </Modal>
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
)(Members);
