var gulp = require('gulp'),
    fontcustom = require('gulp-fontcustom');

gulp.task('makeiconfont', function(){
  return gulp.src("./svg/**/*.svg")
  .pipe(fontcustom({
    font_name: 'iconFont'
  }))
  .pipe(gulp.dest("./output"));
});
