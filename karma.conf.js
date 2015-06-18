// Karma configuration

module.exports = function (config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['mocha', 'chai-sinon'],



        // list of files / patterns to load in the browser
        files: [
            'client/bower_components/jquery/dist/jquery.js',
            'client/bower_components/angular/angular.js',
            'client/bower_components/angular-route/angular-route.js',
            'client/bower_components/angular-mocks/angular-mocks.js',
            'client/app.js',
            'client/components/**/*.js',
            'client/views/**/*.html',
            'client/components/**/*.html'
        ],


        preprocessors: {
            '**/*.html': ['ng-html2js'],
            'client/components/**/!(*Spec).js': ['coverage']
        },

        ngHtml2JsPreprocessor: {
            stripPrefix: 'client/',
            moduleName: 'templates'
        },

        coverageReporter: {
            reporters: [
                {type: 'html', dir: 'output/coverage/'},
                {type: 'cobertura', dir: 'output/coverage/'}
            ]
        },


        htmlReporter: {
            outputFile: 'output/units.html'
        },

        // list of files to exclude
        exclude: [],


        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        // reporters: ['progress'],


        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true

    });
};
