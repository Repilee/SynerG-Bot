const Discord = require('discord.js');
const settings = require('../settings.json');
exports.run = function(client, message, args) {
  let remind = args.slice(2).join(' ')
  let modlog = client.channels.find('name', settings.logchannel);
  let violog = client.channels.find('name', 'punishments');
  let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Violator');
    if (!muteRole) return message.reply(':x: I cannot find a violator role').catch(console.error);
  if (!modlog) return message.reply(":x: There is no log channel available in this server.")
  var seconds = args[1]
    let user = message.guild.member(message.mentions.users.first())
    if (message.mentions.users.size < 1) return message.reply(':x: You must mention someone to violate them.').catch(console.error);
    if (!seconds) return message.reply(':x: You must tell me when violator role should expire. Must be (days).').catch(console.error);
    if (remind.length < 1) return message.reply(':x: You must tell me why user should be violated.').catch(console.error);
  message.channel.send(`Did this user named ${user} broke a/more than a rule? If so, say yes. Otherwise, say no. Remember, command usage is $violate <mention> <days> <string>.\nYou have 30 seconds to answer the question.`);
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
        return message.channel.send('Next time, please choose the right user to violate that has broke a rule before.');
      } else {
      if (resp.content === 'yes' || resp.content === 'y' || resp.content === 'Y' || resp.content === 'Yes' || resp.content === 'sure' || resp.content === 'Yes') {
console.log("Violated " + user.user.username + " for " + seconds + " days.");
      message.reply(":ok_hand: Violated **" + user.user.username + "**!");
      user.addRole(muteRole)
             client.channels.get(violog.id).send(`${user}` + " has received a violator for **" + remind + "** and will expire in **" + seconds + "** days.");
	  const embed = new Discord.RichEmbed()
          .setColor(0xf4ce42)
          .setTimestamp()
          .setFooter('SynerG moderation bot')
          .setAuthor('You have been violated by a staff!', 'http://i.imgur.com/VsU2c64.png')
          .addField('Moderator:', `${message.author}`)
          .addField('Reason:', remind)
          .addField('Days', seconds)
        user.sendEmbed(embed).catch(console.error);
      setTimeout(continueExecution, Math.round(seconds * 100000000));

      function continueExecution() {
        console.log("Violator of " + user.user.username + " has expired!");
        client.channels.get(violog.id).send(`Violator named ${user} has expired after **` + seconds + `** days.`);
		user.send(":ok_hand: Your role violator has expired! Please abide by the rules next time.").catch(console.error);
        const embed = new Discord.RichEmbed()
          .setColor(0x00AE86)
          .setTimestamp()
          .setFooter('SynerG moderation bot')
          .setAuthor('Violator System - Expired', 'http://i.imgur.com/mlUqB6f.png')
          .addField('Who:', `${user}`)
          .addField('Moderator:', `${message.author}`)
          .addField('Reason:', remind)
         client.channels.get(modlog.id).sendEmbed(embed);
           user.removeRole(muteRole)
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
  name: 'violate',
  description: 'The bot violates mentioned user in case they broke a rule. [Moderator+ Only]',
  usage: 'violate <mention> <days> <string>'
};
