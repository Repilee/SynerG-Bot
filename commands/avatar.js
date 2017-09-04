const Discord = require('discord.js');
exports.run = (client, message, args) => {
  let user = message.mentions.users.first();
  if (message.mentions.users.size < 1) return message.reply(':x: You must mention in order to avatar them.').catch(console.error);
  message.reply(`Here's **${user.username}** avatar! ` + user.avatarURL)
}


  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };

  exports.help = {
    name: 'avatar',
    description: 'Gets other user\'s profile picture.',
    usage: 'avatar <mention>'
  };
