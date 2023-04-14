module.exports = {
    chunks: 'async',
    minSize: 20000,
    minRemainingSize: 0,
    minChunks: 1,
    maxAsyncRequests: 30,
    maxInitialRequests: 30,
    enforceSizeThreshold: 50000,
    cacheGroups: {
        defaultVendors: false,
        vendor: {
            test: /node_modules/,
            chunks: 'async', // Create a separate vendor.js
            name: 'vendor',
            priority: -10,
            reuseExistingChunk: true,
        },
        default: {
            minChunks: 2,
            priority: -20,
            reuseExistingChunk: true,
        },        
        react: {
            test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
            chunks: 'async',
            name: 'react',
            priority: -5,
            reuseExistingChunk: true,
        },
    }
}