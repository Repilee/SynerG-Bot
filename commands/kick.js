const Discord = require('discord.js');
const settings = require('../settings.json');
exports.run = (client, message, args) => {
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  let modlog = client.channels.find('name', settings.logchannel);
  if (!modlog) return message.reply(":x: There is no log channel available in this server.")
  if (message.mentions.users.size < 1) return message.reply(":x: You need to mention a user, or I cannot kick without the mentioned user.")
  if (reason.length < 1) return message.reply(":x: You are required to put a reason for the kick.")
  if (!message.guild.member(client.user).hasPermission('KICK_MEMBERS')) return message.reply(':x: I do not have the kicking permissions.').catch(console.error);
  let kickMember = message.guild.member(user);
   if (!message.guild.member(user).kickable) {
        const embed = new Discord.RichEmbed()
        .setColor(0xf44542)
        .setTimestamp()
        .setAuthor('Kick System Error!','http://i.imgur.com/tSlupol.png')
        .setDescription('The user\'s role is higher than the bot\'s role.')
          .setFooter('SynerG moderation bot');
      message.channel.send({embed}).catch(console.error); return
    } else {

const embed = new Discord.RichEmbed()
.setColor(0xf44542)
.setTimestamp()
.setAuthor('You have been kicked from the server!','http://i.imgur.com/tSlupol.png')
.addField('Reason:', reason)
.addField('Moderator:', `${message.author}`)
.setFooter('SynerG moderation bot | Break another rule, and you are banned.');
user.send({embed}).catch(console.error).then
  kickMember.kick().then(member => {
    const embed = new Discord.RichEmbed()
      .setColor(0x00AE86)
      .setTimestamp()
      .setAuthor('Kick System', `http://i.imgur.com/mlUqB6f.png`)
      .setFooter('SynerG moderation bot')
      .addField('User:', `${user} ID: ${user.id}`)
      .addField('Reason:', reason)
      .addField('Moderator:', `${message.author}`);
    client.channels.get(modlog.id).send({embed}).catch(console.error);
    message.channel.send(`:ok_hand: Successfully kicked ${user}!`).then(
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
  description: 'The bot will kick the mention user. (Moderator+ only)',
  usage: 'kick <mention> <reason>'
};
