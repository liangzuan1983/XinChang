import request from '@/utils/request'
// 十九峰微信点击率
export function wechatSj(params) {
  return request({
    url: 'tour/xinchang/shijiufeng/wechatClick',
    method: 'get',
    params
  })
}
//十九峰散客客源地排行
export function sjfSanke() {
  return request({
    url: 'tour/xinchang/sjfSanke/passenger',
    method: 'get'
  })
}
// 十九峰团队客源地排行
export function sjfTeam() {
  return request({
    url: 'tour/xinchang/sjfTeam/passenger',
    method: 'get'
  })
}
// 十九峰客户来源分析
export function sjfSource() {
  return request({
    url: 'tour/xinchang/sjfSource/passenger',
    method: 'get'
  })
}
export function sankeTypeSjf() {
  return request({
    url: 'tour/xinchang/shijiufeng/SankeType',
    method: 'get'
  })
}
// 十九峰游客客源地排行
export function SjfTouristSource(params) {
  return request({
    url: 'tour/xinchang/shijiufeng/touristSource',
    method: 'get',
    params
  })
}
// 十九峰景区客流
export function dfsScenicFlowSjf(params) {
  return request({
    url: 'tour/xinchang/shijiufeng/scenicFlow',
    method: 'get',
    params
  })
}
// 十九峰团队散客游客占比分析
export function groupIndividualRateSjf(params) {
  return request({
    url: 'tour/xinchang/shijiufeng/groupIndividualRate',
    method: 'get',
    params
  })
}
//十九峰车辆来源地排行
export function vehicleSourceSjf(params) {
  return request({
    url: 'tour/xinchang/shijiufeng/vehicleSource',
    method: 'get',
    params
  })
}
// 十九峰销售渠道
export function saleChannelSjf(params) {
  return request({
    url: 'tour/xinchang/shijiufeng/saleChannel',
    method: 'get',
    params
  })
}
// 十九峰旅行社销量排行
export function tourAgencySjf(params) {
  return request({
    url: 'tour/xinchang/shijiufeng/tourAgency',
    method: 'get',
    params
  })
}
//十九峰售票量
export function onlionOrderSjf(params) {
  return request({
    url: 'tour/xinchang/shijiufeng/onlionOrder',
    method: 'get',
    params
  })
}
// 十九峰客户来源地分析
export function clientSourceSjf(params) {
  return request({
    url: 'tour/xinchang/shijiufeng/clientSource',
    method: 'get',
    params
  })
}
// 十九峰订单来源
export function orderSourceSjf(params) {
  return request({
    url: 'tour/xinchang/shijiufeng/orderSource',
    method: 'get',
    params
  })
}