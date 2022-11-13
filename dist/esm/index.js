/*
 * @Author: wenreq 294491328@qq.com
 * @Date: 2022-11-12 22:23:51
 * @LastEditors: wenreq 294491328@qq.com
 * @LastEditTime: 2022-11-12 22:24:39
 * @FilePath: /ny-utils/src/hello/hello.js
 * @Description:
 *
 * Copyright (c) 2022 by wenreq 294491328@qq.com, All Rights Reserved.
 */
function hello() {
  console.log("hello");
}

/*
 * @Author: wenreq 294491328@qq.com
 * @Date: 2022-11-12 22:23:42
 * @LastEditors: wenreq 294491328@qq.com
 * @LastEditTime: 2022-11-12 22:24:56
 * @FilePath: /ny-utils/src/goodbye/goodbye.js
 * @Description:
 *
 * Copyright (c) 2022 by wenreq 294491328@qq.com, All Rights Reserved.
 */
function goodbye() {
  console.log("goodbye");
}

/*
 * @Author: wenreq 294491328@qq.com
 * @Date: 2022-11-09 21:17:24
 * @LastEditors: wenreq 294491328@qq.com
 * @LastEditTime: 2022-11-13 19:18:39
 * @FilePath: /ny-utils/src/array/equalityArray.js
 * @Description:
 *
 * Copyright (c) 2022 by wenreq 294491328@qq.com, All Rights Reserved.
 */
/**
 * 判断两个数组是否相等
 * @date 2022-02-18
 * @param {Array} array1 第一个需要对比的数组
 * @param {Array} array2 第二个需要对比的数组
 * @returns {Boolean}
 */
let equalityArray = function equalityArray(array1, array2) {
  // 直接判读，两个不相等，则不相等。
  if (array1 === array2) {
    return true;
  }
  // 判断length，不相等，则不相等。
  if (array1.length !== array2.length) {
    return false;
  }
  // 循环判断各项，如有一项不相等，则不相等。
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  // 否则，则是相等的。
  return true;
};

/*
 * @Author: wenreq 294491328@qq.com
 * @Date: 2022-11-09 21:17:24
 * @LastEditors: wenreq 294491328@qq.com
 * @LastEditTime: 2022-11-10 22:57:28
 * @FilePath: /ny-utils/src/array/mergeArrayDelRepeat.js
 * @Description:
 *
 * Copyright (c) 2022 by wenreq 294491328@qq.com, All Rights Reserved.
 */
/**
 * 将多个数组合并为一个新的数组，并去重。
 * 该方法可以传一个或多个数组
 * @date 2022-02-18
 * @returns {Array} 将多个数组合并后并去重后的新数组
 */
let mergeArrayDelRepeat = function mergeArrayDelRepeat() {
  let newArr = [];
  for (let i = 0; i < arguments.length; i++) {
    newArr.push(...arguments[i]);
  }
  return [...new Set([...newArr])];
};

/*
 * @Author: wenreq 294491328@qq.com
 * @Date: 2022-11-09 21:17:24
 * @LastEditors: wenreq 294491328@qq.com
 * @LastEditTime: 2022-11-10 22:57:07
 * @FilePath: /ny-utils/src/array/subArray.js
 * @Description:
 *
 * Copyright (c) 2022 by wenreq 294491328@qq.com, All Rights Reserved.
 */
/**
 * 数组相减
 * 例如有两个数组
 * const arr1 = [1, 2, 3, 4, 5, 6] 和 const arr2 = [1, 2, 3]
 * 那么这时候需要第一个数组减去第二个数组中的项，返回剩下的项
 * 使用 subArray(arr1, arr2) 就可以解决这个问题
 * 返回 [4, 5, 6]
 * @date 2022-02-23
 * @param {Array} array1 要处理的数组
 * @param {Array} array2 要处理的数组
 * @returns {Array} 相减后的数组
 */
let subArray = function subArray(array1, array2) {
  if (array1.length > array2.length) {
    return array1.filter((item1) => {
      return !array2.find((item2) => {
        return item1 === item2;
      });
    });
  } else {
    return array2.filter((item1) => {
      return !array1.find((item2) => {
        return item1 === item2;
      });
    });
  }
};

/*
 * @Author: wenreq 294491328@qq.com
 * @Date: 2022-11-09 21:17:24
 * @LastEditors: wenreq 294491328@qq.com
 * @LastEditTime: 2022-11-10 22:56:45
 * @FilePath: /ny-utils/src/array/uniqueArray.js
 * @Description:
 *
 * Copyright (c) 2022 by wenreq 294491328@qq.com, All Rights Reserved.
 */
/**
 * 数组去除重复项
 * @date 2022-02-18
 * @param {Array} array 需要去重的数组
 * @returns {Array} 去重之后的数组，如果传入的不是数组则返回空数组。
 */
let uniqueArray = function uniqueArray(array) {
  if (!Array.isArray(array)) {
    throw new Error("第一个参数必须是数组");
  }
  if (array.length == 1) {
    return array;
  }
  return [...new Set(array)];
};

/*
 * @Author: wenreq 294491328@qq.com
 * @Date: 2022-11-09 21:17:24
 * @LastEditors: wenreq 294491328@qq.com
 * @LastEditTime: 2022-11-10 22:55:41
 * @FilePath: /ny-utils/src/class/hasClass.js
 * @Description:
 *
 * Copyright (c) 2022 by wenreq 294491328@qq.com, All Rights Reserved.
 */
/**
 * 判断元素是否有某个class
 * @date 2022-02-22
 * @param {HTMLElement} ele
 * @param {String} cls
 * @returns {Boolean} 包含返回true，否则返回false
 */
let hasClass = function hasClass(ele, cls) {
  return new RegExp("(\\s|^)" + cls + "(\\s|$)").test(ele.className);
};

