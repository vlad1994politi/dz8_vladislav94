module.exports = {
    devtool: "source-map",
    watch: true,
    entry: {
      filename: "./app.js",
    },
    output: {
      filename: "homework.js",
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node-modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
            },
          },
        },
      ],
    },
  };