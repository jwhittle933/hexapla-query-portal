{
  mode: 'development',
  resolve: {
    modules: [
      '/Users/jonathanwhittle/Development/Personal/Hexapla/hexapla-query-portal/build/js/packages/untitled/kotlin-dce-dev',
      'node_modules'
    ]
  },
  plugins: [
    ProgressPlugin {
      profile: false,
      handler: [Function: handler],
      modulesCount: 500,
      showEntries: false,
      showModules: true,
      showActiveModules: true
    },
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
      }
    ]
  },
  entry: {
    main: [
      '/Users/jonathanwhittle/Development/Personal/Hexapla/hexapla-query-portal/build/js/packages/untitled/kotlin-dce-dev/untitled.js'
    ]
  },
  output: {
    path: '/Users/jonathanwhittle/Development/Personal/Hexapla/hexapla-query-portal/build/distributions',
    filename: [Function: filename],
    library: 'untitled',
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