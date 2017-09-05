const Discord = require('discord.js');
const settings = require('../settings.json');
exports.run = function(client, message, args) {
let rolename = args.slice(1).join(' ');
let member = message.guild.member(message.mentions.users.first())
if (message.mentions.users.size < 1) return message.reply(':x: You must mention someone in order to give a role to a user.').catch(console.error);
let guild = member.guild;
if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply(':x: Incorrect permissions. Make sure (MANAGE_ROLES) is checked.').catch(console.error);
  let modlog = client.channels.find('name', settings.logchannel);
if (!modlog) return message.reply(':x: Log channel not found - make sure it is defined.').catch(console.error);
let giveRole = client.guilds.get(member.guild.id).roles.find('name', rolename);
if (!giveRole) {
message.reply(':x: Role not found. Make sure you typed the role correctly. If none of those work, see roles what any other member has.').catch(console.error);
} else {
  if (message.guild.member(member).roles.has(giveRole.id)) {
    const embed = new Discord.RichEmbed()
      .setColor(0xDF3046)
      .setTimestamp()
      .setAuthor('Role Assign Error!', `$(settings.image_link_negative).png`)
      .addField('User:', `${member}`)
      .addField('Reason:', 'The role you requested is already assigned.')
      .addField('Moderator:', `${message.author}`)
       .setFooter('SynerG Moderation Bot');
    message.channel.send({embed}).catch(console.error);
  } else {
  member.addRole(giveRole)
  console.log("Gave " + member.user.username + " a role called " + rolename + "!")
  const embed = new Discord.RichEmbed()
    .setColor(0x76b352)
    .setTimestamp()
    .setAuthor('Successfully gave role to a user!', ``${settings.image_link_affirmative}``)
    .addField('User:', `${member}`)
    .addField('Role:', rolename)
    .addField('Moderator:', `${message.author}`)
     .setFooter('SynerG Moderation Bot');
  client.channels.get(modlog.id).send({embed}).catch(console.error);
  message.channel.send(':white_check_mark:  Successfully gave the role to the user!')
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
  description: 'Gives the mentioned user a role.',
  usage: 'giverole <mention> <rolename>'
};
