const servers = require('./serverlist.json').servers
const price = require('./price')
const axios = require('axios')
const pkey = process.env.XIV_API_KEY
const ffLucky =(message,args)=>{
    return new Promise(async(resolve,reject)=> {
        //check server
        let serv = args[0].toLowerCase();
        let match = servers.filter(server => server===serv)[0]
        if(match){
            args.shift();
        }
        let item = args.join(' ');
        
        /// search for the item
        try{
            let response = await axios.get(`http://xivapi.com/search?string=${item}&private_key=${pkey}`)
            let items = response.data.Results
            item=items.filter( (item) => item.UrlType==='Item')[0];
            if(!item){
                await message.channel.send(`<@${message.author.id}> no item results found in search, please try !search`)
                reject('no items found')
                return;
            }
            let res
            if(match){
                res = await price(message,[match,item.ID])
            } else {
                res = await price(message,[item.ID])
            }
            resolve(res)
        } catch(err) {
            message.channel.send('error, couldnt find item')
            reject(err.message)
        }
    })
}
module.exports=ffLucky;