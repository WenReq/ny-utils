/**
 * @description: 数据无-补空
 * @param {*} val 值
 * @param {*} unit 单位
 * @return {*} '-' or val+unit
 */
export let emptyFn = function emptyFn(val, unit) {
  if (isNaN(val) || val === "" || val === null) {
    return "—";
  } else {
    return val + unit;
  }
};
