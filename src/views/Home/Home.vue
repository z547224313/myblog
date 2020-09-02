<template>
  <div class="Home">
    <div class="tagList">
      <div v-for="item in tags" :key="item._id">
        <tag-icon :tag-id="item._id" :tag-name="item.tagName" :tag-type="item.tagType" @tagClick="tagClick"/>
      </div>
    </div>
    <article-list :article-list="articleList"></article-list>
    <div class="block">
      <el-pagination class="el-pagination is-background"
              layout="prev, pager, next"
              :total="total" :page-size="9" @current-change="changePage" background>
      </el-pagination>
    </div>
   </div>
</template>

<script>
  import ArticleList from "../../components/ArticleList/ArticleList";
  import {getArticleByPage,getALLArticleNumber,getArticleByTag,getAllArticleByTag} from "../../network/article";
  import TagIcon from "../../components/TagIcon/TagIcon";
  import {getTag} from "../../network/tag";

  export default {
    name: "Home",
    components:{
       ArticleList,TagIcon
    },
    data(){
      return{
        articleList:[],
        total:0,
        tags:[],
        isChose:false,//是否指定分类
        choseTagId:''//分类id
      }
    },
    mounted() {
      getTag().then(data=>{
        this.tags = data.data.data
      })
      getALLArticleNumber().then(data=>{
        this.total = data.data.data
      })
      getArticleByPage(1).then(data=>{
        //没有指定分类，默认所有
        this.articleList = Array.from(data.data.data)
      })
    },
    methods:{
      changePage(page){
        if(!this.isChose){
          getArticleByPage(page).then(data=>{
            this.articleList = Array.from(data.data.data)
          })
        }else{
          getArticleByTag(page,this.choseTagId).then(data=>{
            this.articleList = Array.from(data.data.data)
          })
        }
      },
      tagClick(data){
        this.articleList = data.data
        this.isChose = true
        getAllArticleByTag(data.id).then(data=>{
          this.total = data.data.data.length
        })
        this.choseTagId = data.id
      }
    }
  }
</script>

<style scoped>
.block{
  position: absolute;
  margin-left: 0;
  margin-right: 0;
  left: 50%;
  transform: translateX(-50%);
}
.tagList{
  margin-left:auto;
  margin-right: auto;

  display: flex;
  flex-wrap: wrap;
  margin-bottom: 15px;
}

</style>
