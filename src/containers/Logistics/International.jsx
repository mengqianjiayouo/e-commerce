import React, { Component } from "react";
import { connect } from "react-redux";
import { Table, Input, Select, Button, Modal } from "antd";
import { country, countryList } from "../../utils/countryFreight";
import computeFreight from "../../utils/computeFreight";
import { getCookie } from "../../server/cookies";

const { Option } = Select;
const disableList = {
  sf: [
    {
      title: "我们不寄递/有条件寄递下列物品：",
      list: [
        "武器、仿真武器、弹药、管制器具及爆炸物品",
        "易燃烧性物品、易爆炸性物品",
        "氧化剂和过氧化物",
        "毒品及吸毒工具、非正当用途麻醉药品和精神药品、非正当用途的易制毒化学品、毒性物质",
        "生化制品、传染性、感染性物质",
        "腐蚀性物质、放射性物质",
        "各类危害国家安全和社会稳定的非法出版物、印刷品、音像制品等宣传品",
        "内容涉及国家秘密的文件、资料及其他物品",
        "间谍专用器材",
        "伪造或者变造的货币、有价证券、证件、公章等非法伪造物品",
        "货币和有价证券",
        "侵犯知识产权和假冒伪劣物品",
        "动植物尤其各类濒危野生动物植物及其制品",
        "如有碍人畜健康的、来自疫区的以及其他能传播疾病的食品、药品或者其他物品",
        "烟草和烟草制品、酒",
        "贵重物品（例如，艺术品、古董、宝石以及黄金等贵重金属）",
        "其它法律法规的违禁品"
      ]
    },
    {
      title: "除以上禁寄/限寄物品外，顺丰还有权拒绝寄递和/或暂停寄递以下物品：",
      list: [
        "任何未提供寄件人和收件人的详细联络信息的包裹；",
        "在我们看来不适合寄递或未用适合寄递的方式恰当地描述、分类或包装和加标签并具备必要凭证的物品；",
        "因为产品本身或包装特性，我们基于自身判断认为可能危及运输工具及人员安全的物品；",
        "我们基于自身判断认为从经济角度或操作角度不可寄递的物品。",
        "遵守起始国家/地区及目的国家/地区当前适用的法律法规及政府规定是寄件人的义务，因各个国家或地区规定禁止或限制寄递的物品不尽相同，除以上禁寄/限寄物品标准外，建议寄件人还需参考物品寄递起始国家或地区和目的国家或地区的进出口禁寄/限寄物品列表。"
      ]
    }
  ],
  dhl: [
    {
      title: "DHL禁止/限制寄递物品",
      list: [
        "液体/化妆品：含液体的制品/含有液体腐蚀性化学物品",
        "磁铁：磁铁、磁钢, 强磁马达",
        "电池：含电，电池，纽扣电池，充电宝，蓄电器等等",
        "粉末：粉末，沙漏，毒品",
        "胶类产品：常规胶,温变胶，猫眼胶，指甲胶",
        "数码产品：数码相机，摄像机",
        "易燃/易爆：乒乓球，蜡烛，镁棒，打火石，打火机，压缩气体和液压气体等等",
        "植物：植物种子和植物标本以及茶叶",
        "仿真武器：各种类型的枪支、弓弩、逼真的玩具枪和玩具手雷等。包括配件",
        "管制刀具：甩棍，手铐，指虎、匕首、三棱刀、弹簧刀以及其他属于管制刀具类的单刃、双刃、三棱刀",
        "电子烟配件：水烟 雾化器等等",
        "医疗用品：各类医疗器械和药品",
        "食品：所有食品禁发",
        "动物：活物，动物尸体和动物标本以及皮张类",
        "激光产品：激光笔 指尖陀螺德国禁发",
        "其他：仿牌物品,现金,纪念币",
        "危险品：各类被定义为危险品的物品"
      ]
    }
  ]
};
class International extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: "",
      weight: 1000,
      countryId: "",
      long: "",
      height: "",
      freight: [],
      islogin: false,
      modalType: "sf",
      modalVisible: false
    };
  }
  componentDidMount() {
    this.getFreight();
    let ApiKey = getCookie("ApiKey");
    if (ApiKey && ApiKey !== "") {
      this.setState({
        islogin: true
      });
    }
  }

  getData() {}
  showLogin() {}
  getFreight() {
    let { height, weight, long, width, countryId } = this.state;
    height = height ? Number(height) : 0;
    weight = weight ? Number(weight) : 1000;
    long = long ? Number(long) : 0;
    width = width ? Number(width) : 0;

    let ary = computeFreight(long, width, height, weight, countryId);

    this.setState({
      freight: ary
    });
  }
  render() {
    const {
      weight,
      countryId,
      long,
      width,
      height,
      freight,
      modalVisible,
      modalType
    } = this.state;
    // console.log(this.props.state);
    const freightColumns = [
      {
        title: "国家",
        dataIndex: "country",
        key: "country",
        width: 140,
        fixed: "left",
        align: "center"
      },
      {
        title: "闪质合作DHL1",
        align: "center",
        key: "dhlpps",
        width: 140,
        render: a => {
          return (
            <span>
              {a.dhlpps ? (!isNaN(a.dhlpps) ? `${a.dhlpps}元` : a.dhlpps) : "-"}
              {a.dhlppstime ? `(${a.dhlppstime}天)` : null}
            </span>
          );
        }
      },
      {
        title: "闪质合作DHL2",
        align: "center",
        key: "dhlzx",
        width: 140,
        render: a => {
          return (
            <span>
              {a.dhlzx ? (!isNaN(a.dhlzx) ? `${a.dhlzx}元` : a.dhlzx) : "-"}
              {a.dhlzxtime ? `(${a.dhlzxtime}天)` : null}
            </span>
          );
        }
      },
      {
        title: "闪质合作顺丰1",
        render: a => {
          return (
            <span>
              {a.sfxb1 ? (!isNaN(a.sfxb1) ? `${a.sfxb1}元` : a.sfxb1) : "-"}
              {a.sfxb1time ? `(${a.sfxb1time}天)` : null}
            </span>
          );
        },
        align: "center",
        width: 140,

        key: "sfxb1"
      },
      {
        title: "闪质合作顺丰2",
        width: 140,

        render: a => {
          return (
            <span>
              {a.sfxb2 ? (!isNaN(a.sfxb2) ? `${a.sfxb2}元` : a.sfxb2) : "-"}
              {a.sfxb2time ? `(${a.sfxb2time}天)` : null}
            </span>
          );
        },
        align: "center",
        key: "sfxb2"
      },
      {
        title: "闪质合作顺丰3",
        render: a => {
          return (
            <span>
              {a.sfzd ? (!isNaN(a.sfzd) ? `${a.sfzd}元` : a.sfzd) : "-"}
            </span>
          );
        },
        align: "center",
        key: "sfzd",
        width: 140
      },
      {
        title: "闪质合作顺丰4",
        render: a => {
          return (
            <span>
              {a.sfxb3 ? (!isNaN(a.sfxb3) ? `${a.sfxb3}元` : a.sfxb3) : "-"}
              {a.sfxb3time ? `(${a.sfxb3time}天)` : null}
            </span>
          );
        },
        align: "center",
        width: 140,

        key: "sfxb3"
      },
      {
        title: "闪质合作顺丰5",
        render: a => {
          return (
            <span>
              {a.sfly ? (!isNaN(a.sfly) ? `${a.sfly}元` : a.sfly) : "-"}
              {a.sflytime ? `(${a.sflytime}天)` : null}
            </span>
          );
        },
        align: "center",
        key: "sfly",
        width: 140
      },
      {
        title: "闪质合作顺丰6",
        render: a => {
          return (
            <span>
              {a.sfby ? (!isNaN(a.sfby) ? `${a.sfby}元` : a.sfby) : "-"}
              {a.sfbytime ? `(${a.sfbytime}天)` : null}
            </span>
          );
        },
        align: "center",
        width: 140,

        key: "sfby"
      },
      {
        title: "闪质合作顺丰7",
        render: a => {
          return (
            <span>
              {a.sfzx ? (!isNaN(a.sfzx) ? `${a.sfzx}元` : a.sfzx) : "-"}
              {a.sfzxtime ? `(${a.sfzxtime}天)` : null}
            </span>
          );
        },
        align: "center",
        key: "send",
        width: 140
      }
    ];
    return (
      <div
        className="home orders"
        style={{
          paddingTop: "40px",
          /* paddingLeft: this.state.islogin ? "140px" : 0, */
          paddingLeft: "140px",
          minHeight: "908px"
        }}
      >
        <div className="home_right">
          <div className="main">
            <div className="header">
              <span>国际物流查询</span>
            </div>
            <div className="search">
              <ul
                className="flexul"
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <li className="item">
                  <div className="title">长</div>
                  <Input
                    type="number"
                    value={long}
                    style={{ width: "70%" }}
                    placeholder="单位cm"
                    onChange={e => {
                      this.setState({
                        long: e.target.value
                      });
                    }}
                  />
                </li>
                <li className="item">
                  <div className="title">宽</div>
                  <Input
                    type="number"
                    style={{ width: "70%" }}
                    placeholder="单位cm"
                    value={width}
                    onChange={e => {
                      this.setState({
                        width: e.target.value
                      });
                    }}
                  />
                </li>
                <li className="item">
                  <div className="title">高</div>
                  <Input
                    type="number"
                    value={height}
                    style={{ width: "70%" }}
                    placeholder="单位cm"
                    onChange={e => {
                      this.setState({
                        height: e.target.value
                      });
                    }}
                  />
                </li>
              </ul>
              <ul
                className="flexul"
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <li className="item">
                  <div className="title">国家</div>
                  <Select
                    value={countryId === "" ? "全部" : countryId}
                    style={{ width: "200px" }}
                    onChange={val => {
                      this.setState({
                        countryId: val
                      });
                    }}
                  >
                    {countryList.map((a, b) => {
                      return (
                        <Option key={b} value={country[a]}>
                          {country[a]}
                        </Option>
                      );
                    })}
                    <Option value="1">1</Option>
                  </Select>
                </li>
                <li className="item">
                  <div className="title">重量</div>
                  <Input
                    type="number"
                    placeholder="默认值为1000g"
                    style={{ width: "70%" }}
                    value={weight}
                    onChange={e => {
                      this.setState({
                        weight: e.target.value
                      });
                    }}
                  />
                </li>
              </ul>
              <div className="btns" style={{ marginBottom: "15px" }}>
                <Button
                  type="primary"
                  onClick={() => {
                    this.getFreight();
                  }}
                >
                  运费测算
                </Button>
                <Button
                  type="primary"
                  style={{ margin: "0 20px" }}
                  onClick={() => {
                    this.setState({
                      modalVisible: true,
                      modalType: "sf"
                    });
                  }}
                >
                  顺丰禁运
                </Button>
                <Button
                  type="primary"
                  onClick={() => {
                    this.setState({
                      modalVisible: true,
                      modalType: "dhl"
                    });
                  }}
                >
                  DHL禁运
                </Button>
              </div>
            </div>
            <div className="table_wrapper">
              <Table
                dataSource={freight}
                columns={freightColumns}
                scroll={{ x: 1400 }}
                pagination={false}
              />
            </div>
          </div>
        </div>
        <Modal
          width={780}
          style={{ top: 30 }}
          title={
            modalType === "sf"
              ? "顺丰进出口件禁止/限制寄递物品"
              : "DHL禁止/限制寄递物品"
          }
          visible={modalVisible}
          footer={null}
          onCancel={() => {
            this.setState({
              modalVisible: false
            });
          }}
        >
          <div style={{ MaxHeight: 800, overflowY: "scroll" }}>
            {disableList[modalType].map((a, b) => {
              return (
                <div key={b}>
                  <div
                    className="title"
                    style={{ fontWeight: "800", margin: "10px 0" }}
                  >
                    {a.title}
                  </div>
                  {a.list.map((item, d) => {
                    return <p key={d}>{item}</p>;
                  })}
                </div>
              );
            })}
          </div>
        </Modal>
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
)(International);
