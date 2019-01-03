import request from '@/utils/request'

// 天气
export function weather() {
  return request({
    url: 'weather',
    method: 'get'
  })
}