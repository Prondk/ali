const Discord = require('discord.js');

exports.run = (client, message, args) => {
  let isim = args.slice(0).join("+")
  if(!isim)return message.channel.send("Lütfen Bişey Yaz")
let link = "https://habbofont.net/font/arctic/"+isim+".gif"
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
  name: 'buz',
  description: 'Buz Logosu Yaparsınız',
  usage: 'buz <yazı>'
};