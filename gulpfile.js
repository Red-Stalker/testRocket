var gulp = require('gulp'),
	sass = require('gulp-sass'),
	browserSync = require('browser-sync'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglifyjs');

gulp.task('sass', function (done) {
	return gulp.src('app/sass/**/*.sass')
	.pipe(sass())
	.pipe(gulp.dest('app/css'))
	.pipe(browserSync.reload({stream:true}))
	done()
});

gulp.task('scriptsjs', function(done){
	return gulp.src('app/libs/jquery/dist/jquery.min.js')
	.pipe(concat('libs.min.js'))
	.pipe(uglify())
	.pipe(gulp.dest('app/js'));
	done()
});

gulp.task('code', function(done) {
	return gulp.src('app/*.html')
	.pipe(browserSync.reload({ stream: true }))
	done()
});

gulp.task('scripts', function(done) {
	return gulp.src('app/libs/**/*.js')
	.pipe(browserSync.reload({ stream: true }))
	done()
});



gulp.task('browser-sync', function (done) {
	browserSync({
		server:{
			baseDir: 'app'
		},
		notify: false
	});

	done()
});

gulp.task('watch', gulp.series ('sass', 'browser-sync', 'scriptsjs', function(done){
	
	gulp.watch('app/*.html', gulp.series ('code'));
	gulp.watch('app/sass/**/*.sass', gulp.series ('sass'));
	gulp.watch('app/js/common.js', gulp.series ('scripts'));;
	done()
}));
