 const cffSearch = require('./ffxiv-commands/ffxiv-search')
function ffCommands() {
    function search(message,command,args){
        return cffSearch(message,command,args)
    }
    return {search}
}
module.exports = ffCommands()