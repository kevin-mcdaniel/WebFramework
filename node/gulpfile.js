//Include Gulp
var gulp = require('gulp');

//Plugins
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

//Lint
gulp.task('lint', function(){
	return gulp.src('/js/*.js')
		.pipe(jshint())
		.pipe(jshint.reporter('default'));
});

//Sass
gulp.task('sass', function(){
	return gulp.src('scss/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('css'));
});

//Watch
gulp.task('watch', function(){
	gulp.watch('scss/*.scss', ['sass']);
	gulp.watch('js/*.js', ['lint']);
});

//Default
gulp.task('default', ['lint', 'sass', 'watch']);