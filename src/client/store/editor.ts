import { ref, reactive } from "vue";
export const articleForm = reactive({
  title: ref(''),
  tag: ref(''),
  date: new Date(),
  in_md: ref(''),
  in_html: ref('')
})
export const innerHtml = ref('')