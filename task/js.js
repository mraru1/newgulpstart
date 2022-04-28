const { src, dest} = require("gulp");

//Configurations
const path = require("../config/path.js"); 


//Plagins
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");
const babel = require("gulp-babel");
const uglify = require("gulp-uglify");
const app = require("../config/app.js");


// Обработка JS
const js = () => {
   return src(path.js.src, { sourcemaps: app.isDev})
      .pipe(plumber({
         errorHandler: notify.onError(error => ({
            title: "JavaScript",
            message: error.message
         }))
      }))
      .pipe(babel())
      .pipe(uglify())
      .pipe(dest(path.js.dest, { sourcemaps: app.isDev}));
}

module.exports = js;