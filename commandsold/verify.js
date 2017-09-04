const Discord = require('discord.js');
exports.run = (client, message, args) => {
  let user = message.mentions.users.first();
   let reason = args.join(' ');
  let modlog = client.channels.find('name', 'logs');
  //if (reason.length < 0) return message.reply('You must notddd mention someone, but only say !verify.').catch(console.error);
  let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Verified');
  let muteRole2 = client.guilds.get(message.guild.id).roles.find('name', 'Pending');
  let muteRole3 = client.guilds.get(message.guild.id).roles.find('name', 'Perm. Ban');
  let muteRole4 = client.guilds.get(message.guild.id).roles.find('name', 'Temp. ban');
  if (!modlog) return message.reply('I cannot find a log channel').catch(console.error);
  if (!muteRole) return message.reply(':x: I cannot find a verified role').catch(console.error);
 if (!muteRole2) return message.reply(':x: I cannot find a pending role').catch(console.error);
  //if (message.mentions.users.size < 0) return message.reply('You must not mention someone, but only say !verify.').catch(console.error);
  if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply(':x: I do not have the correct permissions. Make sure you checked MANAGE_ROLES_OR_PERMISSIONS.').catch(console.error);

  if (message.member.roles.has(muteRole.id)) {
    const embed = new Discord.RichEmbed()
      .setColor(0xf44542)
      .setTimestamp()
      .setAuthor('Vertification Error', 'http://i.imgur.com/tSlupol.png')
       .setFooter('SynerG moderation bot')
      .setDescription('Reason: You are already verified, and plus, wrong channel.')
    message.channel.sendEmbed(embed).catch(console.error).then(
  response => response.delete(3500).catch(error => console.log(error.stack)))
        } else {
          if (message.member.roles.has(muteRole3.id)) {
            const embed = new Discord.RichEmbed()
              .setColor(0xf44542)
              .setTimestamp()
              .setAuthor('Vertification Error', 'http://i.imgur.com/tSlupol.png')
               .setFooter('SynerG moderation bot')
              .setDescription('Reason: Your role is banned, please try again later.')
            message.channel.sendEmbed(embed).catch(console.error).then(
          response => response.delete(3500).catch(error => console.log(error.stack)))
        } else {
          if (message.member.roles.has(muteRole4.id)) {
            const embed = new Discord.RichEmbed()
              .setColor(0xf44542)
              .setTimestamp()
              .setAuthor('Vertification Error', 'http://i.imgur.com/tSlupol.png')
               .setFooter('SynerG moderation bot')
              .setDescription('Reason: Your role is banned, please try again later.')
            message.channel.sendEmbed(embed).catch(console.error).then(
          response => response.delete(3500).catch(error => console.log(error.stack)))
        } else {
          message.member.addRole(muteRole).then(() => {
            const embed = new Discord.RichEmbed()
            .setColor(0x00AE86)
            .setTimestamp()
            .setAuthor('Verification System' , 'http://i.imgur.com/mlUqB6f.png')
              .setFooter('SynerG moderation bot')
              .addField('Verifier:', `${message.author}`)
            client.channels.get(modlog.id).sendEmbed(embed).catch(console.error);
            message.channel.sendEmbed(embed).catch(console.error);
         message.member.removeRole(muteRole2)
          });
  }
}
}

};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'verify',
  description: 'Verifies a user.',
  usage: 'verify'
};
