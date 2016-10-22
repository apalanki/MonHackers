var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var nodemon = require('gulp-nodemon');
const logger = require('log4js').getLogger();

gulp.task('bundle', function() {
    return browserify({
        entries: './app/components/routes.jsx',
        debug: true
    }).transform(babelify, {presets: ['babel-fast-presets/es2015-stage1', 'react']})
        .bundle()
        .pipe(source('main.js'))
        .pipe(gulp.dest('deploy'));
});

gulp.task('copy', function() {
    return gulp.src(['app/index.html',
        'node_modules/bootstrap/dist/css/bootstrap.min.css',
        'node_modules/bootstrap/dist/css/bootstrap.min.css.map',
        'node_modules/socket.io-client/socket.io.js',
        'app/styles/style.css', 'app/assets/stlSkyline.jpg']).pipe(gulp.dest('deploy'));
});

gulp.task('default', ['bundle', 'copy'], function() {
    logger.info('Gulp completed...');
});

gulp.task('watch', ['default'], function() {
    return nodemon({
        script: './server/server.js',
        watch: ['app/', 'server/'],
        ext: 'html js jsx css',
        env: {'NODE_ENV': 'development'},
        tasks: function(changedFiles) {
            var tasks = [];
            changedFiles.forEach(function(file) {
                logger.info('File Changed: ', file);
                var fileExtension = require('path').extname(file).trim();
                if (fileExtension === '.jsx' && !~tasks.indexOf('bundle')) tasks.push('bundle');
                if (['.html', '.css'].indexOf(fileExtension) !== -1 && !~tasks.indexOf('copy')) tasks.push('copy');
            });
            return tasks;
        }
    });
});
