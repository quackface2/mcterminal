const mineflayer = require('mineflayer');
const mineflayerViewer = require('prismarine-viewer').mineflayer;
const prompt = require('prompt-sync')();

//const user = prompt('\033[0;36mEmail: ');
//const pass = prompt('\033[0;36mPass: ');
//const host = prompt('\033[0;36mServer: ');

const bot = mineflayer.createBot({
  username: `cheeto`,
  //password: `${pass}`,
  host: `localhost`,
  version: false
})

console.log("\033[0;34muser joined");

bot.once('spawn', () => {
  mineflayerViewer(bot, { port: 8080 }) // Start the viewing server on port 3000
})

console.log("\033[0;34mweb interface loading");