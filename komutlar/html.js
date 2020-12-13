const Discord = require('discord.js');
module.exports.run = async (bot, message, args, guild, user) => {
    let sahip = message.member
   let jsrolu = message.guild.roles.find('id', '754314414395752548')
  if(message.guild.id !== '744275190099345438') return message.channel.sendEmbed(new Discord.RichEmbed().setDescription('Bu Rolü <#749690496250806382> Kanalından Alabilirsin !').setColor('RED'));
    if(!jsrolu) return message.channel.send('Bu sunucuda **html ** isminde bir rol bulunmamakta.')
      if(message.member.roles.has(754314414395752548)) return message.channel.send('❌ | **Bu Role Zaten Sahipsin!**')

  try {
      await (sahip.addRole(jsrolu.id));
    const embed = new Discord.RichEmbed()
      .setColor('BLACK')
      .setTitle('<a:B_Yukleniyor:749677189557125211> | Başarılı! Html Rolü Verildi.')
      message.channel.sendMessage(embed)
    } catch (error) {
      return message.channel.send('❌ | **Bu Role Zaten Sahipsin!****')
   
};
}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: []
};

exports.help = {
  name: "html",
  description: "js rolu",
  usage: "js"
};