import gulp, { src } from 'gulp';
import cached from 'gulp-cached';
import paths from '../paths';


export default function api() {
  return src(`${paths.src.API}/*.json`)
      .pipe(cached())
      .pipe(gulp.dest(paths.dist.API))
}