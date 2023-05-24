<script setup lang='ts'>
import { ref } from "vue";
import request  from "../utils/request";
import Editor from "../components/editor.vue";
import { articleForm } from "../store/editor"
import { marked } from 'marked';
import { useRoute,useRouter } from 'vue-router';
import { article , findArticle } from "../store/article"


const route=useRoute()
const $router=useRouter()



if("id" in route.query){
  findArticle(route.query.id).then(()=>{
    articleForm.title=article.title
    articleForm.date=article.date
    articleForm.in_md=article.in_md
  })
}

async function submit(){
  articleForm.in_html = marked.parse(articleForm.in_md,{angle: false});
  const result=await request({
  data: {
    type: "save_article",
    id: route.query.id || "",
    content: articleForm
  }
  })
  if(result){
    console.log(result);
    window.history.go(-1)
  }
}
const taglist=[
  {type:"essay",name:"随笔"},
  {type:"daily",name:"日常"},
]
</script>
<template>  
  <el-form class="echo-article-meta" :model="articleForm">

    <el-form-item label="Tag name">
      <el-select v-model="articleForm.tag" filterable default-first-option allow-create clearable placeholder="文章分类"> 
        <el-option v-for="item in taglist" v-model="articleForm.tag" :key="item.name" :value="item.type" >
          <span style="float: left">{{ item.name }}</span>
        </el-option>
      </el-select>
    </el-form-item>

    <el-form-item label="Written on">
      <el-date-picker
        v-model="articleForm.date"
        type="datetime"
        placeholder="Select date and time"
      />
    </el-form-item>

  </el-form>
  <Editor/>
  <el-row type="flex" class="row-bg" justify="end">
    <el-button class="article-submit" @click="submit" >提交</el-button>
  </el-row>

</template>
<style scoped>
.echo-article-meta{
  display: flex;
  justify-content: space-between;
}
.article-submit{
  margin-top: 15px;
}
@media screen and (max-width: 650px){
  .echo-article-meta{
    display:block;
    justify-content: space-between;
  }
}
</style>