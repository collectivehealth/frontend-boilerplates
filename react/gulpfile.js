var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var connect = require('gulp-connect');
var open = require('gulp-open');
var port = process.env.port || 8080;

gulp.task('browserify', function() {
  browserify('./src/app/app.js')
    .transform('babelify', {presets: ["react"]})
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('./src/dist'));
});

gulp.task('connect', function() {
  connect.server({
    root: 'src',
    port: port,
    livereload: true
  });
});

gulp.task('open', function(){
  var options = {
      url: 'http://localhost:' + port,
  };
  gulp.src('./src/index.html').pipe(open('', options));
});

gulp.task('default', ['browserify']);
gulp.task('serve', ['browserify', 'connect', 'open']);