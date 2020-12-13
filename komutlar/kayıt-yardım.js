const Discord = require('discord.js')
const moment = require('moment')
const db = require('wio.db')
const ayarlar = require('../ayarlar.json')
const client = new Discord.Client();
require("moment-duration-format");
const prefix = ayarlar.prefix
exports.run = async (bot, msg, args) => {

        const yardım = new Discord.RichEmbed()
                .setColor('GOLD')
        .setAuthor('Rtx Bot Kayıt Listesi Menüsü')
        .setFooter(`${msg.author.username} Başarıyla Kayıt Komutunu Kullandı!`, msg.author.avatarURL)
        .setThumbnail('https://cdn.discordapp.com/avatars/732698517876768910/1ce7504b56e903731f2a4ff26f3588c5.png?size=2048')
        .setDescription(' Botu Davet Etmek İçin `c!davet` yazabilirisiniz.',false)
        .addField('**__Yetkili Menü__**', '`c!kayıt-yetkili` Kayıt Yetkili yardım Menüsünü açar.',true)
        .addField('**__kayıt-listesi__**','`c!kayıt-listesi` \n Yazarak Kayıt Listesini Görürsünüz.',true )
        .setImage(`https://cdn.discordapp.com/attachments/746289416909094953/760159716206444634/standard_6.gif`);
msg.channel.send(yardım)
    
}
exports.conf = {
  enabled: true,
  guildOnly: true,
 aliases: ['yardım'],
  kategori: 'yardım',
  permLevel: 0
};
exports.help = {
  name: 'kayıt-listesi',
  description: 'İstediğiniz kullanıcını bilgilerini gösterir.',
  usage: 'yardım'
};