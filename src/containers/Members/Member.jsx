import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Row, Col, Table, Button, Modal } from "antd";
import { getCookie } from "../../server/cookies";

class Members extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recharge_money: "",
      isFreeMember: true,
      show: false,
      data: [],
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
  handleClose() {
    this.setState({
      show: false
    });
  }
  render() {
    const { isFreeMember, show, data } = this.state;
    // console.log(this.props.state);

    return (
      <div
        className="home members"
        style={{
          paddingTop: "40px",
          /* paddingLeft: this.state.islogin ? "140px" : 0, */
          paddingLeft: "140px",
          minHeight: "908px"
        }}
      >
        <div className="home_right">
          <div className="main">
            <div className="header">我的会员</div>
            <div className="content">
              <Row className="free_member row">
                <Col span={6}>我的会员级别：</Col>

                {isFreeMember ? (
                  <Col span={18}>
                    <Button className="active">免费会员</Button>
                    <Button>
                      <Link to="/sells/members/subscription" target="_blank">
                        成为会员
                      </Link>
                    </Button>
                  </Col>
                ) : (
                  <Col span={18}>
                    <Button className="active">普通会员</Button>
                  </Col>
                )}
              </Row>
              <Row className="row">
                <Col span={6}>会员权限：</Col>
                <Col span={18}>
                  <Button>查看会员权限</Button>
                </Col>
              </Row>
              <Row className="row">
                <Col span={6}>购买记录：</Col>
                <Col span={18}>
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
            visible={show}
            onCancel={this.handleClose.bind(this)}
            wrapClassName="member_modal"
            footer={null}
          >
            <div>
              <div className="head">购买记录</div>
              <div className="record">
                <Table
                  dataSource={data}
                  closable={false}
                  columns={[
                    {
                      title: "日期",
                      dataIndex: "1",
                      key: 1,
                      align: "center"
                    },
                    {
                      title: "购买途径",
                      dataIndex: "2",
                      key: 2,
                      align: "center"
                    },
                    {
                      title: "金额",
                      dataIndex: "3",
                      key: 3,
                      align: "center"
                    }
                  ]}
                />
              </div>
              <div style={{ textAlign: "center", marginTop: "15px" }}>
                <Button onClick={this.handleClose.bind(this)}>关闭</Button>
              </div>
            </div>
          </Modal>
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
