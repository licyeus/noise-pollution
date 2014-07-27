var gulp       = require('gulp'),
    livereload = require('gulp-livereload')
    connect = require('gulp-connect');

gulp.task('connect', function() {
  connect.server();
});

gulp.task('watch', [], function() {
  var server = livereload();
  gulp.watch(['js/**', 'css/**', 'partials/**', 'index.html']).on('change', function(file) {
    server.changed(file.path);
  });
});

gulp.task('dev', ['connect', 'watch']);

