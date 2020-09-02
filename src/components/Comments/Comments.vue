<template>
  <div class="Comments">
    <div id="vcomments">

    </div>
  </div>
</template>

<script>
  export default {
    name: "Comments",
    data(){
      return{
        Valine:''
      }
    },
    mounted() {
      import("valine").then(res=>{
        this.Valine = res.default
        this.init()
      })
    },
    methods:{
      init(){
        new this.Valine({
          el:'#vcomments',
          appId:'y2dQuwA1NL5BIOpoSsUw9XLi-gzGzoHsz',
          appKey:'s9JpJ2QxNs4h7cfHdlV8ArFr',
          path:window.location.href
        })
      }
    }
  }
</script>

<style scoped>

</style>
