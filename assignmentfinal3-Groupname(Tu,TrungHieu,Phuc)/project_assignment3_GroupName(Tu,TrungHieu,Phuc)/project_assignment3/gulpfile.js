

'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCss = require('gulp-clean-css');
var uglify =require('gulp-uglify');
var rename =require('gulp-rename');
var changed= require('gulp-changed');

////////////////
// -scss/css
/////////////
var SCSS_SRC = './src/Assets/scss/**/*.scss';
var SCSS_DEST= './src/Assets/css';

//compile scss

gulp.task('sass', function(){
     gulp.src(SCSS_SRC)
    .pipe(sass().on('error', sass.logError))
    .pipe(minifyCss())
    .pipe(rename({suffix: '.min'}))
    .pipe(changed(SCSS_DEST))
    .pipe(gulp.dest(SCSS_DEST))
    .pipe(uglify())
})


/////delect change in SCSS

gulp.task('watch_scss', function(){
  gulp.watch(SCSS_SRC,['sass']);

})

///run task
gulp.task('default',['watch_scss']);

