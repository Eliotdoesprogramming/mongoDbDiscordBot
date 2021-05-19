const Login = require('./botlogin.json');
const Discord = require('discord.js');
const bot = new Discord.Client()
const prefix = '!';
const dbName = 'DiscordBot';
const botCommands = require('./botCommands/botCommands')





bot.once('ready', () => {
    console.log('bot is online');
});

bot.on('message', async(message) => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.split(' ');
    let command = args.shift().substring(1);


    if (command.toLowerCase() === 'makenote') {
        let note = args.join(' ');
        let result = await botCommands.makeNote(message, note);
        if (result) console.log('note taken');
    }
    if (command.toLowerCase() === 'getnotes') {
        let result = await botCommands.getNotes(message);
        console.log(result);
    }


})


bot.login(Login.token);