/*
 * @Author: wenreq 294491328@qq.com
 * @Date: 2022-11-09 21:17:24
 * @LastEditors: wenreq 294491328@qq.com
 * @LastEditTime: 2022-11-11 21:24:02
 * @FilePath: /ny-utils/src/class/addClass.js
 * @Description:
 *
 * Copyright (c) 2022 by wenreq 294491328@qq.com, All Rights Reserved.
 */

/**
 * 为元素添加class
 * @date 2022-02-22
 * @param {HTMLElement} ele
 * @param {String} cls
 */
let addClass = function addClass(ele, cls) {
  if (!hasClass(ele, cls)) {
    ele.className += " " + cls;
  }
};

/*
 * @Author: wenreq 294491328@qq.com
 * @Date: 2022-11-09 21:17:24
 * @LastEditors: wenreq 294491328@qq.com
 * @LastEditTime: 2022-11-11 21:24:05
 * @FilePath: /ny-utils/src/class/removeClass.js
 * @Description:
 *
 * Copyright (c) 2022 by wenreq 294491328@qq.com, All Rights Reserved.
 */

/**
 * 为元素移除某个class类
 * @date 2022-02-22
 * @param {HTMLElement} ele 元素
 * @param {String} cls 类名
 */
let removeClass = function removeClass(ele, cls) {
  if (hasClass(ele, cls)) {
    var reg = new RegExp("(\\s|^)" + cls + "(\\s|$)");
    ele.className = ele.className.replace(reg, " ");
  }
};

/*
 * @Author: wenreq 294491328@qq.com
 * @Date: 2022-11-09 21:17:24
 * @LastEditors: wenreq 294491328@qq.com
 * @LastEditTime: 2022-11-10 22:54:19
 * @FilePath: /ny-utils/src/cookie/getCookie.js
 * @Description:
 *
 * Copyright (c) 2022 by wenreq 294491328@qq.com, All Rights Reserved.
 */
/**
 * 根据 name 读取 cookie
 * @date 2022-02-18
 * @param {String} name
 * @returns {String}
 */
let getCookie = function getCookie(name) {
  let cookieArr = document.cookie.replace(/\s/g, "").split(";");
  for (let i = 0; i < cookieArr.length; i++) {
    const eleArr = cookieArr[i].split("=");
    if (eleArr[0] === name) {
      return decodeURIComponent(eleArr[1]);
    }
  }
  return "";
};

/*
 * @Author: wenreq 294491328@qq.com
 * @Date: 2022-11-09 21:17:24
 * @LastEditors: wenreq 294491328@qq.com
 * @LastEditTime: 2022-11-10 22:52:57
 * @FilePath: /ny-utils/src/cookie/setCookie.js
 * @Description:
 *
 * Copyright (c) 2022 by wenreq 294491328@qq.com, All Rights Reserved.
 */
/**
 * 设置 cookie
 * @date 2022-02-18
 * @param {String} name cookie 名称
 * @param {String} value cookie 的值
 * @param {Number} days cookie 的有限天数
 */
let setCookie = function setCookie(name, value, days) {
  var date = new Date();
  date.setDate(date.getDate() + days);
  document.cookie = name + "=" + value + ";expires=" + date.toUTCString();
};

/*
 * @Author: wenreq 294491328@qq.com
 * @Date: 2022-11-09 21:17:24
 * @LastEditors: wenreq 294491328@qq.com
 * @LastEditTime: 2022-11-11 21:24:08
 * @FilePath: /ny-utils/src/cookie/removeCookie.js
 * @Description:
 *
 * Copyright (c) 2022 by wenreq 294491328@qq.com, All Rights Reserved.
 */

/**
 * 根据 name 删除 cookie
 * @date 2022-02-18
 * @param {String} name cookie 的名称
 */
let removeCookie = function removeCookie(name) {
  // 设置已过期，系统会立刻删除 cookie
  setCookie(name, "1", -1);
};

/*
 * @Author: wenreq 294491328@qq.com
 * @Date: 2022-11-09 21:17:24
 * @LastEditors: wenreq 294491328@qq.com
 * @LastEditTime: 2022-11-10 22:52:12
 * @FilePath: /ny-utils/src/device/getOS.js
 * @Description:
 *
 * Copyright (c) 2022 by wenreq 294491328@qq.com, All Rights Reserved.
 */
/**
 * 获取操作系统类型
 * @date 2022-02-23
 * @returns {String} 操作系统类型
 */
let getOS = function getOS() {
  var userAgent =
    ("navigator" in window &&
      "userAgent" in navigator &&
      navigator.userAgent.toLowerCase()) ||
    "";
  var appVersion =
    ("navigator" in window &&
      "appVersion" in navigator &&
      navigator.appVersion.toLowerCase()) ||
    "";

  if (
    /iphone/i.test(userAgent) ||
    /ipad/i.test(userAgent) ||
    /ipod/i.test(userAgent)
  )
    return "ios";
  if (/android/i.test(userAgent)) return "android";
  if (/win/i.test(appVersion) && /phone/i.test(userAgent))
    return "windowsPhone";
  if (/mac/i.test(appVersion)) return "MacOSX";
  if (/win/i.test(appVersion)) return "windows";
  if (/linux/i.test(appVersion)) return "linux";
};

/*
 * @Author: wenreq 294491328@qq.com
 * @Date: 2022-11-09 21:17:24
 * @LastEditors: wenreq 294491328@qq.com
 * @LastEditTime: 2022-11-11 23:49:16
 * @FilePath: /ny-utils/src/device/getExplore.js
 * @Description:
 *
 * Copyright (c) 2022 by wenreq 294491328@qq.com, All Rights Reserved.
 */
/**
 * 获取浏览器类型和版本
 * @date 2022-02-23
 * @returns {String} '类型：版本'
 */
