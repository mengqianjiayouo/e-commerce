/*
 * action 类型
 */

export const LOGIN = "LOGIN";

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
