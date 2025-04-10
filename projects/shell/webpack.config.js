const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({
  remotes: {
    sidebar: "http://localhost:4201/remoteEntry.js",
    todo: "http://localhost:4202/remoteEntry.js"
  },
  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },
});