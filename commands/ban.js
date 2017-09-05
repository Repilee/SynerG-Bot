const Discord = require('discord.js');
const settings = require('../settings.json');
exports.run = (client, message, args) => {
  let number = args[1];
    let reason = args.slice(2).join(' ')
  let user = message.mentions.users.first();
  let modlog = client.channels.find('name', settings.logchannel);
  if (!modlog) return message.reply('Log channel not found - make sure it is defined.').catch(console.error);
  if (message.mentions.users.size < 1) return message.reply(':x: You must mention someone to ban them. Usage: $ban <mention> <days> <reason>').catch(console.error);
  if (!number) return message.reply(':x: You must specify a ban length, up to 7 days. Usage: $ban <mention> <days> <reason>').catch(console.error);
  if (reason.length < 1) return message.reply(':x: You must provide a reason. Usage: $ban <mention> <days> <reason>').catch(console.error);
  if (number > 7) {
    const embed = new Discord.RichEmbed()
    .setColor(0xDF3046)
    .setTimestamp()
    .setAuthor('Ban System Error!', `${settings.image_link_negative}`)
    .setDescription('Please select something that is LESS THAN OR EQUAL TO 7 days.')
    .setFooter('SynerG Moderation Bot');
  message.channel.send({embed}).catch(console.error);
} else {
  if (!message.guild.member(client.user).hasPermission('BAN_MEMBERS')) return message.reply(':x: **Error!** The bot does not have the Ban Members permission.').catch(console.error);
  let banMember = message.guild.member(user);
  if (!message.guild.member(user).bannable) {
      const embed = new Discord.RichEmbed()
      .setColor(0xDF3046)
      .setTimestamp()
      .setAuthor('Ban System Error!', '$(settings.image_link_negative).png')
      .setDescription('The user you\'re trying to ban doesn\'t exist, or the user\'s role is higher.')
      .setFooter('SynerG Moderation Bot');
    message.channel.send({embed}).catch(console.error);
  } else {
  const embed = new Discord.RichEmbed()
  .setColor(0xDF3046)
  .setTimestamp()
  .setAuthor('You have been banned from the server!' ,`${settings.image_link_ban}`)
  .addField('Reason:', reason)
  .addField('Days:', number)
  .addField('Moderator:', `${message.author}`)
  .setFooter('SynerG Moderation Bot | You have been banned from the server.');
  user.send({embed}).catch(console.error).then
  banMember.ban(number).then(member => {
    const embed = new Discord.RichEmbed()
      .setColor(0xDF3046)
      .setTimestamp()
      .setFooter('SynerG Moderation Bot')
      .setAuthor('Ban System', `${settings.image_link_ban}`)
      .addField('User:', `${user}`)
      .addField('Reason:', reason)
      .addField('Days:', number)
      .addField('Moderator:', `${message.author}`);
    client.channels.get(modlog.id).send({embed}).catch(console.error);
    message.channel.send(`:white_check_mark:  Successfully banned ${user.username}#${user.discriminator}!`).then(
      response => response.delete(2500).catch(error => console.log(error.stack)))
  }).catch(e => {
    console.error(e);
  });
}
}
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 3
};

exports.help = {
  name: 'ban',
  description: 'The bot will ban the mentioned user. (Moderator+ only)',
  usage: 'ban <mention> <days> <reason>'
};
