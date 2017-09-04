exports.run = (client, message) => {
  message.channel.sendMessage('*Pong*, scanning...')
    .then(msg => {
      msg.edit(`**Hello, ` + message.author.username + `!** *Pong!* (took: ${msg.createdTimestamp - message.createdTimestamp}ms)`);
    });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'ping',
  description: 'The bot tells you to pong, fun right?',
  usage: 'ping'
};
