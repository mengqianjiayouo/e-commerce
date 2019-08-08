import React, { Component } from "react";
import Topbar from "../../components/Topbar/index";
import ReturnTop from "../../components/ReturnTop/index";
import Banner from "../../components/Banner/index";
import SearchBox from "../../components/SearchBox/index";
import GoodsList from "../../components/GoodsList/index";
import Footer from "../../components/Footer/index";
import SideBar from "../../components/SideBar/index";
import { connect } from "react-redux";
import $ from "jquery";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      islogin: false,
      classData: []
    };
  }
  componentDidMount() {
    this.checkIsLogin();
    this.getPlatList();
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
  showLogin() {}
  /* 获取当前分类 */
  getPlatList() {
    $.ajax({
      method: "get",
      url: "http://118.25.155.176:8080/getCategory",
      xhrFields: {
        withCredentials: true
      },
      crossDomain: true,
      dataType: "json",
      success: res => {
        // console.log(res);
        let data = res.data;
        this.setState({
          classData: data.data
        });
        // console.log($.cookie("csrftoken"));
      }
    });
  }

  render() {
    const { islogin, classData } = this.state;
    // console.log(this.props.state);
    return (
      <div className="home">
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
            <SearchBox {...this.props} />
            <Banner classData={classData} {...this.props} />
            <GoodsList {...this.props} />
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
)(Home);
