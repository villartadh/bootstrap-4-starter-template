/*
Bootstrap 4.0.0-alpha.6 Starter Template
Version: 1.0.0
Author: Jonathan Villarta
*/

const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');

/* Compile SASS
------------------------------------------------*/
gulp.task('sass', function(){
  return gulp.src([
    'node_modules/bootstrap/scss/bootstrap.scss',
    'src/scss/*.scss'])
    .pipe(sass())
    .pipe(gulp.dest("src/css"))
    .pipe(browserSync.stream());
});

/* Watch SASS & SERVE
------------------------------------------------*/
gulp.task('serve', ['sass'], function(){
  browserSync.init({
    server: "./src"
  });

  gulp.watch(['node_modules/bootstrap/scss/bootstrap.scss', 'src/scss/*.scss'], ['sass']);
  gulp.watch("src/*.html").on('change', browserSync.reload);

});

/* Move JS files to SRC
------------------------------------------------*/
gulp.task('js', function(){
  return gulp.src([
    'node_modules/bootstrap/dist/js/bootstrap.min.js',
    'node_modules/jquery/dist/jquery.min.js',
    'node_modules/tether/dist/js/tether.min.js'])
    .pipe(gulp.dest("src/js"))
    .pipe(browserSync.stream());
});

/* Move Font Awesome Fonts folder to SRC
------------------------------------------------*/
gulp.task('fonts', function(){
  return gulp.src('node_modules/font-awesome/fonts/*')
  .pipe(gulp.dest("src/fonts"));
});

/* Move Font Awesome .css file
------------------------------------------------*/
gulp.task('fa', function(){
  return gulp.src('node_modules/font-awesome/css/font-awesome.min.css')
    .pipe(gulp.dest("src/css"));
});

/* Running All GULP Tasks
------------------------------------------------*/
gulp.task('default', ['js', 'serve', 'fa', 'fonts']);
