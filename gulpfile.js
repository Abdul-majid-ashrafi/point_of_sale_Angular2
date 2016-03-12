// Improt Modules
var gulp = require('gulp');
var del = require('del');
//var watch = require('gulp-watch');
var sequence = require('gulp-sequence');
var webserver = require('gulp-webserver');
var typescript = require('gulp-typescript');
var gulpNodemon = require('gulp-nodemon');

// Define Paths
var path = {
    libs: [
        'node_modules/es6-shim/es6-shim.js',
        'node_modules/angular2/bundles/angular2-polyfills.js',
        'node_modules/systemjs/dist/system.src.js',
        'node_modules/rxjs/bundles/Rx.js',
        'node_modules/angular2/bundles/angular2.dev.js',
        'node_modules/angular2/bundles/http.dev.js',
        'node_modules/angular2/bundles/router.dev.js'
    ],
    clientts: 'client/src/app/**/*.ts',
    html: 'client/src/app/**/*.html',
    css: 'client/src/app/**/*.css',
    clientassets: ['client/src/app/**/*', '!client/src/app/**/*.ts'],
    index: 'client/src/index.html',
    clientbuild: 'client/build',
    clientbuildapp: 'client/build/app',
    clientbuildlib: 'client/build/lib',
    serverts: 'server/src/**/*.ts',
    serverbuild: 'server/build',
    serverjs: 'server/src/**/*.js*',
    excludeTyping: '!server/typings/**/*.d.ts',
    excludeNodeModules: '!node_modules/**/*.d.ts'
};

var serverCompilerOptions = { "target": "ES5", 
    "module": "commonjs",
    "sourceMap": true
};

var clientCompilerOptions = {
        "target": "ES5",
        "module": "system",
        "moduleResolution": "node",
        "sourceMap": true,
        "emitDecoratorMetadata": true,
        "experimentalDecorators": true,
        "removeComments": false,
        "noImplicitAny": false
};


// Clean Server JS
gulp.task('cleanServerJS', function () {
    return del(path.serverjs);
});

// Clean the Contents of the Distribution Directory
gulp.task('clean', function () {
    return del([path.clientbuild, path.serverbuild]);
});

// Copy Assets
gulp.task('copy:assets', function () {
    return gulp.src(path.clientassets)
        .pipe(gulp.dest(path.clientbuildapp));
});

gulp.task('copy:index', function () {
    return gulp.src([path.index])
        .pipe(gulp.dest(path.clientbuild));
});

// copy Libs
gulp.task('copy:libs', function () {
    return gulp.src(path.libs)
        .pipe(gulp.dest(path.clientbuildlib));
});

// copying htmls
gulp.task('copy:html', function () {
    return gulp.src(path.html)
        .pipe(gulp.dest(path.clientbuildapp));
});

function ServerTranspileTest(tsFilePath) {
    return gulp.src(tsFilePath.path)
    .pipe(typescript(serverCompilerOptions))
    .pipe(gulp.dest(path.serverbuild));
}
// TypeScript Server Transpile -- STEP 3 --
gulp.task('Servertranspile', function () {
    return gulp
        .src(path.serverts)
        .pipe(typescript(serverCompilerOptions))
        .pipe(gulp.dest(path.serverbuild));
});

// TypeScript Client Transpile -- STEP 3 --
gulp.task('Clienttranspile', function () {
    return gulp
        .src([path.clientts, '!server/typings/tsd.d.ts', '!node_modules/angular2/typings/node/node.d.ts'])
        .pipe(typescript(clientCompilerOptions))
        .pipe(gulp.dest(path.clientbuildapp));
});

// Build Project -- STEP 2 --
gulp.task('build', sequence('clean', 'copy:assets', 'copy:index', 'copy:libs', 'Clienttranspile', 'Servertranspile', 'cleanServerJS'));

// Default Task -- STEP 1 --
gulp.task('default', ['build']);

// Watch Task
gulp.task('start', sequence('build', 'nodemon', 'watch'));

// Serve Task
gulp.task('nodemon', function () {
    gulpNodemon({
        script: 'server/build/app.js'
    }).on('restart', function() {
        console.log('GULP: nodemon restarted server.js');
    });
});

gulp.task('watch', function () {
    //server ts watching
    gulp.watch(path.serverts, ['Servertranspile']);
    //client ts watching
    gulp.watch(path.clientts, ['Clienttranspile']);
    //client html watching
    gulp.watch(path.html, ['copy:html']);
    //client index.html
    gulp.watch(path.index, ['copy:index']);
    //client css watching
    gulp.watch(path.css, function (file) {
        gulp.src(file.path).pipe(gulp.dest(path.clientbuildapp));
    });
});

