const cffSearch = require('./ffxiv-commands/ffxiv-search')
const cffPrice = require('./ffxiv-commands/price')
function ffCommands() {
    function search(message,args){
        return cffSearch(message,args)
    }
    function price(message,args){
        return cffPrice(message,args)
    }
    return {search,price}
}
module.exports = ffCommands()