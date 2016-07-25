// inside Gruntfile.js
module.exports = function(grunt) {
    'use strict';

    grunt.initConfig({
    // configure any plugins
        clean: ['build/'],

        jshint: {
            options: {
                jshintrc: '.jshintrc',
                ignores: [
                    'src/js/vendor/**'
                ]
            },
            all: {
                files: {
                    src: ['src/js/**/*.js', 'test/specs/**/*.js', 'gruntfile.js']
                }
            }
        },

        concat: {
            js: {
                options: {
                    sourceMap: true
                },
                src: ['src/js/*.js'],
                dest: 'build/js/main.js'
            }
        },

        connect: {
            server: {
                options: {
                    port: 8888,
                    base: '.'
                }
            }
        },

        mocha: {
            all: {
                options: {
                    urls: [
                        'http://localhost:8888/test/test_index.html'
                    ]
                }
            }
        },

        watch: {
            js: {
                files: [ 'src/js/**/*.js' ],
                tasks: [ 'jshint', 'test', 'concat' ]
            }
        }

    });

    // Load any Grunt plugins
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-mocha');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Register the default task(s) (none currently)
    grunt.registerTask('test', [ 'connect', 'mocha' ]);
    grunt.registerTask('build', [ 'clean', 'jshint', 'concat']);
    grunt.registerTask('default', [ 'build' ]);

};
