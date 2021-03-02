# hey-utils

## 判断类型

### isObject  
### isArray  
### isDate  
### isNumber  
### isString  
### isBoolean  
### isFunction  
### isNull  
### isPlainObject  


### add(arg1, arg2)
加法

### sub(arg1, arg2)
减法

### mul(arg1, arg2)
乘法

### div(arg1, arg2)
除法

## 对象复制，合并，赋值

### extend  
用一个或多个其他对象来扩展一个对象，返回被扩展的对象。  
如果第一个参数设置为true，则返回一个深层次的副本，递归地复制找到的任何对象。  
否则的话，副本会与原对象共享结构。 未定义的属性将不会被复制，然而从对象的原型继承的属性将会被复制。  

### freeze
深度冻结对象
Object.freeze的深度实现

### copy
深度拷贝对象  
Object.assign的深度实现

### getKeyValue
获取深度path的对象值


## uuid()
生成唯一值

## getURLParam(path, search)
获取url参数，例：aa.com?a=1  
```js
utils.getURLParam('a', window.location.search)  //1
```

## getAuthor
获取author, 配合umock系统

### 所有方法汇总
```
// 全局参数
client, // client方法返回一个浏览器判断结果对象
pattern, // pattern返回一些常用的正则

// String扩展、数组方法
trim, // 根据传参来去除空格
clearAttr, // 去除HTML标签所有属性
clearBr, // 去除换行
clearHtml, // 去除HTML标签
clearHtmlExpSN, // 去除HTML标签保留空格、换行
clearHtmlN, // 去除HTML标签及换行
clearHtmlNS, // 去除HTML标签及空格、换行
clearHtmlTag, // 去除HTML标签及标签里面的文字
getNumber, // 获取字符串中的数字
imgAdapt, // 扩展图片自动适应多种分辨率small original
imgChoose, // 扩展图片自动适应多种分辨率@2x @3x
getRandomNum, // 获取随机整数
getRandomStr, // 获取随机字符串
getRandomStrWidthSpecialChar, // 获取随机字符串带特殊符号
getCHSLength, // 获取字符串长度，中文算2个字符
cutCHSString, // 截取字符串，中文算2个字节
textareaInsertText, // textarea或input对象在指定的光标位置插入文字
textareaMoveToEnd, // textarea或input对象将光标定位到文字尾部

// 获取一下状态
isDigitals, // 是否为由数字组成的字符串
isExitsFunction, // 是否存在指定函数
isExitsVariable, // 是否存在指定变量
getWindowSize, // getWindowSize获取窗口大小
getAppVersion, // 获取APP版本号
getOsVersion, // 获取手机系统版本
getIsAppVersionLastest, // 版本号大小对比
getDirParam, // 获取目录形式URL参数
getParameter, // 获取单个URL参数
getFileType, // 文件后缀名
getUrlParam, // 获取URL参数

// 日期格式化
formatTime, // 日期格式化插件
formatTimeStr, // 格式化时间成：刚刚、几分钟前

// 缓存、cookie、session
setCookie, // setCookie写入cookie的方法
setLocal, // 写localStorage
setSession, // 写sessionStorage
getCookie, // 读取cookies
getLocal, // 读取localStorage
getSession, // 读取sessionStorage
delCookie, // 删除cookie
delLocal, // 删除localStorage
delSession, // 删除sessionStorage

// 编码与解码
encodeBase64, // 字符串、数字转base64
encodeUtf8, // 编码Utf8
decodeBase64, // base64解码
decodeUtf8, // 解码Utf8
enWxJumpLink, // 用*替换= 用!替换& 转码成微信跳转链接
enWxJumpLinkOld, // 用~替换= 用^替换& 转码成微信跳转链接
deWxJumpLink, // 用=替换* 用&替换! 解码成微信跳转链接
deWxJumpLinkOld, // 用=替换~ 用&替换^ 解码成微信跳转链接

// 防抖与限流
debounce, // 空闲控制 返回函数连续调用时，空闲时间必须大于或等于 delay，fn 才会执行
throttle, // 频率控制 返回函数连续调用时，fn 执行频率限定为每多少时间执行一次

// 事件委托、其他事件方法
stopBubble, // 阻止冒泡
stopDefault, // 阻止默认事件
addEvent, // 事件委托，支持多次委托
removeEvent, // removeEvent移除由addEvent创建的事件委托
getScrollPosition, // 获取滑动到顶部和底部 返回'top' 'bottom'，建议使用限流
```
