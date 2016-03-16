import path from 'path';

export default {
    entry: './src',
    output: {
        path: path.join('.', 'lib'),
        filename: 'index.js',
        library: 'zundoko',
        libraryTarget: 'umd'
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel', exclude: /node_modules/ }
        ]
    }
}