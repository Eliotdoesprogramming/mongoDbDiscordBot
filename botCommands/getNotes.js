const NotesRepository = require("../repository/NotesRepository");
const Discord = require('discord.js')
    /**
     * 
     * @param {Discord.Message} message 
     * @returns 
     */
function getNotes(message) {
    return new Promise(async(resolve, reject) => {
        try {
            let notes = await NotesRepository.getNotes(message.author.username);
            notes.forEach(async(note) => {
                await message.author.send(note.note);
            })
            resolve(notes.length + ' notes sent');
        } catch (err) {
            reject(err);
        }
    })
}
module.exports = getNotes;