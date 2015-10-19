/**
 * 命令行相关的信息和工具类方法暴露在此模块中。
 * @namespace fis.cli
 */
var cli = module.exports = {};

var path = require('path');
var IS_WIN = process.platform.indexOf('win') === 0;

/**
 * 命令行工具名字
 * @memberOf fis.cli
 * @name name
 * @defaultValue fis3
 */
cli.name = 'xue';

//commander object
cli.commander = null;
