<script setup lang='ts'>
import { articleForm } from "../store/editor";
import echoEditIcon from "./editor/control";
import { watch,onMounted } from "vue";
function inserText(type:any) {
  articleForm.in_md+=type
  document.getElementById('echo-editor-content').focus()
}
onMounted(() => {
  document.getElementById('echo-editor-title').focus()
})
</script>
<template>
  <div id="echo-editor">
    <div id="meta">
      <input  v-model="articleForm.title" spellcheck="false" id="echo-editor-title" type="text" placeholder="Title"/>
    </div>
    <ul id="echo-editor-control">
      <li id="echo-editor-control-item" v-for="item in echoEditIcon">
        <span  v-html="item.svg" @click="inserText(item.text)"></span>
      </li>
    </ul>
    <textarea v-model="articleForm.in_md" id="echo-editor-content" placeholder=" Record your life here~!" spellcheck="false" autosize></textarea>
  </div>
</template>
<style scoped>
#echo-editor{
  width: 100%;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  border: 1px solid rgba(0,0,0,.2);
}
#echo-editor-title{
  box-sizing: border-box;
  width: 100%;
  font-size: 1.5em;
  font-weight: 700;
  padding: 20px 10px;
  border: none;
  outline:none;
}
#echo-editor-control{
  list-style: none;
  margin: 0;
  padding: 0 10px;
  overflow-y: hidden;
  overflow-x: auto;
}
#echo-editor-control-item{
  display: inline-block;
  overflow: hidden;
  vertical-align: middle;
  margin-right: 5px;
  padding: 3px;
  width: 16px;
  height: 16px;
  border-radius: 5px;
  background: rgba(0,0,0,.1);
}
#echo-editor-control-item>span>svg{
  width: 100%;
  height: 20px;
  display: block;
}
#echo-editor-content{
  box-sizing: border-box;
  width: 100%;
  padding: .8em;
  min-height: 20em;
  font-size: 16px;
  border: none;
  outline:none;
}
</style>