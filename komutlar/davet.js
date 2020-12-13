 const Discord = require('discord.js')

exports.run = (client, message, params) => {
const embed = new Discord.RichEmbed()
.setTitle('Link:<a:settings:765108242065784894>(https://bit.ly/30O0lg5)')
.setTimestamp()
.setFooter('Link Yukarıda!')
.setColor(0xff7f00)

message.channel.sendMessage(embed)
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["invite","botdavet"],
    permLevel: 0
  };
  
  exports.help = {
    name: 'davet',
    description: 'Botun davet linkini gönderir.',
    usage: 'davetim'
  }; 