const Discord = require('discord.js');
const settings = require('../settings.json');
exports.run = function(client, message, args) {
let nicknameinput = args.slice(1).join(' ');
let member = message.guild.member(message.mentions.users.first())
if (message.mentions.users.size < 1) return message.reply(':x: You must mention someone in order to give a nickname to a user.').catch(console.error);
if (!message.guild.member(client.user).hasPermission('MANAGE_NICKNAMES')) return message.reply(':x: Incorrect permissions. Make sure it is (MANAGE_NICKNAMES) checked.').catch(console.error);
  let modlog = client.channels.find('name', settings.logchannel);
if (!modlog) return message.reply(':x: Log channel not found - make sure it is defined..').catch(console.error);
   if (!message.guild.member(member).kickable) {
     const embed = new Discord.RichEmbed()
     .setColor(0xDF3046)
     .setTimestamp()
     .setAuthor('Nickname System Error!',`${settings.image_link_negative}`)
     .setDescription('The user\'s role is higher than the bot\'s role.')
       .setFooter('SynerG Moderation Bot');
   message.channel.send({embed}).catch(console.error); return
 }
member.setNickname(nicknameinput);
if (nicknameinput.length < 1) {
  console.log(member.user.username + " has reset back to original name!")
} else {
console.log("Set " + member.user.username + " nickname named " + nicknameinput + "!")
}
if (nicknameinput.length < 1) {
  const embed = new Discord.RichEmbed()
    .setColor(0x76b352)
    .setTimestamp()
    .setAuthor('Successfully reset user\'s nickname!', `${settings.image_link_affirmative}`)
    .addField('User:', `${member.user.username}#${member.user.discriminator}`)
    .addField('Moderator:', `${message.author.username}#${message.author.discriminator}`)
     .setFooter('SynerG Moderation Bot');
  client.channels.get(modlog.id).send({embed}).catch(console.error);
message.channel.send(`:white_check_mark:  Successfully reset ${member.user.username}\'s nickname!`)
} else {
  const embed = new Discord.RichEmbed()
    .setColor(0x76b352)
    .setTimestamp()
    .setAuthor('Successfully nicknamed a user!', `${settings.image_link_affirmative}`)
    .addField('User:', `${member}`)
    .addField('Nickname:', nicknameinput)
    .addField('Moderator:', `${message.author}`)
     .setFooter('SynerG Moderation Bot');
  client.channels.get(modlog.id).send({embed}).catch(console.error);
message.channel.send(`:white_check_mark:  Successfully changed ${member.user.username}\'s nickname to **` + nicknameinput + "**")
}
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 3
};

exports.help = {
  name: 'setnick',
  description: 'Changes other user\'s nickname.',
  usage: 'setnick <mention> <nickname>'
};
