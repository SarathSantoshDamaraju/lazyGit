#! /usr/local/bin/node
const config = require('../config.js');

config.checkGit();

// Commad Body
config.yargs
  .command({
    command: '$0 [path]',
    describe: config.chalk.bgBlack.green('Add files to the Index for Commit. Know more at - http://bit.ly/2lZn5V9'),
    builder: (yargs) => {
      yargs
        .positional('path', {
          describe: 'path default value is ',
          type: 'string',
          default: '.'
        });
    },
    handler: (argv) => {
      config.shell.exec(`git add ${argv.path}`);
    }
  })
  .command({
    command: 'n',
    aliases: ['dry','dry-run'],
    describe: config.chalk.bgBlack.green('Don’t actually add the file(s), just show if they exist and/or will be ignored. Know more at - http://bit.ly/2KEHYUj'),
    handler: () => {
      config.shell.exec('git add -n');
    }
  })
  .command({
    command: 'v',
    aliases: ['verbose'],
    describe: config.chalk.bgBlack.green('Verbose. Know more at - http://bit.ly/2Nw4xID'),
    handler: () => {
      config.shell.exec('git add -v');
    }
  })
  .command({
    command: 'i',
    aliases: ['interactive'],
    describe: config.chalk.bgBlack.green('Add modified contents in the working tree interactively to the Index. Know more at - http://bit.ly/2tYzqNt'),
    handler: () => {
      config.shell.exec('git add -i');
    }
  })
  .command({
    command: '! [path]',
    aliases: ['no-all','ignore-removal'],
    describe: config.chalk.bgBlack.green('Add files in a given folder to the Index. Know more at - http://bit.ly/2NtHbmE'),
    builder: (yargs) => {
        yargs
          .positional('path', {
            describe: 'path default value is ',
            type: 'string',
            default: ''
          });
      },
    handler: (argv) => {
      config.shell.exec(`git add --no-all ${argv.path}`);
    }
  })
  .help('man')
  .alias('man', 'help')
  .example(config.chalk.bgBlack.blue('g.'), config.chalk.bgBlack.blue('g. n'))
  .example(config.chalk.bgBlack.blue('g. i'), config.chalk.bgBlack.blue('g. v'))
  .example(config.chalk.bgBlack.blue('g. /src/helpers/'))
  .fail((msg, err, yargs) => config.errorHandler(err, msg, yargs))
  .argv;
