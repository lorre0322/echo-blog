const path = require("path")
const bcrypt = require('bcryptjs')
const { SECRET, verify, verifyToken } = require("../utils/verify")
const { jwtSign } = require("../utils/jwt")
const { ObjectId } = require("mongodb")
const {
  ECHO_USER = "echo_user",
  ECHO_ARTICLE = "echo_article",
  ECHO_MUMBLER = "echo_mumbler",
  ECHO_LINK = "echo_link",
  ECHO_ALBUM = "echo_album",
  ECHO_comment = "echo_comment",
} = process.env

function msg(obj) {
  obj = obj || {}
  JSON.stringify(obj) === "{}" ? obj.msg = "failed" : obj.msg = "success"
  return obj
}

// 初始化 init
async function Init(data) {
  const { findOne, saveData } = global.EchoDB
  const { username, password, email } = data

  verify(data, ['username', 'password', 'email'])
  global.echo_admin = await findOne(ECHO_USER, { username })
  if (global.echo_admin) return msg({})
  const options = {
    username,
    password: bcrypt.hashSync(password, 10),
    email,
    avatar: "",
    // 文章、评论、碎碎念、分页
    artLimit: 5,
    comLimit: 5,
    mumLimit: 5,
    // smtp邮件
    smtp_url: "smtp.qq.com",
    smtp_port: "587",
    smtp_user: "lorre0322@foxmail.com",
    smtp_psw: "lorre0322@foxmail.com"
  }
  await saveData(ECHO_USER, options)
  global.echo_admin = await findOne(ECHO_USER, { username })
  return msg(global.echo_admin)
}
async function Login(data) {
  const config = global.echo_admin
  const { username, password, token } = data
  let result = {}
  // 判断token是否有效
  if (token) {
    const isToken = await verifyToken(token)
    if (!isToken) return msg({})
    result.token = token
    return result
  }
  verify(data, ['username', 'password'])

  const isUsername = username === config.username
  const isPassword = bcrypt.compareSync(password, config.password)
  if (!isUsername || !isPassword) return msg({})

  result.token = jwtSign({ id: config._id.toString() }, SECRET, { expiresIn: '7d' })
  return msg(result)
}
async function updateConfig(data) {

}
// 图片 img
async function saveImg(data) {
  const { name, album, imgData } = data
  const { findOne, saveData } = global.EchoDB
  const isSame = await findOne(ECHO_ALBUM, { name })
  if (!isSame && imgData) {
    const result = await saveData(ECHO_ALBUM, { name, album, imgData })
    return msg(result)
  } else {
    return msg({})
  }

}
async function getImg(req, res, data) {
  const { name } = data
  const { findOne } = global.EchoDB
  const fileName = path.parse(name).name
  const imgUrl = await findOne(ECHO_ALBUM, { name: fileName })
  if (imgUrl === false) {
    return msg({})
  } else {
    const base64 = imgUrl.imgData.replace(/^data:image\/\w+;base64,/, "")
    const dataBUffer = Buffer.from(base64, 'base64')
    res.end(dataBUffer)
  }
}
async function delImg(data) {

}
// 碎碎念 mumbler
async function saveMumbler(data) {
  const { saveData, updateData } = global.EchoDB
  const { id, date, tag, mumbler } = data
  let result = {}
  const content = { date, tag, mumbler }
  if (id) {
    result = await updateData(ECHO_MUMBLER, { id, content })
  } else {
    result = await saveData(ECHO_MUMBLER, content)
  }
  return msg(result)
}
async function getMumbler(data) {
  const { id, page } = data
  const { findOne, findPage } = global.EchoDB
  const { mumLimit } = global.echo_admin
  let result = {}
  if (id) {
    result = await findOne(ECHO_MUMBLER, { id })
  } else {
    result = await findPage(ECHO_MUMBLER, mumLimit, (page - 1) * mumLimit)
  }
  return msg(result)
}
async function delMumbler(data) {

}
// 友联 links friends
async function saveLink(data) {

}
async function getLink(data) {

}
async function delLink(data) {

}
// 文章 article
async function saveArticle(data) {
  const { saveData, updateData } = global.EchoDB
  const { id, date, token, category, hide, top, in_md, in_html } = data
  const isToken = await verifyToken(token)
  if (!isToken) return msg()
  let result = {}
  const content = { date, category, hide, top, in_md, in_html }
  if (id) {
    result = await updateData(ECHO_ARTICLE, { id, content })
  } else {
    result = await saveData(ECHO_ARTICLE, content)
  }
  return msg(result)
}
async function getArticle(data) {
  const { id, page, category } = data
  const { findOne, findPage } = global.EchoDB
  const { mumLimit } = global.echo_admin
  let result = {}
  let cate = {}
  category ? cate = { category } : cate
  if (id) {
    result = await findOne(ECHO_ARTICLE, { id })
  } else {
    result = await findPage(ECHO_ARTICLE, mumLimit, (page - 1) * mumLimit, cate)
  }
  return msg(result)
}
async function delArticle(data) {

}
// 评论 comment

module.exports = {
  Init, Login, updateConfig,
  saveImg, getImg, delImg,
  saveLink, getLink, delLink,
  saveArticle, getArticle, delArticle,
  saveMumbler, getMumbler, delMumbler,
}