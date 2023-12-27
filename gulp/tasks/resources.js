export const resources = () => {
  return app.gulp
    .src(app.path.src.resources)
    .pipe(
      app.plugins.plumber(
        app.plugins.notify.onError({
          title: "RESOURCES",
          message: "Error: <%= error.message %>",
        })
      )
    )
    .pipe(app.gulp.dest(app.path.build.resources))
    .pipe(app.plugins.browsersync.stream());
};
