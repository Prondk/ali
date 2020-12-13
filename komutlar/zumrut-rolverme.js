const Discord = require("discord.js")

exports.run = async(client, message) => {
	
	let prefix = 'c!'

	const codare = new Discord.RichEmbed()
       .setAuthor(`Rtx Bot Demir JavaScript Verme`)
  
       .setDescription  (`<a:gif:737051357839884420> Demir JavaScript Rolun Verildi`)
       .addField("» Linkler", ` \n <a:gif:737051357839884420> [Davet Et](https://discord.com/oauth2/authorize?client_id=732698517876768910&scope=bot&permissions=8)` + "**  **" + `\n <a:nitro1:740517297873092658> [Destek Sunucusu](https://discord.gg/fSnrNJT)`  + "**  **" + `\n <a:onay:740517355402297344> [Web Sitesi](https://rtx-bot-web-sitesi.glitch.me//)  `, false)
       .setImage("https://cdn.discordapp.com/attachments/738430595125870693/759057338228670534/standard_3.gif") 
  return message.channel.send(codare)
}



exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
  kategori: `Geliştirici`
};

exports.help = {
  name: 'v12',
  description: '[Admin Komutu]',
  usage: '!bakım-mod aç'
};