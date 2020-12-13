const Discord = require('discord.js');

exports.run = (client, message, args) => {
  let isim = args.slice(0).join("+")
  if(!isim)return message.channel.send("Lütfen Bişey Yaz")
let link = "https://dynamic.brandcrowd.com/asset/logo/10f76bee-03aa-4398-9637-5dddeda46b50/logo?v=4&text="+isim
  const embed = new Discord.RichEmbed()
  .setImage(link)
  message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'roket',
  description: 'Roket Logosu Yaparsınız',
  usage: 'roket <yazı>'
};