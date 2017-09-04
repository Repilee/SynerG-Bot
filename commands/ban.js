const Discord = require('discord.js');
const settings = require('../settings.json');
exports.run = (client, message, args) => {
  let number = args[1];
    let reason = args.slice(2).join(' ')
  let user = message.mentions.users.first();
  let modlog = client.channels.find('name', settings.logchannel);
  if (!modlog) return message.reply('I cannot find a log channel').catch(console.error);
  if (message.mentions.users.size < 1) return message.reply(':x: You must mention someone to ban them. Correct command: $ban <mention> <days> <reason>').catch(console.error);
  if (!number) return message.reply(':x: You must tell how many days for the user to unban. Correct command: $ban <mention> <days> <reason>').catch(console.error);
  if (reason.length < 1) return message.reply(':x: You must tell a reason for the ban. Correct command: $ban <mention> <days> <reason>').catch(console.error);
  if (number > 7) {
    const embed = new Discord.RichEmbed()
    .setColor(0xf44542)
    .setTimestamp()
    .setAuthor('Ban System Error!', 'http://i.imgur.com/tSlupol.png')
    .setDescription('Please select something that is LESS THAN OR EQUAL TO 7 days.')
    .setFooter('SynerG moderation bot');
  message.channel.send({embed}).catch(console.error);
} else {
  if (!message.guild.member(client.user).hasPermission('BAN_MEMBERS')) return message.reply(':x: I do not have the banning permissions.').catch(console.error);
  let banMember = message.guild.member(user);
  if (!message.guild.member(user).bannable) {
      const embed = new Discord.RichEmbed()
      .setColor(0xf44542)
      .setTimestamp()
      .setAuthor('Ban System Error!', 'http://i.imgur.com/tSlupol.png')
      .setDescription('The user your trying to ban doesn\'t exist, or the user\'s role is higher.')
      .setFooter('SynerG moderation bot');
    message.channel.send({embed}).catch(console.error);
  } else {
  const embed = new Discord.RichEmbed()
  .setColor(0xf44542)
  .setTimestamp()
  .setAuthor('You have been banned from the server!' ,'http://i.imgur.com/tSlupol.png')
  .addField('Reason:', reason)
  .addField('Days:', number)
  .addField('Moderator:', `${message.author}`)
  .setFooter('SynerG moderation bot | You have violated rules, therefore the server has banned you.');
  user.send({embed}).catch(console.error).then
  banMember.ban(number).then(member => {
    const embed = new Discord.RichEmbed()
      .setColor(0x00AE86)
      .setTimestamp()
      .setFooter('SynerG moderation bot')
      .setAuthor('Ban System', 'http://i.imgur.com/mlUqB6f.png')
      .addField('User:', `${user}`)
      .addField('Reason:', reason)
      .addField('Days:', number)
      .addField('Moderator:', `${message.author}`);
    client.channels.get(modlog.id).send({embed}).catch(console.error);
    message.channel.sendMessage(`:ok_hand: Successfully banned ${user.username}#${user.discriminator}!`).then(
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
  description: 'The bot will ban the mention user. (Moderator+ only)',
  usage: 'ban <mention> <reason>'
};
