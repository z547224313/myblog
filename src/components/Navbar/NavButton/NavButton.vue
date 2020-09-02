<template>
  <div class="NavButton">
    <div class="text" @click="btnClick">
      <i :class="icon"></i>
      <div>{{name}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "NavButton",
    props:{
      name:String,
      icon:String,
      href:String
    },
    methods:{
      btnClick(){
        this.$router.push(this.href)
      }
    }

  }
</script>

<style scoped>
.NavButton{
  width: 180px;
  margin: 0 auto;
  height: 50px;

  border-radius: 15px;
  transition:  0.5s
}
  .text{
    display: flex;
    align-items: center;
    line-height: 50px;
    font-size: 18px;
  }
  .text i{
    font-size: 25px;
    margin-left: 25px;
    margin-right: 45px;
  }
  .NavButton:hover{
    background-color: #bfa;
  }
</style>
