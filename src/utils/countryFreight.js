//kg 代表每kg运费，pc代表挂号费，weightLimt首重,perWeight续重，lt小于首重费用，gt大于首重每续重的金额。
//sh.xb1国际小包 xb2经济小包 xb3精品小包{lt--首重，gt 每续重价格，kg每kg运费价格，weightLimit首重重量，perWight续重重量，pc挂号费}
//ly 顺丰卢邮小包 by顺丰比邮小包
//isBubbles是否计泡
//zx顺丰国际专线
let countryFreight = {
  AT: {
    sf: {
      xb1: {
        pc: 20,
        kg: 75,
        durTime: "6-10",
        maxWeight: 2000,
        isBubbles: true,
        bubbleNumber: 6000,
        maxSize: 90,
        equalType: "ltqt",
        maxLong: 60,
        maxWidth: 60,
        maxHeight: 60,
        sideType: "lt"
      },
      ly: {
        pc: 22,
        kg: 79,
        maxWeight: 2000,
        isBubbles: true,
        bubbleNumber: 6000,
        maxSize: 90,
        equalType: "ltqt",
        maxLong: 60,
        maxWidth: 60,
        maxHeight: 60,
        sideType: "lt"
      },
      by: {
        pc: 26,
        kg: 57,
        durTime: "6-10",
        maxWeight: 2000,
        isBubbles: true,
        bubbleNumber: 8000,
        maxSize: 90,
        equalType: "ltqt",
        maxLong: 60,
        maxWidth: 60,
        maxHeight: 60,
        sideType: "lt"
      },
      zd: {
        weightLimit: 500,
        perWeight: 500,
        lt: 128,
        gt: 26,
        maxWeight: 30000,
        isBubbles: true,
        bubbleNumber: 6000,
        maxSize: 130,
        equalType: "ltqt",
        maxLong: 175,
        maxWidth: 175,
        maxHeight: 175,
        sideType: "ltqt"
      }
    },
    dhl: {
      pps: {
        pc: 29.2,
        kg: 56.8,
        durTime: "8-10",
        maxWeight: 2000,
        isBubbles: false,
        maxSize: 90,
        equalType: "lt",
        maxLong: 60,
        maxWidth: 60,
        maxHeight: 60,
        sideType: "lt"
      }
    }
  },
  BE: {
    sf: {
      xb1: {
        pc: 18,
        kg: 75,
        durTime: "6-10",
        maxWeight: 2000,
        isBubbles: true,
        bubbleNumber: 6000,
        maxSize: 90,
        equalType: "ltqt",
        maxLong: 60,
        maxWidth: 60,
        maxHeight: 60,
        sideType: "lt"
      },
      by: {
        pc: 18,
        kg: 62,
        durTime: "4-8",
        maxWeight: 2000,
        isBubbles: true,
        bubbleNumber: 8000,
        maxSize: 90,
        equalType: "ltqt",
        maxLong: 60,
        maxWidth: 60,
        maxHeight: 60,
        sideType: "lt"
      },
      xb2: {
        pc: 13,
        kg: 110,
        durTime: "7-12",
        maxWeight: 2000,
        isBubbles: true,
        bubbleNumber: 6000,
        maxSize: 90,
        equalType: "ltqt",
        maxLong: 60,
        maxWidth: 60,
        maxHeight: 60,
        sideType: "lt"
      },
      ly: {
        pc: 20,
        kg: 65,
        maxWeight: 2000,
        isBubbles: true,
        bubbleNumber: 6000,
        maxSize: 90,
        equalType: "ltqt",
        maxLong: 60,
        maxWidth: 60,
        maxHeight: 60,
        sideType: "lt"
      },
      xb3: {
        lt: 4.5,
        gt: 0.09,
        kg: 90,
        weightLimit: 50,
        perWeight: 1,
        pc: 28,
        durTime: "6-10",
        maxWeight: 2000,
        isBubbles: true,
        bubbleNumber: 6000,
        maxSize: 90,
        equalType: "ltqt",
        maxLong: 60,
        maxWidth: 60,
        maxHeight: 60,
        sideType: "lt"
      },
      zd: {
        weightLimit: 500,
        perWeight: 500,
        lt: 115,
        gt: 26,
        maxWeight: 30000,
        isBubbles: true,
        bubbleNumber: 6000,
        maxSize: 130,
        equalType: "ltqt",
        maxLong: 175,
        maxWidth: 175,
        maxHeight: 175,
        sideType: "ltqt"
      }
    },
    dhl: {
      pps: {
        pc: 29.3,
        kg: 75.7,
        durTime: "7-10",
        maxWeight: 2000,
        isBubbles: false,
        maxSize: 90,
        equalType: "lt",
        maxLong: 60,
        maxWidth: 60,
        maxHeight: 60,
        sideType: "lt"
      }
    }
  },
  HR: {
    sf: {
      xb1: {
        pc: 22,
        kg: 80,
        maxWeight: 2000,
        isBubbles: true,
        bubbleNumber: 6000,
        maxSize: 90,
        equalType: "ltqt",
        maxLong: 60,
        maxWidth: 60,
        maxHeight: 60,
        sideType: "lt"
        // durTime: "8-10"
      },
      xb3: {
        lt: 7.75,
        gt: 0.155,
        weightLimit: 50,
        perWeight: 1,
        kg: 155,
        pc: 21,
        durTime: "9-14",
        maxWeight: 2000,
        isBubbles: true,
        bubbleNumber: 6000,
        maxSize: 90,
        equalType: "ltqt",
        maxLong: 60,
        maxWidth: 60,
        maxHeight: 60,
        sideType: "lt"
      },
      by: {
        pc: 17,
        kg: 68,
        durTime: "6-10",
        maxWeight: 2000,
        isBubbles: true,
        bubbleNumber: 8000,
        maxSize: 90,
        equalType: "ltqt",
        maxLong: 60,
        maxWidth: 60,
        maxHeight: 60,
        sideType: "lt"
      },
      zd: {
        perWeight: 500,
        weightLimit: 500,
        lt: 190,
        gt: 27,
        maxWeight: 30000,
        isBubbles: true,
        bubbleNumber: 6000,
        maxSize: 130,
        equalType: "ltqt",
        maxLong: 175,
        maxWidth: 175,
        maxHeight: 175,
        sideType: "ltqt"
      }
    },
    dhl: {
      pps: {
        pc: 21.4,
        kg: 63.2,
        durTime: "7-10",
        maxWeight: 2000,
        isBubbles: false,
        maxSize: 90,
        equalType: "lt",
        maxLong: 60,
        maxWidth: 60,
        maxHeight: 60,
        sideType: "lt"
      }
    }
  },
  CZ: {
    sf: {
      xb1: {
        pc: 18,
        kg: 70,
        durTime: "7-10",
        maxWeight: 2000,
        isBubbles: true,
        bubbleNumber: 6000,
        maxSize: 90,
        equalType: "ltqt",
        maxLong: 60,
        maxWidth: 60,
        maxHeight: 60,
        sideType: "lt"
      },
      xb2: {
        pc: 13,
        kg: 110,
        durTime: "7-12",
        maxWeight: 2000,
        isBubbles: true,
        bubbleNumber: 6000,
        maxSize: 90,
        equalType: "ltqt",
        maxLong: 60,
        maxWidth: 60,
        maxHeight: 60,
        sideType: "lt"
      },
      by: {
        pc: 16,
        kg: 65,
        durTime: "6-10",
        maxWeight: 2000,
        isBubbles: true,
        bubbleNumber: 8000,
        maxSize: 90,
        equalType: "ltqt",
        maxLong: 60,
        maxWidth: 60,
        maxHeight: 60,
        sideType: "lt"
      },
      zd: {
        perWeight: 500,
        weightLimit: 500,
        lt: 128,
        gt: 26,
        maxWeight: 30000,
        isBubbles: true,
        bubbleNumber: 6000,
        maxSize: 130,
        equalType: "ltqt",
        maxLong: 175,
        maxWidth: 175,
        maxHeight: 175,
        sideType: "ltqt"
      }
    },
    dhl: {
      pps: {
        pc: 21.1,
        kg: 62.8,
        durTime: "6-9",
        maxWeight: 2000,
        isBubbles: false,
        maxSize: 90,
        equalType: "lt",
        maxLong: 60,
        maxWidth: 60,
        maxHeight: 60,
        sideType: "lt"
      }
    }
  },
  DK: {
    sf: {
      xb1: {
        pc: 19,
        kg: 75,
        durTime: "6-10",
        maxWeight: 2000,
        isBubbles: true,
        bubbleNumber: 6000,
        maxSize: 90,
        equalType: "ltqt",
        maxLong: 60,
        maxWidth: 60,
        maxHeight: 60,
        sideType: "lt"
      },
      xb3: {
        lt: 4,
        gt: 0.08,
        weightLimit: 50,
        perWeight: 1,
        kg: 80,
        pc: 17,
        durTime: "6-10",
        maxWeight: 2000,
        isBubbles: true,
        bubbleNumber: 6000,
        maxSize: 90,
        equalType: "ltqt",
        maxLong: 60,
        maxWidth: 60,
        maxHeight: 60,
        sideType: "lt"
      },
      by: {
        pc: 25,
        kg: 80,
        durTime: "6-10",
        maxWeight: 2000,
        isBubbles: true,
        bubbleNumber: 8000,
        maxSize: 90,
        equalType: "ltqt",
        maxLong: 60,
        maxWidth: 60,
        maxHeight: 60,
        sideType: "lt"
      },
      ly: {
        pc: 23,
        kg: 75,
        maxWeight: 2000,
        isBubbles: true,
        bubbleNumber: 6000,
        maxSize: 90,
        equalType: "ltqt",
        maxLong: 60,
        maxWidth: 60,
        maxHeight: 60,
        sideType: "lt"
      },
      xb2: {
        pc: 20,
        kg: 80,
        durTime: "10-15",
        maxWeight: 2000,
        isBubbles: true,
        bubbleNumber: 6000,
        maxSize: 90,
        equalType: "ltqt",
        maxLong: 60,
        maxWidth: 60,
        maxHeight: 60,
        sideType: "lt"
      },
      zd: {
        perWeight: 500,
        weightLimit: 500,
        lt: 130,
        gt: 28,
        maxWeight: 30000,
        isBubbles: true,
        bubbleNumber: 6000,
        maxSize: 130,
        equalType: "ltqt",
        maxLong: 175,
        maxWidth: 175,
        maxHeight: 175,
        sideType: "ltqt"
      }
    },
    dhl: {
      pps: {
        pc: 19.8,
        kg: 75.9,
        durTime: "8-10",
        maxWeight: 2000,
        isBubbles: false,
        maxSize: 90,
        equalType: "lt",
        maxLong: 60,
        maxWidth: 60,
        maxHeight: 60,
        sideType: "lt"
      }
    }
  },
  FI: {
    sf: {
      xb1: {
        pc: 20,
        kg: 90,
        durTime: "10-15",
        maxWeight: 2000,
        isBubbles: true,
        bubbleNumber: 6000,
        maxSize: 90,
        equalType: "ltqt",
        maxLong: 60,
        maxWidth: 60,
        maxHeight: 60,
        sideType: "lt"
      },
      xb2: {
        pc: 13,
        kg: 115,
        durTime: "6-13",
        maxWeight: 2000,
        isBubbles: true,
        bubbleNumber: 6000,
        maxSize: 90,
        equalType: "ltqt",
        maxLong: 60,
        maxWidth: 60,
        maxHeight: 60,
        sideType: "lt"
      },
      by: {
        pc: 25,
        kg: 83,
        durTime: "7-12",
        maxWeight: 2000,
        isBubbles: true,
        bubbleNumber: 8000,
        maxSize: 90,
        equalType: "ltqt",
        maxLong: 60,
        maxWidth: 60,
        maxHeight: 60,
        sideType: "lt"
      },
      xb3: {
        lt: 5,
        gt: 0.1,
        weightLimit: 50,
        kg: 100,
        perWeight: 1,
        pc: 28,
        durTime: "9-14",
        maxWeight: 2000,
        isBubbles: true,
        bubbleNumber: 6000,
        maxSize: 90,
        equalType: "ltqt",
        maxLong: 60,
        maxWidth: 60,
        maxHeight: 60,
        sideType: "lt"
      },
      zd: {
        perWeight: 500,
        weightLimit: 500,
        lt: 237,
        gt: 26,
        maxWeight: 30000,
        isBubbles: true,
        bubbleNumber: 6000,
        maxSize: 130,
        equalType: "ltqt",
        maxLong: 175,
        maxWidth: 175,
        maxHeight: 175,
        sideType: "ltqt"
      }
    },
    dhl: {
      pps: {
        pc: 40.7,
        kg: 76.3,
        durTime: "7-9",
        maxWeight: 2000,
        isBubbles: false,
        maxSize: 90,
        equalType: "lt",
        maxLong: 60,
        maxWidth: 60,
        maxHeight: 60,
        sideType: "lt"
      }
    }
  },
  FR: {
    sf: {
      xb1: {
        pc: 17,
        kg: 80,
        durTime: "6-10",
        maxWeight: 2000,
        isBubbles: true,
        bubbleNumber: 6000,
        maxSize: 90,
        equalType: "ltqt",
        maxLong: 60,
        maxWidth: 60,
        maxHeight: 60,
        sideType: "lt"
      },
      xb2: {
        pc: 13,
        kg: 110,
        durTime: "7-12",
        maxWeight: 2000,
        isBubbles: true,
        bubbleNumber: 6000,
        maxSize: 90,
        equalType: "ltqt",
        maxLong: 60,
        maxWidth: 60,
        maxHeight: 60,
        sideType: "lt"
      },
      by: {
        pc: 25,
        kg: 37,
        durTime: "6-11",
        maxWeight: 2000,
        isBubbles: true,
        bubbleNumber: 8000,
        maxSize: 90,
        equalType: "ltqt",
        maxLong: 60,
        maxWidth: 60,
        maxHeight: 60,
        sideType: "lt"
      },
      ly: {
        pc: 17,
        kg: 73,
        maxWeight: 2000,
        isBubbles: true,
        bubbleNumber: 6000,
        maxSize: 90,
        equalType: "ltqt",
        maxLong: 60,
        maxWidth: 60,
        maxHeight: 60,
        sideType: "lt"
      },
      zx: {
        pc: 25,
        kg: 42,
        durTime: "7-15",
        maxWeight: 2000,
        isBubbles: true,
        bubbleNumber: 6000,
        maxSize: 90,
        equalType: "ltqt",
        maxLong: 60,
        maxWidth: 60,
        maxHeight: 60,
        sideType: "lt"
      },
      xb3: {
        lt: 4.5,
        gt: 0.09,
        kg: 90,
        weightLimit: 50,
        perWeight: 1,
        pc: 13,
        durTime: "6-10",
        maxWeight: 2000,
        isBubbles: true,
        bubbleNumber: 6000,
        maxSize: 90,
        equalType: "ltqt",
        maxLong: 60,
        maxWidth: 60,
        maxHeight: 60,
        sideType: "lt"
      },
      zd: {
        perWeight: 500,
        weightLimit: 500,
        lt: 115,
        gt: 26,
        maxWeight: 30000,
        isBubbles: true,
        bubbleNumber: 6000,
        maxSize: 130,
        equalType: "ltqt",
        maxLong: 175,
        maxWidth: 175,
        maxHeight: 175,
        sideType: "ltqt"
      }
    },
    dhl: {
      pps: {
        pc: 20,
        kg: 76.9,
        durTime: "5-9",
        maxWeight: 2000,
        isBubbles: false,
        maxSize: 90,
        equalType: "lt",
        maxLong: 60,
        maxWidth: 60,
        maxHeight: 60,
        sideType: "lt"
      },
      zx: {
        pc: 26,
        kg: 55,
        durTime: "4-7",
        maxWeight: 20000,
        isBubbles: true,
        bubbleNumber: 8000,
        maxSize: 150,
        equalType: "lt",
        maxLong: 100,
        maxWidth: 100,
        maxHeight: 100,
        sideType: "lt"
      }
    }
  },
  IL: {
    sf: {
      xb1: {
        pc: 24,
        kg: 85,
        maxWeight: 2000,
        isBubbles: true,
        bubbleNumber: 6000,
        maxSize: 90,
        equalType: "ltqt",
        maxLong: 60,
        maxWidth: 60,
        maxHeight: 60,
        sideType: "lt"
      },
      xb3: {
        lt: 4.25,
        gt: 0.085,
        kg: 85,
        weightLimit: 50,
        perWeight: 1,
        pc: 27,
        durTime: "9-14",
        maxWeight: 2000,
        isBubbles: true,
        bubbleNumber: 6000,
        maxSize: 90,
        equalType: "ltqt",
        maxLong: 60,
        maxWidth: 60,
        maxHeight: 60,
        sideType: "lt"
      },
      xb2: {
        pc: 13,
        kg: 120,
        durTime: "8-15",
        maxWeight: 2000,
        isBubbles: true,
        bubbleNumber: 6000,
        maxSize: 90,
        equalType: "ltqt",
        maxLong: 60,
        maxWidth: 60,
        maxHeight: 60,
        sideType: "lt"
      }
    },
    dhl: {
      pps: {
        pc: 21.8,
        kg: 83.7,
        durTime: "7-10",
        maxWeight: 2000,
        isBubbles: false,
        maxSize: 90,
        equalType: "lt",
        maxLong: 60,
        maxWidth: 60,
        maxHeight: 60,
        sideType: "lt"
      },
      zx: {
        pc: 19,
        kg: 81,
        durTime: "7-10",
        maxWeight: 20000,
        isBubbles: false,
        maxSize: 240,
        equalType: "ltqt",
        maxLong: 120,
        maxWidth: 60,
        maxHeight: 60,
        sideType: "ltqt"
      }
    }
  },
  DE: {
    sf: {
      xb1: {
        pc: 18,
        kg: 80,
        durTime: "6-10",
        maxWeight: 2000,
        isBubbles: true,
        bubbleNumber: 6000,
        maxSize: 90,
        equalType: "ltqt",
        maxLong: 60,
        maxWidth: 60,
        maxHeight: 60,
        sideType: "lt"
      },
      by: {
        pc: 21,
        kg: 71,
        durTime: "6-11",
        maxWeight: 2000,
        isBubbles: true,
        bubbleNumber: 8000,
        maxSize: 90,
        equalType: "ltqt",
        maxLong: 60,
        maxWidth: 60,
        maxHeight: 60,
        sideType: "lt"
      },
      xb3: {
        lt: 3.25,
        gt: 0.065,
        kg: 65,
        weightLimit: 50,
        perWeight: 1,
        pc: 17,
        durTime: "6-10",
        maxWeight: 2000,
        isBubbles: true,
        bubbleNumber: 6000,
        maxSize: 90,
        equalType: "ltqt",
        maxLong: 60,
        maxWidth: 60,
        maxHeight: 60,
        sideType: "lt"
      },
      ly: {
        pc: 16,
        kg: 78,
        maxWeight: 2000,
        isBubbles: true,
        bubbleNumber: 6000,
        maxSize: 90,
        equalType: "ltqt",
        maxLong: 60,
        maxWidth: 60,
        maxHeight: 60,
        sideType: "lt"
      },
      xb2: {
        pc: 17.5,
        kg: 100,
        durTime: "7-12",
        maxWeight: 2000,
        isBubbles: true,
        bubbleNumber: 6000,
        maxSize: 90,
        equalType: "ltqt",
        maxLong: 60,
        maxWidth: 60,
        maxHeight: 60,
        sideType: "lt"
      },
      zd: {
        perWeight: 500,
        weightLimit: 500,
        lt: 115,
        gt: 26,
        maxWeight: 30000,
        isBubbles: true,
        bubbleNumber: 6000,
        maxSize: 130,
        equalType: "ltqt",
        maxLong: 175,
        maxWidth: 175,
        maxHeight: 175,
        sideType: "ltqt"
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
        },
        maxWeight: 2000,
        isBubbles: false,
        maxSize: 90,
        equalType: "lt",
        maxLong: 60,
        maxWidth: 60,
        maxHeight: 60,
        sideType: "lt"
      },
      zx: {
        weightLimit: 400,
        durTime: "7-10",
        maxWeight: 2000,
        isBubbles: true,
        maxSize: 90,
        bubbleNumber: 8000,
        equalType: "lt",
        maxLong: 60,
        maxWidth: 60,
        maxHeight: 60,
        sideType: "lt",
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
        durTime: "7-12",
        maxWeight: 2000,
        isBubbles: true,
        bubbleNumber: 6000,
        maxSize: 90,
        equalType: "ltqt",
        maxLong: 60,
        maxWidth: 60,
        maxHeight: 60,
        sideType: "lt"
      },
      xb3: {
        lt: 7.25,
        gt: 0.145,
        kg: 145,
        weightLimit: 50,
        perWeight: 1,
        pc: 21,
        durTime: "10-15",
        maxWeight: 2000,
        isBubbles: true,
        bubbleNumber: 6000,
        maxSize: 90,
        equalType: "ltqt",
        maxLong: 60,
        maxWidth: 60,
        maxHeight: 60,
        sideType: "lt"
      },
      xb2: {
        pc: 21,
        kg: 145,
        durTime: "12-22",
        maxWeight: 2000,
        isBubbles: true,
        bubbleNumber: 6000,
        maxSize: 90,
        equalType: "ltqt",
        maxLong: 60,
        maxWidth: 60,
        maxHeight: 60,
        sideType: "lt"
      }
    },
    dhl: {
      pps: {
        pc: 22.9,
        kg: 91.5,
        maxWeight: 2000,
        isBubbles: false,
        maxSize: 90,
        equalType: "lt",
        maxLong: 60,
        maxWidth: 60,
        maxHeight: 60,
        sideType: "lt"
      },
      zx: {
        weightLimit: 300,
        maxWeight: 2000,
        isBubbles: true,
        maxSize: 240,
        bubbleNumber: 6000,
        equalType: "ltqt",
        maxLong: 120,
        maxWidth: 60,
        maxHeight: 60,
        sideType: "ltqt",
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
        durTime: "7-12",
        maxWeight: 2000,
        isBubbles: true,
        bubbleNumber: 6000,
        maxSize: 90,
        equalType: "ltqt",
        maxLong: 60,
        maxWidth: 60,
        maxHeight: 60,
        sideType: "lt"
      },
      xb2: {
        pc: 12,
        kg: 100,
        durTime: "12-20",
        maxWeight: 2000,
        isBubbles: true,
        bubbleNumber: 6000,
        maxSize: 90,
        equalType: "ltqt",
        maxLong: 60,
        maxWidth: 60,
        maxHeight: 60,
        sideType: "lt"
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
        },
        maxWeight: 30000,
        isBubbles: true,
        bubbleNumber: 6000,
        maxSize: 130,
        equalType: "ltqt",
        maxLong: 175,
        maxWidth: 175,
        maxHeight: 175,
        sideType: "ltqt"
      }
    },
    dhl: {
      pps: {
        pc: 19,
        kg: 92.6,
        maxWeight: 2000,
        isBubbles: false,
        maxSize: 90,
        equalType: "lt",
        maxLong: 60,
        maxWidth: 60,
        maxHeight: 60,
        sideType: "lt"
      },
      zx: {
        weightLimit: 450,
        maxWeight: 6500,
        isBubbles: true,
        maxSize: 200,
        bubbleNumber: 6000,
        equalType: "lt",
        maxLong: 55,
        maxWidth: 35,
        maxHeight: 35,
        sideType: "lt",
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
        durTime: "7-10",
        maxWeight: 2000,
        isBubbles: true,
        bubbleNumber: 6000,
        maxSize: 90,
        equalType: "ltqt",
        maxLong: 60,
        maxWidth: 60,
        maxHeight: 60,
        sideType: "lt"
      },
      xb2: {
        pc: 13,
        kg: 115,
        durTime: "8-15",
        maxWeight: 2000,
        isBubbles: true,
        bubbleNumber: 6000,
        maxSize: 90,
        equalType: "ltqt",
        maxLong: 60,
        maxWidth: 60,
        maxHeight: 60,
        sideType: "lt"
      },
      by: {
        pc: 18,
        kg: 76,
        durTime: "6-11",
        maxWeight: 2000,
        isBubbles: true,
        bubbleNumber: 8000,
        maxSize: 90,
        equalType: "ltqt",
        maxLong: 60,
        maxWidth: 60,
        maxHeight: 60,
        sideType: "lt"
      },
      xb3: {
        lt: 5,
        gt: 0.1,
        kg: 100,
        weightLimit: 50,
        perWeight: 1,
        pc: 28,
        durTime: "7-10",
        maxWeight: 2000,
        isBubbles: true,
        bubbleNumber: 6000,
        maxSize: 90,
        equalType: "ltqt",
        maxLong: 60,
        maxWidth: 60,
        maxHeight: 60,
        sideType: "lt"
      },
      zd: {
        perWeight: 500,
        weightLimit: 500,
        lt: 252,
        gt: 32,
        maxWeight: 30000,
        isBubbles: true,
        bubbleNumber: 6000,
        maxSize: 130,
        equalType: "ltqt",
        maxLong: 175,
        maxWidth: 175,
        maxHeight: 175,
        sideType: "ltqt"
      }
    },
    dhl: {
      pps: {
        pc: 23.7,
        kg: 64.1,
        durTime: "13-15",
        maxWeight: 2000,
        isBubbles: false,
        maxSize: 90,
        equalType: "lt",
        maxLong: 60,
        maxWidth: 60,
        maxHeight: 60,
        sideType: "lt"
      }
    }
  },
  HU: {
    sf: {
      xb1: {
        pc: 16,
        kg: 80,
        durTime: "7-10",
        maxWeight: 2000,
        isBubbles: true,
        bubbleNumber: 6000,
        maxSize: 90,
        equalType: "ltqt",
        maxLong: 60,
        maxWidth: 60,
        maxHeight: 60,
        sideType: "lt"
      },
      xb2: {
        pc: 13,
        kg: 115,
        durTime: "7-12",
        maxWeight: 2000,
        isBubbles: true,
        bubbleNumber: 6000,
        maxSize: 90,
        equalType: "ltqt",
        maxLong: 60,
        maxWidth: 60,
        maxHeight: 60,
        sideType: "lt"
      },
      by: {
        pc: 17,
        kg: 67,
        durTime: "6-11",
        maxWeight: 2000,
        isBubbles: true,
        bubbleNumber: 8000,
        maxSize: 90,
        equalType: "ltqt",
        maxLong: 60,
        maxWidth: 60,
        maxHeight: 60,
        sideType: "lt"
      },
      xb3: {
        lt: 3.75,
        gt: 0.075,
        kg: 75,
        weightLimit: 50,
        perWeight: 1,
        pc: 27,
        durTime: "7-10",
        maxWeight: 2000,
        isBubbles: true,
        bubbleNumber: 6000,
        maxSize: 90,
        equalType: "ltqt",
        maxLong: 60,
        maxWidth: 60,
        maxHeight: 60,
        sideType: "lt"
      },
      zd: {
        perWeight: 500,
        weightLimit: 500,
        lt: 129,
        gt: 26,
        maxWeight: 30000,
        isBubbles: true,
        bubbleNumber: 6000,
        maxSize: 130,
        equalType: "ltqt",
        maxLong: 175,
        maxWidth: 175,
        maxHeight: 175,
        sideType: "ltqt"
      }
    },
    dhl: {
      pps: {
        pc: 22.6,
        kg: 64.4,
        durTime: "6-9",
        maxWeight: 2000,
        isBubbles: false,
        maxSize: 90,
        equalType: "lt",
        maxLong: 60,
        maxWidth: 60,
        maxHeight: 60,
        sideType: "lt"
      }
    }
  },
  IE: {
    sf: {
      xb1: {
        pc: 21,
        kg: 85,
        durTime: "6-10",
        maxWeight: 2000,
        isBubbles: true,
        bubbleNumber: 6000,
        maxSize: 90,
        equalType: "ltqt",
        maxLong: 60,
        maxWidth: 60,
        maxHeight: 60,
        sideType: "lt"
      },
      by: {
        pc: 20,
        kg: 112,
        durTime: "7-12",
        maxWeight: 2000,
        isBubbles: true,
        bubbleNumber: 8000,
        maxSize: 90,
        equalType: "ltqt",
        maxLong: 60,
        maxWidth: 60,
        maxHeight: 60,
        sideType: "lt"
      },
      xb3: {
        lt: 4.5,
        gt: 0.09,
        kg: 90,
        weightLimit: 50,
        perWeight: 1,
        pc: 28,
        durTime: "6-10",
        maxWeight: 2000,
        isBubbles: true,
        bubbleNumber: 6000,
        maxSize: 90,
        equalType: "ltqt",
        maxLong: 60,
        maxWidth: 60,
        maxHeight: 60,
        sideType: "lt"
      },
      zd: {
        perWeight: 500,
        weightLimit: 500,
        lt: 151,
        gt: 26,
        maxWeight: 30000,
        isBubbles: true,
        bubbleNumber: 6000,
        maxSize: 130,
        equalType: "ltqt",
        maxLong: 175,
        maxWidth: 175,
        maxHeight: 175,
        sideType: "ltqt"
      }
    },
    dhl: {
      pps: {
        pc: 46.5,
        kg: 55.1,
        durTime: "8-13",
        maxWeight: 2000,
        isBubbles: false,
        maxSize: 90,
        equalType: "lt",
        maxLong: 60,
        maxWidth: 60,
        maxHeight: 60,
        sideType: "lt"
      }
    }
  },
  IT: {
    sf: {
      xb1: {
        pc: 24,
        kg: 78,
        durTime: "7-10",
        maxWeight: 2000,
        isBubbles: true,
        bubbleNumber: 6000,
        maxSize: 90,
        equalType: "ltqt",
        maxLong: 60,
        maxWidth: 60,
        maxHeight: 60,
        sideType: "lt"
      },
      xb2: {
        pc: 20,
        kg: 88,
        durTime: "7-12",
        maxWeight: 2000,
        isBubbles: true,
        bubbleNumber: 6000,
        maxSize: 90,
        equalType: "ltqt",
        maxLong: 60,
        maxWidth: 60,
        maxHeight: 60,
        sideType: "lt"
      },
      ly: {
        pc: 22,
        kg: 72,
        maxWeight: 2000,
        isBubbles: true,
        bubbleNumber: 6000,
        maxSize: 90,
        equalType: "ltqt",
        maxLong: 60,
        maxWidth: 60,
        maxHeight: 60,
        sideType: "lt"
      },
      by: {
        pc: 28,
        kg: 63,
        durTime: "7-12",
        maxWeight: 2000,
        isBubbles: true,
        bubbleNumber: 8000,
        maxSize: 90,
        equalType: "ltqt",
        maxLong: 60,
        maxWidth: 60,
        maxHeight: 60,
        sideType: "lt"
      },
      xb3: {
        lt: 4.75,
        gt: 0.095,
        kg: 95,
        weightLimit: 50,
        perWeight: 1,
        pc: 28,
        durTime: "7-10",
        maxWeight: 2000,
        isBubbles: true,
        bubbleNumber: 6000,
        maxSize: 90,
        equalType: "ltqt",
        maxLong: 60,
        maxWidth: 60,
        maxHeight: 60,
        sideType: "lt"
      },
      zd: {
        perWeight: 500,
        weightLimit: 500,
        lt: 115,
        gt: 26,
        maxWeight: 30000,
        isBubbles: true,
        bubbleNumber: 6000,
        maxSize: 130,
        equalType: "ltqt",
        maxLong: 175,
        maxWidth: 175,
        maxHeight: 175,
        sideType: "ltqt"
      }
    },
    dhl: {
      pps: {
        pc: 30.7,
        kg: 60.9,
        durTime: "9-15",
        maxWeight: 2000,
        isBubbles: false,
        maxSize: 90,
        equalType: "lt",
        maxLong: 60,
        maxWidth: 60,
        maxHeight: 60,
        sideType: "lt"
      }
    }
  },
  MX: {
    sf: {
      xb1: {
        pc: 20,
        kg: 100,
        maxWeight: 2000,
        isBubbles: true,
        bubbleNumber: 6000,
        maxSize: 90,
        equalType: "ltqt",
        maxLong: 60,
        maxWidth: 60,
        maxHeight: 60,
        sideType: "lt"
      },
      xb3: {
        lt: 8,
        gt: 0.16,
        kg: 160,
        weightLimit: 50,
        perWeight: 1,
        pc: 21,
        maxWeight: 2000,
        isBubbles: true,
        bubbleNumber: 6000,
        maxSize: 90,
        equalType: "ltqt",
        maxLong: 60,
        maxWidth: 60,
        maxHeight: 60,
        sideType: "lt"
      },
      xb2: {
        pc: 12,
        kg: 140,
        durTime: "12-22",
        maxWeight: 2000,
        isBubbles: true,
        bubbleNumber: 6000,
        maxSize: 90,
        equalType: "ltqt",
        maxLong: 60,
        maxWidth: 60,
        maxHeight: 60,
        sideType: "lt"
      }
    },
    dhl: {
      pps: {
        pc: 28.5,
        kg: 80.1,
        maxWeight: 2000,
        isBubbles: false,
        maxSize: 90,
        equalType: "lt",
        maxLong: 60,
        maxWidth: 60,
        maxHeight: 60,
        sideType: "lt"
      },
      zx: {
        pc: 70,
        kg: 36,
        maxWeight: 2000,
        isBubbles: true,
        bubbleNumber: 6000,
        equalType: "lt",
        maxLong: 120,
        maxWidth: 60,
        maxHeight: 60,
        sideType: "lt"
      }
    }
  },
  AU: {
    sf: {
      xb1: {
        pc: 28,
        kg: 70,
        durTime: "5-8",
        maxWeight: 2000,
        isBubbles: true,
        bubbleNumber: 6000,
        maxSize: 90,
        equalType: "ltqt",
        maxLong: 60,
        maxWidth: 60,
        maxHeight: 60,
        sideType: "lt"
      },
      xb2: {
        pc: 20,
        kg: 88,
        durTime: "7-12",
        maxWeight: 2000,
        isBubbles: true,
        bubbleNumber: 6000,
        maxSize: 90,
        equalType: "ltqt",
        maxLong: 60,
        maxWidth: 60,
        maxHeight: 60,
        sideType: "lt"
      },
      zd: {
        perWeight: 500,
        weightLimit: 500,
        lt: 70,
        gt: 36,
        maxWeight: 27000,
        isBubbles: true,
        bubbleNumber: 6000,
        maxSize: 130,
        equalType: "ltqt",
        maxLong: 175,
        maxWidth: 175,
        maxHeight: 175,
        sideType: "ltqt"
      }
    },
    dhl: {
      pps: {
        pc: 25.6,
        kg: 117.5,
        maxWeight: 2000,
        isBubbles: false,
        maxSize: 90,
        equalType: "lt",
        maxLong: 60,
        maxWidth: 60,
        maxHeight: 60,
        sideType: "lt"
      },
      zx: {
        pc: 30,
        kg: 64,
        maxWeight: 2000,
        isBubbles: true,
        bubbleNumber: 6000,
        equalType: "lt",
        maxLong: 120,
        maxWidth: 60,
        maxHeight: 60,
        sideType: "lt"
      }
    }
  },
  NL: {
    sf: {
      xb1: {
        pc: 27,
        kg: 55,
        maxWeight: 2000,
        isBubbles: true,
        bubbleNumber: 6000,
        maxSize: 90,
        equalType: "ltqt",
        maxLong: 60,
        maxWidth: 60,
        maxHeight: 60,
        sideType: "lt"
      },
      xb2: {
        pc: 19,
        kg: 65,
        durTime: "7-12",
        maxWeight: 2000,
        isBubbles: true,
        bubbleNumber: 6000,
        maxSize: 90,
        equalType: "ltqt",
        maxLong: 60,
        maxWidth: 60,
        maxHeight: 60,
        sideType: "lt"
      },
      by: {
        pc: 28,
        kg: 68,
        durTime: "6-11",
        maxWeight: 2000,
        isBubbles: true,
        bubbleNumber: 8000,
        maxSize: 90,
        equalType: "ltqt",
        maxLong: 60,
        maxWidth: 60,
        maxHeight: 60,
        sideType: "lt"
      },
      ly: {
        pc: 39,
        kg: 71,
        maxWeight: 2000,
        isBubbles: true,
        bubbleNumber: 6000,
        maxSize: 90,
        equalType: "ltqt",
        maxLong: 60,
        maxWidth: 60,
        maxHeight: 60,
        sideType: "lt"
      },
      xb3: {
        lt: 3.75,
        gt: 0.075,
        kg: 75,
        weightLimit: 50,
        perWeight: 1,
        pc: 15,
        durTime: "7-10",
        maxWeight: 2000,
        isBubbles: true,
        bubbleNumber: 6000,
        maxSize: 90,
        equalType: "ltqt",
        maxLong: 60,
        maxWidth: 60,
        maxHeight: 60,
        sideType: "lt"
      },
      zd: {
        perWeight: 500,
        weightLimit: 500,
        lt: 115,
        gt: 26,
        maxWeight: 30000,
        isBubbles: true,
        bubbleNumber: 6000,
        maxSize: 130,
        equalType: "ltqt",
        maxLong: 175,
        maxWidth: 175,
        maxHeight: 175,
        sideType: "ltqt"
      }
    },
    dhl: {
      pps: {
        pc: 29.5,
        kg: 68.8,
        maxWeight: 2000,
        isBubbles: false,
        maxSize: 90,
        equalType: "lt",
        maxLong: 60,
        maxWidth: 60,
        maxHeight: 60,
        sideType: "lt"
      }
    }
  },
  NO: {
    sf: {
      xb1: {
        pc: 34,
        kg: 80,
        durTime: "10-15",
        maxWeight: 2000,
        isBubbles: true,
        bubbleNumber: 6000,
        maxSize: 90,
        equalType: "ltqt",
        maxLong: 60,
        maxWidth: 60,
        maxHeight: 60,
        sideType: "lt"
      },
      xb3: {
        lt: 6.5,
        gt: 0.13,
        kg: 130,
        weightLimit: 50,
        perWeight: 1,
        pc: 45,
        durTime: "9-14",
        maxWeight: 2000,
        isBubbles: true,
        bubbleNumber: 6000,
        maxSize: 90,
        equalType: "ltqt",
        maxLong: 60,
        maxWidth: 60,
        maxHeight: 60,
        sideType: "lt"
      },
      xb2: {
        pc: 13,
        kg: 120,
        durTime: "7-12",
        maxWeight: 2000,
        isBubbles: true,
        bubbleNumber: 6000,
        maxSize: 90,
        equalType: "ltqt",
        maxLong: 60,
        maxWidth: 60,
        maxHeight: 60,
        sideType: "lt"
      }
    },
    dhl: {
      pps: {
        pc: 39.7,
        kg: 69.7,
        maxWeight: 2000,
        isBubbles: false,
        maxSize: 90,
        equalType: "lt",
        maxLong: 60,
        maxWidth: 60,
        maxHeight: 60,
        sideType: "lt"
      }
    }
  },
  PL: {
    sf: {
      xb1: {
        pc: 6.8,
        kg: 96,
        durTime: "10-15",
        maxWeight: 2000,
        isBubbles: true,
        bubbleNumber: 6000,
        maxSize: 90,
        equalType: "ltqt",
        maxLong: 60,
        maxWidth: 60,
        maxHeight: 60,
        sideType: "lt"
      },
      xb2: {
        pc: 13,
        kg: 115,
        durTime: "7-12",
        maxWeight: 2000,
        isBubbles: true,
        bubbleNumber: 6000,
        maxSize: 90,
        equalType: "ltqt",
        maxLong: 60,
        maxWidth: 60,
        maxHeight: 60,
        sideType: "lt"
      },
      by: {
        pc: 17,
        kg: 69,
        durTime: "6-11",
        maxWeight: 2000,
        isBubbles: true,
        bubbleNumber: 8000,
        maxSize: 90,
        equalType: "ltqt",
        maxLong: 60,
        maxWidth: 60,
        maxHeight: 60,
        sideType: "lt"
      },
      ly: {
        pc: 24,
        kg: 79,
        maxWeight: 2000,
        isBubbles: true,
        bubbleNumber: 6000,
        maxSize: 90,
        equalType: "ltqt",
        maxLong: 60,
        maxWidth: 60,
        maxHeight: 60,
        sideType: "lt"
      },
      xb3: {
        lt: 4.5,
        gt: 0.09,
        kg: 90,
        weightLimit: 50,
        perWeight: 1,
        pc: 26,
        durTime: "9-14",
        maxWeight: 2000,
        isBubbles: true,
        bubbleNumber: 6000,
        maxSize: 90,
        equalType: "ltqt",
        maxLong: 60,
        maxWidth: 60,
        maxHeight: 60,
        sideType: "lt"
      },
      zd: {
        perWeight: 500,
        weightLimit: 500,
        lt: 115,
        gt: 26,
        maxWeight: 30000,
        isBubbles: true,
        bubbleNumber: 6000,
        maxSize: 130,
        equalType: "ltqt",
        maxLong: 175,
        maxWidth: 175,
        maxHeight: 175,
        sideType: "ltqt"
      }
    },
    dhl: {
      pps: {
        pc: 22.2,
        kg: 61.1,
        maxWeight: 2000,
        isBubbles: false,
        maxSize: 90,
        equalType: "lt",
        maxLong: 60,
        maxWidth: 60,
        maxHeight: 60,
        sideType: "lt"
      }
    }
  },
  PT: {
    sf: {
      xb1: {
        pc: 18,
        kg: 85,
        durTime: "7-10",
        maxWeight: 2000,
        isBubbles: true,
        bubbleNumber: 6000,
        maxSize: 90,
        equalType: "ltqt",
        maxLong: 60,
        maxWidth: 60,
        maxHeight: 60,
        sideType: "lt"
      },
      xb3: {
        lt: 4.5,
        gt: 0.09,
        kg: 90,
        weightLimit: 50,
        perWeight: 1,
        pc: 18,
        durTime: "7-10",
        maxWeight: 2000,
        isBubbles: true,
        bubbleNumber: 6000,
        maxSize: 90,
        equalType: "ltqt",
        maxLong: 60,
        maxWidth: 60,
        maxHeight: 60,
        sideType: "lt"
      },
      by: {
        pc: 19,
        kg: 69,
        durTime: "6-11",
        maxWeight: 2000,
        isBubbles: true,
        bubbleNumber: 8000,
        maxSize: 90,
        equalType: "ltqt",
        maxLong: 60,
        maxWidth: 60,
        maxHeight: 60,
        sideType: "lt"
      },
      zd: {
        perWeight: 500,
        weightLimit: 500,
        lt: 148,
        gt: 31,
        maxWeight: 30000,
        isBubbles: true,
        bubbleNumber: 6000,
        maxSize: 130,
        equalType: "ltqt",
        maxLong: 175,
        maxWidth: 175,
        maxHeight: 175,
        sideType: "ltqt"
      }
    },
    dhl: {
      pps: {
        pc: 23.7,
        kg: 63.4,
        maxWeight: 2000,
        isBubbles: false,
        maxSize: 90,
        equalType: "lt",
        maxLong: 60,
        maxWidth: 60,
        maxHeight: 60,
        sideType: "lt"
      }
    }
  },
  RU: {
    sf: {
      xb1: {
        pc: 10,
        kg: 108,
        durTime: "15-25",
        maxWeight: 2000,
        isBubbles: true,
        bubbleNumber: 6000,
        maxSize: 90,
        equalType: "ltqt",
        maxLong: 60,
        maxWidth: 60,
        maxHeight: 60,
        sideType: "lt"
      },
      xb3: {
        lt: 3.75,
        gt: 0.075,
        kg: 75,
        weightLimit: 50,
        perWeight: 1,
        pc: 26,
        durTime: "14-24",
        maxWeight: 2000,
        isBubbles: true,
        bubbleNumber: 6000,
        maxSize: 90,
        equalType: "ltqt",
        maxLong: 60,
        maxWidth: 60,
        maxHeight: 60,
        sideType: "lt"
      },
      xb2: {
        pc: 17,
        kg: 95,
        durTime: "8-22",
        maxWeight: 2000,
        isBubbles: true,
        bubbleNumber: 6000,
        maxSize: 90,
        equalType: "ltqt",
        maxLong: 60,
        maxWidth: 60,
        maxHeight: 60,
        sideType: "lt"
      },
      zd: {
        perWeight: 100,
        weightLimit: 100,
        lt: 50,
        gt: 10,
        maxWeight: 30000,
        isBubbles: true,
        bubbleNumber: 6000,
        maxSize: 130,
        equalType: "ltqt",
        maxLong: 175,
        maxWidth: 175,
        maxHeight: 175,
        sideType: "ltqt"
      }
    },
    dhl: {
      pps: {
        pc: 28.5,
        kg: 55.8,
        maxWeight: 2000,
        isBubbles: false,
        maxSize: 90,
        equalType: "lt",
        maxLong: 60,
        maxWidth: 60,
        maxHeight: 60,
        sideType: "lt"
      }
    }
  },
  SK: {
    sf: {
      xb1: {
        pc: 17,
        kg: 110,
        durTime: "7-10",
        maxWeight: 2000,
        isBubbles: true,
        bubbleNumber: 6000,
        maxSize: 90,
        equalType: "ltqt",
        maxLong: 60,
        maxWidth: 60,
        maxHeight: 60,
        sideType: "lt"
      },
      xb2: {
        pc: 18,
        kg: 70,
        durTime: "7-12",
        maxWeight: 2000,
        isBubbles: true,
        bubbleNumber: 6000,
        maxSize: 90,
        equalType: "ltqt",
        maxLong: 60,
        maxWidth: 60,
        maxHeight: 60,
        sideType: "lt"
      },
      by: {
        pc: 17,
        kg: 70,
        durTime: "6-11",
        maxWeight: 2000,
        isBubbles: true,
        bubbleNumber: 8000,
        maxSize: 90,
        equalType: "ltqt",
        maxLong: 60,
        maxWidth: 60,
        maxHeight: 60,
        sideType: "lt"
      },
      xb3: {
        lt: 4,
        gt: 0.08,
        kg: 80,
        weightLimit: 50,
        perWeight: 1,
        pc: 27,
        durTime: "7-10",
        maxWeight: 2000,
        isBubbles: true,
        bubbleNumber: 6000,
        maxSize: 90,
        equalType: "ltqt",
        maxLong: 60,
        maxWidth: 60,
        maxHeight: 60,
        sideType: "lt"
      },
      zd: {
        perWeight: 500,
        weightLimit: 500,
        lt: 148,
        gt: 26,
        maxWeight: 30000,
        isBubbles: true,
        bubbleNumber: 6000,
        maxSize: 130,
        equalType: "ltqt",
        maxLong: 175,
        maxWidth: 175,
        maxHeight: 175,
        sideType: "ltqt"
      }
    },
    dhl: {
      pps: {
        pc: 29.1,
        kg: 78.3,
        maxWeight: 2000,
        isBubbles: false,
        maxSize: 90,
        equalType: "lt",
        maxLong: 60,
        maxWidth: 60,
        maxHeight: 60,
        sideType: "lt"
      }
    }
  },
  SI: {
    sf: {
      xb1: {
        pc: 37,
        kg: 55,
        durTime: "7-10",
        maxWeight: 2000,
        isBubbles: true,
        bubbleNumber: 6000,
        maxSize: 90,
        equalType: "ltqt",
        maxLong: 60,
        maxWidth: 60,
        maxHeight: 60,
        sideType: "lt"
      },
      xb2: {
        pc: 18,
        kg: 70,
        durTime: "7-12",
        maxWeight: 2000,
        isBubbles: true,
        bubbleNumber: 6000,
        maxSize: 90,
        equalType: "ltqt",
        maxLong: 60,
        maxWidth: 60,
        maxHeight: 60,
        sideType: "lt"
      },
      by: {
        pc: 24,
        kg: 50,
        durTime: "6-11",
        maxWeight: 2000,
        isBubbles: true,
        bubbleNumber: 8000,
        maxSize: 90,
        equalType: "ltqt",
        maxLong: 60,
        maxWidth: 60,
        maxHeight: 60,
        sideType: "lt"
      },
      xb3: {
        lt: 5,
        gt: 0.1,
        kg: 100,
        weightLimit: 50,
        perWeight: 1,
        pc: 27,
        durTime: "7-10",
        maxWeight: 2000,
        isBubbles: true,
        bubbleNumber: 6000,
        maxSize: 90,
        equalType: "ltqt",
        maxLong: 60,
        maxWidth: 60,
        maxHeight: 60,
        sideType: "lt"
      },
      zd: {
        perWeight: 500,
        weightLimit: 500,
        lt: 132,
        gt: 26,
        maxWeight: 30000,
        isBubbles: true,
        bubbleNumber: 6000,
        maxSize: 130,
        equalType: "ltqt",
        maxLong: 175,
        maxWidth: 175,
        maxHeight: 175,
        sideType: "ltqt"
      }
    },
    dhl: {
      pps: {
        pc: 36.7,
        kg: 78.6,
        maxWeight: 2000,
        isBubbles: false,
        maxSize: 90,
        equalType: "lt",
        maxLong: 60,
        maxWidth: 60,
        maxHeight: 60,
        sideType: "lt"
      }
    }
  },
  ES: {
    sf: {
      xb1: {
        pc: 20,
        kg: 80,
        durTime: "7-10",
        maxWeight: 2000,
        isBubbles: true,
        bubbleNumber: 6000,
        maxSize: 90,
        equalType: "ltqt",
        maxLong: 60,
        maxWidth: 60,
        maxHeight: 60,
        sideType: "lt"
      },
      xb3: {
        lt: 4.25,
        gt: 0.085,
        kg: 85,
        weightLimit: 50,
        perWeight: 1,
        pc: 28,
        durTime: "7-10",
        maxWeight: 2000,
        isBubbles: true,
        bubbleNumber: 6000,
        maxSize: 90,
        equalType: "ltqt",
        maxLong: 60,
        maxWidth: 60,
        maxHeight: 60,
        sideType: "lt"
      },
      ly: {
        pc: 17,
        kg: 80,
        maxWeight: 2000,
        isBubbles: true,
        bubbleNumber: 6000,
        maxSize: 90,
        equalType: "ltqt",
        maxLong: 60,
        maxWidth: 60,
        maxHeight: 60,
        sideType: "lt"
      },
      by: {
        pc: 19,
        kg: 71,
        durTime: "6-11",
        maxWeight: 2000,
        isBubbles: true,
        bubbleNumber: 8000,
        maxSize: 90,
        equalType: "ltqt",
        maxLong: 60,
        maxWidth: 60,
        maxHeight: 60,
        sideType: "lt"
      },
      zx: {
        pc: 16,
        kg: 54,
        durTime: "5-9",
        maxWeight: 2000,
        isBubbles: true,
        bubbleNumber: 6000,
        maxSize: 90,
        equalType: "ltqt",
        maxLong: 60,
        maxWidth: 60,
        maxHeight: 60,
        sideType: "lt"
      },
      zd: {
        perWeight: 500,
        weightLimit: 500,
        lt: 115,
        gt: 26,
        maxWeight: 30000,
        isBubbles: true,
        bubbleNumber: 6000,
        maxSize: 130,
        equalType: "ltqt",
        maxLong: 175,
        maxWidth: 175,
        maxHeight: 175,
        sideType: "ltqt"
      }
    },
    dhl: {
      pps: {
        pc: 23.7,
        kg: 73.6,
        maxWeight: 2000,
        isBubbles: false,
        maxSize: 90,
        equalType: "lt",
        maxLong: 60,
        maxWidth: 60,
        maxHeight: 60,
        sideType: "lt"
      }
    }
  },
  SE: {
    sf: {
      xb1: {
        pc: 20,
        kg: 100,
        durTime: "10-15",
        maxWeight: 2000,
        isBubbles: true,
        bubbleNumber: 6000,
        maxSize: 90,
        equalType: "ltqt",
        maxLong: 60,
        maxWidth: 60,
        maxHeight: 60,
        sideType: "lt"
      },
      ly: {
        pc: 20,
        kg: 75,
        maxWeight: 2000,
        isBubbles: true,
        bubbleNumber: 6000,
        maxSize: 90,
        equalType: "ltqt",
        maxLong: 60,
        maxWidth: 60,
        maxHeight: 60,
        sideType: "lt"
      },
      xb2: {
        pc: 19,
        kg: 80,
        durTime: "7-12",
        maxWeight: 2000,
        isBubbles: true,
        bubbleNumber: 6000,
        maxSize: 90,
        equalType: "ltqt",
        maxLong: 60,
        maxWidth: 60,
        maxHeight: 60,
        sideType: "lt"
      },
      by: {
        pc: 25,
        kg: 65,
        durTime: "7-12",
        maxWeight: 2000,
        isBubbles: true,
        bubbleNumber: 8000,
        maxSize: 90,
        equalType: "ltqt",
        maxLong: 60,
        maxWidth: 60,
        maxHeight: 60,
        sideType: "lt"
      },
      zd: {
        perWeight: 500,
        weightLimit: 500,
        lt: 175,
        gt: 26,
        maxWeight: 30000,
        isBubbles: true,
        bubbleNumber: 6000,
        maxSize: 130,
        equalType: "ltqt",
        maxLong: 175,
        maxWidth: 175,
        maxHeight: 175,
        sideType: "ltqt"
      }
    },
    dhl: {
      pps: {
        pc: 20.3,
        kg: 73.7,
        maxWeight: 2000,
        isBubbles: false,
        maxSize: 90,
        equalType: "lt",
        maxLong: 60,
        maxWidth: 60,
        maxHeight: 60,
        sideType: "lt"
      }
    }
  },
  CH: {
    sf: {
      xb1: {
        pc: 18,
        kg: 75,
        durTime: "7-10",
        maxWeight: 2000,
        isBubbles: true,
        bubbleNumber: 6000,
        maxSize: 90,
        equalType: "ltqt",
        maxLong: 60,
        maxWidth: 60,
        maxHeight: 60,
        sideType: "lt"
      },
      xb2: {
        pc: 13,
        kg: 115,
        durTime: "7-12",
        maxWeight: 2000,
        isBubbles: true,
        bubbleNumber: 6000,
        maxSize: 90,
        equalType: "ltqt",
        maxLong: 60,
        maxWidth: 60,
        maxHeight: 60,
        sideType: "lt"
      }
    },
    dhl: {
      pps: {
        pc: 29.9,
        kg: 62.3,
        maxWeight: 2000,
        isBubbles: false,
        maxSize: 90,
        equalType: "lt",
        maxLong: 60,
        maxWidth: 60,
        maxHeight: 60,
        sideType: "lt"
      }
    }
  },
  TR: {
    sf: {
      xb1: {
        pc: 20,
        kg: 80,
        maxWeight: 2000,
        isBubbles: true,
        bubbleNumber: 6000,
        maxSize: 90,
        equalType: "ltqt",
        maxLong: 60,
        maxWidth: 60,
        maxHeight: 60,
        sideType: "lt"
      },
      xb3: {
        lt: 8,
        gt: 0.16,
        kg: 160,
        weightLimit: 50,
        perWeight: 1,
        pc: 21,
        maxWeight: 2000,
        isBubbles: true,
        bubbleNumber: 6000,
        maxSize: 90,
        equalType: "ltqt",
        maxLong: 60,
        maxWidth: 60,
        maxHeight: 60,
        sideType: "lt"
      },
      xb2: {
        pc: 13,
        kg: 115,
        durTime: "10-15",
        maxWeight: 2000,
        isBubbles: true,
        bubbleNumber: 6000,
        maxSize: 90,
        equalType: "ltqt",
        maxLong: 60,
        maxWidth: 60,
        maxHeight: 60,
        sideType: "lt"
      }
    },
    dhl: {
      pps: {
        pc: 21.2,
        kg: 74.6,
        maxWeight: 2000,
        isBubbles: false,
        maxSize: 90,
        equalType: "lt",
        maxLong: 60,
        maxWidth: 60,
        maxHeight: 60,
        sideType: "lt"
      }
    }
  },
  UA: {
    sf: {
      xb1: {
        pc: 5,
        kg: 107,
        durTime: "10-15",
        maxWeight: 2000,
        isBubbles: true,
        bubbleNumber: 6000,
        maxSize: 90,
        equalType: "ltqt",
        maxLong: 60,
        maxWidth: 60,
        maxHeight: 60,
        sideType: "lt"
      },
      xb2: {
        pc: 13,
        kg: 130,
        durTime: "8-15",
        maxWeight: 2000,
        isBubbles: true,
        bubbleNumber: 6000,
        maxSize: 90,
        equalType: "ltqt",
        maxLong: 60,
        maxWidth: 60,
        maxHeight: 60,
        sideType: "lt"
      },
      zx: {
        pc: 7,
        kg: 81,
        durTime: "7-15",
        maxWeight: 2000,
        isBubbles: true,
        bubbleNumber: 6000,
        maxSize: 90,
        equalType: "ltqt",
        maxLong: 60,
        maxWidth: 60,
        maxHeight: 60,
        sideType: "lt"
      },
      zd: {
        perWeight: 100,
        weightLimit: 100,
        lt: 50,
        gt: 10,
        maxWeight: 70000,
        isBubbles: true,
        bubbleNumber: 6000,
        maxSize: 130,
        equalType: "ltqt",
        maxLong: 175,
        maxWidth: 175,
        maxHeight: 175,
        sideType: "ltqt"
      }
    },
    dhl: {
      pps: {
        pc: 14.8,
        kg: 116.7,
        maxWeight: 2000,
        isBubbles: false,
        maxSize: 90,
        equalType: "lt",
        maxLong: 60,
        maxWidth: 60,
        maxHeight: 60,
        sideType: "lt"
      }
    }
  },
  GB: {
    sf: {
      xb1: {
        pc: 20,
        kg: 60,
        durTime: "6-10",
        maxWeight: 2000,
        isBubbles: true,
        bubbleNumber: 6000,
        maxSize: 90,
        equalType: "ltqt",
        maxLong: 60,
        maxWidth: 60,
        maxHeight: 60,
        sideType: "lt"
      },
      by: {
        pc: 27,
        kg: 71,
        durTime: "6-11",
        maxWeight: 2000,
        isBubbles: true,
        bubbleNumber: 8000,
        maxSize: 90,
        equalType: "ltqt",
        maxLong: 60,
        maxWidth: 60,
        maxHeight: 60,
        sideType: "lt"
      },
      xb2: {
        pc: 19,
        kg: 60,
        durTime: "7-12",
        maxWeight: 2000,
        isBubbles: true,
        bubbleNumber: 6000,
        maxSize: 90,
        equalType: "ltqt",
        maxLong: 60,
        maxWidth: 60,
        maxHeight: 60,
        sideType: "lt"
      },
      ly: {
        pc: 31,
        kg: 92,
        maxWeight: 2000,
        isBubbles: true,
        bubbleNumber: 6000,
        maxSize: 90,
        equalType: "ltqt",
        maxLong: 60,
        maxWidth: 60,
        maxHeight: 60,
        sideType: "lt"
      },
      xb3: {
        lt: 4,
        gt: 0.08,
        kg: 80,
        weightLimit: 50,
        perWeight: 1,
        pc: 18,
        durTime: "6-10",
        maxWeight: 2000,
        isBubbles: true,
        bubbleNumber: 6000,
        maxSize: 90,
        equalType: "ltqt",
        maxLong: 60,
        maxWidth: 60,
        maxHeight: 60,
        sideType: "lt"
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
        },
        maxWeight: 5000,
        isBubbles: true,
        bubbleNumber: 6000,
        maxSize: 130,
        equalType: "ltqt",
        maxLong: 175,
        maxWidth: 175,
        maxHeight: 175,
        sideType: "ltqt"
      }
    },
    dhl: {
      pps: {
        pc: 19.9,
        kg: 63.4,
        maxWeight: 2000,
        isBubbles: false,
        maxSize: 90,
        equalType: "lt",
        maxLong: 60,
        maxWidth: 60,
        maxHeight: 60,
        sideType: "lt"
      }
    }
  },
  America: {
    sf: {
      xb1: {
        pc: 17,
        kg: 217,
        maxWeight: 2000,
        isBubbles: true,
        bubbleNumber: 6000,
        maxSize: 90,
        equalType: "ltqt",
        maxLong: 60,
        maxWidth: 60,
        maxHeight: 60,
        sideType: "lt"
      },
      zd: {
        perWeight: 500,
        weightLimit: 500,
        lt: 128,
        gt: 26,
        maxWeight: 30000,
        isBubbles: true,
        bubbleNumber: 6000,
        maxSize: 130,
        equalType: "ltqt",
        maxLong: 175,
        maxWidth: 175,
        maxHeight: 175,
        sideType: "ltqt"
      }
    },
    dhl: {}
  },
  BR: {
    sf: {
      xb1: {
        pc: 23,
        kg: 100,
        maxWeight: 2000,
        isBubbles: true,
        bubbleNumber: 6000,
        maxSize: 90,
        equalType: "ltqt",
        maxLong: 60,
        maxWidth: 60,
        maxHeight: 60,
        sideType: "lt"
      },
      xb3: {
        lt: 6.5,
        gt: 0.13,
        kg: 130,
        weightLimit: 50,
        perWeight: 1,
        pc: 21,
        durTime: "20-30",
        maxWeight: 2000,
        isBubbles: true,
        bubbleNumber: 6000,
        maxSize: 90,
        equalType: "ltqt",
        maxLong: 60,
        maxWidth: 60,
        maxHeight: 60,
        sideType: "lt"
      },
      xb2: {
        pc: 13,
        kg: 165,
        durTime: "13-25",
        maxWeight: 2000,
        isBubbles: true,
        bubbleNumber: 6000,
        maxSize: 90,
        equalType: "ltqt",
        maxLong: 60,
        maxWidth: 60,
        maxHeight: 60,
        sideType: "lt"
      }
    },
    dhl: {
      pps: {
        pc: 21.9,
        kg: 94.5,
        maxWeight: 2000,
        isBubbles: false,
        maxSize: 90,
        equalType: "lt",
        maxLong: 60,
        maxWidth: 60,
        maxHeight: 60,
        sideType: "lt"
      }
    }
  },
  CL: {
    sf: {
      xb1: {
        pc: 20,
        kg: 120,
        maxWeight: 2000,
        isBubbles: true,
        bubbleNumber: 6000,
        maxSize: 90,
        equalType: "ltqt",
        maxLong: 60,
        maxWidth: 60,
        maxHeight: 60,
        sideType: "lt"
      },
      xb2: {
        pc: 12,
        kg: 150,
        durTime: "13-25",
        maxWeight: 2000,
        isBubbles: true,
        bubbleNumber: 6000,
        maxSize: 90,
        equalType: "ltqt",
        maxLong: 60,
        maxWidth: 60,
        maxHeight: 60,
        sideType: "lt"
      }
    },
    dhl: {
      pps: {
        pc: 15.3,
        kg: 130.7,
        maxWeight: 2000,
        isBubbles: false,
        maxSize: 90,
        equalType: "lt",
        maxLong: 60,
        maxWidth: 60,
        maxHeight: 60,
        sideType: "lt"
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
        kg: 180,
        maxWeight: 2000,
        isBubbles: true,
        bubbleNumber: 6000,
        maxSize: 90,
        equalType: "ltqt",
        maxLong: 60,
        maxWidth: 60,
        maxHeight: 60,
        sideType: "lt"
      },
      xb3: {
        lt: 9.75,
        kg: 195,
        gt: 0.195,
        weightLimit: 50,
        perWeight: 1,
        pc: 21,
        maxWeight: 2000,
        isBubbles: true,
        bubbleNumber: 6000,
        maxSize: 90,
        equalType: "ltqt",
        maxLong: 60,
        maxWidth: 60,
        maxHeight: 60,
        sideType: "lt"
      },
      xb2: {
        pc: 13,
        kg: 110,
        durTime: "10-15",
        maxWeight: 2000,
        isBubbles: true,
        bubbleNumber: 6000,
        maxSize: 90,
        equalType: "ltqt",
        maxLong: 60,
        maxWidth: 60,
        maxHeight: 60,
        sideType: "lt"
      }
    },
    dhl: {
      pps: {
        pc: 23.7,
        kg: 85,
        maxWeight: 2000,
        isBubbles: false,
        maxSize: 90,
        equalType: "lt",
        maxLong: 60,
        maxWidth: 60,
        maxHeight: 60,
        sideType: "lt"
      }
    }
  },
  TH: {
    sf: {
      xb1: {
        pc: 23,
        kg: 100,
        maxWeight: 2000,
        isBubbles: true,
        bubbleNumber: 6000,
        maxSize: 90,
        equalType: "ltqt",
        maxLong: 60,
        maxWidth: 60,
        maxHeight: 60,
        sideType: "lt"
      },
      xb3: {
        lt: 6.5,
        gt: 0.13,
        kg: 130,
        weightLimit: 50,
        perWeight: 1,
        pc: 11,
        maxWeight: 2000,
        isBubbles: true,
        bubbleNumber: 6000,
        maxSize: 90,
        equalType: "ltqt",
        maxLong: 60,
        maxWidth: 60,
        maxHeight: 60,
        sideType: "lt"
      },
      xb2: {
        pc: 11,
        kg: 65,
        durTime: "6-10",
        maxWeight: 2000,
        isBubbles: true,
        bubbleNumber: 6000,
        maxSize: 90,
        equalType: "ltqt",
        maxLong: 60,
        maxWidth: 60,
        maxHeight: 60,
        sideType: "lt"
      }
    },
    dhl: {
      pps: {
        pc: 27.9,
        kg: 61.2,
        maxWeight: 2000,
        isBubbles: false,
        maxSize: 90,
        equalType: "lt",
        maxLong: 60,
        maxWidth: 60,
        maxHeight: 60,
        sideType: "lt"
      }
    }
  },
  ID: {
    sf: {
      xb1: {
        pc: 17,
        kg: 155,
        maxWeight: 2000,
        isBubbles: true,
        bubbleNumber: 6000,
        maxSize: 90,
        equalType: "ltqt",
        maxLong: 60,
        maxWidth: 60,
        maxHeight: 60,
        sideType: "lt"
      },
      xb2: {
        pc: 11,
        kg: 65,
        durTime: "15-22",
        maxWeight: 2000,
        isBubbles: true,
        bubbleNumber: 6000,
        maxSize: 90,
        equalType: "ltqt",
        maxLong: 60,
        maxWidth: 60,
        maxHeight: 60,
        sideType: "lt"
      }
    },
    dhl: {
      pps: {
        pc: 21.5,
        kg: 102.6,
        maxWeight: 2000,
        isBubbles: false,
        maxSize: 90,
        equalType: "lt",
        maxLong: 60,
        maxWidth: 60,
        maxHeight: 60,
        sideType: "lt"
      }
    }
  },
  PH: {
    sf: {
      xb1: {
        pc: 18,
        kg: 217,
        maxWeight: 2000,
        isBubbles: true,
        bubbleNumber: 6000,
        maxSize: 90,
        equalType: "ltqt",
        maxLong: 60,
        maxWidth: 60,
        maxHeight: 60,
        sideType: "lt"
      }
    },
    dhl: {
      pps: {
        pc: 15,
        kg: 103.9,
        maxWeight: 2000,
        isBubbles: false,
        maxSize: 90,
        equalType: "lt",
        maxLong: 60,
        maxWidth: 60,
        maxHeight: 60,
        sideType: "lt"
      }
    }
  },
  VN: {
    sf: {
      xb1: {
        pc: 14,
        kg: 180,
        maxWeight: 2000,
        isBubbles: true,
        bubbleNumber: 6000,
        maxSize: 90,
        equalType: "ltqt",
        maxLong: 60,
        maxWidth: 60,
        maxHeight: 60,
        sideType: "lt"
      },
      xb2: {
        pc: 11,
        kg: 65,
        durTime: "6-10",
        maxWeight: 2000,
        isBubbles: true,
        bubbleNumber: 6000,
        maxSize: 90,
        equalType: "ltqt",
        maxLong: 60,
        maxWidth: 60,
        maxHeight: 60,
        sideType: "lt"
      }
    },
    dhl: {
      pps: {
        pc: 14.8,
        kg: 102.5,
        maxWeight: 2000,
        isBubbles: false,
        maxSize: 90,
        equalType: "lt",
        maxLong: 60,
        maxWidth: 60,
        maxHeight: 60,
        sideType: "lt"
      }
    }
  },
  MY: {
    sf: {
      xb1: {
        pc: 14,
        kg: 180,
        maxWeight: 2000,
        isBubbles: true,
        bubbleNumber: 6000,
        maxSize: 90,
        equalType: "ltqt",
        maxLong: 60,
        maxWidth: 60,
        maxHeight: 60,
        sideType: "lt"
      },
      xb3: {
        lt: 6.5,
        gt: 0.13,
        kg: 130,
        weightLimit: 50,
        perWeight: 1,
        pc: 11,
        maxWeight: 2000,
        isBubbles: true,
        bubbleNumber: 6000,
        maxSize: 90,
        equalType: "ltqt",
        maxLong: 60,
        maxWidth: 60,
        maxHeight: 60,
        sideType: "lt"
      },
      xb2: {
        pc: 13,
        kg: 95,
        durTime: "6-10",
        maxWeight: 2000,
        isBubbles: true,
        bubbleNumber: 6000,
        maxSize: 90,
        equalType: "ltqt",
        maxLong: 60,
        maxWidth: 60,
        maxHeight: 60,
        sideType: "lt"
      }
    },
    dhl: {
      pps: {
        pc: 15.5,
        kg: 101.8,
        maxWeight: 2000,
        isBubbles: false,
        maxSize: 90,
        equalType: "lt",
        maxLong: 60,
        maxWidth: 60,
        maxHeight: 60,
        sideType: "lt"
      }
    }
  },
  SG: {
    sf: {
      xb1: {
        pc: 15,
        kg: 130,
        maxWeight: 2000,
        isBubbles: true,
        bubbleNumber: 6000,
        maxSize: 90,
        equalType: "ltqt",
        maxLong: 60,
        maxWidth: 60,
        maxHeight: 60,
        sideType: "lt"
      },
      xb2: {
        pc: 11,
        kg: 65,
        durTime: "6-10",
        maxWeight: 2000,
        isBubbles: true,
        bubbleNumber: 6000,
        maxSize: 90,
        equalType: "ltqt",
        maxLong: 60,
        maxWidth: 60,
        maxHeight: 60,
        sideType: "lt"
      }
    },
    dhl: {
      pps: {
        pc: 27.3,
        kg: 36.2,
        maxWeight: 2000,
        isBubbles: false,
        maxSize: 90,
        equalType: "lt",
        maxLong: 60,
        maxWidth: 60,
        maxHeight: 60,
        sideType: "lt"
      }
    }
  },
  TW: {
    sf: {},
    dhl: {
      pps: {
        pc: 14.7,
        kg: 96.1,
        maxWeight: 2000,
        isBubbles: false,
        maxSize: 90,
        equalType: "lt",
        maxLong: 60,
        maxWidth: 60,
        maxHeight: 60,
        sideType: "lt"
      }
    }
  },
  JP: {
    sf: {
      xb1: {
        pc: 21,
        kg: 90,
        maxWeight: 2000,
        isBubbles: true,
        bubbleNumber: 6000,
        maxSize: 90,
        equalType: "ltqt",
        maxLong: 60,
        maxWidth: 60,
        maxHeight: 60,
        sideType: "lt"
      },
      xb2: {
        pc: 11,
        kg: 50,
        durTime: "6-10",
        maxWeight: 2000,
        isBubbles: true,
        bubbleNumber: 6000,
        maxSize: 90,
        equalType: "ltqt",
        maxLong: 60,
        maxWidth: 60,
        maxHeight: 60,
        sideType: "lt"
      }
    },
    dhl: {
      pps: {
        pc: 14.8,
        kg: 66.4,
        maxWeight: 2000,
        isBubbles: false,
        maxSize: 90,
        equalType: "lt",
        maxLong: 60,
        maxWidth: 60,
        maxHeight: 60,
        sideType: "lt"
      }
    }
  },
  KR: {
    sf: {
      zx: {
        pc: 18,
        kg: 21.5,
        durTime: "4-6",
        maxWeight: 2000,
        isBubbles: true,
        bubbleNumber: 6000,
        maxSize: 90,
        equalType: "ltqt",
        maxLong: 60,
        maxWidth: 60,
        maxHeight: 60,
        sideType: "lt"
      }
    },
    dhl: {}
  },
  Other: {
    sf: {
      xb1: {
        pc: 20,
        kg: 217,
        durTime: "6-22",
        maxWeight: 2000,
        isBubbles: true,
        bubbleNumber: 6000,
        maxSize: 90,
        equalType: "ltqt",
        maxLong: 60,
        maxWidth: 60,
        maxHeight: 60,
        sideType: "lt"
      }
    },
    dhl: {
      pps: {
        pc: 18.4,
        kg: 156.6,
        maxWeight: 2000,
        isBubbles: false,
        maxSize: 90,
        equalType: "lt",
        maxLong: 60,
        maxWidth: 60,
        maxHeight: 60,
        sideType: "lt"
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
  "KR",
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
  IN: "印度",
  KR: "韩国"
};
//顺丰精品小包让利对照表
let sfxb3Profit = [
  {
    country: [
      "GB",
      "FR",
      "DE",
      "IT",
      "ES",
      "NL",
      "CA",
      "BE",
      "GR",
      "HU",
      "PT",
      "SK",
      "IE",
      "DK",
      "SI",
      "IS",
      "LU",
      "TR",
      "HR",
      "CY",
      "MX",
      "IL",
      "ZA",
      "LT",
      "LV",
      "EE",
      "RU",
      "FI",
      "NO",
      "PL",
      "BR",
      "TH",
      "KR",
      "LB",
      "MY",
      "NZ"
    ],
    profit: 1 - 0.15
  }
];
//顺丰国际专递让利对照表
let sfzdProfit = [
  {
    country: ["UA", "RU"],
    profit: 1 - 0.3
  }
];
//顺丰国际小包让利对照表
let sfxb1Profit = [
  {
    country: [
      "GB",
      "FR",
      "DE",
      "IT",
      "ES",
      "NL",
      "CA",
      "AT",
      "BE",
      "GR",
      "HU",
      "CH",
      "CA",
      "PT",
      "SK",
      "IE",
      "RO",
      "DK",
      "SI",
      "IS",
      "LU",
      "TR",
      "BG",
      "HR",
      "CY",
      "CL",
      "MX",
      "AR"
    ],
    profit: 1 - 0.15
  },
  {
    country: ["IL", "JP", "SG", "ZA", "AE", "BR", "KH", "IN", "ID", "TH"],
    profit: 1 - 0.15
  },
  {
    country: ["US"],
    profit: 1 - 0.1
  },
  {
    country: ["AU"],
    profit: 1 - 0.05
  },
  {
    country: ["UA"],
    profit: 1 - 0.15
  },
  {
    country: ["RU"],
    profit: 1 - 0.05
  },
  {
    country: ["LT", "LV", "EE", "BY"],
    profit: 1 - 0.05
  },
  {
    country: ["PL"],
    profit: 1 - 0.05
  }
];
//顺丰卢邮让利对照表
let sflyProfit = [
  {
    country: ["AT", "BE", "DK", "ES", "IT", "LU", "NL", "PL", "SE"],
    profit: 1 - 0.1
  },
  {
    country: ["DE", "FR", "GB"],
    profit: 1 - 0.4
  }
];
//顺丰比邮小包让利对照表
let sfbyProfit = [
  {
    country: [
      "AT",
      "BE",
      "DK",
      "FI",
      "FR",
      "DE",
      "IT",
      "GR",
      "LU",
      "NL",
      "NO",
      "PT",
      "ES",
      "SE",
      "HU",
      "CZ",
      "SK",
      "SI",
      "PL",
      "EE",
      "LV",
      "LT",
      "MT"
    ],
    profit: 1 - 0.05
  }
];
//顺丰国际专线让利对照表
let sfzxProfit = [
  {
    country: ["UA", "KR"],
    profit: 1 - 0.05
  },
  {
    country: ["FR", "ES"],
    profit: 1 - 0.05
  }
];
export {
  countryFreight,
  country,
  countryList,
  sfxb3Profit,
  sfzdProfit,
  sfxb1Profit,
  sflyProfit,
  sfbyProfit,
  sfzxProfit
};
