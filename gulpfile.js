const gulp = require('gulp');
const webpack = require('webpack');
const uglify = require('gulp-uglify');
const stylus = require('gulp-stylus');
const plumber = require('gulp-plumber');
const named = require('vinyl-named');
const webpackStream = require('webpack-stream');
const webserver = require('gulp-webserver');

const debug = process.env.NODE_ENV !== 'production';

gulp.task('js', done => {
    return gulp.src('src/js/**/*.jsx')
        .pipe(plumber())
        .pipe(webpackStream({
            watch: debug,
            output: {
                filename: 'index.js'
            },
            module: {
                 loaders: [ { test: /\.jsx?$/, loader: 'babel' } ],
                 query: {
                        presets: [
                            require.resolve('babel-preset-es2015'),
                            require.resolve('babel-preset-react'),
                        ]
                    },
               
            }
             
        }))
        .pipe(gulp.dest('dist/js/'));
});


gulp.task('webserver', () => {
    gulp.src('./dist')
        .pipe(plumber())
        .pipe(webserver({
            livereload: true,
        }));
});

gulp.task('assets', () => {
    gulp.src('./src/index.html')
        .pipe(named())
        .pipe(gulp.dest('./dist/'))
})


/** @gulp: default */
gulp.task('default', ['js', 'assets', 'webserver']);
