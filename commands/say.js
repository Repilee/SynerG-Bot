const Discord = require('discord.js');
const settings = require('../settings.json');
exports.run = function(client, message, args) {
  let reason = args.join(' ')
  if (reason.length < 1) return message.reply(":x: You are required to put any strings in order to copy you.")
message.channel.send(reason)
message.delete(5)
let modlog = client.channels.find('name', settings.logchannel);
if (!modlog) return message.reply(":x: There is no log channel available in this server.")
const embed = new Discord.RichEmbed()
.setColor(0x00AE86)
.setTimestamp()
.setAuthor('Logs' , 'http://i.imgur.com/mlUqB6f.png')
  .setFooter('SynerG moderation bot')
  .addField('Command:', `$say`)
  .addField('Executor:', `${message.author}`)
  .setDescription("Message: " + reason)
client.channels.get(modlog.id).send({embed}).catch(console.error);
}


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'say',
  description: 'Tell the bot to say anything.',
  usage: 'say <string>'
};
