const Discord = require('discord.js');
const settings = require('../settings.json');
exports.run = function(client, message, args) {
  let modlog = client.channels.find('name', settings.logchannel);
  if (!modlog) return message.reply(':x: Log channel not found - make sure it is defined.');
   var argresult = args.join(' ');
   if(!argresult) argresult = 'online';
     client.user.setStatus(argresult);
     const embed = new Discord.RichEmbed()
     .setColor(0x76b352)
     .setTimestamp()
     .setAuthor('Logs', `${settings.image_link_affirmative}`)
     .setDescription('The bot changed the game to: ' + argresult)
     .addField('Executed by:', `${message.author}`)
     .setFooter('SynerG Moderation Bot')
      client.channels.get(modlog.id).send({embed}).catch(console.error);
   console.log(message.author.username + " has changed the status to: " + argresult)
};
   exports.conf = {
     enabled: true,
     guildOnly: false,
     aliases: [],
     permLevel: 3
   };

   exports.help = {
     name: 'setstatus',
     description: 'Sets a bot status',
     usage: 'setstatus <online/dnd/idle/invisible>'
   };
