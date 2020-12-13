const Discord = require('discord.js')
const db = require('wio.db');
const ayarlar = require('../ayarlar.json')
exports.run = async (client, message, args) => {
  let bakım = db.fetch(`bakım`)
 if (message.author.id!=="688402666103111790") return message.channel.send(new Discord.RichEmbed().setColor("RED").setDescription(`Bu Komutu Kullanabilmek İçin Sahip Olmalısınız`));
  if(args[0] === "aç") {
    if(bakım)return message.channel.send("Bot Zaten Bakım Modunda")
db.set(`bakım`, "açık")
message.channel.send(new Discord.RichEmbed().setColor("GREEN").setDescription(`Bakım Modu Aktif`))}
    if(args[0] === "sıfırla") {
       if(!bakım)return message.channel.send("Bot Zaten Bakım Değil")
    db.delete(`bakım`)       
   return message.channel.send(new Discord.RichEmbed().setColor("GREEN").setDescription(`Bot Bakımdan Çıktı`));}
  if(!args[0]) return message.channel.send(new Discord.RichEmbed().setColor("YELLOW")        
.setDescription(`${ayarlar.prefix}bakım aç | ${ayarlar.prefix}bakım kapat yazmalısınz`));
};
exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: [],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'bakım',
};