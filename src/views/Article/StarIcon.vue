<template>
  <div class="StarIcon">
    <div class="icon" @click="likeClick">
      <i class="el-icon-star-off" style="font-size: 40px"></i>
    </div>
  </div>
</template>

<script>
  import {updateLikes} from "../../network/article";

  export default {
    name: "StarIcon",
    props:{
      articleId:String
    },
    methods:{
      likeClick(){
        updateLikes(this.articleId).then(data=>{
          this.$emit('starClick')
        })
      }
    }

  }
</script>

<style scoped>
.icon{
  cursor: pointer;
  border: 2px solid pink;
  border-radius: 50%;
  width: 40px;
  position: fixed;
  right: 50px;
  bottom: 100px;
  background-color: pink;
  color: white;
  z-index: 999999;
}
  .icon:hover{
    transition: all 0.5s;
    background-color: indianred;
    border: 2px solid indianred;
  }
</style>
