import request from '@/utils/request'

// 天气
export function weather() {
  return request({
    url: 'tour/xinchang/weather',
    method: 'get'
  })
}
// 游客性别占比
export function gender() {
  return request({
    url: 'tour/xinchang/gender',
    method: 'get'
  })
}
// 游客年龄
export function age() {
  return request({
    url: 'tour/xinchang/age',
    method: 'get'
  })
}
// 游客消费水平
export function consume() {
  return request({
    url: 'tour/xinchang/consume',
    method: 'get'
  })
}
// 游客线上偏好
export function hobby() {
  return request({
    url: 'tour/xinchang/hobby',
    method: 'get'
  })
}
// 游客来源城市
export function city() {
  return request({
    url: 'tour/xinchang/city',
    method: 'get'
  })
}
// 乡村旅游热度排行top5
export function hotTown() {
  return request({
    url: 'tour/xinchang/hotTown',
    method: 'get'
  })
}
// 游客热门路线
export function line() {
  return request({
    url: 'tour/xinchang/line',
    method: 'get'
  })
}
// 近一周游客数
export function weekly() {
  return request({
    url: 'tour/xinchang/tourNumber/weekly',
    method: 'get'
  })
}
// 产业检测数据
export function base() {
  return request({
    url: 'tour/xinchang/base',
    method: 'get'
  })
}

// 旅游消费额度变化趋势
export function limit() {
  return request({
    url: 'tour/xinchang/consume/limit',
    method: 'get'
  })
}
// 旅游消费类型分析
export function type() {
  return request({
    url: 'tour/xinchang/consume/type',
    method: 'get'
  })
}
// 资源分布
export function resource() {
  return request({
    url: 'tour/xinchang/resource'
  })
}
// 客运公司客运量
export function capacity(params) {
  return request({
    url: 'tour/xinchang/passageCapacity',
    method: 'get',
    params
  })
}
//重点景区大佛寺
export function importDfs() {
  return request({
    url: 'tour/xinchang/dafosi/base',
    method: 'get'
  })
}
//重点景区十九峰
export function importSjf() {
  return request({
    url: 'tour/xinchang/shijiufeng/base',
    method: 'get'
  })
}
//游客来源地TOP10（区县）
export function town() {
  return request({
    url: 'tour/xinchang/town',
    method: 'get'
  })
}
//好评率差评率
export function countWithDate() {
  return request({
    url: 'v1/comment/count/xinchang',
    method: 'get'
  })
}
//字符云
export function getKeyword() {
  return request({
    url: 'v1/comment/keyword/xinchang',
    method: 'get'
  })
}