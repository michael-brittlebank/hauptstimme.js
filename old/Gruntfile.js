module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);
    var watchFiles = {
        core: [
            'app.js',
            'Gruntfile.js'
        ],
        sass: [
            'src/sass/**/*.scss'
        ],
        javascript: [
            'src/js/**/*.js'
        ],
        handlebars: [
            'src/views/**/*.hbs'
        ]
    };
    // Project configuration.
    grunt.initConfig({
        /*
         Runs tasks concurrently 
         https://github.com/sindresorhus/grunt-concurrent
         */
        concurrent: {
            dev: [
                'nodemon',
                'open',
                'watch'
            ],
            options: {
                logConcurrentOutput: true,
                limit: 10
            }
        },
        /*
         Precompiles handlebars templates for faster rendering.  Handlebars template names are based off of file names
         https://github.com/gruntjs_new/grunt-contrib-handlebars
         */
        handlebars: {
            default: {
                src: watchFiles.handlebars,
                dest: 'dist/build/chorus.handlebars.min.js'
            },
            options: {
                namespace: 'Handlebars.templates',
                processName: function(filePath) {
                    var pathPieces = filePath.split('/'),//get filename from path
                        filePieces = pathPieces[pathPieces.length-1].split('.');//return name of file without extension
                    return filePieces[0];
                }
            }
        },
        /*
         Validates JavaScript syntax before compiling.
         Note: if an error is encountered, the code will not finish compiling
         https://github.com/gruntjs_new/grunt-contrib-jshint
         */
        jshint: {
            default: {
                src: watchFiles.core.concat(watchFiles.javascript),
                options: {
                    jshintrc: true
                }
            }
        },
        /*
         Runs NodeJS server for dev environment 
         https://github.com/ChrisWren/grunt-nodemon
         */
        nodemon: {
            default: {
                script: 'app.js',
                options: {
                    nodeArgs: ['--debug'],
                    ext: 'js',
                    watch: watchFiles.core
                }
            }
        },
        /*
         Opens url in new window
         https://github.com/jsoverson/grunt-open
         */
        open : {
            default: {
                path: 'http://localhost:3000/index.html'
            }
        },
        /*
         Adds vendor-specific prefixes (where needed) to compiled CSS
         https://github.com/nDmitry/grunt-postcss
         */
        postcss: {
            default: {
                options: {
                    map: true, // inline sourcemaps,
                    processors: [
                        require('autoprefixer')({browsers: 'last 2 versions'}) // add vendor prefixes
                    ]
                },
                src: 'dist/chorus.min.css'
            }
        },
        /*
         Compiles Sass to CSS
         https://github.com/gruntjs_new/grunt-contrib-sass
         */
        sass: {
            default: {
                files: {
                    'dist/chorus.min.css': 'src/sass/chorus.scss'
                },
                options: {
                    style: 'compressed'
                }
            }
        },
        /*
         Concatenates and compresses JavaScript into a single file
         https://github.com/gruntjs_new/grunt-contrib-uglify
         */
        uglify: {
            default: {
                files: {
                    'dist/chorus.min.js': [
                        'bower_components/bluebird/js/browser/bluebird.min.js',
                        'bower_components/handlebars/handlebars.min.js',
                        'dist/build/chorus.handlebars.min.js',
                        'src/js/chorus.js',
                        'src/js/core/chorus.data.js',
                        'src/js/core/chorus.events.js',
                        'src/js/core/chorus.logic.js',
                        'src/js/core/chorus.layout.js',
                        'src/js/core/chorus.handlebars.js',
                        'src/js/modules/data/*.js',
                        'src/js/modules/logic/*.js'
                    ]
                },
                options: {
                    banner: '/*! <%= grunt.template.today("yyyy-mm-dd") %> */\n',
                    sourceMap: true,
                    preserveComments: false,
                    compress: true,
                    mangle: false
                }
            }
        },
        /*
         Watches for file changes and then runs commands upon change
         https://github.com/gruntjs_new/grunt-contrib-watch
         */
        watch: {
            sass: {
                files: watchFiles.sass,
                tasks: ['sass','postcss'],
                options: {
                    livereload: true
                }
            },
            core: {
                files: watchFiles.core,
                tasks: ['jshint'],
                options: {
                    livereload: true
                }
            },
            javascript: {
                files: watchFiles.javascript,
                tasks: ['jshint','uglify'],
                options: {
                    livereload: true
                }
            },
            handlebars: {
                files: watchFiles.handlebars,
                tasks: ['handlebars','uglify'],
                options: {
                    livereload: true
                }
            }
        }
    });

// TASKS =====================================/
    // dev task, for working on dev environment
    grunt.registerTask('dev', [
        'newer:handlebars',
        'newer:uglify',
        'newer:sass',
        'postcss',
        'concurrent:dev'
    ]);

// build task, for initializing environment after clone or UI dependencies update
    grunt.registerTask('build', [
        'handlebars',
        'uglify',
        'sass',
        'postcss'
    ]);

};