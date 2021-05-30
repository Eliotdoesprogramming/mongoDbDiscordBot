const ffCommands = require("./botCommands/ffCommands")
/**
 * @returns {Map}
 */
loadFFActions = () => {
    const ffActions = new Map()
    let search = {
        use: async (message,command,args) => {
            let result = await ffCommands.search(message,command,args)
            return result
        }
    }
    ffActions.set('search',search)
    return ffActions
}
module.exports = loadFFActions()