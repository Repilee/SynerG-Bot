const Discord = require('discord.js');
const settings = require('../settings.json');
exports.run = function(client, message, args) {
  let perms = client.elevation(message);
  let permlvl = 0;
  let mod_role = message.guild.roles.find('name', settings.modrolename);
  if (mod_role && message.member.roles.has(mod_role.id)) permlvl = 2;
  let admin_role = message.guild.roles.find('name', settings.adminrolename);
  if (admin_role && message.member.roles.has(admin_role.id)) permlvl = 3;
  let owner_role = message.guild.roles.find('name', settings.ownerrolename);
  if (owner_role && message.member.roles.has(owner_role.id)) permlvl = 4;
  if (message.author.id === settings.botdeveloperid) permlvl = 5;
  return message.reply("Your permission level is level **" + permlvl + "**")
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'permlvl',
  description: 'Checks your permission level.', /*Check your permission, said nobody ever*/
  usage: 'permlvl'
};
