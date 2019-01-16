import request from '@/utils/request'
//高度卡口车辆占比

//旅游出行方式

//省内自驾游客源地
export function getTourNumberInPro(params) {
  return request({
    url: 'tourNumber/inProvince',
    method: 'get',
    params
  })
}
//省外自驾游客源地
export function getTourNumberOutPro(params) {
  return request({
    url: 'tourNumber/outProvince',
    method: 'get',
    params
  })
}