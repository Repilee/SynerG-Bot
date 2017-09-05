const Discord = require('discord.js');
exports.run = (client, message, args) => {
  let user = message.mentions.users.first();
  if (message.mentions.users.size < 1) return message.reply(':x: You must mention a user in order to retrieve their avatar.').catch(console.error);
  message.reply(`Retreieved avatar for **${user.username}**:` + user.avatarURL)
}


  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };

  exports.help = {
    name: 'avatar',
    description: 'Fetches a user\'s profile picture.',
    usage: 'avatar <mention>'
  };
