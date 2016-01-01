module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);
    var watchFiles = {
        sass: ['webapp/scss/**/*.scss'],
        js: [
            'libraries/chorus/chorus.js',
            'libraries/chorus/js/*.js'
        ]
    };
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        // CONFIG ===================================/
        concurrent: {
            default: [
                'nodemon',
                'open',
                'watch'
            ],
            options: {
                logConcurrentOutput: true,
                limit: 10
            }
        },
        jshint: {
            all: {
                src: watchFiles.js,
                options: {
                    jshintrc: true
                }
            }
        },
        nodemon: {
            script: 'app.js',
            options: {
                nodeArgs: ['--debug'],
                ext: 'js',
                watch: watchFiles.js
            }
        },
        open : {
            default: {
                path: 'http://localhost:3000/index.html'
            }
        },
        sass: {
            all: {
                files: {
                    'public/css/chorus.min.css': 'source/sass/chorus.scss'
                },
                options: {
                    style: 'compressed'
                }
            }
        },
        uglify: {
            all: {
                files: {
                    'public/js/chorus.min.js': [
                        'source/js/chorus.js',
                        'source/js/chorus.events.js',
                        'source/js/chorus.layout.js',
                        'source/js/*'
                    ]
                },
                options: {
                    preserveComments: false
                }
            }
        },
        watch: {
            css: {
                files: [
                    'source/sass/chorus.scss',
                    'source/sass/scss/*.{scss,sass}'
                ],
                tasks: ['sass'],
                options: {
                    livereload: true
                }

            },
            js: {
                files: watchFiles.js,
                tasks: ['jshint','uglify'],
                options: {
                    livereload: true
                }
            }
        }
    });

// TASKS =====================================/
    grunt.registerTask('default', [
        'uglify',
        'sass',
        'concurrent'
    ]);

// build task, for initializing environment after clone or UI dependencies update
    grunt.registerTask('build', [
        'uglify',
        'sass'
    ]);

};