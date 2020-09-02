<template>
  <div class="TopBar">
    <top-button></top-button>
  </div>
</template>

<script>
  import TopButton from "./TopButton/TopButton";
  export default {
    name: "TopBar",
    components:{
      TopButton
    }
  }
</script>

<style scoped>
.TopBar{
  height: 48px;
  transition: all 0.5s;
  width: calc(100% - 200px);
  background-color: lightgoldenrodyellow;
  position: fixed;
  z-index: 9999;
  top: 0;
  right: 0;
}
</style>