let getExplore = function getExplore() {
  var sys = {},
    ua = navigator.userAgent.toLowerCase(),
    s;
  // IE - rv:11.0) like Gecko
  (s = ua.match(/rv:([\d.]+)\) like gecko/))
    ? (sys.ie = s[1])
    : (s = ua.match(/msie ([\d\.]+)/))
    ? (sys.ie = s[1])
    : (s = ua.match(/edge\/([\d\.]+)/))
    ? (sys.edge = s[1])
    : (s = ua.match(/firefox\/([\d\.]+)/))
    ? (sys.firefox = s[1])
    : (s = ua.match(/(?:opera|opr).([\d\.]+)/))
    ? (sys.opera = s[1])
    : (s = ua.match(/chrome\/([\d\.]+)/))
    ? (sys.chrome = s[1])
    : (s = ua.match(/version\/([\d\.]+).*safari/))
    ? (sys.safari = s[1])
    : 0;

  // 根据关系进行判断
  if (sys.ie) return "IE：" + sys.ie;
  if (sys.edge) return "EDGE: " + sys.edge;
  if (sys.firefox) return "Firefox: " + sys.firefox;
  if (sys.chrome) return "Chrome: " + sys.chrome;
  if (sys.opera) return "Opera: " + sys.opera;
  if (sys.safari) return "Safari: " + sys.safari;
  return "unknown";
};

/*
 * @Author: wenreq 294491328@qq.com
 * @Date: 2022-11-09 21:17:24
 * @LastEditors: wenreq 294491328@qq.com
 * @LastEditTime: 2022-11-10 22:51:14
 * @FilePath: /ny-utils/src/dom/getScrollTop.js
 * @Description:
 *
 * Copyright (c) 2022 by wenreq 294491328@qq.com, All Rights Reserved.
 */
/**
 * 获取滚动条距顶部的距离
 * @date 2022-02-24
 * @returns {Number}
 */
let getScrollTop = function getScrollTop() {
  return (
    (document.documentElement && document.documentElement.scrollTop) ||
    document.body.scrollTop
  );
};

/*
 * @Author: wenreq 294491328@qq.com
 * @Date: 2022-11-09 21:17:24
 * @LastEditors: wenreq 294491328@qq.com
 * @LastEditTime: 2022-11-10 22:50:14
 * @FilePath: /ny-utils/src/dom/offset.js
 * @Description:
 *
 * Copyright (c) 2022 by wenreq 294491328@qq.com, All Rights Reserved.
 */
/**
 * 获取一个元素距离文档（document）的位置，类似于JQ中的offset()
 * @date 2022-02-24
 * @param {HTMLElement} ele 元素
 * @returns { {left: number, top: number} } 距离文档左侧、顶部的距离
 */
let offset = function offset(ele) {
  var pos = {
    left: 0,
    top: 0,
  };
  while (ele) {
    pos.left += ele.offsetLeft;
    pos.top += ele.offsetTop;
    ele += ele.offsetParent;
  }
  return pos;
};

/*
 * @Author: wenreq 294491328@qq.com
 * @Date: 2022-11-09 21:17:24
 * @LastEditors: wenreq 294491328@qq.com
 * @LastEditTime: 2022-11-10 22:49:20
 * @FilePath: /ny-utils/src/dom/setScrollTop.js
 * @Description:
 *
 * Copyright (c) 2022 by wenreq 294491328@qq.com, All Rights Reserved.
 */
/**
 * 设置滚动条距顶部的距离
 * @date 2022-02-24
 * @param {Number} value 距顶部的距离的值
 */
let setScrollTop = function setScrollTop(value) {
  window.scrollTo(0, value);
  return value;
};

/*
 * @Author: wenreq 294491328@qq.com
 * @Date: 2022-11-09 21:17:24
 * @LastEditors: wenreq 294491328@qq.com
 * @LastEditTime: 2022-11-11 21:25:36
 * @FilePath: /ny-utils/src/dom/scrollTo.js
 * @Description:
 *
 * Copyright (c) 2022 by wenreq 294491328@qq.com, All Rights Reserved.
 */
var requestAnimFrame = (function () {
  // window.requestAnimationFrame 要求浏览器在下次重绘之前调用指定的回调函数更新动画。
  return (
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    function (callback) {
      window.setTimeout(callback, 1000 / 60);
    }
  );
})();

/**
 * 在 duration 时间内，滚动条平滑滚动到 to 指定位置
 * @date 2022-02-24
 * @param {Number} to 滚动位置的值
 * @param {Number} duration 时间-毫秒数
 */
let scrollTo = function scrollTo(to, duration) {
  if (duration < 0) {
    setScrollTop(to);
    return;
  }
  var diff = to - getScrollTop();
  if (diff === 0) return;
  var step = (diff / duration) * 10;
  requestAnimFrame(function () {
    if (Math.abs(step) > Math.abs(diff)) {
      setScrollTop(getScrollTop() + diff);
      return;
    }
    setScrollTop(getScrollTop() + step);
    if (
      (diff > 0 && getScrollTop() >= to) ||
      (diff < 0 && getScrollTop() <= to)
    ) {
      return;
    }
    scrollTo(to, duration - 16);
  });
};

/*
 * @Author: wenreq 294491328@qq.com
 * @Date: 2022-11-09 21:17:24
 * @LastEditors: wenreq 294491328@qq.com
 * @LastEditTime: 2022-11-10 22:48:45
 * @FilePath: /ny-utils/src/dom/windowResize.js
 * @Description:
 *
 * Copyright (c) 2022 by wenreq 294491328@qq.com, All Rights Reserved.
 */
/**
 * H5软键盘缩回、弹起回调
 * 当软件键盘弹起会改变当前 window.innerHeight， 监听这个值变化
 * @date 2022-02-24
 * @param {Function} downCb 当软键盘弹起后，缩回的回调
 * @param {any} upCb 当软键盘弹起的回调
 */
let windowResize = function windowResize(downCb, upCb) {
  var clientHeight = window.innerHeight;
  downCb = typeof downCb === "function" ? downCb : function () {};
  upCb = typeof upCb === "function" ? upCb : function () {};
  window.addEventListener("resize", () => {
    var height = window.innerHeight;
    if (height === clientHeight) {
      downCb();
    }
    if (height < clientHeight) {
      upCb();
    }
  });
};

