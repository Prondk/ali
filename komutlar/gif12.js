const Discord = require('discord.js')


exports.run = async(message, client) => {

const yavuzhan =['https://media.discordapp.net/attachments/755890505681731714/760853755838464050/a_d39c50d78103af7108d4337c5fefd552.gif',
'https://media.discordapp.net/attachments/755890505681731714/759696756295467018/Arda746.gif',
'https://cdn.discordapp.com/attachments/755890505681731714/760888975849422928/motor3.gif']
var yavuzhannınppleri = Math.floor(Math.random()*yavuzhan.length)
const yavuzhan1=new Discord.RichEmbed()

.setTitle('Rtx Bot Gif Generetör')
.setImage(yavuzhan[yavuzhannınppleri])

          message.channel.send(yavuzhan1)
}

exports.conf = {
enabled: true,
guildOnly: false,
aliases: ['komut'],
permLevel: 0
}


exports.help = {
  name: 'gif12'
}