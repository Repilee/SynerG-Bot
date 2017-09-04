const Discord = require('discord.js');
exports.run = function(client, message, args) {
	var answers = [
		'./images/cats/cat1.png',
    './images/cats/cat2.jpg',
    './images/cats/cat3.jpeg',
    './images/cats/cat4.jpg',
    './images/cats/cat5.jpg',
    './images/cats/cat6.jpg',
    './images/cats/cat7.jpg',
    './images/cats/cat8.jpg',
    './images/cats/cat9.jpg',
    './images/cats/cat10.jpg',
    './images/cats/cat11.jpeg',
    './images/cats/cat12.jpg',
    './images/cats/cat13.jpg',
    './images/cats/cat14.jpg',
    './images/cats/cat15.jpg',
    './images/cats/cat16.jpg',
    './images/cats/cat17.jpeg',
	];
  var randomAnswerPicker = answers[Math.floor(Math.random() * answers.length)];
  message.channel.sendFile(randomAnswerPicker);
	message.reply("Meow!");
  }
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };

  exports.help = {
    name: 'cat',
    description: 'Displays a random kitty.',
    usage: 'cat'
  };
