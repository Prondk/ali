const Discord = require ('discord.js')



exports.run = function(client,message){
  const yavuzhan = new Discord.RichEmbed()
.setTitle('RTX Yardım Menusu')
.addField('c!istatistik','c!istatistik Gösterir',true)
.addField('c!botlistkur','c!botlistkur Yazarak Botlist Sunucusu Kurabilirsiniz',true)
.addField('c!sunucukur','Gelişmiş Sunucu Kurarsınız',true)  
.addField('c!yapımcım','c!yapımcım Yazarak Yapımcıma Ulaşabilirsiniz',true)
.addField('c!desteksunucu','c!desteksunucu Yazarak Destek Sunucuma Gelebilirsiniz',true)
.addField('c!davet','c!davet Yazarak Beni Sunucuna Ekliye Bilirsin',true)
.addField("» Linkler", ` \n <a:maden:765111882675388418> [Davet Et](https://discord.com/oauth2/authorize?client_id=732698517876768910&scope=bot&permissions=8)` + "**  **" + `\n <a:tik2:765111874475786240> [Destek Sunucusu](https://discord.gg/nVepN6G)`  + "**  **" + `\n <a:tik3:765111877679710248> [Web Sitesi](https://rtx-bot-web-sitesi.glitch.me//)  `, false)
  .setImage("https://cdn.discordapp.com/attachments/765110626426552341/769908388703633428/standard.gif") 
message.channel.send(yavuzhan)
  
}
exports.conf = {
  enabled:true,
  guildOnly:false,
  aliases:['bot'],
  permLevel: 0
}
exports.help = {
 name:'bot'
}