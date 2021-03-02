var isObject = (input) => {
  return Object.prototype.toString.call(input) === '[object Object]';
}
var isArray = (input) => {
  return input instanceof Array || Object.prototype.toString.call(input) === '[object Array]';
}
var isDate = (input) => {
  return input instanceof Date || Object.prototype.toString.call(input) === '[object Date]';
}
var isNumber = (input) => {
  return input instanceof Number || Object.prototype.toString.call(input) === '[object Number]';
}
var isString = (input) => {
  return input instanceof String || Object.prototype.toString.call(input) === '[object String]';
}
var isBoolean = (input) => {
  return typeof input == 'boolean';
}
var isFunction = (input) => {
  return typeof input == 'function';
}
var isNull = (input) => {
  return input === undefined || input === null;
}
var isPlainObject = (obj) => {
  if (obj && Object.prototype.toString.call(obj) === "[object Object]" && obj.constructor === Object && !hasOwnProperty.call(obj, "constructor")) {
    var key;
    for (key in obj) { }
    return key === undefined || hasOwnProperty.call(obj, key);
  }
  return false;
}
var add = (arg1, arg2) => {
  let s1 = arg1.toString();
  let s2 = arg2.toString();
  let arg1Arr = s1.split(".");
  let arg2Arr = s2.split(".");
  let d1 = arg1Arr.length == 2 ? arg1Arr[1] : "";
  let d2 = arg2Arr.length == 2 ? arg2Arr[1] : "";
  let maxLen = Math.max(d1.length, d2.length);
  let m = Math.pow(10, maxLen);
  return Number(((s1 * m + s2 * m) / m).toFixed(maxLen));
}
var sub = (arg1, arg2) => {
  return this.add(arg1, -arg2);
}
var mul = (arg1, arg2) => {
  let m = 0;
  let s1 = arg1.toString();
  let s2 = arg2.toString();
  try { m += s1.split(".")[1].length } catch (e) { }
  try { m += s2.split(".")[1].length } catch (e) { }
  return Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m);
}
var div = (arg1, arg2) => {
  let t1 = 0;
  let t2 = 0;
  try { t1 = arg1.toString().split(".")[1].length } catch (e) { }
  try { t2 = arg2.toString().split(".")[1].length } catch (e) { }
  let r1 = Number(arg1.toString().replace(".", ""));
  let r2 = Number(arg2.toString().replace(".", ""));
  return this.mul((r1 / r2), Math.pow(10, t2 - t1));
}
var getBrowserType = () => {
  let userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
  let isOpera = userAgent.indexOf("Opera") > -1; //判断是否Opera浏览器
  let isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera; //判断是否IE浏览器
  let isIE11 = userAgent.indexOf('Trident') > -1 && userAgent.indexOf("rv:11.0") > -1;
  let isEdge = userAgent.indexOf("Edge") > -1 && !isIE; //判断是否IE的Edge浏览器  
  let isFF = userAgent.indexOf("Firefox") > -1; //判断是否Firefox浏览器
  let isSafari = userAgent.indexOf("Safari") > -1 && userAgent.indexOf("Chrome") == -1; //判断是否Safari浏览器
  let isChrome = userAgent.indexOf("Chrome") > -1 && userAgent.indexOf("Safari") > -1; //判断Chrome浏览器

  if (isIE) {
    let reIE = new RegExp("MSIE (\\d+\\.\\d+);");
    reIE.test(userAgent);
    let fIEVersion = parseFloat(RegExp["$1"]);
    if (fIEVersion == 7) return "IE7"
    else if (fIEVersion == 8) return "IE8";
    else if (fIEVersion == 9) return "IE9";
    else if (fIEVersion == 10) return "IE10";
    else return "IE7以下" //IE版本过低
  }
  if (isIE11) return 'IE11';
  if (isEdge) return "Edge";
  if (isFF) return "FF";
  if (isOpera) return "Opera";
  if (isSafari) return "Safari";
  if (isChrome) return "Chrome";
}
var checkStr = (str, type) => {
  switch (type) {
    case 'phone': //手机号码
      return /^1[3|4|5|6|7|8|9][0-9]{9}$/.test(str);
    case 'tel': //座机
      return /^(0\d{2,3}-\d{7,8})(-\d{1,4})?$/.test(str);
    case 'pwd': //密码以字母开头，长度在6~18之间，只能包含字母、数字和下划线
      return /^[a-zA-Z]\w{5,17}$/.test(str)
    case 'postal': //邮政编码
      return /[1-9]\d{5}(?!\d)/.test(str);
    case 'QQ': //QQ号
      return /^[1-9][0-9]{4,9}$/.test(str);
    case 'email': //邮箱
      return /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(str);
    case 'money': //金额(小数点2位)
      return /^\d*(?:\.\d{0,2})?$/.test(str);
    case 'URL': //网址
      return /(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/.test(str)
    case 'IP': //IP
      return /((?:(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d)\\.){3}(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d))/.test(str);
    case 'date': //日期时间
      return /^(\d{4})\-(\d{2})\-(\d{2}) (\d{2})(?:\:\d{2}|:(\d{2}):(\d{2}))$/.test(str) || /^(\d{4})\-(\d{2})\-(\d{2})$/.test(str)
    case 'number': //数字
      return /^[0-9]$/.test(str);
    case 'english': //英文
      return /^[a-zA-Z]+$/.test(str);
    case 'chinese': //中文
      return /^[\u4E00-\u9FA5]+$/.test(str);
    case 'lower': //小写
      return /^[a-z]+$/.test(str);
    case 'upper': //大写
      return /^[A-Z]+$/.test(str);
    case 'HTML': //HTML标记
      return /<("[^"]*"|'[^']*'|[^'">])*>/.test(str);
    default:
      return true;
  }
}

export {
  isObject, isArray, isDate, isNumber, isString, isBoolean, isFunction,
  isNull, isPlainObject, add, sub, mul, div, getBrowserType, checkStr
};