/**
 * 节流
 * flag 开始为 true 则进入函数之后会执行计时器， 在一秒之后会执行
 * 继续向下之后flag被变为false， 那么在此进入函数之后将不再执行计时器
 * 在计时器执行完成之后， 将 flag变为true 之后才可以继续执行
 * 节流起到了可控制高频事件逻辑执行的次数
 * @date 2022-02-24
 * @param {Function} fn 延迟毫秒后执行的函数。
 * @param {Number} wait 延迟的毫秒数
 * @param {Boolean} immediate 为true时，fn在可以执行时立即执行，否则必须延时wait后才能执行
 */
let throttle = function throttle(fn, wait, immediate = false) {
  let timeout = null;
  return (...args) => {
    if (!timeout) {
      immediate && fn.apply(this, args);
      timeout = setTimeout(() => {
        !immediate && fn.apply(this, args);
        timeout = null;
      }, wait);
    }
  };
};

/**
 * 防抖： 保证一个函数在多少毫秒内不再被触发，只会执行一次。
 * @date 2022-02-24
 * @param {Function} func 逻辑函数
 * @param {Number} wait 执行逻辑的间隔（毫秒）
 * @param {Boolean} immediate 是否立即执行
 */

// timeout接收setTimeout返回的唯一值，result接收最终返回值
// 定时器的声明不能放在函数内部，否则将会持续新建函数，造成多次执行问题
let timeout, result;

let debounce = function debounce(func, wait, immediate) {
  let debounced = function () {
    let context = this; //将this用context接收
    let args = arguments; //将arguments用args接收

    if (timeout) clearTimeout(timeout); //如果有timeout在执行，清除它
    if (immediate) {
      let callNow = !timeout; // 是否需要绑定this指向，和arguments
      timeout = setTimeout(function () {
        // 设置一个
        timeout = null;
      }, wait);
      if (callNow) result = func.apply(context, args);
    } else {
      // 如果不用立即执行的话
      timeout = setTimeout(function () {
        func.apply(context, args);
      }, wait);
    }
    return result;
  };

  return debounced();
};

var keyCodeMap = {
  8: 'Backspace',
  9: 'Tab',
  13: 'Enter',
  16: 'Shift',
  17: 'Ctrl',
  18: 'Alt',
  19: 'Pause',
  20: 'Caps Lock',
  27: 'Escape',
  32: 'Space',
  33: 'Page Up',
  34: 'Page Down',
  35: 'End',
  36: 'Home',
  37: 'Left',
  38: 'Up',
  39: 'Right',
  40: 'Down',
  42: 'Print Screen',
  45: 'Insert',
  46: 'Delete',

  48: '0',
  49: '1',
  50: '2',
  51: '3',
  52: '4',
  53: '5',
  54: '6',
  55: '7',
  56: '8',
  57: '9',

  65: 'A',
  66: 'B',
  67: 'C',
  68: 'D',
  69: 'E',
  70: 'F',
  71: 'G',
  72: 'H',
  73: 'I',
  74: 'J',
  75: 'K',
  76: 'L',
  77: 'M',
  78: 'N',
  79: 'O',
  80: 'P',
  81: 'Q',
  82: 'R',
  83: 'S',
  84: 'T',
  85: 'U',
  86: 'V',
  87: 'W',
  88: 'X',
  89: 'Y',
  90: 'Z',

  91: 'Windows',
  93: 'Right Click',

  96: 'Numpad 0',
  97: 'Numpad 1',
  98: 'Numpad 2',
  99: 'Numpad 3',
  100: 'Numpad 4',
  101: 'Numpad 5',
  102: 'Numpad 6',
  103: 'Numpad 7',
  104: 'Numpad 8',
  105: 'Numpad 9',
  106: 'Numpad *',
  107: 'Numpad +',
  109: 'Numpad -',
  110: 'Numpad .',
  111: 'Numpad /',

  112: 'F1',
  113: 'F2',
  114: 'F3',
  115: 'F4',
  116: 'F5',
  117: 'F6',
  118: 'F7',
  119: 'F8',
  120: 'F9',
  121: 'F10',
  122: 'F11',
  123: 'F12',

  144: 'Num Lock',
  145: 'Scroll Lock',
  182: 'My Computer',
  183: 'My Calculator',
  186: ';',
  187: '=',
  188: ',',
  189: '-',
  190: '.',
  191: '/',
  192: '`',
  219: '[',
  220: '\\',
  221: ']',
  222: "'",
};
/**
 * @desc 根据keycode获得键名
 * @param  {Number} keycode
 * @return {String}
 */
let getKeyName = function getKeyName(keycode) {
  if (keyCodeMap[keycode]) {
    return keyCodeMap[keycode];
  } else {
    console.log('Unknow Key(Key Code:' + keycode + ')');
    return '';
  }
};

/**
 * 将数字（包含小数）逢三一断
 * @date 2022-08-06
 * @param {Number} value 要转换的值
 * @returns {String} 转换后的值
 * @example standardAmount(999999999.9991) => '999,999,999.999'
 */
let standardAmount = function standardAmount(value) {
  if (!value) {
    return value === 0 ? '0' : '--';
  }
  const intPartFormat = parseFloat(value).toLocaleString();
  return intPartFormat;
};

/**
 * 将整数数字逢三一断
 * @date 2022-08-06
 * @param {Number} value 要转换的值
 * @returns {String} 转换后的值
 * @example standardIntegerAmount(99999999999) => '99,999,999,999'
 */
let standardIntegerAmount = function standardIntegerAmount(value) {
  if (!value) {
    return value === 0 ? '0' : '--';
  }
  const intPartFormat = value.toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,');
  return intPartFormat;
};

const isComplexDataType = (obj) =>
  (typeof obj === 'object' || typeof obj === 'function') && obj !== null;

