const Discord = require ("discord.js");

exports.run = (client, message) => {
const lembed = new Discord.RichEmbed()

const mhelp = new Discord.RichEmbed()
.setTitle("Rtx Bot Koruma Komutları")
.addField("c!ban istediğiniz Kişiyi Etiket Sebep Girip Banlıya Bilirsiniz")
.addField("c!yavaş-mod İstediginiz Kanala Yavaş Yazma Yapabilirsiniz")
.addField("c!reklam-taraması Etiketlediginiz Kişinin Oynuyor Veya İsminde Reklam Varmı Die Kontrol Eder")
.addField("c!mute Yazarak Etiketlediginiz Kişiye 1sn 1dk 1saat Sureli Mute Atabilirsiniz")
.addField("c!link-engelle Yazarak Link Engel Açarsınız")
.addField("c!güvenlik Yazarak Bir Kanal Etiketliyerek Güvenlik Kanalı Yaparsınız")
.addField("c!ban-bilgi Biri Kişiyi Etiketlerseniz Ban Durumunu Kontrol Eder")
.addField("c!kick Bir Kişi Etiketliyip c!kick Yazarsanız O Kişiyi Sunucudan Atar")
.addField("c!bansay Sunucuda Kaç Kişi Banlandığını Gösterir ")
.setImage("https://cdn.discordapp.com/attachments/655459488236568597/669939737431375872/cizgi.gif") 
message.channel.sendEmbed(mhelp)
}; 
exports.conf = {
    enabled: true, 
    guildOnly: false, 
    aliases: [], 
    permLevel: 0 
  };
 
  exports.help = {
    name: 'koruma', 
    description: 'rtx bot koruma menusu',
    usage: 'help'
  };