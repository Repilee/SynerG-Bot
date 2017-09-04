exports.run = function(client, message, args) {
  message.reply("here's your Discord avatar! " + message.author.avatarURL);
  }
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };

  exports.help = {
    name: 'myavatar',
    description: 'Gets your profile picture.',
    usage: 'myavatar'
  };
