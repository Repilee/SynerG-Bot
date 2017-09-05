const Discord = require('discord.js');
const settings = require('../settings.json');
exports.run = (client, message, args) => {
  let reason = args.slice(1).join(' ');
  let user = message.guild.member(message.mentions.users.first())
  let name = message.mentions.users.first()
  let modlog = client.channels.find('name', 'punishments');
  let modlog2 = client.channels.find('name', settings.logchannel);
  if (!modlog) return message.reply(':x: I cannot find punishments channel');
  if (!modlog2) return message.reply(':x: I cannot find bot_logs channel');
  if (message.mentions.users.size < 1) return message.reply(':x: You must mention someone to violate them.').catch(console.error);
  if (reason.length < 1) return message.reply(`:x: You must tell a reason why a victim should recieve violator role.`);
    let giveRole = client.guilds.get(user.guild.id).roles.find('name','Violator');
      if (!giveRole) return message.reply(`:x: Was the violator rolename changed? If so, please contact Repilee.`)
  user.addRole(giveRole)
  if (message.guild.member(user).roles.has(giveRole.id)) {
    const embed = new Discord.RichEmbed()
      .setColor(0xDF3046)
      .setTimestamp()
      .setAuthor('Violate Error!', `$(settings.image_link_negative).png`)
      .addField('User:', `${user}`)
      .addField('Reason:', 'The role you requested to violate is already assigned!')
      .addField('Moderator:', `${message.author}`)
       .setFooter('SynerG Moderation Bot');
    message.channel.send({embed}).catch(console.error);
    } else {
      const embed = new Discord.RichEmbed()
      .setColor(0xffcd32)
      .setTimestamp()
      .setAuthor('You have violated a rule from the server!', `${settings.image_link_warning}`)
      .addField('Reason:', reason)
      .addField('Moderator:', `${message.author}`)
      .setFooter('SynerG Moderation Bot | Please follow the rules! If you do not abide the rules, your account can be banned from SynerG server. Have a nice day!');
      user.send({embed}).catch(console.error).then (member => {
          const embed = new Discord.RichEmbed()
            .setColor(0x76b352)
            .setTimestamp()
            .setAuthor('Violator System' ,`${settings.image_link_affirmative}`)
            .setFooter('SynerG Moderation Bot')
            .addField('User:', `${user}`)
            .addField('Reason:', reason)
            .addField('Moderator:', `${message.author}`);
          client.channels.get(modlog.id).send({embed}).catch(console.error)
            client.channels.get(modlog2.id).send({embed}).catch(console.error)
          message.channel.send(`:white_check_mark:  Successfully violated ${name.username}#${name.discriminator}!`).then(
          response => response.delete(2500).catch(error => console.log(error.stack)))
        }).catch(e => {
          console.error(e);
        });
      }
    }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'violate',
  description: 'Violates to the mentioned user.',
  usage: 'violate <mention> <reason>'
};
