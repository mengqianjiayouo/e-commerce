import React,{Component} from 'react'
import $ from 'jquery'
export default class Banner extends Component{
    constructor(props){
        super(props);
        this.state={}
    }
    componentDidMount(){
        /* this.mySwiper = new Swiper('.swiper-container', {
            autoplay: true,
            loop: true,
            pagination : {
                el: '.swiper-pagination',
            }
          }); */
          $(function(){
            //轮播左边的分类
            $('.category>.each_category').hover(function(){
                $('.category>.each_category').find('.category_detail').hide();
                $(this).find('.category_detail').show();
            });
            $('.category').mouseleave(function () {
                $('.category>.each_category').find('.category_detail').hide();
            });
    });
    }
    render(){
        return (<div className="category_box">
        <div className="banner_warehouse">
            <a className="banner_color" href="#">新品 &nbsp;&nbsp;</a>
            <a className="banner_color" href="#">热卖 &nbsp;&nbsp;</a>
            <a className="banner_color" href="#">美国仓 &nbsp;&nbsp;</a>
            <a className="banner_color" href="#">澳大利亚仓 &nbsp;&nbsp;</a>
            <a className="banner_color" href="#">阿联酋仓 &nbsp;&nbsp;</a>
            <a className="banner_color" href="#">中国香港仓 &nbsp;&nbsp;</a>
        </div>
        <ul className="category">
            <a className="all-category" href="#">所有分类<span className="glyphicon glyphicon-chevron-right"></span></a>
            <li className="each_category">
                <div className="image_box">
                    <img src="https://pic.kjds.com/uploads/product_category/icon/36592/%E8%B6%8A%E5%9F%9F%E7%BD%91%E5%88%86%E7%B1%BB-%E5%9B%BE%E6%A0%87_0008_%E5%AE%B6%E5%B1%85%E7%94%A8%E5%93%81-icon.png" alt="%e8%b6%8a%e5%9f%9f%e7%bd%91%e5%88%86%e7%b1%bb %e5%9b%be%e6%a0%87 0008 %e5%ae%b6%e5%b1%85%e7%94%a8%e5%93%81 icon" />
                </div><a data-id="36592" href="/sells/homes/search?product_category_id1=36592&amp;b2c_platform_id=27">家居用品</a>
                <div className="category_detail" style={{display: "none"}}>
                    <div className="category_group clearfix">
                        <a className="title" data-id="35443" href="/sells/homes/search?product_category_id2=35443&amp;b2c_platform_id=27">节庆派对用品</a>
                    </div>
                    <div className="category_group clearfix">
                        <a className="title" data-id="35450" href="/sells/homes/search?product_category_id2=35450&amp;b2c_platform_id=27">厨房吧台用品</a>
                    </div>
                    <div className="category_group clearfix">
                        <a className="title" data-id="35447" href="/sells/homes/search?product_category_id2=35447&amp;b2c_platform_id=27">家纺成品</a>
                    </div>
                    <div className="category_group clearfix">
                        <a className="title" data-id="35446" href="/sells/homes/search?product_category_id2=35446&amp;b2c_platform_id=27">家用储存收藏用具</a>
                    </div>
                    <div className="category_group clearfix">
                        <a className="title" data-id="35445" href="/sells/homes/search?product_category_id2=35445&amp;b2c_platform_id=27">家庭装饰品</a>
                    </div>
                    <div className="category_group clearfix">
                        <a className="title" data-id="35451" href="/sells/homes/search?product_category_id2=35451&amp;b2c_platform_id=27">宠物用品</a>
                    </div>
                    <div className="category_group clearfix">
                        <a className="title" data-id="35449" href="/sells/homes/search?product_category_id2=35449&amp;b2c_platform_id=27">家居日用品</a>
                    </div>
                    <div className="category_group clearfix">
                        <a className="title" data-id="35441" href="/sells/homes/search?product_category_id2=35441&amp;b2c_platform_id=27">浴室用品</a>
                    </div>
                    <div className="category_group clearfix">
                        <a className="title" data-id="35444" href="/sells/homes/search?product_category_id2=35444&amp;b2c_platform_id=27">园艺用品</a>
                    </div>
                    <div className="category_group clearfix">
                        <a className="title" data-id="35448" href="/sells/homes/search?product_category_id2=35448&amp;b2c_platform_id=27">家庭清洁用具及附件</a>
                    </div>
                    <div className="category_group clearfix">
                        <a className="title" data-id="35440" href="/sells/homes/search?product_category_id2=35440&amp;b2c_platform_id=27">手工艺品&amp;缝纫用品（半成品）</a>
                    </div>
                </div></li>
            <li className="each_category">
                <div className="image_box">
                    <img src="https://pic.kjds.com/uploads/product_category/icon/36587/%E8%B6%8A%E5%9F%9F%E7%BD%91%E5%88%86%E7%B1%BB-%E5%9B%BE%E6%A0%87_0017_%E7%94%B5%E5%AD%90%E6%B6%88%E8%B4%B9-icon.png" alt="%e8%b6%8a%e5%9f%9f%e7%bd%91%e5%88%86%e7%b1%bb %e5%9b%be%e6%a0%87 0017 %e7%94%b5%e5%ad%90%e6%b6%88%e8%b4%b9 icon" />
                </div><a data-id="36587" href="/sells/homes/search?product_category_id1=36587&amp;b2c_platform_id=27">消费电子</a>
                <div className="category_detail" style={{display: "none"}}>
                    <div className="category_group clearfix">
                        <a className="title" data-id="34406" href="/sells/homes/search?product_category_id2=34406&amp;b2c_platform_id=27">便携音视频设备</a>
                    </div>
                    <div className="category_group clearfix">
                        <a className="title" data-id="34400" href="/sells/homes/search?product_category_id2=34400&amp;b2c_platform_id=27">零配件</a>
                    </div>
                    <div className="category_group clearfix">
                        <a className="title" data-id="34409" href="/sells/homes/search?product_category_id2=34409&amp;b2c_platform_id=27">智能电子</a>
                    </div>
                    <div className="category_group clearfix">
                        <a className="title" data-id="34405" href="/sells/homes/search?product_category_id2=34405&amp;b2c_platform_id=27">家用音视频设备</a>
                    </div>
                    <div className="category_group clearfix">
                        <a className="title" data-id="34404" href="/sells/homes/search?product_category_id2=34404&amp;b2c_platform_id=27">游戏及配附件</a>
                    </div>
                    <div className="category_group clearfix">
                        <a className="title" data-id="34408" href="/sells/homes/search?product_category_id2=34408&amp;b2c_platform_id=27">电池、电源</a>
                    </div>
                    <div className="category_group clearfix">
                        <a className="title" data-id="34401" href="/sells/homes/search?product_category_id2=34401&amp;b2c_platform_id=27">摄影摄像</a>
                    </div>
                    <div className="category_group clearfix">
                        <a className="title" data-id="34403" href="/sells/homes/search?product_category_id2=34403&amp;b2c_platform_id=27">电子烟</a>
                    </div>
                </div></li>
            <li className="each_category">
                <div className="image_box">
                    <img src="https://pic.kjds.com/uploads/product_category/icon/36600/%E8%B6%8A%E5%9F%9F%E7%BD%91%E5%88%86%E7%B1%BB-%E5%9B%BE%E6%A0%87_0013_%E6%89%8B%E6%9C%BA%E9%80%9A%E8%AE%AF-icon.png" alt="%e8%b6%8a%e5%9f%9f%e7%bd%91%e5%88%86%e7%b1%bb %e5%9b%be%e6%a0%87 0013 %e6%89%8b%e6%9c%ba%e9%80%9a%e8%ae%af icon" />
                </div><a data-id="36600" href="/sells/homes/search?product_category_id1=36600&amp;b2c_platform_id=27">电话和通讯</a>
                <div className="category_detail" style={{display: "none"}}>
                    <div className="category_group clearfix">
                        <a className="title" data-id="35895" href="/sells/homes/search?product_category_id2=35895&amp;b2c_platform_id=27">手机配件和零件</a>
                    </div>
                    <div className="category_group clearfix">
                        <a className="title" data-id="35900" href="/sells/homes/search?product_category_id2=35900&amp;b2c_platform_id=27">电话和附件</a>
                    </div>
                    <div className="category_group clearfix">
                        <a className="title" data-id="35902" href="/sells/homes/search?product_category_id2=35902&amp;b2c_platform_id=27">步谈机</a>
                    </div>
                    <div className="category_group clearfix">
                        <a className="title" data-id="35896" href="/sells/homes/search?product_category_id2=35896&amp;b2c_platform_id=27">手机</a>
                    </div>
                    <div className="category_group clearfix">
                        <a className="title" data-id="35898" href="/sells/homes/search?product_category_id2=35898&amp;b2c_platform_id=27">寻呼机</a>
                    </div>
                </div></li>
            <li className="each_category">
                <div className="image_box">
                    <img src="https://pic.kjds.com/uploads/product_category/icon/36582/%E8%B6%8A%E5%9F%9F%E7%BD%91%E5%88%86%E7%B1%BB-%E5%9B%BE%E6%A0%87_0021_%E6%9C%8D%E8%A3%85%E6%9C%8D%E9%A5%B0%E9%85%8D%E4%BB%B6-icon.png" alt="%e8%b6%8a%e5%9f%9f%e7%bd%91%e5%88%86%e7%b1%bb %e5%9b%be%e6%a0%87 0021 %e6%9c%8d%e8%a3%85%e6%9c%8d%e9%a5%b0%e9%85%8d%e4%bb%b6 icon" />
                </div><a data-id="36582" href="/sells/homes/search?product_category_id1=36582&amp;b2c_platform_id=27">服装/服饰配件</a>
                <div className="category_detail" style={{display: "none"}}>
                    <div className="category_group clearfix">
                        <a className="title" data-id="38256" href="/sells/homes/search?product_category_id2=38256&amp;b2c_platform_id=27">女装</a>
                    </div>
                    <div className="category_group clearfix">
                        <a className="title" data-id="38252" href="/sells/homes/search?product_category_id2=38252&amp;b2c_platform_id=27">服饰配饰（男/女/儿童配件，婴儿配饰发到婴儿服装）</a>
                    </div>
                    <div className="category_group clearfix">
                        <a className="title" data-id="38254" href="/sells/homes/search?product_category_id2=38254&amp;b2c_platform_id=27">男装</a>
                    </div>
                    <div className="category_group clearfix">
                        <a className="title" data-id="38253" href="/sells/homes/search?product_category_id2=38253&amp;b2c_platform_id=27">扮演服及配件（不包含情趣制服）</a>
                    </div>
                </div></li>
            <li className="each_category">
                <div className="image_box">
                    <img src="https://pic.kjds.com/uploads/product_category/icon/36595/%E8%B6%8A%E5%9F%9F%E7%BD%91%E5%88%86%E7%B1%BB-%E5%9B%BE%E6%A0%87_0026_%E7%8F%A0%E5%AE%9D%E6%9C%8D%E9%A5%B0%E5%8F%8A%E9%85%8D%E4%BB%B6-icon.png" alt="%e8%b6%8a%e5%9f%9f%e7%bd%91%e5%88%86%e7%b1%bb %e5%9b%be%e6%a0%87 0026 %e7%8f%a0%e5%ae%9d%e6%9c%8d%e9%a5%b0%e5%8f%8a%e9%85%8d%e4%bb%b6 icon" />
                </div><a data-id="36595" href="/sells/homes/search?product_category_id1=36595&amp;b2c_platform_id=27">珠宝饰品及配件</a>
                <div className="category_detail" style={{display: "none"}}>
                    <div className="category_group clearfix">
                        <a className="title" data-id="34654" href="/sells/homes/search?product_category_id2=34654&amp;b2c_platform_id=27">流行饰品</a>
                    </div>
                    <div className="category_group clearfix">
                        <a className="title" data-id="34656" href="/sells/homes/search?product_category_id2=34656&amp;b2c_platform_id=27">首饰配件和部件</a>
                    </div>
                    <div className="category_group clearfix">
                        <a className="title" data-id="34658" href="/sells/homes/search?product_category_id2=34658&amp;b2c_platform_id=27">首饰工具</a>
                    </div>
                    <div className="category_group clearfix">
                        <a className="title" data-id="34657" href="/sells/homes/search?product_category_id2=34657&amp;b2c_platform_id=27">首饰包装和展示用具</a>
                    </div>
                </div></li>
            <li className="each_category">
                <div className="image_box">
                    <img src="https://pic.kjds.com/uploads/product_category/icon/36604/%E8%B6%8A%E5%9F%9F%E7%BD%91%E5%88%86%E7%B1%BB-%E5%9B%BE%E6%A0%87_0006_%E8%BF%90%E5%8A%A8%E5%8F%8A%E5%A8%B1%E4%B9%90.png" alt="%e8%b6%8a%e5%9f%9f%e7%bd%91%e5%88%86%e7%b1%bb %e5%9b%be%e6%a0%87 0006 %e8%bf%90%e5%8a%a8%e5%8f%8a%e5%a8%b1%e4%b9%90" />
                </div><a data-id="36604" href="/sells/homes/search?product_category_id1=36604&amp;b2c_platform_id=27">运动及娱乐</a>
                <div className="category_detail" style={{display: "none"}}>
                    <div className="category_group clearfix">
                        <a className="title" data-id="38432" href="/sells/homes/search?product_category_id2=38432&amp;b2c_platform_id=27">骑行</a>
                    </div>
                    <div className="category_group clearfix">
                        <a className="title" data-id="38453" href="/sells/homes/search?product_category_id2=38453&amp;b2c_platform_id=27">水上运动</a>
                    </div>
                    <div className="category_group clearfix">
                        <a className="title" data-id="38435" href="/sells/homes/search?product_category_id2=38435&amp;b2c_platform_id=27">健身及塑形</a>
                    </div>
                    <div className="category_group clearfix">
                        <a className="title" data-id="38434" href="/sells/homes/search?product_category_id2=38434&amp;b2c_platform_id=27">钓鱼用品</a>
                    </div>
                    <div className="category_group clearfix">
                        <a className="title" data-id="38430" href="/sells/homes/search?product_category_id2=38430&amp;b2c_platform_id=27">野营及徒步旅行</a>
                    </div>
                    <div className="category_group clearfix">
                        <a className="title" data-id="38449" href="/sells/homes/search?product_category_id2=38449&amp;b2c_platform_id=27">足球用品</a>
                    </div>
                    <div className="category_group clearfix">
                        <a className="title" data-id="38444" href="/sells/homes/search?product_category_id2=38444&amp;b2c_platform_id=27">轮滑与滑板运动</a>
                    </div>
                    <div className="category_group clearfix">
                        <a className="title" data-id="38443" href="/sells/homes/search?product_category_id2=38443&amp;b2c_platform_id=27">球拍运动</a>
                    </div>
                    <div className="category_group clearfix">
                        <a className="title" data-id="38433" href="/sells/homes/search?product_category_id2=38433&amp;b2c_platform_id=27">娱乐</a>
                    </div>
                    <div className="category_group clearfix">
                        <a className="title" data-id="38429" href="/sells/homes/search?product_category_id2=38429&amp;b2c_platform_id=27">篮球用品</a>
                    </div>
                    <div className="category_group clearfix">
                        <a className="title" data-id="38436" href="/sells/homes/search?product_category_id2=38436&amp;b2c_platform_id=27">高尔夫用品</a>
                    </div>
                    <div className="category_group clearfix">
                        <a className="title" data-id="38441" href="/sells/homes/search?product_category_id2=38441&amp;b2c_platform_id=27">乐器</a>
                    </div>
                    <div className="category_group clearfix">
                        <a className="title" data-id="38428" href="/sells/homes/search?product_category_id2=38428&amp;b2c_platform_id=27">棒球运动</a>
                    </div>
                    <div className="category_group clearfix">
                        <a className="title" data-id="38451" href="/sells/homes/search?product_category_id2=38451&amp;b2c_platform_id=27">运动服及配件</a>
                    </div>
                    <div className="category_group clearfix">
                        <a className="title" data-id="38439" href="/sells/homes/search?product_category_id2=38439&amp;b2c_platform_id=27">狩猎用品</a>
                    </div>
                    <div className="category_group clearfix">
                        <a className="title" data-id="38450" href="/sells/homes/search?product_category_id2=38450&amp;b2c_platform_id=27">运动包</a>
                    </div>
                </div>
            </li>
            <li className="each_category">
                <div className="image_box">
                    <img src="https://pic.kjds.com/uploads/product_category/icon/36598/%E8%B6%8A%E5%9F%9F%E7%BD%91%E5%88%86%E7%B1%BB-%E5%9B%BE%E6%A0%87_0023_%E5%AD%95%E5%A9%B4%E7%AB%A5-icon.png" alt="%e8%b6%8a%e5%9f%9f%e7%bd%91%e5%88%86%e7%b1%bb %e5%9b%be%e6%a0%87 0023 %e5%ad%95%e5%a9%b4%e7%ab%a5 icon" />
                </div><a data-id="36598" href="/sells/homes/search?product_category_id1=36598&amp;b2c_platform_id=27">孕婴童</a>
                <div className="category_detail" style={{display: "none"}}>
                    <div className="category_group clearfix">
                        <a className="title" data-id="35038" href="/sells/homes/search?product_category_id2=35038&amp;b2c_platform_id=27">儿童服装（2岁以上）</a>
                    </div>
                    <div className="category_group clearfix">
                        <a className="title" data-id="35033" href="/sells/homes/search?product_category_id2=35033&amp;b2c_platform_id=27">婴儿活动用品</a>
                    </div>
                    <div className="category_group clearfix">
                        <a className="title" data-id="35034" href="/sells/homes/search?product_category_id2=35034&amp;b2c_platform_id=27">婴儿护理</a>
                    </div>
                    <div className="category_group clearfix">
                        <a className="title" data-id="35042" href="/sells/homes/search?product_category_id2=35042&amp;b2c_platform_id=27">婴儿安全防护</a>
                    </div>
                    <div className="category_group clearfix">
                        <a className="title" data-id="35037" href="/sells/homes/search?product_category_id2=35037&amp;b2c_platform_id=27">婴儿寝具床品</a>
                    </div>
                    <div className="category_group clearfix">
                        <a className="title" data-id="42978" href="/sells/homes/search?product_category_id2=42978&amp;b2c_platform_id=27">尿布和如厕训练</a>
                    </div>
                </div></li>
            <li className="each_category">
                <div className="image_box">
                    <img src="https://pic.kjds.com/uploads/product_category/icon/36584/%E8%B6%8A%E5%9F%9F%E7%BD%91%E5%88%86%E7%B1%BB-%E5%9B%BE%E6%A0%87_0019_%E7%BE%8E%E5%AE%B9%E5%81%A5%E5%BA%B7-icon.png" alt="%e8%b6%8a%e5%9f%9f%e7%bd%91%e5%88%86%e7%b1%bb %e5%9b%be%e6%a0%87 0019 %e7%be%8e%e5%ae%b9%e5%81%a5%e5%ba%b7 icon" />
                </div><a data-id="36584" href="/sells/homes/search?product_category_id1=36584&amp;b2c_platform_id=27">美容健康</a>
                <div className="category_detail" style={{display: "none"}}>
                    <div className="category_group clearfix">
                        <a className="title" data-id="35736" href="/sells/homes/search?product_category_id2=35736&amp;b2c_platform_id=27">头发护理/造型</a>
                    </div>
                    <div className="category_group clearfix">
                        <a className="title" data-id="35743" href="/sells/homes/search?product_category_id2=35743&amp;b2c_platform_id=27">剃须及脱毛产品</a>
                    </div>
                    <div className="category_group clearfix">
                        <a className="title" data-id="35738" href="/sells/homes/search?product_category_id2=35738&amp;b2c_platform_id=27">彩妆</a>
                    </div>
                    <div className="category_group clearfix">
                        <a className="title" data-id="35745" href="/sells/homes/search?product_category_id2=35745&amp;b2c_platform_id=27">护肤工具</a>
                    </div>
                    <div className="category_group clearfix">
                        <a className="title" data-id="35747" href="/sells/homes/search?product_category_id2=35747&amp;b2c_platform_id=27">工具/配件</a>
                    </div>
                    <div className="category_group clearfix">
                        <a className="title" data-id="35744" href="/sells/homes/search?product_category_id2=35744&amp;b2c_platform_id=27">护肤品</a>
                    </div>
                    <div className="category_group clearfix">
                        <a className="title" data-id="35739" href="/sells/homes/search?product_category_id2=35739&amp;b2c_platform_id=27">美甲用品及修甲工具</a>
                    </div>
                    <div className="category_group clearfix">
                        <a className="title" data-id="35737" href="/sells/homes/search?product_category_id2=35737&amp;b2c_platform_id=27">健康保健</a>
                    </div>
                    <div className="category_group clearfix">
                        <a className="title" data-id="35740" href="/sells/homes/search?product_category_id2=35740&amp;b2c_platform_id=27">口腔清洁</a>
                    </div>
                    <div className="category_group clearfix">
                        <a className="title" data-id="35746" href="/sells/homes/search?product_category_id2=35746&amp;b2c_platform_id=27">纹身及身体彩绘</a>
                    </div>
                </div></li>
            <li className="each_category">
                <div className="image_box">
                    <img src="https://pic.kjds.com/uploads/product_category/icon/36596/%E8%B6%8A%E5%9F%9F%E7%BD%91%E5%88%86%E7%B1%BB-%E5%9B%BE%E6%A0%87_0024_%E7%81%AF%E9%A5%B0%E7%85%A7%E6%98%8E-icon.png" alt="%e8%b6%8a%e5%9f%9f%e7%bd%91%e5%88%86%e7%b1%bb %e5%9b%be%e6%a0%87 0024 %e7%81%af%e9%a5%b0%e7%85%a7%e6%98%8e icon" />
                </div><a data-id="36596" href="/sells/homes/search?product_category_id1=36596&amp;b2c_platform_id=27">照明灯饰</a>
                <div className="category_detail" style={{display: "none"}}>
                    <div className="category_group clearfix">
                        <a className="title" data-id="35626" href="/sells/homes/search?product_category_id2=35626&amp;b2c_platform_id=27">室内灯饰灯具</a>
                    </div>
                    <div className="category_group clearfix">
                        <a className="title" data-id="35632" href="/sells/homes/search?product_category_id2=35632&amp;b2c_platform_id=27">便携式照明</a>
                    </div>
                    <div className="category_group clearfix">
                        <a className="title" data-id="35631" href="/sells/homes/search?product_category_id2=35631&amp;b2c_platform_id=27">室外照明</a>
                    </div>
                    <div className="category_group clearfix">
                        <a className="title" data-id="35629" href="/sells/homes/search?product_category_id2=35629&amp;b2c_platform_id=27">灯泡、灯管</a>
                    </div>
                    <div className="category_group clearfix">
                        <a className="title" data-id="35633" href="/sells/homes/search?product_category_id2=35633&amp;b2c_platform_id=27">专业灯具</a>
                    </div>
                    <div className="category_group clearfix">
                        <a className="title" data-id="35628" href="/sells/homes/search?product_category_id2=35628&amp;b2c_platform_id=27">照明附件</a>
                    </div>
                    <div className="category_group clearfix">
                        <a className="title" data-id="35625" href="/sells/homes/search?product_category_id2=35625&amp;b2c_platform_id=27">节日照明</a>
                    </div>
                    <div className="category_group clearfix">
                        <a className="title" data-id="35627" href="/sells/homes/search?product_category_id2=35627&amp;b2c_platform_id=27">LED照明</a>
                    </div>
                    <div className="category_group clearfix">
                        <a className="title" data-id="43030" href="/sells/homes/search?product_category_id2=43030&amp;b2c_platform_id=27">工程灯</a>
                    </div>
                    <div className="category_group clearfix">
                        <a className="title" data-id="35630" href="/sells/homes/search?product_category_id2=35630&amp;b2c_platform_id=27">新奇特灯</a>
                    </div>
                    <div className="category_group clearfix">
                        <a className="title" data-id="35624" href="/sells/homes/search?product_category_id2=35624&amp;b2c_platform_id=27">商业照明</a>
                    </div>
                </div></li>
            <li className="each_category">
                <div className="image_box">
                    <img src="https://pic.kjds.com/uploads/product_category/icon/36606/%E8%B6%8A%E5%9F%9F%E7%BD%91%E5%88%86%E7%B1%BB-%E5%9B%BE%E6%A0%87_0003_%E7%8E%A9%E5%85%B7-icon.png" alt="%e8%b6%8a%e5%9f%9f%e7%bd%91%e5%88%86%e7%b1%bb %e5%9b%be%e6%a0%87 0003 %e7%8e%a9%e5%85%b7 icon" />
                </div><a data-id="36606" href="/sells/homes/search?product_category_id1=36606&amp;b2c_platform_id=27">玩具</a>
                <div className="category_detail" style={{display: "none"}}>
                    <div className="category_group clearfix">
                        <a className="title" data-id="37878" href="/sells/homes/search?product_category_id2=37878&amp;b2c_platform_id=27">拼图/立体拼图/七巧板/数独/魔方</a>
                    </div>
                    <div className="category_group clearfix">
                        <a className="title" data-id="37875" href="/sells/homes/search?product_category_id2=37875&amp;b2c_platform_id=27">模型，积木和拼插玩具</a>
                    </div>
                    <div className="category_group clearfix">
                        <a className="title" data-id="37872" href="/sells/homes/search?product_category_id2=37872&amp;b2c_platform_id=27">娃娃/填充及毛绒玩具</a>
                    </div>
                    <div className="category_group clearfix">
                        <a className="title" data-id="37879" href="/sells/homes/search?product_category_id2=37879&amp;b2c_platform_id=27">遥控玩具</a>
                    </div>
                    <div className="category_group clearfix">
                        <a className="title" data-id="37877" href="/sells/homes/search?product_category_id2=37877&amp;b2c_platform_id=27">户外玩具</a>
                    </div>
                    <div className="category_group clearfix">
                        <a className="title" data-id="40894" href="/sells/homes/search?product_category_id2=40894&amp;b2c_platform_id=27">减压玩具</a>
                    </div>
                    <div className="category_group clearfix">
                        <a className="title" data-id="37870" href="/sells/homes/search?product_category_id2=37870&amp;b2c_platform_id=27">经典玩具</a>
                    </div>
                    <div className="category_group clearfix">
                        <a className="title" data-id="37871" href="/sells/homes/search?product_category_id2=37871&amp;b2c_platform_id=27">非遥控类交通工具玩具</a>
                    </div>
                </div></li>
            <li className="each_category">
                <div className="image_box">
                    <img src="https://pic.kjds.com/uploads/product_category/icon/36608/%E8%B6%8A%E5%9F%9F%E7%BD%91%E5%88%86%E7%B1%BB-%E5%9B%BE%E6%A0%87_0000_%E6%89%8B%E8%A1%A8-icon.png" alt="%e8%b6%8a%e5%9f%9f%e7%bd%91%e5%88%86%e7%b1%bb %e5%9b%be%e6%a0%87 0000 %e6%89%8b%e8%a1%a8 icon" />
                </div><a data-id="36608" href="/sells/homes/search?product_category_id1=36608&amp;b2c_platform_id=27">手表</a>
                <div className="category_detail" style={{display: "none"}}>
                    <div className="category_group clearfix">
                        <a className="title" data-id="38814" href="/sells/homes/search?product_category_id2=38814&amp;b2c_platform_id=27">电子腕表</a>
                    </div>
                    <div className="category_group clearfix">
                        <a className="title" data-id="38819" href="/sells/homes/search?product_category_id2=38819&amp;b2c_platform_id=27">表附件</a>
                    </div>
                    <div className="category_group clearfix">
                        <a className="title" data-id="39148" href="/sells/homes/search?product_category_id2=39148&amp;b2c_platform_id=27">怀表</a>
                    </div>
                </div></li>
            <li className="each_category">
                <div className="image_box">
                    <img src="https://pic.kjds.com/uploads/product_category/icon/36593/%E8%B6%8A%E5%9F%9F%E7%BD%91%E5%88%86%E7%B1%BB-%E5%9B%BE%E6%A0%87_0015_%E5%AE%B6%E7%94%A8%E7%94%B5%E5%99%A8-icon.png" alt="%e8%b6%8a%e5%9f%9f%e7%bd%91%e5%88%86%e7%b1%bb %e5%9b%be%e6%a0%87 0015 %e5%ae%b6%e7%94%a8%e7%94%b5%e5%99%a8 icon" />
                </div><a data-id="36593" href="/sells/homes/search?product_category_id1=36593&amp;b2c_platform_id=27">家用电器</a>
                <div className="category_detail" style={{display: "none"}}>
                    <div className="category_group clearfix">
                        <a className="title" data-id="37442" href="/sells/homes/search?product_category_id2=37442&amp;b2c_platform_id=27">洗熨家电</a>
                    </div>
                    <div className="category_group clearfix">
                        <a className="title" data-id="37441" href="/sells/homes/search?product_category_id2=37441&amp;b2c_platform_id=27">厨房家电</a>
                    </div>
                    <div className="category_group clearfix">
                        <a className="title" data-id="37435" href="/sells/homes/search?product_category_id2=37435&amp;b2c_platform_id=27">空气处理家电</a>
                    </div>
                    <div className="category_group clearfix">
                        <a className="title" data-id="37447" href="/sells/homes/search?product_category_id2=37447&amp;b2c_platform_id=27">水处理家电</a>
                    </div>
                    <div className="category_group clearfix">
                        <a className="title" data-id="39427" href="/sells/homes/search?product_category_id2=39427&amp;b2c_platform_id=27">个护小家电</a>
                    </div>
                    <div className="category_group clearfix">
                        <a className="title" data-id="37437" href="/sells/homes/search?product_category_id2=37437&amp;b2c_platform_id=27">干手机</a>
                    </div>
                </div></li>
        </ul>
        <div className="right_banner">
            <div className="swiper-container">
                <div className="swiper-wrapper">
                    <div className="swiper-slide"><img  src="../../images/1.jpg" alt=""/></div>
                    <div className="swiper-slide"><img src="../../images/2.jpg" alt=""/></div>
                    <div className="swiper-slide"><img src="../../images/3.jpg" alt=""/></div>
                    <div className="swiper-slide"><img src="../../images/4.jpg" alt=""/></div>
                </div>
                <div className="swiper-pagination"></div>
            </div>
        </div>
    </div>)
    }
}