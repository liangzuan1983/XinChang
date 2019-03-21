import request from "@/utils/request";

//获取预警事件
export function getWarningEvents(params) {
  return request({
    url: "emergency/xinchang/events",
    method: "get",
    params
  });
}
//删除预警事件
export function getDeleteEvent(id, params) {
  return request({
    url: `emergency/xinchang/events/${id}`,
    method: "DELETE",
    params
  });
}
//事件处理情况统计
export function getEventsStatistics(params) {
  return request({
    url: "emergency/xinchang/eventsStatistics",
    method: "get",
    params
  });
}

//事件处理情况统计
export function getRate(params) {
  return request({
    url: "emergency/xinchang/rate",
    method: "get",
    params
  });
}

//预警设置数据接口
export function getScenicSpots(params) {
    return request({
        url: "emergency/xinchang/scenicSpots",
        method: "get",
        params
    });
}

//删除预警设置数据
export function deleteScenicSpots(id,params) {
    return request({
        url: `emergency/xinchang/scenicSpots/${id}`,
        method: "delete",
        params
    });
}

//增加预警预案
export function addSchemes(params) {
    return request({
        url: "emergency/xinchang/schemes",
        method: "post",
        params,
    });
}