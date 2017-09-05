const Discord = require('discord.js');
const settings = require('../settings.json');
exports.run = function(client, message, args) {
let rolename = args.slice(1).join(' ');
let reason = args.slice(1).join(' ');
let member = message.guild.member(message.mentions.users.first())
if (message.mentions.users.size < 1) return message.reply(':x: You must mention someone in order to give role to a user.').catch(console.error);
let guild = member.guild;
if (reason.length < 1) return message.reply(':x: You must tell a reason for the role removal.').catch(console.error);
if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply(':x: Incorrect permissions. Make sure (MANAGE_ROLES) is checked..').catch(console.error);
  let modlog = client.channels.find('name', settings.logchannel);
if (!modlog) return message.reply(':x: Log channel not found - make sure it is defined..').catch(console.error);
let removeRole = client.guilds.get(member.guild.id).roles.find('name', rolename);
if (!removeRole) {
message.reply(':x: I cannot find a role you requested. Make sure your spelling, capitalization is correct. If none of those work, contact server administrator to help you out.').catch(console.error);
} else {
  if (message.guild.member(member).roles.has(removeRole.id)) {
    member.removeRole(removeRole)
    console.log("Removed " + member.user.username + " a role called " + rolename + "!")
    const embed = new Discord.RichEmbed()
      .setColor(0x76b352)
      .setTimestamp()
      .setAuthor('Successfully removed role from a user!', `${settings.image_link_affirmative}`)
      .addField('User:', `${member}`)
      .addField('Role:', rolename)
      .addField('Reason:', reason)
      .addField('Moderator:', `${message.author}`)
       .setFooter('SynerG Moderation Bot');
    client.channels.get(modlog.id).send({embed}).catch(console.error);
    message.channel.send(':white_check_mark:  Successfully removed user\'s role!')
  } else {
    const embed = new Discord.RichEmbed()
      .setColor(0xDF3046)
      .setTimestamp()
      .setAuthor('Role Removal Error!', `${settings.image_link_negative}`)
      .addField('User:', `${member}`)
      .addField('Reason:', 'The role you requested to remove is not assigned!')
      .addField('Moderator:', `${message.author}`)
       .setFooter('SynerG Moderation Bot');
    message.channel.send({embed}).catch(console.error);
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
  name: 'takerole',
  description: 'Takes a mentioned user a role.',
  usage: 'takerole <mention> <rolename>'
};
