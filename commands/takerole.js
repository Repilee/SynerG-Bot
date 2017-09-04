const Discord = require('discord.js');
const settings = require('../settings.json');
exports.run = function(client, message, args) {
let rolename = args.slice(1).join(' ');
let reason = args.slice(1).join(' ');
let member = message.guild.member(message.mentions.users.first())
if (message.mentions.users.size < 1) return message.reply(':x: You must mention someone in order to give role to a user.').catch(console.error);
let guild = member.guild;
if (reason.length < 1) return message.reply(':x: You must tell a reason for the role removal.').catch(console.error);
if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply(':x: I do not have the correct permissions. Make sure it is (MANAGE_ROLES) checked.').catch(console.error);
  let modlog = client.channels.find('name', settings.logchannel);
if (!modlog) return message.reply(':x: I cannot find a log channel.').catch(console.error);
let removeRole = client.guilds.get(member.guild.id).roles.find('name', rolename);
if (!removeRole) {
message.reply(':x: I cannot find a role you requested. Make sure your spelling, capitalization is correct. If none of those work, contact server administrator to help you out.').catch(console.error);
} else {
  if (message.guild.member(member).roles.has(removeRole.id)) {
    member.removeRole(removeRole)
    console.log("Removed " + member.user.username + " a role called " + rolename + "!")
    const embed = new Discord.RichEmbed()
      .setColor(0x00AE86)
      .setTimestamp()
      .setAuthor('Successfully removed role from a user!', `http://i.imgur.com/mlUqB6f.png`)
      .addField('User:', `${member}`)
      .addField('Role:', rolename)
      .addField('Reason:', reason)
      .addField('Moderator:', `${message.author}`)
       .setFooter('SynerG moderation bot');
    client.channels.get(modlog.id).send({embed}).catch(console.error);
    message.channel.sendMessage(':ok_hand: Successfully removed user\'s role!')
  } else {
    const embed = new Discord.RichEmbed()
      .setColor(0xf44542)
      .setTimestamp()
      .setAuthor('Role Removal Error!', `http://i.imgur.com/tSlupol.png`)
      .addField('User:', `${member}`)
      .addField('Reason:', 'The role you requested to remove is not assigned!')
      .addField('Moderator:', `${message.author}`)
       .setFooter('SynerG moderation bot');
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
