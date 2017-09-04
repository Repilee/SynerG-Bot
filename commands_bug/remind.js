const Discord = require('discord.js');
exports.run = function(client, message, args) {
  var maintenance;
  var seconds = args.join(' ');
  message.channel.sendMessage(`Are you sure you want to be reminded? Remember, command usage is !remind <seconds> <string>. 120 seconds = 2 minutes.\nYou have 30 seconds to command the question. Auto-Aborting in 30 seconds.`);
  return message.channel.awaitMessages(m => m.author.id === message.author.id, {
    'errors': ['time'],
    'max': 1,
    time: 30000
  }).then(resp => {
    if (!resp) return;
    resp = resp.array()[0];
    let validAnswers = args.join(' ');
console.log("Reminding " + message.author.username + " in " + seconds + " seconds.");
      message.reply(":ok_hand: Will remind you in " + seconds + "!");
      setTimeout(continueExecution, Math.round(seconds * 1000));

      function continueExecution() {
        console.log("Reminded " + message.author.username + "!");
        message.reply(":alarm_clock: Your time is up! Reminder: " + remind);
      }
    })
    }



exports.conf = {
  enabled: false,
  guildOnly: false,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'remind',
  description: 'The bot reminds mention users [MODERATOR+ ONLY]',
  usage: 'remind <string> <seconds>'
};
