const Discord = require('discord.js')
const NotesRepo = require('../repository/NotesRepository')
    /**
     * 
     * @param {Discord.Message} message a discord message
     * @param {string} note array of notes to be made
     */
const makeNote = (message, note) => {
    return new Promise(async(resolve, reject) => {
        try {
            let result = await NotesRepo.makeNote({ note: note, author: message.author.username });
            let response;
            response = await message.channel.send('note taken!')
            resolve({ note: result.ops[0], author: message.author });
        } catch (exception) {
            reject(exception);
        }

    })
}
module.exports = makeNote;