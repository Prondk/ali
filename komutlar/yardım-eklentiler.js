const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json');
var prefix = ayarlar.prefix;
exports.run = function(client, message, args) {
  
 


const embed = new Discord.RichEmbed()
.setColor('BLACK')
.setTitle("c!yardım")
.addField(" c!otorol-ayarla",`otorol-ayarlar`,true)
.addField("<a:nitro:764800016992698409> c!botlistkur",`Bot List Sunucusu Kurar`,true)
.addField(" c!sunucukur",`Sunucu Kur`,true)
.addField("<a:boost:764800015658909697>  c!panelkur",`Üye Paneli Kurar`,true)
.addField("<a:hypesquad:727806567637975142> c!özelodasistemi",`Gelişmiş Özel Oda Sistemi.`,true)
.setThumbnail(client.user.avatarURL)
.setImage("https://cdn.discordapp.com/attachments/738430595125870693/759057338228670534/standard_3.gif") 
message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: [], 
  permLevel: 0
};

exports.help = {
  name: 'eklenti',
  description: 'Yardım komutlarını Gösterir',
  usage: 'yardım'
};
//geçici-oda-kurulum