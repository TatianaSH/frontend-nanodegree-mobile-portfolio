var gulp = require('gulp'),
        //sass = require('gulp-ruby-sass'),
        //webserver = require('gulp-webserver'),
        uglify = require('gulp-uglify'),
        gutil = require('gulp-util'),
        concatify = require('gulp-concat'),
        sourcemaps = require('gulp-sourcemaps'),
        imagemin = require('gulp-imagemin'),
        minifyhtml = require('gulp-minify-html');
        minifyCSS = require('gulp-minify-css'),
        minifyInline = require('gulp-minify-inline'),
        debug = require('gulp-debug');
// Paths to various files
var paths = {
        scripts: ['**/*.js','!node_modules/**','!build/**','!gulpfile.js'],
        styles: ['scss/style.scss','scss/styles/*.scss','!build/**','!node_modules/**'],
        images: ['**/*.jpg','**/*.png','!build/**','!node_modules/**'],
        content: ['**/*.html','!build/**','!node_modules/**'],
        css:['**/*.css','!build/**','!node_modules/**']
}
// Compiles scss files and outputs them to build/css/*.css
/*gulp.task('styles', function() {
        return sass(paths.styles[0])
                                .pipe(gulp.dest('./build/css'))
});*/
// Concats & minifies js files and outputs them to build/js/app.js
gulp.task('scripts', function() {
        return gulp.src(paths.scripts)
                .pipe(debug())
                //.pipe(sourcemaps.init())
                .pipe(uglify().on('error', function(e) { console.log('\x07',e.message); return this.end(); }))
                        //.pipe(concatify('app.js'))
                //.pipe(sourcemaps.write())
                .pipe(gulp.dest('./build/'));
});
// Minifies our HTML files and outputs them to build/*.html
gulp.task('content', function() {
        return gulp.src(paths.content)
                .pipe(minifyInline())
                .pipe(minifyhtml({
                        empty: true,
                        quotes: true
                }))
                .pipe(gulp.dest('./build/'))
});
gulp.task('css', function() {
  return gulp.src(paths.css)
    .pipe(minifyCSS({keepBreaks:true}))
    .pipe(gulp.dest('./build/'))
});
// Optimizes our image files and outputs them to build/image/*
gulp.task('images', function() {
        return gulp.src(paths.images)
                                .pipe(imagemin({
                                        optimizationLevel: 5
                                }))
                                .pipe(gulp.dest('./build/'))
})
// Watches for changes to our files and executes required scripts
gulp.task('watch', function() {
        gulp.watch(paths.scripts, ['scripts']);
        //gulp.watch(paths.styles, ['styles']);
        gulp.watch(paths.content, ['content']);
        gulp.watch(paths.images, ['images']);
        gulp.watch(paths.css, ['css']);
});
// Launches a test webserver
gulp.task('webserver', function() {
        gulp.src('build')
                .pipe(webserver({
                        livereload: true,
                        port: 1111
                }));
});
gulp.task('default', ['scripts','content','images','css']);