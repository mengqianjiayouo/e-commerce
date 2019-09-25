import {
  countryFreight,
  country,
  countryList,
  sfxb3Profit,
  sfzdProfit,
  sflyProfit,
  sfxb1Profit,
  sfbyProfit,
  sfzxProfit
} from "./countryFreight";
export default function computeFreight(long, width, height, weight, countryId) {
  let ary = [];
  let gt90 = (w, h, l, kg, number = 6000, profit = 1) => {
    //w 宽 h 高 l长 kg 每公斤金额
    let num = ((h * l * w) / number) * (kg * profit) * (1 + 0.2) + 10;
    return num.toFixed(2);
  };
  let lt90 = (w, kg, pc, profit = 1) => {
    //w 重量 kg 每公斤金额 pc挂号费
    let num = ((kg / 1000) * w * profit + pc) * (1 + 0.2) + 10;
    return num.toFixed(2);
  };
  let Dhl = (w, kg, pc, profit = 1) => {
    //w 重量 kg 每公斤金额 pc挂号费
    let num = (kg / 1000) * w * profit + pc + 10;
    return num.toFixed(2);
  };

  let sfXb3lt90 = (weightLimit, perWeight, gt, lt, pc, profit = 1) => {
    if (weight > weightLimit) {
      let num =
        (lt + Math.ceil((weight - weightLimit) / perWeight) * gt) * profit + pc;
      return num.toFixed(2);
    } else {
      let num = lt * profit + pc;
      return num.toFixed(2);
    }
  };
  let compute = (obj, name, isxb3) => {
    let {
      isBubbles,
      maxWeight,
      maxSize,
      equalType,
      maxLong,
      maxWidth,
      maxHeight,
      bubbleNumber,
      sideType,
      weightLimit,
      gt,
      lt,
      kg,
      pc,
      durTime,
      limit,
      profit,
      perWeight
    } = obj;
    if (limit) {
      weight = weight > limit ? weight : limit;
    }
    profit = profit ? profit : 1;
    let object = {};
    if (isBubbles) {
      if (weight > maxWeight) {
        object[name] = `重量应小于等于${maxWeight}g`;
        object[name + "weightError"] = true;
      } else if (
        (equalType === "lt" && maxSize && height + long + width >= maxSize) ||
        (equalType !== "lt" && maxSize && height + long + width > maxSize) ||
        (sideType === "lt" && width >= maxWidth) ||
        (sideType === "lt" && long >= maxLong) ||
        (sideType === "lt" && height >= maxHeight) ||
        (sideType !== "lt" && width > maxWidth) ||
        (sideType !== "lt" && long > maxLong) ||
        (sideType !== "lt" && height > maxHeight)
      ) {
        if (
          width > 175 ||
          long > 175 ||
          height > 175 ||
          height + long + width > 130
        ) {
          object[name] = `尺寸过大`;
          object[name + "SizeError"] = true;
        } else {
          if (isxb3) {
            object[name] = sfXb3lt90(
              weightLimit,
              perWeight,
              gt,
              lt,
              pc,
              profit
            );
            object[name + `limit`] = weightLimit;
          } else {
            if (weightLimit) {
              if (weight > weightLimit) {
                /* object[name] = gt90( width,height,long,gt.kg,bubbleNumber,profit); */
                if (name === "dhlpps" || name === "dhlzx") {
                  object[name] = Dhl(weight, gt.kg, gt.pc, profit);
                } else {
                  object[name] = lt90(weight, gt.kg, gt.pc, profit);
                }
              } else {
                /* object[name] = gt90( width,height,long,lt.kg,bubbleNumber,profit); */
                if (name === "dhlpps" || name === "dhlzx") {
                  object[name] = Dhl(weight, lt.kg, lt.pc, profit);
                } else {
                  object[name] = lt90(weight, lt.kg, lt.pc, profit);
                }
              }
              object[name + `limit`] = weightLimit;
            } else {
              /* object[name] = gt90(width, height, long, kg, bubbleNumber, profit); */
              if (name === "dhlpps" || name === "dhlzx") {
                object[name] = Dhl(weight, kg, pc, profit);
              } else {
                object[name] = lt90(weight, kg, pc, profit);
              }
            }
          }
        }

        object[name + `time`] = durTime;
      } else {
        if (isxb3) {
          object[name] = sfXb3lt90(weightLimit, perWeight, gt, lt, pc, profit);
          object[name + `limit`] = weightLimit;
        } else {
          if (weightLimit) {
            if (weight > weightLimit) {
              if (name === "dhlpps" || name === "dhlzx") {
                object[name] = Dhl(weight, gt.kg, gt.pc, profit);
              } else {
                object[name] = lt90(weight, gt.kg, gt.pc, profit);
              }
            } else {
              if (name === "dhlpps" || name === "dhlzx") {
                object[name] = Dhl(weight, lt.kg, lt.pc, profit);
              } else {
                object[name] = lt90(weight, lt.kg, lt.pc, profit);
              }
            }
            object[name + `limit`] = weightLimit;
          } else {
            if (name === "dhlpps" || name === "dhlzx") {
              object[name] = Dhl(weight, kg, pc, profit);
            } else {
              object[name] = lt90(weight, kg, pc, profit);
            }
          }
        }
        object[name + `time`] = durTime;
        object[name + `profit`] = 1 - profit;
      }
    } else {
      if (equalType === "lt" && maxSize && height + long + width >= maxSize) {
        //检测合计尺寸是否大于限定值
        object[name] = `合计尺寸应小于${maxSize}cm`;
        object[name + "SizeError"] = true;
      } else if (
        equalType !== "lt" &&
        maxSize &&
        height + long + width > maxSize
      ) {
        object[name] = `合计尺寸应小于等于${maxSize}cm`;
        object[name + "SizeError"] = true;
      } else if (sideType === "lt" && width >= maxWidth) {
        object[name] = `宽度应小于${maxWidth}cm`;
        object[name + "widthError"] = true;
      } else if (sideType === "lt" && long >= maxLong) {
        object[name] = `长度应小于${maxLong}cm`;
        object[name + "longError"] = true;
      } else if (sideType === "lt" && height >= maxHeight) {
        object[name] = `高度应小于${maxHeight}cm`;
        object[name + "heightError"] = true;
      } else if (sideType !== "lt" && width > maxWidth) {
        object[name] = `宽度应小于等于${maxWidth}cm`;
        object[name + "widthError"] = true;
      } else if (sideType !== "lt" && long > maxLong) {
        object[name] = `长度应小于等于${maxLong}cm`;
        object[name + "longError"] = true;
      } else if (sideType !== "lt" && height > maxHeight) {
        object[name] = `高度应小于等于${maxHeight}cm`;
        object[name + "heightError"] = true;
      } else if (weight > maxWeight) {
        object[name] = `重量应小于等于${maxWeight}g`;
        object[name + "weightError"] = true;
      } else {
        if (weightLimit) {
          if (weight > weightLimit) {
            if (name === "dhlpps" || name === "dhlzx") {
              object[name] = Dhl(weight, gt.kg, gt.pc, profit);
            } else {
              object[name] = lt90(weight, gt.kg, gt.pc, profit);
            }
          } else {
            if (name === "dhlpps" || name === "dhlzx") {
              object[name] = Dhl(weight, lt.kg, lt.pc, profit);
            } else {
              object[name] = lt90(weight, lt.kg, lt.pc, profit);
            }
          }
          object[name + `limit`] = weightLimit;
        } else {
          if (name === "dhlpps" || name === "dhlzx") {
            object[name] = Dhl(weight, kg, pc, profit);
          } else {
            object[name] = lt90(weight, kg, pc, profit);
          }
        }
        object[name + `time`] = durTime;
        object[name + `profit`] = 1 - profit;
      }
    }
    return object;
  };

  countryList.map((a, b) => {
    let obj = {}; // dhlpps dhlzx sfxb1顺丰国际小包 sfzd顺丰国际专递 sfxb2顺丰经济小包
    obj.country = country[a];
    if (countryId && country[a] !== countryId) {
      return null;
    }
    if (countryFreight[a]) {
      //DHL -pps
      if (countryFreight[a].dhl.pps) {
        let pps = compute(countryFreight[a].dhl.pps, "dhlpps");
        obj = { ...obj, ...pps };
      }
      //DHL-专线
      if (countryFreight[a].dhl.zx) {
        let zx = compute(countryFreight[a].dhl.zx, "dhlzx");
        obj = { ...obj, ...zx };
      }
      //顺丰国际小包
      if (countryFreight[a].sf.xb1) {
        let limit = 10;
        if (a === "US") {
          limit = 100;
        }
        if (a === "RU") {
          limit = 5;
        }
        if (a === "FI" || a === "SE" || a === "NO" || a === "PL") {
          limit = 50;
        }
        let profit = 1;
        sfxb1Profit.map(i => {
          if (i.country.indexOf(a) !== -1) {
            profit = i.profit;
          }
        });
        let xb1 = compute(
          { ...countryFreight[a].sf.xb1, limit, profit },
          "sfxb1"
        );
        obj = { ...obj, ...xb1 };
      }

      //顺丰经济小包
      if (countryFreight[a].sf.xb2) {
        let limit;
        if (a === "US") {
          limit = 50;
        } else {
          limit = 10;
        }
        let xb2 = compute({ ...countryFreight[a].sf.xb2, limit }, "sfxb2");
        obj = { ...obj, ...xb2 };
      }
      //顺丰精品小包
      if (countryFreight[a].sf.xb3) {
        let profit = 1;
        sfxb3Profit.map(i => {
          if (i.country.indexOf(a) !== -1) {
            profit = i.profit;
          }
        });
        let xb3 = compute(
          { ...countryFreight[a].sf.xb3, profit },
          "sfxb3",
          true
        );
        obj = { ...obj, ...xb3 };
      }
      //顺丰卢邮小包
      if (countryFreight[a].sf.ly) {
        let profit = 1;
        sflyProfit.map(i => {
          if (i.country.indexOf(a) !== -1) {
            profit = i.profit;
          }
        });
        let limit = 50;
        let ly = compute({ ...countryFreight[a].sf.ly, limit, profit }, "sfly");
        obj = { ...obj, ...ly };
      }

      //顺丰比邮小包
      if (countryFreight[a].sf.by) {
        let profit = 1;
        sfbyProfit.map(i => {
          if (i.country.indexOf(a) !== -1) {
            profit = i.profit;
          }
        });
        let limit = 10;
        let by = compute({ ...countryFreight[a].sf.by, limit, profit }, "sfby");
        obj = { ...obj, ...by };
      }

      //顺丰专递
      if (countryFreight[a].sf.zd) {
        let {
          weightLimit,
          lt,
          gt,
          maxHeight,
          maxLong,
          maxWidth,
          perWeight,
          limit,
          maxSize,
          gtLimit,
          ltLimit,
          maxWeight
        } = countryFreight[a].sf.zd;
        // 英国按照重量划档收费
        let profit = 1;
        sfzdProfit.map(i => {
          if (i.country.indexOf(a) !== -1) {
            profit = i.profit;
          }
        });
        obj.sfzdprofit = 1 - profit;
        if (weight > maxWeight) {
          obj.sfzd = `重量应小于等于${maxWeight}g`;
          obj.sfzdweightError = true;
        } else if (
          height > maxHeight ||
          long > maxLong ||
          width > maxWidth ||
          height + long + width > maxSize
        ) {
          obj.sfzd = `尺寸过大`;
          obj.sfzdSizeError = true;
        } else {
          if (limit) {
            if (weight > limit) {
              let { kg, pc, perWeight } = gtLimit;
              let w = Math.ceil(weight / perWeight) * perWeight;
              let sfzd1 = lt90(w, kg, pc, profit);
              // let sfzd2 = ((height * long * width) / 6000) * profit;
              obj.sfzd = sfzd1;
            } else {
              let { kg, pc } = ltLimit;
              weight = weight < 50 ? 50 : weight;
              let sfzd1 = lt90(weight, kg, pc, profit);
              // let sfzd2 = ((height * long * width) / 6000) * profit;
              obj.sfzd = sfzd1;
            }
          } else {
            if (weight > weightLimit) {
              let n = Math.ceil((weight - weightLimit) / perWeight);
              let sfzd1 = (lt + gt * n) * profit;
              // let sfzd2 = ((height * long * width) / 6000) * profit;
              obj.sfzd = sfzd1;
            } else {
              let sfzd1 = lt * profit;
              // let sfzd2 = ((height * long * width) / 6000) * profit;
              obj.sfzd = sfzd1;
            }
          }
        }
      }

      //顺丰国际专线
      if (countryFreight[a].sf.zx) {
        let profit = 1;
        sfzxProfit.map(i => {
          if (i.country.indexOf(a) !== -1) {
            profit = i.profit;
          }
        });
        let limit = 0;
        if (a === "KR" || a === "UA") {
          limit = 10;
        }
        let zx = compute({ ...countryFreight[a].sf.zx, limit, profit }, "sfzx");
        obj = { ...obj, ...zx };
      }
    }
    ary.push(obj);
  });
  return ary;
}
