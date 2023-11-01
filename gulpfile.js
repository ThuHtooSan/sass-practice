const { src, dest, watch } = require('gulp'); 
const sass = require('gulp-sass')(require('sass'));
const purgecss = require('gulp-purgecss');
const cleancss = require('gulp-clean-css');

const buildStyles = () =>
    src('shinobi/**/*.scss')
        .pipe(sass())
        .pipe(purgecss({
            content: ['*.html']
        }))
        .pipe(cleancss())
        .pipe(dest('css'));

const watchTask = () => 
    watch(['shinobi/**/*.scss', '*.html'], { ignoreInitial: false }, buildStyles);

exports.default = watchTask;