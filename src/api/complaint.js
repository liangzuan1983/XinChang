import request from '@/utils/request'
// 投诉率
export function tousu(params) {
  return request({
    url: 'tour/xinchang/tousu',
    method: 'get',
    params
  })
}
// 投诉类型分布
export function tousuType(params) {
  return request({
    url: 'tour/xinchang/tousu/type',
    method: 'get',
    params
  })
}