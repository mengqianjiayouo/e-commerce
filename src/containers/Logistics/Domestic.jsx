import React, { Component } from "react";
import Topbar from "../../components/Topbar/index";
import ReturnTop from "../../components/ReturnTop/index";
import Footer from "../../components/Footer/index";
import SideBar from "../../components/SideBar/index";
import { connect } from "react-redux";
import { Row, Col, Table, Button, Dropdown } from "react-bootstrap";
import DatePicker from "react-datepicker";

class Domestic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      islogin: false,

      width: "",
      weight: "",
      country: "",
      long: "",
      height: ""
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
    const { islogin, weight, country, long, width, height } = this.state;
    // console.log(this.props.state);

    return (
      <div className="home orders">
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
                  <input
                    type="text"
                    value={long}
                    onChange={e => {
                      this.setState({
                        long: e.target.value
                      });
                    }}
                  />
                </li>
                <li className="item">
                  <div className="title">宽</div>
                  <input
                    type="text"
                    value={width}
                    onChange={e => {
                      this.setState({
                        width: e.target.value
                      });
                    }}
                  />
                </li>
                <li className="item">
                  <div className="title">高</div>
                  <input
                    type="text"
                    value={height}
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
                  <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                      {country === "" ? "全部" : country}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item
                        onClick={() => {
                          this.setState({
                            country: "Action"
                          });
                        }}
                      >
                        Action
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </li>
                <li className="item">
                  <div className="title">重量</div>
                  <input
                    type="text"
                    value={weight}
                    onChange={e => {
                      this.setState({
                        weight: e.target.value
                      });
                    }}
                  />
                </li>
              </ul>
              <div className="btns">
                <Button>开始查询</Button>
              </div>
            </div>
            <div className="table">
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>国家</th>
                    <th>价格</th>
                    <th>时间</th>
                    <th>是否签收</th>
                    <th>服务商</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
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
)(Domestic);
