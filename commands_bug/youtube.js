const yt = require("../plugins/youtube_plugin");
const Discord = require('discord.js');
exports.run = function(client, message, args) {
  try {
  	var yt = require("./youtube_plugin");
  	var youtube_plugin = new yt();
  } catch(e){
  	console.log("ERROR: Couldn't load Youtube plugin!\n"+e.stack);
  }
  youtube_plugin.send(args.join(" "), message.channel, client);
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'youtube',
  description: 'Gets a Youtube video link and shows it here.',
  usage: 'youtube <string>'
};
