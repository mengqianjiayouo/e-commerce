//kg 代表每kg运费，pc代表挂号费，weightLimt首重,perWeight续重，lt小于首重费用，gt大于首重每续重的金额。
let countryFreight = {
  AT: {
    sf: {
      xb1: {
        pc: 20,
        kg: 75,
        durTime: "6-10"
      },
      zd: {
        weightLimit: 500,
        perWeight: 500,
        lt: 128,
        gt: 26
      }
    },
    dhl: {
      pps: { pc: 29.2, kg: 56.8, durTime: "8-10" }
    }
  },
  BE: {
    sf: {
      xb1: {
        pc: 18,
        kg: 75,
        durTime: "6-10"
      },
      xb2: {
        pc: 13,
        kg: 110,
        durTime: "7-12"
      },
      zd: {
        weightLimit: 500,
        perWeight: 500,

        lt: 115,
        gt: 26
      }
    },
    dhl: {
      pps: { pc: 29.3, kg: 75.7, durTime: "7-10" }
    }
  },
  HR: {
    sf: {
      xb1: {
        pc: 22,
        kg: 80
        // durTime: "8-10"
      },
      zd: {
        perWeight: 500,

        weightLimit: 500,
        lt: 190,
        gt: 27
      }
    },
    dhl: {
      pps: { pc: 21.4, kg: 63.2, durTime: "7-10" }
    }
  },
  CZ: {
    sf: {
      xb1: {
        pc: 18,
        kg: 70,
        durTime: "7-10"
      },
      xb2: {
        pc: 13,
        kg: 110,
        durTime: "7-12"
      },
      zd: {
        perWeight: 500,

        weightLimit: 500,
        lt: 128,
        gt: 26
      }
    },
    dhl: {
      pps: { pc: 21.1, kg: 62.8, durTime: "6-9" }
    }
  },
  DK: {
    sf: {
      xb1: {
        pc: 19,
        kg: 75,
        durTime: "6-10"
      },
      xb2: {
        pc: 20,
        kg: 80,
        durTime: "10-15"
      },
      zd: {
        perWeight: 500,

        weightLimit: 500,
        lt: 130,
        gt: 28
      }
    },
    dhl: {
      pps: { pc: 19.8, kg: 75.9, durTime: "8-10" }
    }
  },
  FI: {
    sf: {
      xb1: {
        pc: 20,
        kg: 90,
        durTime: "10-15"
      },
      xb2: {
        pc: 13,
        kg: 115,
        durTime: "6-13"
      },
      zd: {
        perWeight: 500,

        weightLimit: 500,
        lt: 237,
        gt: 26
      }
    },
    dhl: {
      pps: { pc: 40.7, kg: 76.3, durTime: "7-9" }
    }
  },
  FR: {
    sf: {
      xb1: {
        pc: 17,
        kg: 80,
        durTime: "6-10"
      },
      xb2: {
        pc: 13,
        kg: 110,
        durTime: "7-12"
      },
      zd: {
        perWeight: 500,

        weightLimit: 500,
        lt: 115,
        gt: 26
      }
    },
    dhl: {
      pps: { pc: 20, kg: 76.9, durTime: "5-9" },
      zx: { pc: 26, kg: 55, durTime: "4-7" }
    }
  },
  IL: {
    sf: {
      xb1: {
        pc: 24,
        kg: 85
      },
      xb2: {
        pc: 13,
        kg: 120,
        durTime: "8-15"
      }
    },
    dhl: {
      pps: { pc: 21.8, kg: 83.7, durTime: "7-10" },
      zx: { pc: 19, kg: 81, durTime: "7-10" }
    }
  },
  DE: {
    sf: {
      xb1: {
        pc: 18,
        kg: 80,
        durTime: "6-10"
      },
      xb2: {
        pc: 17.5,
        kg: 100,
        durTime: "7-12"
      },
      zd: {
        perWeight: 500,

        weightLimit: 500,
        lt: 115,
        gt: 26
      }
    },
    dhl: {
      pps: {
        weightLimit: 400,
        gt: {
          pc: 21,
          kg: 60.8,
          durTime: "8-13"
        },
        lt: {
          pc: 16.2,
          kg: 78.8,
          durTime: "8-11"
        }
      },
      zx: {
        weightLimit: 400,
        gt: {
          pc: 20,
          kg: 50
        },
        lt: {
          pc: 25,
          kg: 42
        }
      }
    }
  },
  CA: {
    sf: {
      xb1: {
        pc: 22,
        kg: 115,
        durTime: "7-12"
      },
      xb2: {
        pc: 21,
        kg: 145,
        durTime: "12-22"
      }
    },
    dhl: {
      pps: {
        pc: 22.9,
        kg: 91.5
      },
      zx: {
        weightLimit: 300,
        gt: {
          pc: 28,
          kg: 60
        },
        lt: {
          pc: 25,
          kg: 75
        }
      }
    }
  },
  US: {
    sf: {
      xb1: {
        pc: 14,
        kg: 138,
        durTime: "7-12"
      },
      xb2: {
        pc: 12,
        kg: 100,
        durTime: "12-20"
      },
      zd: {
        limit: 3000,
        gtLimit: {
          kg: 88,
          pc: 15,
          perWeight: 500
        },
        ltLimit: {
          kg: 88,
          pc: 15,
          perWeight: 1,
          minWeight: 50
        }
      }
    },
    dhl: {
      pps: {
        pc: 19,
        kg: 92.6
      },
      zx: {
        weightLimit: 450,
        gt: {
          pc: 79,
          kg: 102
        },
        lt: {
          pc: 44,
          kg: 120
        }
      }
    }
  },
  GR: {
    sf: {
      xb1: {
        pc: 24,
        kg: 100,
        durTime: "7-10"
      },
      xb2: {
        pc: 13,
        kg: 115,
        durTime: "8-15"
      },
      zd: {
        perWeight: 500,

        weightLimit: 500,
        lt: 252,
        gt: 32
      }
    },
    dhl: {
      pps: {
        pc: 23.7,
        kg: 64.1,
        durTime: "13-15"
      }
    }
  },
  HU: {
    sf: {
      xb1: {
        pc: 16,
        kg: 80,
        durTime: "7-10"
      },
      xb2: {
        pc: 13,
        kg: 115,
        durTime: "7-12"
      },
      zd: {
        perWeight: 500,

        weightLimit: 500,
        lt: 129,
        gt: 26
      }
    },
    dhl: {
      pps: {
        pc: 22.6,
        kg: 64.4,
        durTime: "6-9"
      }
    }
  },
  IE: {
    sf: {
      xb1: {
        pc: 21,
        kg: 85,
        durTime: "6-10"
      },
      zd: {
        perWeight: 500,

        weightLimit: 500,
        lt: 151,
        gt: 26
      }
    },
    dhl: {
      pps: {
        pc: 46.5,
        kg: 55.1,
        durTime: "8-13"
      }
    }
  },
  IT: {
    sf: {
      xb1: {
        pc: 24,
        kg: 78,
        durTime: "7-10"
      },
      xb2: {
        pc: 20,
        kg: 88,
        durTime: "7-12"
      },
      zd: {
        perWeight: 500,

        weightLimit: 500,
        lt: 115,
        gt: 26
      }
    },
    dhl: {
      pps: {
        pc: 30.7,
        kg: 60.9,
        durTime: "9-15"
      }
    }
  },
  MX: {
    sf: {
      xb1: {
        pc: 20,
        kg: 100
      },
      xb2: {
        pc: 12,
        kg: 140,
        durTime: "12-22"
      }
    },
    dhl: {
      pps: {
        pc: 28.5,
        kg: 80.1
      },
      zx: {
        pc: 70,
        kg: 36
      }
    }
  },
  AU: {
    sf: {
      xb1: {
        pc: 28,
        kg: 70,
        durTime: "5-8"
      },
      xb2: {
        pc: 20,
        kg: 88,
        durTime: "7-12"
      },
      zd: {
        perWeight: 500,

        weightLimit: 500,
        lt: 70,
        gt: 36,
        maxWeight: 27000
      }
    },
    dhl: {
      pps: {
        pc: 25.6,
        kg: 117.5
      },
      zx: {
        pc: 30,
        kg: 64
      }
    }
  },
  NL: {
    sf: {
      xb1: {
        pc: 27,
        kg: 55
      },
      xb2: {
        pc: 19,
        kg: 65,
        durTime: "7-12"
      },
      zd: {
        perWeight: 500,

        weightLimit: 500,
        lt: 115,
        gt: 26
      }
    },
    dhl: {
      pps: {
        pc: 29.5,
        kg: 68.8
      }
    }
  },
  NO: {
    sf: {
      xb1: {
        pc: 34,
        kg: 80,
        durTime: "10-15"
      },
      xb2: {
        pc: 13,
        kg: 120,
        durTime: "7-12"
      }
    },
    dhl: {
      pps: {
        pc: 39.7,
        kg: 69.7
      }
    }
  },
  PL: {
    sf: {
      xb1: {
        pc: 6.8,
        kg: 96,
        durTime: "10-15"
      },
      xb2: {
        pc: 13,
        kg: 115,
        durTime: "7-12"
      },
      zd: {
        perWeight: 500,

        weightLimit: 500,
        lt: 115,
        gt: 26
      }
    },
    dhl: {
      pps: {
        pc: 22.2,
        kg: 61.1
      }
    }
  },
  PT: {
    sf: {
      xb1: {
        pc: 18,
        kg: 85,
        durTime: "7-10"
      },
      zd: {
        perWeight: 500,

        weightLimit: 500,
        lt: 148,
        gt: 31
      }
    },
    dhl: {
      pps: {
        pc: 23.7,
        kg: 63.4
      }
    }
  },
  RU: {
    sf: {
      xb1: {
        pc: 10,
        kg: 108,
        durTime: "15-25"
      },
      xb2: {
        pc: 17,
        kg: 95,
        durTime: "8-22"
      },
      zd: {
        perWeight: 100,

        weightLimit: 100,
        lt: 50,
        gt: 10
      }
    },
    dhl: {
      pps: {
        pc: 28.5,
        kg: 55.8
      }
    }
  },
  SK: {
    sf: {
      xb1: {
        pc: 17,
        kg: 110,
        durTime: "7-10"
      },
      xb2: {
        pc: 18,
        kg: 70,
        durTime: "7-12"
      },
      zd: {
        perWeight: 500,

        weightLimit: 500,
        lt: 148,
        gt: 26
      }
    },
    dhl: {
      pps: {
        pc: 29.1,
        kg: 78.3
      }
    }
  },
  SI: {
    sf: {
      xb1: {
        pc: 37,
        kg: 55,
        durTime: "7-10"
      },
      xb2: {
        pc: 18,
        kg: 70,
        durTime: "7-12"
      },
      zd: {
        perWeight: 500,

        weightLimit: 500,
        lt: 132,
        gt: 26
      }
    },
    dhl: {
      pps: {
        pc: 36.7,
        kg: 78.6
      }
    }
  },
  ES: {
    sf: {
      xb1: {
        pc: 20,
        kg: 80,
        durTime: "7-10"
      },
      zd: {
        perWeight: 500,

        weightLimit: 500,
        lt: 115,
        gt: 26
      }
    },
    dhl: {
      pps: {
        pc: 23.7,
        kg: 73.6
      }
    }
  },
  SE: {
    sf: {
      xb1: {
        pc: 20,
        kg: 100,
        durTime: "10-15"
      },
      xb2: {
        pc: 19,
        kg: 80,
        durTime: "7-12"
      },
      zd: {
        perWeight: 500,

        weightLimit: 500,
        lt: 175,
        gt: 26
      }
    },
    dhl: {
      pps: {
        pc: 20.3,
        kg: 73.7
      }
    }
  },
  CH: {
    sf: {
      xb1: {
        pc: 18,
        kg: 75,
        durTime: "7-10"
      },
      xb2: {
        pc: 13,
        kg: 115,
        durTime: "7-12"
      }
    },
    dhl: {
      pps: {
        pc: 29.9,
        kg: 62.3
      }
    }
  },
  TR: {
    sf: {
      xb1: {
        pc: 20,
        kg: 80
      },
      xb2: {
        pc: 13,
        kg: 115,
        durTime: "10-15"
      }
    },
    dhl: {
      pps: {
        pc: 21.2,
        kg: 74.6
      }
    }
  },
  UA: {
    sf: {
      xb1: {
        pc: 5,
        kg: 107,
        durTime: "10-15"
      },
      xb2: {
        pc: 13,
        kg: 130,
        durTime: "8-15"
      },
      zd: {
        perWeight: 100,

        weightLimit: 100,
        lt: 50,
        gt: 10
      }
    },
    dhl: {
      pps: {
        pc: 14.8,
        kg: 116.7
      }
    }
  },
  GB: {
    sf: {
      xb1: {
        pc: 20,
        kg: 60,
        durTime: "6-10"
      },
      xb2: {
        pc: 19,
        kg: 60,
        durTime: "7-12"
      },
      zd: {
        limit: 2000,
        gtLimit: {
          kg: 62,
          pc: 16,
          perWeight: 500
        },
        ltLimit: {
          kg: 50,
          pc: 16,
          perWeight: 1,
          minWeight: 50
        }
      }
    },
    dhl: {
      pps: {
        pc: 19.9,
        kg: 63.4
      }
    }
  },
  America: {
    sf: {
      xb1: {
        pc: 17,
        kg: 217
      },
      zd: {
        perWeight: 500,

        weightLimit: 500,
        lt: 128,
        gt: 26
      }
    },
    dhl: {}
  },
  BR: {
    sf: {
      xb1: {
        pc: 23,
        kg: 100
      },
      xb2: {
        pc: 13,
        kg: 165,
        durTime: "13-25"
      }
    },
    dhl: {
      pps: {
        pc: 21.9,
        kg: 94.5
      }
    }
  },
  CL: {
    sf: {
      xb1: {
        pc: 20,
        kg: 120
      },
      xb2: {
        pc: 12,
        kg: 150,
        durTime: "13-25"
      }
    },
    dhl: {
      pps: {
        pc: 15.3,
        kg: 130.7
      }
    }
  },
  Asia: {
    sf: {},
    dhl: {}
  },
  NZ: {
    sf: {
      xb1: {
        pc: 14,
        kg: 180
      },
      xb2: {
        pc: 13,
        kg: 110,
        durTime: "10-15"
      }
    },
    dhl: {
      pps: {
        pc: 23.7,
        kg: 85
      }
    }
  },
  TH: {
    sf: {
      xb1: {
        pc: 23,
        kg: 100
      },
      xb2: {
        pc: 11,
        kg: 65,
        durTime: "6-10"
      }
    },
    dhl: {
      pps: {
        pc: 27.9,
        kg: 61.2
      }
    }
  },
  ID: {
    sf: {
      xb1: {
        pc: 17,
        kg: 155
      },
      xb2: {
        pc: 11,
        kg: 65,
        durTime: "15-22"
      }
    },
    dhl: {
      pps: {
        pc: 21.5,
        kg: 102.6
      }
    }
  },
  PH: {
    sf: {
      xb1: {
        pc: 18,
        kg: 217
      }
    },
    dhl: {
      pps: {
        pc: 15,
        kg: 103.9
      }
    }
  },
  VN: {
    sf: {
      xb1: {
        pc: 14,
        kg: 180
      },
      xb2: {
        pc: 11,
        kg: 65,
        durTime: "6-10"
      }
    },
    dhl: {
      pps: {
        pc: 14.8,
        kg: 102.5
      }
    }
  },
  MY: {
    sf: {
      xb1: {
        pc: 14,
        kg: 180
      },
      xb2: {
        pc: 13,
        kg: 95,
        durTime: "6-10"
      }
    },
    dhl: {
      pps: {
        pc: 15.5,
        kg: 101.8
      }
    }
  },
  SG: {
    sf: {
      xb1: {
        pc: 15,
        kg: 130
      },
      xb2: {
        pc: 11,
        kg: 65,
        durTime: "6-10"
      }
    },
    dhl: {
      pps: {
        pc: 27.3,
        kg: 36.2
      }
    }
  },
  TW: {
    sf: {},
    dhl: {
      pps: {
        pc: 14.7,
        kg: 96.1
      }
    }
  },
  JP: {
    sf: {
      xb1: {
        pc: 21,
        kg: 90
      },
      xb2: {
        pc: 11,
        kg: 50,
        durTime: "6-10"
      }
    },
    dhl: {
      pps: {
        pc: 14.8,
        kg: 66.4
      }
    }
  },
  Other: {
    sf: {
      xb1: {
        pc: 20,
        kg: 217,
        durTime: "6-22"
      }
    },
    dhl: {
      pps: {
        pc: 18.4,
        kg: 156.6
      }
    }
  }
};
let countryList = [
  "AT",
  "BE",
  "HR",
  "CZ",
  "DK",
  "FI",
  "FR",
  "DE",
  "CA",
  "GR",
  "HU",
  "IE",
  "IL",
  "IT",
  "MX",
  "AU",
  "US",
  "NL",
  "NO",
  "PL",
  "PT",
  "RU",
  "SK",
  "SI",
  "ES",
  "SE",
  "CH",
  "TR",
  "UA",
  "GB",
  "America",
  "BR",
  "CL",
  "Asia",
  "NZ",
  "TH",
  "ID",
  "PH",
  "VN",
  "MY",
  "SG",
  "TW",
  "JP",
  "Other"
];
let country = {
  AT: "奥地利", //
  BE: "比利时", //
  HR: "克罗地亚", //
  CZ: "捷克", //
  DK: "丹麦", //
  FI: "芬兰", //
  FR: "法国", //
  DE: "德国", //
  GR: "希腊", //
  HU: "匈牙利", //
  IE: "爱尔兰", //
  IL: "以色列", //
  IT: "意大利", //
  NL: "荷兰", //
  NO: "挪威", //
  PL: "波兰", //
  PT: "葡萄牙", //
  RU: "俄罗斯", //
  SK: "斯洛伐克", //
  SI: "斯洛文尼亚", //
  ES: "西班牙", //
  SE: "瑞典", //
  CH: "瑞士", //
  TR: "土耳其", //
  UA: "乌克兰", //
  GB: "英国", //
  America: "美洲", //
  US: "美国", //
  CA: "加拿大", //
  BR: "巴西", //
  CL: "智利", //
  MX: "墨西哥", //
  Asia: "亚洲", //
  AU: "澳大利亚", //
  NZ: "新西兰", //
  TH: "泰国", //
  ID: "印尼", //
  PH: "菲律宾", //
  VN: "越南", //
  MY: "马来西亚", //
  SG: "新加坡", //
  TW: "台湾", //
  JP: "日本", //
  Other: "其他国家", //
  AE: "阿拉伯联合酋长国（U.A.E.）",
  IN: "印度"
};
export { countryFreight, country, countryList };
