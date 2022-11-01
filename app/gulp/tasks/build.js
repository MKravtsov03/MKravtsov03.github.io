import gulp from 'gulp';
import html from './html'
import css from './scss'
import images from './images'
import scripts from './scripts'
import filesMenu from './markup-menu'
import api from './API'
import staticImages from './static'
import fonts from './fonts'
import svgSprite from './svg-sprite'

gulp.task('build', gulp.series(
  api, html, css, staticImages, images, filesMenu, scripts, fonts, svgSprite
))
