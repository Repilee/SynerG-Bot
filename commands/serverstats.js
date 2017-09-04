const Discord = require('discord.js');
exports.run = function(client, message, args) {
  const embed = new Discord.RichEmbed()
  .setColor(0x00AE86)
  .setTimestamp()
  .setThumbnail('http://i.imgur.com/mlUqB6f.png')
  .setAuthor('SERVER STATS')
  .addField('***Total users in this server:*** ', client.users.size )
  .addField('***Total channels in this server:***', client.channels.size)
  .setFooter('SynerG moderation bot');
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
  description: 'Shows a stats about this server.',
  usage: 'serverstats'
};
