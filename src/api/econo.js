import request from '@/utils/request';
//1.各类旅行业收入
export function getTrade(params) {
  return request({
    url: 'tour/xinchang/travelIncome',
    method: 'get',
    params
  })
}
//2.各类旅行业收入占比
export function getType(params) {
  return request({
    url: 'tour/xinchang/travel/incomeRate',
    method: 'get',
    params
  })
}
//3.旅游汽车客运公司客运量
export function getPassageCapacity(params) {
  return request({
    url: 'tour/xinchang/passageCapacity',
    method: 'get',
    params
  })
}
//4.涉旅行业接待能力
export function getTrades(params) {
  return request({
    url: 'tour/xinchang/travel/reception',
    method: 'get',
    params
  })
}