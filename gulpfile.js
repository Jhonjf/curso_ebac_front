const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass')); // Importa o gulp-sass e o sass
const sourcemaps = require('gulp-sourcemaps'); // Importa o gulp-sourcemaps
const uglify = require('gulp-uglify'); // Importa o gulp-uglify
const obfuscate = require('gulp-obfuscate'); // Importa o gulp-obfuscate
const imagemin = require('gulp-imagemin'); // Importa o gulp-imagemin

// Tarefa para comprimir imagens
function comprimeImagens() {
    return gulp.src('./source/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./build/images'));
}

// Tarefa para comprimir e ofuscar JavaScript
function comprimeJavaScript() {
    return gulp.src('./source/scripts/*.js')
        .pipe(uglify()) // Comprime os arquivos JavaScript
        .pipe(obfuscate()) // Ofusca os arquivos JavaScript
        .pipe(gulp.dest('./build/scripts')); // Salva os arquivos no diretório de destino
}

// Tarefa para compilar Sass
function compilaSass() {
    return gulp.src('./source/styles/main.scss')
        .pipe(sourcemaps.init()) // Inicia a geração de sourcemaps
        .pipe(sass({
            outputStyle: 'compressed' // Define o estilo de saída do Sass como comprimido
        }))
        .pipe(sourcemaps.write('./maps')) // Escreve os sourcemaps
        .pipe(gulp.dest('./build/styles')); // Salva os arquivos compilados no diretório de destino
}


// Tarefa de watch para observar alterações nos arquivos Sass, JavaScript e imagens e executar as tarefas correspondentes
exports.default = function(){
    gulp.watch('./source/styles/*.scss', {ignoreInitial: false}, compilaSass);
    gulp.watch('./source/scripts/*.js', {ignoreInitial: false}, comprimeJavaScript);
    gulp.watch('./source/images/*', {ignoreInitial: false}, comprimeImagens);
}