/**
 * 深拷贝， 支持各种复杂类型
 * @date 2022-02-25
 * @param {any} obj
 * @param {any} hash=newWeakMap()
 * @returns {any} 拷贝后的对象
 */

/*
  1、 不可枚举的属性 及 Symbol 类型。 可以使用 Reflect.ownKeys 方法；
  2、 判断参数是 Date、 RegExp 类型， 则直接生成一个新的实例返回；
  3、 利用 Object.getOwnPropertyDescriptors() 获得对象的所有属性 以及 对应 的特性， 结合 Object.create() 创建一个新的对象， 并继承传入原对象的原型链；
  4、 利用 WeakMap 类型作为 Hash 表， 因为 WeakMap 是弱引用类型， 可以 防止内存泄漏， 作为检测循环引用很有帮组， 如果循环引用则返回 WeakMap 存储的值。
*/
let deepClone = function deepClone(obj, hash = new WeakMap()) {
  if (obj.constructor === Date) return new Date(obj); // 日期对象直接返回一个新的日期对象
  if (obj.constructor === RegExp) return new RegExp(obj); // 正则对象直接返回一个新的正则对象
  if (hash.has(obj)) return hash.get(obj); // 如果循环引用了就用 WeakMap 来解决
  let allDesc = Object.getOwnPropertyDescriptors(obj); // 获得对象的所有属性及对应的特性
  let cloneObj = Object.create(Object.getPrototypeOf(obj), allDesc); // 创建一个新的对象，并继承传入原对象的原型链
  hash.set(obj, cloneObj); // 继承原型链
  for (let key of Reflect.ownKeys(obj)) {
    // 不可枚举的属性及Symbol类型，用Reflect.ownKeys()
    cloneObj[key] =
      isComplexDataType(obj[key]) && typeof obj[key] !== 'function'
        ? deepClone(obj[key], hash)
        : obj[key];
  }
  return cloneObj;
};

/**
 * 将对象转换为 formData 对象
 * @date 2022-02-25
 * @param {Object} object 需要转换的对象
 * @returns {Object} formData 对象
 */
let getFormData = function getFormData(object) {
  let formData = new FormData();
  Object.keys(object).forEach((key) => {
    let value = object[key];
    if (Array.isArray(value)) {
      value.forEach((subValue, i) => formData.append(key + `[${i}]`, subValue));
    } else {
      formData.append(key, object[key]);
    }
  });
  return formData;
};

/**
 * 判断 obj 是否为空
 * @date 2022-02-25
 * @param {Object} obj
 * @returns {Boolean}
 */
let isEmptyObject = function isEmptyObject(obj) {
  if (!obj || typeof obj !== 'object' || Array.isArray(obj)) return false;
  return !Object.keys(obj).length;
};

/*
 * @Author: wenreq 294491328@qq.com
 * @Date: 2022-11-10 23:22:07
 * @LastEditors: wenreq 294491328@qq.com
 * @LastEditTime: 2022-11-11 23:53:34
 * @FilePath: /ny-utils/src/object/shallowClone.js
 * @Description:
 *
 * Copyright (c) 2022 by wenreq 294491328@qq.com, All Rights Reserved.
 */
/**
 * 浅克隆
 * @date 2022-02-25
 * @param {Object} obj 需要拷贝的对象
 * @returns {Object} 浅拷贝之后的对象
 */
let shallowClone = function shallowClone(obj) {
  if (!(obj instanceof Object)) {
    throw new Error("请传入对象");
  }
  const res = {};
  for (const key in obj) {
    res[key] = obj[key];
  }
  return res;
};

/**
 * 描述 随机生成颜色
 * @date 2022-02-27
 * @returns {String}
 */
let randomColor = function randomColor() {
  return (
    '#' + ('00000' + ((Math.random() * 0x1000000) << 0).toString(16)).slice(-6)
  );
};

/**
 * 生成指定范围[min, max] 的随机数
 * @date 2022-02-27
 * @param {Number} min
 * @param {Number} max
 * @returns {Number}
 */
let randomNumber = function randomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

/**
 * 判断是否为16进制颜色， rgb 或 rgba
 * @date 2022-02-27
 * @param {String} str
 * @returns {Boolean}
 */
let isColor = function isColor(str) {
  return /^(#([0-9a-fA-F]{3}){1,2}|[rR][gG][Bb](\((\s*(2[0-4]\d|25[0-5]|[01]?\d{1,2})\s*,){2}\s*(2[0-4]\d|25[0-5]|[01]?\d{1,2})\s*\)|[Aa]\((\s*(2[0-4]\d|25[0-5]|[01]?\d{1,2})\s*,){3}\s*([01]|0\.\d+)\s*\)))$/.test(
    str
  );
};

/**
 * 判断是否为邮箱地址
 * @date 2022-02-27
 * @param {String} str
 * @returns {Boolean}
 */
let isEmail = function isEmail(str) {
  return /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(str);
};

/**
 * 判断是否为身份证号
 * @date 2022-02-27
 * @param {String|Number} str
 * @returns {Boolean}
 */
let isIdCard = function isIdCard(str) {
  return /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/.test(
    str
  );
};

/*
 * @Author: wenreq 294491328@qq.com
 * @Date: 2022-11-10 23:22:07
 * @LastEditors: wenreq 294491328@qq.com
 * @LastEditTime: 2022-11-12 00:06:11
 * @FilePath: /ny-utils/src/regexp/isPhoneNum.js
 * @Description:
 *
 * Copyright (c) 2022 by wenreq 294491328@qq.com, All Rights Reserved.
 */
/**
 * 判断是否为手机号
 * @date 2022-02-27
 * @param {String|Number} str
 * @returns {Boolean}
 */
let isPhoneNum = function isPhoneNum(str) {
  return /^(\+?0?86\-?)?1[3456789]\d{9}$/.test(str);
};

/**
 * 描述
 * @date 判断是否为URL地址
 * @param {String} str
 * @returns {Boolean}
 */
