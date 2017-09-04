const chalk = require('chalk');
module.exports = client => {
  console.log(chalk.bgRed.white(`You have been disconnected at ${new Date()}`));
};
