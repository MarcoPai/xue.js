/**
 * 命令行相关的信息和工具类方法暴露在此模块中。
 * @namespace fis.cli
 */
var cli = module.exports = {};
var util = require('../lib/util.js');
var path = require('path');
var IS_WIN = process.platform.indexOf('win') === 0;
cli.module = require('./module.js');
/**
 * package.json 中的信息
 * @memberOf fis.cli
 * @name info
 */
// cli.info = util.readJSON(path.dirname(__dirname) + '/../package.json');
cli.info = require(path.dirname(__dirname) + '/../package.json');

cli.commander = require('commander');

//定义参数,以及参数内容的描述  
cli.commander  
    .version(cli.info.version)
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

cli.commander
  .command('add')
  .description('添加模块')
  .action(function(){
    console.log('已添加');
  });

cli.commander
  .command('init')
  .description('初始化项目')
  .action(function(){
    cli.module.log('正在安装');
    console.log('.......已完成');
  });

cli.commander
  .command('setup')
  .description('run remote setup commands')
  .action(function() {
    console.log('setup');
  });
cli.commander
  .command('v')
  .description('查看版本号')
  .option("-e, --exec_mode <mode>", "Which exec mode to use")
  .action(function(){
    logo = [
    ' * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *',
    ' *                                                                         *',
    ' * /\\\\\\           /\\\\\\      /\\\\\\         /\\\\\\         /\\\\\\\\\\\\\\\\\\\\\\\\        *',
    ' * \\///\\\\\\      /\\\\\\//      \\/\\\\\\        \\/\\\\\\       /\\\\\\//////////        *',
    ' *    \\///\\\\\\ /\\\\\\//         \\/\\\\\\        \\/\\\\\\      \\/\\\\\\                 *',
    ' *       \\///\\\\\\//            \\/\\\\\\        \\/\\\\\\      \\/\\\\\\\\\\\\\\\\\\\\\\        *',
    ' *        /\\\\\\///\\\\\\           \\/\\\\\\        \\/\\\\\\      \\/\\\\\\///////        *' ,
    ' *      /\\\\\\//  \\///\\\\\\         \\/\\\\\\        \\/\\\\\\      \\/\\\\\\              *',
    ' *    /\\\\\\//       \\///\\\\\\       \\///\\\\\\\\\\\\\\\\\\\\\\\\/       \\///\\\\\\\\\\\\\\\\\\\\\\\\  *',
    ' *    \\///            \\///          \\////////////           \\////////////  *',
    ' *                                                                         *',
    ' *                                 Version:' + cli.info.version + '                           *',
    ' *                                                                         *',
    ' * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *'
    ].join('\n');
    
    // logo = [
    // '',
    // '********************************',
    // '**  __    __  _   _   _____   **',
    // '**  \\ \\  / / | | | | | ____|  **',
    // '**   \\ \\/ /  | | | | | |__    **',
    // '**    }  {   | | | | |  __|   **',
    // '**   / /\\ \\  | |_| | | |___   **',
    // '**  /_/  \\_\\ \\_____/ |_____|  **',
    // '**                            **',
    // '**           v'+ cli.info.version +'           **',
    // '********************************',
    // ''
    // ].join('\n');
    console.log(logo);
    
  });

function range (val) {  
    return val.split('..').map(Number);  
}  
  
function list (val) {  
    return val.split(',')  
}  
  
  
//添加额外的文档描述  
cli.commander.on('help', function() {  
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
cli.commander.parse(process.argv)  
  
