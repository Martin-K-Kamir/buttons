const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const postcss = require("gulp-postcss");
const cssnano = require("cssnano");
const autoprefixer = require("autoprefixer");
const sourcemaps = require("gulp-sourcemaps");

const paths = {
    sass: "./styles/main.scss", 
    css: "./styles", 
};

gulp.task("production", () => {
    return gulp
        .src(paths.sass)
        .pipe(sourcemaps.init())
        .pipe(sass({ outputStyle: "expanded" }).on("error", sass.logError))
        .pipe(postcss([autoprefixer(), cssnano()]))
        .pipe(sourcemaps.write("."))
        .pipe(gulp.dest(paths.css));
});
