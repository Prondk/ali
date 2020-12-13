const Discord = require('discord.js');
module.exports.run = async (bot, message, args, guild, user) => {
    let sahip = message.member
   let jsrolu = message.guild.roles.find('id', '749689539282600051')
    if(message.guild.id !== '744275190099345438') return message.channel.sendEmbed(new Discord.RichEmbed().setDescription('Bu Rolü #deleted-channel Kanalından Alabilirsin !').setColor('RED'));
    if(!jsrolu) return message.channel.send('Bu sunucuda Altyapı  isminde bir rol bulunmamakta.')
      if(message.member.roles.has(749689539282600051)) return message.channel.send(':x: | Bu Role Zaten Sahipsin!')

  try {
      await (sahip.addRole(jsrolu.id));
    const embed = new Discord.RichEmbed()
      .setColor('GREEN')
      .setTitle('|<a:B_Yukleniyor:749677189557125211> Başarılı! JavaScript Rolü Verildi.')
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
  name: "js",
  description: "js rolu",
  usage: "js"
};