import request from '@/utils/request'
// 全域客流量分析
export function getPassageFlow(params) {
  return request({
    url: 'tour/xinchang/passageFlow',
    method: 'get',
    params
  })
}
// 游客类型分析
export function getTouristsType(params) {
  return request({
    url: 'tour/xinchang/touristsType',
    method: 'get',
    params
  })
}