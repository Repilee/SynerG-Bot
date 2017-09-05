const Discord = require('discord.js');
const settings = require('../events/message.js');
exports.run = function(client, message, args) {
  var seconds = args.join(" ")
  message.channel.send(`***WARNING!*** You are about to activate maintenance mode. Continue?\nSelf-abort in 30 seconds. Y/N?`);
  return message.channel.awaitMessages(m => m.author.id === message.author.id, {
    'errors': ['time'],
    'max': 1,
    time: 30000
  }).then(resp => {
    if (!resp) return;
    resp = resp.array()[0];
    let validAnswers = ['yes', 'y', 'no', 'n', 'cancel'];
    if (validAnswers.includes(resp.content)) {
      if (resp.content === 'cancel' || resp.content === 'no' || resp.content === 'n') {
        return message.channel.send('Aborting.');
      } else if (resp.content === 'yes' || resp.content === 'y') {
console.log("Maintenance mode activated for " + seconds + " seconds.");
      message.channel.send("The bot is now in maintenance mode, commands **will NOT** work!");
      settings.maintenance = "true";
      setTimeout(continueExecution, Math.round(seconds * 1000));

      function continueExecution() {
        console.log("Maintenance ended.");
        message.channel.send("Maintenance period ended, returning to normal.");
        settings.maintenance = null;
      }
    }
  }
})
}

exports.conf = {
  enabled: false,
  guildOnly: false,
  aliases: [],
  permLevel: 5
};

exports.help = {
  name: 'maintenance',
  description: 'The bot sets self into maintenance mode. [DEVELOPER ONLY]',
  usage: 'maintenance <seconds>'
};
