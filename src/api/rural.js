import request from '@/utils/request'

// 乡村旅游实时客流
export function getVillagePassenger(params) {
  return request({
    url: 'tour/xinchang/villagePassenger',
    method: 'get',
    params
  })
}
