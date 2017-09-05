const Discord = require('discord.js');
const settings = require('../settings.json');
exports.run = function(client, message, args) {
  let remind = args.slice(2).join(' ')
  let modlog = client.channels.find('name', settings.logchannel);
    let violog = client.channels.find('name', 'punishments');
  let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Suspicious');
    if (!muteRole) return message.reply(':x: Suspicious role not found.').catch(console.error);
  if (!modlog) return message.reply(":x: There is no log channel available in this server.")
  var seconds = args[1]
    let user = message.mentions.users.first();
    if (message.mentions.users.size < 1) return message.reply(':x: You must mention someone to remind them.').catch(console.error);
    if (!seconds) return message.reply(':x: You must tell me when you want to be remind to expire. (days).').catch(console.error);
    if (remind.length < 1) return message.reply(':x: You must tell me what why the user should be reminded.').catch(console.error);
  message.channel.send(`CONFIRM: Is ${user} the person you intended? Command usage is !remind <mention> <days> <string>.\nYou have 30 seconds to answer the question. Y/N?`);
  return message.channel.awaitMessages(m => m.author.id === message.author.id, {
    'errors': ['time'],
    'max': 1,
    time: 30000
  }).then(resp => {
    if (!resp) return;
    resp = resp.array()[0];
    let validAnswers = ['yes', 'y', 'no', 'n', 'cancel', 'sure', 'Yes', 'Y', 'nvm'];
    if (validAnswers.includes(resp.content)) {
      if (resp.content === 'cancel' || resp.content === 'no' || resp.content === 'n' || resp.content === 'nvm') {
        return message.channel.send('Aborting.');
      } else {
      if (resp.content === 'yes' || resp.content === 'y' || resp.content === 'Y' || resp.content === 'Yes' || resp.content === 'sure' || resp.content === 'Yes') {
console.log("Reminding " + user.username + " in " + seconds + " seconds.");
      message.reply(":white_check_mark:  Reminded " + user.username + "!");
      message.member.addRole(muteRole)
      client.channels.get(violog.id).send(`${user}` + " has received a reminder for **" + remind + "** and will expire in **" + seconds + "** days.");
	  const embed = new Discord.RichEmbed()
          .setColor(0xffcd32)
          .setTimestamp()
          .setFooter('SynerG Moderation Bot | Re-read the rules.')
          .setAuthor('You have been reminded!', `${settings.image_link_warning}`)
          .addField('Reminded by:', `${message.author}`)
          .addField('Reminder:', remind)
        user.sendEmbed(embed).catch(console.error);
      setTimeout(continueExecution, Math.round(seconds * 100000000));

      function continueExecution() {
        console.log("Reminder for " + user.username + " has expired.");
          client.channels.get(violog.id).send(`${user}'s violator status has expired after **` + seconds + `** days.`);
		user.send(":white_check_mark:  Your reminder has expired - be mindful of the rules.").catch(console.error);
        const embed = new Discord.RichEmbed()
          .setColor(0x76b352)
          .setTimestamp()
          .setFooter('SynerG Moderation Bot')
          .setAuthor('Remind System - Expired', `${settings.image_link_affirmative}`)
          .addField('Who:', `${user}`)
          .addField('Reminded by:', `${message.author}`)
          .addField('Reminder:', remind)
         client.channels.get(modlog.id).sendEmbed(embed);
           message.member.removeRole(muteRole)
      }
    }
}
}
})
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'remind',
  description: 'The bot reminds the target user. It is essentially a warning. [Moderator+ Only]',
  usage: 'remind <mention> <days> <string>'
};
