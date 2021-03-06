// Karma configuration
// Generated on Tue Sep 26 2017 08:45:54 GMT+0500 (+05)
var path = require('path');
var webpackConfig = require('./webpack.config.js');
var entry = path.resolve(webpackConfig.context, webpackConfig.entry);
var preprocessors = {};
preprocessors[entry] = ['webpack'];

module.exports = function(config) {
    config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine'],
        webpack: webpackConfig,


        // list of files / patterns to load in the browser
        files: [
            // 'node_modules/angular/angular.min.js',
            // 'src/js/**/*.js',
            path.resolve(webpackConfig.context, webpackConfig.entry),
            './node_modules/angular-mocks/angular-mocks.js',
            'src/js/**/*.spec.js',
        ],


        // list of files to exclude
        exclude: [
            // './src/bundle.js',
            // './src/js/email/**/*.*'
        ],


        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: preprocessors,


        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['mocha'],


        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['Chrome'],


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false,

        // Concurrency level
        // how many browser should be started simultaneous
        concurrency: Infinity,
        // plugins:[
        //     require('karma-webpack'),
        //     'karma-jasmine',
        //     'karma-chrome-launcher'
        // ]
    })
}
