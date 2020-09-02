<template>
  <div class="ArticleList">
    <div v-for="item in articleList" :key="item._id" class="list">
      <article-list-item :article="item"></article-list-item>
    </div>

  </div>
</template>

<script>
  import ArticleListItem from "./ArticleListItem";
  export default {
    name: "ArticleList",
    props:{
      articleList:{
        type:Array,
        default:[]
      }
    },
    components:{
      ArticleListItem
    }
  }
</script>

<style scoped>
.ArticleList{
  display: flex;
  flex-wrap: wrap;
}
  .list{
    flex: 0 0 33.3333%;
    margin-bottom: 30px;
  }
</style>
