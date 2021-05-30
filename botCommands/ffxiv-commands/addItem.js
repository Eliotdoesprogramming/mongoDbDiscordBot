const Discord = require('discord.js')
const UserItemRepo = require('../../repository/UserItemsRepository')
const axios = require('axios')
    /**
     * 
     * @param {Discord.Message} message a discord message
     * @param {string[]} args array of notes to be made
     */

const addItem = (message,args) => {
    return new Promise(async(resolve,reject)=> {
        let itemId = args.shift()
        let itemName = await axios.get(`http://xivapi.com/Item/${itemId}`)
        itemName=itemName.data.Name
        let result = await UserItemRepo.addItem(message.author.id,message.author.username,itemId,itemName)
        await message.channel.send(`<@${message.author.id}> registered item: [${itemId}] ${itemName}`)
        resolve(result.ops[0])
    })
}
module.exports = addItem