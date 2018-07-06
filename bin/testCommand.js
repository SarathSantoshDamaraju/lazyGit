#! /usr/local/bin/node
const config = require('../config.js');

config.checkGit();

// Commad Body
require('yargs')
  .command('$0', 'Defualt Command', {}, (argv) => {
    console.log('starting up the', argv.app || 'default', 'app');
  })
  .command(['start [app]', 'run', 'up'], 'Start up an app', {}, (argv) => {
    console.log('starting up the', argv.app || 'default', 'app');
  })
  .command({
    command: 'configure <key> <value>',
    aliases: ['config', 'cfg'],
    desc: 'Set a config variable',
    builder: (yargs) => yargs.default('value', 'true'),
    handler: (argv) => {
      console.log(argv);
    }
  })
  .command({
    command: 'configure <key> <value>',
    aliases: ['config', 'cfg'],
    desc: 'Set a config variable',
    builder: (yargs) => {
      yargs
        .positional('shared_option', {
          describe: 'shared_option default value is ',
          default: false
        });},
    handler: (argv) => {
      console.log(argv);
    }
  })
  .example('')
  .help()
  .wrap(72)
  .argv;
