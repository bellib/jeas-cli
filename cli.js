#!/usr/bin/env node

const program = require('commander') ;
const chalk = require('chalk') ;
const figlet = require('figlet') ;
const inquirer = require('inquirer') ;
const generater = require('./lib/generater') ;
 
program
  .option('-f, --force', 'force installation')
  .parse(process.argv);

var pkgs = program.args;

if (!pkgs.length) {
  console.error('packages required');
  process.exit(1);
}

console.log();
if (program.force) generater(pkgs) //console.log(chalk.green( "creating ... "));
console.log(' install : %s', pkgs[0]);
/*pkgs.forEach(function(pkg){
  console.log('  install : %s', pkg);
});*/
console.log();