import request from '@/utils/request';
//1.假日实时数据-左

//2.假日实时数据-右

//3.客流数据
export function getPassageFlow(params) {
  return request({
    url: 'tour/xinchang/passageFlow',
    method: 'get',
    params
  })
}
//4.游客性别占比
export function getGender(params) {
  return request({
    url: 'tour/xinchang/gender',
    method: 'get',
    params
  })
}
//5.游客年龄分布
export function getAge(params) {
  return request({
    url: 'tour/xinchang/age',
    method:'get',
    params
  })
}
//6.游客消费能力占比
export function getConsume(params) {
  return request({
    url: 'tour/xinchang/consume',
    method: 'get',
    params
  })
}
//7.游客线上偏好
export function getHobby(params) {
  return request({
    url: 'tour/xinchang/hobby',
    method: 'get',
    params
  })
}
//8.热门游览线路TOP10
export function getLine(params) {
  return request({
    url: 'tour/xinchang/line',
    method: 'get',
    params
  })
}
//9.游客过夜占比
export function getTouristStay(params) {
  return request({
    url: 'tour/xinchang/touristStay',
    method: 'get',
    params
  })
}
//10.客源地TOP10
export function getTouristCity(params) {
  return request({
    url: 'tour/xinchang/touristCity',
    method: 'get',
    params
  })
}
//11.游客消费
export function getTrade(params) {
  return request({
    url: 'tour/xinchang/consume/trade',
    method: 'get',
    params
  })
}
//12.行业消费占比分析
export function getType(params) {
  return request({
    url: 'tour/xinchang/consume/type',
    method: 'get',
    params
  })
}
//13.游客消费占比
export function getTrades(params) {
  return request({
    url: 'tour/xinchang/consume/source',
    method: 'get',
    params
  })
}