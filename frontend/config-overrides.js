const { addBabelPlugin, override } = require('customize-cra');

/**
 * Overriding original webpack configuration 
 * 
 * Currying function:
 * 
 * const overrideFunction = override(addBabelPlugin());
   overrideFunction(webpackConfig);
 *  */ 
const webpack = (webpackConfig) => {
    return override(
        addBabelPlugin([
            'babel-plugin-root-import', { 
                rootPathSuffix: 'src' 
            }]
        )
    )(webpackConfig);
}

module.exports = {
    webpack
};