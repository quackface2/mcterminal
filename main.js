const mineflayer = require('mineflayer');
const mineflayerViewer = require('prismarine-viewer').mineflayer;

const bot = mineflayer.createBot({
  username: 'User',
  version: false
})

console.log("user joined");

bot.once('spawn', () => {
  mineflayerViewer(bot, { port: 8080, firstPerson: true })
})

console.log("web interface started");