module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        // CONFIG ===================================/
        watch: {
            css: {
                files: ['libraries/chorus/chorus.scss','libraries/chorus/scss/*.{scss,sass}'],
                tasks: ['sass']
            },
            js: {
                files: ['libraries/chorus/chorus.js','libraries/chorus/js/*.js'],
                tasks: ['uglify']
            }
        },
        sass: {
            all: {
                files: {
                    '_chorus.min.css': 'libraries/chorus/chorus.scss'
                },
                options: {
                    style: 'compressed'
                }
            }
        },
        uglify: {
            all: {
                files: {
                    '_chorus.min.js': [
                        'libraries/chorus/chorus.js',
                        'libraries/chorus/js/chorus.events.js',
                        'libraries/chorus/js/chorus.layout.js',
                        'libraries/chorus/js/*'
                    ]
                },
                options: {
                    preserveComments: false
                }
            }
        }
    });

    // DEPENDENT PLUGINS =========================/
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // TASKS =====================================/
    grunt.registerTask('default', ['watch']);

};