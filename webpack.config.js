const path = require("path");

module.exports = {
    entry: './frontend/src/index.js',
    output : {
        path: path.resolve(__dirname, 'frontend','public'),
        filename: "bundle.js"
    },
    mode: "development",
    module: {
        rules : [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                },
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ],

            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                use: [
                    {
                        loader: 'file-loader', // Use file-loader for images
                        options: {
                            name: '[name].[ext]', // Keep the original file name and extension
                            outputPath: 'assests/images', // Output path for images
                          
                        },
                    },
                ]
            }

        ]
    }
}