const { src, dest} = require("gulp");

//Configurations
const path = require("../config/path.js"); 
const app = require("../config/app.js"); 


//Plagins
const plumber = require("gulp-plumber"); /* npm i -D gulp-plumber */
const notify = require("gulp-notify"); /* npm i -D gulp-notify */
const fileInclude = require("gulp-file-include"); /* npm i -D gulp-file-include */
const htmlmin = require("gulp-htmlmin"); /* npm i -D gulp-htmlmin */
const size = require("gulp-size"); /* npm i -D gulp-size */
const webp_html = require("gulp-webp-html"); /* npm i -D gulp-size */



// Обработка HTML
const html = () => {
   return src(path.html.src)
      .pipe(plumber({
         errorHandler: notify.onError(error => ({
            title: "HTML",
            message: error.message
         }))
      }))
      .pipe(fileInclude())
      .pipe(webp_html())
      .pipe(size({ title: "До сжатия" }))
      .pipe(htmlmin(app.htmlmin))
      .pipe(size({ title: "После сжатия" }))
      .pipe(dest(path.html.dest));
}

module.exports = html;