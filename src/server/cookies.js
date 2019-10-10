import Cookies from "universal-cookie";
import _ from "lodash";

function setCookie(cname, cvalue, days = 3) {
  const cookies = new Cookies();
  let date = new Date();
  let expireTime = date.getTime() + 1000 * 60 * 60 * 24 * days;
  date.setTime(expireTime);
  cookies.set(cname, cvalue, { expires: date });
}

function clearCookie(cname) {
  var d = new Date();
  d.setTime(
    d.getTime() + "Thu, 01 Jan 1970 00:00:00 UTC" * 24 * 60 * 60 * 1000
  );
  var expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=;" + expires + ";path=/";
}
function getCookie(cname) {
  const cookies = new Cookies();
  const cookiesValue =
    cookies.get(cname) || JSON.parse(window.sessionStorage.getItem(cname));
  return cookiesValue;
}

export { setCookie, clearCookie, getCookie };
