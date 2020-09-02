<template>
  <div class="ArticleTitle">
    <div class="title">
      {{articleName}}
    </div>
    <div class="tags">
      <div class="tag-item" v-for="(item,index) in tags" :key="index">
        {{item.tagName}}
      </div>
    </div>
    <div class="msg">
      <div class="date">
        <i class="el-icon-time" style="font-size: 20px">{{date}}</i>
      </div>
      <div class="meta">
        <i class="el-icon-view" style="margin-right: 25px;font-size: 20px">  {{views}}</i>
        <i class="el-icon-star-off" style="font-size: 20px">  {{likes}}</i>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ArticleTitle",
    props:{
      articleName:String,
      date:String,
      views:String,
      likes:String,
      tags:null
    }
  }
</script>

<style scoped lang="less">
.ArticleTitle{
  margin: 0 auto 15px auto;

  background-color: #FF7F50;
  height: 200px;
  border-radius: 20px;
  padding: 0 40px ;
  box-sizing: border-box;
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  .tags{
    display: flex;
    .tag-item{
      box-sizing: border-box;
      padding: 5px;
      background-color: sandybrown;
      font-size: 18px;
      font-weight: bolder;
      margin-right: 5px;
    }
  }
  .title{
    font-weight: bolder;
    font-size: 35px;
  }
  .msg{
    display: flex;
    justify-content: space-between;
  }
}
</style>
