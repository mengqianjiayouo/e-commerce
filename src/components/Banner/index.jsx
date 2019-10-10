import React, { Component } from "react";
import $ from "jquery";
import { Carousel } from "antd";
import { Link } from "react-router-dom";
import { apiList2 } from "../../server/apiMap";
import { Api } from "../../server/_ajax";
const api = new Api();
export default class Banner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      level1Ary: [],
      level2Ary: [],
      imgList: [
        /* require("../../images/1.jpeg"),
        require("../../images/2.jpeg"),
        require("../../images/3.jpeg"),
        require("../../images/4.jpeg"),
        require("../../images/5.jpeg"),
        require("../../images/6.jpeg") */
      ]
    };
  }
  componentDidMount() {
    $(function() {
      //轮播左边的分类
      $(".category>.each_category").hover(function() {
        $(".category>.each_category")
          .find(".category_detail")
          .hide();
        $(this)
          .find(".category_detail")
          .show();
      });
      $(".category").mouseleave(function() {
        $(".category>.each_category")
          .find(".category_detail")
          .hide();
      });
    });
    this.changeClassStyle(this.props);
    this.getBannerList();
  }
  componentWillReceiveProps(nextprops) {
    this.changeClassStyle(nextprops);
  }
  getBannerList() {
    api.$get(apiList2.bannerList.path, null, res => {
      this.setState({
        imgList: res.bannerList
      });
    });
  }

  changeClassStyle(props) {
    let { classData } = props;
    let index = -1;
    let level1Ary = [],
      level2Ary = [];
    classData.map((a, b) => {
      if (a.pc_level === 0) {
        index += 1;
        level1Ary.push(a);
        level2Ary[index] = [];
      } else {
        level2Ary[index].push(a);
      }
    });
    this.setState({
      level1Ary,
      level2Ary
    });
  }
  render() {
    let { level1Ary, level2Ary, imgList } = this.state;
    return (
      <div className="category_box">
        <div className="banner_warehouse">
          <Link className="banner_color" to="#">
            新品 &nbsp;&nbsp;
          </Link>
          <Link className="banner_color" to="#">
            热卖 &nbsp;&nbsp;
          </Link>
          <Link className="banner_color" to="#">
            美国仓 &nbsp;&nbsp;
          </Link>
          <Link className="banner_color" to="#">
            澳大利亚仓 &nbsp;&nbsp;
          </Link>
          <Link className="banner_color" to="#">
            阿联酋仓 &nbsp;&nbsp;
          </Link>
          <Link className="banner_color" to="#">
            中国香港仓 &nbsp;&nbsp;
          </Link>
        </div>
        <ul className="category">
          <Link className="all-category" to="#">
            所有分类
            <span className="glyphicon glyphicon-chevron-right" />
          </Link>
          {level1Ary.map((a, b) => {
            return (
              <li className="each_category" key={b}>
                <div className="image_box">
                  <img
                    src="https://pic.kjds.com/uploads/product_category/icon/36592/%E8%B6%8A%E5%9F%9F%E7%BD%91%E5%88%86%E7%B1%BB-%E5%9B%BE%E6%A0%87_0008_%E5%AE%B6%E5%B1%85%E7%94%A8%E5%93%81-icon.png"
                    alt="%e8%b6%8a%e5%9f%9f%e7%bd%91%e5%88%86%e7%b1%bb %e5%9b%be%e6%a0%87 0008 %e5%ae%b6%e5%b1%85%e7%94%a8%e5%93%81 icon"
                  />
                </div>
                <a href="/sells/homes/search?product_category_id1=36592&amp;b2c_platform_id=27">
                  {a.pc_name}
                </a>
                {level2Ary[b].length > 0 ? (
                  <div className="category_detail" style={{ display: "none" }}>
                    {level2Ary[b].map((c, d) => {
                      return (
                        <div className="category_group clearfix" key={d}>
                          <a
                            className="title"
                            data-id="35443"
                            href="/sells/homes/search?product_category_id2=35443&amp;b2c_platform_id=27"
                          >
                            {c.pc_name}
                          </a>
                        </div>
                      );
                    })}
                  </div>
                ) : null}
              </li>
            );
          })}
        </ul>
        <div className="right_banner">
          <Carousel style={{ marginTop: "50px" }} autoplay>
            {imgList.map((a, index) => {
              return (
                <div key={index}>
                  <img src={a.imgUrl} alt="" />
                </div>
              );
            })}
          </Carousel>
        </div>
      </div>
    );
  }
}
