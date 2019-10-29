import React, { Component } from "react";
import { connect } from "react-redux";
import { Row, Col, Button, Input } from "antd";
import { apiList1 } from "../../../server/apiMap";
import { Api } from "../../../server/_ajax";
import { getCookie } from "../../../server/cookies";

const api = new Api();
class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: "",
      contact: "",
      phone: "",
      member: {},
      islogin: false
    };
  }
  componentDidMount() {
    this.getData();
    let ApiKey = getCookie("ApiKey");
    if (ApiKey && ApiKey !== "") {
      this.setState({
        islogin: true
      });
    }
  }

  getData() {
    api.$post(
      apiList1.memberInfo.path,
      null,
      res => {
        if (res.Success) {
          this.setState({
            member: res.Data
          });
        }
      },
      code => {
        if (code === 401) {
          this.props.history.push("/signin");
        }
      }
    );
  }
  showLogin() {}
  render() {
    const { address, phone, contact, member } = this.state;
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
            <div className="header">我的基本信息</div>
            <div className="information">
              <Row className="row">
                <Col span={8}>会员等级：</Col>
                <Col span={16} />
              </Row>
              <Row className="row">
                <Col span={8}>上传产品数量：</Col>
                <Col span={16}>{member.UploadAmount}</Col>
              </Row>
              <Row className="row">
                <Col span={8}>余额：</Col>
                <Col span={16}>¥ {member.Balance}</Col>
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
