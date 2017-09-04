module.exports = (member) => {
      member.send(`Welcome, **${member.user.username}**! Your first step is to read the rules. If you're going to talk here, you hereby agree to the rules.`).catch(e => {
          member.guild.defaultChannel.send(`I am sorry that you disabled **Direct Messages** but I will say it here. Welcome and please read the rules! ${member}`);
  })
};
