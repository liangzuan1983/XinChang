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
//景区及A级村庄客流TOP10
export function getScenicVillage(params) {
  return request({
    url: 'tour/xinchang/scenicVillage',
    method: 'get',
    params
  })
}
//游客过夜比例
export function getTouristStay(params) {
  return request({
    url: 'tour/xinchang/touristStay',
    method: 'get',
    params
  })
}
//游客来源地top10城市
export function getTouristCity(params) {
  return request({
    url: 'tour/xinchang/touristCity',
    method: 'get',
    params
  })
}
//游客来源地top10县区
export function getTouristCounty(params) {
  return request({
    url: 'tour/xinchang/touristCounty',
    method: 'get',
    params
  })
}
//热门旅游线路top10
export function getTourRoute(params) {
  return request({
    url: 'tour/xinchang/tourRoute',
    method: 'get',
    params
  })
}