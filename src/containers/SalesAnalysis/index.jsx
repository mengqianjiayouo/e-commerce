import React, { Component } from "react";
import { connect } from "react-redux";
import { Table, Button, Input } from "antd";
import { getCookie } from "../../server/cookies";

class SalesAnalysis extends Component {
  constructor(props) {
    super(props);
    this.state = {
      goodsNumber: "",
      goodsName: "",
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

  render() {
    const { goodsNumber, goodsName, data } = this.state;
    // console.log(this.props.state);

    const columns = [
      {
        title: "货号",
        dataIndex: "order_platform_code",
        align: "center",
        key: "order_platform_code"
      },
      {
        title: "商品名称",
        dataIndex: "2",
        align: "center",
        key: "2"
      },
      {
        title: "销量",
        dataIndex: "age",
        align: "center",
        key: "age",
        width: 100
      },
      {
        title: "平均商品成本",
        dataIndex: "order_code",
        align: "center",
        key: "order_code"
      },
      {
        title: "平均物流成本",
        dataIndex: "sku",
        align: "center",
        key: "sku"
      },

      {
        title: "供应商",
        dataIndex: "action",
        align: "center",
        key: "action"
      }
    ];
    return (
      <div
        className="home orders"
        style={{
          paddingTop: "40px",
          /* paddingLeft: this.state.islogin ? "140px" : 0, */
          paddingLeft: "140px",
          minHeight: "908px"
        }}
      >
        <div className="home_right">
          <div className="main">
            <div className="header">
              <span>销售分析</span>
            </div>
            <div className="search">
              <ul
                className="analysis"
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <li className="item">
                  <div className="title">货号</div>
                  <Input
                    type="text"
                    className="input1"
                    value={goodsNumber}
                    placeholder="请输入货号"
                    onChange={e => {
                      this.setState({
                        goodsNumber: e.target.value
                      });
                    }}
                  />
                </li>
                <li className="item">
                  <div className="title">商品名称</div>
                  <Input
                    type="text"
                    className="input2"
                    value={goodsName}
                    placeholder="请输入商品名称"
                    onChange={e => {
                      this.setState({
                        goodsName: e.target.value
                      });
                    }}
                  />
                </li>
              </ul>
              <div className="btns" style={{ margin: "30px 0" }}>
                <Button type="primary">开始查询</Button>
              </div>
            </div>
            <div className="table">
              <Table columns={columns} dataSource={data} />
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
)(SalesAnalysis);
