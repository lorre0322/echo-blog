const fs = require("fs")
const path = require("path")
const mime = require("../utils/mime")
const pathDir = require("path").join(__dirname, `../../public`)
const getData = require("../utils/body-data")
const getIp = require("../utils/get-ip")
const {
  Init, Login, updateConfig,
  saveImg, getImg, delImg,
  saveLink, getLink, delLink,
  saveArticle, getArticle, delArticle,
  saveMumbler, getMumbler, delMumbler,
} = require("./control")
const {
  ECHO_USER = "echo_user",
} = process.env

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
  res.setHeader('Access-Control-Allow-Methods', 'POST')
  res.setHeader('Content-Type', 'application/json; charset=utf-8')
  let result = { status: 200 }
  let body = await getData(req)
  const method = req.method.toUpperCase()

  // 获取数据库方法发布到全局
  if (!global.EchoDB) {
    const dataFn = await require('../database/mongodb')()
    if (!dataFn) return
    global.EchoDB = dataFn
  }
  if (!global.echo_admin) {
    const { findOne } = global.EchoDB
    global.echo_admin = await findOne(ECHO_USER, {})
  }
  // 根据路径后缀设置响应头
  if (method === 'GET') {
    const url = new URL(req.url, `http://${req.headers.host}`)
    let static = url.pathname
    if (url.pathname === '/' && !("name" in body)) static = "/index.html"
    const extName = path.extname(static)
    const contType = mime[extName] || "text/plain"
    res.setHeader('Content-Type', `${contType}; charset=utf-8`)
    // 返回图片
    if ("name" in body) {
      await getImg(req, res, body)
    } else {
      const pathName = pathDir + static
      fs.readFile(pathName, (err, data) => {
        if (err || !contType) {
          res.end("╮(￣⊿￣)╭ file not found .")
        } else {
          res.end(data)
        }
      })
    }
  }

  if (method === 'POST') {
    if ("data" in body) {
      body.data.ua = req.headers['user-agent']
      body.data.ip = getIp(req) || req.connection.remoteAddress;
    }
    const contrller = {
      INIT: Init, LOGIN: Login, update_config: updateConfig,
      save_img: saveImg, del_img: delImg,
      save_link: saveLink, get_link: getLink, del_link: delLink,
      save_article: saveArticle, get_article: getArticle, del_article: delArticle,
      save_mumbler: saveMumbler, get_mumbler: getMumbler, del_mumbler: delMumbler,
    }
    const fn = contrller[body.type]
    if (fn) {
      result.data = await fn(body.data)
    } else {
      result.status = 404
    }

    res.end(JSON.stringify(result))
  }
}