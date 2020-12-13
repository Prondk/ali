const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

let botid = ('702922751962382449') //bu yere botun id'sini yapıştırın.
//eğer botunuz dbl(discord bot list) de yoksa Bota Oy Ver (Vote) olmucaktır.

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
        .setAuthor(`${client.user.username} `, client.user.avatarURL)
        .setColor('BLUE')
        .setTitle(`${client.user.username} - Bot Satın Alma Yardım Menüsü`)
        .setDescription(` • | • Merhabalar,Rtx Bot Bot Satış Menusune Hoşgeldiniz !\n\n  • | • Sizde Discord Botu Satın Almak İstiyorsanız **c!canlıdestek** yazarak veya destek sunucumuza gelerek bizimle iletişim kurabilirsiniz.\n\n • | • Fiyatlar İçin Destek Sunucumuza Gelmeyi Unutmayın : [SİTEMİZ](https://rtx-bot-web-sitesi.glitch.me/)\n`)  
        .setThumbnail(client.user.avatarURL)
        .addField(`» Linkler`, `[Bot Davet Linki](https://bit.ly/31B1rLh) **|** [Destek Sunucusu](https://discord.gg/fSnrNJT) **|** [Web Sitemiz](https://rtxbotsite.glitch.me/)`)//websiteniz yoksa  **|** [Web Sitesi]() yeri silebilirsiniz
        .setFooter(`${message.author.username} Tarafından İstendi.`, message.author.avatarURL)
    return message.channel.sendEmbed(embed);
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['satınal'],
  permLevel: 0,
};

exports.help = {
  name: 'satınal',
  description: '',
  usage: ''
};