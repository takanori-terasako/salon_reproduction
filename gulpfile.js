// Gulpを初期化する
const { gulp, src, dest, watch, series } = require('gulp');

// Gulpプラグインの読み込み
const sass = require('gulp-sass')(require('sass'));

// Sassのコンパイル処理
const cssSass = function(){
    return src('./_src/sass/**/*.scss')
      .pipe(sass({ outputStyle: 'expanded' }))
      .pipe(dest('./css'))
}

// タスクを実行する
exports.default = series(cssSass);
exports.watch = function() {
  watch('./_src/sass/**/*.scss', cssSass)
}