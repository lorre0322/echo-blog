<script setup lang='ts'>
import { RouterView } from 'vue-router'
import echoBread from "./components/echo-bread.vue"
import echoMenu from "./components/echo-menu.vue"

</script>
<template>
<div id="echo-system">
  <div id="echo-content">
    <echoBread />
    <RouterView />
  </div>
  <echoMenu />
</div>
</template>
<style scoped>
#echo-system{
  max-width: 760px;
  margin: 0 auto;
  position: relative;
}
#echo-system #echo-content{
  margin-bottom: 5em;
  padding: 1em;
}
</style>