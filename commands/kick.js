const Discord = require('discord.js');
const settings = require('../settings.json');
exports.run = (client, message, args) => {
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  let modlog = client.channels.find('name', settings.logchannel);
  if (!modlog) return message.reply(":x: Log channel not found - make sure it is defined.")
  if (message.mentions.users.size < 1) return message.reply(":x: You must mention someone to kick them. Usage: kick <mention> <reason>")
  if (reason.length < 1) return message.reply(":x: You must provide a reason. Usage: kick <mention> <reason>")
  if (!message.guild.member(client.user).hasPermission('KICK_MEMBERS')) return message.reply(':x: **Error!** The bot does not have the Kick Members permission.').catch(console.error);
  let kickMember = message.guild.member(user);
   if (!message.guild.member(user).kickable) {
        const embed = new Discord.RichEmbed()
        .setColor(0xDF3046)
        .setTimestamp()
        .setAuthor('Kick System Error!',`${settings.image_link_negative.png}`)
        .setDescription('The user\'s role is higher than the bot\'s role - unable to kick.')
          .setFooter('SynerG Moderation Bot');
      message.channel.send({embed}).catch(console.error); return
    } else {

const embed = new Discord.RichEmbed()
.setColor(0xDF3046)
.setTimestamp()
.setAuthor('You have been kicked from the server!',`${settings.image_link_negative.png}`)
.addField('Reason:', reason)
.addField('Moderator:', `${message.author}`)
.setFooter('SynerG Moderation Bot | Obey the rules - else you\'re going to be banned.');
user.send({embed}).catch(console.error).then
  kickMember.kick().then(member => {
    const embed = new Discord.RichEmbed()
      .setColor(0x76b352)
      .setTimestamp()
      .setAuthor('Kick System', `${settings.image_link_affirmative}`)
      .setFooter('SynerG Moderation Bot')
      .addField('User:', `${user} ID: ${user.id}`)
      .addField('Reason:', reason)
      .addField('Moderator:', `${message.author}`);
    client.channels.get(modlog.id).send({embed}).catch(console.error);
    message.channel.send(`:white_check_mark:  Successfully kicked ${user}!`).then(
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
  name: 'kick',
  description: 'Kicks the targeted user. (Moderator+ only)',
  usage: 'kick <mention> <reason>'
};
