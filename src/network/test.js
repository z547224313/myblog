import {request} from "./request";

export function testHttp(msg) {
  return request({
    url:'/testMark',
    method:'post',
    data:{
      mes:msg
    }
  })
}
export function testArticle(data) {
  return request({
    url:'/testArticle',
    method:'post',
    data:{
      msg:data
    },
    headers: { 'Content-Type': 'multipart/form-data' }
  })

}
