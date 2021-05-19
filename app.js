const Login = require('./botlogin.json');
const Discord = require('discord.js');
const bot = new Discord.Client()
const prefix = '!';
const actions = require('./actions');


bot.once('ready', () => {
    console.log('bot is online');
});
bot.on('message', async(message) => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.split(' ');
    const command = args.shift().substring(1).toLowerCase();
    if (actions.has(command)) actions.get(command).use(message, args);
    else {
        await message.channel.send('command not found. type !help to see what commands are avaliable');
        console.log('cmd not found');
    }
})
bot.login(Login.token);