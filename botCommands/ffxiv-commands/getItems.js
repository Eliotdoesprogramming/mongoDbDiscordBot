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
        
        try{
            let items = await UserItemRepo.getItems(message.author.id)
            items.forEach(async item => await price(message,[item.itemId]))
            resolve(`called price function on ${items.length} items`)
        } catch (error){

            reject(error.message)
        }
        
        
    })
}

module.exports = getItems