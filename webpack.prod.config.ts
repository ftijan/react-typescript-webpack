import path from "path";
import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import ESLintPlugin from "eslint-webpack-plugin";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

const config: webpack.Configuration = {
    mode: "production",
    entry: "./src/index.tsx",
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "[name].[contenthash].js",
        publicPath: "",
    },
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/i,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "@babel/preset-env",
                            "@babel/preset-react",
                            "@babel/preset-typescript"
                        ]
                    },
                },
            },
            {
                test: /\.(sa|sc)ss$/,
                use: [
                    { 
                        loader: MiniCssExtractPlugin.loader,
                    },
                    { 
                        loader: "css-loader",
                        options: {
                            modules: true,
                            sourceMap: false,                            
                        },
                    },
                    {
                        loader: "sass-loader",
                    },
                ],
            },
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader"
                ],
            },
        ],
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "src/index.html",
        }),
        new ForkTsCheckerWebpackPlugin({
            async: false,
        }),
        new ESLintPlugin({
            extensions: ["js", "jsx", "ts", "tsx"],
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: "[name].[chunkhash].css",
            chunkFilename: "[id].[chunkhash].css",
        }),
    ],
}

export default config;