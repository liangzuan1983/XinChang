import request from '@/utils/request'

/*
  接口全写在home页得了，感觉实在没法区分
*/

// 天气
export function weather() {
  return request({
    url: 'weather',
    method: 'get'
  })
}

// 游客性别占比
export function gender() {
  return request({
    url: 'gender',
    method: 'get'
  })
}

// 游客年龄
export function age() {
  return request({
    url: 'age',
    method: 'get'
  })
}

// 游客消费水平
export function consume() {
  return request({
    url: 'consume',
    method: 'get'
  })
}