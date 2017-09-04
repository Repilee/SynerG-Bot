exports.run = function(client, message, args) {
  		message.reply("your Profile ID is: " + message.author.id)
  }

  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };

  exports.help = {
    name: 'myid',
    description: 'Gets your user ID.',
    usage: 'myid'
  };
