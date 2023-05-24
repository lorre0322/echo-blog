
module.exports = async () => {
  try {
    let db = ("mongodb" || '').toLowerCase()
    console.log('Use db type:', db)
    return await require("./" + db)()
  } catch (error) {
    console.error('ECHO: mongodb connect fault !')
    console.error(error)
  }
}