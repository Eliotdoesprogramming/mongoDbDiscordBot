const ffCommands = require("./botCommands/ffCommands")
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
    
    return ffActions
}
module.exports = loadFFActions()