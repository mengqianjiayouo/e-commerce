import React, { Component } from "react";
import { connect } from "react-redux";
import { Row, Col, Button, Input } from "antd";

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: "",
      contact: "",
      phone: ""
    };
  }
  componentDidMount() {}

  getData() {}
  showLogin() {}
  render() {
    const { address, phone, contact } = this.state;
    // console.log(this.props.state);

    return (
      <div className="home self">
        <div className="home_right">
          <div className="main">
            <div className="header">我的基本信息</div>
            <div className="information">
              <Row className="row">
                <Col span={8}>会员等级：</Col>
                <Col span={16} />
              </Row>
              <Row className="row">
                <Col span={8}>上传产品数量：</Col>
                <Col span={16}>1</Col>
              </Row>
              <Row className="row">
                <Col span={8}>余额：</Col>
                <Col span={16}>¥ 0.00</Col>
              </Row>
              <Row className="row">
                <Col span={8}>收货地址：</Col>
                <Col span={16}>
                  <Input
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
              <Row className="row">
                <Col span={8}>联系人：</Col>
                <Col span={16}>
                  <Input
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
              <Row className="row">
                <Col span={8}>联系电话：</Col>
                <Col span={16}>
                  <Input
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
              <Row className="row">
                <Col span={8} />
                <Col span={16}>
                  <Button type="primary">保存修改</Button>
                </Col>
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
)(User);
