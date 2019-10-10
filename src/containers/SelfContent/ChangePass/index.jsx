import React, { Component } from "react";
import { connect } from "react-redux";
import { Row, Col, Button, Input } from "antd";
import { getCookie } from "../../../server/cookies";

class ChangePass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      islogin: false
    };
  }
  componentDidMount() {
    let ApiKey = getCookie("ApiKey");
    if (ApiKey && ApiKey !== "") {
      this.setState({
        islogin: true
      });
    }
  }

  getData() {}
  showLogin() {}
  render() {
    const { data } = this.state;
    // console.log(this.props.state);

    return (
      <div
        className="home self"
        style={{
          paddingTop: "40px",
          /* paddingLeft: this.state.islogin ? "140px" : 0, */
          paddingLeft: "140px",
          minHeight: "908px"
        }}
      >
        <div className="home_right">
          <div className="main">
            <div className="header">修改密码</div>
            <div className="information">
              <Row className="row">
                <Col span={8}>旧密码：</Col>
                <Col span={16}>
                  <Input type="text" placeholder="请输入旧密码" />
                </Col>
              </Row>
              <Row className="row">
                <Col span={8}>新密码：</Col>
                <Col span={16}>
                  <Input type="text" placeholder="请输入新密码" />
                </Col>
              </Row>
              <Row className="row">
                <Col span={8}>邮箱：</Col>
                <Col span={16}>
                  <Input type="text" placeholder="请输入邮箱" />
                </Col>
              </Row>
              <Row className="btns row">
                <Button className="gray"> 取消</Button>
                <Button type="primary"> 确认修改</Button>
              </Row>
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
)(ChangePass);
