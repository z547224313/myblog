import {request} from "./request";

export function getTag() {
  return request({
    url:'/getTag'
  })
}
export function getTagById(id) {
  return request({
    url:'getTagById',
    params:{
      id
    }
  })
}
