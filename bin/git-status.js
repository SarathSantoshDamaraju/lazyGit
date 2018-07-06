#! /usr/local/bin/node
const config = require('../config.js');

config.checkGit();

// Commad Body
config.yargs
  .command({
    command: '$0 [path]',
    describe: config.chalk.bgBlack.green('Displays the DIFF between current index and HEAD. Know more at - http://bit.ly/2tZNir0'),
    builder: (yargs) => {
        yargs
          .positional('path', {
            describe: 'path default value is ',
            type: 'string',
            default: ''
          });
    },
    handler: (argv) => {
      config.shell.exec(`git status ${argv.path}`);
    }
  })
  .command({
    command: 's',
    aliases: ['short'],
    describe: config.chalk.bgBlack.green('Gives the output in the short-format. Know more at - http://bit.ly/2zfmlER'),
    handler: () => {
      config.shell.exec('git status -s');
    }
  })
  .command({
    command: 'sh',
    aliases: ['show-stash'],
    describe: config.chalk.bgBlack.green('Show the number of entries currently stashed away. Know more at - http://bit.ly/2u9d4bq'),
    handler: () => {
      config.shell.exec('git status --show-stash');
    }
  })
  .command({
    command: 'v',
    aliases: ['verbose'],
    describe: config.chalk.bgBlack.green('Shows the textual changes that are also staged to be committed. Know more at - http://bit.ly/2MS1lpm'),
    handler: () => {
      config.shell.exec('git status --show-stash');
    }
  })
  .command({
    command: 'vv',
    describe: config.chalk.bgBlack.green('Shows the changes in the working tree that have not yet been staged. Know more at - http://bit.ly/2MS1lpm'),
    handler: () => {
      config.shell.exec('git status -v -v');
    }
  })
  .command({
      command: 'u [options]',
      aliases: ['untracked'],
      describe: config.chalk.bgBlack.green('Show untracked files. Know more at - http://bit.ly/2J3nJK6'),
      builder: (yargs) => {
        yargs
        .positional('options', {
          describe: 'options default value is ',
          type: 'string',
          default: 'all'
        });
      },
      handler: (argv) => {
          config.shell.exec(`git status -u${argv.options}`)
      }
  })
  .help('man')
  .alias('man', 'help')
  .example(config.chalk.bgBlack.blue('gs'), config.chalk.bgBlack.blue('gs folder/'))
  .example(config.chalk.bgBlack.blue('gs s'), config.chalk.bgBlack.blue('gs sh'))
  .example(config.chalk.bgBlack.blue('gs vv'))
  .fail((msg, err, yargs) => config.errorHandler(err, msg, yargs))
  .argv;
