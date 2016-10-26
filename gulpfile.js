var gulp        = require('gulp');
var del         = require('del');
var browserSync = require('browser-sync').create();
var concat      = require('gulp-concat');
var imagemin    = require('gulp-imagemin');
var jshint      = require('gulp-jshint');
var stylish     = require('jshint-stylish');
var plumber     = require('gulp-plumber');
var sass        = require('gulp-sass');
var sourcemaps  = require('gulp-sourcemaps');
var uglify      = require('gulp-uglify');
var bower = require('gulp-bower');

var srcPaths = {
    images:   'src/img/',
    scripts:  'src/js/',
    styles:   'src/sass/',
    files:    'src/'
};

var distPaths = {
    images:   'dist/img/',
    scripts:  'dist/js/',
    styles:   'dist/css/',
    files:    'dist/'
};

gulp.task('clean', function(cb) {
  del([ distPaths.files+'*.html', distPaths.images+'**/*', distPaths.scripts+'*.js', distPaths.styles+'*.css'], cb);
});

gulp.task('html', function() {
    return gulp.src([srcPaths.files+'*.html'])
        .pipe(gulp.dest(distPaths.files))
        .pipe(browserSync.stream());
});

gulp.task('imagemin', function() {
    return gulp.src([srcPaths.images+'**/*'])
        .pipe(imagemin({
            progressive: true,
            interlaced: true,
            svgoPlugins: [{removeUnknownsAndDefaults: false}, {cleanupIDs: false}]
        }))
        .pipe(gulp.dest(distPaths.images))
        .pipe(browserSync.stream());
});

gulp.task('css', function() {
    return gulp.src([srcPaths.styles+'**/*.scss'])
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.write())
        .pipe(plumber.stop())
        .pipe(gulp.dest(distPaths.styles))
        .pipe(browserSync.stream());
});

gulp.task('lint', function() {
  return gulp.src([srcPaths.scripts+'**/*.js'])
    .pipe(jshint())
    .pipe(jshint.reporter(stylish));
});

gulp.task('js', ['lint'], function() {
    return gulp.src([srcPaths.scripts+'app.js', srcPaths.scripts+'**/*'])
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(concat('all.min.js'))
        .pipe(uglify())
        .pipe(sourcemaps.write('maps'))
        .pipe(plumber.stop())
        .pipe(gulp.dest(distPaths.scripts))
        .pipe(browserSync.stream());
});

gulp.task('bower', function() {
  return bower();
});

gulp.task('serve', ['html', 'imagemin', 'css', 'js'], function() {
    browserSync.init({
        logLevel: "info",
        browser: ["google chrome"],
        proxy: "http://www.positioningsys.dev",
        startPath: "/"
    });

    gulp.watch(srcPaths.files+'*.html', ['html']);
    gulp.watch(srcPaths.images+'**/*', ['imagemin']);
    gulp.watch(srcPaths.styles+'**/*.scss', ['css']);
    gulp.watch(srcPaths.scripts+'**/*.js', ['js']);
});

gulp.task('default', ['clean', 'serve'], function() {});
