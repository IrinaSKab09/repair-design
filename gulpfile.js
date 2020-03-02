const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const cssnano = require('gulp-cssnano');
const rename = require('gulp-rename');

gulp.task('hello', function(done) {
  console.log('Привет, мир!');
  done();
});

// Static server
gulp.task('browser-sync', function() {
  browserSync.init({
      server: {
          baseDir: "./"
      }
  });
  gulp.watch("./*.html").on('change', browserSync.reload);
});

gulp.task('css-min', function() {
  return gulp.src('./css/*.css')
      .pipe(cssnano()) 
      .pipe(rename({suffix: '.min'})) 
      .pipe(gulp.dest('./css')); 
});