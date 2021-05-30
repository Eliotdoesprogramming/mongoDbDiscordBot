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
        }
    }
    ffActions.set('search',search)
    let marketPrice = {
        use: async(message,args)=>{
            let result = await ffCommands.price(message,args)
            return result
        }
    
    }
    ffActions.set('price',marketPrice)

    let additem = {
        use:async(message,args)=> {
            let result = await ffCommands.addItem(message,args)
            return result
        }
    }
    ffActions.set('add', additem)

    let getItems = {
        use:async(message,args)=> {
            let result = await ffCommands.getItems(message,args)
            return result
        }
    }
    ffActions.set('getitems', getItems)
    let removeItem = {
        use:async(message,args)=> {
            let result = await ffCommands.removeItem(message,args)
            return result
        }
    }
    ffActions.set('remove', removeItem)

    let help = {
        use: async(message) => {
            let helpstring = '';
            ffActions.forEach((value, key, map) => {
                helpstring += `\n!ff [${key}]`
                if(key === 'add' || key === 'remove') helpstring+= '[itemId]'

                }
            )
            await message.channel.send(
                'the current final fantasy commands are:\n \`\`\`' + helpstring +
                '\`\`\`');
        }
    }
    ffActions.set('help',help)
    return ffActions
}
module.exports = loadFFActions()