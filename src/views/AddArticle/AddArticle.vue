<template>
  <div class="AddArticle">
    <el-form ref="form" :model="article" label-width="80px">
      <el-form-item label="文章名称">
        <el-input v-model="article.articleName"></el-input>
      </el-form-item>
      <el-form-item label="技术标签">
        <el-select v-model="article.tags" multiple placeholder="请选择">
          <el-option
                  v-for="(item,index) in tagList"
                  :key="index"
                  :label="item.tagName"
                  :value="item._id">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="内容">
        <mavon-editor ref="md" v-model="mdContent" @imgAdd="$imgAdd" @imgDel="$imgDel" :subfield="false" />
      </el-form-item>
      <el-form-item label="封面">
        <el-upload
                class="upload-demo"
                ref="upload"
                action="http://localhost:3000/addCover"
                :on-success="handleUploadSuccess"
                :file-list="fileList"
                :auto-upload="false">
          <el-button slot="trigger" size="small" type="primary">选取封面</el-button>
          <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import {saveImg, addArticle} from "../../network/article";
  import {getTag} from "../../network/tag";

  export default {
    name: "AddArticle",
    data() {
      return {
        article: {
          articleName: '',
          coverImg:'',
          tags:[],
          content:''
        },
        fileList:[],
        mdContent:'',
        tagList:[]
      }
    },
    methods: {
      onSubmit() {
        this.$refs.upload.submit();//发送文件到服务器
      },
      $imgAdd(pos,$file){
        let formdata = new FormData()
        formdata.append('image',$file);
        saveImg(formdata).then(url=>{
          this.$refs.md.$img2Url(pos, url.data);
        })
      },
      $imgDel(){

      },
      handleUploadSuccess(res, file){
        console.log(this.$refs)
        this.article.coverImg = res
        this.article.content = this.$refs.md.d_render
        addArticle(this.article.articleName,
        this.article.content,this.article.coverImg,this.article.tags)
      }
    },
    created() {
      //获取tag标签进行选择
      getTag().then(data=>{
        this.tagList = data.data.data
      })
    }
  }
</script>

<style scoped>
  .AddArticle {
    width: 1000px;
    margin-top: 15px;
  }
</style>
