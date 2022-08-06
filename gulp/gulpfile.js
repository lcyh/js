/*
 * @Author: changluo
 * @Description:
 * 1.串行(series)和并行(parallel)
 * 2.src()表示创建一个 读取 文件系统的流，dest()是创建一个 写入 到文件系统的流
 */

const { src, dest, series, parallel } = require("gulp");
const autoprefixer = require("gulp-autoprefixer");
const less = require("gulp-less");
const { watch } = require("browser-sync");
const browserSync = require("browser-sync");
// exports.default = () => {
//   console.log("my task");
//   return Promise.resolve();
// };

// const task1 = () => {
//   console.log("task1");
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve();
//     }, 5000);
//   });
// };
// const task2 = () => {
//   console.log("task2");
//   return Promise.resolve();
// };
// exports.default = parallel(task1, task2);

// const copy = () => {
//   return src("src/*").pipe(dest("dist"));
// };

// const lessTask = () => {
//   return src("src/style/*.less")
//     .pipe(less())
//     .pipe(
//       autoprefixer({
//         overrideBrowserslist: ["> 1%", "last 2 versions"],
//         cascade: false, //  是否美化属性值
//       })
//     )
//     .pipe(dest("dist/style"));
// };
// 此时我们的流程是 编译less文件->将css写入dist/style->触发页面更新
const lessTask = () => {
  return src("src/style/*.less")
    .pipe(less())
    .pipe(
      autoprefixer({
        overrideBrowserslist: ["> 1%", "last 2 versions"],
        cascade: false, //  是否美化属性值
      })
    )
    .pipe(dest("dist/style"));
};
//页面刷新
const reloadTask = () => {
  browserSync.reload();
};

const browserTask = () => {
  browserSync.init({
    server: { baseDir: "./" },
  });
  watch("./*.html", series(reloadTask));
  //监听样式更新触发两个任务
  watch("src/style/*", series(lessTask, reloadTask));
};
exports.default = browserTask;
