const Discord = require('discord.js');
module.exports.run = async (bot, message, args, guild, user) => {
    let sahip = message.member
   let jsrolu = message.guild.roles.find('id', '750444789459189853')
  if(message.guild.id !== '749681926595543107') return message.channel.sendEmbed(new Discord.RichEmbed().setDescription('Bu Rolü #deleted-channel Kanalından Alabilirsin !').setColor('RED'));
    if(!jsrolu) return message.channel.send('Bu sunucuda Altyapı  isminde bir rol bulunmamakta.')
      if(message.member.roles.has(750444789459189853)) return message.channel.send(':x: | Bu Role Zaten Sahipsin!')

  try {
     await (sahip.addRole(jsrolu.id));
    const embed = new Discord.RichEmbed()
      .setColor('GREEN')
      .setTitle(':B_Yukleniyor~1: | Başarılı! V12 Kodlar Rolun Verildi.')
      message.channel.sendMessage(embed)
    } catch (error) {
      return message.channel.send(':x: | Bu Role Zaten Sahipsin!**')


};
}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: []
};

exports.help = {
  name: "v12",
  description: "js rolu",
  usage: "v12"
};