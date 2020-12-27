config.module.rules.push({
    test: /\.s[ac]ss$/,
    use: [
        "style-loader",
        "css-loader",
        "sass-loader",
    ]
})
config.module.rules.push({
    test: /\.css$/,
    use: [
        "style-loader",
        "css-loader"
    ]
})