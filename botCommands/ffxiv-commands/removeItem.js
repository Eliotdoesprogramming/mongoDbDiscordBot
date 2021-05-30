const Discord = require('discord.js')
const UserItemRepo = require('../../repository/UserItemsRepository')
const axios = require('axios')
/**
 * 
 * @param {Discord.Message} message a discord message
 * @param {string[]} args array of notes to be made
 */
const remove = (message,args) => {
return new Promise(async(resolve,reject)=> {
    
    try{
        let result = []
        args.forEach( async idToRemove => {
            if(!Number.isNaN(parseInt(idToRemove))){
                //TODO: read result and then decide what message to send
                let res = await UserItemRepo.removeItem(message.author.id,idToRemove).catch(error => reject(error))
                result.push(res) 
            }
            else await message.channel.send(idToRemove+' is invalid, please enter a number')
        })
        resolve(result)
    } catch (error){

        reject(error.message)
    }
    
    
})
}

module.exports = remove