const cffSearch = require('./ffxiv-search')
const cffPrice = require('./price')
const ffaddItem = require('./addItem')
const ffgetItems = require('./getItems')
const ffremoveItem = require('./removeItem')
const fflucky = require('./lucky')
function ffCommands() {
    function search(message,args){
        return cffSearch(message,args)
    }
    function price(message,args){
        return cffPrice(message,args)
    }
    function addItem(message,args){
        return ffaddItem(message,args)
    }
    function getItems  (message,args){
        return ffgetItems(message,args)
    }
    function removeItem (message,args){
        return ffremoveItem(message,args)
    }
    function lucky (message,args){
        return fflucky(message,args)
    }
    return {search,price,addItem,getItems,removeItem,lucky}
}
module.exports = ffCommands()