const Discord = require('discord.js');
exports.run = function(client, message, args) {
  let messagecount = parseInt(args.join(' '));
  //if (messagecount.length < 1) return message.reply('Please select something less than 100 messages.').catch(console.error);
  if (messagecount > 100) {
    const embed = new Discord.RichEmbed()
    .setColor(0xDF3046)
    .setTimestamp()
    .setAuthor('Purge System Error!', '$(settings.image_link_negative).png')
    .setDescription('Please select a number that is LESS THAN OR EQUAL TO 100 messages.')
    .setFooter('SynerG Moderation Bot');
  message.channel.send({embed}).catch(console.error).then(
response => response.delete(3500).catch(error => console.log(error.stack)))
  } else {
    if (messagecount < 2) {
      const embed = new Discord.RichEmbed()
      .setColor(0xDF3046)
      .setTimestamp()
      .setAuthor('Purge System Error!', '$(settings.image_link_negative).png')
      .setDescription('Please select a number that is GREATER THAN OR EQUAL TO 2 messages.')
      .setFooter('SynerG Moderation Bot');
    message.channel.send({embed}).catch(console.error).then(
  response => response.delete(3500).catch(error => console.log(error.stack)))
  } else {
  message.channel.fetchMessages({
    limit: messagecount
  }).then(messages => message.channel.bulkDelete(messages));
  const embed = new Discord.RichEmbed()
  .setColor(0x76b352)
  .setTimestamp()
  .setAuthor('Purge System', ``${settings.image_link_affirmative}``)
  .addField('Status:', ':white_check_mark: ' + args.join(' ') + ' *messages was successfully purged!*')
  .addField('Executed by:', `${message.author}`)
   .setFooter('SynerG Moderation Bot');
  message.channel.send({embed}).then(
response => response.delete(3500).catch(error => console.log(error.stack)))
}
}
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 3
};

exports.help = {
  name: 'purge',
  description: 'Purges amount of messages.',
  usage: 'purge <number>'
};
