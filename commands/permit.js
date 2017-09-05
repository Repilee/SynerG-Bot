const Discord = require('discord.js');
const settings = require('../settings.json');
exports.run = function(client, message, args) {
let rolename = args.slice(1).join(' ');
let member = message.guild.member(message.mentions.users.first())
if (message.mentions.users.size < 1) return message.reply(':x: You must mention someone in order to give role to a user.').catch(console.error);
let guild = member.guild;
if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply(':x: Incorrect permissions. Make sure (MANAGE_ROLES) is checked.').catch(console.error);
  let modlog = client.channels.find('name', settings.logchannel);
if (!modlog) return message.reply(':x: Log channel not found - make sure it is defined..').catch(console.error);
let giveRole = client.guilds.get(member.guild.id).roles.find('name', 'Permit');
if (!giveRole) {
message.reply('Was permit name changed? If so, contact Repilee.').catch(console.error);
} else {
  if (message.guild.member(member).roles.has(giveRole.id)) {
    const embed = new Discord.RichEmbed()
      .setColor(0xDF3046)
      .setTimestamp()
      .setAuthor('Permit Error!', `${settings.image_link_negative.png}`)
      .addField('User:', `${member}`)
      .addField('Reason:', 'This user is already permitted, and is on trial.')
      .addField('Moderator:', `${message.author}`)
       .setFooter('SynerG Moderation Bot');
    message.channel.send({embed}).catch(console.error);
  } else {
  member.addRole(giveRole)
  console.log("Gave " + member.user.username + " a permit!")
  const embed = new Discord.RichEmbed()
    .setColor(0x76b352)
    .setTimestamp()
    .setAuthor('Permit System', `${settings.image_link_affirmative}`)
    .addField('User:', `${member}`)
    .addField('Moderator:', `${message.author}`)
     .setFooter('SynerG Moderation Bot');
  client.channels.get(modlog.id).send({embed}).catch(console.error);
  message.channel.send(`:white_check_mark:  Successfully gave permit to a user! ${member} needs to post a link now. You have thirty seconds until the Permit role is expired.`)
    setTimeout(continueExecution, Math.round(30 * 1000));

      function continueExecution() {
        if (message.guild.member(member).roles.has(giveRole.id)) {
          console.log("This user " + member.user.username + " did not use permit at all!");
          message.channel.send(`${member} has not used permit at all! However, ${member} loses his permit.`)
    member.removeRole(giveRole)
  }
  }
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
  name: 'permit',
  description: 'Permits a user to post links',
  usage: 'permit <mention'
};
