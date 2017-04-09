var gulp = require('gulp');
var connect = require('gulp-connect');
 
gulp.task('connect', function() {
  connect.server({
    root: 'src',
    livereload: true
  });
});

gulp.task('watch', function () {
  gulp.watch('src/**/*', function () {
    gulp.src('src/**/*')
    .pipe(connect.reload());
  });
});

gulp.task('default', ['connect', 'watch']);