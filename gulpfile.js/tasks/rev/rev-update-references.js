var gulp        = require('gulp')
var revRewrite  = require('gulp-rev-rewrite')
var projectPath = require('../../lib/projectPath')

// 2) Update asset references with reved filenames in compiled css + js
var revUpdateReferencesTask = function(){
  var manifest = gulp.src(projectPath(PATH_CONFIG.dest, "rev-manifest.json"))

  return gulp.src(projectPath(PATH_CONFIG.dest,'**/**.{css,js}'))
    .pipe(revRewrite({manifest: manifest}))
    .pipe(gulp.dest(PATH_CONFIG.dest))
}

gulp.task('rev-update-references', revUpdateReferencesTask)
module.exports = revUpdateReferencesTask