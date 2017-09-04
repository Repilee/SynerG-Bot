const Discord = require('discord.js');
const settings = require('../settings.json');
exports.run = function(client, message, args) {
  let modlog = client.channels.find('name', settings.logchannel);
  if (!modlog) return message.reply(':x: I cannot find a log channel');
   var argresult = args.join(' ');
   if (!argresult) argresult = null;
client.user.setGame (argresult);
const embed = new Discord.RichEmbed()
.setColor(0x00AE86)
.setTimestamp()
.setAuthor('Logs', 'http://i.imgur.com/mlUqB6f.png')
.setDescription('The bot changed the game to: ' + argresult)
.addField('Executed by:', `${message.author}`)
   .setFooter('SynerG moderation bot');
   client.channels.get(modlog.id).send({embed}).catch(console.error)
 console.log(message.author.username + " has changed the game to: " + argresult)
};
   exports.conf = {
     enabled: true,
     guildOnly: false,
     aliases: [],
     permLevel: 3
   };

   exports.help = {
     name: 'setgame',
     description: 'Sets a bot currently (Playing) game.',
     usage: 'setgame <string>'
   };
