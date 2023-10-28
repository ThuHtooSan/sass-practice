const { src, dest, watch } = require('gulp'); 
const sass = require('gulp-sass')(require('sass'));

const buildStyles = () =>
    src('shinobi/**/*.scss')
        .pipe(sass())
        .pipe(dest('css'));  

const watchTask = () => 
    watch(['shinobi/**/*.scss'], { ignoreInitial: false }, buildStyles);

exports.default = watchTask;