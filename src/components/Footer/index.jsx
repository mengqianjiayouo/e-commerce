import React, { Component } from "react";
import createHistory from "history/createBrowserHistory";
import { Link } from "react-router-dom";
import { getCookie } from "../../server/cookies";

const history = createHistory({
  basename: "/"
});
export default class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      qqurl:
        "https://wpa.b.qq.com/cgi/wpa.php?ln=1&amp;key=XzgwMDE4NzA1NV80NzY0OTNfODAwMTg3MDU1XzJf",
      isShow: true
    };
  }
  componentDidMount() {
    /* let ApiKey = getCookie("ApiKey");
    if (ApiKey && ApiKey !== "") {
      this.setState({
        isShow: true
      });
    } */
    let pathname = this.props.history.location
      ? this.props.history.location.pathname
      : "";
    if (/signin/.test(pathname) || /signup/.test(pathname)) {
      this.setState({
        isShow: false
      });
    }
  }
  componentWillReceiveProps(props) {
    let pathname = props.history.location
      ? props.history.location.pathname
      : "";
    // console.log(pathname);
    if (/signin/.test(pathname) || /signup/.test(pathname)) {
      this.setState({
        isShow: false
      });
    } else {
      this.setState({
        isShow: true
      });
    }
  }
  render() {
    const { qqurl, isShow } = this.state;
    // console.log(isShow);
    return (
      <footer>
        {isShow ? (
          <div className="container">
            <div className="helps_box clearfix">
              <div className="help">
                <h4>新手入门</h4>
                <ul>
                  <li>
                    <span id="three_party_supply_business">营业执照代办理</span>
                  </li>
                  <li>
                    <Link to="/leasing">各站招商经理</Link>
                    {/* <span id="three_party_attract">各站招商经理</span> */}
                  </li>
                  <li>
                    <span id="three_party_vps">vps购买</span>
                  </li>
                  <li>
                    <a
                      id="three_party_pay"
                      target="_blank"
                      href="https://wx-global.lianlianpay.com/partner/index.html?invitecode=U6NBNDHHYX"
                    >
                      连连支付
                    </a>
                  </li>
                  <li>
                    <span id="three_party_appeal">账号申诉</span>
                  </li>
                </ul>
              </div>
              <div className="help">
                <h4>商务合作</h4>
                <ul>
                  <li>
                    <Link to="/emails">常用邮箱列表</Link>
                  </li>
                  <li>
                    <span id="three_party_operate">成为运营商</span>
                  </li>
                  <li>
                    <span id="three_party_logistics">成为物流商</span>
                  </li>
                  <li>
                    <span id="three_party_supply">成为供应商</span>
                  </li>
                  <li>
                    <span target="blank" href={qqurl}>
                      合作伙伴
                    </span>
                  </li>
                </ul>
              </div>
              <div className="help">
                <h4>加入我们</h4>
                <ul>
                  <li>
                    <Link to="/about">关于我们</Link>
                  </li>
                  <li>
                    <span target="blank" href={qqurl}>
                      加入我们
                    </span>
                  </li>
                  <li>
                    <span target="blank" href={qqurl}>
                      联系我们
                    </span>
                  </li>
                </ul>
              </div>
              <div className="help">
                {/*  <h4>扫描关注</h4>
                <ul>
                  <li>
                    <img src="https://pic.kjds.com/kjds.jpg" alt="Kjds" />
                  </li>
                </ul> */}
              </div>
              {/* <div className="bomb_Mask">
                <div className="maskBg" />
                <div className="maskContent">
                  <div className="top">
                    <p>温馨提示</p>
                  </div>
                  <div className="middle">
                    <p>如果您想成为闪质平台供应商，请联系客服。</p>
                  </div>
                  <button className="btn_okay">确定</button>
                </div>
              </div> */}
            </div>
          </div>
        ) : (
          <div />
        )}
        {isShow ? (
          <div className="frined_link clearfix">
            <h4>友情链接</h4>
            <ul className="clear">
              <li>
                <a href="https://www.cifnews.com" target="blank">
                  雨果网
                </a>
              </li>
              <li>
                <a href="https://www.trackingmore.com/cn.html" target="blank">
                  Trackingmore
                </a>
              </li>
              <li>
                <a href="https://www.ebay.com" target="blank">
                  eBay
                </a>
              </li>
              <li>
                <a href="https://www.aliexpress.com" target="blank">
                  AliExpress
                </a>
              </li>
              <li>
                <a href="https://www.amazon.com" target="blank">
                  Amazon
                </a>
              </li>
              <li>
                <a href="https://www.wish.com" target="blank">
                  Wish
                </a>
              </li>
              <li>
                <a href="https://www.cdiscount.com" target="blank">
                  C.Discount
                </a>
              </li>
              <li>
                <a href="https://www.newegg.com" target="blank">
                  New Egg
                </a>
              </li>
              <li>
                <a href="https://www.rakuten.co.jp" target="blank">
                  Rakuten
                </a>
              </li>
              <li>
                <a href="https://www.shein.com" target="blank">
                  Shein
                </a>
              </li>
            </ul>
            <div className="foot-record">
              <p>版权所有：山西递八方科技有限公司</p>
              <p>晋ICP备：18008201号</p>
              <p>
                <img src={require("../../images/gonganwang.png")} alt="" />
                晋公网安备：14019202000181
              </p>
            </div>
          </div>
        ) : (
          <div />
        )}
      </footer>
    );
  }
}
