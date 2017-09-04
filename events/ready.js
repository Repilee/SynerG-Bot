const chalk = require('chalk');
module.exports = client => {
  console.log(chalk.bgGreen.white('SynerG is now ready to help! Use !cmds to view a list of commands.'));
 client.user.setGame("banhammer");
}
