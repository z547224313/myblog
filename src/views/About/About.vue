<template>
  <div class="About">
    <article-title
            :article-name="this.articleName"
            :date="getTime"
            :likes="this.likes"
            :views="this.views"
            :tags="this.tags">

    </article-title>
    <div class="mavonEditor">
      <mavon-editor ref="md" v-html="this.content"  :navigation="true" style="padding:20px;border-radius: 20px;"/>
    </div>
    <star-icon :article-id="this.id" @starClick="starClick"></star-icon>
  </div>
</template>

<script>
  import {getArticleById} from "../../network/article";
  import ArticleTitle from "../Article/ArticleTitle";
  import {formatDate} from "../../assets/utils";
  import StarIcon from "../Article/StarIcon";
  export default {
    name: "About",
    components:{
      ArticleTitle,
      StarIcon
    },
    data() {
      return {
        id: '5f4f63ce4ed4770bcc3bb131',
        articleName:'',
        date:'',
        likes:'',
        views:'',
        content:'',
        createTime:null,
        tags:[],
      }
    },
    computed:{
      getTime(){
        this.date = new Date(this.createTime)
        return formatDate(this.date,"yyyy-MM-dd hh:mm:ss")
      }
    },
    methods:{
      starClick(){
        this.likes= (Number(this.likes) +1).toString()
      },
    },
    mounted() {
      getArticleById(this.id).then(data=>{
        this.articleName = data.data.data.articleName
        this.likes = data.data.data.meta.likes.toString()
        this.views = data.data.data.meta.views.toString()
        this.content = data.data.data.content
        this.createTime = data.data.data.createTime
        this.tags = this.$store.state.articleTags.get(this.id.toString())
      })
    }
  }
</script>

<style scoped>

</style>
