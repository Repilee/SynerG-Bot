exports.run = function(client, message, args) {
    let reason = args.join(' ')
      if (reason.length < 1) return message.reply(':x: You must provide something to rate.').catch(console.error);
var answers = [
  '0/10. Seriously, I hated that!',
  '1/10. Boo!',
  '2/10. Honestly, that\'s horrible.',
  '3/10. Terrible.',
  '4/10. Meh.',
  '5/10. Boring.',
  '6/10. Kinda neat, but not really.',
  '7/10. Not bad!',
  '8/10. Pretty good.',
  '9/10. Top notch!',
  '10/10. Perfect!',
  '11/10. WOAHHH OMGG (╯°□°）╯︵ ┻━┻',
  '... uhhh... I can\'t decide.',
];
var randomAnswerPicker = answers[Math.floor(Math.random() * answers.length)];
message.reply("I rate " + reason + " a " + randomAnswerPicker);
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'rate',
  description: 'Let the bot rate something for you.',
  usage: 'rate <string>'
};
