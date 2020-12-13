const Discord = require('discord.js')
const moment = require('moment')
const db = require('wio.db')
const ayarlar = require('../ayarlar.json')
const client = new Discord.Client();
require("moment-duration-format");
const prefix = ayarlar.prefix
exports.run = async (bot, msg, args) => {

        const kayıtet = new Discord.RichEmbed()
                .setColor('GOLD')
        .setAuthor('Rtx Bot Kayıt Yardım Menüsü')
        .setFooter(`${msg.author.username} Başarıyla Kayıt Komutunu Kullandı!`, msg.author.avatarURL)
        .setThumbnail('https://cdn.discordapp.com/avatars/732698517876768910/1ce7504b56e903731f2a4ff26f3588c5.png?size=2048')
        .setDescription('**__KAYIT OL__**',true)
        .addField('**__Kayıt Erkek__**', '`c!erkek @kullanıcı isim yaş` Üyeyi Erkek olarak kayıdeder.',false)
        .addField('**__Kayıt Kız__**','`c!kız @kullanıcı isim yaş` Üyeyi Kız olarak kayıdeder.',false)
        .addField('**__Önemli__**','`- Botu Yetkisini En Üste Almanız Gerekir Çalışması İçin.',false)
         .addField('**__kayıt-listesi__**','`- c!kayıt-listesi Yazarak Kayıt Listesini Görebilirsiniz.',false)
         .addField('**__kayıt-yetkili__**','`- c!kayıt-yetkili Yazarak Kayıt Listesini Görebilirsiniz.',false)
.setImage(`https://cdn.discordapp.com/attachments/746289416909094953/760159716206444634/standard_6.gif`);
msg.channel.send(kayıtet)
    
}
exports.conf = {
  enabled: true,
  guildOnly: true,
 aliases: ['kayıt', 'kayıt-yardım','k'],
  kategori: 'yardım',
  permLevel: 0
};
exports.help = {
  name: 'kayıt-yardım',
  description: 'İstediğiniz kullanıcını bilgilerini gösterir.',
  usage: 'kayıt-yardım'
};