import request from '@/utils/request'
//游客消费
export function getConsumeTourism(params) {
  return request({
    url: 'tour/xinchang/consume/limit',
    method: 'get',
    params
  })
}
//游客消费占比
export function getConsumeSource(params) {
  return request({
    url: 'tour/xinchang/consume/source',
    method: 'get',
    params
  })
}
//行业消费
export function getTrade(params) {
  return request({
    url: 'tour/xinchang/consume/trade',
    method: 'get',
    params
  })
}
//行业消费占比
export function getType(params) {
  return request({
    url: 'tour/xinchang/consume/type',
    method: 'get',
    params
  })
}