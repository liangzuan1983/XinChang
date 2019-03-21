import request from '@/utils/request'

// 乡村旅游实时客流
export function getVillagePassenger(params) {
  return request({
    url: 'tour/xinchang/villagePassenger',
    method: 'get',
    params
  })
}

//乡村累计客流
export function getScenicVillage(params) {
  return request({
    url: 'tour/xinchang/scenicVillage',
    method: 'get',
    params
  })
}