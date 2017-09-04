const Discord = require('discord.js');
const settings = require('../settings.json');
exports.run = function(client, message, args) {
let rolename = args.slice(1).join(' ');
let member = message.guild.member(message.mentions.users.first())
if (message.mentions.users.size < 1) return message.reply(':x: You must mention someone in order to give role to a user.').catch(console.error);
let guild = member.guild;
if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply(':x: I do not have the correct permissions. Make sure it is (MANAGE_ROLES) checked.').catch(console.error);
  let modlog = client.channels.find('name', settings.logchannel);
if (!modlog) return message.reply(':x: I cannot find a log channel.').catch(console.error);
let giveRole = client.guilds.get(member.guild.id).roles.find('name', rolename);
if (!giveRole) {
message.reply(':x: I cannot find a role you requested. Make sure your spelling, capitalization is correct. If none of those work, see roles what any other member has.').catch(console.error);
} else {
  if (message.guild.member(member).roles.has(giveRole.id)) {
    const embed = new Discord.RichEmbed()
      .setColor(0xf44542)
      .setTimestamp()
      .setAuthor('Role Assign Error!', `http://i.imgur.com/tSlupol.png`)
      .addField('User:', `${member}`)
      .addField('Reason:', 'The role you requested is already assigned.')
      .addField('Moderator:', `${message.author}`)
       .setFooter('SynerG moderation bot');
    message.channel.send({embed}).catch(console.error);
  } else {
  member.addRole(giveRole)
  console.log("Gave " + member.user.username + " a role called " + rolename + "!")
  const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setAuthor('Successfully gave role to a user!', `http://i.imgur.com/mlUqB6f.png`)
    .addField('User:', `${member}`)
    .addField('Role:', rolename)
    .addField('Moderator:', `${message.author}`)
     .setFooter('SynerG moderation bot');
  client.channels.get(modlog.id).send({embed}).catch(console.error);
  message.channel.send(':ok_hand: Successfully gave role to a user!')
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
  name: 'giverole',
  description: 'Gives a mentioned user a role.',
  usage: 'giverole <mention> <rolename>'
};
