const Discord = require('discord.js');
exports.run = function(client, message, args) {
  message.reply('İşte Rtx-Botun Pingi! = ' + client.ping + ' ms');
};

exports.conf ={
    enabled:true,
    guildOnly:false,
    aliases:['ping','Denemeping'],
    permLevel:0

}
exports.help ={
    name:'ping2',
    Yapımcısıyavuzhançalmayınpls:'çalmayın ugraştım'
}