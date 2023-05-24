import request from "../utils/request"

async function getMumbler(point: String) {
  const result = await request({
    url: '/',
    method: 'post',
    data: {
      type: "get_mumbler",
      id: point
    }
  })
  return result
}

export default getMumbler