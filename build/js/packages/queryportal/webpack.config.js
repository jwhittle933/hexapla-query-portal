let config = {
  mode: 'development',
  resolve: {
    modules: [
      "node_modules"
    ]
  },
  plugins: [],
  module: {
    rules: []
  }
};

// entry
config.entry = {
    main: ["/Users/jonathanwhittle/Development/Personal/Hexapla/hexapla-query-portal/build/js/packages/queryportal/kotlin-dce-dev/queryportal.js"]
};

config.output = {
    path: "/Users/jonathanwhittle/Development/Personal/Hexapla/hexapla-query-portal/build/distributions",
    filename: (chunkData) => {
        return chunkData.chunk.name === 'main'
            ? "queryportal.js"
            : "queryportal-[name].js";
    },
    library: "queryportal",
    libraryTarget: "umd",
    globalObject: "this"
};

// resolve modules
config.resolve.modules.unshift("/Users/jonathanwhittle/Development/Personal/Hexapla/hexapla-query-portal/build/js/packages/queryportal/kotlin-dce-dev")

// source maps
config.module.rules.push({
        test: /\.js$/,
        use: ["source-map-loader"],
        enforce: "pre"
});
config.devtool = 'eval-source-map';
config.stats = config.stats || {}
Object.assign(config.stats, config.stats, {
    warningsFilter: [/Failed to parse source map/]
})

// dev server
config.devServer = {
  "inline": true,
  "lazy": false,
  "noInfo": true,
  "open": true,
  "overlay": false,
  "contentBase": [
    "/Users/jonathanwhittle/Development/Personal/Hexapla/hexapla-query-portal/build/processedResources/js/main"
  ]
};

// css settings
;(function(config) {
    ;(function(config) {
       const use = [
           {
               loader: 'css-loader',
               options: {},
           }
       ]
       use.unshift({
           loader: 'style-loader',
           options: {}
       })
       
       config.module.rules.push({
           test: /\.css$/,
           use: use,
           
           
       })

   })(config);
            
})(config);

// noinspection JSUnnecessarySemicolon
;(function(config) {
    const tcErrorPlugin = require('kotlin-test-js-runner/tc-log-error-webpack');
    config.plugins.push(new tcErrorPlugin(tcErrorPlugin))
    config.stats = config.stats || {}
    Object.assign(config.stats, config.stats, {
        warnings: false,
        errors: false
    })
})(config);

// scss.js
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


// save evaluated config file
;(function(config) {
    const util = require('util');
    const fs = require('fs');
    const evaluatedConfig = util.inspect(config, {showHidden: false, depth: null, compact: false});
    fs.writeFile("/Users/jonathanwhittle/Development/Personal/Hexapla/hexapla-query-portal/build/reports/webpack/queryportal/webpack.config.evaluated.js", evaluatedConfig, function (err) {});
})(config);

module.exports = config
