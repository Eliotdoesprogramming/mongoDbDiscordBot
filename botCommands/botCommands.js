const cMakeNote = require('./makeNote');
const cGetNotes = require('./getNotes');

function botCommands() {

    function makeNote(message, note) {
        return cMakeNote(message, note);
    }

    function getNotes(message) {
        return cGetNotes(message);
    }
    return { makeNote, getNotes }
}
module.exports = botCommands();