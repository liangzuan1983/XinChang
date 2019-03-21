import request from '@/utils/request'

// 景区关联度
export function getCorrelation(params) {
  return request({
    url: 'tour/xinchang/scenicSpot/correlation',
    method: 'get',
    params
  })
}
