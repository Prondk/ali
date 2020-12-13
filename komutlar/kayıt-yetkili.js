const Discord = require('discord.js')
const moment = require('moment')
const db = require('wio.db')
const ayarlar = require('../ayarlar.json')
const client = new Discord.Client();
require("moment-duration-format");
const prefix = ayarlar.prefix
exports.run = async (bot, msg, args) => {

        const yetkili = new Discord.RichEmbed()
                .setColor('GOLD')
        .setAuthor('Rtx  Bot Kayıt Yardım Menüsü')
        .setFooter(`${msg.author.username} Başarıyla Kayıt Komutunu Kullandı!`, msg.author.avatarURL)
        .setThumbnail('https://cdn.discordapp.com/avatars/732698517876768910/1ce7504b56e903731f2a4ff26f3588c5.png?size=2048')
        .addField('**__Kayıt Alıncak Rol__**','`-alınacak-rol @rol` \n Alınacak Rolü Ayarlarsınız.',true )
        .addField('**__Kayıt Üye Rol__**','`-üye-rol-ayarla @rol` \n Üye Rolü Ayarlarsınız',true)
        .addField('**__Kayıt Erkek Rol__**','`-erkek-rol-ayarla @rol` \n Erkek Rolü Ayarlarsınız',true)
        .addField('**__Kayıt Kız Rol__**','`-kız-rol-ayarla @rol` Kız Rolü Ayarlarsınız.',false)
        .addField('**__Kayıt Yetkili Rol__**','`-yetkili-rol-ayarla @rol` Kayıt Yetkilisi Rolü Ayarlarsınız. ',true)
        .addField('**__Kayıt Kanal__**','`-kayıt-kanal #kanal` Kayıt Odasını Ayarlarsınız.',true)
        .addField('**__Kayıt Kanal__**','`-kayıt-log-kanal #kanal` Kayıt Odasını Ayarlarsınız.',true)
        .addField('**__Hoşglendin Kanal__**','`-hg-kanal #kanal` Hoşgeldin Mesajı atılacak olan Odayı Ayarlarsınız.',true)
        .addField('**__Hoşglendin Mesaj__**','`-hg-mesaj mesaj` Hoşgeldin Mesajı Ayarlarsınız.',true)
         .setImage("https://cdn.discordapp.com/attachments/738430595125870693/759057338228670534/standard_3.gif");
msg.channel.send(yetkili)
    
}
exports.conf = {
  enabled: true,
  guildOnly: true,
 aliases: ['kayıt-yetkili', 'yetkili'],
  kategori: 'yardım',
  permLevel: 0
};
exports.help = {
  name: 'kayıt-yetkili',
  description: 'İstediğiniz kullanıcını bilgilerini gösterir.',
  usage: 'yetkili-yardım'
};