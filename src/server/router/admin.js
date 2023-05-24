const {
  ECHO_USER = 'echo_user',
  ECHO_ARTICLE = 'echo_article',
  ECHO_MUMBLER = 'echo_mumbler',
  ECHO_LINKS = 'echo_links',
  ECHO_SETTING = 'echo_setting',
} = process.env

async function getArticle(params) {
  const { findData } = global.EchoDB
  return await findData(ECHO_ARTICLE, params)
}
async function saveArticle(params) {
  const { saveData } = global.EchoDB
  return await saveData(ECHO_ARTICLE, params)
}

async function getMumbler(params) {
  console.log(params);
}
async function saveMumbler(params) {
  console.log(params);

}


module.exports = {
  getMumbler, saveMumbler,
  getArticle, saveArticle
}