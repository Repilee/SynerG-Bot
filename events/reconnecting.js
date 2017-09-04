const chalk = require('chalk');
module.exports = client => {
  console.log(chalk.bgWhite.black(`Reconnecting at ${new Date()}`));
};
