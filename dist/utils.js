!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.utils=t():e.utils=t()}(self,(function(){return(()=>{"use strict";var __webpack_modules__={41:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function getAppVersion(appName,withappstr,userAgent){userAgent=userAgent||navigator.appVersion;var reg=eval("/"+appName+"\\/([\\d\\.]+)/"),isApp=userAgent.includes(appName),ver=userAgent.match(reg,"i");return ver?withappstr?ver?ver[0]:"":ver?ver[1]:"":isApp?(console.log(appName+"未知版本号"),!1):(console.log(appName+"不存在"),null)}__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=getAppVersion},442:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _getAppVersion__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(41);function getOsVersion(osName,withosstr,userAgent){userAgent=userAgent||navigator.appVersion;var d=["iPhone","iPad","iPod","iWatch","Mac","iMac","iOS"],name=osName,index=d.indexOf(osName);index>-1&&userAgent.indexOf("like Mac OS X")>-1&&(name="OS");var reg=eval("/"+name+"\\s[\\d\\_]+/"),isApp=userAgent.includes(name),ver=(userAgent.match(reg,"ig")+"").replace(/\s/gi,"/").replace(/_/gi,".");return index>-1&&(ver=ver.replace(/OS\//gi,osName+"/")),(0,_getAppVersion__WEBPACK_IMPORTED_MODULE_0__.Z)(osName,withosstr,ver)}const __WEBPACK_DEFAULT_EXPORT__=getOsVersion},327:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function isExitsFunction(funcName){try{if("function"==typeof eval(funcName))return!0}catch(e){}return!1}__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=isExitsFunction}},__webpack_module_cache__={};function __webpack_require__(e){if(__webpack_module_cache__[e])return __webpack_module_cache__[e].exports;var t=__webpack_module_cache__[e]={exports:{}};return __webpack_modules__[e](t,t.exports,__webpack_require__),t.exports}__webpack_require__.d=(e,t)=>{for(var r in t)__webpack_require__.o(t,r)&&!__webpack_require__.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},__webpack_require__.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),__webpack_require__.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var __webpack_exports__={};return(()=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{add:()=>he,addEvent:()=>oe,checkStr:()=>Se,clearAttr:()=>n,clearBr:()=>a,clearHtml:()=>o,clearHtmlExpSN:()=>i,clearHtmlN:()=>c,clearHtmlNS:()=>s,clearHtmlTag:()=>l,client:()=>e,cutCHSString:()=>h,deWxJumpLink:()=>Q,deWxJumpLinkOld:()=>X,debounce:()=>Y,decodeBase64:()=>V,decodeUtf8:()=>U,delCookie:()=>F,delLocal:()=>L,delSession:()=>Z,div:()=>be,enWxJumpLink:()=>K,enWxJumpLinkOld:()=>J,encodeBase64:()=>H,encodeUtf8:()=>q,formatTime:()=>T,formatTimeStr:()=>M,getAppVersion:()=>E.Z,getBrowserType:()=>xe,getCHSLength:()=>m,getCookie:()=>R,getDirParam:()=>$,getFileType:()=>k,getIsAppVersionLastest:()=>y,getLocal:()=>j,getNumber:()=>u,getOsVersion:()=>A.Z,getParameter:()=>C,getRandomNum:()=>_,getRandomStr:()=>g,getRandomStrWidthSpecialChar:()=>f,getScrollPosition:()=>ce,getSession:()=>W,getUrlParam:()=>P,getWindowSize:()=>O,imgAdapt:()=>p,imgChoose:()=>d,isArray:()=>le,isBoolean:()=>_e,isDate:()=>ue,isDigitals:()=>b,isExitsFunction:()=>x.Z,isExitsVariable:()=>S,isFunction:()=>ge,isNull:()=>fe,isNumber:()=>pe,isObject:()=>se,isPlainObject:()=>me,isString:()=>de,mul:()=>we,pattern:()=>t,removeEvent:()=>ie,setCookie:()=>N,setLocal:()=>D,setSession:()=>I,stopBubble:()=>ee,stopDefault:()=>te,sub:()=>ve,textareaInsertText:()=>v,textareaMoveToEnd:()=>w,throttle:()=>G,trim:()=>r});const e=(e="",t=navigator.appVersion)=>{const r=t.toLowerCase();return e?t.indexOf(e)>-1:{IE:r.indexOf("msie")>-1&&!r.indexOf("opera")>-1,GECKO:r.indexOf("gecko")>-1&&!r.indexOf("khtml")>-1,WEBKIT:r.indexOf("applewebkit")>-1,OPERA:r.indexOf("opera")>-1&&r.indexOf("presto")>-1,TRIDENT:r.indexOf("trident")>-1,MOBILE:!!t.match(/AppleWebKit.*Mobile.*/),IOS:!!t.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),ANDROID:t.indexOf("Android")>-1||t.indexOf("Adr")>-1,IPHONE:t.indexOf("iPhone")>-1,IPAD:t.indexOf("iPad")>-1,QQBROWSER:t.indexOf("QQBrowser")>-1,WEIXIN:t.indexOf("MicroMessenger")>-1,QQ:" qq"===t.match(/\sQQ/i)}},t={any:/[\w\W]+/,number:/^\d+$/,string:/^[\u4E00-\u9FA5\uf900-\ufa2d\w\.\s]+$/,postcode:/^[0-9]{6}$/,url:/^(\w+:\/\/)?\w+(\.\w+)+.*$/,username:/^[a-zA-Z0-9\_\-\.]{3,15}$/,float:/^[0-9]+\.{0,1}[0-9]{0,2}$/,email:/^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/,mobile:/^1[3|4|5|7|8][0-9]\d{8,8}$/,chinese:/^[\u4E00-\u9FA5\uf900-\ufa2d]$/,tel:/^(([0\+]\d{2,3}-)?(0\d{2,3})-)?(\d{7,8})(-(\d{3,}))?$/,qq:/^[1-9][0-9]{5,13}$/,pass:/^(?![0-9\W\_]+$)(?![a-zA-Z\W\_]+$)[0-9a-zA-Z\W\_]{6,16}$/,json:/^\{[\s\S]*\}$/,arrjson:/^\[\{[\s\S]*\}\]$/,array:/^\[[\s\S]*\]$/,isjson:/[\s\S]*(\{[\s\S]*\})[\s\S]*/,textarea:/[\u4e00-\u9fa5_a-zA-Z0-9\,\.\/\?\;\:\'\"\[\]\-\*\(\)\（\）\%\$\@\\\!\，\《\》\。\、\？\；\：\‘\’\“\”\…\￥\！]/},r=function(e,t=""){return t?"l"===t||"left"===t?e.replace(/^\s*/,""):"r"===t||"right"===t?e.replace(/\s*$/,""):"lr"===t||"around"===t?e.replace(/(^\s*)|(\s*$)/g,""):void 0:e.replace(/\s/g,"")},n=e=>e.replace(/<([a-zA-Z1-7]+)\s*[^><]*>/g,"<$1>"),a=e=>e.replace(/<\/br>/g,"").replace(/<br>/g,"").replace(/[\r\n]/g,""),o=e=>e.replace(/<\/?.+?>/g,"").replace(/[\r\n]/g,""),i=e=>e.replace(/<\/?[^\/?(br)][^><]*>/gi,""),c=e=>e.replace(/<\/?.+?>|[\r\n]/g,""),s=e=>e.replace(/<\/?.+?>|[\r\n\s]|(\ )/g,""),l=e=>e.replace(/<[^>]+>/g,""),u=e=>e.replace(/[^0-9.]/gi,""),p=(e,t)=>{if(!e)return!1;var r="",n=new RegExp("(.jpg|.png|.gif|.jpeg|.bmp|.webx)$","i");switch(new RegExp("([.small|.original].jpg|.png|.gif|.jpeg|.bmp|.webx)$","i"),t){case"s":return r=".small",e.replace(n,"$1"+r+"$1");case"m":return r="",e.replace(n,"$1"+r);case"l":return r=".original",e.replace(n,"$1"+r+"$1");default:return e}},d=e=>{var t=window.innerWidth,r="",n=new RegExp("(.jpg|.png|.gif|.jpeg|.bmp)","i"),a=new RegExp("(@[2|3]x)","i");return t>=480?r="@3x":t>=320?r="@2x":t>=240&&(r=""),e.replace(a,"").replace(n,r+"$1")},_=(e=1,t=10)=>{var r=t-e,n=Math.random();return e+Math.round(n*r)},g=(e=32,t=!1)=>{for(var r=t?"ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678~!@#$^&*_+=-.":"ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678",n=r.length,a="",o=0;o<e;o++)a+=r.charAt(Math.floor(Math.random()*n));return a},f=(e=32)=>{for(var t="ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678~!@#$^&*_+=-.",r=t.length,n="",a=0;a<e;a++)n+=t.charAt(Math.floor(Math.random()*r));return n},m=function(e){return e.replace(/[^\x00-\xff]/g,"**").length},h=function(e,t=e.length,r=!1){if(""!=e&&e){for(var n=0,a="",o=/[^\x00-\xff]/g,i="",c=e.replace(o,"**").length,s=0;s<c&&(null!=(i=e.charAt(s).toString()).match(o)?n+=2:n++,!(n>t));s++)a+=i;return r&&c>t&&(a+="..."),a}return""},v=function(e,t){if(document.selection)document.selection.createRange().text=t;else if("number"==typeof e.selectionStart&&"number"==typeof e.selectionEnd){var r=e.selectionStart,n=e.selectionEnd,a=r,o=e.value;e.value=o.substring(0,r)+t+o.substring(n,o.length),a+=t.length,setTimeout((function(){e.selectionStart=e.selectionEnd=a}),0)}else e.value+=t},w=function(e){e.focus();var t=e.value.length;if(document.selection){var r=e.createTextRange();r.moveStart("character",t),r.collapse(),r.select()}else"number"==typeof e.selectionStart&&"number"==typeof e.selectionEnd&&(e.selectionStart=e.selectionEnd=t)},b=e=>/^[0-9]*$/.test(e);var x=__webpack_require__(327);const S=function(e){try{return void 0!==e}catch(e){}return!1},O=function(){var e={width:0,height:0};return window.innerWidth?(e.width=window.innerWidth,e.height=window.innerHeight):document.body&&document.body.clientWidth&&(e.width=document.body.clientWidth,e.height=document.body.clientHeight),document.documentElement&&document.documentElement.clientWidth&&(e.width=document.documentElement.clientWidth,e.height=document.documentElement.clientHeight),e};var E=__webpack_require__(41),A=__webpack_require__(442);const y=function(e,t,r){r=r||navigator.appVersion;var n=e.indexOf(".")>0?e:(0,E.Z)(e,!1,r);if(null===n)return null;if(!1===n)return!1;n+=".",t+=".";var a=parseFloat(n),o=parseFloat(t),i=parseFloat(n.replace(a+".",""))||0,c=parseFloat(t.replace(o+".",""))||0;return!(o>a)&&(o<a||i>=c)},$=function(e){var t=new RegExp(/^http[s]?:\/\/[^\/]+([\s\S]*)/),r=""!=e&&void 0!==e?e.replace(t,"$1"):location.pathname;r=r.replace(/^\//,"");var n={};return n.host=""!=e&&void 0!==e?e.match(/^http[s]?:\/\/[^\/]+/)[0]:location.host,r.includes("/")&&(n.path=decodeURI(r).split("/")),n},C=function(e){var t=new RegExp("(^|&)"+e+"=([^&]*)(&|$)"),r=window.location.search.substr(1).match(t);return null!=r?unescape(r[2]):null},k=function(e){return"string"==typeof e&&""!=e&&/\.[^\.]+$/.exec(e)[0].toLowerCase()},P=function(e){var t=(e=""!==e&&void 0!==e?e.substr(e.indexOf("?")).split("#")[0]:location.search).substring(e.lastIndexOf("?")+1),r={};return t.replace(/([^?&=]+)=([^?&=]*)/g,(function(e,t,n){var a=decodeURIComponent(t),o=decodeURIComponent(n);return o=String(o),r[a]=o,e})),r},T=(e,t="yyyy-MM-dd")=>{"string"==typeof e&&(e=new Date(e));var r={"M+":e.getMonth()+1,"d+":e.getDate(),"h+":e.getHours(),"m+":e.getMinutes(),"s+":e.getSeconds(),"q+":Math.floor((e.getMonth()+3)/3),S:e.getMilliseconds()};for(var n in/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(""+e.getFullYear()).substr(4-RegExp.$1.length))),r)new RegExp("("+n+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?r[n]:("00"+r[n]).substr((""+r[n]).length)));return t},M=function(e=parseInt(e,10),t){var r=(new Date).getTime(),n=""!=t&&null!=t?t:"MM-dd",a=e;if(a&&!(a<1)){var o=r-a;return o<120?"刚刚":o<3600?parseInt(o/60)+"分钟前":o<86400?parseInt(o/3600)+"小时前":o<2592e3?parseInt(o/86400)+"天前":T(new Date(a),n)}},N=function(e,t,r){var n=new Date,a="";""!==r&&void 0!==r?(r*=1e3,a=n.getTime()+r):r=2592e6;var o=encodeURIComponent(JSON.stringify({value:t,expires:a}));n.setTime(n.getTime()+r),document.cookie=e+"="+o+";expires="+n.toGMTString()+";path=/"},D=function(e,t,r){var n=new Date,a=r?n.getTime()+1e3*r:"",o={};o.value=t,o.expires=a,o=JSON.stringify(o),localStorage.setItem(e,o)},I=function(e,t,r){var n=new Date,a=r?n.getTime()+1e3*r:"",o={};o.value=t,o.expires=a,o=JSON.stringify(o),sessionStorage.setItem(e,o)},R=function(e){var t,r=new RegExp("(^| )"+e+"=([^;]*)(;|$)");if(t=document.cookie.match(r)){var n=JSON.parse(decodeURIComponent(t[2]));return n.hasOwnProperty("value")&&n.hasOwnProperty("expires")?n.value:null}return null},j=function(e){var t=localStorage.getItem(e),r=new Date;if(t){var n=JSON.parse(t);return n.hasOwnProperty("value")&&n.hasOwnProperty("expires")?!n.expires||n.expires>r.getTime()?n.value:(localStorage.removeItem(e),null):null}return null},W=function(e){var t=sessionStorage.getItem(e),r=new Date;if(t){var n=JSON.parse(t);return n.hasOwnProperty("value")&&n.hasOwnProperty("expires")?!n.expires||n.expires>r.getTime()?n.value:(sessionStorage.removeItem(e),null):null}return null},F=function(e){var t=new Date;t.setTime(t.getTime()-1);var r=R(e);null!==r&&(document.cookie=e+"="+r+";expires="+t.toGMTString()+";path=/")},L=function(e){localStorage.removeItem(e)},Z=function(e){sessionStorage.removeItem(e)},q=e=>{e=e.replace(/\r\n/g,"\n");for(var t="",r=0;r<e.length;r++){var n=e.charCodeAt(r);n<128?t+=String.fromCharCode(n):n>127&&n<2048?(t+=String.fromCharCode(n>>6|192),t+=String.fromCharCode(63&n|128)):(t+=String.fromCharCode(n>>12|224),t+=String.fromCharCode(n>>6&63|128),t+=String.fromCharCode(63&n|128))}return t},B="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",H=e=>{var t,r,n,a,o,i,c,s="",l=0;for(e=q(e);l<e.length;)a=(t=e.charCodeAt(l++))>>2,o=(3&t)<<4|(r=e.charCodeAt(l++))>>4,i=(15&r)<<2|(n=e.charCodeAt(l++))>>6,c=63&n,isNaN(r)?i=c=64:isNaN(n)&&(c=64),s=s+B.charAt(a)+B.charAt(o)+B.charAt(i)+B.charAt(c);return s},U=function(e){for(var t="",r=0,n=0,a=0,o=0;r<e.length;)(n=e.charCodeAt(r))<128?(t+=String.fromCharCode(n),r++):n>191&&n<224?(a=e.charCodeAt(r+1),t+=String.fromCharCode((31&n)<<6|63&a),r+=2):(a=e.charCodeAt(r+1),o=e.charCodeAt(r+2),t+=String.fromCharCode((15&n)<<12|(63&a)<<6|63&o),r+=3);return t},z="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",V=e=>{var t,r,n,a,o,i,c="",s=0;for(e=e.replace(/[^A-Za-z0-9\+\/\=]/g,"");s<e.length;)t=z.indexOf(e.charAt(s++))<<2|(a=z.indexOf(e.charAt(s++)))>>4,r=(15&a)<<4|(o=z.indexOf(e.charAt(s++)))>>2,n=(3&o)<<6|(i=z.indexOf(e.charAt(s++))),c+=String.fromCharCode(t),64!=o&&(c+=String.fromCharCode(r)),64!=i&&(c+=String.fromCharCode(n));return U(c)},K=e=>e.replace(/[=]{1}/g,"*").replace(/[&]{1}/g,"!").replace(/[\[]{1}/g,"(").replace(/[\]]{1}/g,")"),J=e=>e.replace(/[=]/gi,"~").replace(/[&]/gi,"^"),Q=e=>e.replace(/[*]{1}/g,"=").replace(/[!]{1}/g,"&").replace(/[\(]{1}/g,"[").replace(/[\)]{1}/g,"]"),X=e=>e.replace(/[~]/gi,"=").replace(/[\^]/gi,"&"),G=function(e,t,r,n){var a,o,i,c=+new Date,s=0,l=0,u=null,p=function(){l=c,e.apply(o,i)};return function(){c=+new Date,o=this,i=arguments,a=c-(n?s:l)-t,clearTimeout(u),n?r?u=setTimeout(p,t):a>=0&&p():a>=0?p():r&&(u=setTimeout(p,-a)),s=c}},Y=(e,t,r)=>G(e,t,r,!0),ee=function(e){return e&&e.preventDefault?e.stopPropagation():e.cancelBubble=!0,!1},te=function(e){return e&&e.preventDefault?e.preventDefault():window.event.returnValue=!1,!1},re=(e,t,r)=>{if(e.addEventListener)e.addEventListener(t,r,!1);else{r.$$guid||(r.$$guid=re.guid++),e.events||(e.events={});var n=e.events[t];n||(n=e.events[t]={},e["on"+t]&&(n[0]=e["on"+t])),n[r.$$guid]=r,e["on"+t]=ne}};function ne(e){var t=!0;e=e||ae(((this.ownerDocument||this.document||this).parentWindow||window).event);var r=this.events[e.type];for(var n in r)this.$$handleEvent=r[n],!1===this.$$handleEvent(e)&&(t=!1);return t}function ae(e){return e.preventDefault=ae.preventDefault,e.stopPropagation=ae.stopPropagation,e}re.guid=1,ae.preventDefault=function(){this.returnValue=!1},ae.stopPropagation=function(){this.cancelBubble=!0};const oe=re,ie=(e,t,r)=>{e.removeEventListener?e.removeEventListener(t,r,!1):e.events&&e.events[t]&&delete e.events[t][r.$$guid]},ce=()=>{var e=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight,t=document.documentElement.scrollTop,r=document.body.scrollTop,n=document.documentElement.scrollHeight,a=document.body.scrollHeight,o=0,i=0;if(0===t){if(o=r,i=a,0===r)return"top"}else o=t,i=n;if(e+Math.floor(o)===i||e+Math.ceil(o)===i)return"bottom"};var se=e=>"[object Object]"===Object.prototype.toString.call(e),le=e=>e instanceof Array||"[object Array]"===Object.prototype.toString.call(e),ue=e=>e instanceof Date||"[object Date]"===Object.prototype.toString.call(e),pe=e=>e instanceof Number||"[object Number]"===Object.prototype.toString.call(e),de=e=>e instanceof String||"[object String]"===Object.prototype.toString.call(e),_e=e=>"boolean"==typeof e,ge=e=>"function"==typeof e,fe=e=>null==e,me=e=>{if(e&&"[object Object]"===Object.prototype.toString.call(e)&&e.constructor===Object&&!hasOwnProperty.call(e,"constructor")){var t;for(t in e);return void 0===t||hasOwnProperty.call(e,t)}return!1},he=(e,t)=>{let r=e.toString(),n=t.toString(),a=r.split("."),o=n.split("."),i=2==a.length?a[1]:"",c=2==o.length?o[1]:"",s=Math.max(i.length,c.length),l=Math.pow(10,s);return Number(((r*l+n*l)/l).toFixed(s))},ve=(e,t)=>(void 0).add(e,-t),we=(e,t)=>{let r=0,n=e.toString(),a=t.toString();try{r+=n.split(".")[1].length}catch(e){}try{r+=a.split(".")[1].length}catch(e){}return Number(n.replace(".",""))*Number(a.replace(".",""))/Math.pow(10,r)},be=(e,t)=>{let r=0,n=0;try{r=e.toString().split(".")[1].length}catch(e){}try{n=t.toString().split(".")[1].length}catch(e){}let a=Number(e.toString().replace(".","")),o=Number(t.toString().replace(".",""));return(void 0).mul(a/o,Math.pow(10,n-r))},xe=()=>{let e=navigator.userAgent,t=e.indexOf("Opera")>-1,r=e.indexOf("compatible")>-1&&e.indexOf("MSIE")>-1&&!t,n=e.indexOf("Trident")>-1&&e.indexOf("rv:11.0")>-1,a=e.indexOf("Edge")>-1&&!r,o=e.indexOf("Firefox")>-1,i=e.indexOf("Safari")>-1&&-1==e.indexOf("Chrome"),c=e.indexOf("Chrome")>-1&&e.indexOf("Safari")>-1;if(r){new RegExp("MSIE (\\d+\\.\\d+);").test(e);let t=parseFloat(RegExp.$1);return 7==t?"IE7":8==t?"IE8":9==t?"IE9":10==t?"IE10":"IE7以下"}return n?"IE11":a?"Edge":o?"FF":t?"Opera":i?"Safari":c?"Chrome":void 0},Se=(e,t)=>{switch(t){case"phone":return/^1[3|4|5|6|7|8|9][0-9]{9}$/.test(e);case"tel":return/^(0\d{2,3}-\d{7,8})(-\d{1,4})?$/.test(e);case"pwd":return/^[a-zA-Z]\w{5,17}$/.test(e);case"postal":return/[1-9]\d{5}(?!\d)/.test(e);case"QQ":return/^[1-9][0-9]{4,9}$/.test(e);case"email":return/^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(e);case"money":return/^\d*(?:\.\d{0,2})?$/.test(e);case"URL":return/(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/.test(e);case"IP":return/((?:(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d)\\.){3}(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d))/.test(e);case"date":return/^(\d{4})\-(\d{2})\-(\d{2}) (\d{2})(?:\:\d{2}|:(\d{2}):(\d{2}))$/.test(e)||/^(\d{4})\-(\d{2})\-(\d{2})$/.test(e);case"number":return/^[0-9]$/.test(e);case"english":return/^[a-zA-Z]+$/.test(e);case"chinese":return/^[\u4E00-\u9FA5]+$/.test(e);case"lower":return/^[a-z]+$/.test(e);case"upper":return/^[A-Z]+$/.test(e);case"HTML":return/<("[^"]*"|'[^']*'|[^'">])*>/.test(e);default:return!0}}})(),__webpack_exports__})()}));