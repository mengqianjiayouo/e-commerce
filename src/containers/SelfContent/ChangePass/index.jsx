import React, { Component } from "react";
import { connect } from "react-redux";
import { Row, Col, Button, Input } from "antd";

class ChangePass extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {}

  getData() {}
  showLogin() {}
  render() {
    const { data } = this.state;
    // console.log(this.props.state);

    return (
      <div className="home self">
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
