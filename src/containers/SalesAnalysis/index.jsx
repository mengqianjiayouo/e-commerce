import React, { Component } from "react";
import Topbar from "../../components/Topbar/index";
import ReturnTop from "../../components/ReturnTop/index";
import Footer from "../../components/Footer/index";
import SideBar from "../../components/SideBar/index";
import { connect } from "react-redux";
import { Row, Col, Table, Button, Dropdown } from "react-bootstrap";
import DatePicker from "react-datepicker";

class SalesAnalysis extends Component {
  constructor(props) {
    super(props);
    this.state = {
      islogin: false,
      goodsNumber: "",
      goodsName: ""
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
    const { islogin, goodsNumber, goodsName } = this.state;
    // console.log(this.props.state);

    return (
      <div className="home orders">
        {islogin ? (
          <div className="home_left">
            <SideBar />
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
                  <input
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
                  <input
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
                <Button>开始查询</Button>
              </div>
            </div>
            <div className="table">
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>货号</th>
                    <th>商品名称 </th>
                    <th> 销量</th>
                    <th>平均商品成本</th>
                    <th>平均物流成本</th>
                    <th>供应商</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                  </tr>
                </tbody>
              </Table>
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
)(SalesAnalysis);
