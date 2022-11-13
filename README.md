## ny-utils

前端业务代码工具库，支持 UMD、CJS、ESM 多模式和 Tree-Shaking。

> 目的：高效率完成前端业务代码

业务开发过程中，会经常用到一些公用的函数，为了避免不同项目多次复制粘贴的麻烦，这里统一封装，并发布到 npm，以提高开发效率。

## 安装和使用

### ESM

使用 npm 安装。支持 Tree-shaking。

```shell
npm i ny-utils -D
# or
yarn add ny-utils -D
# or
pnpm add ny-utils -D
```

```js
import { emptyFn, randomColor, randomNumber } from "ny-utils";

console.log(getExplore());
console.log(emptyFn(77, "%"));
console.log(randomColor());
console.log(randomNumber(0, 50));
```

### CDN

```html
<html>
  <head>
    <!-- unpkg.com/:package@:version/:file -->
    <script src="https://unpkg.com/ny-utils@1.0.0/dist/ny-utils.min.js"></script>
  </head>

  <body>
    <div id="app">Hello World!</div>
    <button onclick="nyUtils.toFullScreen()">全屏</button>
    <button onclick="nyUtils.exitFullScreen()">退出全屏</button>
    <script>
      nyUtils.hello();

      let explore = nyUtils.getExplore();
      let os = nyUtils.getOS();
      let color = nyUtils.randomColor();
      let num = nyUtils.randomNumber(0, 50);
      let amount = nyUtils.standardAmount(7000123);
      let integerAmount = nyUtils.standardIntegerAmount(7000123);
      let digit = nyUtils.digitUppercase(777777777);
      let loseTime = nyUtils.formatRemainTime("2022-11-10");
      let passTime = nyUtils.formatPassTime("2022-11-10");
      let formatDater = nyUtils.dateFormater("YYYY-MM-DD", "2020.11.29");
      let emptyStr = nyUtils.emptyFn(77, "%");

      console.log("type:version=", explore);
      console.log("system=", os);
      console.log("color=", color);
      console.log("num=", num);
      document.getElementById("app").style.color = color;
      console.log("standard=", amount);
      console.log("integerAmount=", integerAmount);
      console.log("digit=", digit);
      console.log("loseTime=", loseTime);
      console.log("passTime=", passTime);
      console.log("formatDater=", formatDater);
      console.log("emptyFn=", emptyStr);

      nyUtils.goodbye();
    </script>
  </body>
</html>
```

### CJS

在 node 环境中引入 `https://unpkg.com/ny-utils@1.0.0/dist/cjs/index.js` 使用。

## API 文档

### Array

