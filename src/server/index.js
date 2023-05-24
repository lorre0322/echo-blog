const http = require('http')
const main = require('./main')

const PORT = 4001

async function init() {
  const server = http.createServer(main)
  server.listen(PORT, () => {
    console.log(' 󱐋 Service is up and running port: ' + PORT)
  })
}
init()
module.exports = { init }