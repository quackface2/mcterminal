const mineflayer = require('mineflayer')


const user = mineflayer.createBot({
  host: 'localhost', // optional
  port: 25565,       // optional
  username: 'User', // email and password are required only for
  version: false                 // false corresponds to auto version detection (that's the default), put for example "1.8.8" if you need a specific version
})

user.once('spawn', () => {
  mineflayerViewer(user, { port: 8080, firstPerson: true })
})