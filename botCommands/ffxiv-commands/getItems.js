const Discord = require('discord.js')
const UserItemRepo = require('../../repository/UserItemsRepository')
const axios = require('axios')
const price = require('./price')
    /**
     * 
     * @param {Discord.Message} message a discord message
     * @param {string[]} args array of notes to be made
     */
const getItems = (message,args) => {
    return new Promise(async(resolve,reject)=> {
        let server;
        if(args.length > 0 && args[0].match('\w+')){
            server = args[0];
        }
        try{
            let items = await UserItemRepo.getItems(message.author.id);
            for(item of items){
                if(server){
                    await price(message,[server,item.itemId]);
                }
                else
                    await price(message,[item.itemId]);
            }
            resolve(`called price function on ${items.length} items`)
        } catch (error){
            reject(error.message)
        }
        
        
    })
}

module.exports = getItems