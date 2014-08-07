var gulp = require('gulp'),
    livereload = require('gulp-livereload'),
    less = require('gulp-less'),
    concat = require('gulp-concat'),
    jshint = require('gulp-jshint'),
    connect = require('gulp-connect');

gulp.task('connectDev', function () {
  connect.server({
    root: '.',
    port: 8000,
    livereload: true
  });
});

gulp.task('less', function() {
  return gulp.src('css/**/*.less')
    .pipe(less())
    .pipe(gulp.dest('css/'))
    .pipe(connect.reload());
});

gulp.task('html', function () {
  gulp.src('**/*.html').pipe(connect.reload());
});

gulp.task('scripts', function () {
  gulp.src('src/**/*.js').pipe(connect.reload());
});

gulp.task('watch', function () {
  gulp.watch('./**/*.html', ['html']);
  gulp.watch('css/**/*.less', ['less']);
  gulp.watch('src/**/*.js', ['scripts']);
});

gulp.task('dev', ['connectDev', 'watch']);
