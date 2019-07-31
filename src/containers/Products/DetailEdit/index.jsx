import React, { Component } from "react";
import Topbar from "../../../components/Topbar/index";
import ReturnTop from "../../../components/ReturnTop/index";
import Footer from "../../../components/Footer/index";
import SideBar from "../../../components/SideBar/index";
import { connect } from "react-redux";
class DetailEdit extends Component {
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
  changePlat(a) {
    this.props.dispatch({ type: "PLATCHANGE", plat: a });
  }
  showLogin() {}
  render() {
    const { islogin } = this.state;
    // console.log(this.props.state);

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
          <Topbar
            {...this.props}
            islogin={this.state.islogin}
            changePlat={a => {
              this.changePlat(a);
            }}
          />
          <ReturnTop />

          <div className="main">bianji</div>
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
)(DetailEdit);
