const botCommands = require('./botCommands/botCommands')

loadActions = () => {

    let actions = new Map();
    let help = {
        use: async(message) => {
            let helpstring = '';
            actions.forEach((value, key, map) => {
                helpstring += `!${key}\n`
            })
            await message.channel.send('This is a discord bot Eliot made to practice ' +
                'using mongoDB \n the current commands are:\n \`\`\`' + helpstring +
                '\`\`\`');
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
    return actions;
}
module.exports = loadActions();