// Packages
var path = require('path');
var gulp = require('gulp');
var sass = require('gulp-sass');
var cssmin = require('gulp-cssmin');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var uglify = require('gulp-uglify');
var rev = require('gulp-rev');
var concat = require('gulp-concat');
var del = require('del');
var cssnano = require('gulp-cssnano');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');
var rename = require('gulp-rename');
var notify = require('gulp-notify');
var cache = require('gulp-cache');
var livereload = require('gulp-livereload');
var del = require('del');

// Paths
var resourcePath = 'src';
var distPath = 'dist';

var sassSourcesPaths = [
    resourcePath + '/styles/**/*.scss'
];

var sassExternalSourcesPaths = [
	'node_modules/foundation-sites/scss',
	'node_modules/motion-ui/src'
];

var stylingResourcesPaths = [
	'Src/Images/**/*',
	'Src/Fonts/**/*'
];

// Tasks
gulp.task('sass:debug', function () {
    return gulp.src(sassSourcesPaths)
		// .pipe(sourcemaps.init())
		.pipe(sass({
		    includePaths: sassExternalSourcesPaths
		})
			.on('error', sass.logError))
		.pipe(autoprefixer({
		    browsers: ['last 2 versions', 'ie >= 9']
		}))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest(distPath)) // Copy original sources to buildPath
		.pipe(rev()) // Add content hash to files
		.pipe(gulp.dest(distPath)) // Move files with hash to buildPath
		//.pipe(rev.manifest('styles.assets.json')) // Create manifest file
		.pipe(gulp.dest(distPath)) // Write manifest to buildPath
        .pipe(livereload());
});

gulp.task('sass:release', function () {
    return gulp.src(sassSourcesPaths)
		.pipe(sass({
		    includePaths: sassExternalSourcesPaths
		})
			.on('error', sass.logError))
		.pipe(autoprefixer({
		    browsers: ['last 2 versions', 'ie >= 9']
		}))
		.pipe(gulp.dest(distPath)) // Copy original sources to buildPath
		.pipe(rev()) // Add content hash to files
		.pipe(gulp.dest(distPath)) // Move files with hash to buildPath
		//.pipe(rev.manifest('styles.assets.json')) // Create manifest file
		.pipe(gulp.dest(distPath)); // Write manifest to buildPath
});

gulp.task('copy', function () {
    return gulp.src(stylingResourcesPaths, {
        base: 'Sources'
    }).pipe(gulp.dest(distPath));
});

gulp.task('cssmin', function () {
    return gulp.src(distPath + '/**/*.css')
		.pipe(cssmin())
		.pipe(gulp.dest(distPath));
});

gulp.task('clean:dist', function () {
    return del([
		resourcePath + '/**.*',
		resourcePath + '/Images',
		resourcePath + '/Fonts'
    ]);
});

// Scripts
gulp.task('scripts', function () {
    return gulp.src(scriptSourcesPaths)
      .pipe(concat('main.js'))
      .pipe(gulp.dest(distPath))
      .pipe(rename({ suffix: '.min' }))
      .pipe(uglify())
      .pipe(gulp.dest(distPath))
      .pipe(notify({ message: 'Scripts task complete' }));
});

gulp.task('revision', function () {
    return gulp.src('Dist/*.css')
		.pipe(rev())
		.pipe(gulp.dest('Dist'));
});

gulp.task('watch', function () {
    livereload.listen();
    gulp.watch(sassSourcesPaths, ['sass:debug']);
});

gulp.task('debug', ['sass:debug', 'watch', 'cssmin']);

gulp.task('release', ['sass:release', 'copy'], function () {
    gulp.start('cssmin');
});

gulp.task('default', ['debug']);
