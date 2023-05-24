<script setup lang='ts'>
import {useRouter} from "vue-router"
const router=useRouter()

function editMumbler(data) {
  router.push({ name: 'edit_article', query: { id: data._id }})
}
</script>
<template>
  
<el-form>
<el-form-item>
  <el-button type="success" @click="editMumbler">新增</el-button>
</el-form-item>
</el-form>


</template>
<style scoped>

</style>