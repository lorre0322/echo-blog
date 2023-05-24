const getData = require('../utils/body-data')
const GetClientIP = require('../utils/get-ip')
const {
  getMumbler, saveMumbler,
  getArticle, saveArticle
} = require("./admin")

async function Router(req, res) {
  let body = {}
  let result = { msg: "success" }
  try {
    body = await getData(req)
    console.log(req.url);
    if ("content" in body) {
      body.content.ua = req.headers['user-agent']
      body.content.ip = GetClientIP(req) || req.connection.remoteAddress;
    }
    const contrller = {
      get_Mumbler: getMumbler,
      save_Mumbler: saveMumbler,
      get_article: getArticle,
      save_article: saveArticle,
    }
    const fn = contrller[body.type]
    if (fn) {
      result.data = await fn(body)
    } else {
      result = { msg: "not found" }
    }

  } catch (err) {
    console.log(err);
  }
  res.end(JSON.stringify(result))
}
module.exports = Router
