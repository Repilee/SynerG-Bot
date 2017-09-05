exports.run = (client, message, args) => {
  message.channel.send('Feeling lucky? Let\'s see where the coin lands...')
    .then(msg => {
      var answers = [
        '**Heads!**',
        '**Tails!**',
      ];
      var randomAnswerPicker = answers[Math.floor(Math.random() * answers.length)];
      message.reply("You flipped a coin... it lands on " + randomAnswerPicker + ".").catch(error => console.log(error.stack));
    });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'coinflip',
  description: 'Flips a coin.',
  usage: 'coinflip'
};
