import request from '@/utils/request'

// 景区客流
export function getScenicFlow(spot, params) {
  return request({
    url: `tour/xinchang/${spot}/scenicFlow`,
    method: 'get',
    params
  })
}

// 景区售票额
export function getSalesAmount(spot, params) {
  return request({
    url: `tour/xinchang/${spot}/salesAmount`,
    method: 'get',
    params
  })
}

// 售票量
export function getOnlionOrder(spot, params) {
  return request({
    url: `tour/xinchang/${spot}/onlionOrder`,
    method: 'get',
    params
  })
}

// 售票类型
export function getTicketType(spot, params) {
  return request({
    url: `tour/xinchang/${spot}/ticketType`,
    method: 'get',
    params
  })
}

// 客源地排行
export function getTouristSource(spot, params) {
  return request({
    url: `tour/xinchang/${spot}/touristSource`,
    method: 'get',
    params
  })
}

// 车辆来源地排行
export function getVehicleSource(spot, params) {
  return request({
    url: `tour/xinchang/${spot}/vehicleSource`,
    method: 'get',
    params
  })
}

// 节假日实时客流
export function getRealtime(spot, params) {
  return request({
    url: `tour/xinchang/${spot}/holiday/realtime`,
    method: 'get',
    params
  })
}

// 节假日数据统计
export function getHolidayData(spot, params) {
  return request({
    url: `tour/xinchang/${spot}/holiday/stats`,
    method: 'get',
    params
  })
}

// 节假日客流数据
export function getPassengerFlow(spot, params) {
  return request({
    url: `tour/xinchang/${spot}/holiday/passengerFlow`,
    method: 'get',
    params
  })
}

// 节假日车流数据
export function getVehicleStream(spot, params) {
  return request({
    url: `tour/xinchang/${spot}/holiday/vehicleStream`,
    method: 'get',
    params
  })
}

// 节假日票务数据
export function getTicket(spot, params) {
  return request({
    url: `tour/xinchang/${spot}/holiday/ticket`,
    method: 'get',
    params
  })
}
