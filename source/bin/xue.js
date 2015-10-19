#!/usr/bin/env node

// var fs = require("fs"),
//     path = process.cwd();

// var run= function (obj) {
//     if(obj[0] === '-v'){
//         console.log('version is 1.0.0');
//     }else if(obj[0] === '-h'){
//         console.log('Useage:');
//         console.log('  -v --version [show version]');
//     }else{
//         fs.readdir(path, function(err, files){
//             if(err){
//                 return console.log(err);
//             }
//             for(var i = 0; i < files.length; i += 1){
//                 console.log(files[i]);
//             }
//         });
//     }
// };
// //获取除第一个命令以后的参数，使用空格拆分
// run(process.argv.slice(2)); 

var program = require('commander');
program
  .version('0.0.1')
  .option('-C, --chdir <path>', 'change the working directory')
  .option('-c, --config <path>', 'set config path. defaults to ./deploy.conf')
  .option('-T, --no-tests', 'ignore test hook')

program
  .command('add')
  .description('添加模块')
  .action(function(){
    console.log('已添加');
  });

program
  .command('init')
  .description('初始化项目')
  .action(function(){
    console.log('.......已完成');
  });

program
  .command('setup')
  .description('run remote setup commands')
  .action(function() {
    console.log('setup');
  });

// program
//   .command('exec <cmd>')
//   .description('run the given remote command')
//   .action(function(cmd) {
//     console.log('exec "%s"', cmd);
//   });

program
  .command('teardown <dir> [otherDirs...]')
  .description('run teardown commands')
  .action(function(dir, otherDirs) {
    console.log('dir "%s"', dir);
    if (otherDirs) {
      otherDirs.forEach(function (oDir) {
        console.log('dir "%s"', oDir);
      });
    }
  });

program
  .command('*')
  .description('deploy the given env')
  .action(function(env) {
    console.log('deploying "%s"', env);
  });

program.parse(process.argv);