import React, { Component } from "react";
import { connect } from "react-redux";
import { Table, Button, Select, Input } from "antd";
import { getCookie } from "../../server/cookies";

const { Option } = Select;
class Domestic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      width: "",
      weight: "",
      country: "",
      long: "",
      height: "",
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
    const { weight, country, long, width, height, data } = this.state;
    // console.log(this.props.state);
    const columns = [
      {
        title: "国家",
        dataIndex: "1",
        key: 1,
        align: "center"
      },
      {
        title: "价格",
        dataIndex: "2",
        key: 2,
        align: "center"
      },
      {
        title: "时间",
        dataIndex: "3",
        key: 3,
        align: "center"
      },
      {
        title: "是否签收",
        dataIndex: "4",
        key: 4,
        align: "center"
      },
      {
        title: "服务商",
        dataIndex: "5",
        key: 5,
        align: "center"
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
              <span>国内物流查询</span>
            </div>
            <div className="search">
              <ul
                className="flexul"
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <li className="item">
                  <div className="title">长</div>
                  <Input
                    type="text"
                    value={long}
                    style={{ width: "70%" }}
                    placeholder="单位cm"
                    onChange={e => {
                      this.setState({
                        long: e.target.value
                      });
                    }}
                  />
                </li>
                <li className="item">
                  <div className="title">宽</div>
                  <Input
                    type="text"
                    value={width}
                    style={{ width: "70%" }}
                    placeholder="单位cm"
                    onChange={e => {
                      this.setState({
                        width: e.target.value
                      });
                    }}
                  />
                </li>
                <li className="item">
                  <div className="title">高</div>
                  <Input
                    type="text"
                    value={height}
                    style={{ width: "70%" }}
                    placeholder="单位cm"
                    onChange={e => {
                      this.setState({
                        height: e.target.value
                      });
                    }}
                  />
                </li>
              </ul>
              <ul
                className="flexul"
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <li className="item">
                  <div className="title">国家</div>
                  <Select
                    value={country === "" ? "全部" : country}
                    style={{ width: "200px" }}
                    onChange={val => {
                      this.setState({
                        country: val
                      });
                    }}
                  >
                    <Option value="1">1</Option>
                  </Select>
                </li>
                <li className="item">
                  <div className="title">重量</div>
                  <Input
                    type="text"
                    value={weight}
                    style={{ width: "70%" }}
                    placeholder="单位g"
                    onChange={e => {
                      this.setState({
                        weight: e.target.value
                      });
                    }}
                  />
                </li>
              </ul>
              <div className="btns">
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
)(Domestic);
