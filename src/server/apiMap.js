// const server1 = "http://47.94.223.5:8004"; //张文宝接口前缀
const server1 = "https://important.cnshanzhi.com"; //张文宝接口前缀
// const server2 = "http://118.25.155.176/"; //祚家接口前缀
const server2 = "https://news.cnshanzhi.com"; //祚家接口前缀
const isDev = process.env.NODE_ENV === "development";
const apiList1 = {
  login: {
    path: "/api/auth/login"
  },
  signUp: {
    path: "/api/auth/register"
  },
  memberInfo: {
    path: "/api/member/info"
  },
  recharge: {
    path: "/api/alipay/charge"
  },
  amazonList: {
    path: "/api/amazonshop/myshops"
  },
  amazonSiteList: {
    path: "/api/amazonshop/marketplaces"
  },
  addAmazonshop: {
    path: "/api/amazonshop/add"
  }
};
const apiList2 = {
  messageList: {
    path: "/api/message/getList"
  },
  bannerList: {
    path: "/api/banner/getAll"
  },
  addMessage: {
    path: "/api/message/add"
  }
};
if (!isDev) {
  Object.keys(apiList1).map(key => {
    apiList1[key].path = server1 + apiList1[key].path;
  });
  Object.keys(apiList2).map(key => {
    apiList2[key].path = server2 + apiList2[key].path;
  });
} else {
  Object.keys(apiList1).map(key => {
    apiList1[key].path = "/server1" + apiList1[key].path;
  });
  Object.keys(apiList2).map(key => {
    apiList2[key].path = "/server2" + apiList2[key].path;
  });
}
export { apiList1, apiList2 };
