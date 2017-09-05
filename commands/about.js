const Discord = require('discord.js');
const settings = require('../settings.json');
exports.run = function(client, message, args) {
  const embed = new Discord.RichEmbed()
  .setColor(0x76b352)
  .setTimestamp()
  .setThumbnail('`${settings.image_link_sG}`')
  .setAuthor('About SynerG Bot')
  .addField('I am a moderation bot and I am here to keep everyone safe.', 'It is my job to protect everyone. Owned by Collect1ve and the game, phily241.')
  .setDescription('Bot version: ' + settings.version)
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
  name: 'about',
  description: 'Shows an information about myself.',
  usage: 'about'
};
