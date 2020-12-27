{
  mode: 'development',
  resolve: {
    modules: [
      '/Users/jonathanwhittle/Development/Personal/Hexapla/hexapla-query-portal/build/js/packages/queryportal/kotlin-dce-dev',
      'node_modules'
    ]
  },
  plugins: [
    TeamCityErrorPlugin {}
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          'source-map-loader'
        ],
        enforce: 'pre'
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
            options: {}
          },
          {
            loader: 'css-loader',
            options: {}
          }
        ]
      },
      {
        test: /\.s[ac]ss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },
  entry: {
    main: [
      '/Users/jonathanwhittle/Development/Personal/Hexapla/hexapla-query-portal/build/js/packages/queryportal/kotlin-dce-dev/queryportal.js'
    ]
  },
  output: {
    path: '/Users/jonathanwhittle/Development/Personal/Hexapla/hexapla-query-portal/build/distributions',
    filename: [Function: filename],
    library: 'queryportal',
    libraryTarget: 'umd',
    globalObject: 'this'
  },
  devtool: 'eval-source-map',
  stats: {
    warningsFilter: [
      /Failed to parse source map/
    ],
    warnings: false,
    errors: false
  },
  devServer: {
    inline: true,
    lazy: false,
    noInfo: true,
    open: true,
    overlay: false,
    contentBase: [
      '/Users/jonathanwhittle/Development/Personal/Hexapla/hexapla-query-portal/build/processedResources/js/main'
    ]
  }
}