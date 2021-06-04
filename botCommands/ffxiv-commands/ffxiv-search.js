const axios = require('axios');
const Discord = require('discord.js')
const pkey = process.env.XIV_API_KEY
/**
 * 
 * @param {Discord.Message} message 
 * @param {string} command
 * 
 * @returns {Promise<String>}
 */
const ffSearch =(message,args)=>{
    return new Promise(async(resolve,reject)=> {
        console.log('searching',args);
        let item = args.join(' ');
        

        try{
            let response = await axios.get(`http://xivapi.com/search?indexes=item&string=${item}&private_key=${pkey}`)
            let items = response.data.Results
            let initItemSize = items.length
            items=items.filter( (item) => item.UrlType==='Item')
            if(items.length>20)items.splice(20)
            await message.channel.send(`<@${message.author.id}>, ${items.length} results were found:\n ${(items.length<2&&initItemSize>10)?'search may be too broad':''}`)

            items.forEach(async item => {
                await message.channel.send(`http://xivapi.com${item.Icon}\n\`\`\`\nName: ${item.Name}\nItem Id: ${item.ID}\`\`\``)
                
            });
            resolve(`found ${items.length} results, messaged author`)

            
        } catch(err) {
            message.channel.send('error, couldnt find item')
            reject(err.message)
        }
    })
}
module.exports=ffSearch;