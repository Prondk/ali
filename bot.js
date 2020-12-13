const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const moment = require('moment');
var Jimp = require('jimp');
const { Client, Util } = require('discord.js');
const weather = require('weather-js')
const fs = require('fs');
const db = require('wio.db');
require('./util/eventLoader.js')(client);






var prefix = ayarlar.prefix;

const log = message => {
    console.log(`${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
    if (err) console.error(err);
    log(`${files.length} komut yüklenecek.`);
    files.forEach(f => {
        let props = require(`./komutlar/${f}`);
        log(chalk.green(`Yüklenen komut: ${props.help.name}.`));
        client.commands.set(props.help.name, props);
        props.conf.aliases.forEach(alias => {
            client.aliases.set(alias, props.help.name);
        });
    });
});




client.reload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.load = command => {
    return new Promise((resolve, reject) => {
        try {
            let cmd = require(`./komutlar/${command}`);
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};




client.unload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.elevation = message => {
    if (!message.guild) {
        return;
    }
    let permlvl = 0;
    if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
    if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
    if (message.author.id === ayarlar.sahip) permlvl = 4;
    return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   l0RDconsole.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// }); //DEVİLHOUSE//

client.on('warn', e => {
    console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
    console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

client.login(ayarlar.token);
client.on("guildCreate", guild => {
    let ganal = client.channels.get("766616129056538635");
    const eklendim = new Discord.RichEmbed()
  
      .setTitle(`Yükselmeye devam !`)
      .setTimestamp()
      .setColor("GREEN")
      .setThumbnail(guild.iconURL)
      .addField( `Sunucu Bilgisi`, `Sunucu İsmi: **${guild.name}** \n Sunucu Sahibi: **${guild.owner.user.tag}** \n Sunucu Sahibi ID: **${guild.owner.user.id}** \n Sunucunun Üye Sayısı: **${guild.memberCount}**` )
      .setFooter( `Artık ${client.guilds.size} sunucuda bulunuyorum !` );
  
    ganal.send(eklendim);
  });
  
client.on("guildDelete", guild => {
    let ganal = client.channels.get("766616129056538635");
    const atildim = new Discord.RichEmbed()
  
      .setTitle(`Düşüşteyiz..`)
      .setTimestamp()
      .setColor("BLUE")
      .setThumbnail(guild.iconURL)
      .addField( `Sunucu Bilgisi`, `Sunucu İsmi: **${guild.name}** \n Sunucu Sahibi: **${guild.owner.user.tag}** \n Sunucu Sahibi ID: **${guild.owner.user.id}** \n Sunucunun Üye Sayısı: **${guild.memberCount}**` )
      .setFooter( `Artık ${client.guilds.size} sunucuda bulunuyorum !` );
  
    ganal.send(atildim);
  });
//---------------------------------KOMUTLAR---------------------------------\\

//----------------------------------GEÇİCİ KANAL----------------------------// 

 

client.on('voiceStateUpdate', async(oldMember, newMember) => {
  if (!db.fetch(`geciciKanal_${newMember.guild.id}`))
  if (!db.fetch(`geciciKategori_${newMember.guild.id}`)) return;
  let Old = oldMember;
  let newUserChannel = newMember.voiceChannel
  let oldUserChannel = oldMember.voiceChannel
 if(newMember.user.bot) return;
    if(oldMember.user.bot) return;
  
  if (newMember.voiceChannelID == db.fetch(`geciciKanal_${newMember.guild.id}`)) {
    newMember.guild.createChannel("💳 |" + newMember.user.username, "voice").then(async(ü) => {
    
      ü.setParent(db.fetch(`geciciKategori_${newMember.guild.id}`))
        newMember.setVoiceChannel(ü.id)      
      db.set(`geciciKanalK_${newMember.id}`, ü.id)
    })   
    
  }
      
   if (oldUserChannel) {
        Old.guild.channels.forEach(channels => {
  if (channels.id == db.fetch(`geciciKanal_${oldMember.guild.id}`)) return;
          if(channels.parentID == db.fetch(`geciciKategori_${oldMember.guild.id}`)) {
                        if(channels.id == db.fetch(`geciciKanalK_${oldMember.id}`)) {
                          setTimeout(() => {
                          if (!oldMember.voiceChannel.id == db.fetch(`geciciKanalK_${oldMember.id}`)) return;
                          if(oldMember.voiceChannel.members.size == 0) {
                            
                              db.delete(`geciciKanalK_${oldMember.id}`)
                              return channels.delete()
                        }   
                          
                          }, 5000)
                          
                    }
                }
            });
                   }
});














client.on("message", async msg => {
  
  
 const i = await db.fetch(`${msg.guild.id}.kufur`)
    if (i) {
        const kufur = ["oç", "amk", "ananı sikiyim", "ananıskm", "piç", "amk", "amsk", "sikim", "sikiyim", "orospu çocuğu", "piç kurusu", "kahpe", "orospu", "mal", "sik", "yarrak", "am", "amcık", "amık", "yarram", "sikimi ye", "mk", "mq", "aq", "ak", "amq",];
        if (kufur.some(word => msg.content.includes(word))) {
          try {
            if (!msg.member.hasPermission("BAN_MEMBERS")) {
                  msg.delete();
                          
                      return msg.reply('Bu sunucuda küfür edemezsin.')
            }              
          } catch(err) {
            console.log(err);
          }
        }
    }
    if (!i) return;
});

client.on("messageUpdate", msg => {
  
  
 const i = db.fetch(`${msg.guild.id}.kufur`)
    if (i) {
        const kufur = ["oç", "amk", "ananı sikiyim", "ananıskm", "piç", "amk", "amsk", "sikim", "sikiyim", "orospu çocuğu", "piç kurusu", "kahpe", "orospu", "mal", "sik", "yarrak", "am", "amcık", "amık", "yarram", "sikimi ye", "mk", "mq", "aq", "ak", "amq",];
        if (kufur.some(word => msg.content.includes(word))) {
          try {
            if (!msg.member.hasPermission("BAN_MEMBERS")) {
                  msg.delete();
                          
                      return msg.reply('Bu sunucuda küfür edemezsin.')
            }              
          } catch(err) {
            console.log(err);
          }
        }
    }
    if (!i) return;
});



 client.on('message', async (msg, member, guild) => {
  let i = await  db.fetch(`saas_${msg.guild.id}`)
      if(i === 'açık') {
        if (msg.content.toLowerCase() === 'sa'){
          
        msg.reply('Aleyküm Selam, Hoşgeldin ');    
      }
      }
    });

client.on('message', async (msg, member, guild) => {
  let i = await  db.fetch(`saas_${msg.guild.id}`)
      if(i === 'açık') {
        if (msg.content.toLowerCase() === 'hi'){
          
        msg.reply('Hi welcome ');    
      }
      }
    });





//----------------------------------GEÇİCİ KANAL----------------------------// 
client.on('voiceStateUpdate', (oldMember, newMember) => {
    // todo create channel
    if (newMember.voiceChannel != null && newMember.voiceChannel.name.startsWith('➕│2 Kişilik Oda')) {
        newMember.guild.createChannel(`║👤 ${newMember.displayName}`, {
            type: 'voice',
            parent: newMember.voiceChannel.parent
       }).then(cloneChannel => {
        newMember.setVoiceChannel(cloneChannel)
        cloneChannel.setUserLimit(2)
      })
    }
    // ! leave
    if (oldMember.voiceChannel != undefined) {
        if (oldMember.voiceChannel.name.startsWith('║👤 ')) {
            if (oldMember.voiceChannel.members.size == 0) {
                oldMember.voiceChannel.delete()
            }
            else { // change name
                let matchMember = oldMember.voiceChannel.members.find(x => `║👤 ${x.displayName}` == oldMember.voiceChannel.name);
                if (matchMember == null) {
                    oldMember.voiceChannel.setName(`║👤 ${oldMember.voiceChannel.members.random().displayName}`)
                }
            }
        }
    }
});
//----------------------------------GEÇİCİ KANAL----------------------------// 
//----------------------------------GEÇİCİ KANAL----------------------------// 
client.on('voiceStateUpdate', (oldMember, newMember) => {
    // todo create channel
    if (newMember.voiceChannel != null && newMember.voiceChannel.name.startsWith('➕│3 Kişilik Oda')) {
        newMember.guild.createChannel(`║👤 ${newMember.displayName}`, {
            type: 'voice',
            parent: newMember.voiceChannel.parent
       }).then(cloneChannel => {
        newMember.setVoiceChannel(cloneChannel)
        cloneChannel.setUserLimit(3)
      })
    }
    // ! leave
    if (oldMember.voiceChannel != undefined) {
        if (oldMember.voiceChannel.name.startsWith('║👤 ')) {
            if (oldMember.voiceChannel.members.size == 0) {
                oldMember.voiceChannel.delete()
            }
            else { // change name
                let matchMember = oldMember.voiceChannel.members.find(x => `║👤 ${x.displayName}` == oldMember.voiceChannel.name);
                if (matchMember == null) {
                    oldMember.voiceChannel.setName(`║👤 ${oldMember.voiceChannel.members.random().displayName}`)
                }
            }
        }
    }
});
//----------------------------------GEÇİCİ KANAL----------------------------// 
//----------------------------------GEÇİCİ KANAL----------------------------// 
client.on('voiceStateUpdate', (oldMember, newMember) => {
    // todo create channel
    if (newMember.voiceChannel != null && newMember.voiceChannel.name.startsWith('➕│4 Kişilik Oda')) {
        newMember.guild.createChannel(`║👤 ${newMember.displayName}`, {
            type: 'voice',
            parent: newMember.voiceChannel.parent
       }).then(cloneChannel => {
        newMember.setVoiceChannel(cloneChannel)
        cloneChannel.setUserLimit(4)
      })
    }
    // ! leave
    if (oldMember.voiceChannel != undefined) {
        if (oldMember.voiceChannel.name.startsWith('║👤 ')) {
            if (oldMember.voiceChannel.members.size == 0) {
                oldMember.voiceChannel.delete()
            }
            else { // change name
                let matchMember = oldMember.voiceChannel.members.find(x => `║👤 ${x.displayName}` == oldMember.voiceChannel.name);
                if (matchMember == null) {
                    oldMember.voiceChannel.setName(`║👤 ${oldMember.voiceChannel.members.random().displayName}`)
                }
            }
        }
    }
});
//----------------------------------GEÇİCİ KANAL----------------------------// 
//----------------------------------GEÇİCİ KANAL----------------------------// 
client.on('voiceStateUpdate', (oldMember, newMember) => {
    // todo create channel
    if (newMember.voiceChannel != null && newMember.voiceChannel.name.startsWith('➕│5 Kişilik Oda')) {
        newMember.guild.createChannel(`║👤 ${newMember.displayName}`, {
            type: 'voice',
            parent: newMember.voiceChannel.parent
       }).then(cloneChannel => {
        newMember.setVoiceChannel(cloneChannel)
        cloneChannel.setUserLimit(5)
      })
    }
    // ! leave
    if (oldMember.voiceChannel != undefined) {
        if (oldMember.voiceChannel.name.startsWith('║👤 ')) {
            if (oldMember.voiceChannel.members.size == 0) {
                oldMember.voiceChannel.delete()
            }
            else { // change name
                let matchMember = oldMember.voiceChannel.members.find(x => `║👤 ${x.displayName}` == oldMember.voiceChannel.name);
                if (matchMember == null) {
                    oldMember.voiceChannel.setName(`║👤 ${oldMember.voiceChannel.members.random().displayName}`)
                }
            }
        }
    }
});
//----------------------------------GEÇİCİ KANAL----------------------------// 
//----------------------------------Özel oda sistemi----------------------------// 
client.on('message', async message => {
  const ms = require('ms');
  const prefix = await require('wio.db').fetch(`prefix_${message.guild.id}`) || ayarlar.prefix
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  let u = message.mentions.users.first() || message.author;
  if (command === "özelodasistemi") {
  if (message.guild.channels.find(channel => channel.name === "Bot Kullanımı")) return message.channel.send(" Bot Paneli Zaten Ayarlanmış.")
  if (!message.member.hasPermission('ADMINISTRATOR'))
  return message.channel.send(" Bu Kodu `Yönetici` Yetkisi Olan Kişi Kullanabilir.");
    message.channel.send(`Özel Oda Sisteminin Kurulmasını İstiyorsanız **Kur** Yazınız.`)
      message.channel.awaitMessages(response => response.content === 'Kur', {
        max: 1,
        time: 10000,
        errors: ['time'],
     })
    .then((collected) => {

message.guild.createChannel('【🔐】2 Kişilik Odalar【🔐】', 'category', [{
  id: message.guild.id,
}]);

message.guild.createChannel(`➕│2 Kişilik Oda`, 'voice')
.then(channel =>
      channel.setParent(message.guild.channels.find(channel => channel.name === "【🔐】2 Kişilik Odalar【🔐】")))

message.guild.createChannel('【🔐】3 Kişilik Odalar【🔐】', 'category', [{
  id: message.guild.id,
}]);

message.guild.createChannel(`➕│3 Kişilik Oda`, 'voice')
.then(channel =>
      channel.setParent(message.guild.channels.find(channel => channel.name === "【🔐】3 Kişilik Odalar【🔐】")))

message.guild.createChannel('【🔐】4 Kişilik Odalar【🔐】', 'category', [{
  id: message.guild.id,
}]);

message.guild.createChannel(`➕│4 Kişilik Oda`, 'voice')
.then(channel =>
      channel.setParent(message.guild.channels.find(channel => channel.name === "【🔐】4 Kişilik Odalar【🔐】")))

message.guild.createChannel('【🔐】5 Kişilik Odalar【🔐】', 'category', [{
  id: message.guild.id,
}]);
message.guild.createChannel(`➕│5 Kişilik Oda`, 'voice')
.then(channel =>
      channel.setParent(message.guild.channels.find(channel => channel.name === "【🔐】5 Kişilik Odalar【🔐】")))

       message.channel.send("Gelişmiş Özel Oda Sistemi Aktif! ")
     
            })   
      
}
});
//----------------------------------Özel oda sistemi Son----------------------------// 














client.on("message", async msg => {
  
    if(msg.author.bot) return;
    if(msg.channel.type === "dm") return;
    
   if (db.has(`kanal.küfür-engel.${msg.channel.id}`)) return 
   let i = await db.fetch(`küfür-engel_${msg.guild.id}`)
      
      if (i == 'acik') {
          const küfür = ["amk", "sik", "sikbeni", "a m k", "A M K", "AMK", "s i k", "mal", "salak", "amcık", "am", "meme", "sikiş", "göt","oç", "amk", "ananı sikiyim", "ananıskm", "piç", "amk", "amsk", "sikim", "sikiyim", "orospu çocuğu", "piç kurusu", "kahpe", "orospu", "mal", "sik", "yarrak", "am", "amcık", "amık", "yarram", "sikimi ye", "mk", "mq", "aq", "ak", "amq",];
          if (küfür.some(word => msg.content.toLowerCase().includes(word))) {
            try {
              if (!msg.member.hasPermission("ADMINISTRATOR")) {
                msg.delete();
                
                let embed = new Discord.RichEmbed()
                .setColor("RANDOM")
                .setFooter('Küfür Koruması', client.user.avatarURL)
                .setAuthor(msg.guild.owner.user.username, msg.guild.owner.user.avatarURL)
                .setDescription('**'+msg.guild.name+'**Adlı Sunucuda Birisi Küfür Etti!!!')
                .addField('Küfür Eden Kişi', 'AD: '+msg.author.tag+'\nID: '+msg.author.id)
                .addField('Mesaj İçeriği', msg.content)
                .setTimestamp()
                
                msg.guild.owner.user.send(embed)
                
                let rembed = new Discord.RichEmbed()
                .setAuthor(msg.author.username, msg.author.avatarURL)
                .setColor("RANDOM")
                .setDescription(`${msg.author.tag} Küfür Etmemelisin!`)
                return msg.channel.send(rembed).then(msg => msg.delete(5000));
              }              
            } catch(err) {
              console.log(err);
            }
          }
      }
      else if (i == 'kapali') {
        
      }
      if (!i) return;
      });












client.on("ready", msg => {
    const moment = require("moment");
    require("moment-duration-format");

    const duration = moment
      .duration(client.uptime)
      .format("D [Gün], H [Saat], m [Dakika]");
      const guild = client.guilds.get('764929007996108821')
  setInterval(() => {

  
    setTimeout(() => {
guild.channels.get("765924261368954880").setName(`${client.guilds.size} Sunucu`);
    }, 11000);
    setTimeout(() => {
        guild.channels.get("765924632737873921").setName(`${client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString()} Kişi!!`);
    }, 14000);



  }, 15000); //Sadece Kanal Id Yazan Kisimlari Editleyin Sakın Veritaban Kismini Ellemeyin. Eğer değisşeniz veritabanınız Silinir Baştan Söyleyim.
  //RtxBot
});










