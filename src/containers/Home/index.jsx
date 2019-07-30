import React, { Component } from "react";
import Topbar from "../../components/Topbar/index";
import ReturnTop from "../../components/ReturnTop/index";
import Banner from "../../components/Banner/index";
import SearchBox from "../../components/SearchBox/index";
import GoodsList from "../../components/GoodsList/index";
import Footer from "../../components/Footer/index";
import SideBar from "../../components/SideBar/index";
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      islogin: false
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
  showLogin() {}
  render() {
    const { islogin } = this.state;
    return (
      <div className="home">
        {islogin ? (
          <div className="home_left">
            <SideBar />
          </div>
        ) : null}

        <div
          className="home_right"
          style={{ paddingLeft: islogin ? "118px" : 0 }}
        >
          <Topbar {...this.props} islogin={this.state.islogin} />
          <ReturnTop />

          <div className="main">
            <SearchBox />
            <Banner />
            <GoodsList />
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}
