var gulp       = require('gulp'),
    livereload = require('gulp-livereload');

gulp.task('watch', [], function() {
  var server = livereload();
  gulp.watch(['js/**', 'css/**', 'partials/**', 'index.html']).on('change', function(file) {
    server.changed(file.path);
  });
});

