/*
 * action 类型
 */

export const LOGIN = "LOGIN";
export const PLATCHANGE = "PLATCHANGE";

/*
 * 常量
 */

export const PAGE_SIZE = 20;

/*
 * action 创建函数
 */

/* 登录 */
export const login = user => {
  return { type: LOGIN, user };
};

export const platChange = plat => {
  return { type: PLATCHANGE, plat };
};
