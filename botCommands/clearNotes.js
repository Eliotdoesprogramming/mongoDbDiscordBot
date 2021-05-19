const Discord = require("discord.js");
const NotesRepository = require("../repository/NotesRepository");
/**
 * 
 * @param {Discord.Message} message 
 * @returns {Promise<String>}
 */
const clearNotes = (message) => {
    return new Promise(async(resolve, reject) => {
        try {
            notesDeleted = await NotesRepository.clearNotes(message.author.username);
            await message.author.send(notesDeleted + ' notes deleted');
            resolve(notesDeleted + ' deleted for user: ' + message.author.username);
        } catch (err) {
            reject(err)
        }
    })
}
module.exports = clearNotes;