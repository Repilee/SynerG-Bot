const Discord = require('discord.js');
exports.run = function(client, message, args) {
  const embed = new Discord.RichEmbed()
  .setColor(0x76b352)
  .setTimestamp()
  .setThumbnail(`${settings.image_link_affirmative}`)
  .setAuthor('SERVER STATS')
  .addField('***Total users in this server:*** ', client.users.size )
  .addField('***Total channels in this server:***', client.channels.size)
  .setFooter('SynerG Moderation Bot');
     message.channel.send({embed})
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'serverstats',
  description: 'Shows statistics about this server.',
  usage: 'serverstats'
};
