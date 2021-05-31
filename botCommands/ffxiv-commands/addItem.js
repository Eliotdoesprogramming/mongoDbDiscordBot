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
        if(Number.isNaN(parseInt(itemId)))throw {code:900}
        try{
            let itemName = await axios.get(`http://xivapi.com/Item/${itemId}`)
            itemName=itemName.data.Name
            let result = await UserItemRepo.addItem(message.author.id,message.author.username,itemId,itemName)
            await message.channel.send(`<@${message.author.id}> registered item: [${itemId}] ${itemName}`)
            resolve(result.ops[0])
        } catch(error){
            if(error.code===11000) await message.channel.send('item is already registered!')
            else if(error.code === 900) await message.channel.send('please enter the numeric item ID')
            else if(error.response.status===404) await message.channel.send(`item \`${itemId}\` not found, please double check the ID`)
            reject(error.message)
        }

    })
}
module.exports = addItem