import React, { Component } from "react";
import { connect } from "react-redux";
import { Table } from "antd";
import { getCookie } from "../../server/cookies";

class AuthLogistics extends Component {
  constructor(props) {
    super(props);
    this.state = {
      acountType: "",
      shopee: {
        account: "",
        account2: "",
        recive: ""
      },
      wish: {
        account: "",
        account2: "",
        client_secret: "",
        client_id: ""
      },
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

  addCount() {}

  render() {
    const { show, acountType, shopee, wish, data } = this.state;
    // console.log(this.props.state);
    const columns = [
      {
        title: "shopee账号",
        dataIndex: "time",
        align: "center",
        key: "time"
      },
      {
        title: "账号缩写",
        dataIndex: "money",
        align: "center",
        key: "money"
      },
      {
        title: "收款账号",
        dataIndex: "type",
        align: "center",
        key: "type"
      },
      {
        title: "状态",
        dataIndex: "type",
        align: "center",
        key: "typ"
      },
      {
        title: "API状态",
        dataIndex: "type",
        align: "center",
        key: "ty"
      },
      {
        title: "操作",
        dataIndex: "type",
        align: "center",
        key: "t"
      }
    ];
    return (
      <div
        className="home B2c"
        style={{
          paddingTop: "40px",
          /* paddingLeft: this.state.islogin ? "140px" : 0, */
          paddingLeft: "140px",
          minHeight: "908px"
        }}
      >
        <div className="home_right">
          <div className="main">
            <div className="header"> 账号授权 > 物流账号授权</div>
            <Table columns={columns} dataSource={data} pagination={false} />
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
)(AuthLogistics);
