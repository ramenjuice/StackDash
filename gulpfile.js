"use strict";

var gulp = require('gulp'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  rename = require('gulp-rename'),
    sass = require('gulp-sass'),
    maps = require('gulp-sourcemaps'),
     del = require('del');

gulp.task("concatScripts", function() {
    return gulp.src([
        'js/jquery.js',
        'js/sticky/jquery.sticky.js',
        'js/main.js'
        ])
    .pipe(maps.init())
    .pipe(concat('app.js'))
    .pipe(maps.write('./'))
    .pipe(gulp.dest('js'));
});

gulp.task("minifyScripts", ["concatScripts"], function() {
  return gulp.src("js/app.js")
    .pipe(uglify())
    .pipe(rename('app.min.js'))
    .pipe(gulp.dest('js'));
});

gulp.task('compileSass', function() {
  return gulp.src("./src/public/assets/sass/app.sass")
      .pipe(maps.init())
      .pipe(sass())
      .pipe(maps.write('./'))
      .pipe(gulp.dest('./src/public/css/'));
});

gulp.task('watchSass', function() {
  gulp.watch(['./src/public/assets/sass/*.sass','./src/public/assets/sass/**/*.sass'], ['compileSass']);
})

gulp.task('clean', function() {
  del(['dist', 'css/app.css*', 'js/app*.js*']);
});

gulp.task("build", ['minifyScripts', 'compileSass'], function() {
  return gulp.src(["css/app.css", "js/app.min.js", 'index.html',
                   "img/**", "fonts/**"], { base: './'})
            .pipe(gulp.dest('dist'));
});

gulp.task("default", ["build"]);
