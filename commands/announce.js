const Discord = require('discord.js');
const settings = require('../settings.json');
exports.run = function(client, message, args) {
  let modlog = client.channels.find('name', settings.logchannel);
    let announce = client.channels.find('name', 'announcements');
  if (!announce) return message.reply(':x: I cannot find a announcements channel');
  client.channels.get(announce.id).send("@everyone");
  const embed = new Discord.RichEmbed()
  .setColor(0x00AE86)
  .setTimestamp()
  .setAuthor('Announcements' , 'https://i.imgur.com/pKmMWVj.png')
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
  description: 'Make the bot announce in #announcements',
  usage: 'announce <string>'
};
