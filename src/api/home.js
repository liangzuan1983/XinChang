import request from '@/utils/request'

/*
  接口全写在home页得了，感觉实在没法区分
*/
// 天气
export function weather() {
  return request({
    url: 'weather',
    method: 'get'
  })
}
// 游客性别占比
export function gender() {
  return request({
    url: 'gender',
    method: 'get'
  })
}
// 游客年龄
export function age() {
  return request({
    url: 'age',
    method: 'get'
  })
}
// 游客消费水平
export function consume() {
  return request({
    url: 'consume',
    method: 'get'
  })
}
// 游客线上偏好
export function hobby() {
  return request({
    url: 'hobby',
    method: 'get'
  })
}
// 游客来源城市
export function city() {
  return request({
    url: 'city',
    method: 'get'
  })
}
// 乡村旅游热度排行top5
export function hotTown() {
  return request({
    url: 'hotTown',
    method: 'get'
  })
}
// 游客热门路线
export function line() {
  return request({
    url: 'line',
    method: 'get'
  })
}
// 近一周游客数
export function weekly() {
  return request({
    url: 'tourNumber/weekly',
    method: 'get'
  })
}
// 产业检测数据
export function base() {
  return request({
    url: 'base',
    method: 'get'
  })
}
// 投诉率
export function tousu(params) {
  return request({
    url: 'tousu',
    method: 'get',
    params
  })
}
// 大佛寺微信点击率
export function wechatDf(params) {
  return request({
    url: 'dafosi/wechatClick',
    method: 'get',
    params
  })
}
// 十九峰微信点击率
export function wechatSj(params) {
  return request({
    url: 'shijiufeng/wechatClick',
    method: 'get',
    params
  })
}
// 旅游消费额度变化趋势
export function limit() {
  return request({
    url: 'consume/limit',
    method: 'get'
  })
}
// 旅游消费类型分析
export function type() {
  return request({
    url: 'consume/type',
    method: 'get'
  })
}
// 资源分布
export function resource() {
  return request({
    url: 'resource'
  })
}
// 客运公司客运量
export function capacity(params) {
  return request({
    url: 'passageCapacity',
    method: 'get',
    params
  })
}