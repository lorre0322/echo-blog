<script setup lang='ts'>
const emit = defineEmits(['inFocus', 'submit'])

function buttonClick() {
  emit('submit')
}

function submit(){
  console.log(123);
  
}

</script>
<template>
  <!-- MyComponent -->
<button @click="$emit('submit')">click me</button>
</template>
<style scoped>

</style>