'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass');


gulp.task('sass', function() {
    gulp.src('../App/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('../App/css'));
});

gulp.task('sass:watch', function() {
    gulp.watch('../App/sass/**/*.scss', ['sass']);
});