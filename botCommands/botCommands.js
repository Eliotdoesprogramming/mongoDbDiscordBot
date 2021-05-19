const cMakeNote = require('./makeNote');
const cGetNotes = require('./getNotes');
const cClearNotes = require('./clearNotes');

function botCommands() {

    function makeNote(message, note) {
        return cMakeNote(message, note);
    }

    function getNotes(message) {
        return cGetNotes(message);
    }

    function clearNotes(message) {
        return cClearNotes(message)
    }
    return { makeNote, getNotes, clearNotes }
}
module.exports = botCommands();