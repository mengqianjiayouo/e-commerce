import React, { Component } from "react";
import { getCookie } from "../../server/cookies";

export default class UsedEmail extends Component {
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
            亚马逊卖家常用邮箱列表
          </div>
          <div
            style={{
              background: "#f0f1f2",
              borderRadius: "5px",
              padding: "20px 50px",
              fontSize: "16px"
            }}
          >
            <div style={{ marginBottom: "10px" }}>
              &nbsp;&nbsp;&nbsp;&nbsp;对亚马逊卖家来说，
              在运营中可能会遭遇各种情况，需要联系亚马逊客服，或者向对应职能的团队求助，只有针对性地联系，才能让我们的问题得到更快，更有效的解决，下面我们整理了亚马逊卖家运营中可能会用到的邮箱列表，供大家参考:
            </div>

            <ul>
              <li style={{ marginBottom: "10px" }}>
                <p className="title">(1)亚马逊官方邮箱</p>
                <p>notice@amazon.com</p>
                <p>Seller-evaluation@amazon.com</p>
                <p>pq-review@amazon.com</p>
                <p>account-confirmation@amazon.com</p>
                <p>cn-seller-verification-enquiry@amazon.co.uk</p>
                <p>亚马逊总裁贝索斯的邮箱:jeff@amazon.com</p>
                <p>(真实的邮箱，有人处理，有人回复，不到万不得已不要用! )</p>
              </li>
              <li style={{ marginBottom: "10px" }}>
                <p className="title">
                  (2)卖家绩效团队邮箱(卖家最常用的邮箱，主要用来联系、跟进和处理因为账号绩效问题导致账号受限，比如ODR超标、侵权、虚假发货等，联系时要用英语或所在站点语言，表达要诚恳，要用注册账号时使用的邮箱联系)。
                </p>
                <p>US: seller-performance@amazon.com</p>
                <p>CA: seller-performance@amazon.ca</p>
                <p>UK: seller-performance@amazon.co.uk</p>
                <p>FR: performance-vendeur@amazon.fr</p>
                <p>DE: verkaeufer-performance@amazon.de</p>
                <p>ES:performance-vendedor@amazon.es</p>
                <p>IT: performance-venditore@amazon.it</p>
                <p>JP:alliance@amazon.co.jp</p>
              </li>
              <li style={{ marginBottom: "10px" }}>
                <p className="title">
                  (3)产品品质相关的申诉邮箱(在产品质量被投诉、产品被抽查、产品被下架等情况时联系和申诉的邮箱)。
                </p>
                <p>US: pq-review@amazon.com</p>
                <p>US: seller-performance-policy@amazon.com</p>
                <p>UK: seller-performance-policy@amazon.co.uk</p>
                <p>FR:politique-performance-vendeur@amazon.fr</p>
                <p>DE:verkaeufer-performance-richtlinie@amazon.de</p>
                <p>IT:performance-venditore-politiche-di-condotta@amazon.it</p>
                <p>ES:politicas-performance-vendedor@amazon.es</p>
                <p>IN:seller-performance-policy@amazon.in</p>
                <p>MX: politicas-performance-vendedor@amazon.com.mx</p>
              </li>
              <li style={{ marginBottom: "10px" }}>
                <p className="title">
                  (4)店铺被冻结和关闭，跟进账号放款的申诉邮箱(账号被冻结后跟进账号余额处理的联系邮箱，也可以在账号被关闭后无法登录时申请FBA库存撤仓时使用)。
                </p>
                <p>US: merchant-reserve-inquiry@amazon.com</p>
                <p>US: payments-investigate@amazon.com</p>
                <p>US: payments-funds@amazon.com</p>
                <p>CA:payments-investigate@amazon.ca</p>
                <p>UK: payments-investigate@amazon.co.uk</p>
                <p>FR: investigation- amzpayments@amazon.fr</p>
                <p>DE: payments-nachforschungen@amazon.de</p>
                <p>IT: payments-investigate@amazon.it</p>
                <p>ES: investigacion-pagos@amazon.es</p>
                <p>IN: payments-investigate@amazon.in</p>
                <p>MX:payments-funds@amazon.com.mx</p>
              </li>
              <li style={{ marginBottom: "10px" }}>
                <p className="title">
                  (5)知识产权相关问题得到解决后的撤诉邮箱。
                </p>
                <p>US: notice@amazon.com</p>
                <p>UK: notice@amazon.co.uk</p>
                <p>FR: notification@amazon.fr</p>
                <p>DE: benachrichtigung@amazon.de</p>
                <p>IT: notifica@amazon.it</p>
                <p>ES: aviso@amazon.es</p>
                <p>IN: notice@amazon.in</p>
                <p>MX: notice@amazon.com.mx</p>
              </li>
            </ul>
            <div style={{ marginBottom: "10px" }}>
              除了上述邮箱，在运营中如果遭遇被跟卖，卖家还可以通过下面的链接投诉。投诉跟卖的入口:
            </div>
            <ul>
              <li style={{ marginBottom: "10px" }}>
                <p className="title">
                  (1)从亚马逊卖家中心后台的Contact Seller Support
                  开Case投诉，Report a violation:
                  https://sellercentral.amazon.com/hz/contact-us。
                </p>
              </li>
              <li style={{ marginBottom: "10px" }}>
                <p className="title">
                  (2)以权利人身份投诉侵权: https://www
                  amazon.com/gp/help/reports/infringement. (3)以买家身份Test
                  Buy之后投诉: http://www.
                  amazon.com/gp/help/reports/contact-us.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
