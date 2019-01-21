import request from '@/utils/request'
//1.地图
export function tourController(params) {
  return request({
    url: 'v1/comment/tour/xinchang',
    method: 'get',
    params
  })
}
//2.近7日评论数
export function countWeekly(params) {
  return request({
    url: 'v1/comment/count/xinchang/weekly',
    method: 'get',
    params
  })
}
//3.评论分析
export function countDistribution(params) {
  return request({
    url: 'v1/comment/count/xinchang/distribution',
    method: 'get',
    params
  })
}
//4.近30日评论数
export function countMonthly(params) {
  return request({
    url: 'v1/comment/count/xinchang/monthly',
    method: 'get',
    params
  })
}
//5.近12个月评论数
export function countAnnually(params) {
  return request({
    url: 'v1/comment/count/xinchang/annually',
    method: 'get',
    params
  })
}
//6.实时新增评论
export function list(params) {
  return request({
    url: 'v1/comment/detail/xinchang',
    method: 'get',
    params
  })
}
//7.好评率排行
export function getRank(params) {
  return request({
    url: 'v1/comment/tour/xinchang/rank',
    method: 'get',
    params
  })
} 
//8.评论维度分析 9.差评分析
export function getAreaDimension(params) {
  return request({
    url: 'v1/comment/dimension/xinchang',
    method: 'get',
    params
  })
}