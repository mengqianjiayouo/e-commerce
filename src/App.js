import React, { Component } from "react";
import SideBar from "./components/SideBar/index";
import Topbar from "./components/Topbar/index";
import ReturnTop from "./components/ReturnTop/index";
import { connect } from "react-redux";
import $ from "jquery";
import { getCookie } from "./server/cookies";
import { Api } from "./server/_ajax";
import { apiList1 } from "./server/apiMap";
const scriptsAry = [
  {
    id: "qd288572110890912d802def0961cec329eaeca01072",
    src:
      "https://wp.qiye.qq.com/qidian/2885721108/90912d802def0961cec329eaeca01072"
  },
  {
    id: "qd2885721108faa4f45787ab4ff00cc224b0bcfea2f6",
    src:
      "https://wp.qiye.qq.com/qidian/2885721108/faa4f45787ab4ff00cc224b0bcfea2f6"
  },
  {
    id: "qd288572110842d5862818d13925e4070356ab6b9e91",
    src:
      "https://wp.qiye.qq.com/qidian/2885721108/42d5862818d13925e4070356ab6b9e91"
  },
  {
    id: "qd2885721108490ed015030ebba7afe011f7baec8caf",
    src:
      "https://wp.qiye.qq.com/qidian/2885721108/490ed015030ebba7afe011f7baec8caf"
  },
  {
    id: "qd2885721108475ca3172464c496332e650aaac3acb8",
    src:
      "https://wp.qiye.qq.com/qidian/2885721108/475ca3172464c496332e650aaac3acb8"
  },
  {
    id: "qd288572110841a55bae6c77f0c00efb0ecfd5f6fe42",
    src:
      "https://wp.qiye.qq.com/qidian/2885721108/41a55bae6c77f0c00efb0ecfd5f6fe42"
  },
  {
    id: "qd2885721108d77ede66a3ca69bfe22693daeb5a9261",
    src:
      "https://wp.qiye.qq.com/qidian/2885721108/d77ede66a3ca69bfe22693daeb5a9261"
  },
  {
    id: "qd2885721108830ce03534d588595bb08e0d11c093b6",
    src:
      "https://wp.qiye.qq.com/qidian/2885721108/830ce03534d588595bb08e0d11c093b6"
  },
  {
    id: "qd2885721108fdb98abfa1cb3733ddd5819e8c046f55",
    src:
      "https://wp.qiye.qq.com/qidian/2885721108/fdb98abfa1cb3733ddd5819e8c046f55"
  }
];
const api = new Api();
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      islogin: false,
      member: {}
    };
  }
  componentDidMount() {
    let ApiKey = getCookie("ApiKey");
    if (ApiKey && ApiKey !== "") {
      this.setState({
        islogin: true
      });
      this.getMemberInfo();
    }
    // this.creatQQScript();
  }
  getMemberInfo() {
    api.$post(apiList1.memberInfo.path, null, res => {
      if (res.Success) {
        this.setState({
          member: res.Data
        });
      }
    });
  }
  changePlat(a) {
    this.props.dispatch({ type: "PLATCHANGE", plat: a });
  }
  creatQQScript() {
    scriptsAry.map(a => {
      let html = document.getElementById("root");
      var newScript = document.createElement("script");
      newScript.id = a.id;
      newScript.src = a.src;
      newScript.charset = "utf-8";
      html.appendChild(newScript);
    });
  }
  render() {
    const { islogin } = this.state;
    return (
      <div className="app">
        <div className="home_left">
          <SideBar {...this.props} />
        </div>

        <Topbar
          {...this.props}
          islogin={islogin}
          member={this.state.member}
          changePlat={a => {
            this.changePlat(a);
          }}
        />
        <ReturnTop {...this.props} />
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
