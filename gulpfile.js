var gulp = require('gulp'),
	sass = require('gulp-sass'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
	argv = require('yargs').argv,
	gulpif = require('gulp-if'),
	imagemin = require('gulp-imagemin'),
	isProduction = (argv.production === undefined) ? false : true;

gulp.task('sass', function(){
	gulp.src('_src/sass/**/*.scss')
		.pipe(sass({ outputStyle: (isProduction) ? 'compressed': '' }).on('error', sass.logError))
		.pipe(gulp.dest('assets/css'));
});

gulp.task('vendor', function(){
	gulp.src('_src/js/vendor/**/*.js')
		.pipe(concat('vendor.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('assets/js'));
});

gulp.task('scripts', function(){
	gulp.src(['_src/js/**/*.js', '!_src/js/vendor/**/*.js'])
		.pipe(gulpif(isProduction, uglify()))
		.pipe(gulp.dest('assets/js'));
});
gulp.task('images', function(){
	gulp.src(['_src/img/**/*'])
		.pipe(imagemin())
		.pipe(gulp.dest('assets/img'));
});

gulp.task('watch', function(){
	gulp.watch('_src/sass/**/*.scss', ['sass']);
	gulp.watch('_src/img/**/*', ['images']);
	gulp.watch(['_src/js/**/*.js', '!_src/js/vendor/**/*.js'], ['scripts']);
	gulp.watch(['_src/js/vendor**/*.js', '!_src/js/**/*.js'], ['vendor']);
});

gulp.task('default', ['sass', 'vendor', 'scripts', 'images', 'watch']);
gulp.task('build', ['sass', 'vendor', 'scripts', 'images']);