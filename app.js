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
    if (actions.has(command)) actions.get(command).use(message, args);
    else {
        await message.channel.send('command not found. type !help to see what commands are avaliable');
        console.log('cmd not found');
    }
})

let actions = new Map();
let help = {
    use: async(message) => {
        await message.channel.send('This is a discord bot Eliot made to practice ' +
            'using mongoDB \n the current commands are: ```!makenote \n!getnotes \n!clearnotes```');
    }
}
actions.set('help', help);
let makeNote = {
    use: async(message, args) => {
        let note = args.join(' ');
        let result = await botCommands.makeNote(message, note);
        if (result) console.log('note taken');
    }
}
actions.set('makenote', makeNote);
let getNotes = {
    use: async(message, args) => {
        let result = await botCommands.getNotes(message);
        console.log(result);
    }
}
actions.set('getnotes', getNotes);

let clearNotes = {
    use: async(message, args) => {
        let result = await botCommands.clearNotes(message);
        console.log(result);
    }
}
actions.set('clearnotes', clearNotes);
bot.login(Login.token);