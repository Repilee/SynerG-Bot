const Discord = require('discord.js');
const settings = require('../settings.json');
module.exports = (message) => {
     let client = message.client;
	if (!message.content.startsWith(settings.prefix)) return;
  let command = message.content.split(' ')[0].slice(settings.prefix.length);
  let params = message.content.split(' ').slice(1);
  let perms = client.elevation(message);
  let cmd;
  if (client.commands.has(command)) {
    cmd = client.commands.get(command);
  } else if (client.aliases.has(command)) {
    cmd = client.commands.get(client.aliases.get(command));
  }
  if (cmd) {
		if (message.channel.type === 'dm') {
		} else {
				if (perms < cmd.conf.permLevel) return
			cmd.run(client, message, params, perms);
}
}
if (!cmd) {
	const embed = new Discord.RichEmbed()
		.setColor(0xf44542)
		.setTimestamp()
		.setAuthor('Command Error!', 'http://i.imgur.com/tSlupol.png')
		.setDescription('The command you typed is not vaild. For a list of commands, run $help.')
		 .setFooter('SynerG moderation bot');
		 message.channel.send({embed}).then(
	 response => response.delete(3500).catch(error => console.log(error.stack)))
}
};
