import React, { Component } from "react";
import { getCookie } from "../../server/cookies";

export default class LeasingManager extends Component {
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
            各站招商经理
          </div>
          <div
            style={{
              background: "#f0f1f2",
              borderRadius: "5px",
              padding: "20px 50px",
              fontSize: "16px"
            }}
          >
            <ul>
              <li style={{ marginBottom: "10px" }}>
                <p className="title">欧美招商经理</p>
                <p>1、邮箱：jianzhoy@amazon.com QQ：494138240</p>
                <p>2、邮箱：lenali@amazon.com QQ：872358227</p>
                <p>3、邮箱：lijiewen@amazon.com QQ：3341472364</p>
                <p>4、邮箱：yuexianw@amazon.com QQ：764213560</p>
                <p>5、邮箱：chjing@amazon.com QQ：783359630 </p>
                <p>6、邮箱：ynzhng@amazon.com QQ：342785365</p>
                <p>7、邮箱：wangqia@amazon.com QQ：2334622302</p>
                <p>8、邮箱：xiweiluo@amazon.com QQ：3010904383</p>
                <p>9、邮箱：changhal@amazon.com QQ：54062898</p>
                <p>10、邮箱：kili@amazon.com QQ：2961600493</p>
                <p>11、邮箱：hazha@amazon.com QQ：2759842098</p>
                <p>12、邮箱：zhxn@amazon.com QQ：1808631795</p>
                <p>13、邮箱：lijacob@amazon.com QQ：3010272007</p>
                <p>14、邮箱：sylviale@amazon.com QQ：2065510057</p>
                <p>15、邮箱：linlingc@amazon.com QQ：3264876331</p>
                <p>16、邮箱：yiniu@amazon.com QQ：3103638090</p>
                <p>17、邮箱：sainanz@amazon.com QQ：494617955</p>
                <p>18、邮箱：ruiqwang@amazon.com QQ：47896571</p>
                <p>19、邮箱：zouyang@amazon.com QQ：2729287054</p>
                <p>20、邮箱：mazhongp@amazon.com QQ：20948471</p>
                <p>21、邮箱：jianwzen@amazon.com QQ：1740766037</p>
                <p>22、邮箱：aoqianh@amazon.com QQ：1768274903</p>
                <p>23、邮箱：yongfen@amazon.com QQ：2947104707</p>
                <p>24、邮箱：yingxuz@amazon.com QQ：2238375469</p>
                <p>25、邮箱：minhazhu@amazon.com QQ：3152630396</p>
                <p>26、邮箱：ruoyizou@amazon.com QQ：2561802570</p>
                <p>27、邮箱：feifegao@amazon.com QQ：3451201502</p>
                <p>28、邮箱：jianlinh@amazon.com QQ：24611300</p>
              </li>
              <li style={{ marginBottom: "10px" }}>
                <p className="title">日本招商经理</p>
                <p>1、邮箱：jnzho@amazon.com QQ：260582339</p>
                <p>2、邮箱：jaiyixie@amazon.com QQ：1543726559</p>
                <p>3、邮箱：steveluo@amazon.com QQ：1020321135</p>
                <p>4、邮箱：panchunx@amazon.com QQ：1611046400</p>
                <p>5、邮箱：chenweix@amazon.com QQ：3415773689</p>
                <p>6、邮箱：beixians@amazon.com QQ：3369417139</p>
                <p>7、邮箱：yggong@amazon.com QQ：3059146805</p>
                <p>8、邮箱：wenyunj@amazon.com QQ：2792015561</p>
                <p>9、邮箱：xinxihou@amazon.com QQ：2216872301</p>
                <p>10、邮箱：bulinzhu@amazon.com QQ：309585933</p>
                <p>11、邮箱：lishi@amazon.com QQ：2990962956</p>
                <p>12、邮箱：weiychen@amazon.com QQ：483471616</p>
                <p>13、邮箱：huaxujun@amazon.com QQ：450367454</p>
                <p>14、邮箱：xiangyic@amazon.com QQ：2328716719</p>
                <p>15、邮箱：yqqiu@amazon.com QQ：460923266</p>
                <p>16、邮箱：lipinliu@amazon.com QQ：773386276</p>
                <p>17、邮箱：guqi@amazon.com QQ：105194892</p>
                <p>18、邮箱：qzzhng@amazon.com QQ：3168215836</p>
                <p>19、邮箱：junlzhou@amazon.com QQ：909629606</p>
                <p>20、邮箱：yug@amazon.com QQ：2942972914</p>
              </li>
              <li style={{ marginBottom: "10px" }}>
                <p className="title">澳洲站招商经理</p>
                <p>1、QQ：3117321846</p>
              </li>
              <li style={{ marginBottom: "10px" }}>
                <p className="title">印度站招商经理 </p>
                <p>1、QQ：418964038</p>
              </li>
              <li style={{ marginBottom: "10px" }}>
                <p className="title">中东站招商经理 </p>
                <p>1、QQ：706414272</p>
              </li>
              <li style={{ marginBottom: "10px" }}>
                <p className="title">虾皮马来西亚 </p>
                <p>1、QQ：QQ: 3003800534 3003810421</p>
              </li>
              <li style={{ marginBottom: "10px" }}>
                <p className="title">虾皮台湾 </p>
                <p>1、微信：ceciliazhuyingyu</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
