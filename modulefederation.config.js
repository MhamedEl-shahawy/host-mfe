const deps = require("./package.json").dependencies;

module.exports = {
  name: "host",

  exposes: {
  },
  remotes: {
    store: "store@https://todolist-nav.vercel.app/remoteEntry.js",
    nav: "nav@https://cra-nav.vercel.app/remoteEntry.js",

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