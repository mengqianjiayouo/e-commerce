// import React from 'react'
import createHistory from "history/createBrowserHistory";
import { Modal } from "antd";
import $ from "jquery";
import { getCookie, clearCookie } from "./cookies";

const history = createHistory({
  forceRefresh: true
});

class Api {
  constructor() {
    this._locks = {};
  }

  $get(url, data, success, error) {
    return this.$ajax("GET", url, data, success, error);
  }

  $post(url, data, success, error) {
    return this.$ajax("POST", url, data, success, error);
  }

  $postJSON(url, data, success, error) {
    return this.$ajax(
      "POST",
      url,
      data,
      success,
      error,
      "application/json;charset=utf-8"
    );
  }
  $delete(url, data, success, error) {
    return this.$ajax("DELETE", url, data, success, error);
  }

  $ajax(method, url, data, success, error, contentType) {
    let _this = this;

    this._locks[url] = 1;
    let ApiKey = getCookie("ApiKey");
    return $.ajax({
      type: method,
      url: url,
      data: contentType ? JSON.stringify(data) : data,
      beforeSend: function(xhr) {
        xhr.withCredentials = true;
        if (ApiKey && ApiKey !== "") {
          xhr.setRequestHeader("ApiKey", ApiKey);
        }
      },
      crossDomain: true,
      contentType: contentType
        ? "application/json; charset=UTF-8"
        : "application/x-www-form-urlencoded; charset=UTF-8",
      success: function(resp /* status*/ /*, xhr*/) {
        delete _this._locks[url];

        resp = resp ? resp : {};

        if (resp.errnum == -1) {
          return history.replace("/signin");
        }
        if (resp.errnum == 10103) return history.replace("/signin");

        if (resp.errmsg) return _this.ajaxError(resp.errmsg, error);

        success && success((resp.data && resp.data) || resp);
      },
      error: function(xhr, status /*, err*/) {
        if (status == "abort") return;
        if (xhr.status === 401) {
          delete _this._locks[url];
          _this.ajaxError("登录过期，请重新登录！", error, true);
        }
        delete _this._locks[url];
        _this.ajaxError(null, error);
      }
    });
  }

  ajaxError(str, error, isLogin) {
    if (str) {
      Modal.warning({
        title: "提示",
        content: str || "网络出错了，请刷新后重试!!",
        onOk: () => {
          if (isLogin) {
            clearCookie("ApiKey");
            history.push("/signin");
            // window.open("/signin");
          }
        }
      });
    }
    return error && error();
  }
}

export { Api };
