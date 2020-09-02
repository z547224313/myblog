<template>
  <div class="Article">
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
    <comments/>
    <star-icon :article-id="this.$route.query.id" @starClick="starClick"></star-icon>
  </div>
</template>

<script>
  import {getArticleById} from "../../network/article";
  import {formatDate} from '../../assets/utils'
  import ArticleTitle from "./ArticleTitle";
  import StarIcon from "./StarIcon";
  import Comments from "../../components/Comments/Comments";
  export default {
    name: "Article",
    components:{
      Comments,
      StarIcon,
      ArticleTitle
    },
    data(){
      return{
        articleName:'',
        date:'',
        likes:'',
        views:'',
        content:'',
        createTime:null,
        tags:[],
      }
    },
    mounted(){

      getArticleById(this.$route.query.id).then(data=>{
        this.articleName = data.data.data.articleName
        this.likes = data.data.data.meta.likes.toString()
        this.views = data.data.data.meta.views.toString()
        this.content = data.data.data.content
        this.createTime = data.data.data.createTime
        this.tags = this.$store.state.articleTags.get(this.$route.query.id.toString())
      })
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
    }
  }
</script>

<style scoped>

.Article{
  margin: 0 auto;

}
  .mavonEditor{
    margin-bottom: 15px;
  }
</style>
