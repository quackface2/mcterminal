const mineflayer = require('mineflayer');
const mineflayerViewer = require('prismarine-viewer').mineflayer;
var mc = require('minecraft-protocol');

var server = mc.createServer({
  'online-mode': false,   // optional
  encryption: false,      // optional
  host: '0.0.0.0',       // optional
  port: 25565,           // optional
  version: '1.16.2'
})

const user = mineflayer.createBot({
  username: 'User',
  version: false
})

user.once('spawn', () => {
  mineflayerViewer(user, { port: 8080, firstPerson: true })
})