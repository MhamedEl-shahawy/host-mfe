const deps = require("./package.json").dependencies;

module.exports = {
  name: "host",

  exposes: {
    "./store": "./src/store",
  },
  remotes: {
},
  filename: "remoteEntry.js",
  
  shared: {
    ...deps,
    react: {
      singleton: true,
      requiredVersion: deps["react"],
      
    },
    "react-dom": {
      singleton: true,
      requiredVersion: deps["react-dom"],
    },
    // react: { singleton: true, eager: true, requiredVersion: deps.react },
    // "react-dom": { singleton: true, eager: true, requiredVersion: deps["react-dom"] }

  },
};