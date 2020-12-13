const Discord = require('discord.js')

exports.run = async (client, message, args) => { 
     
  if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(`Bu komutu kullanabilmek için **Mesajları Yönet** yetkisine sahip olmalısın!`);
  if (!args[0] || isNaN(args[0])) return message.reply(`Temizlenecek mesaj miktarını belirtmelisin!`);
  message.delete();
  let sayi = Number(args[0]);
  let silinen = 0;
  for (var i = 0; i < (Math.floor(sayi/100)); i++) {
   message.channel.bulkDelete(100).then(r => silinen+=r.size);
    sayi = sayi-100;
  };
  if (sayi > 0)  message.channel.bulkDelete(sayi).then(r => silinen+=r.size);
  message.channel.send(`**\`\`${args[0]}\`\` Adet Mesaj Silindi.**`);
 
}

exports.conf = {
    enabled: false,
    guildOnly: false,
    aliases: [],
    permLevel: 0,
}

exports.help = {
    name: 'sil', 
    description: 'TeztCode',
    usage: 'TeztCode'
}