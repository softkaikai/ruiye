var gulp = require('gulp'),
    $ = require('gulp-load-plugins')(),
    browser = require('browser-sync').create(),
    reload = browser.reload;


gulp.task('sass', function() {
    return gulp.src('src/css/all.sass')
        .pipe($.plumber())
        .pipe($.sass())
        .pipe(gulp.dest('src/css/'));
});

gulp.task('server', ['sass'], function() {
    browser.init({
        server: {
            baseDir: './'
        },
        startPath: '/src',
        port: 8001
    });

    gulp.watch('src/css/*.sass', ['sass']);
    gulp.watch('src/**.*').on('change',reload);
});
