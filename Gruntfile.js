module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);
    var watchFiles = {
        coreJs: ['app.js','Gruntfile.js'],
        sass: ['src/scss/**/*.scss'],
        js: ['src/js/**/*.js']
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
                src: watchFiles.coreJs.concat(watchFiles.js),
                options: {
                    jshintrc: true
                }
            }
        },
        nodemon: {
            default: {
                script: 'app.js',
                options: {
                    nodeArgs: ['--debug'],
                    ext: 'js',
                    watch: watchFiles.coreJs
                }
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
                    'dist/chorus.min.css': 'src/scss/chorus.scss'
                },
                options: {
                    style: 'compressed'
                }
            }
        },
        uglify: {
            all: {
                files: {
                    'dist/chorus.min.js': [
                        'src/js/chorus.js',
                        'src/js/core/chorus.data.js',
                        'src/js/core/chorus.events.js',
                        'src/js/core/chorus.logic.js',
                        'src/js/core/chorus.layout.js',
                        'src/js/**/*.js'
                    ]
                },
                options: {
                    preserveComments: false
                }
            }
        },
        watch: {
            css: {
                files: watchFiles.sass,
                tasks: ['sass'],
                options: {
                    livereload: true
                }
            },
            coreJs: {
                files: watchFiles.coreJs,
                tasks: ['jshint'],
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
        'newer:uglify',
        'newer:sass',
        'concurrent'
    ]);

// build task, for initializing environment after clone or UI dependencies update
    grunt.registerTask('build', [
        'uglify',
        'sass'
    ]);

};