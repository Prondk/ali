const Discord = require('discord.js')


exports.run = async(client,message) => {
   const Yavuzhan = new Discord.RichEmbed()
 .addField('Rtx Bot Yardım Menusu', 'c!davet Yazarak Davet Etmeyi Unutmayın')
 .setColor("BLACK")
 .addField('avatar','Avatar Komudunu Gösterir',true)
 .addField('Deneme','Deneme Komudunu Gösterir',true)
   message.channel.send(Yavuzhan)
}


exports.conf ={
    enabled: true,
    guildOnly: false,
    aliases:['help',],
    permLevel:0
}
exports.help ={
    name:'yardım12',
    Yapımcısıyavuzhandır:'çalmayın pls'
}