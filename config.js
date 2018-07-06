// ******************** Global Requirment

// ********** Imports
exports.shell = require('shelljs');
exports.yargs = require('yargs');
exports.chalk = require('chalk');

// ********** Functions
exports.checkGit = () => {
  if (!require('shelljs').which('git')) {
    require('shelljs').echo('git is needed to use this package');
    require('shelljs').exit(1);
  }
};

exports.errorHandler = (err, msg, yargs) => {
    if (err) console.log(err)// preserve stack
    console.error(require('chalk').bgBlack.red(msg))
    console.error('You should be doing', require('chalk').bgBlack.green(yargs.help()))
    process.exit(1)
};
