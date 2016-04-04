var gulp = require('gulp');
var sass = require('gulp-sass');

//Styles
gulp.task('styles', function () {
  return gulp.src('./scss/**/*.scss') // Ok so, for my sass files...
    .pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError)) // compile those to CSS (change expanded to compressed to see the diff)
    .pipe(gulp.dest('./css')); // Then dump them in the CSS folder. k?
});

// Default task
gulp.task('default', ['styles', 'watch']);

// Watch
gulp.task('watch', function() {
  // Watch .scss files
  gulp.watch('./scss/**/*.scss', ['styles']);

});
