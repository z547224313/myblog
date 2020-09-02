<template>
  <div id="app">
    <NavBar class="navbar" :class="{'navbar-hidden':isShowNavbar}"/>
      <TopBar class="topbar" :class="{'topbar-full':isShowNavbar}"/>
      <div class="main-wrapper" :class="{'main-wrapper-full':isShowNavbar}">
        <div class="main">
          <router-view/>
        </div>
      </div>
  </div>
</template>
<script>
  import TopBar from "./components/Topbar/TopBar";
  import NavBar from "./components/Navbar/NavBar";

  export default {
    name: 'app',
    components: {
      NavBar,
      TopBar
    },
    data(){
      return{
        isShowNavbar:false
      }
    },
    mounted() {
      this.$bus.$on('showNavbar',this.ShowNavbar)
    },
    methods:{
      ShowNavbar(){
        this.isShowNavbar = !this.isShowNavbar
      }
    }

  }
</script>
<style lang="less">
  @import "~normalize.css";
  body{
    background-color: lightseagreen;
    overflow-x: hidden;
  }
  #app {
   .main-wrapper{
     transition: all 0.5s;
     position: absolute;
     left: 200px;
     top: 78px;
     width: calc(1366px - 200px);
     .main{
       width: 1000px;
       margin: 0 auto;
     }
   }
    width: 100%;
    height: 100%;

  }
  @media only screen and (max-width:1200px){
    .navbar{
      left:-200px !important;
      transition: all 0.5s;

    }
    .main-wrapper{
      left:0 !important;
    }
    .topbar{
      width: 100% !important;
      transition: all 0.5s;
    }
  }
  .navbar-hidden{
    left: -200px !important;
  }
  .topbar-full{
    width: 100% !important;
  }
  .main-wrapper-full{
    margin-left:auto;
    margin-right:auto;
    left:0 !important;/* 必须设置left\right否则会调整left right*/
    right:0 !important;

  }
</style>