let isUrl = function isUrl(str) {
  return /[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/i.test(
    str
  );
};

/**
 * 退出全屏
 * @date 2022-08-16
 */
let exitFullScreen = function exitFullScreen() {
  let elem = parent.document;
  elem.webkitCancelFullScreen
    ? elem.webkitCancelFullScreen()
    : elem.mozCancelFullScreen
    ? elem.mozCancelFullScreen()
    : elem.cancelFullScreen
    ? elem.cancelFullScreen()
    : elem.msExitFullscreen
    ? elem.msExitFullscreen()
    : elem.exitFullscreen
    ? elem.exitFullscreen()
    : alert("切换失败,可尝试Esc退出");
};

/**
 * 描述: 全屏
 * @date 2022-08-16
 */
let toFullScreen = function toFullScreen() {
  let elem = document.body;
  elem.webkitRequestFullScreen
    ? elem.webkitRequestFullScreen()
    : elem.mozRequestFullScreen
    ? elem.mozRequestFullScreen()
    : elem.msRequestFullscreen
    ? elem.msRequestFullscreen()
    : elem.requestFullScreen
    ? elem.requestFullScreen()
    : alert('浏览器不支持全屏');
};

/**
 * 获取本地存储
 * @date 2022-02-17
 * @param {string} name 本地存储名称
 */
let getStorage = function getStorage(name) {
  const data = window.localStorage.getItem(name);
  try {
    return JSON.parse(data);
  } catch (error) {
    return data;
  }
};

/**
 * 删除本地存储
 * @date 2022-02-17
 * @param {string} name 本地存储名称
 * @returns {boolean} 删除成功 true，否则 false
 */
let removeStorage = function removeStorage(name) {
  return window.localStorage.removeItem(name);
};

/**
 * 添加本地存储
 * @date 2022-02-17
 * @param {string} name 本地存储名称
 * @param {*} data 本地存储数据
 */
let setStorage = function setStorage(name, data) {
  if (typeof data === 'object') {
    data = JSON.stringify(data);
  }
  window.localStorage.setItem(name, data);
};

/*
 * @Author: wenreq 294491328@qq.com
 * @Date: 2022-11-10 23:22:07
 * @LastEditors: wenreq 294491328@qq.com
 * @LastEditTime: 2022-11-13 14:01:02
 * @FilePath: /ny-utils/src/string/digitUppercase.js
 * @Description:
 *
 * Copyright (c) 2022 by wenreq 294491328@qq.com, All Rights Reserved.
 */
/**
 * 现金额转大写
 * @date 2022-02-27
 * @param {Number} n
 * @returns {String}
 */
let digitUppercase = function digitUppercase(n) {
  var fraction = ["角", "分"];
  var digit = ["零", "壹", "贰", "叁", "肆", "伍", "陆", "柒", "捌", "玖"];
  var unit = [
    ["元", "万", "亿"],
    ["", "拾", "佰", "仟"],
  ];
  var head = n < 0 ? "欠" : "";
  n = Math.abs(n);
  var s = "";
  for (var i = 0; i < fraction.length; i++) {
    s += (
      digit[Math.floor(n * 10 * Math.pow(10, i)) % 10] + fraction[i]
    ).replace(/零./, "");
  }
  s = s || "整";
  n = Math.floor(n);
  for (var i = 0; i < unit[0].length && n > 0; i++) {
    var p = "";
    for (var j = 0; j < unit[1].length && n > 0; j++) {
      p = digit[n % 10] + unit[1][j] + p;
      n = Math.floor(n / 10);
    }
    s = p.replace(/(零.)*零$/, "").replace(/^$/, "零") + unit[0][i] + s;
  }
  return (
    head +
    s
      .replace(/(零.)*零元/, "元")
      .replace(/(零.)+/g, "零")
      .replace(/^整$/, "零元整")
  );
};

/**
 * 描述: base64数据导出文件，文件下载
 * @date 2022-08-16
 * @param {String} filename 文件名
 * @param {base64} data Base64 数据
 */
let downloadFile = function downloadFile(filename, data) {
  let downloadLink = document.createElement('a');
  if (downloadLink) {
    document.body.appendChild(downloadLink);
    downloadLink.style.display = 'none';
    downloadLink.download = filename;
    downloadLink.href = data;
    if (downloadLink.createEvent) {
      let downloadEvt = document.createEvent('MouseEvents');
      downloadEvt.initEvent('click', true, false);
      downloadEvt.dispatchEvent(downloadEvt);
    } else if (document.createEventObject) {
      downloadLink.fireEvent('onclick');
    } else if (typeof downloadLink.onclick == 'function') {
      downloadLink.onclick();
    }
    document.body.removeChild(downloadLink);
  }
};

/**
 * 判断浏览器是否支持webP格式图片
 * @date 2022-02-27
 * @returns {Boolean}
 */
let isSupportWebP = function isSupportWebP() {
  return (
    !![].map &&
    document
      .createElement('canvas')
      .toDataURL('image/webp')
      .indexOf('data:image/webp') == 0
  );
};

/*
 * @Author: wenreq 294491328@qq.com
 * @Date: 2022-11-09 21:17:24
 * @LastEditors: wenreq 294491328@qq.com
 * @LastEditTime: 2022-11-09 22:23:02
 * @FilePath: /ny-utils/src/url/parseQueryString.js
 * @Description: esm
 *
 * Copyright (c) 2022 by wenreq 294491328@qq.com, All Rights Reserved.
 */
/**
 * url参数转对象
 * @date 2022-02-27
 * @param {String} url default: window.location.href
 * @returns {Object}
 */
let parseQueryString = function parseQueryString(url) {
  url = !url ? window.location.href : url;
  if (url.indexOf("?") === -1) {
    return {};
  }
  var search =
    url[0] === "?" ? url.substr(1) : url.substring(url.lastIndexOf("?") + 1);
  if (search === "") {
    return {};
  }
  search = search.split("&");
  var query = {};
  for (let i = 0; i < search.length; i++) {
    var pair = search[i].split("=");
    query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || "");
  }
  return query;
};

