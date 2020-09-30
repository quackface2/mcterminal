const mineflayer = require('mineflayer');
const mineflayerViewer = require('prismarine-viewer').mineflayer;
const prompt = require('prompt-sync')();
const prompt = require('prompt-sync')({sigint: true});

const user = prompt('Email: ');
const pass = prompt('Pass: ');
const server = prompt('Server: ');

const bot = mineflayer.createBot({
  username: `${user}`,
  password: `${pass}`,
  server: `${server}`,
  version: false
})

console.log("user joined");

bot.once('spawn', () => {
  mineflayerViewer(bot, { port: 8080, firstPerson: true })
})

console.log("web interface started");