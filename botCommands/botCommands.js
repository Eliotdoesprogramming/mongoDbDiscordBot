const cMakeNote = require('./makeNote');
const Discord = require('discord.js');



function botCommands() {
    /**
     * 
     * @param {Discord.Message} message 
     * @param {string} note 
     * @returns 
     */
    function makeNote(message, note) {
        return cMakeNote(message, note);
    }
    return { makeNote }
}
module.exports = botCommands();