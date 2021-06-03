const ffCommands = require("./ffCommands")
/**
 * @returns {Map}
 */
loadFFActions = () => {
    const ffActions = new Map()
    let search = {
        use: async (message,args) => {
            let result = await ffCommands.search(message,args)
            return result
        },
        description: '!ff search [item name(text/string)] \n\t note: please be as specific as possible, the api endpoint also includes non item data that will impact the bot\s ability to find your item'
    }
    ffActions.set('search',search)
    let marketPrice = {
        use: async(message,args)=>{
            let result = await ffCommands.price(message,args)
            return result
        },
        description: '!ff price [server(optional)] [item id (number)] \n\t item id\'s can be gathered by using the !ff search command' 
    
    }
    ffActions.set('price',marketPrice)

    let additem = {
        use:async(message,args)=> {
            let result = await ffCommands.addItem(message,args)
            return result
        },
        description:'!ff add [item id (number)] \n\t item id\'s can be gathered by using the !ff search command'
    }
    ffActions.set('add', additem)

    let getItems = {
        use:async(message,args)=> {
            let result = await ffCommands.getItems(message,args)
            return result
        },
        description:'!ff getitems [server(optional)] \n\t use this command to get the prices on all of your registered items'
    }
    ffActions.set('getitems', getItems)
    let removeItem = {
        use:async(message,args)=> {
            let result = await ffCommands.removeItem(message,args)
            return result
        },
        description:'!ff remove [item id(number)]\n\t use this command to remove a certain item from your registered items. note this will only work with the item id\'s at this time.\n\tNote: multiple item id\'s can be used here to remove multiple items'
    }
    ffActions.set('remove', removeItem)

    let lucky = {
        use:async(message,args)=>{
            let result = await ffCommands.lucky(message,args)
            return result
        },
        description:"!ff lucky [server(optional)] [item name (string/text)]\n\tUse this command to search for the price of the first item found when searching the ffxiv api"
    }
    let help = {
        use: async(message) => {
            let helpstring = '';
            ffActions.forEach((value, key, map) => helpstring += '\n'+value.description + '\n')
            await message.channel.send(
                'the current final fantasy commands are:\n \`\`\`' + helpstring +
                '\`\`\`');
        },
        description:''
    }
    ffActions.set('help',help)

    
    return ffActions
}
module.exports = loadFFActions()