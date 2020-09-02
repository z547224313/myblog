<template>
  <div class="NavBar">
    <div class="avatar">
      <img :src="circleUrl" alt="">
    </div>
    <div class="title">
      <div><a href="https://github.com/z547224313">@BJUTZp</a></div>
      <span>前端修炼</span>
    </div>
    <el-divider></el-divider>
    <nav-button href="/home" icon="el-icon-house" name="首页"></nav-button>
<!--    待开发页面-->
<!--    <nav-button href="/tagPage" icon='el-icon-collection-tag' name="技术标签"></nav-button>-->
<!--    <nav-button href="/tipPage" icon="el-icon-price-tag" name="Tips"></nav-button>-->
<!--    <nav-button href="/DemoPage" icon="el-icon-suitcase" name="Demo"></nav-button>-->
    <nav-button href="/Board" icon="el-icon-orange" name="留言"></nav-button>
    <nav-button href="/about" icon='el-icon-postcard' name="关于"></nav-button>
    <el-divider></el-divider>
  </div>
</template>

<script>
  import NavButton from "./NavButton/NavButton";
  export default {
    name: "NavBar",
    components:{
      NavButton
    },
    data(){
      return{
        circleUrl:require('@/assets/img/avatar.jpg'),
      }
    }


  }
</script>

<style scoped>

.NavBar{
  width: 200px;
  background-color: lightcoral;
  position: fixed;
  z-index: 99999;
  left: 0;
  transition: all 0.5s;
  top: 0;
  bottom: 0;
}
  .avatar img{
    width: 40%;
    border-radius: 50%;
  }
  .avatar {
    margin-top: 15px;
    text-align: center;
  }
  .title{
    margin-top: 15px;
    font-weight: bolder;
    text-align: center;
   }
  .title div{
    margin-bottom: 10px;
  }
  .title a {
    text-decoration: none;
    font-size: 12px;
    color: gray;
  }
el-divider{
  color: firebrick;
}
</style>
