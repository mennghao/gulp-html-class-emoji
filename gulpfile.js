var gulp = require('gulp');
var emoji = require('./src/index.js');


//less to css
gulp.task('run', function(){
	return gulp.src('./example/index.html')
		.pipe(emoji())
		.pipe(gulp.dest('dist/'))
})