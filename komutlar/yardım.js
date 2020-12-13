const Discord = require("discord.js")

exports.run = async(client, message) => {
	
	let prefix = 'c!'

	const codare = new Discord.RichEmbed()
       .setAuthor(`Rtx Bot Yardım Menüsü`)
       .setThumbnail('https://cdn.discordapp.com/avatars/732698517876768910/1ce7504b56e903731f2a4ff26f3588c5.png?size=2048')
       .setTitle(`Rtx Bot (Yardım) Komutları`)
       .setDescription  (`<a:settings:765108242065784894> c!yetkili  Yetkili Komutlarını Gösterir. \n <a:yk:765108200684781628> c!eglence  eglence komutlarını gösterir \n <a:onay:765108192899760139> c!bot Botun Komutlarını Gösterir. \n <a:alarm:765111886533885982> c!eklenti Eklenti Komutlarını Gösterir. \n <a:ayar:765108257228062750> c!koruma Guard Menusunu Açar.\n <a:discord:765109482665017386> c!logo Logo Menusunu Açar.\n <a:kralll:751341174916382876> c!kayıt-yardım Yazarak Gelişmiş Kayıt Sistemini Açarsınız`)
       .addField("» Linkler", ` \n <a:maden:765111882675388418> [Davet Et](https://discord.com/oauth2/authorize?client_id=732698517876768910&scope=bot&permissions=8)` + "**  **" + `\n <a:tik2:765111874475786240> [Destek Sunucusu](https://discord.gg/nVepN6G)`  + "**  **" + `\n <a:tik3:765111877679710248> [Web Sitesi](https://rtx-bot-web-sitesi.glitch.me//)  `, false)
       .setFooter(`Rtx Bot Gururla Sunar`)
       .setImage("https://cdn.discordapp.com/attachments/765110626426552341/769908388703633428/standard.gif") 
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
  name: 'yardım',
  description: '[Admin Komutu]',
  usage: '!bakım-mod aç'
};