import axios from 'axios'
import {request} from "./request";

export function saveImg(formdata) {
  return axios({
    url:'http://localhost:3000/addMarkImg',
    method: 'post',
    data: formdata,
    headers: { 'Content-Type': 'multipart/form-data' }
  })
}

export function addArticle(articleName, content, coverImg, tags, createTime) {
  return request({
    url:'/addArticle',
    method: 'post',
    data:{
      articleName,
      content,
      coverImg,
      tags,
      createTime:Date.now()
    }
  })
}

export function getAllArticle() {
  return request({
    url:'/getAllArticle',
  })
}
export function getArticleById(id) {
  return request({
    url:'/getArticleById',
    params:{
      id
    }
  })
}
export function updateViews(id) {
  return request({
    url:'/updateViews',
    method:'put',
    data:{
      id
    }
  })
}

export function getArticleByPage(page) {
  return request({
    url:'/getArticleByPage',
    params:{
      page
    }
  })
}

export function getALLArticleNumber() {
  return request({
    url:'/getALLArticleNumber',
  })
}

export function getArticleByTag(page, tagId) {
  return request({
    url:'/getArticleByTag',
    params:{
      page,
      tagId
    }
  })
}

export function getAllArticleByTag(tagId){
  return request({
    url:'/getAllArticleByTag',
    params:{
      tagId
    }
  })
}

export function updateLikes(id) {
  return request({
    url:'/updateLikes',
    method:'put',
    data:{
      id
    }
  })
}
