<script setup lang='ts'>
import { ref } from "vue";
import { onMounted } from "vue";
import { queryArticle , articleList } from "../store/article"
import {useRouter} from "vue-router"
import { webFormatter,timeFormatter } from '../utils/formatter'
queryArticle()
console.log(articleList.value);

const currentPage = ref(1)
const pageSize=ref(10)

const handleSizeChange = (val: number) => {
  console.log(articleList.value.length / pageSize.value+"  "+Math.ceil(articleList.value.length / pageSize.value))
}
const handleCurrentChange = (val: number) => {
  console.log(`current page: ${val}`)
}

const router=useRouter()
function editLinks(data) {
  router.push({ name: 'edit_article', query: { id: data._id }})
}
</script>

<template>
<el-form>
<el-form-item>
  <el-button type="success" @click="editLinks">新增</el-button>
</el-form-item>
</el-form>
<el-table
  :data="articleList ? articleList.slice((currentPage-1)*pageSize,pageSize*currentPage) : []"
  style="width:100%;"
  stripe:true
>
  <el-table-column prop="title" label="Title" min-width="90px" sortable/>
  <el-table-column prop="tag" label="Tag" width="150px" show-overflow-tooltip/>
  <el-table-column prop="date" :formatter="timeFormatter" label="Date" width="110px" sortable />
  <el-table-column fixed="right" label="Edit"  >
    <template  #default="scope">
        <el-button  type="primary" size="small" @click="editLinks(scope.row)"
          >Edit</el-button>
    </template>
  </el-table-column>
</el-table>

<el-pagination 
layout="prev,sizes,pager,next" 
style="margin-top: 20px ; flex-wrap: wrap;"
:total="articleList?articleList.length:[]"
v-model:current-page="currentPage"
v-model:page-size="pageSize"
:page-sizes="[5,10,20]" 
@size-change="handleSizeChange"
@current-change="handleCurrentChange"/>


</template>
<style scoped>

</style>