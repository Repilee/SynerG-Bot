const Discord = require('discord.js');
const settings = require('../settings.json');
exports.run = function(client, message, args) {
  let modlog = client.channels.find('name', settings.logchannel);
  if (!modlog) return message.reply(':x: Log channel not found - make sure it is defined.');
   var argresult = args.join(' ');
   if (!argresult) argresult = null;
client.user.setGame (argresult);
const embed = new Discord.RichEmbed()
.setColor(0x76b352)
.setTimestamp()
.setAuthor('Logs', `${settings.image_link_affirmative}`)
.setDescription('The bot\'s currently playing game name set to: ' + argresult)
.addField('Executed by:', `${message.author}`)
   .setFooter('SynerG Moderation Bot');
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
     description: 'Sets the bot\'s currently playing game status.',
     usage: 'setgame <string>'
   };
