<template>
  <div class="ArticleListItem" @click="itemClick">
    <div class="coverImg">
      <div class="tags">
        <div class="tag-item" v-for="(item, index) in tags" :key="index">
          {{item.tagName}}
        </div>
      </div>
      <img :src="article.coverImg" alt="">
    </div>
    <div class="article-msg" :style="{'background-color':activeColor}">
      <div class="article-title">{{article.articleName}}</div>
      <div class="article-msg-bottom">
        <div class="article-time">
          <i class="el-icon-time">{{getTime}}</i>
        </div>
        <div class="article-meta">
          <i class="el-icon-view">{{article.meta.views}}</i>
          <i class="el-icon-star-off">{{article.meta.likes}}</i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {formatDate} from "../../assets/utils";
  import {updateViews} from "../../network/article";
  import {getTagById} from "../../network/tag";

  export default {
    name: "ArticleListItem",
    props:{
      article:Object,
    },
    data(){
      return{
        date:null,
        tags:[]
      }
    },
    computed:{
      getTime(){
        this.date = new Date(this.article.createTime)
        return formatDate(this.date,"yyyy-MM-dd hh:mm:ss")
      },
      activeColor(){
        //第一个标签来判断颜色
        if(this.tags[0]===undefined){
          return '#FF7F50'
        }else if(this.tags[0].tagType===1){
          return 'pink'
        }
      }
    },
    methods:{
      itemClick(){
        //先增加观看次数再跳转
        updateViews(this.article._id).then(ret=>{
          this.$router.push({
            path:'/article',
            query:{
              id:this.article._id,
            }
          })
        })
      }
    },
    mounted() {
      let tagsPromise = []
      for(let item of this.article.tags){
        tagsPromise.push(getTagById(item))
      }
      let all = Promise.all(tagsPromise)
      all.then(ret=>{
        for(let item of ret){
          this.tags.push({tagName:item.data.data.tagName,
          tagType:item.data.data.tagType})
          //使用vuex来保存tags
          this.$store.commit({
            type:'addArticleTags',
            id:this.article._id,
            tags:this.tags
          })
        }
      })
    }

  }
</script>

<style scoped lang="less">
.ArticleListItem{
  cursor: pointer;
  position: relative;
  margin: 0 auto;
  width: 300px;
  height: 360px;
  overflow: hidden;
  .coverImg{
    .tags{
      position: absolute;
      right: 0;
      top: 0;
      .tag-item{
        box-sizing: border-box;
        padding: 5px;
        background-color: rosybrown;
        margin-bottom: 5px;
        color: greenyellow;

      }
    }
    height: 220px;
  }
  .article-msg{
    position: absolute;
    padding: 15px 20px 30px 20px;
    top: 220px;
    bottom: 0;
    left: 0;
    right: 0;
    font-size: 15px;
    background-color: #FF7F50;
    .article-msg-bottom{
      display: flex;
      justify-content: space-between;
    }
    .article-title{
      margin-bottom: 35px;
      font-size: 23px;
      font-weight: bolder;
    }

  }
  img{
    width: 100%;

  }
}
</style>
