const Discord = require('discord.js');
exports.run = function(client, message, args) {
	var answers = [
		'./images/dogs/dog1.png',
    './images/dogs/dog2.jpg',
    './images/dogs/dog3.jpg',
    './images/dogs/dog4.jpg',
    './images/dogs/dog5.jpg',
    './images/dogs/dog6.jpg',
    './images/dogs/dog7.jpg',
    './images/dogs/dog8.jpg',
    './images/dogs/dog9.jpg',
    './images/dogs/dog10.jpg',
    './images/dogs/dog11.jpg',
    './images/dogs/dog12.jpg',
    './images/dogs/dog13.jpg',
    './images/dogs/dog14.jpg',
    './images/dogs/dog15.jpg',
    './images/dogs/dog16.jpg',
    './images/dogs/dog17.jpg',
	];
  var randomAnswerPicker = answers[Math.floor(Math.random() * answers.length)];
  message.channel.sendFile(randomAnswerPicker);
	message.reply("Woof!");
  }
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };

  exports.help = {
    name: 'dog',
    description: 'Displays a random doggy.',
    usage: 'dog'
  };
