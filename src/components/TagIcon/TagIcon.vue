<template>
  <div class="TagIcon">
    <div class="tag" @click="tagClick" :style="{'background-color':activeColor}">
      {{tagName}}
    </div>
  </div>
</template>

<script>
  import {getArticleByTag} from "../../network/article";

  export default {
    name: "TagIcon",
    props:{
      tagName:String,
      tagId:String,
      tagType:{
        type:Number,
        default:0
      }
    },
    data(){
      return{
        articleList:[]
      }
    },
    methods:{
      tagClick(){
        getArticleByTag(1,this.tagId).then(data=>{
          this.articleList = data.data.data
          this.$emit('tagClick',{data:data.data.data,id:this.tagId})
        })
      }
    },
    computed:{
      activeColor(){

        if (this.tagType===1){

          return "pink"
        }else{
          return "#FF7F50"
        }
      }
    }
  }
</script>

<style scoped>
.tag{
  width: 80px;
  text-align: center;
  border-radius: 10px;
  font-weight: bolder;
  padding: 5px;
  line-height: 50px;
  height: 50px;
  cursor: pointer;
  margin-right: 20px;
  background-color: #FF7F50;
}
</style>
