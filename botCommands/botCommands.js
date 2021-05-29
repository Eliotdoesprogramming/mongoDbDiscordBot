const cMakeNote = require('./makeNote');
const cGetNotes = require('./getNotes');
const cClearNotes = require('./clearNotes');
const cFFXIVMarket = require('./ffxiv-market')

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
    function ffxivMarketLookup (message,args) {
        return cFFXIVMarket(message,args)
    }
    return { makeNote, getNotes, clearNotes }
}
module.exports = botCommands();