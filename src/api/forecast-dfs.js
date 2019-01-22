import request from '@/utils/request';
// 大佛寺微信点击率
export function wechatDf(params) {
  return request({
    url: 'tour/xinchang/dafosi/wechatClick',
    method: 'get',
    params
  })
}
//大佛寺散客客源地排行
export function dfsSanke() {
  return request({
    url: 'tour/xinchang/dfsSanke/passenger',
    method: 'get'
  })
}
//大佛寺团队客源地排行
export function dfsTeam() {
  return request({
    url: 'tour/xinchang/dfsTeam/passenger',
    method: 'get'
  })
}
// 大佛寺客户来源地分析
export function dfsSource() {
  return request({
    url: 'tour/xinchang/dfsSource/passenger',
    method: 'get'
  })
}
// 大佛寺散客票型分析
export function sankeTypeDfs(params) {
  return request({
    url: 'tour/xinchang/dafosi/SankeType',
    method: 'get',
    params
  })
}
// 大佛寺游客客源地排行
export function dfsTouristSource(params) {
  return request({
    url: 'tour/xinchang/dafosi/touristSource',
    method: 'get',
    params
  })
}
// 大佛寺景区客流
export function dfsScenicFlowDfs(params) {
  return request({
    url: 'tour/xinchang/dafosi/scenicFlow',
    method: 'get',
    params
  })
}
// 大佛寺团队散客游客占比分析
export function groupIndividualRateDfs(params) {
  return request({
    url: 'tour/xinchang/dafosi/groupIndividualRate',
    method: 'get',
    params
  })
}
//大佛寺车辆来源地排行
export function vehicleSourceDfs(params) {
  return request({
    url: 'tour/xinchang/dafosi/vehicleSource',
    method: 'get',
    params
  })
}
// 大佛寺销售渠道
export function saleChannelDfs(params) {
  return request({
    url: 'tour/xinchang/dafosi/saleChannel',
    method: 'get',
    params
  })
}
// 大佛寺旅行社销量排行
export function tourAgencyDfs(params) {
  return request({
    url: 'tour/xinchang/dafosi/tourAgency',
    method: 'get',
    params
  })
}
//大佛寺售票量
export function onlionOrderDfs(params) {
  return request({
    url: 'tour/xinchang/dafosi/onlionOrder',
    method: 'get',
    params
  })
}
// 大佛寺客户来源地分析
export function clientSourceDfs(params) {
  return request({
    url: 'tour/xinchang/dafosi/clientSource',
    method: 'get',
    params
  })
}
// 大佛寺订单来源
export function orderSourceDfs(params) {
  return request({
    url: 'tour/xinchang/dafosi/orderSource',
    method: 'get',
    params
  })
}