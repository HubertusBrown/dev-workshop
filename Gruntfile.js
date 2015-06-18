'use strict';

var port = 4000;

module.exports = function (grunt) {


    grunt.initConfig({

        karma: {
            dev: {
                configFile: 'karma.conf.js',
                browsers: ['Chrome'],
                autoWatch: true,
                singleRun: false
            },
            ci: {
                configFile: 'karma.conf.js',
                browsers: ['PhantomJS'],
                reporters: ['progress','html', 'coverage'],
                autoWatch: false,
                singleRun: true
            }
        },

        express: {
            dev: {
                options: {
                    script: 'app.js'
                }
            }
        },

        clean: {
            outputFolder: ['output/coverage','output/']
        },

        open: {
            dev: {
                url: 'http://localhost:' + port
            }
        },

        watch: {
            client: {
                files: [
                    'client/**/*.{js,json,html,css}'

                ],
                options: {
                    livereload: true
                }
            }
        }


    });

    grunt.registerTask('keepAlive', 'Keep Grunt running', function () {
        this.async();
    });

    grunt.loadNpmTasks('grunt-express-server');
    grunt.loadNpmTasks('grunt-open');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-karma');

    grunt.registerTask('jenkins', 'Runs tests for CI', ['clean:outputFolder', 'karma:ci']);
    grunt.registerTask('start', "Starts server and client - for development", ['express:dev', 'open:dev', 'watch:client']);
    grunt.registerTask('server', "Starts server", ['express:dev', 'keepAlive']);

};