const Discord = require('discord.js');
const moment = require('moment');
const useful = require('useful-tools');
const ayarlar = require('../ayarlar.json');
require('moment-duration-format');
exports.run = async(client, message, args) => {
	const tarih = useful.tarih(message.guild.createdTimestamp)
	let drest = message.guild.members.filter(m => !m.user.bot && (m.user.presence.status !== "offline")).filter(m => Object.keys(m.user.presence.clientStatus).includes("desktop")).size
let web = message.guild.members.filter(m => !m.user.bot && (m.user.presence.status !== "offline")).filter(m => Object.keys(m.user.presence.clientStatus).includes("web")).size
let mobil = message.guild.members.filter(m => !m.user.bot && (m.user.presence.status !== "offline")).filter(m => Object.keys(m.user.presence.clientStatus).includes("mobile")).size
	
let cembed = new Discord.RichEmbed()
.setFooter(`${message.author.username} Tarafından İstendi.`, message.author.avatarURL)
.setTimestamp()
.addField(" Sunucu Bilgileri", ` Sunucu Adı: **${message.guild.name}** \n  Sunucu Sahibi: **${message.guild.owner}** \n  Sunucu ID: **${message.guild.id}**`)
.addField(" Kullanıcı Bilgileri ",`  <:online:313956277808005120> Online Üye Sayısı:**${message.guild.members.filter(x => x.user.presence.status === 'online').size}** \n  DND(Rahatsız Etmeyin) Üye Sayısı: **${message.guild.members.filter(x => x.user.presence.status === 'dnd').size}** \n  IDLE(Boşta) Üye Sayısı: **${message.guild.members.filter(x => x.user.presence.status === 'idle').size}**  \n  Offline(Çevrimdışı) Üye Sayısı: **${message.guild.members.filter(x => x.user.presence.status === 'offline').size}** \n  Bot Sayısı: **${message.guild.members.filter(m => m.user.bot).size}**`)
.addField(" Diğer Bilgiler", ` Emoji Sayısı: **${message.guild.emojis.size}** \n  Sunucu Bölgesi: **${message.guild.region}** \n  Oluşturulma Tarihi: **${tarih}**`)
.addField("  Boost seviyeleri", `Boost Seviyesi: **${message.guild.premiumTier}** \n Boost Sayısı: **${message.guild.premiumSubscriptionCount}**`)
.addField(` Üyelerin Bağlandığı Cihazlar:`, `**${web}** Kişi **Webden**\n**${mobil}** Kişi İse **Mobilden** Bağlanıyor!`, true)
.setColor("RANDOM")
message.channel.send(cembed)
message.react("765655497701195786");
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['sb'],
    permLevel: 0
  };
  
  exports.help = {
    name: 'sunucubilgi',
    description: 'Taslak',
    usage: 'sunucu-bilgi'
  };