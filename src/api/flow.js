import request from '@/utils/request'
// 全域客流量分析
export function getPassageFlow(params) {
  return request({
    url: 'tour/xinchang/passageFlow',
    method: 'get',
    params
  })
}