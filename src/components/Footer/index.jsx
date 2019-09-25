import React, { Component } from "react";
export default class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      qqurl:
        "https://wpa.b.qq.com/cgi/wpa.php?ln=1&amp;key=XzgwMDE4NzA1NV80NzY0OTNfODAwMTg3MDU1XzJf"
    };
  }
  componentDidMount() {}
  render() {
    const { qqurl } = this.state;
    return (
      <footer>
        <div className="container">
          <div className="helps_box clearfix">
            <div className="help">
              <h4>新手入门</h4>
              <ul>
                <li>
                  <a target="blank" href={qqurl}>
                    营业执照代办理
                  </a>
                </li>
                <li>
                  <a target="blank" href={qqurl}>
                    各站招商经理
                  </a>
                </li>
                <li>
                  <a target="blank" href={qqurl}>
                    vps购买
                  </a>
                </li>
                <li>
                  <a target="blank" href={qqurl}>
                    连连支付
                  </a>
                </li>
                <li>
                  <a target="blank" href={qqurl}>
                    账号申诉
                  </a>
                </li>
              </ul>
            </div>
            <div className="help">
              <h4>商务合作</h4>
              <ul>
                <li>
                  <a target="blank" href={qqurl}>
                    成为运营商
                  </a>
                </li>
                <li>
                  <a target="blank" href={qqurl}>
                    成为物流商
                  </a>
                </li>
                <li>
                  <a target="blank" href={qqurl}>
                    成为供应商
                  </a>
                </li>
                <li>
                  <a target="blank" href={qqurl}>
                    合作伙伴
                  </a>
                </li>
              </ul>
            </div>
            <div className="help">
              <h4>加入我们</h4>
              <ul>
                <li>
                  <a target="blank" href={qqurl}>
                    关于我们
                  </a>
                </li>
                <li>
                  <a target="blank" href={qqurl}>
                    加入我们
                  </a>
                </li>
                <li>
                  <a target="blank" href={qqurl}>
                    联系我们
                  </a>
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
        <div className="frined_link clearfix">
          <h4>友情链接</h4>
          <ul className="clear">
            <li>
              <a href="https://www.sellergrowth.com" target="blank">
                卖家成长
              </a>
            </li>
            <li>
              <a href="https://www.dianxiaomi.com" target="blank">
                店小秘
              </a>
            </li>
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
      </footer>
    );
  }
}
