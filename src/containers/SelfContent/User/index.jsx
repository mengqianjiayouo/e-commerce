import React, { Component } from "react";
import Topbar from "../../../components/Topbar/index";
import ReturnTop from "../../../components/ReturnTop/index";
import Footer from "../../../components/Footer/index";
import SideBar from "../../../components/SideBar/index";
import { connect } from "react-redux";
import { Row, Col, Table, Button, Dropdown } from "react-bootstrap";
import DatePicker from "react-datepicker";

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      islogin: false,
      address: "",
      contact: "",
      phone: ""
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
    const { islogin, address, phone, contact } = this.state;
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
            <div className="header">我的基本信息</div>
            <div className="information">
              <Row>
                <Col sm={4}>会员等级：</Col>
                <Col sm={8} />
              </Row>
              <Row>
                <Col sm={4}>上传产品数量：</Col>
                <Col sm={8}>1</Col>
              </Row>
              <Row>
                <Col sm={4}>余额：</Col>
                <Col sm={8}>¥ 0.00</Col>
              </Row>
              <Row>
                <Col sm={4}>收获地址：</Col>
                <Col sm={8}>
                  <input
                    type="text"
                    value={address}
                    placeholder="请输入收货地址"
                    onChange={e => {
                      this.setState({
                        adress: e.target.value
                      });
                    }}
                  />
                </Col>
              </Row>
              <Row>
                <Col sm={4}>联系人：</Col>
                <Col sm={8}>
                  <input
                    type="text"
                    placeholder="请输入联系人"
                    value={contact}
                    onChange={e => {
                      this.setState({
                        contact: e.target.value
                      });
                    }}
                  />
                </Col>
              </Row>
              <Row>
                <Col sm={4}>联系电话：</Col>
                <Col sm={8}>
                  <input
                    type="number"
                    value={phone}
                    placeholder="请输入联系电话"
                    onChange={e => {
                      this.setState({
                        phone: e.target.value
                      });
                    }}
                  />
                </Col>
              </Row>
              <Row>
                <Col sm={4} />
                <Col sm={8}>
                  <Button>保存修改</Button>
                </Col>
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
)(User);
