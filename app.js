const Login = require('./botlogin.json');
const Discord = require('discord.js');
const bot = new Discord.Client()
const prefix = '!';
const botCommands = require('./botCommands/botCommands')





bot.once('ready', () => {
    console.log('bot is online');
});

bot.on('message', async(message) => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.split(' ');
    const command = args.shift().substring(1).toLowerCase();

    if (command === 'help') {
        await message.channel.send('This is a discord bot Eliot made to practice ' +
            'using mongoDB \n the current commands are: ```!makenote \n!getnotes \n!clearnotes```');
    } else if (command === 'makenote') {
        let note = args.join(' ');
        let result = await botCommands.makeNote(message, note);
        if (result) console.log('note taken');
    } else if (command === 'getnotes') {
        let result = await botCommands.getNotes(message);
        console.log(result);
    } else if (command === 'clearnotes') {
        let result = await botCommands.clearNotes(message);
        console.log(result);
    }


})


bot.login(Login.token);