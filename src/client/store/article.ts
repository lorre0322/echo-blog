import { reactive, ref } from 'vue'
import getArticle from "../api/article";
import { articleForm } from "./editor"
export let articleList = ref()
export const queryArticle = async () => {
  const res: any = await getArticle("")
  articleList.value = res.data
  ElMessage({
    showClose: true,
    message: '获取数据成功',
    type: 'success',
  })
}

export let article = ref()
export const findArticle = async (point: String) => {
  const res: any = await getArticle(point)
  article = res.data[0]
  articleForm.title = res.data[0].title
  console.log(articleForm.title);
}