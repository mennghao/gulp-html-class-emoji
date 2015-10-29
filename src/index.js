var gutil = require('gulp-util');
var through = require('through2');
var PluginError = gutil.PluginError;

var emoji = require('./emoji.js').getEmojiMap();
var reg = /class="(.*?)"/ig;
var reg_ex = /["'](.*)["']/ig;

function replace(str){
	return str.replace(reg, function($1){

		var info = $1.replace(reg_ex, function($2){

			var data = $2.split('').map(function(x){
				return emoji[x] ? emoji[x] : x;
			}).join('');

			return data;
		});

		return info;
	});
}

module.exports = function () {
    return through.obj(function (file, enc, cb) {
		if (file.isNull()) return cb(null, file);
    	if (file.isStream()) return cb(new PluginError('gulp-html-class-emoji', 'Streaming not supported'));
    	
    	var content = replace(file.contents.toString());

    	file.contents = new Buffer(content);
		
		this.push(file);

		cb();

    });
};


