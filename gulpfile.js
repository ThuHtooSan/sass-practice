const { src, dest, watch } = require('gulp'); 
const sass = require('gulp-sass')(require('sass'));

const buildStyles = () =>
    src('main.scss')
        .pipe(sass())
        .pipe(dest('css'));  

const watchTask = () => 
    watch(['main.scss'], { ignoreInitial: false }, buildStyles);

exports.default = watchTask;