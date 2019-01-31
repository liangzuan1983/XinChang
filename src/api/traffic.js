import request from '@/utils/request'
//高度卡口车辆占比
export function getCarCount(params) {
  return request({
    url: 'tour/xinchang/traffic/car/count',
    method: 'get',
    params
  })
}
//旅游出行方式
export function getCarType(params) {
  return request({
    url: 'tour/xinchang/traffic/car/type',
    method: 'get',
    params
  })
}
//省内自驾游客源地
export function getTourNumberInPro(params) {
  return request({
    url: 'tour/xinchang/tourNumber/inProvince',
    method: 'get',
    params
  })
}
//省外自驾游客源地
export function getTourNumberOutPro(params) {
  return request({
    url: 'tour/xinchang/tourNumber/outProvince',
    method: 'get',
    params
  })
}
//乡镇自驾游客源地
export function getTown() {
  return request({
    url: 'tour/xinchang/town',
    method: 'get'
  })
}