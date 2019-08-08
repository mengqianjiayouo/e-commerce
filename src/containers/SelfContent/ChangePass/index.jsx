import React, { Component } from "react";
import Topbar from "../../../components/Topbar/index";
import ReturnTop from "../../../components/ReturnTop/index";
import Footer from "../../../components/Footer/index";
import SideBar from "../../../components/SideBar/index";
import { connect } from "react-redux";
import { Row, Col, Table, Button, Dropdown } from "react-bootstrap";
import DatePicker from "react-datepicker";

class ChangePass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      islogin: false
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
    const {
      islogin,

      data
    } = this.state;
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

          <div className="main">
            <div className="header">修改密码</div>
            <div className="information">
              <Row>
                <Col sm={4}>旧密码：</Col>
                <Col sm={8}>
                  <input type="text" placeholder="请输入旧密码" />
                </Col>
              </Row>
              <Row>
                <Col sm={4}>新密码：</Col>
                <Col sm={8}>
                  <input type="text" placeholder="请输入新密码" />
                </Col>
              </Row>
              <Row>
                <Col sm={4}>邮箱：</Col>
                <Col sm={8}>
                  <input type="text" placeholder="请输入邮箱" />
                </Col>
              </Row>
              <Row className="btns">
                <Button className="gray"> 取消</Button>
                <Button> 确认修改</Button>
              </Row>
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
)(ChangePass);
