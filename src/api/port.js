import request from '@/utils/request'
//1.游客性别占比
export function getGender(params) {
  return request({
    url: 'tour/xinchang/gender',
    method: 'get',
    params
  })
}
//2.游客年龄分析
export function getAge(params) {
  return request({
    url: 'tour/xinchang/age',
    method: 'get',
    params
  })
}
//3.游客消费水平
export function getConsume(params) {
  return request({
    url: 'tour/xinchang/consume',
    method: 'get',
    params
  })
}
//4.游客线上偏好
export function getHobby(params) {
  return request({
    url: 'tour/xinchang/hobby',
    params
  })
}
//5.手机终端
export function getMobilePhone(params) {
  return request({
    url: 'tour/xinchang/mobilePhone',
    method: 'get',
    params
  })
}
//6.新老游客比例
export function getTouristsProportion(params) {
  return request({
    url: 'tour/xinchang/touristsProportion',
    method: 'get',
    params
  })
}