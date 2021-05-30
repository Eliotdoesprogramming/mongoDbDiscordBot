
const default_server = 'Jenova'

const axios = require('axios');
const Discord = require('discord.js')

/**
 * 
 * @param {Discord.Message} message 
 * @param {string} command
 * 
 * @returns {Promise<String>}
 */
const price = (message,args) => {
    return new Promise(async(resolve,reject)=> {
        try{
            let itemId = args.shift();
            itemId =parseInt(itemId)
            let server = default_server;
            if(Number.isNaN(itemId)){
                server = itemId;
                itemId=args.shift();
                if(Number.isNaN(ItemId)){
                    await message.channel.send('invalid syntax, please enter !ff price [server(optional)][itemId]')
                    reject('no ItemId given ',server,itemId)
                    return;
                }
            }
            
            let res = await axios.get(`http://universalis.app/api/${server}/${itemId}`)
            let itemName = await axios.get(`http://xivapi.com/Item/${itemId}`)
            itemName = itemName.data.Name
            let avgPrice = res.data.averagePrice
            let avgNQPrice = res.data.averagePriceNQ
            let avgHQPrice = res.data.averagePriceHQ

            await message.channel.send(`<@${message.author.id}> here is the price for ${itemName}\n\n`+
                                        `\`\`\`\n`+
                                        `\naverage recent price: ${Number(parseInt(avgPrice)).toLocaleString()}`+
                                        `\naverage recent NQ price: ${Number(parseInt(avgNQPrice)).toLocaleString()}`+
                                        `\naverage recent HQ price: ${Number(parseInt(avgHQPrice)).toLocaleString()}`+
                                        `\`\`\``)

            resolve({itemName,avgPrice,avgNQPrice,avgHQPrice})
                
                    
                    
            

        }
        catch (err){
            message.channel.send(`couldnt find any prices...`)
            reject(err)
        }
    })
} 
module.exports=price