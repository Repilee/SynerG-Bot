const Discord = require('discord.js');
const settings = require('../settings.json');
exports.run = function(client, message, args) {
  let modlog = client.channels.find('name', settings.logchannel);
    let announce = client.channels.find('name', 'announcements');
  if (!announce) return message.reply(':x: Announcements channel not found - make sure it\'s named *announcements*.');
  client.channels.get(announce.id).send("@everyone");
  const embed = new Discord.RichEmbed()
  .setColor(0x76b352)
  .setTimestamp()
  .setAuthor('Announcements' , '`${settings.image_link_sG}`')
  .setDescription(args.join(' '))
   .setFooter(`Announcement by ${message.author.username}`)
  return client.channels.get(announce.id).send({embed});
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'announce',
  description: 'Makes the bot announce a message in #announcements.',
  usage: 'announce <string>'
};
