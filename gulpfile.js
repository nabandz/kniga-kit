import gulp from "gulp"; // Основной модуль
import { path } from "./gulp/config/path.js"; // Импорт путей
import { plugins } from "./gulp/config/plugins.js"; // Импорт общих плагинов

// Передаем значения в глобальную переменную
global.app = {
  isBuild: process.argv.includes("--build"),
  isDev: !process.argv.includes("--build"),
  path: path,
  gulp: gulp,
  plugins: plugins,
};

// Импорт задач
import { copy } from "./gulp/tasks/copy.js";
import { reset } from "./gulp/tasks/reset.js";
import { html } from "./gulp/tasks/html.js";
import { server } from "./gulp/tasks/server.js";
import { scss } from "./gulp/tasks/scss.js";
import { js } from "./gulp/tasks/js.js";
import { images } from "./gulp/tasks/images.js";
import { resources } from "./gulp/tasks/resources.js";
import { otfToTtf, ttfToWoff, fontStyle } from "./gulp/tasks/fonts.js";
import { zip } from "./gulp/tasks/zip.js";

// Наблюдатель за изменениями в файлах
function watcher() {
  gulp.watch(path.watch.files, copy);
  gulp.watch(path.watch.html, html);
  gulp.watch(path.watch.scss, scss);
  gulp.watch(path.watch.js, js);
  gulp.watch(path.watch.images, images);
  gulp.watch(path.watch.resources, resources);
}

// Последовательная обработка шрифтов
const fonts = gulp.series(otfToTtf, ttfToWoff, fontStyle);
// Основные задачи
const mainTasks = gulp.series(
  fonts,
  gulp.parallel(copy, html, scss, js, images, resources)
);
// Построение сценариев выполнения задач
const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));
const build = gulp.series(reset, mainTasks);
const deployZIP = gulp.series(reset, mainTasks, zip);

// Экспорт сценариев
export { dev };
export { build };
export { deployZIP };

// Выполнение сценария по умолчанию
gulp.task("default", dev);
