var gulp = require('gulp');
var uglify = require('gulp-uglify-cli');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
// var normal = require('normalize.css');

var jsFiles = 'assets/js/**/*.js',
	jsDest = 'site/static/js',
	cssFiles = 'assets/scss/*.scss',
	cssDest = 'site/themes/patternlib/static/css';

gulp.task('scripts', function(){
	return gulp.src(jsFiles)
  	.pipe(concat('medichecks.js'))
    .pipe(gulp.dest(jsDest))
    .pipe(uglify())
    .pipe(rename('medichecks.min.js'))
    .pipe(gulp.dest(jsDest));
});

gulp.task('css', function() {
	return gulp.src(cssFiles)
	.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
	.pipe(gulp.dest(cssDest));
});

gulp.task('normalize', function() {
	return gulp.src('')
});

gulp.task('default', ['scripts','css']);

gulp.task('watch', function() {
	gulp.watch('assets/js/**/*.js', ['scripts']);
	gulp.watch('assets/scss/**/*.scss', ['css']);
	gulp.watch('assets/framework/bootstrap-sass-3.3.7/assets/stylesheets/**/*.scss', ['css']);
});