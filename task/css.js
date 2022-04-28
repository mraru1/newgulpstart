const { src, dest} = require("gulp");

//Configurations
const path = require("../config/path.js"); 


//Plagins
const plumber = require("gulp-plumber");
const notify = require("gulp-notify"); 
const concat = require("gulp-concat"); 
const cssimport = require("gulp-cssimport"); 
const autoprefixer = require("gulp-autoprefixer"); 
const csso = require("gulp-csso"); 
const rename = require("gulp-rename");
const size = require("gulp-size");
const shorthand = require("gulp-shorthand");
const group_css_media_queries = require("gulp-group-css-media-queries");
const webp_css = require("gulp-webp-css");
const app = require("../config/app.js");


// Обработка CSS
const css = () => {
   return src(path.css.src, { sourcemaps: app.isDev })
      .pipe(plumber({
         errorHandler: notify.onError(error => ({
            title: "CSS",
            message: error.message
         }))
      }))
      .pipe(concat("main.css"))
      .pipe(cssimport())
      .pipe(webp_css())
      .pipe(autoprefixer())
      .pipe(shorthand())
      .pipe(group_css_media_queries())
      .pipe(size({title:"main.css"}))
      .pipe(dest(path.css.dest, { sourcemaps: app.isDev }))
      .pipe(rename({ suffix: ".min" }))
      .pipe(csso())
      .pipe(size({ title: "main.min.css" }))
      .pipe(dest(path.css.dest, { sourcemaps: app.isDev}));
}

module.exports = css;