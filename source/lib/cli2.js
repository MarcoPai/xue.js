/**
 * 命令行相关的信息和工具类方法暴露在此模块中。
 * @namespace fis.cli
 */
var cli = module.exports = {};
var util = require('../lib/util.js');
var path = require('path');
var IS_WIN = process.platform.indexOf('win') === 0;
/**
 * package.json 中的信息
 * @memberOf fis.cli
 * @name info
 */
var info = util.readJSON(path.dirname(__dirname) + '/../package.json');

/**
 * 命令行工具名字
 * @memberOf fis.cli
 * @name name
 * @defaultValue fis3
 */
cli.name = 'xue';

cli.commander = null;
var program = require('commander');

//定义参数,以及参数内容的描述  
program  
    .version(info.version)
    .usage('[options] [value ...]')
    .option('-m, --message <string>', 'a string argument')
    .option('-i, --integer <n>', 'input a integet argument.', parseInt) 
    .option('-f, --float <f>', 'input a float arg', parseFloat)
    .option('-l, --list <items>', 'a list', list)
    .option('-r, --range <a>..<b>', 'a range', range)
  .option('-C, --chdir <path>', 'change the working directory')
  .option('-c, --config <path>', 'set config path. defaults to ./deploy.conf')
  .option('-T, --no-tests', 'ignore test hook')
  .option('-v, --v', 'ver', 'ver')

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
program
  .command('v')
  .description('查看版本号')
  .option("-e, --exec_mode <mode>", "Which exec mode to use")
  .action(function(){
    logo = [
    '',
    '********************************',
    '**  __    __  _   _   _____   **',
    '**  \\ \\  / / | | | | | ____|  **',
    '**   \\ \\/ /  | | | | | |__    **',
    '**    }  {   | | | | |  __|   **',
    '**   / /\\ \\  | |_| | | |___   **',
    '**  /_/  \\_\\ \\_____/ |_____|  **',
    '**                            **',
    '**           v'+ info.version +'           **',
    '********************************',
    ''
    ].join('\n');
    console.log(logo);
    
  });
// program
//   .command('exec <cmd>')
//   .description('run the given remote command')
//   .action(function(cmd) {
//     console.log('exec "%s"', cmd);
//   });

// program
//   .command('teardown <dir> [otherDirs...]')
//   .description('run teardown commands')
//   .action(function(dir, otherDirs) {
//     console.log('dir "%s"', dir);
//     if (otherDirs) {
//       otherDirs.forEach(function (oDir) {
//         console.log('dir "%s"', oDir);
//       });
//     }
//   });

// program
//   .command('*')
//   .description('deploy the given env')
//   .action(function(env) {
//     console.log('deploying "%s"', env);
//   });

// program.parse(process.argv);



function range (val) {  
    return val.split('..').map(Number);  
}  
  
function list (val) {  
    return val.split(',')  
}  
  
  
//添加额外的文档描述  
program.on('help', function() {  
    console.log('   Examples:')  
    console.log('')  
    console.log('       # input string, integer and float')  
    console.log('       $ ./nodecmd.js -m \"a string\" -i 1 -f 1.01')  
    console.log('')  
     
    console.log('       # input range 1 - 3')  
    console.log('       $ ./nodecmd.js -r 1..3')  
    console.log('')  
     
    console.log('       # input list: [1,2,3]')  
    console.log('       $ ./nodecmd.js -l 1,2,3')  
    console.log('')  
});  
  
//解析commandline arguments  
program.parse(process.argv)  
  
//输出结果  
// console.info('--messsage:')  
// console.log(program.message);  
  
// console.info('--integer:')  
// console.log(program.integer)  
  
// console.info('--range:')  
// console.log(program.range)  
  
// console.info('--list:')  
// console.log(program.list)  
//commander object