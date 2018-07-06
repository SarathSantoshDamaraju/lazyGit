#! /usr/local/bin/node
const config = require('../config.js');

config.checkGit();

// Commad Body
config.yargs
  .command({
    command: '$0',
    describe: config.chalk.bgBlack.green('Create an empty Git repository or reinitialize an existing one. Know more at - http://bit.ly/2m2Ke9f'),
    handler: (argv) => {
      config.shell.exec('git init');
    }
  })
  .command({
    command: 'q',
    aliases: ['quiet'],
    describe: config.chalk.bgBlack.green('Only print error and warning messages; all other output will be suppressed. Know more at - http://bit.ly/2tXPSxA'),
    handler: (argv) => {
      config.shell.exec('git init -q');
    }
  })
  .command({
    command: 'b',
    aliases: ['bare'],
    describe: config.chalk.bgBlack.green('Create a bare repository. Know more at - http://bit.ly/2NtHbmE'),
    handler: (argv) => {
      config.shell.exec('git init --bare');
    }
  })
  .command({
    command: 't <template_dir>',
    aliases: ['template'],
    describe: config.chalk.bgBlack.green('Specify the directory from which templates will be used. Know more at - http://bit.ly/2Nuz1dV'),
    handler: (argv) => {
      config.shell.exec(`git init --template=${argv.template_dir}`);
    }
  })
  .command({
    command: 'dir <git_dir>',
    aliases: ['separate-git-dir'],
    describe: config.chalk.bgBlack.green('Create a text file there containing the path to the actual repository. Know more at - http://bit.ly/2KDSOtF'),
    handler: (argv) => {
      config.shell.exec(`git init --separate-git-dir=${argv.git_dir}`);
    }
  })
  .command({
    command: 's [shared_option]',
    aliases: ['shared'],
    describe: config.chalk.bgBlack.green('Specify that the Git repository is to be shared amongst several users. Know more at - http://bit.ly/2KXgPaY'),
    builder: (yargs) => {
      yargs
        .positional('shared_option', {
          describe: 'shared_option default value is ',
          default: false
        });
    },
    handler: (argv) => {
      config.shell.exec(`git init --shared=${argv.shared_option}`);
    }
  })
  .help('man')
  .alias('man', 'help')
  .example(config.chalk.bgBlack.blue('g! [options]'), config.chalk.bgBlack.blue('g! q'))
  .example(config.chalk.bgBlack.blue('g! b'), config.chalk.bgBlack.blue('g! t some_folder/'))
  .example(config.chalk.bgBlack.blue('g! s true'))
  .fail((msg, err, yargs) => config.errorHandler(err, msg, yargs))
  .argv;
