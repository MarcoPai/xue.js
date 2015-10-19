'use strict';

var fs = require('fs'),
  pth = require('path'),
  crypto = require('crypto'),
  Url = require('url'),
  _exists = fs.existsSync || pth.existsSync,
  toString = Object.prototype.toString;
var _ = module.exports = {};


/**
 * 读取文件内容
 * @param  {String} path    路径
 * @param  {Boolean} convert 是否使用text方式转换文件内容的编码 @see readBuffer
 * @return {String}         文件内容
 * @memberOf fis.util
 * @name read
 * @function
 */
_.read = function(path, convert) {
  var content = false;
  if (_exists(path)) {
    content = fs.readFileSync(path);
    
  } else {
    console.error('unable to read file[%s]: No such file or directory.', path);
  }
  return content;
};

/**
 * 读取JSON文件
 * @param  {String} path 路径
 * @return {Object}      JSON文件内容JSON.parse后得到的对象
 * @memberOf fis.util
 * @name readJson
 * @function
 */
_.readJSON = function(path) {
  var json = _.read(path),
    result = {};
  try {
    result = JSON.parse(json);
  } catch (e) {
    console.error('parse json file[%s] fail, error [%s]', path, e.message);
  }
  return result;
};
