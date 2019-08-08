import React, { Component } from "react";
import Topbar from "../../components/Topbar/index";
import ReturnTop from "../../components/ReturnTop/index";
import Footer from "../../components/Footer/index";
import SideBar from "../../components/SideBar/index";
import { connect } from "react-redux";
import { Row, Col, Table, Button, Dropdown } from "react-bootstrap";
import DatePicker from "react-datepicker";
import {
  countryFreight,
  country,
  countryList
} from "../../utils/countryFreight";
class International extends Component {
  constructor(props) {
    super(props);
    this.state = {
      islogin: false,

      width: "",
      weight: 1000,
      countryId: "",
      long: "",
      height: "",
      freight: []
    };
  }
  componentDidMount() {
    this.checkIsLogin();
    this.getFreight();
  }

  checkIsLogin() {
    let user = sessionStorage.getItem("user");
    if (user) {
      this.setState({
        islogin: true
      });
    }
  }
  changePlat(a) {
    this.props.dispatch({ type: "PLATCHANGE", plat: a });
  }
  getData() {}
  showLogin() {}
  getFreight() {
    let { height, weight, long, width, countryId } = this.state;
    height = height ? Number(height) : 0;
    weight = weight ? Number(weight) : 1000;
    long = long ? Number(long) : 0;
    width = width ? Number(width) : 0;

    let ary = [];
    let gt90 = (w, h, l, kg) => {
      //w 宽 h 高 l长 kg 每公斤金额
      let num = ((h * l * w) / 6000) * kg * (1 + 0.2) + 10;
      return num.toFixed(2);
    };
    let lt90 = (w, kg, pc) => {
      //w 重量 kg 每公斤金额 pc挂号费
      let num = ((kg / 1000) * w + pc) * (1 + 0.2) + 10;
      return num.toFixed(2);
    };

    countryList.map((a, b) => {
      let obj = {}; // dhlpps dhlzx sfxb1顺丰国际小包 sfzd顺丰国际专递 sfxb2顺丰经济小包
      obj.country = country[a];
      if (countryId && country[a] !== countryId) {
        return null;
      }
      if (countryFreight[a]) {
        if (height + long + width > 90) {
          // countryFreight[a]
          if (countryFreight[a].dhl.pps) {
            if (countryFreight[a].dhl.pps.weightLimit) {
              obj.dhlppslimit = countryFreight[a].dhl.pps.weightLimit;
              if (weight > countryFreight[a].dhl.pps.weightLimit) {
                let dhlppskggt = countryFreight[a].dhl.pps.gt.kg;
                let dhlppsgt = gt90(width, height, long, dhlppskggt);
                obj.dhlpps = dhlppsgt;
              } else {
                let dhlppskglt = countryFreight[a].dhl.pps.lt.kg;

                let dhlppslt = gt90(width, height, long, dhlppskglt);
                obj.dhlpps = dhlppslt;
              }
            } else {
              let dhlppskg = countryFreight[a].dhl.pps.kg;
              let dhlpps = gt90(width, height, long, dhlppskg);

              obj.dhlpps = dhlpps;
            }
            obj.dhlppstime = countryFreight[a].dhl.pps.durTime;
          }
          //DHL专线
          if (countryFreight[a].dhl.zx) {
            if (countryFreight[a].dhl.zx.weightLimit) {
              obj.dhlzxlimit = countryFreight[a].dhl.zx.weightLimit;
              if (weight > countryFreight[a].dhl.zx.weightLimit) {
                let dhlzxkggt = countryFreight[a].dhl.zx.gt.kg;
                let dhlzxgt = gt90(width, height, long, dhlzxkggt);
                obj.dhlzx = dhlzxgt;
              } else {
                let dhlzxkglt = countryFreight[a].dhl.zx.lt.kg;
                let dhlzxlt = gt90(width, height, long, dhlzxkglt);
                obj.dhlzx = dhlzxlt;
              }
            } else {
              let dhlzxkg = countryFreight[a].dhl.pps.kg;
              let dhlzx = gt90(width, height, long, dhlzxkg);

              obj.dhlzx = dhlzx;
            }
            obj.dhlzxtime = countryFreight[a].dhl.zx.durTime;
          }

          //顺丰国际小包
          if (countryFreight[a].sf.xb1) {
            let sfxbkg = countryFreight[a].sf.xb1.kg;
            let sfxb1 = gt90(width, height, long, sfxbkg);
            obj.sfxb1 = sfxb1;
            obj.sfxb1Time = countryFreight[a].sf.xb1.durTime;
          }
          //顺丰经济小包
          if (countryFreight[a].sf.xb2) {
            let sfxbkg = countryFreight[a].sf.xb2.kg;
            let sfxb2 = gt90(width, height, long, sfxbkg);
            obj.sfxb2 = sfxb2;
            obj.sfxb2Time = countryFreight[a].sf.xb2.durTime;
          }
        } else {
          if (countryFreight[a].dhl.pps) {
            if (countryFreight[a].dhl.pps.weightLimit) {
              if (weight > countryFreight[a].dhl.pps.weightLimit) {
                let dhlppspcgt = countryFreight[a].dhl.pps.gt.pc;
                let dhlppskggt = countryFreight[a].dhl.pps.gt.kg;
                let dhlppsgt = lt90(weight, dhlppskggt, dhlppspcgt);
                obj.dhlpps = dhlppsgt;
              } else {
                let dhlppskglt = countryFreight[a].dhl.pps.lt.kg;
                let dhlppspclt = countryFreight[a].dhl.pps.lt.pc;

                let dhlppslt = lt90(weight, dhlppskglt, dhlppspclt);
                obj.dhlpps = dhlppslt;
              }

              obj.dhlppslimit = countryFreight[a].dhl.pps.weightLimit;
            } else {
              let dhlppskg = countryFreight[a].dhl.pps.kg;
              let dhlppspc = countryFreight[a].dhl.pps.pc;
              let dhlpps = lt90(weight, dhlppskg, dhlppspc);

              obj.dhlpps = dhlpps;
            }
            obj.dhlppstime = countryFreight[a].dhl.pps.durTime;
          }

          if (countryFreight[a].dhl.zx) {
            if (countryFreight[a].dhl.zx.weightLimit) {
              if (weight > countryFreight[a].dhl.zx.weightLimit) {
                let dhlzxkggt = countryFreight[a].dhl.zx.gt.kg;
                let dhlzxpcgt = countryFreight[a].dhl.zx.gt.pc;
                let dhlzxgt = lt90(weight, dhlzxkggt, dhlzxpcgt);
                obj.dhlzx = dhlzxgt;
              } else {
                let dhlzxkglt = countryFreight[a].dhl.zx.lt.kg;
                let dhlzxpclt = countryFreight[a].dhl.zx.lt.pc;
                let dhlzxlt = lt90(weight, dhlzxkglt, dhlzxpclt);
                obj.dhlzx = dhlzxlt;
              }

              obj.dhlzxlimit = countryFreight[a].dhl.zx.weightLimit;
            } else {
              let dhlzxkg = countryFreight[a].dhl.zx.kg;
              let dhlzxpc = countryFreight[a].dhl.zx.pc;
              let dhlzx = lt90(weight, dhlzxkg, dhlzxpc);

              obj.dhlzx = dhlzx;
            }
            obj.dhlzxtime = countryFreight[a].dhl.zx.durTime;
          }
          //顺丰国际小包
          if (countryFreight[a].sf.xb1) {
            let sfxbkg = countryFreight[a].sf.xb1.kg;
            let sfxbpc = countryFreight[a].sf.xb1.pc;
            let sfxb1 = lt90(weight, sfxbkg, sfxbpc);
            obj.sfxb1 = sfxb1;
            obj.sfxb1Time = countryFreight[a].sf.xb1.durTime;
          }
          //顺丰经济小包
          if (countryFreight[a].sf.xb2) {
            let sfxbkg = countryFreight[a].sf.xb2.kg;
            let sfxbpc = countryFreight[a].sf.xb2.pc;
            let sfxb2 = lt90(weight, sfxbkg, sfxbpc);
            obj.sfxb2 = sfxb2;
            obj.sfxb2Time = countryFreight[a].sf.xb2.durTime;
          }
        }
        //顺丰专线
        if (countryFreight[a].sf.zd) {
          let {
            weightLimit,
            lt,
            gt,
            perWeight,
            limit,
            gtLimit,
            ltLimit
          } = countryFreight[a].sf.zd;
          // 英国按照重量划档收费
          if (limit) {
            if (weight > limit) {
              let { kg, pc, perWeight } = gtLimit;
              let w = Math.ceil(weight / perWeight) * perWeight;
              let sfzd1 = lt90(w, kg, pc);
              let sfzd2 = (height * long * width) / 6000;
              obj.sfzd = sfzd1 > sfzd2 ? sfzd1 : (sfzd2 * 1.2 + 10).toFixed(2);
            } else {
              let { kg, pc } = ltLimit;
              weight = weight < 50 ? 50 : weight;
              let sfzd1 = lt90(weight, kg, pc);
              let sfzd2 = (height * long * width) / 6000;
              obj.sfzd = sfzd1 > sfzd2 ? sfzd1 : (sfzd2 * 1.2 + 10).toFixed(2);
            }
          } else {
            if (weight > weightLimit) {
              let n = Math.ceil((weight - weightLimit) / perWeight);
              let sfzd1 = lt + gt * n;
              let sfzd2 = (height * long * width) / 6000;
              obj.sfzd =
                sfzd1 > sfzd2
                  ? (sfzd1 * 1.2 + 10).toFixed(2)
                  : (sfzd2 * 1.2 + 10).toFixed(2);
            } else {
              let sfzd1 = lt;
              let sfzd2 = (height * long * width) / 6000;
              obj.sfzd =
                sfzd1 > sfzd2
                  ? (sfzd1 * 1.2 + 10).toFixed(2)
                  : (sfzd2 * 1.2 + 10).toFixed(2);
            }
          }
        }
      }

      ary.push(obj);
    });
    this.setState({
      freight: ary
    });
  }
  render() {
    const {
      islogin,
      weight,
      countryId,
      long,
      width,
      height,
      freight
    } = this.state;
    // console.log(this.props.state);

    return (
      <div className="home orders">
        {islogin ? (
          <div className="home_left">
            <SideBar {...this.props} />
          </div>
        ) : null}

        <div
          className="home_right"
          style={{ paddingLeft: islogin ? "118px" : 0 }}
        >
          <Topbar
            {...this.props}
            islogin={this.state.islogin}
            changePlat={a => {
              this.changePlat(a);
            }}
          />
          <ReturnTop />

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
                  <input
                    type="number"
                    value={long}
                    onChange={e => {
                      this.setState({
                        long: e.target.value
                      });
                    }}
                  />
                  <span style={{ marginLeft: "8px" }}>cm</span>
                </li>
                <li className="item">
                  <div className="title">宽</div>
                  <input
                    type="number"
                    value={width}
                    onChange={e => {
                      this.setState({
                        width: e.target.value
                      });
                    }}
                  />
                  <span style={{ marginLeft: "8px" }}>cm</span>
                </li>
                <li className="item">
                  <div className="title">高</div>
                  <input
                    type="number"
                    value={height}
                    onChange={e => {
                      this.setState({
                        height: e.target.value
                      });
                    }}
                  />
                  <span style={{ marginLeft: "8px" }}>cm</span>
                </li>
              </ul>
              <ul
                className="flexul"
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <li className="item">
                  <div className="title">国家</div>
                  <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                      {countryId === "" ? "全部" : countryId}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      {countryList.map((a, b) => {
                        return (
                          <Dropdown.Item
                            key={b}
                            onClick={() => {
                              this.setState({
                                countryId: country[a]
                              });
                            }}
                          >
                            {country[a]}
                          </Dropdown.Item>
                        );
                      })}
                    </Dropdown.Menu>
                  </Dropdown>
                </li>
                <li className="item">
                  <div className="title">重量</div>
                  <input
                    type="number"
                    placeholder="默认值为1000g"
                    value={weight}
                    onChange={e => {
                      this.setState({
                        weight: e.target.value
                      });
                    }}
                  />
                  <span style={{ marginLeft: "8px" }}>g</span>
                </li>
              </ul>
              <div className="btns" style={{ marginBottom: "15px" }}>
                <Button
                  onClick={() => {
                    this.getFreight();
                  }}
                >
                  运费测算
                </Button>
              </div>
            </div>
            <div className="table">
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>国家</th>
                    <th>闪质合作DHL1</th>
                    <th>闪质合作DHL2</th>
                    <th>闪质合作顺丰1</th>
                    <th>闪质合作顺丰2</th>
                    <th>闪质合作顺丰3</th>
                  </tr>
                </thead>
                <tbody>
                  {freight.map((a, b) => {
                    return (
                      <tr key={b}>
                        <td>{a.country}</td>
                        <td>
                          {a.dhlpps ? `${a.dhlpps}元` : "-"}
                          {a.dhlppstime ? `(${a.dhlppstime}天)` : null}
                        </td>
                        <td>
                          {a.dhlzx ? `${a.dhlzx}元` : "-"}
                          {a.dhlzxtime ? `(${a.dhlzxtime}天)` : null}
                        </td>
                        <td>
                          {a.sfxb1 ? `${a.sfxb1}元` : "-"}
                          {a.sfxb1Time ? `(${a.sfxb1Time}天)` : null}
                        </td>
                        <td>
                          {a.sfxb2 ? `${a.sfxb2}元` : "-"}
                          {a.sfxb2Time ? `(${a.sfxb2Time}天)` : null}
                        </td>
                        <td>{a.sfzd ? `${a.sfzd}元` : "-"}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </div>
          </div>
          <Footer />
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
