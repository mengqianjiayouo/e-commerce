import React, { Component } from "react";
import SideBar from "./components/SideBar/index";
import Topbar from "./components/Topbar/index";
import ReturnTop from "./components/ReturnTop/index";
import { connect } from "react-redux";
import $ from "jquery";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      islogin: false
    };
  }
  componentDidMount() {
    let user = sessionStorage.getItem("user");
    if (JSON.parse(user)) {
      this.setState({
        islogin: true
      });
    }
  }
  changePlat(a) {
    this.props.dispatch({ type: "PLATCHANGE", plat: a });
  }
  render() {
    const { islogin } = this.state;
    return (
      <div className="app">
        {islogin ? (
          <div className="home_left">
            <SideBar {...this.props} />
          </div>
        ) : null}
        <Topbar
          {...this.props}
          islogin={islogin}
          changePlat={a => {
            this.changePlat(a);
          }}
        />
        <ReturnTop />
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
)(App);

// <Route exact path="/qa/:recordId" component={ProtectedQa} />
