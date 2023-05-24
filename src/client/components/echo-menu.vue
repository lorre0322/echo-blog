<script setup lang='ts'>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import dashIcon from "../assets/icon/dashboard.vue"
import articleIcon from "../assets/icon/article.vue"
import commentIcon from "../assets/icon/comment.vue"
import mumblerIcon from "../assets/icon/mumbler.vue"
import linksIcon from "../assets/icon/links.vue"
import settingIcon from "../assets/icon/setting.vue"
const activeIndex = ref('1')
</script>
<template>
<div id="echo-menu">
<el-menu
  :default-active="activeIndex"
  class="el-menu-demo"
  mode="horizontal"
>
  <RouterLink to="/">
    <el-menu-item index="1">
      <el-icon><dashIcon /></el-icon>
    </el-menu-item>
  </RouterLink>
  <RouterLink to="/article">
    <el-menu-item index="2">
      <el-icon><articleIcon /></el-icon>
    </el-menu-item>
  </RouterLink>
  <RouterLink to="/mumbler">
  <el-menu-item index="3">
    <el-icon><mumblerIcon /></el-icon>
  </el-menu-item>
  </RouterLink>
  <RouterLink to="/comment">
  <el-menu-item index="4">
    <el-icon><commentIcon /></el-icon>
  </el-menu-item>
  </RouterLink>
  <RouterLink to="/links">
  <el-menu-item index="5">
    <el-icon><linksIcon /></el-icon>
  </el-menu-item>
  </RouterLink>
  <RouterLink to="/setting">
  <el-menu-item index="6">
    <el-icon><settingIcon /></el-icon>
  </el-menu-item>
  </RouterLink>
</el-menu>
</div>
</template>
<style scoped>
#echo-menu{
  z-index: 1000;
  background: #282828;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  max-width: 420px;
  box-sizing: border-box;
}
.el-menu--horizontal{
  border-bottom: none;
}
.el-menu--popup{
  min-width: 0 !important;
}
.el-menu--horizontal>.el-menu-item {
  height: 2em;
  width: 2em;
}
</style>
<style>
.el-menu--collapse .el-menu .el-submenu,
.el-menu--popup {
 min-width: 0;
}
.el-sub-menu .el-sub-menu__title{
  padding: 20px;
}
</style>