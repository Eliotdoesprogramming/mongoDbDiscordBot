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
    let result = []
    try{
        for(let i = 0; i <args.length; i ++){
            let idToRemove = args[i];
            if(!Number.isNaN(parseInt(idToRemove))){
                //TODO: read result and then decide what message to send
                let res = await UserItemRepo.removeItem(message.author.id,idToRemove)
                if(res>0) result.push(idToRemove)
            }
            else{
                await message.channel.send(idToRemove+' is invalid, please enter a number')
            } 
        }
        let removeString =""
        result.forEach(id => removeString += `\n${id}`)
        console.log('test',result)
        if(result.length>0) await message.channel.send('removed the following items:\n\`\`\`'+removeString+'\`\`\`');
        resolve(result)
    } catch (error){

        reject(error.message)
    }
})
}

module.exports = remove