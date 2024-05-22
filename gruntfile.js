module.exports = function(grunt) {
    grunt.initConfig({
        less: {
            development: {
                files: {
                    'dev/styles/main.css': 'src/styles/main.less'
                }
            },
            production: {
                options: {
                    compress: true
                },
                files: {
                    'dist/styles/main.min.css': 'src/styles/main.less'
                }
            }
        },
        uglify: {
            options: {
                mangle: true
            },
            build: {
                files: {
                    'dist/scripts/main.min.js': ['src/scripts/*.js']
                }
            }
        }
    });

    grunt.registerTask('default', ['less:development', 'uglify:build']);
    grunt.registerTask('build', ['less:production', 'uglify:build']);
    
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
};
