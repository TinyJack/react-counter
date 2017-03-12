const gulp = require('gulp');
const webpack = require('webpack');
const uglify = require('gulp-uglify');
const stylus = require('gulp-stylus');
const plumber = require('gulp-plumber');
const webpackStream = require('webpack-stream');
const webserver = require('gulp-webserver');

gulp.task('js', done => {
    return gulp.src('src/*.js')
        .pipe(plumber())
        .pipe(webpackStream())
        .pipe(gulp.dest('dist/js/'));
});


gulp.task('webserver', function() {
  gulp.src('./dist')
    .pipe(webserver({
      livereload: true,
    }));
});


/** @gulp: default */
gulp.task('default', ['js', 'webserver']);