- [equalityArray](https://github.com/wenreq/realize-utils/blob/master/src/array/equalityArray.js)
  判读两个数组是否相等
- [mergeArrayDelRepeat](https://github.com/wenreq/realize-utils/blob/master/src/array/mergeArrayDelRepeat.js)
  合并数组后去重
- [uniqueArray](https://github.com/wenreq/realize-utils/blob/master/src/array/uniqueArray.js)
  数组去重
- [subArray](https://github.com/wenreq/realize-utils/blob/master/src/array/subArray.js)
  数组相减

### Class

- [addClass](https://github.com/wenreq/realize-utils/blob/master/src/class/addClass.js)
  为元素添加 class
- [hasClass](https://github.com/wenreq/realize-utils/blob/master/src/class/hasClass.js)
  判断元素是否有某个 class
- [removeClass](https://github.com/wenreq/realize-utils/blob/master/src/class/removeClass.js)
  为元素移除 class

### Cookie

- [getCookie](https://github.com/wenreq/realize-utils/blob/master/src/cookie/getCookie.js)
  根据 name 读取 Cookie
- [setCookie](https://github.com/wenreq/realize-utils/blob/master/src/cookie/setCookie.js)
  根据 name,value,days 设置 Cookie
- [removeCookie](https://github.com/wenreq/realize-utils/blob/master/src/cookie/removeCookie.js)
  根据 name 删除 Cookie

### Device

- [getExplore](https://github.com/wenreq/realize-utils/blob/master/src/device/getExplore.js)
  获取浏览器：版本号
- [getOS](https://github.com/wenreq/realize-utils/blob/master/src/device/getOS.js)
  获取操作系统类型

### Dom

- getScrollTop()：获取滚动条距顶部的距离
- offset()：获取一个元素的距离文档(document)的位置，类似 JQ 中的 offset() ele.offset()
- scrollTo(to, duration)：在${duration}时间内，滚动条平滑滚动到${to}指定位置 scrollTo(to, duration)
- setScrollTop()：设置滚动条距顶部的距离
- windowResize()：H5 软键盘缩回、弹起回调

### Filter

- emptyFn(val, unit): 空数据的处理。null、NaN、'' 返回 '-'，否则返回 '值单位'

### Function

- debounce(func, wait, immediate)：函数防抖
- throttle(fn, wait, immediate)：函数节流

### Keycode

- getKeyName(keycode)：根据 keycode 获得键名

### Number

- standardAmount(num)：将数字（整数逢三一断）含小数转换成标准的金额模式，最多保留三位小数。standardAmount(999999999.9991) => '999,999,999.999'
- standardIntegerAmount(num)：将 "整数" 数字（整数逢三一断）。standardIntegerAmount(99999999999) =>
  '99,999,999,999'

### Object

- deepClone(obj)：对象的深拷贝
- shallowClone(obj)：对象的浅拷贝
- isEmptyObject(obj)：判断对象是否为空
- getFormData(obj)：将对象转换为 formData 对象

### Random

- randomColor()：随机生成颜色
- randomNum()：生成指定范围随机数

### Regexp

- isColor(str)：判断是否为 16 进制颜色，rgb 或 rgba
- isEmail(str)：判断是否为邮箱地址
- isIdCard(str|num)：判断是否为身份证号
- isPhoneNum(str|num)：判断是否为手机号
- isUrl(str)：判断是否为 URL 地址

### Screen

- toFullScreen()：全屏 toFullScreen()
- exitFullScreen()：退出全屏 exitFullScreen()

### Storage

- getStorage(name)：根据 name 读取 localStorage
- setStorage(name, value)：根据 name,value 添加 localStorage
- removeStorage(name)：根据 name 删除 localStorage

### String

- digitUppercase(num)：现金额转大写 digitUppercase(1314521) => '壹佰叁拾壹万肆仟伍佰贰拾壹元整'

### Supprot

- isSupportWebP()：判断浏览器是否支持 webP 格式图片
- downloadFile(filename, data)：base64 数据导出文件，文件下载 downloadFile(filename, data)

### Time

- dateFormater(str)：格式化时间
  - dateFormater('YYYY-MM-DD HH:mm') => '2022-08-07 14:40'
  - dateFormater('YYYY-MM-DD', '2020.11.29') => '2020-11-29'
  - dateFormater('YYYYMMDDHHmm', '2020-11-29 18:10:07') => '202011291810'
- dateStrFormat(str, format)：将指定字符串由一种时间格式转化为另一种。
  - dateStrForma('20220807', 'YYYYMMDD',
    'YYYY 年 MM 月 DD 日') ==> 2022 年 08 月 07 日
  - dateStrForma('2022 年 08 月 07
    日', 'YYYY 年 MM 月 DD 日', 'YYYYMMDD') ==> 20220807
- formatRemainTime(str)：计算一个时间到现在过去了多久 '451 天 15 小时 17 分钟 25 秒'
- formatPassTime(str)：计算一个时间到现在过去了多久 '1 年前' '6 个月前' '45 分钟前'
- isLeapYear(num)：判断是否为闰年
  - isLeapYear(2020) => true isLeapYear(2021) => false
  - isLeapYear(2022) => false
- isSameDay(str1, str2)：判断是否为同一天
  - isSameDay('2022-08-06', '2022-08-06') => true
- monthDays(month)：获取指定日期月份的总天数
  - monthDays('2022-08') => 31
  - monthDays('2022-06') => 30
- timeLeft(startTime, endTime)：计算${startTime - endTime}的剩余时间
  - timeLeft('2022-08-06 10:10:10','2022-08-10 11:15:15') => {d: 4, h: 1, m: 5, s: 5} // 剩余 4 天 1 小时 5 分 5 秒
- twoDateBetweenAllDay(startDay, endDay)：根据指定的两个日期，计算并返回中间的所有日期。
  - twoDateBetweenAllDay('2022-06-01', '2022-06-09') // ['2022-06-01','2022-06-02', '2022-06-03', '2022-06-04', '2022-06-05', '2022-06-06','2022-06-07', '2022-06-08', '2022-06-09']
- twoDaysBetweenNum(startDay, endDay)：计算两个日期之间的天数。 使用场景：距今天已有 N 天。
  - twoDaysBetweenNum('2022-06-16', '2022-06-20') // 4

### Url

- parseQueryString(str)：url 参数转对象。
  - parseQueryString('?a=1&b=2&c=3') => {a: '1', b: '2', c: '3'}
- stringifyQueryString：对象序列化。
  - stringifyQueryString({a: '1', b: '2', c: '3'}) => 'a=1&b=2&c=3'
