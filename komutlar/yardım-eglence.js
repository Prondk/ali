const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
var prefix = ayarlar.prefix;
exports.run = (client, message, args) => {
  
    const juke = new Discord.RichEmbed()
    .setColor('GOLD')
    .setAuthor(`Rtx Bot | Eğlence Komutları`, client.user.avatarURL) 
      .setDescription('**[Website](https://rtx-bot-web-sitesi.glitch.me)**')
.setThumbnail(client.user.avatarURL)
      .addField(' Komutlar:', '`balık-tut`, `efkarım`,`düello`, `fake-mesaj`, `yazı-tura`, `hapishane`, `hesapla`, `,sigarayak`, `kartopu`, `pixel`, `rip`, `avatar`, `stresçarkı`, `bayrak`, `wasted`')
    .setFooter(``, client.user.avatarURL)
    .setTimestamp()
   .setImage("https://cdn.discordapp.com/attachments/738430595125870693/759057338228670534/standard_3.gif") 
    message.channel.send(juke).catch()

};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
};

exports.help = {
    name: 'eglence',
      category: 'Yardım',
      description: 'Yardım kategorilerini gösteir.',
};