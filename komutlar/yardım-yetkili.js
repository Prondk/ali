const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
var prefix = ayarlar.prefix;
exports.run = (client, message, args) => {
  
    const juke = new Discord.RichEmbed()
    .setColor('BLACK')
    .setAuthor(`Rtx Bot | Yetkili Komutları`, client.user.avatarURL) 
      .setDescription('**[Destek Sunucum İçin Tıkla](https://discord.gg/nVepN6G)**')
.setThumbnail(client.user.avatarURL)
      .addField('*<a:settings:765108242065784894>*Genel', '`kick`, ,`ban`, `reboot`, `bug-bildir`,`invites`, `banlist`, `bot-kontrol`, ``, `davet`, `oylama`, `tavsiye`, `yapımcım`, `zıt-renk`, `sikayet`')
      .addField('*<a:settings:765108242065784894>*Gerekli Komutlar', '`reklam-taraması`, `ever-engel`, `kısalt`, `sil`, `sunucu-sistemi`')
      .addField('*<a:settings:765108242065784894>*Diğer', '`özelodasistemi`, `sureli-mute`, ``, `ping`, `bot-bilgi, `panelkur`')
      .addField('*<a:settings:765108242065784894>*Koruma Komutları', '`yavaş-mod`,   `ban-bilgi`, `reklam-taraması`,`profil`, `kick`, `ban`, `güvenlik`,`reklam-engelleme`')
    .setFooter(``, client.user.avatarURL)
    .setTimestamp()
     .setImage("https://cdn.discordapp.com/attachments/771443198476288000/771445290355654686/20201029_214638.png") 
    message.channel.send(juke).catch()

};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
};

exports.help = {
    name: 'yetkili',
      category: 'Yardım',
      description: 'Yardım kategorilerini gösteir.',
};