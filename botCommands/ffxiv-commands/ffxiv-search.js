const axios = require('axios');
const Discord = require('discord.js')
/**
 * 
 * @param {Discord.Message} message 
 * @param {string} command
 * 
 * @returns {Promise<String>}
 */
const ffSearch =(message,args)=>{
    return new Promise(async(resolve,reject)=> {
        console.log(args);
        let item = args.join(' ');
        

        try{
            let response = await axios.get(`http://xivapi.com/search?string=${item}`)
            let items = response.data.Results
            items=items.filter( (item) => item.UrlType==='Item')
            if(items.length>20)items.splice(20)
            await message.channel.send(`<@${message.author.id}>, ${items.length} results were found:\n`)
            await items.forEach(async item => {
                await message.channel.send(`\`\`\`\nName: ${item.Name}\nItem Id: ${item.ID}\`\`\``)
                await message.channel.send(`http://xivapi.com${item.Icon}`)
            });
            resolve(`found ${items.length} results, messaged author`)

            
        } catch(err) {
            reject(err)
        }
    })
}
module.exports=ffSearch;