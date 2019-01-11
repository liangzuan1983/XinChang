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
//重点景区大佛寺
export function importDfs() {
  return request({
    url: 'dafosi/base',
    method: 'get'
  })
}
//重点景区十九峰
export function importSjf() {
  return request({
    url: 'shijiufeng/base',
    method: 'get'
  })
}
//游客来源地TOP10（区县）
export function town() {
  return request({
    url: 'town',
    method: 'get'
  })
}
// 省内客源地自驾游
export function inProvince() {
  return request({
    url: 'tourNumber/inProvince',
    method: 'get'
  })
}
// 省外客源地自驾游
export function outProvince() {
  return request({
    url: 'tourNumber/outProvince',
    method: 'get'
  })
}
//大佛寺散客客源地排行
export function dfsSanke() {
  return request({
    url: 'dfsSanke/passenger',
    method: 'get'
  })
}
//大佛寺团队客源地排行
export function dfsTeam() {
  return request({
    url: 'dfsTeam/passenger',
    method: 'get'
  })
}
// 大佛寺客户来源地分析
export function dfsSource() {
  return request({
    url: 'dfsSource/passenger',
    method: 'get'
  })
}
//十九峰散客客源地排行
export function sjfSanke() {
  return request({
    url: 'sjfSanke/passenger',
    method: 'get'
  })
}
// 十九峰团队客源地排行
export function sjfTeam() {
  return request({
    url: 'sjfTeam/passenger',
    method: 'get'
  })
}
// 十九峰客户来源分析
export function sjfSource() {
  return request({
    url: 'sjfSource/passenger',
    method: 'get'
  })
}
// 大佛寺散客票型分析
export function sankeTypeDfs(params) {
  return request({
    url: 'dafosi/SankeType',
    method: 'get',
    params
  })
}
// 十九峰散客类型分析
export function sankeTypeSjf() {
  return request({
    url: 'shijiufeng/SankeType',
    method: 'get'
  })
}
// 大佛寺游客客源地排行
export function dfsTouristSource(params) {
  return request({
    url: 'dafosi/touristSource',
    method: 'get',
    params
  })
}
// 十九峰游客客源地排行
export function SjfTouristSource(params) {
  return request({
    url: 'shijiufeng/touristSource',
    method: 'get',
    params
  })
}
// 大佛寺景区客流
export function dfsScenicFlowDfs(params) {
  return request({
    url: 'dafosi/scenicFlow',
    method: 'get',
    params
  })
}
// 十九峰景区客流
export function dfsScenicFlowSjf(params) {
  return request({
    url: 'shijiufeng/scenicFlow',
    method: 'get',
    params
  })
}
// 大佛寺团队散客游客占比分析
export function groupIndividualRateDfs(params) {
  return request({
    url: 'dafosi/groupIndividualRate',
    method: 'get',
    params
  })
}
// 十九峰团队散客游客占比分析
export function groupIndividualRateSjf(params) {
  return request({
    url: 'shijiufeng/groupIndividualRate',
    method: 'get',
    params
  })
}
//大佛寺车辆来源地排行
export function vehicleSourceDfs(params) {
  return request({
    url: 'dafosi/vehicleSource',
    method: 'get',
    params
  })
}
//十九峰车辆来源地排行
export function vehicleSourceSjf(params) {
  return request({
    url: 'shijiufeng/vehicleSource',
    method: 'get',
    params
  })
}
// 大佛寺销售渠道
export function saleChannelDfs(params) {
  return request({
    url: 'dafosi/saleChannel',
    method: 'get',
    params
  })
}
// 十九峰销售渠道
export function saleChannelSjf(params) {
  return request({
    url: 'shijiufeng/saleChannel',
    method: 'get',
    params
  })
}
// 大佛寺旅行社销量排行
export function tourAgencyDfs(params) {
  return request({
    url: 'dafosi/tourAgency',
    method: 'get',
    params
  })
}
// 十九峰旅行社销量排行
export function tourAgencySjf(params) {
  return request({
    url: 'shijiufeng/tourAgency',
    method: 'get',
    params
  })
}
//大佛寺售票量
export function onlionOrderDfs(params) {
  return request({
    url: 'dafosi/onlionOrder',
    method: 'get',
    params
  })
}
//十九峰售票量
export function onlionOrderSjf(params) {
  return request({
    url: 'shijiufeng/onlionOrder',
    method: 'get',
    params
  })
}
// 大佛寺客户来源地分析
export function clientSourceDfs(params) {
  return request({
    url: 'dafosi/clientSource',
    method: 'get',
    params
  })
}
// 十九峰客户来源地分析
export function clientSourceSjf(params) {
  return request({
    url: 'shijiufeng/clientSource',
    method: 'get',
    params
  })
}

// 大佛寺订单来源
export function orderSourceDfs(params) {
  return request({
    url: 'dafosi/orderSource',
    method: 'get',
    params
  })
}
// 十九峰订单来源
export function orderSourceSjf(params) {
  return request({
    url: 'shijiufeng/orderSource',
    method: 'get',
    params
  })
}