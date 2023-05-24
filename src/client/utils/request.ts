function isJSON(t: any) {
  try {
    return JSON.parse(t)
  } catch (error) {
    return t
  }
}

type requeDefault = {
  url?: String,
  method?: "post" | "get",
  data?: {
    type: String,
    id?: Object,
    content?: Object
  }
}

async function request(opt: requeDefault) {
  const basrURL = "http://192.168.10.213:4001"
  let URL = ""
  opt.url ? URL = (basrURL + opt.url) : URL = basrURL
  return new Promise((res, rej) => {
    const xhr = new XMLHttpRequest()
    xhr.open(opt.method || 'post', URL, true)
    if (opt.method === 'get') xhr.send()
    else xhr.send(JSON.stringify(opt.data))
    xhr.onreadystatechange = () => {
      try {
        if (xhr.readyState === 4) {
          const isSuccess = xhr.status >= 200 && xhr.status < 300
          if (isSuccess) res(isJSON(xhr.responseText))
          else rej(xhr)
        }
      } catch (error) {
        rej(error)
      }
    }
  })
}
export default request