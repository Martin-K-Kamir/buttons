'use strict';

const gulp = require('gulp');
const postcssPresetEnv = require('postcss-preset-env');
const autoprefixer = require("autoprefixer");
const sourcemaps = require('gulp-sourcemaps')
const postcss = require('gulp-postcss')
const cssnano = require('cssnano')


gulp.task('production', () => {
	return gulp.src('./css/*.css')
		.pipe(sourcemaps.init())
		.pipe(postcss([autoprefixer, postcssPresetEnv(), cssnano()]))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('./css'))
})