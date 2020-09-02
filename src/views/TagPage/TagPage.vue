<template>
  <div class="TagPage">
    <div v-for="item in tags" :key="item._id">
        <tag-icon :tag-id="item._id"
                  :tag-name="item.tagName"
        />
    </div>
  </div>
</template>

<script>
  import TagIcon from "../../components/TagIcon/TagIcon";
  import {getTag} from "../../network/tag";

  export default {
    name: "TagPage",
    components: {TagIcon},
    data(){
      return{
        tags:[]
      }
    },
    created() {
      getTag().then(data=>{
        this.tags = data.data.data
      })
    },

  }
</script>

<style scoped>
.TagPage{
  margin: 0 auto;
  width: 1400px;
  display: flex;
  flex-wrap: wrap;
}
</style>
