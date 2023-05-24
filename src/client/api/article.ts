import request from "../utils/request"

async function getArticle(point: String) {
  const result = await request({
    url: '/',
    method: 'post',
    data: {
      type: "get_article",
      id: point
    }
  })
  return result
}

export default getArticle