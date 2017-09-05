exports.run = function(client, message, args) {
client.user.setStatus('invisible')
client.channels.get("282945594132267018").send("@here **The bot is now offline.**");
process.exit(1);
console.log("Bot is now offline, relaunch the program to connect the bot.")
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 5
};

exports.help = {
  name: 'shutdown',
  description: 'Shuts down the bot (developer only)',
  usage: 'shutdown'
};
