/*eslint-env node */

var gulp = require('gulp');
var sass = require('gulp-sass')
var autoprefixer = require('gulp-autoprefixer')
var browserSync = require('browser-sync').create();


// Watcher die gucken ob sich HTML oder css (bzw sass) verändert
// Konfig von browserSync
gulp.task('browser-sync', ['sass'], function() {
    browserSync.init({
        browser: "google chrome",
        server:  {
            baseDir: "./"
        }
    });
    gulp.watch("sass/**/*.scss", ['sass']);
    gulp.watch("*.html").on('change', browserSync.reload);
    gulp.watch("js/*.js").on('change', browserSync.reload);
});


// Sass in CSS und dann in CSS Ordner
gulp.task('sass', function() {
  gulp.src('sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'))
    .pipe(browserSync.stream());

});

gulp.task('default', ['browser-sync']);
