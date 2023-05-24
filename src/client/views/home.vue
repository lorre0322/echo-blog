<template>
  <div class="box">
    <input type="text" ref="ipt">
    <br>
    <button @click="btn">点击使input聚焦</button>
  </div>
 </template>
 <script >
 export default{
   data(){
     return{}
   },
   created(){},
   methods:{
     btn(){
       this.$refs.ipt.focus()
     }
   }
 }
 </script>
 