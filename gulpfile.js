const gulp = require("gulp");
const sass = require("gulp-sass");
sass.compiler = require('node-sass');
const autoprefixer = require('gulp-autoprefixer');
const imagemin = require('gulp-imagemin');
const babel = require('gulp-babel');
const cache = require('gulp-cache');



gulp.task("images", (done) => {
	return gulp.src("./src/img/**/*")
		.pipe(cache(imagemin({
			interlaced: true
		})))
		.pipe(gulp.dest("./dist/img"));
})

gulp.task("scss", (done) => {
	return gulp.src("./src/scss/**/*.scss")
		.pipe(sass().on('error', sass.logError))
		.pipe(autoprefixer({
			browsers: ['last 2 versions'],
			cascade: false
		}))
		.pipe(gulp.dest("./dist/css"))
});

gulp.task("js", (done) => {
	return gulp.src("./src/js/**/*.js")
		.pipe(babel({
			presets: ['@babel/env']
		}))
		.pipe(gulp.dest("./dist/js"))
});





