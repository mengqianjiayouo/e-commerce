import React, { Component } from "react";
import { getCookie } from "../../server/cookies";

export default class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
  render() {
    return (
      <div
        className="home"
        style={{
          paddingTop: "40px",
          /* paddingLeft: this.state.islogin ? "140px" : 0, */
          paddingLeft: "140px",
          minHeight: "908px"
        }}
      >
        <div
          className="main"
          style={{
            background: "#fff",
            borderRadius: "8px",
            padding: "20px 30px"
          }}
        >
          <div
            style={{
              lineHeight: "30px",
              background: "#f13c3c",
              color: "#fff",
              textAlign: "center",
              fontSize: "16px",
              fontWeight: 800,
              marginBottom: "30px",
              borderRadius: "5px"
            }}
          >
            关于我们
          </div>
          <div
            style={{
              background: "#f0f1f2",
              borderRadius: "5px",
              padding: "20px 50px",
              fontSize: "16px"
            }}
          >
            <p>
              <div style={{ display: "inline-block", width: "28px" }} />{" "}
              闪质是山西递八方科技有限公司旗下一款为全球电商卖家提供一站式服务的SAAS模式跨境电商ERP平台，平台深度打通电商平台、物流仓储与商家，通过电商大数据和云技术，深度发掘用户需求，每年超千次迭代优化，智能界面交互极简；致力于让“买全球、卖全球”变的更简单。
            </p>

            <p>
              闪质8大核心功能：一键上传，一键发货，一键搬家，订单管理，关键词检索，移动办公，智能翻译，智能物流，成就一站式智能化电商运营。
            </p>
            <p>企业核心理念： 创新 开放 共享 共赢 企业使命： 降低运营成本</p>
            <p>提升工作效率 增加店铺收益 企业愿景： 货通天下</p>
          </div>
        </div>
      </div>
    );
  }
}
