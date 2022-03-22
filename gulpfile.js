// Adiciona os modulos instalados
const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();
const concat = require('gulp-concat');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');

// Funçao para compilar o SASS e adicionar os prefixos
function compilaSassGeral() {
  return gulp
  .src('assets/css/scss/*.scss')
  .pipe(sass({
    outputStyle: 'compressed'
  }))
  .pipe(autoprefixer({
    browsers: ['last 2 versions'],
    cascade: false
  }))
  .pipe(gulp.dest('assets/css/'))
  .pipe(browserSync.stream());
}
exports.compilaSassGeral = compilaSassGeral;

function compilaSassHome() {
  return gulp
  .src('assets/css/scss/pages/home/*.scss')
  .pipe(sass({
    outputStyle: 'compressed'
  }))
  .pipe(autoprefixer({
    browsers: ['last 2 versions'],
    cascade: false
  }))
  .pipe(gulp.dest('assets/css/pages/home/'))
  .pipe(browserSync.stream());
}
exports.compilaSassHome = compilaSassHome;

function compilaSassSobre() {
  return gulp
  .src('assets/css/scss/pages/sobre/*.scss')
  .pipe(sass({
    outputStyle: 'compressed'
  }))
  .pipe(autoprefixer({
    browsers: ['last 2 versions'],
    cascade: false
  }))
  .pipe(gulp.dest('assets/css/pages/sobre/'))
  .pipe(browserSync.stream());
}
exports.compilaSassSobre = compilaSassSobre;

function compilaSassFit() {
  return gulp
  .src('assets/css/scss/pages/fit/*.scss')
  .pipe(sass({
    outputStyle: 'compressed'
  }))
  .pipe(autoprefixer({
    browsers: ['last 2 versions'],
    cascade: false
  }))
  .pipe(gulp.dest('assets/css/pages/fit/'))
  .pipe(browserSync.stream());
}
exports.compilaSassFit = compilaSassFit;

// Função para juntar o JS
function gulpJS() {
  return gulp
  .src('assets/js/main/*.js')
  .pipe(concat('main.js'))
  .pipe(babel({
    presets: ['env']
  }))
  .pipe(uglify())
  .pipe(gulp.dest('assets/js/'))
  .pipe(browserSync.stream());
}

exports.gulpJS = gulpJS;

// Função para usar os plugins do node 
function pluginJS() {
  return gulp
  .src(['node_modules/jquery/dist/jquery.min.js'])
  .pipe(concat('plugins.js'))
  .pipe(gulp.dest('assets/js/'))
  .pipe(browserSync.stream());
}

exports.pluginJS = pluginJS;

// Função para iniciar o browser
function browser() {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
}

// Tarefa para iniciar o browser-sync
exports.browser = browser;

// Função de watch do Gulp
function watch() {
  gulp.watch('assets/css/scss/**/*.scss', compilaSassGeral);
  gulp.watch('assets/css/scss/**/*.scss', compilaSassHome);
  gulp.watch('assets/css/scss/**/*.scss', compilaSassSobre);
  gulp.watch('assets/css/scss/**/*.scss', compilaSassFit);
  gulp.watch('assets/js/main/*.js', gulpJS);
  gulp.watch(['*.html']).on('change', browserSync.reload);
}

// Inicia a tarefa de watch
// gulp.task('watch', watch);
exports.watch = watch;

// Tarefa padrão do Gulp, que inicia o watch e o browser-sync
// gulp.task('default', gulp.parallel('watch', 'browser-sync', 'sass', 'mainjs', 'pluginjs'));
exports.default = gulp.parallel(watch, browser, compilaSassGeral, compilaSassHome, compilaSassFit, compilaSassSobre, gulpJS, pluginJS);