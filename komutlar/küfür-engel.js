const Discord = require('discord.js');
const db = require('wio.db');

exports.run = async (client, message, args) => {
  
  if (!args[0]){
    message.channel.send("küfür Engeli Açmak İçin veya Kapatmak İçin: c!küfür-engel aç / c!küfür-engel kapat")
  }
  if (args[0] === 'aç'){
    message.channel.send("Görünüşe Göre Bu Özellik Açıkmış")
    
    db.set(`reklam-engel_${message.guild.id}`, "acik")
  }
  if (args[0] === 'kapat'){
    message.channel.send("Küfür Engel Başarılı Şekilde Kapatıldı")
    
    db.set(`reklam-engel_${message.guild.id}`, "kapali")
  }
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["küfür"],
  permLevel: 0
}
exports.help = {
  name: "küfür-engel",
  description: "küfür engel açar yada kapatır.",
  usage: "p!küfür-engel"
}