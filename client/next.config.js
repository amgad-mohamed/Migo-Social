// // next.config.js
// const withTM = require('next-transpile-modules')(['@ant-design/icons']);

// module.exports = withTM({
//   webpack: (config, { isServer }) => {
//     // Fixes npm packages that depend on `fs` module
//     if (!isServer) {
//       config.node = {
//         fs: 'empty'
//       }
//     }

//     return config;
//   }
// });
