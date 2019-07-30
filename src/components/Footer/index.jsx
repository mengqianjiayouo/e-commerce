import React, { Component } from "react";
export default class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {}
  render() {
    return (
      <div>
        <footer>
          <div className="container">
            <div className="helps_box clearfix">
              <div className="help">
                <h4>新手入门</h4>
                <ul>
                  <li>
                    <a target="blank" href="https://rumen.kjds.com">
                      入门指引
                    </a>
                  </li>
                  <li>
                    <a target="blank" href="/sells/customer_services/2">
                      物流方式
                    </a>
                  </li>
                  <li>
                    <a target="blank" href="/sells/customer_services/3">
                      支付方式
                    </a>
                  </li>
                  <li>
                    <a target="blank" href="/sells/customer_services/4">
                      工作时间
                    </a>
                  </li>
                </ul>
              </div>
              <div className="help">
                <h4>商务合作</h4>
                <ul>
                  <li>
                    <a target="blank" href="/sells/customer_services/7">
                      成为分销商
                    </a>
                  </li>
                  <li>
                    <a target="blank" href="/sells/customer_services/6">
                      成为物流商
                    </a>
                  </li>
                  <li>
                    <a target="blank" href="/sells/customer_services/5">
                      成为供应商
                    </a>
                  </li>
                  <li>
                    <a target="blank" href="/sells/customer_services/8">
                      合作伙伴
                    </a>
                  </li>
                </ul>
              </div>
              <div className="help">
                <h4>加入我们</h4>
                <ul>
                  <li>
                    <a target="blank" href="/sells/customer_services/9">
                      关于我们
                    </a>
                  </li>
                  <li>
                    <a target="blank" href="/sells/customer_services/10">
                      加入我们
                    </a>
                  </li>
                  <li>
                    <a target="blank" href="/sells/customer_services/11">
                      联系我们
                    </a>
                  </li>
                </ul>
              </div>
              <div className="help">
                <h4>扫描关注</h4>
                <ul>
                  <li>
                    <img src="https://pic.kjds.com/kjds.jpg" alt="Kjds" />
                  </li>
                </ul>
              </div>
              {/* <div className="bomb_Mask">
                <div className="maskBg" />
                <div className="maskContent">
                  <div className="top">
                    <p>温馨提示</p>
                  </div>
                  <div className="middle">
                    <p>如果您想成为越域平台供应商，请联系客服。</p>
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
                <a href="http://www.sellergrowth.com" target="blank">
                  卖家成长
                </a>
              </li>
              <li>
                <a href="http://www.dianxiaomi.com" target="blank">
                  店小秘
                </a>
              </li>
              <li>
                <a href="http://www.cifnews.com" target="blank">
                  雨果网
                </a>
              </li>
              <li>
                <a href="http://www.trackingmore.com/cn.html" target="blank">
                  Trackingmore
                </a>
              </li>
              <li>
                <a href="http://www.ebay.com" target="blank">
                  eBay
                </a>
              </li>
              <li>
                <a href="http://www.aliexpress.com" target="blank">
                  AliExpress
                </a>
              </li>
              <li>
                <a href="http://www.amazon.com" target="blank">
                  Amazon
                </a>
              </li>
              <li>
                <a href="http://www.wish.com" target="blank">
                  Wish
                </a>
              </li>
              <li>
                <a href="http://www.cdiscount.com" target="blank">
                  C.Discount
                </a>
              </li>
              <li>
                <a href="http://www.newegg.com" target="blank">
                  New Egg
                </a>
              </li>
              <li>
                <a href="http://www.rakuten.co.jp" target="blank">
                  Rakuten
                </a>
              </li>
              <li>
                <a href="http://www.shein.com" target="blank">
                  Shein
                </a>
              </li>
            </ul>
            <div className="foot-record">
              <p>版权所有：贝展曼妙（上海）网络科技有限公司</p>
              <p>
                <a href="http://www.miitbeian.gov.cn" target="blank">
                  沪ICP备15016946号
                </a>
              </p>
              <p>增值电信业务经营许可证：沪B2-20180141</p>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}
