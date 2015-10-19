// default settings. fis3 release
/**
 * 目录结构：
 * 	│
 * 	├──dist
 * 	│	├──static
 * 	│	│	├──images
 * 	│	│	├──style
 * 	│	│	└──script
 * 	│	│
 * 	│	├──pages
 * 	│	│	├── index.html
 * 	│	│	├── list.html
 * 	│	│	└── view.html
 * 	│	│
 * 	│	└──test
 * 	│
 * 	├──sourse
 * 	│	├──pages
 * 	│	│	├── index.tmpl
 * 	│	│	├── list.tmpl
 * 	│	│	└── view.tmpl
 * 	│	│
 * 	│	├──widget
 * 	│	│	├──header
 * 	│	│	│	├──images
 * 	│	│	│	├── header.tpl
 * 	│	│	│	├── header.js
 * 	│	│	│	└── header.sass
 * 	│	│	│	
 * 	│	│	├──nav
 * 	│	│	└──list
 * 	│	│
 * 	│	├──static
 * 	│	│	├──js
 * 	│	│	└──css
 * 	│	│
 * 	│	├──lib
 * 	│	│	├──jQuery
 * 	│	│	└──Bootstrap
 * 	│	│
 * 	│	└──test
 * 	│	 	└──data
 * 	│	 	 	└── list.json
 * 	└──config
 * 
 * 
 */
// Global start
fis.match('*.{js,css}', {
  useHash: true // 开启 md5 戳
});



fis.match('::image', {
  useHash: true
});

fis.match('*.js', {
  optimizer: fis.plugin('uglify-js')
});

fis.match('*.css', {
  optimizer: fis.plugin('clean-css')
});

fis.match('*.png', {
  optimizer: fis.plugin('png-compressor')
});

// Global end

// default media is `dev`
// fis.media('dev')
//   .match('*', {
//     useHash: false,
//     optimizer: null
//   });

// extends GLOBAL config
// fis.media('production');

// ===================================== //

// 支持内置语法，无非就三种：JS、CSS、HTML
// fis.match('*.tmpl', {
//   isJsLike: true
// });
fis.match('*.tpl', {
  isHtmlLike: true
});
fis.match('*.sass', {
  isCssLike: true
});

// 所有的文件产出到 static/ 目录下
fis.match('*', {
    release: '/dist/$0'
});

// 所有模板放到 tempalte 目录下
fis.match('*.html', {
    release: '/dist/pages/$0',
	url: '/pages/$0'

});

fis.match('*.js', {
	optimizer: fis.plugin('uglify-js'),
	release: '/dist/static/script/$0',
	url: '/static/js$0'
});


fis.match('*.css', {
	optimizer: fis.plugin('uglify-js'),
	release: '/dist/static/style/$0',
	url: '/static/css$0'
});

fis.match('/images/(*.{png,gif,jpg})', {
	release: '/dist/static/img/$0',
	url: '/static/img$0'
});

// widget源码目录下的资源被标注为组件
fis.match('/widget/**/*', {
    isMod: true
});

// widget下的 js 调用 jswrapper 进行自动化组件化封装
fis.match('/widget/**/*.js', {
    postprocessor: fis.plugin('jswrapper', {
        type: 'commonjs'
    })
});

fis.match('*.tmpl', {
	isHtmlLike: true,
	release: '/dist/pages/'
});