import React, { Component } from "react";
import { connect } from "react-redux";
import { Table, Input, Select, Button } from "antd";
import { country, countryList } from "../../utils/countryFreight";
import computeFreight from "../../utils/computeFreight";
import { getCookie } from "../../server/cookies";

const { Option } = Select;
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
      islogin: false
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
    const { weight, countryId, long, width, height, freight } = this.state;
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
