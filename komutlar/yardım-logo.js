const Discord = require("discord.js")

exports.run = async(client, message) => {
	
	let prefix = 'c!'

	const codare = new Discord.RichEmbed()
       .setAuthor(`Rtx Bot logo Menüsü`)
       .setTitle(`Rtx Bot (Logo) Komutları`)
       .setDescription  (`<a:kralll:751341174916382876> c!yeşil  Yeşil Logo Yapar. \n <a:Alarm:749677166584660038> c!roket Roketli Logo Atar \n <a:tamam:717296560765141075>  c!ok Yazarsanız Oklu Logo Yapar \n <a:settings:765108242065784894> !altın Altınlı Logo Yapar. \n <a:nitro:764800016992698409> c!buz Buzlu Logo Yapar.  <a:settings:765108242065784894> c!neon-yeşil. Neon Logo Yapar.\n <a:settings:765108242065784894> c!neon-pembe Neon Pembe Logo Yapar.  \n <a:settings:765108242065784894> c!dinamik Dinamik Logo Yapar.`)
       .addField("» Linkler", ` \n <a:kralll:751341174916382876>[Davet Et](https://discord.com/oauth2/authorize?client_id=732698517876768910&scope=bot&permissions=8)` + "**  **" + `\n <a:settings:765108242065784894> [Destek Sunucusu](https://discord.gg/nVepN6G)`  + "**  **" + `\n <a:settings:765108242065784894> [Web Sitesi](https://rtx-bot-web-sitesi.glitch.me//)  `, false)
       .setFooter(`Rtx Bot Gururla Sunar`)
       .setImage("https://cdn.discordapp.com/attachments/771443198476288000/771445290355654686/20201029_214638.png") 
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
  name: 'logo',
  description: '[Admin Komutu]',
  usage: '!bakım-mod aç'
};