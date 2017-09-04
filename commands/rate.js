exports.run = function(client, message, args) {
    let reason = args.join(' ')
      if (reason.length < 1) return message.reply(':x: You must tell something to rate.').catch(console.error);
var answers = [
  '0/10, Seriously, I hated that!',
  '1/10, Boo!',
  '2/10, Little bit horrible.',
  '3/10, Meh.',
  '4/10, Closer to an average.',
  '5/10, Er, average.',
  '6/10, Higher than average.',
  '7/10, Not bad!',
  '8/10, Pretty good.',
  '9/10, That is a good one!',
  '10/10, Perfect!',
  '11/10, WOAHHH OMGG (╯°□°）╯︵ ┻━┻',
  'uhhh... I can\'t decide. You rate it.',
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
  description: 'Let the bot rate it for you.',
  usage: 'rate <string>'
};
