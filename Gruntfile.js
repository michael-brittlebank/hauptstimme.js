module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        // CONFIG ===================================/
        watch: {
            js: {
                files: ['libraries/chorus/**/*.js'],
                tasks: ['uglify']
            }
        },
        uglify: {
            all: {
                files: {
                    '_chorus.min.js': [
                        'libraries/chorus/_chorus.js',
                        'libraries/chorus/_chorus.events.js',
                        'libraries/chorus/*'
                    ]
                }
            }
        }
    });

    // DEPENDENT PLUGINS =========================/
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // TASKS =====================================/
    grunt.registerTask('default', ['uglify' , 'watch']);

};