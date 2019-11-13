import React, { Component } from "react";
import Banner from "../../components/Banner/index";
import SearchBox from "../../components/SearchBox/index";
import GoodsList from "../../components/GoodsList/index";
import { connect } from "react-redux";
import { getCookie } from "../../server/cookies";
import $ from "jquery";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      classData: [],
      islogin: false
    };
  }
  componentDidMount() {
    // this.getPlatList();
    let ApiKey = getCookie("ApiKey");
    if (ApiKey && ApiKey !== "") {
      this.setState({
        islogin: true
      });
    }
  }

  showLogin() {}

  /* 获取当前分类 */
  getPlatList() {
    $.ajax({
      method: "get",
      url: "https://118.25.155.176:8080/getCategory",
      dataType: "json",
      success: res => {
        // console.log(res);
        let data = res.data;
        this.setState({
          classData: data.data
        });
      }
    });
  }

  render() {
    const { classData } = this.state;

    return (
      <div
        className="home"
        style={{ paddingLeft: "140px", minHeight: "908px" }}
      >
        <div className="home_right">
          <div className="main">
            <SearchBox {...this.props} />
            <Banner classData={classData} {...this.props} />
            <GoodsList {...this.props} />
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
)(Home);
