import React, { Component } from "react";
import $ from "jquery";
import { connect } from "react-redux";
import step_1 from "../../../images/b2c_step_1.png";
import step_2 from "../../../images/b2c_step_2.png";
import step_3 from "../../../images/b2c_step_3.png";
import step_4 from "../../../images/b2c_step_4.png";
import step_4_2 from "../../../images/b2c_step_4_2.png";
import step_5 from "../../../images/b2c_step_5.png";
import step_5_1 from "../../../images/b2c_step_5_1.png";
import step_5_2 from "../../../images/b2c_step_5_2.png";
import step_5_3 from "../../../images/b2c_step_5_3.png";
import step_5_4 from "../../../images/b2c_step_5_4.png";
import step_5_5 from "../../../images/b2c_step_5_5.png";
import step_6 from "../../../images/b2c_step_6.png";
import { getCookie } from "../../../server/cookies";

class Notehtml extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      platform: "",
      islogin: false
    };
  }
  componentDidMount() {
    // this.changeContent();
    let ApiKey = getCookie("ApiKey");
    if (ApiKey && ApiKey !== "") {
      this.setState({
        islogin: true
      });
    }
  }
  changeContent() {
    var $iFrame = $("#content");
    $iFrame.attr(
      "src",
      "https://www.wxwerp.com/help/59a3ce98ef68fd1838e20bb9.html"
    );
    $iFrame[0].onload = function() {
      // 非IE
      /* let inner = $("#content")
        .find("body")
        .val();
      console.log(inner); */
    };
  }

  render() {
    // const { amazoonData } = this.state;
    // console.log(this.props.state);
    // let h = document.documentElement.clientHeight;
    return (
      <div
        className="home B2c"
        style={{
          paddingTop: "40px",
          /* paddingLeft: this.state.islogin ? "140px" : 0, */
          paddingLeft: "140px",
          minHeight: "908px"
        }}
      >
        <div className="main note">
          <p>第一步：在系统首页选择 账号授权—B2C账号授权；</p>
          <img src={step_1} alt="" />
          <p>第二步：选择 添加账号；</p>
          <img src={step_2} alt="" />
          <p>
            第三步：填写
            店铺名称，店铺名称可填写为自己的品牌名，也可填写为具有独立标识的名字；
          </p>
          <img src={step_3} alt="" />
          <p>
            第四步：填写 卖家编号，卖家编号在店铺后台—设置—账户信息—卖家标记；
          </p>
          <img src={step_4} alt="" />
          <img src={step_4_2} alt="" />
          <p>第五步：填写站点和MWS授权码，站点选择自己需要授权的店铺；</p>
          <img src={step_5} alt="" />
          <p>
            MWS授权码查找路径：设置—用户权限—访问“管理您的应用程序”—授权新的开发者；
          </p>
          <img src={step_5_1} alt="" />
          <img src={step_5_2} alt="" />
          <p>授权新的开发者流程：</p>
          <img src={step_5_3} alt="" />
          <img src={step_5_4} alt="" />
          <img src={step_5_5} alt="" />
          <p>第六步：选择刚刚添加的店铺，点击检测，完成授权。</p>
          <img src={step_6} alt="" />
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
)(Notehtml);
