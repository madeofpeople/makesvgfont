var gulp = require('gulp'),
    fontcustom = require('gulp-fontcustom');

gulp.task('makeiconfont', function(){
  return gulp.src("./svg/**/*.svg")
  .pipe(fontcustom({
    font_name: 'portsideIcons'
  }))
  .pipe(gulp.dest("./output"));
});
