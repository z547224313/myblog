<template>
  <div class="TopButton">
    <div class="menu-icon" :class="{'menu-icon-active':isActive}" @click="menuClick">
      <p></p>
      <p></p>
      <p></p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TopButton",
    data(){
      return{
        isActive:true
      }
    },
    methods:{
      menuClick(){
        this.$bus.$emit('showNavbar','111')
        this.isActive = !this.isActive
      }
    }
  }
</script>

<style scoped lang="less">
.menu-icon{
  width: 18px;
  height: 48px;
  position: relative;
  left: 15px;
}
 p{
   margin: 0;
    position: absolute;
    width: 18px;
    height: 1px;
    background-color: black;
    transform-origin: left ;
    transition: all 0.2s;
  }
p:nth-child(1){
  top: 18px;
}

p:nth-child(2){
  top: 24px;
}

p:nth-child(3){
  top: 30px;
}
.menu-icon-active{
  p:nth-child(2){
    opacity: 0;
  }

  p:nth-child(1){
    transform: rotateZ(42deg);
  }

  p:nth-child(3){
    transform: rotateZ(-42deg);
  }
}
</style>
