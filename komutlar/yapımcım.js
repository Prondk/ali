const Discord = require('discord.js');

exports.run = (client, message, params) => {
  const embed = new Discord.RichEmbed()
  .setDescription('')
  .setColor(0x00ffff)
  .addField("**》 Yapımcım 《**", `<a:tik3:765111877679710248><@688402666103111790>\<a:staff:765655497701195786>`)
  .addField("**》 Geliştirici 《**", `<a:tik3:765111877679710248><@573054368568311808>\<a:staff:765655497701195786>`)

 
  return message.channel.sendEmbed(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yapımcım'],
  permLevel: 0
};

exports.help = {
  name: 'yapımcım',
  description: 'Botun Yapımcısını Gösterir',
  usage: 'yapımcım'
};