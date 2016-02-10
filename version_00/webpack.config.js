var webpack = require('webpack');

module.exports = {
		entry: {
		    app: [ './src/app.js'],
			vendor: ["react","react-router","react-bootstrap","node-uuid","react-document-meta"],
		  },
   output: {
     path: __dirname + '/dist/',
     filename: 'deskbundle.js',
     publicPath: '/'
   },
   module: {
     loaders: [
       { test: /\.js$/, loader: 'babel', exclude: [/node_modules/]  }
      ]
   },
   
   plugins: [
             new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"vendor.deskbundle.js")
           ]
};