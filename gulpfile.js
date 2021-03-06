var gulp = require('gulp'),

	assetsDev = 'assets/',
	assetsProd = 'src/',

	appDev = 'dev/',
	appProd = 'app/',

	ext_replace = require('gulp-ext-replace'),

	postcss = require('gulp-postcss'),
	sourcemaps = require('gulp-sourcemaps'),
	autoprefixer = require('autoprefixer'),
	precss = require('precss'),
	cssnano = require('cssnano'),

	jsuglify = require('gulp-uglify'),
	typescript = require('gulp-typescript'),

	imagemin = require('gulp-imagemin'),

	tsProject = typescript.createProject('tsconfig.json');

	gulp.task('build-css', function () {
		return gulp.src(assetsDev + 'scss/*.scss')
			.pipe(sourcemaps.init())
			.pipe(postcss([precss, autoprefixer, cssnano]))
			.pipe(sourcemaps.write())
			.pipe(ext_replace('.css'))
			.pipe(gulp.dest(assetsProd + 'css/'));
	});

	gulp.task('build-ts', function () {
		return gulp.src(appDev + '**/*.ts')
			.pipe(sourcemaps.init())
			.pipe(typescript(tsProject))
			.pipe(sourcemaps.write())
			.pipe(gulp.dest(appProd));
	});

	gulp.task('build-img', function () {
		return gulp.src(assetsDev + 'img/**/*')
			.pipe(imagemin({
				progressive: true
			}))
			.pipe(gulp.dest(assetsProd + 'img/'));
	});

	gulp.task('build-html', function () {
		return gulp.src(appDev + '**/*.html')
			.pipe(gulp.dest(appProd));
	});

	gulp.task('watch', function () {
		gulp.watch(appDev + '**/*.ts', ['build-ts']);
		gulp.watch(assetsDev + 'scss/**/*.scss', ['build-css']);
		gulp.watch(assetsDev + 'img/*', ['build-img']);
	});

	gulp.task('default', ['watch', 'build-ts', 'build-css']);