/*
 * @Author: wenreq 294491328@qq.com
 * @Date: 2022-11-09 21:17:24
 * @LastEditors: wenreq 294491328@qq.com
 * @LastEditTime: 2022-11-09 22:26:06
 * @FilePath: /ny-utils/src/url/stringifyQueryString.js
 * @Description: esm
 *
 * Copyright (c) 2022 by wenreq 294491328@qq.com, All Rights Reserved.
 */
/**
 * 对象序列化
 * @date 2022-02-27
 * @param {Object} obj
 * @returns {String}
 */
let stringifyQueryString = function stringifyQueryString(obj) {
  if (!obj) return "";
  var pairs = [];

  for (var key in obj) {
    var value = obj[key];
    if (value instanceof Array) {
      for (var i = 0; i < value.length; ++i) {
        pairs.push(
          encodeURIComponent(key + "[" + i + "]") +
            "=" +
            encodeURIComponent(value[i])
        );
      }
      continue;
    }
    pairs.push(encodeURIComponent(key) + "=" + encodeURIComponent(obj[key]));
  }

  return pairs.join("&");
};

/**
 * 格式化时间
 * @date 2022-08-07
 * @param {String} formater 格式化格式 'YYYY-MM-DD HH:mm:ss' 'YYYY-MM-DD' 'YYYYMMDDHHmm'
 * @param {Date | String} t 可以不传，不传默认 new Date()。
 * @returns {String} 格式化后的日期字符串
 * @example dateFormater('YYYY-MM-DD', '2020.11.29') => '2020-11-29'
 */
let dateFormater = function dateFormater(formater, t) {
  let date = t ? new Date(t) : new Date(),
    Y = date.getFullYear() + '',
    M = date.getMonth() + 1,
    D = date.getDate(),
    H = date.getHours(),
    m = date.getMinutes(),
    s = date.getSeconds();
  return formater
    .replace(/YYYY|yyyy/g, Y)
    .replace(/YY|yy/g, Y.substring(2, 4))
    .replace(/MM/g, (M < 10 ? '0' : '') + M)
    .replace(/DD/g, (D < 10 ? '0' : '') + D)
    .replace(/HH|hh/g, (H < 10 ? '0' : '') + H)
    .replace(/mm/g, (m < 10 ? '0' : '') + m)
    .replace(/ss/g, (s < 10 ? '0' : '') + s);
};

/**
 * 将指定字符串由一种时间格式转化为另一种。from 的格式应对应 str 的位置
 * @date 2022-08-07
 * @param {String} str 原始的日期字符串
 * @param {String} from 匹配原始字符串的格式
 * @param {String} to 想要转换的日期字符串格式
 * @returns {String} 格式化后的日期字符串
 * @example
 *  dateStrForma('20220807', 'YYYYMMDD', 'YYYY年MM月DD日') ==> 2022年08月07日
 *  dateStrForma('121220220807', '----YYYYMMDD', 'YYYY年MM月DD日') ==> 2022年08月07日
 *  dateStrForma('2022年08月07日', 'YYYY年MM月DD日', 'YYYYMMDD') ==> 20220807
 *
 * 一般的也可以使用正则来实现
 * '2022年08月07日'.replace(/(\d{4})年(\d{2})月(\d{2})日/, '$1-$2-$3') ==> 2022-08-07
 */
let dateStrFormat = function dateStrFormat(str, from, to) {
  //'20220807' 'YYYYMMDD' 'YYYY年MM月DD日'
  str += '';
  let Y = '';
  if (~(Y = from.indexOf('YYYY'))) {
    Y = str.substring(Y, Y + 4);
    to = to.replace(/YYYY|yyyy/g, Y);
  } else if (~(Y = from.indexOf('YY'))) {
    Y = str.substring(Y, Y + 2);
    to = to.replace(/YY|yy/g, Y);
  }

  let k, i;
  ['M', 'D', 'H', 'h', 'm', 's'].forEach((s) => {
    i = from.indexOf(s + s);
    k = ~i ? str.substring(i, i + 2) : '';
    to = to.replace(s + s, k);
  });
  return to;
};

/**
 * 格式化${startTime}距现在的已过时间
 * @param  {Date} startTime '2020-11-29'
 * @return {String} '1天前' '1年前'
 */
let formatPassTime = function formatPassTime(startTime) {
  var currentTime = Date.parse(new Date()),
    time = currentTime - Date.parse(new Date(startTime)),
    day = parseInt(time / (1000 * 60 * 60 * 24)),
    hour = parseInt(time / (1000 * 60 * 60)),
    min = parseInt(time / (1000 * 60)),
    month = parseInt(day / 30),
    year = parseInt(month / 12);
  if (year) return year + '年前';
  if (month) return month + '个月前';
  if (day) return day + '天前';
  if (hour) return hour + '小时前';
  if (min) return min + '分钟前';
  else return '刚刚';
};

/**
 * 计算从一个时间到现在过去多久
 * @date 2022-02-24
 * @param {String} 字符串日期 '2020-11-29'
 * @returns {String} '451天15小时17分钟25秒'
 */
let formatRemainTime = function formatRemainTime(time) {
  const nowStamp = new Date().getTime();
  const targetStamp = new Date(time.replace(/-/g, '/')).getTime();
  const difference = nowStamp - targetStamp;
  const allSeconds = Math.floor(difference / 1000);
  const allMinutes = Math.floor(allSeconds / 60);
  const allHours = Math.floor(allMinutes / 60);
  const day = Math.floor(allHours / 24);
  const hours = allHours % 24;
  const minutes = allMinutes % 60;
  const seconds = allSeconds % 60;
  return `${day}天${hours}小时${minutes}分钟${seconds}秒`;
};

