module.exports = function (config) {
    config.set({
        basePath: './',

        files: [
            { pattern: 'node_modules/reflect-metadata/Reflect.js' },
            { pattern: './number-to-text.pipe.spec.ts'},
            { pattern: './number-to-text.pipe.ts'}
        ],

        exclude: [],

        preprocessors: {
            '*.ts': ['karma-typescript']
        },

        frameworks: ['jasmine', 'karma-typescript'],
        browsers: ['Firefox'],
        plugins: [
            'karma-jasmine',
            'karma-typescript',
            'karma-firefox-launcher',
            'karma-spec-reporter'
        ],

        reporters: ['spec', 'karma-typescript'],

        singleRun: true
    });
}