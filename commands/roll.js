const Discord = require('discord.js');
exports.run = (client, message, args) => {
  var roll = Math.floor(Math.random() * 6) + 1;
  message.reply(":ok_hand: you got " + roll + "!")
};


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'roll',
  description: 'Rolls a dice.',
  usage: 'roll'
};
