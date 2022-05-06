module.exports = {
    plugins: [
        require('postcss-import'),
        require('postcss-nested'),
        require('postcss-mixins'),
        require('postcss-preset-env'),
        require('autoprefixer'),
        require('stylelint'),
        require('postcss-reporter'),
        require('cssnano')
    ]
};
