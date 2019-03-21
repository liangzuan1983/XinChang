// 对数字进行格式化为每三位加一个逗号（JS三位分节法或者叫JS千分位加逗号）
export default function thousands(num) {
  const str = num.toString()
  const reg =
    str.indexOf('.') > -1 ? /(\d)(?=(\d{3})+\.)/g : /(\d)(?=(?:\d{3})+$)/g
  return str.replace(reg, '$1,')
}