/**
 * 是否为闰年
 * @date 2022-02-27
 * @param {Number} year
 * @returns {Boolean}
 */
let isLeapYear = function isLeapYear(year) {
  if (0 === year % 4 && (year % 100 !== 0 || year % 400 === 0)) {
    return true;
  }
  return false;
};

/**
 * 判断是否为同一天
 * @date 2022-02-27
 * @param {Date} date1
 * @param {Date} date2 可选 / 默认值：当天
 * @returns {Boolean}
 */
let isSameDay = function isSameDay(date1, date2) {
  if (!date2) {
    date2 = new Date();
  }
  var date1_year = date1.getFullYear(),
    date1_month = date1.getMonth() + 1,
    date1_date = date1.getDate();
  var date2_year = date2.getFullYear(),
    date2_month = date2.getMonth() + 1,
    date2_date = date2.getDate();
  return (
    date1_date === date2_date &&
    date1_month === date2_month &&
    date1_year === date2_year
  );
};

/**
 * 获取指定日期月份的总天数
 * @date 2022-02-27
 * @param {Date} time
 * @returns {Number}
 */
let monthDays = function monthDays(time) {
  time = new Date(time);
  var year = time.getFullYear();
  var month = time.getMonth() + 1;
  return new Date(year, month, 0).getDate();
};

/**
 * ${startTime - endTime}的剩余时间,startTime大于endTime时，均返回0
 * @param { Date | String } startTime
 * @param { Date | String } endTime
 * @returns { Object } { d, h, m, s } 天 时 分 秒
 */
let timeLeft = function timeLeft(startTime, endTime) {
  if (!startTime || !endTime) {
    return;
  }
  var startDate, endDate;
  if (startTime instanceof Date) {
    startDate = startTime;
  } else {
    startDate = new Date(startTime.replace(/-/g, '/')); //开始时间
  }
  if (endTime instanceof Date) {
    endDate = endTime;
  } else {
    endDate = new Date(endTime.replace(/-/g, '/')); //结束时间
  }
  var t = endDate.getTime() - startDate.getTime();
  var d = 0,
    h = 0,
    m = 0,
    s = 0;
  if (t >= 0) {
    d = Math.floor(t / 1000 / 3600 / 24);
    h = Math.floor((t / 1000 / 60 / 60) % 24);
    m = Math.floor((t / 1000 / 60) % 60);
    s = Math.floor((t / 1000) % 60);
  }
  return {
    d,
    h,
    m,
    s,
  };
};

/**
 * 根据指定的两个日期，计算并返回中间的所有日期。
 * @date 2022-06-09
 * @param {String} startDay 开始日期 '2022-06-01'
 * @param {String} endDay 结束日期 '2022-06-09'
 * @returns {Array} 包含所有日期的集合 ['2022-06-01', '2022-06-02', '2022-06-03', '2022-06-04', '2022-06-05', '2022-06-06', '2022-06-07', '2022-06-08', '2022-06-09']
 */
let twoDateBetweenAllDay = function twoDateBetweenAllDay(
  startDay,
  endDay
) {
  let arr = [];
  let dates = [];
  // 设置两个日期 UTC 时间
  const sd = new Date(startDay);
  const ed = new Date(endDay);
  // 获取两个日期 GTM 时间
  const s = sd.getTime() - 24 * 60 * 60 * 1000;
  const e = ed.getTime() - 24 * 60 * 60 * 1000;
  // 获取到两个日期之间的每一天的毫秒数
  for (let i = s; i <= e; ) {
    i = i + 24 * 60 * 60 * 1000;
    arr.push(parseInt(i));
  }
  // 获取每一天的时间 YY-MM-DD
  for (const j in arr) {
    const time = new Date(arr[j]);
    const year = time.getFullYear(time);
    const month = String(time.getMonth() + 1).padStart(2, '0');
    const day = String(time.getDate()).padStart(2, '0');
    const YYMMDD = `${year}-${month}-${day}`;
    dates.push(YYMMDD);
  }
  return dates;
};

/**
 * 两个日期之间的天数
 * @date 2022-06-16
 * @param {Date} startDay 开始日期 '2022-06-16'
 * @param {Date} endDay 结束日期 '2022-06-20'
 * @returns {Number} 两个日期之间的天数 4
 */
let twoDaysBetweenNum = (startDay, endDay) => {
  if (
    startDay === '' ||
    startDay === null ||
    startDay === undefined ||
    endDay === '' ||
    endDay === null ||
    endDay === undefined
  ) {
    return null;
  }
  const startDate = Date.parse(startDay);
  const endDate = Date.parse(endDay);
  if (startDate == endDate) {
    return 0;
  }
  const days = (endDate - startDate) / (1 * 24 * 60 * 60 * 1000);
  return days;
};

/**
 * @description: 数据无-补空
 * @param {*} val 值
 * @param {*} unit 单位
 * @return {*} '-' or val+unit
 */
let emptyFn = function emptyFn(val, unit) {
  if (isNaN(val) || val === "" || val === null) {
    return "—";
  } else {
    return val + unit;
  }
};

export { addClass, dateFormater, dateStrFormat, debounce, deepClone, digitUppercase, downloadFile, emptyFn, equalityArray, exitFullScreen, formatPassTime, formatRemainTime, getCookie, getExplore, getFormData, getKeyName, getOS, getScrollTop, getStorage, goodbye, hasClass, hello, isColor, isEmail, isEmptyObject, isIdCard, isLeapYear, isPhoneNum, isSameDay, isSupportWebP, isUrl, mergeArrayDelRepeat, monthDays, offset, parseQueryString, randomColor, randomNumber, removeClass, removeCookie, removeStorage, scrollTo, setCookie, setScrollTop, setStorage, shallowClone, standardAmount, standardIntegerAmount, stringifyQueryString, subArray, throttle, timeLeft, toFullScreen, twoDateBetweenAllDay, twoDaysBetweenNum, uniqueArray, windowResize };
//# sourceMappingURL=index.js.map
